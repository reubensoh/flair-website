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
| 43 | pending; confirm at merge (go live) | Privacy, Terms | Privacy S1, S2, S5, S6, S7, S8, S9, S14, S16, S17, closing paragraph; Terms S2, S4, S6, S8, S11 | Added section 16, the beta list: what the sign-up form asks for, why, who holds it, how long it is kept and how to be removed. Section 14 is rescoped, because the app collects no email address and the beta list does. In section 1, "We do not sell, share, or monetize your information" is replaced by "We do not sell your information, rent it, or use it for advertising": the word "share" was inaccurate, because sections 5 and 9 of this policy have always described data going to AI providers and environment services with your consent, and the beta list is held for us by Google. Version 43 also carries item 853 (counsel's decision of 2026-10-06, `docs/legal/2026-10-06-counsel-decision-v43-carries-853-with-a-self-expiring-note.md` in the app repo): a correction row, and one dated note under section 2 only, about four paths that could request local weather and air quality without the Local Conditions consent in builds up to 49. The four absolute sentences in sections 1, 2, 5 and 9 are not rewritten. Counsel's ruling of 2026-10-28 (`docs/legal/2026-10-28-counsel-second-batch-privacy-v43-landing-copy-hosting-and-afcd-cofid.md`, W2): build 50 reached testers on 2026-10-24 before the note ever published, so the note is deleted from section 2 and the correction row gains the sentence "The fix reached testers in build 50 on 24 October 2026."; no removal row is needed. Version 43 also, per the same ruling (W1, item 373): restores "every" in section 2's consent form sentence and deletes the two interim sentences of Version 42 (the build 48 fix put the health objective on the consent forms), with counsel's row. Version 43 also, per the same ruling (W3): replaces "anonymous health profile" in section 5 for Refresh Insights, Eat Now and Body Age with counsel's descriptions; Counsel's corrections of 2026-10-28 (`docs/legal/2026-10-28-counsel-v43-corrections-daily-quests-section1-section17-and-twelve-items.md`) replace the Daily Quests entry with what `_blueprintPayload` sends (objective, injuries, food allergies, medical conditions, fasting mode; no age, sex or BMI), with its own row, and correct the section 2 row to "Weekly Wrapped". Counsel's Eat Now ruling of 2026-10-28 (`docs/legal/2026-10-28-counsel-eat-now-sentence-and-claude-refresh-add-on-agreement.md`, ruling 1, counsel reading `eat_now_flow_controller.dart:826` to `864` itself) replaces the Eat Now entry with what the request carries, the age group included (line 863) and no sex, weight or BMI, with its own row. Counsel's ruling of 2026-10-28 (`docs/legal/2026-10-28-counsel-v43-plain-words-offline-first-and-progress-chart-no-score.md`, (i)) adds the closing sentence after the Weekly Wrapped entry, with neither "anonymous" nor "pseudonymous", and its row, which replaces the W3 row. The same ruling's (ii) replaces section 1's opening sentence with "Flair is offline-first: ..." ("fully" removed, the exceptions named) and its row replaces the 2026-10-16 row. Per the corrections file (4), section 1's "no network request on app launch" names its one exception, Local Conditions refreshing on opening Today, with its own row. Per the corrections file (3), section 17's intro now names only Supabase, Upstash and the hosting of Flair's own server as not yet in the table, and the table gains a Vercel row (the website's sign-up form, Singapore, x-vercel-id proof in `docs/beta-form.md`) and a Google Workspace row (true only once the PO accepts Google's Cloud Data Processing Addendum, which must happen before this version goes live); the section 17 row is counsel's of the same file. The route recording and section 17 rows take counsel's words of 2026-10-28 (W4). Version 43 also replaces "Flair is fully offline-first." in section 1 with counsel's sentence of 2026-10-16 (`docs/legal/2026-10-16-counsel-live-site-hotfix-subtitle-meta-footer-offline.md`): Flair works without a connection except for the AI features, Local Conditions and route maps; if V43 is not published within seven days of build 50 reaching testers, this correction publishes on its own as its own version (app repo register row 83). Version 43 also corrects the route-map disclosure (counsel's ruling of 2026-10-18, `docs/legal/2026-10-18-counsel-item953-local-conditions-trim-weather-log-and-route-tiles.md`; app repo register row 84): route maps load map images from the OpenStreetMap Foundation, which receives the phone's network address and the area shown, so section 9's location paragraph no longer says route data is never transmitted to any server, section 9 names the Foundation with its privacy policy, and section 6's first sentence now speaks of storage only. Version 43 also names Apple's location service in section 9 (counsel's sentence of 2026-10-13, `docs/legal/2026-10-13-counsel-map-tiles-and-the-apple-geocoder.md`): the phone asks it to name the place for a position rounded to about 1 km (item 860, `a842ee71`), to keep the profile's city current. Version 43 also replaces section 9's whole location permissions paragraph with counsel's text of 2026-10-18 (`docs/legal/2026-10-18-counsel-items957-haze-lines-reconsent-popup-v43.md`): the app's Info.plist declares only when-in-use location access, so the former "may request Always" and "You can choose While Using the App" sentences described a choice the app does not offer. Version 43 also, per counsel's ruling of 2026-10-18 (`docs/legal/2026-10-18-counsel-item953c-sheet-layout-and-v43-transfers-routes-apple.md`) and the architect's correction (Mistral not added; Foursquare and Recruit not in the table): adds section 17, Where Your Data Is Processed, with verified table rows only (Anthropic, OpenWeather, Open-Meteo, the OpenStreetMap Foundation, Apple; Vercel, Supabase, Upstash, Google Cloud Vertex AI and OpenAI are register gaps until confirmed); adds to the route clause that a route is recorded while a timer session runs, including with the screen locked; widens the Apple sentence to its three purposes; and removes section 5's Eat Now venue lookup sentence (that flow is switched off). Version 43 also, per counsel's ruling of 2026-10-18 (`docs/legal/2026-10-18-counsel-v43-transfer-section-intro-and-venue-removal.md`): replaces section 17's processor sentence with one true today (names Vercel, Supabase, Upstash and Google Workspace as not yet in the table, with no conditional), drops "venue lookup" from the feature-recipient sentence, and removes section 9's venue paragraph (Foursquare, Recruit, and its closing sentence, all added together in 24efe17); all of it returns with the venue consent sheet. Version 43 also, per counsel's ruling of 2026-10-28 (`docs/legal/2026-10-28-counsel-v43-removing-hidden-features-from-policy-and-terms.md`; the PO's direction of the same day): removes Body Age, Weekly Wrapped and Inspire Me, switched off in the app (`kBodyAgeEnabled` and `kWeeklyWrapEnabled` false since build 50, item 947; Inspire Me with no caller since 2026-08-28), from sections 1, 5 and 8, with counsel's row; historical rows keep their names. It replaces the closing paragraph's untrue promise of an in-app announcement of material changes with counsel's text and row. In the Terms (Version 43, one shared sequence; counsel's ruling of 2026-10-28, `docs/legal/2026-10-28-counsel-v43-after-the-removal-sections-5-7-14-numbering-and-caffeine-line.md`, which withdraws "Version 39"): Removed the Body Age, Inspire Me and Weekly Wrapped sections and Health Wallet, and their names from the list of AI features: they are switched off in the app and nobody can use them. Their text returns with them. Per the same ruling: section 5's closing sentence stays after the Blood Pressure Threshold Flag bullet; section 5 gains counsel's sentence for people who used the hidden features; the telemetry paragraph's Body Age aggregate is reworded to the present (it stays while the rows exist); section 6's example becomes Refresh Insights; section 14 states the birth year's uses in full, with its row. Health Wallet (switched off, `kHealthWalletEnabled` false, item 962; the PO's yes of 2026-10-28; counsel: "section 7 (Health Wallet) comes out whole") is removed too: privacy section 7 whole and its section 8 line, Terms section 6 whole and its section 2 bullet, with "[and Health Wallet]" in counsel's row and Terms sentence. Sections are not renumbered (privacy runs 1 to 6 then 8 to 17, Terms 1 to 5 then 7 to 14), so every section number cited in the text and in this log stays true. Terms section 11 is replaced with counsel's text (`docs/legal/2026-10-28-counsel-terms-section-11-changes-and-the-shared-history.md`), linking to the policy's What Changed, and counsel's Terms sentence joins the closing-paragraph row. Counsel's Document Scanner file of 2026-10-28 (`docs/legal/2026-10-28-counsel-document-scanner-anonymised-sentence.md`) replaces section 5's Document Scanner entry ("anonymised, redacted clinical text" claimed more than the facts allow), with its row. Counsel's file of the same day (`docs/legal/2026-10-28-counsel-document-scanner-time-zone-offset-sentence.md`) adds to section 5's telemetry passage that Document Scanner's requests also carry the time zone offset (since item 910 the only feature that sends it), riding on the Document Scanner row. Counsel's file of the same day (`docs/legal/2026-10-28-counsel-vertex-retention-findings-eat-now-grounding-and-a-correction.md`, ruling 2) adds Google's retention to section 5's AI Providers line (a copy for up to one day; Eat Now's grounding queries and pages for up to three days; longer if flagged for misuse; no training), with its row, dated by counsel's file of the same day (`docs/legal/2026-10-28-counsel-v43-row-google-retention-since-october-confirmed.md`: the card lines landed in the app on 12 October 2026, e78d3a996, and reached testers in build 50); the Singapore sentence stays until the build 52 move to the global location, when counsel's second sentence replaces it with the section 17 Vertex row. Per counsel's file of 2026-10-28 (`docs/legal/2026-10-28-counsel-v43-last-items-trademarks-health-wallet-retention-30-days-and-1033g-strings.md`): the gaps stay, with a placeholder line where privacy section 7 and Terms section 6 were; the removal row reads "Body Age, Weekly Wrapped, Inspire Me and Health Wallet"; the past-results sentence names Health Wallet; section 5's telemetry retention is corrected from 90 to 30 days (item 924, step 5), the 12-month daily count per feature is named, and the Body Age aggregate's purge is 30 days with its "no identifier" line restored, with its own row; Terms section 8 no longer claims trademarks or pending trademarks (none is registered or filed), with its sentence in the Terms row. Terms S8 is added to this row's sections. Version 43 also adds a "What Changed" section to the policy page, carrying its rows newest first. Must go live in the same deploy as the sign-up form, never after. | pending |

---

## Non-substantive changes

Recorded for completeness under the instrumentation test above; none of
these consume a version number because none alters a statement about data
collection, use, disclosure, retention, or user rights.

| Date | Document(s) | Change | Commit |
|---|---|---|---|
| 2026-08-24 | Privacy, Terms | Added the "Version N. Last Updated: \<date\>." line to both pages, and this change log itself. Introduces the versioning system; asserts no new fact about data handling. | `46d3cb2` |
| 2026-09-06 | Privacy, Terms | American spelling sweep (item 524), public pages only: analysing/analyses (verb)->analyzing/analyzes, behavioural/behaviours->behavioral/behaviors, personalised->personalized, anonymised->anonymized. Ruled editorial by the lawyer; asserts no new fact about data handling. Historical entries in this log are unaffected. | `e82a2d2` |
| pending; confirm at merge | Privacy, Terms | British spelling pass (the PO's decision of 2026-10-28, relayed by the lead architect; counsel's standing rule: British for the website), public pages only: analyzing/analyzes/analyzed->analysing/analyses/analysed, minimized->minimised, behavioral->behavioural, anonymized->anonymised (Privacy S1, S2, S5); deprioritize->deprioritise, unauthorized->unauthorised (Terms S4, S7, S10). Kept: counsel's verbatim text (already British), the quoted Version 42 sentence "We do not sell, share, or monetize your information" in the Version 43 row, "glucose meters" (a device), product and API names, code and URLs. The landing page, /support, /beta/thanks and the form's consent and removal lines needed no change, so the form's consent_version is unchanged. Asserts no new fact about data handling. | pending |

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
