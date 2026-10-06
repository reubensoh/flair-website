import { createHash, createHmac, createSign, timingSafeEqual } from "node:crypto";

export const SOURCES = [
  { value: "instagram", label: "Instagram" },
  { value: "x", label: "X" },
  { value: "facebook", label: "Facebook" },
  { value: "friend", label: "A friend" },
  { value: "other", label: "Somewhere else" },
] as const;

export const CONSENT_TEXT = "I am 18 or older, and I agree to be emailed about the beta.";

export const REMOVAL_LINE = "To leave the list, email support@flairhealth.app from the address you gave us, and we delete your row.";

// Derived from the visible text, so the stored version cannot drift from what the person saw.
export function consentVersion(): string {
  return "c-" + createHash("sha256").update(CONSENT_TEXT + "\n" + REMOVAL_LINE).digest("hex").slice(0, 8);
}

const REGION_CODES =
  "AF AX AL DZ AS AD AO AI AG AR AM AW AU AT AZ BS BH BD BB BY BE BZ BJ BM BT BO BQ BA BW BR IO BN BG BF BI CV KH CM CA KY CF TD CL CN CX CC CO KM CG CD CK CR CI HR CU CW CY CZ DK DJ DM DO EC EG SV GQ ER EE SZ ET FK FO FJ FI FR GF PF GA GM GE DE GH GI GR GL GD GP GU GT GG GN GW GY HT VA HN HK HU IS IN ID IR IQ IE IM IL IT JM JP JE JO KZ KE KI KP KR KW KG LA LV LB LS LR LY LI LT LU MO MG MW MY MV ML MT MH MQ MR MU YT MX FM MD MC MN ME MS MA MZ MM NA NR NP NL NC NZ NI NE NG NU NF MK MP NO OM PK PW PS PA PG PY PE PH PN PL PT PR QA RE RO RU RW BL SH KN LC MF PM VC WS SM ST SA SN RS SC SL SG SX SK SI SB SO ZA SS ES LK SD SR SJ SE CH SY TW TJ TZ TH TL TG TK TO TT TN TR TM TC TV UG UA AE GB US UY UZ VU VE VN VG VI WF EH YE ZM ZW".split(
    " ",
  );

let countryCache: { code: string; name: string }[] | null = null;

export function countries(): { code: string; name: string }[] {
  if (!countryCache) {
    const names = new Intl.DisplayNames(["en"], { type: "region" });
    const list = REGION_CODES.map((code) => ({ code, name: names.of(code) ?? code }));
    list.sort((a, b) => a.name.localeCompare(b.name, "en"));
    const sg = list.findIndex((c) => c.code === "SG");
    countryCache = [list[sg], ...list.filter((_, i) => i !== sg)];
  }
  return countryCache;
}

const MIN_AGE_MS = 3_000;
const MAX_AGE_MS = 6 * 60 * 60 * 1000;

function sign(issuedAt: string): string {
  return createHmac("sha256", process.env.BETA_FORM_SECRET ?? "").update(issuedAt).digest("base64url");
}

// Empty when the secret is not configured, so the page still renders and every submit is rejected.
export function issueToken(): string {
  if (!process.env.BETA_FORM_SECRET) return "";
  const issuedAt = String(Date.now());
  return `${issuedAt}.${sign(issuedAt)}`;
}

export function tokenIsValid(token: string): boolean {
  if (!process.env.BETA_FORM_SECRET) return false;
  const [issuedAt, mac] = token.split(".");
  if (!issuedAt || !mac || !/^\d{10,15}$/.test(issuedAt)) return false;
  const expected = Buffer.from(sign(issuedAt));
  const given = Buffer.from(mac);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return false;
  const age = Date.now() - Number(issuedAt);
  return age >= MIN_AGE_MS && age <= MAX_AGE_MS;
}

export type Submission = { email: string; country: string; source: string; handle: string };

