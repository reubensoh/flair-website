// /share: where a Flair share code lands when Flair is not installed (build 52, the PO 15 Nov).
//
// PRIVACY: the shared data is in the URL fragment (#...). Browsers never send the fragment to the server,
// so it never reaches Flair's server or Vercel's logs, which see only "/share". This page must never read it:
// it is plain HTML with NO JavaScript at all (no Next.js runtime, no analytics, no third-party anything),
// and its Content-Security-Policy forbids every script. scripts/check-share.mjs pins this at build time.
//
// Words: PROPOSED for counsel (Web Dev, 15 Nov), except the subtitle, which is counsel's of 16 Oct.
// No-app offer (the PO, 15 Nov): a link to our homepage, for now.
// PRE-LAUNCH (register row, the architect): before the App Store candidate, replace the homepage link with the App Store
// page, and Google Play if an Android build exists, once the store link exists. check-share.mjs forbids off-site URLs, so
// that change must also allow the store URL explicitly.

const HTML = `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<meta name="referrer" content="no-referrer">
<title>Flair Health</title>
<style>
  :root { color-scheme: light dark; --bg: #EFEFEF; --fg: #201E4B; --muted: rgba(32,30,75,.6); --accent: #9156F1; }
  @media (prefers-color-scheme: dark) { :root { --bg: #201E4B; --fg: #ECE9E7; --muted: rgba(236,233,231,.6); } }
  html, body { margin: 0; background: var(--bg); color: var(--fg); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  main { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 48px 16px; box-sizing: border-box; gap: 20px; max-width: 420px; margin: 0 auto; }
  img { width: 72px; height: 72px; border-radius: 20px; }
  h1 { font-size: 24px; margin: 0; }
  p { margin: 0; line-height: 1.5; }
  .muted { color: var(--muted); font-size: 15px; }
  nav { display: flex; gap: 16px; font-size: 14px; }
  a { color: var(--accent); }
</style>
</head>
<body>
<main>
  <img src="/app_icon.png" alt="">
  <h1>Flair Health</h1>
  <p>Someone shared something from Flair with you. To see it, open this link on an iPhone that has Flair installed.</p>
  <p><a href="/">Learn more about Flair</a></p>
  <p class="muted">Your health data is kept on your phone. When you send any of it to AI, you get a receipt.</p>
  <nav><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a></nav>
</main>
</body>
</html>
`;

export const dynamic = "force-static";

export function GET() {
  return new Response(HTML, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Security-Policy":
        "default-src 'none'; script-src 'none'; style-src 'unsafe-inline'; img-src 'self'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",
      "Referrer-Policy": "no-referrer",
      "X-Robots-Tag": "noindex",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
