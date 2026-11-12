// Fails the build if any page could make a visitor's browser contact another host on load:
// external scripts, styles, fonts, images, frames or media, a tag-manager or analytics package,
// or a known tracker host in the client bundle. Plain <a href> links are allowed: they load nothing.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const problems = [];

function walk(dir, test, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, test, out);
    else if (test(p)) out.push(p);
  }
  return out;
}
const rel = (p) => relative(root, p);

// 1. Prerendered HTML: any resource-loading tag pointing off-site.
const RESOURCE_TAG =
  /<(script|link|img|iframe|frame|source|video|audio|embed|object|track|image|use)\b[^>]*?\s(?:src|href|srcset|poster|data|xlink:href)\s*=\s*["']?\s*(?:https?:)?\/\//gi;
for (const f of walk(join(root, ".next/server/app"), (p) => p.endsWith(".html"))) {
  for (const m of readFileSync(f, "utf8").matchAll(RESOURCE_TAG)) problems.push(`${rel(f)}: <${m[1]}> loads an off-site URL`);
}

// 2. Built CSS: off-site url() or @import. data: URIs are allowed.
const CSS_REMOTE = /(?:url\(\s*["']?\s*(?:https?:)?\/\/|@import\s+(?:url\()?\s*["']?(?:https?:)?\/\/)/gi;
for (const f of walk(join(root, ".next/static"), (p) => p.endsWith(".css"))) {
  if (CSS_REMOTE.test(readFileSync(f, "utf8"))) problems.push(`${rel(f)}: CSS loads an off-site URL`);
  CSS_REMOTE.lastIndex = 0;
}

// 3. Client JavaScript: known analytics, tag-manager, pixel and session-replay hosts.
const TRACKERS =
  /(google-analytics\.com|googletagmanager\.com|doubleclick\.net|connect\.facebook\.net|facebook\.com\/tr|vercel-insights\.com|va\.vercel-scripts\.com|_vercel\/insights|_vercel\/speed-insights|plausible\.io|cdn\.segment\.com|api\.segment\.io|static\.hotjar\.com|clarity\.ms|posthog\.com|mixpanel\.com|amplitude\.com|sentry\.io|fullstory\.com|tiktok\.com\/i18n\/pixel|snap\.licdn\.com|analytics\.twitter\.com|fonts\.googleapis\.com|fonts\.gstatic\.com|use\.typekit\.net)/i;
for (const f of walk(join(root, ".next/static"), (p) => p.endsWith(".js"))) {
  const m = readFileSync(f, "utf8").match(TRACKERS);
  if (m) problems.push(`${rel(f)}: client bundle references ${m[1]}`);
}

// 4. Source: dynamic pages are not prerendered, so check the JSX too.
const JSX_REMOTE =
  /<(script|img|iframe|link|source|video|audio|embed|object|Image|Script)\b[^>]*?\b(?:src|href|srcSet|poster)\s*=\s*\{?\s*["'`]\s*(?:https?:)?\/\//g;
for (const f of walk(join(root, "app"), (p) => /\.(tsx|jsx|ts|js)$/.test(p))) {
  const src = readFileSync(f, "utf8");
  for (const m of src.matchAll(JSX_REMOTE)) problems.push(`${rel(f)}: <${m[1]}> loads an off-site URL`);
  if (/from\s+["']next\/script["']/.test(src)) problems.push(`${rel(f)}: imports next/script`);
}

// 5. Dependencies that exist to send visitor data elsewhere.
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const deps = Object.keys({ ...pkg.dependencies, ...pkg.devDependencies });
const DENY = /^(@vercel\/analytics|@vercel\/speed-insights|@next\/third-parties|react-ga4?|react-gtm-module|@segment\/|posthog-js|mixpanel|@amplitude\/|@sentry\/|hotjar|@hotjar\/|react-facebook-pixel|@fullstory\/)/;
for (const d of deps) if (DENY.test(d)) problems.push(`package.json: dependency ${d}`);

if (problems.length) {
  console.error("\nOff-site check FAILED. Nothing a page loads may come from another host.\n");
  for (const p of problems) console.error("  - " + p);
  console.error("");
  process.exit(1);
}
console.log("Off-site check passed: no page loads anything from another host.");
