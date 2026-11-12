# Policy Change Log

This is the audit record for `app/privacy/page.tsx` (Privacy Policy) and
`app/terms/page.tsx` (Terms of Service). Every numbered row is a change to
the published legal text itself: wording, section structure, or disclosed
data fields. Non-substantive changes are recorded separately, dated but
unnumbered; see "What counts as a version" below. Purely cosmetic commits
(styling, color tokens) are not policy changes and are not listed here.

## History must never be rewritten

This log and the commits it points to are the audit trail for what this
site told users, and when. Anyone with write access to this repository, now
or in a future migration, must preserve that trail intact:

- No force-push to `main` or to any branch this log has ever pointed a
  commit hash at.
- No rebase of published history. A commit hash in this log must always
  resolve to the same content forever.
- No history-cleanup tools (git filter-branch, BFG Repo-Cleaner, or
  equivalent) run against this repository.
- If this repository is ever migrated, mirrored, or re-hosted, the
  migration must preserve full commit history, including the tags below,
  not just the current file tree. A shallow clone or a squashed-history
  export breaks every commit hash this log cites and makes every version
  before the migration unverifiable.

If you are the person doing that migration and are reading this for the
first time: this paragraph is for you. Preserve history, or this log
becomes a list of promises with no way to check them.

Alongside the bare commit hashes, each version also has an annotated git
tag (`policy-v1` through the current version) on the corresponding commit,
as a cheaper, more durable handle than memorizing a hash. Every future
version gets its tag created and pushed in the same change that adds its
changelog row, so this stays true without needing to be re-stated. Tags are
pushed to the remote and are covered by the same no-rewrite rule as the
commits they point to.

## What "Date" means, and why every cell says so itself

The date is when the new text went live on the public site (the day the
change merged to `main`, which is what Vercel deploys), not necessarily the
date it was drafted or first committed to a working branch. Those two dates
differ for exactly one entry pair in this project's history (Versions 31
and 32), and it matters enough that the qualifier is written into the Date
cell of every row, not just stated once here. A caveat that lives only in
this header gets lost the moment someone copies three rows out of the table
to send to an auditor; a caveat inside the cell travels with the row no
matter how it's quoted.

Two date qualifiers appear in this table:

- **"(commit date)"**: the date shown is the git commit's own authored
  date, used as the go-live date because, for that entry, I have no
  evidence of a gap between the two and no first-hand knowledge to check
  further. This is the qualifier for Versions 1 through 30.
- **"go live" / "drafted"**: the date shown is a confirmed, non-inferred
  go-live date that differs from the date the text was drafted, both
  stated explicitly. This is the qualifier for Versions 31 and 32, the one
  confirmed case where those two dates diverge; see the note below the
  table for how I know this.

Versions 33 through 36 carry no qualifier: for those, drafting and go-live
happened on the same day, confirmed directly (I performed each of those
merges myself), so there is no gap for a qualifier to describe.

## How to look up a historical version

Find the entry whose date range covers the date you care about, then run:

```
git show <commit hash>:app/privacy/page.tsx
git show <commit hash>:app/terms/page.tsx
```

against the `flair-legal-site` repository, using either the bare hash or
its `policy-vN` tag. This returns the exact file content as published from
that entry's date until the next entry's date. This project uses
commit-hash (or tag) lookup rather than separate dated snapshot files
because git already stores every historical version exactly and
permanently; a snapshot file would either duplicate that content (and could
drift from the real commit if edited by hand) or need the same commit-hash
discipline to stay trustworthy, at which point it is not saving any real
work. The commit *is* the snapshot.

## Version numbering

One shared sequence covering both documents together, not two independent
counters. A change that touches only one document still consumes the next
number; the other document's displayed version stays unchanged until a
later entry touches it. Each document's "Version" line on the live page
shows the highest number in this sequence that has touched that specific
document.

## What counts as a version