const EMAIL_RE =
  /^[A-Za-z0-9][A-Za-z0-9._%+-]*@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/;

function clean(value: FormDataEntryValue | null, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, max + 1);
}

export function parseSubmission(form: FormData): Submission | null {
  const email = clean(form.get("email"), 254).toLowerCase();
  const countryCode = clean(form.get("country"), 2);
  const source = clean(form.get("source"), 20);
  const handle = clean(form.get("handle"), 60).replace(/^@/, "");

  if (email.length > 254 || !EMAIL_RE.test(email)) return null;
  const country = countries().find((c) => c.code === countryCode);
  if (!country) return null;
  if (!SOURCES.some((s) => s.value === source)) return null;
  if (handle.length > 60) return null;
  if (form.get("consent") !== "on") return null;

  return { email, country: country.name, source, handle };
}

// Spreadsheet formula injection: a cell that starts with one of these can run as a formula when exported.
export function neutralise(value: string): string {
  return /^[=+\-@\t\r]/.test(value) ? "'" + value : value;
}

const TOKEN_URL = process.env.BETA_TEST_TOKEN_URL ?? "https://oauth2.googleapis.com/token";
const SHEETS_BASE = process.env.BETA_TEST_SHEETS_BASE ?? "https://sheets.googleapis.com";

let cachedAccess: { token: string; expiresAt: number } | null = null;

async function accessToken(): Promise<string> {
  if (cachedAccess && cachedAccess.expiresAt > Date.now() + 60_000) return cachedAccess.token;

  const email = process.env.GOOGLE_SA_EMAIL;
  const key = process.env.GOOGLE_SA_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (!email || !key) throw new Error("not configured");

  const now = Math.floor(Date.now() / 1000);
  const b64 = (o: object) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const unsigned =
    b64({ alg: "RS256", typ: "JWT" }) +
    "." +
    b64({ iss: email, scope: "https://www.googleapis.com/auth/spreadsheets", aud: TOKEN_URL, iat: now, exp: now + 3600 });
  const signature = createSign("RSA-SHA256").update(unsigned).sign(key, "base64url");

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsigned}.${signature}`,
    }),
  });
  if (!res.ok) throw new Error(`token ${res.status}`);
  const json = (await res.json()) as { access_token?: string; expires_in?: number };
  if (!json.access_token) throw new Error("token missing");
  cachedAccess = { token: json.access_token, expiresAt: Date.now() + (json.expires_in ?? 3600) * 1000 };
  return cachedAccess.token;
}

// Columns: submitted_at, email, country, source, handle, consent_version.
// Returns "added" or "duplicate". Throws on any failure; messages never contain submitted values.
export async function addToList(s: Submission): Promise<"added" | "duplicate"> {
  const sheetId = process.env.BETA_SHEET_ID;
  const tab = process.env.BETA_SHEET_TAB || "Beta";
  if (!sheetId) throw new Error("not configured");

  const token = await accessToken();
  const auth = { Authorization: `Bearer ${token}` };
  const base = `${SHEETS_BASE}/v4/spreadsheets/${encodeURIComponent(sheetId)}/values`;

  const existing = await fetch(`${base}/${encodeURIComponent(tab + "!B:B")}?majorDimension=COLUMNS`, { headers: auth });
  if (!existing.ok) throw new Error(`read ${existing.status}`);
  const col = ((await existing.json()) as { values?: string[][] }).values?.[0] ?? [];
  if (col.some((v) => v.trim().toLowerCase() === s.email)) return "duplicate";

  const row = [new Date().toISOString(), s.email, s.country, s.source, s.handle, consentVersion()].map(neutralise);
  const res = await fetch(
    `${base}/${encodeURIComponent(tab + "!A:F")}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    { method: "POST", headers: { ...auth, "Content-Type": "application/json" }, body: JSON.stringify({ values: [row] }) },
  );
  if (!res.ok) throw new Error(`append ${res.status}`);
  return "added";
}
