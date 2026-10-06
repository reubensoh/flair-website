# Beta sign-up form: how it works and how to set it up

The landing page posts a plain HTML form to `/api/beta` on our own domain (`app/api/beta/route.ts`, helpers in `lib/beta.ts`). The route validates the request and appends one row to a Google Sheet owned by Regal Pines. No script, frame or cookie from any other company is on the page, and the route sets no cookie.

## What is stored (one row per person)

`submitted_at`, `email` (lowercased), `country`, `source`, `handle`, `consent_version`.

- `consent_version` is derived from the exact consent and removal text on the page, so it changes whenever that text changes.
- No IP address is stored. The email is never written to logs; a failed write logs only a status code.
- A repeat of an address already on the list is accepted silently and not added twice.

## Setup (the PO's accounts, not ours to create)

1. In Google Cloud, create a project, enable the Google Sheets API, create a service account and download its JSON key.
2. Create one Sheet for production and a separate one for previews. Name the tab `Beta` and put this header in row 1: `submitted_at, email, country, source, handle, consent_version`.
3. Share each Sheet with the service account's email address (Editor) and with the PO only. Never "anyone with the link".
4. In Vercel, set these environment variables. Use different values for Production and Preview: the Preview sheet and key must never be the production ones.

| Variable | Value |
|---|---|
| `GOOGLE_SA_EMAIL` | `client_email` from the key |
| `GOOGLE_SA_PRIVATE_KEY` | `private_key` from the key (the `\n` sequences may stay as they are) |
| `BETA_SHEET_ID` | the Sheet's id from its URL |
| `BETA_SHEET_TAB` | `Beta` (optional; this is the default) |
| `BETA_FORM_SECRET` | a long random string, different per environment |

Two optional variables, `BETA_TEST_TOKEN_URL` and `BETA_TEST_SHEETS_BASE`, exist only to point a local test at a mock server. Leave them unset in Vercel.

If any variable is missing the page still loads, and every submission is rejected with the form's error message.

## Spam defenses

A hidden trap field, a signed token that must be at least 3 seconds and at most 6 hours old, an 8 KB body cap, strict field validation, and dedupe on email. Per-IP rate limiting is not built; it needs either a Vercel Firewall rule (plan-dependent) or a data store.

## Operating controls

- No row is emailed until the PO approves it by hand.
- An unapproved row is deleted, never kept.

## Removing someone

Delete their row in the Sheet, and remove any TestFlight invite. People ask by emailing support@flairhealth.app from the address they gave. Retention and the removal route are stated in the privacy policy's section 16 and in the line under the tick box.