A change is **instrumentation**, not a version, if it alters no statement
about what data is collected, used, disclosed, or retained, and no
statement about the user's rights. Anything else, including a change to
how an existing disclosure is worded, scoped, or structured, consumes the
next version number. Instrumentation changes are still recorded, dated,
and linked to a commit, in the Non-substantive changes section below the
table, so the deploy record stays complete even where no version number
was consumed. This test, and the record it requires, apply to every future
change to this system, not only the ones already listed.

---

| Version | Date | Document(s) | Sections | Summary | Commit |
|---|---|---|---|---|---|
| 1 | 2026-03-23 (commit date) | Privacy, Terms | All | Initial publication of the Privacy Policy and Terms of Service. | `e1ea89d` |
| 2 | 2026-04-24 (commit date) | Privacy, Terms | Privacy S1, S4; Terms | Restructured the AI processing section; added the rate-limiting token disclosure, a No Training clause, and an Anonymous Telemetry bullet. | `43fe17f` |
| 3 | 2026-04-24 (commit date) | Privacy, Terms | Privacy intro, S1 | Added the Regal Pines Pte. Ltd. Singapore entity identification; moved the AI feature exception and token disclosure into the main bullet list. | `0b669c1` |
| 4 | 2026-04-24 (commit date) | Privacy, Terms | Privacy S4; Terms S5 | Added the sensitive medical data clause and the virtual items clause. | `ae3bb98` |
| 5 | 2026-05-04 (commit date) | Privacy, Terms | Privacy S1, S4; Terms S4 | Build 33: added Eat Now, Document Scanner, and Blueprint Protocol; restructured the AI section into per-feature bullets; added xAI Grok as a second provider; added the In-App Consent bullet. | `0315a30` |
| 6 | 2026-05-06 (commit date) | Privacy, Terms | Privacy S4; Terms S4 | Build 34: added Bio Age; added OpenAI GPT-4o-mini as a third, user-selectable provider; expanded No Persistence with provider terms links; expanded Anonymous Telemetry to cover identifier, feature, model, tokens, and latency; added the Bio Age medical disclaimer. | `8d8dc79` |
| 7 | 2026-05-10 (commit date) | Privacy, Terms | Privacy S1, S4, S6; Terms S4 | Build 35: expanded Document Scanner's PII stripping detail; expanded the Bio Age data list; simplified Anonymous Telemetry to three stated purposes; added the Apple Health import paragraph; revised the Bio Age disclaimer. | `db768f8` |
| 8 | 2026-05-16 (commit date) | Privacy | S4 | Disclosed Bio Age telemetry fields (age delta and confidence score). | `d081823` |
| 9 | 2026-05-17 (commit date) | Terms | S4 | Build 36: added the Blueprint contextual pause disclaimer. | `49d8a28` |
| 10 | 2026-05-17 (commit date) | Privacy, Terms | Privacy S4; Terms S4 | Disclosed Eat Now's exclusive use of Google Gemini for location aware search grounding. | `01d5191` |
| 11 | 2026-05-19 (commit date) | Privacy | S4 | Build 37: disclosed wearable brand telemetry and respiratory rate; specified the 90 day telemetry retention limit. | `46142d0` |
| 12 | 2026-05-19 (commit date) | Privacy | S1 | Build 37: added the explicit no network call on launch promise. | `214c1a7` |
| 13 | 2026-05-25 (commit date) | Privacy, Terms | Privacy S1; Terms S4 | Build 37 audit: disclosed Smart Habits on device pattern recognition and Voice Input's use of Apple Speech Recognition; added the Smart Habits predictive draft disclaimer. | `1c0655a` |
| 14 | 2026-05-26 (commit date) | Privacy, Terms | Privacy S1, S4, S6; Terms S4 | Build 39: added Inspire Me; expanded the Level Up, Eat Now, and Bio Age data lists; expanded Apple Health read scope (resting heart rate, HRV, blood oxygen, respiratory rate). | `6ecd650` |
| 15 | 2026-06-08 (commit date) | Privacy, Terms | All | Lawyer approved full rewrite. Restructured both documents into numbered sections (Privacy gained Your Control, Health Wallet, Flair Services, Data Ownership, PDPA Compliance; Terms gained Third Party AI Services, Health Wallet, Intellectual Property, Data Ownership). Renamed Bio Age to Body Age and Blueprint Protocol to Daily Quests. | `5083217` |
| 16 | 2026-06-12 (commit date) | Privacy | S5 | Lawyer precision fix: "anonymised" corrected to "pseudonymised" for Body Age and telemetry age delta data. | `a328a82` |
| 17 | 2026-06-26 (commit date) | Privacy, Terms | Privacy S1, S5, S8, S9; Terms S4 | Build 43: added Weekly Report; disclosed hypertension; added Phone Sleep Tracking and Siri Shortcuts; named the environmental data providers (OpenWeatherMap, NEA); added the always location access clause. | `451922c` |
| 18 | 2026-06-26 (commit date) | Privacy | S5 | Clarified the two tier telemetry identifier: weekly rotating hash for most features versus a persistent per install identifier for Level Up cost tracking. | `1cfe540` |
| 19 | 2026-06-27 (commit date) | Privacy | S1, S5 | Disclosed the wake_events sleep metric in Phone Sleep Tracking and Weekly Report. | `aeec670` |
| 20 | 2026-07-02 (commit date) | Privacy, Terms | Privacy S5; Terms S4, S5 | Removed xAI Grok as an AI provider from every section; Children's Privacy wording fix. | `20dd16b` |
| 21 | 2026-07-07 (commit date) | Privacy, Terms | Privacy S5; Terms S5 | Disclosed Anthropic Claude as a third AI inference provider. | `9efa22e` |
| 22 | 2026-07-15 (commit date) | Privacy | S5 | Disclosed Body Age chronological age transmission to AI providers; corrected the telemetry identifier language to generic, provider neutral wording. | `a439039` |
| 23 | 2026-07-27 (commit date) | Privacy, Terms | Privacy S5; Terms S4 | Corrected OpenAI model naming from GPT-4o-mini to GPT-4.1-mini and GPT-4.1. | `b491afc` |
| 24 | 2026-07-27 (commit date) | Privacy, Terms | Privacy S5, S9; Terms | Corrected the Google Gemini citation to Google Cloud Vertex AI; broadened the Magic Lens description to cover life and vitals modes; corrected the location coarsening description. | `7f0ff63` |
| 25 | 2026-07-27 (commit date) | Privacy | S5 | Added the Singapore region processing disclosure for Google Cloud Vertex AI. | `81beafd` |
| 26 | 2026-08-01 (commit date) | Privacy, Terms | Privacy S5; Terms S5 | Disclosed Mistral AI as a live AI provider. | `6837710` |
| 27 | 2026-08-01 (commit date) | Privacy | S5 | Re-punctuated the Mistral disclosure bullet to remove an em dash (house copy rule). | `781fdff` |
| 28 | 2026-08-02 (commit date) | Privacy, Terms | Privacy intro, S2, S5; Terms | Claims phrasebook propagation pass: corrected an unqualified "private" claim, an unqualified "anonymous" claim, and the payload preview scope claim; completed a site wide em dash removal. | `b7cdca9` |
| 29 | 2026-08-02 (commit date) | Privacy | S2 | Scoped the same code path payload preview claim to Eat Now only, matching what had actually shipped. | `3166d14` |
| 30 | 2026-08-02 (commit date) | Privacy | S8, S13 | Added the Right to Complain (PDPC) contact; propagated the IP handling disclosure into Section 8. | `a39a0a2` |
| 31 | 2026-08-15, go live; drafted 2026-08-12 | Privacy, Terms | Privacy S5, S14; Terms S1 | Added the 18 and over age gate for AI features; added the Do Now feature disclosure; corrected telemetry rotation from weekly to daily; renamed Level Up to Refresh Insights throughout. Held on an unmerged branch from drafting to go live, pending an unrelated release check; went live in the same push as Versions 32 and 33; see note below. | `5cb7db7` |
| 32 | 2026-08-15, go live; drafted 2026-08-12 | Privacy | S5 | Renamed "No Persistence" to "No Content Persistence" and "Anonymous Telemetry" to "Pseudonymous Telemetry," resolving an internal contradiction about what the routing layer retains. Held on an unmerged branch from drafting to go live; see note below. | `d8e33a7` |
| 33 | 2026-08-15 | Privacy, Terms | Privacy S5; Terms S5 | Removed the Mistral AI disclosure (provider structurally disabled). | `32246d0` |
| 34 | 2026-08-15 | Privacy | S5, S9 | Fixed a self-contradiction between the Body Age and Weekly Report bullets and the Pseudonymous Telemetry bullet; corrected the Body Age weekly aggregate's schema and softened "cannot be linked" to "is not linked"; corrected Eat Now's remaining Google Gemini citation. | `591fb52` |
| 35 | 2026-08-22 | Privacy, Terms | Privacy S1, S5, S9; Terms S4 | Split telemetry retention into Flair's own store versus the hosting provider's runtime logs; disclosed the Do Now energy level field; disclosed the Eat Now venue lookup processors (Hot Pepper Gourmet, Foursquare); corrected the Section 1 token bullet to reference Section 5; corrected the remaining Google Gemini citations. | `24efe17` |
| 36 | 2026-08-23 | Privacy | S1 | Corrected the Voice Input paragraph: on device speech recognition is a hard requirement with no fallback, replacing language that had accurately, at the time, disclosed a since removed fallback risk. | `8c360e6` |
| 37 | 2026-08-25 | Privacy, Terms | Privacy S1, S5, S8; Terms S4 | Renamed "Weekly Report" to "Weekly Wrapped" throughout, matching the name used in the app's own UI. First entry logged under the instrumentation test: a rename a user cannot map to the feature in front of them changes how a disclosure functions, so it consumes a version rather than counting as instrumentation. The internal identifier (consent contract id `weekly_report`, the `/api/weekly-report` endpoint path) is unchanged; only prose renamed. | `94143d7` |
| 38 | 2026-08-28 | Privacy | S5 | Added injuries and mobility limitations, and ongoing medications and supplements, to the Body Age input list. Body Age did not previously receive either. Medications are named explicitly rather than folded into "lifestyle factors" because they disclose conditions by inference and a reader should see them. Shipped with the paired mobile consent change (item 383), same day, per the lawyer's three-in-one rule; no Terms change, S4 does not enumerate Body Age's inputs. Drafted and pushed 2026-08-25, held for the mobile side, went live 2026-08-28; see note below the table. | `b2c588c` |
| 39 | 2026-09-04 | Privacy | S1 | Item 484, source doc section A: Phone Sleep Tracking's enumeration of derived sleep quality metrics gains "the timing of individual snoring episodes," alongside the existing summary-level "snoring indicators." Required before item 482-A ships. The other change originally slated to accompany this one, the item 418/423 derived-flags disclosure sentence, is not included here: its text was not available from the lawyer at the time of this deploy, confirmed absent from the source doc and the rest of the mobile repo's tree. It ships as its own version once supplied. | `ef4faf4` |
| 40 | 2026-09-04 | Privacy | S5 | Item 484, source doc section E (the derived-flags disclosure withheld from Version 39): Do Now and Eat Now's medical conditions parentheticals, and Body Age's, gain whether blood pressure readings are above a general guideline threshold of 130/80, whether asthma is declared, and whether high cholesterol is declared. New standalone "Blood Pressure Threshold Flag" bullet added after "Age Transmission for Body Age," in the same house pattern. The Body Age bullet used here is the INTERIM version: it keeps the live ethnicity clause and adds only the medical-conditions parenthetical, deliberately not the ethnicity-to-flag change, which requires item 483 to actually ship first and lands as Version 41. | `7361385` |
| 41 | 2026-09-06 | Privacy | S5 | Item 483/483-R, source doc section B (lawyer, FINAL replacement): Body Age's bullet no longer transmits raw ethnicity; replaces it with a derived flag indicating whether the user's BMI is assessed against a lower threshold used for some ethnic groups. New "Ethnicity and Body Age" companion note added after "Age Transmission for Body Age," clarifying the flag does not reveal which ethnicity was selected. Supersedes the Version 40 INTERIM Body Age bullet. | `92063a1` |
| 42 | 2026-09-07 | Privacy | S2 | Item 373 tripwire (source doc `2026-09-03-privacy-s2-interim-wording-item373.md`, lawyer, verbatim), fired because build 48's consent fix had not reached testers' devices by the tripwire date. Drops "every" from the first sentence and discloses an interim exception: Refresh Insights, Inspire Me, and Weekly Wrapped send the stated health objective without it appearing on those features' consent forms while the fix is in progress; the Data Activity screen still records everything actually sent. To be reverted (restore "every," delete the interim sentences) once build 48 reaches testers. | `57608d8` |
| 43 | 2026-11-06 | Privacy | S5 | Hosting provider runtime log retention corrected from one hour to one day, after the move to a paid hosting plan (counsel 48db172eb). The logs still hold no content. | `354e7a7` |
| 44 | 2026-11-06 | Privacy | S1 | Removed "fully" from "offline-first" and named the features that need a connection (the AI features, Local Conditions and route maps). Due by 1 November 2026 under counsel's seven-day rule of 16 October 2026, and published late. Corrected "no network request on app launch": it now names two exceptions, Local Conditions refreshing your area's readings when Today opens, and a Magic Lens photo taken offline being sent when the app next has a connection. "The only exception" for the AI features now reads "One exception", and Ask Flair is added to their list. | `ccd5fe1` |
| 45 | 2026-11-12 | Privacy, Terms | Privacy S1, S2, S5, S6, S7, S8, S9, S10, S11, S14, S16, closing paragraph; Terms S2, S4, S6, S8, S9, S11 | A correction. In builds up to 49, four paths could request local weather and air quality data using your approximate location without the Local Conditions consent: an outdoor workout imported from Apple Health, that same import run by a background task, a pass back over workouts already on the phone, and the Outdoors answer on a workout. The statements in sections 1, 2, 5 and 9 that no data leaves your device without your per-feature consent did not hold for those paths. The fix checks that consent at a single point and fails closed if it cannot be read. No data beyond your position rounded to about a kilometre was involved, and nothing identifying you was sent to the weather services. The fix reached testers in build 50 on 24 October 2026. Section 2: removed the interim exception for the stated health objective. The fix, which puts the objective on the Refresh Insights, Inspire Me and Weekly Wrapped consent forms, reached testers in build 48 in September 2026; the exception should have come out then and stayed up until this version. Section 5: "anonymous health profile" is replaced by a description of what each feature sends (profile bands, or for Body Age the figures themselves). That data carried no name or identifier, but it was about you, so "anonymous" was the wrong word; the section now says what goes. Removed Body Age, Weekly Wrapped, Inspire Me and Health Wallet from sections 1, 5, 6, 7, 8 and 14: they are switched off in the app and nobody can use them. What each sent while it was available is in the earlier versions of this policy, which stay in the history below. Their text, and their agreements in the app, return together before any of them returns. Closing paragraph: removed the promise that material changes are announced in the app on your next launch, which the app does not do. The version history on this page, and the app's own agreements for what it sends, are the record. Terms section 11: removed the promise of an in-app notice on your next launch, which the App does not give; the version date and this history are the record. Terms section 8: the names and logo are described as belonging to Regal Pines; the earlier text called them trademarks or pending trademarks, and none is registered or filed. Section 14: the birth year's uses are now stated in full. It also sets the age group that Refresh Insights, Eat Now and Do Now send, and it gates the journal training export; the earlier text named only AI availability and Body Age. The agreements in the app listed the age group throughout. Section 5: telemetry retention corrected from 90 to 30 days, the 12-month daily count per feature named, and the daily overall totals, which are kept as counts with no set limit, named. Section 5, Daily Quests: the list of what it sends was wrong both ways. It named a health profile that is not sent, and it omitted injuries, food allergies, medical conditions and fasting mode, which are. The agreement shown in the app listed them correctly throughout; the policy now matches it. Section 5, Document Scanner: 'anonymised' removed. The redacted text is about you with your identifiers removed on the phone; it was never anonymous, and the sentence now says what leaves and why you see the redactions first. Section 5: Google's retention for AI requests is now stated (a copy for up to one day; Eat Now's grounding queries for up to three days), as the agreements in the app have said since 12 October 2026, on testers' phones from build 50. Section 5, Eat Now: the list of what it sends was incomplete and named a profile that is not sent. It now lists the venue and area, your drinks preference, your age group, the medical conditions by name, today's food summary and active food quests, as the agreement shown in the app has listed them. Route maps load map images from OpenStreetMap, which receives your network address and the area shown; the earlier text said route data was never transmitted to any server. Added: to name the place you are in, for your profile's city, a travel check-in or the location tag on an outdoor photo, your phone asks Apple's location service, for a position rounded to about 1 km, under Apple's own privacy policy. Removed the statement that Flair may request 'Always' location access; Flair asks only while you use the app. Added to section 9: when you choose to record a route, it is recorded while a timer session runs, including when your screen is locked. Added section 16, Where Your Data Is Processed: the services outside Singapore that receive your data, what each receives, its country and the basis that protects it. Our database and cache providers and the hosting of Flair's own server are not yet in its table; the section says so. Removed the Eat Now and section 9 text about venue lookup, and Foursquare and Recruit with it. That lookup is switched off; the text, the table rows and its own agreement in the app return together when it is switched on. In section 1, "We do not sell, share, or monetize your information" is replaced by "We do not sell your information, rent it, or use it for advertising": the word "share" was inaccurate, because sections 5 and 9 of this policy have always described data going to AI providers and environment services with your consent. Section 5 now names the AI providers as they are. Google Gemini on Google Cloud Vertex AI answers every AI request the app sends, except Ask Flair's, which Anthropic's Claude answers. Other models are available only for Flair's own team. The earlier text said a provider was selected automatically based on availability. Until 2 November 2026, when Google could not answer, some requests went to OpenAI's GPT-4.1-mini instead; that backup has ended. The sentence saying Eat Now needs a search only Google offers is removed. The Terms, section 4, say the same. Section 5 now describes Ask Flair, a chat that Anthropic's Claude answers as its only provider: what it sends with every message, what it sends only when you tap Share, the country check, and how long Anthropic keeps requests. Section 16's Anthropic row now names Ask Flair. Ask Flair reached testers in build 51, and its agreement in the app listed all of this from the start; this policy had not yet described it. Section 1: "Phone Sleep Tracking" is replaced by the sleep timer, which measures no movement; if you turn on Listen for snoring, it listens on your phone and keeps only the times and counts of snoring, which are never sent. The earlier text described Focus Mode's motion sensing, which was removed in October 2026, and said snoring figures could go to an AI feature, which they no longer do. Voice Input's sentence about audio now covers voice input only, and Smart Habits notes that Ask Flair sends today's habits if you tap Share. Section 6 now says Flair writes your weight, height and mindful minutes to Apple Health, if you allow it; the earlier text wrongly said it wrote nothing. Section 9 adds Open-Meteo, already named in section 16. Section 10 and section 5's Document Scanner paragraph now disclose Google's ML Kit, which reads documents on your phone and sends Google information about its own use, never your image or its text. Section 16 names Google Cloud Vertex AI and OpenAI as not yet in its table, and states the basis for OpenWeather, Open-Meteo, the OpenStreetMap Foundation and Apple. Terms, section 8: exercise drawings shared by their artists under a Creative Commons licence follow that licence, not these Terms. Section 11 and Terms section 9: deleting Flair did not remove everything, as both said. Your journal, your Health Passport and the backups in Flair's own folder go with the app, but a few items in your phone's secure storage (the Keychain) can stay: your 12-word key, your security settings and an encryption key, and, if you chose the Apple ID option, the backup key in your iCloud Keychain. They stay so that you can restore a backup if you reinstall. Delete All Data in the app removes them too. The section 11 note now also names the weight, height and mindful minutes Flair saved to Apple Health, which stay there. Terms: removed Body Age and Health Wallet from section 2, and section 6, which described Health Wallet, now says so; both are switched off in the app, and their text returns with them. | `70a8f6a` |

