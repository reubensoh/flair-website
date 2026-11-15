// Universal link association for Flair share codes (build 52, the PO 15 Nov).
// Apple fetches this from the exact host in the app's entitlement and does not follow redirects;
// the apex redirects to www, so the entitlement must be applinks:www.flairhealth.app (agreed with D).
// The share payload lives in the URL fragment, which is never sent to this server and is not matched here.
//
// PLACEHOLDER: TEAM_ID and BUNDLE_ID come from D. scripts/check-share.mjs fails the build while either is unset.
const TEAM_ID = "TEAMID_FROM_D";
const BUNDLE_ID = "BUNDLE_ID_FROM_D";

export const dynamic = "force-static";

export function GET() {
  const body = {
    applinks: {
      details: [
        {
          appIDs: [`${TEAM_ID}.${BUNDLE_ID}`],
          components: [{ "/": "/share", comment: "Flair share code; the payload is in the fragment and never sent" }],
        },
      ],
    },
  };
  return new Response(JSON.stringify(body), {
    headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=3600" },
  });
}
