// Pins the /share privacy rule and the association file. Runs as postbuild, so a violation fails the deploy.
import { readFileSync, existsSync } from "node:fs";

const fail = [];
const share = readFileSync("app/share/route.ts", "utf8");
const html = share.slice(share.indexOf("const HTML = `") + 14, share.indexOf("`;"));
const code = share.replace(/\/\/.*$/gm, "");

if (/<script/i.test(html)) fail.push("/share HTML contains a <script> tag");
if (/\bon[a-z]+\s*=/i.test(html)) fail.push("/share HTML contains an inline event handler");
if (/location|hash|URLSearchParams|document\.|window\./.test(code.replace(html, ""))) fail.push("/share route code touches location, hash or the DOM");
if (/https?:\/\//i.test(html)) fail.push("/share HTML loads or links an off-site URL");
if (!/script-src 'none'/.test(share) || !/default-src 'none'/.test(share)) fail.push("/share CSP must forbid all scripts");
if (/"use client"|from\s+["']react/.test(share)) fail.push("/share must not be a React page");

const aasa = readFileSync("app/.well-known/apple-app-site-association/route.ts", "utf8");
if (/TEAMID_FROM_D|BUNDLE_ID_FROM_D/.test(aasa)) {
  const msg = "apple-app-site-association still has the TEAM_ID or BUNDLE_ID placeholder (D supplies them)";
  if (process.env.VERCEL_ENV === "production") fail.push(msg); else console.warn("check-share WARNING: " + msg);
}
if (!/"\/": "\/share"/.test(aasa)) fail.push("apple-app-site-association must match /share");

// The BUILT page (counsel 54be06e10 §2(a)): what Vercel actually serves for /share.
const body = ".next/server/app/share.body", meta = ".next/server/app/share.meta";
if (!existsSync(body) || !existsSync(meta)) fail.push("built /share not found (run after next build); it must stay prerendered");
else {
  const b = readFileSync(body, "utf8"), h = JSON.parse(readFileSync(meta, "utf8")).headers || {};
  if (/<script|<iframe|<embed|<object|<link\b|@import|@font-face/i.test(b)) fail.push("built /share has a script, frame, embed, link tag, @import or @font-face");
  for (const m of b.matchAll(/\b(?:src|href|action|srcset)\s*=\s*["']([^"']*)["']/gi)) {
    const u = m[1];
    if (!(u.startsWith("/") && !u.startsWith("//")) && !/^https:\/\/(www\.)?flairhealth\.app(\/|$)/.test(u)) fail.push("built /share loads or links off-site: " + u);
  }
  for (const m of b.matchAll(/url\(\s*["']?([^"')]*)/gi)) if (!m[1].startsWith("/")) fail.push("built /share CSS url() off-site: " + m[1]);
  const csp = h["content-security-policy"] || "";
  if (!/default-src 'none'/.test(csp) || !/script-src 'none'/.test(csp)) fail.push("built /share CSP must forbid scripts");
  if ((h["referrer-policy"] || "") !== "no-referrer") fail.push("built /share must send Referrer-Policy: no-referrer");
  if (Object.keys(h).some((k) => k.toLowerCase() === "set-cookie")) fail.push("built /share sets a cookie");
  if (/localStorage|sessionStorage|indexedDB|document\.cookie/.test(b)) fail.push("built /share touches browser storage or cookies");
}
const ab = ".next/server/app/.well-known/apple-app-site-association.body";
if (existsSync(ab)) {
  const j = JSON.parse(readFileSync(ab, "utf8"));
  const comps = j.applinks.details.flatMap((d) => d.components || []);
  if (comps.length !== 1 || comps[0]["/"] !== "/share" || j.applinks.details.some((d) => d.paths)) fail.push("apple-app-site-association must claim /share only");
}

if (fail.length) { console.error("check-share FAILED:\n- " + fail.join("\n- ")); process.exit(1); }
console.log("check-share: built /share has no JavaScript, no off-site request, no cookie, no-referrer; it cannot read the fragment; the association file claims /share only.");