---

## Non-substantive changes

Recorded for completeness under the instrumentation test above; none of
these consume a version number because none alters a statement about data
collection, use, disclosure, retention, or user rights.

| Date | Document(s) | Change | Commit |
|---|---|---|---|
| 2026-08-24 | Privacy, Terms | Added the "Version N. Last Updated: \<date\>." line to both pages, and this change log itself. Introduces the versioning system; asserts no new fact about data handling. | `46d3cb2` |
| 2026-09-06 | Privacy, Terms | American spelling sweep (item 524), public pages only: analysing/analyses (verb)->analyzing/analyzes, behavioural/behaviours->behavioral/behaviors, personalised->personalized, anonymised->anonymized. Ruled editorial by the lawyer; asserts no new fact about data handling. Historical entries in this log are unaffected. | `e82a2d2` |
| 2026-11-12 | Privacy, Terms | British spelling pass (the PO's decision of 2026-10-28, relayed by the lead architect; counsel's standing rule: British for the website), public pages only: analyzing/analyzes/analyzed->analysing/analyses/analysed, minimized->minimised, behavioral->behavioural, anonymized->anonymised (Privacy S1, S2, S5); deprioritize->deprioritise, unauthorized->unauthorised (Terms S4, S7, S10). Kept: counsel's verbatim text (already British), the quoted Version 42 sentence "We do not sell, share, or monetize your information" in the Version 43 row, "glucose meters" (a device), product and API names, code and URLs. The landing page, /support, /beta/thanks and the form's consent and removal lines needed no change, so the form's consent_version is unchanged. Asserts no new fact about data handling. | `70a8f6a` (from `2bdb12c`) |

