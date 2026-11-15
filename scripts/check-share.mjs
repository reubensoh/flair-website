// Pins the /share privacy rule and the association file. Runs as postbuild, so a violation fails the deploy.
import { readFileSync } from "node:fs";

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

if (fail.length) { console.error("check-share FAILED:\n- " + fail.join("\n- ")); process.exit(1); }
console.log("check-share: /share has no JavaScript and cannot read the fragment; association file set.");