## Note on Version 38

Drafted, verified against the mobile codebase, and pushed to a branch on
2026-08-25, deliberately not merged: this change was required to ship in
the same release as a paired mobile consent change (item 383), and that
mobile side was not yet confirmed to be merging. Rather than guess a
go-live date at draft time, the changelog row and the page's own "Last
Updated" line were left explicitly marked pending. Confirmation that the
mobile side was ready arrived 2026-08-28, three days later, at which point
this row's date, the page's "Last Updated" line, and the `policy-v38` tag
were all filled in against the actual day of merge, verified via `date`
immediately beforehand. Had the date been guessed at draft time instead, it
would have been wrong by three days.

## Note on Versions 31 and 32

Both were authored and committed on 2026-08-12, on branches that were held
rather than merged immediately. They went live on the site on 2026-08-15,
in the same push that carried Version 33. This entry dates them by their
actual go-live date, per the dating rule this log follows throughout,
rather than by their git commit date, which would understate how long the
prior (in one case, self-contradictory) text stayed published. I have
direct first-hand knowledge of this specific gap from having performed the
merge myself; it is not inferred from the commit metadata.

## Confidence note on earlier entries

For Versions 1 through 30 (2026-03-23 through 2026-08-02), the date shown
is each commit's own authored date on `main`, taken as the go-live date and
marked "(commit date)" in the table itself. I do not have first-hand
knowledge of the drafting-versus-publishing workflow used before this
changelog existed, so I cannot rule out an earlier gap of the same kind
confirmed for Versions 31 and 32. Nothing in the available history (commit
spacing, commit messages, or the site's own prior "Last Updated" values,
which track each commit's own date throughout) suggests one exists. If a
precise historical "what was live on date X" question ever turns on one of
these entries specifically, treat the date as accurate to within the
commit's own day unless contrary evidence surfaces.

## Excluded from this log

Two commits touched `app/privacy/page.tsx` and `app/terms/page.tsx` but
changed only presentation, not text: `1a756b9` (dark mode text color
classes) and `0808dfd` (brand color token on one link). Neither is a policy
change and neither is numbered or recorded here.
