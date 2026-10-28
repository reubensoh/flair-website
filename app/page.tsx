import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import { CONSENT_TEXT, REMOVAL_LINE, SOURCES, countries, issueToken } from "../lib/beta";
import { APPROVED, PROPOSED, SCREENS } from "./_landing/copy";
import Motion from "./_landing/Motion";
import { Mascot, Phone, Proposed } from "./_landing/parts";
import "./_landing/landing.css";

export const metadata: Metadata = {
  title: "Flair Health",
  description: APPROVED.metaDescription,
};

const NOTICES: Record<string, string> = {
  invalid: "Something in the form did not look right. Please check the fields and try again.",
  error: "We could not save your request just now. Please try again in a few minutes.",
};

const NAV = [
  { href: "#top", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#faq", label: "FAQs" },
];

const STEPS = [
  { title: PROPOSED.step1Title, body: APPROVED.proof1, screen: SCREENS.logging, screenLabel: "Logging", pose: "journal" },
  { title: PROPOSED.step2Title, body: APPROVED.proof2, screen: SCREENS.patterns, screenLabel: "Patterns", pose: "intro" },
  { title: PROPOSED.step3Title, body: APPROVED.proof4, screen: SCREENS.consent, screenLabel: "Consent sheet", pose: "ownership" },
] as const;

function Accent({ parts }: { parts: readonly [string, string, string] | readonly string[] }) {
  return (
    <>
      {parts[0]}
      <span className="lp-accent">{parts[1]}</span>
      {parts[2]}
    </>
  );
}

const icons = {
  write: (
    <path d="M4 20h4L19 9l-4-4L4 16v4Zm11-15 4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  pattern: (
    <path d="M3 17c3 0 3-8 6-8s3 6 6 6 3-10 6-10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  wear: (
    <>
      <rect x="7" y="6" width="10" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 6V3h6v3M9 18v3h6v-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </>
  ),
};

export default async function Home({ searchParams }: { searchParams: Promise<{ beta?: string }> }) {
  await connection();
  const { beta } = await searchParams;
  const notice = beta ? NOTICES[beta] : undefined;
  const token = issueToken();

  const features = [
    { icon: icons.write, title: <Proposed>{PROPOSED.feature1Title}</Proposed>, body: APPROVED.proof1 },
    { icon: icons.pattern, title: <Proposed>{PROPOSED.feature2Title}</Proposed>, body: APPROVED.proof2 },
    { icon: icons.wear, title: APPROVED.proof5Title, body: APPROVED.proof5Body },
  ];

  return (
    <div className="lp" id="top">
      <Motion />

      <header className="lp-header" data-header="">
        <div className="lp-header-pill">
          <a href="#top" className="lp-logo" aria-label="Flair Health, back to top">
            <Image src="/app_icon.png" alt="" width={44} height={44} loading="eager" />
          </a>
          <nav className="lp-nav" aria-label="Sections">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
          </nav>
          <a href="#join" className="lp-btn lp-btn-small">{APPROVED.cta}</a>
          <details className="lp-menu" data-menu="">
            <summary aria-label="Menu">
              <span /><span /><span />
            </summary>
            <nav className="lp-menu-panel" aria-label="Sections">
              {NAV.map((n) => (
                <a key={n.href} href={n.href}>{n.label}</a>
              ))}
            </nav>
          </details>
        </div>
      </header>

      <main>
        <section className="lp-hero">
          <div className="lp-hero-text">
            <h1 className="lp-h1">
              <span className="lp-in" style={{ "--d": "0ms" } as React.CSSProperties}><Accent parts={APPROVED.heroLine1} /></span>{" "}
              <span className="lp-in" style={{ "--d": "90ms" } as React.CSSProperties}><Accent parts={APPROVED.heroLine2} /></span>
            </h1>
            <p className="lp-lede lp-in" style={{ "--d": "180ms" } as React.CSSProperties}>{APPROVED.subtitle}</p>
            <div className="lp-in" style={{ "--d": "270ms" } as React.CSSProperties}>
              <a href="#join" className="lp-btn">{APPROVED.cta}</a>
            </div>
          </div>
          <div className="lp-band">
            <div className="lp-rings" aria-hidden="true">
              <span /><span /><span /><span />
            </div>
            <div className="lp-band-phone lp-in" style={{ "--d": "250ms" } as React.CSSProperties}>
              <div className="lp-float">
                <Phone src={SCREENS.today} label="Today" priority />
              </div>
            </div>
            <Mascot pose="welcome" className="lp-mascot lp-mascot-hero" />
          </div>
        </section>

        <section id="how" className="lp-section">
          <div className="lp-section-head" data-reveal="">
            <p className="lp-eyebrow"><span className="lp-eyebrow-icon" aria-hidden="true" /><Proposed>{PROPOSED.howEyebrow}</Proposed></p>
            <h2 className="lp-h2"><Proposed>{PROPOSED.howHeading}</Proposed></h2>
          </div>
          <div className="lp-stack" data-stack="">
            {STEPS.map((s, i) => (
              <article key={i} className="lp-card" data-card="" style={{ "--i": i } as React.CSSProperties}>
                <div className="lp-card-inner">
                  <div className="lp-card-text">
                    <p className="lp-step">Step 0{i + 1}</p>
                    <h3 className="lp-h3"><Proposed>{s.title}</Proposed></h3>
                    <p className="lp-card-body">{s.body}</p>
                  </div>
                  <div className="lp-card-media">
                    <Phone src={s.screen} label={s.screenLabel} />
                    <Mascot pose={s.pose} className="lp-mascot lp-mascot-step" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="lp-own">
          <div className="lp-own-inner" data-reveal="">
            <p className="lp-own-main">{APPROVED.proof3}</p>
            <p className="lp-own-dry">{APPROVED.dryLine}</p>
          </div>
        </section>

        <section id="features" className="lp-section">
          <div className="lp-section-head" data-reveal="">
            <p className="lp-eyebrow"><span className="lp-eyebrow-icon" aria-hidden="true" /><Proposed>{PROPOSED.featuresEyebrow}</Proposed></p>
            <h2 className="lp-h2"><Proposed>{PROPOSED.featuresHeading}</Proposed></h2>
          </div>
          <div className="lp-features">
            {features.map((f, i) => (
              <div key={i} className="lp-feature lp-rise" data-reveal="" style={{ "--d": `${i * 90}ms` } as React.CSSProperties}>
                <span className="lp-feature-icon"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">{f.icon}</svg></span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="lp-section lp-faq-section">
          <div className="lp-section-head" data-reveal="">
            <p className="lp-eyebrow"><span className="lp-eyebrow-icon" aria-hidden="true" /><Proposed>{PROPOSED.faqEyebrow}</Proposed></p>
            <h2 className="lp-h2"><Proposed>{PROPOSED.faqHeading}</Proposed></h2>
          </div>
          <div className="lp-faq" data-reveal="">
            {PROPOSED.faqs.map((f, i) => (
              <details key={i} className="lp-faq-item" name="faq">
                <summary>
                  <Proposed>{f.q}</Proposed>
                  <span className="lp-chevron" aria-hidden="true" />
                </summary>
                <div className="lp-faq-answer">
                  <p>{f.a === null ? REMOVAL_LINE : f.a === APPROVED.proof4 ? f.a : <Proposed>{f.a}</Proposed>}</p>
                </div>
              </details>
            ))}
          </div>
          <Mascot pose="first_entry" className="lp-mascot lp-mascot-ledge" />
        </section>

        <section id="join" className="lp-join">
          <div className="lp-join-card" data-reveal="">
            <p className="lp-eyebrow lp-eyebrow-light"><Proposed>{PROPOSED.joinEyebrow}</Proposed></p>
            <h2 className="lp-h2 lp-join-title">{APPROVED.cta}</h2>
            <p className="lp-join-lede">{APPROVED.selectionLine}</p>
            <p className="lp-join-notice">{APPROVED.formNotice}</p>

            {notice && (
              <p role="alert" className="lp-alert">{notice}</p>
            )}

            <form method="post" action="/api/beta" className="lp-form">
              <input type="hidden" name="t" value={token} />
              <div aria-hidden="true" inert style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
                <input type="text" name="hp_ref" aria-hidden="true" tabIndex={-1} autoComplete="off" defaultValue="" />
              </div>

              <div className="lp-field lp-field-wide">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required maxLength={254} autoComplete="email" />
              </div>

              <div className="lp-field">
                <label htmlFor="country">Country</label>
                <select id="country" name="country" required defaultValue="">
                  <option value="" disabled>Choose your country</option>
                  {countries().map((c) => (
                    <option key={c.code} value={c.code}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div className="lp-field">
                <label htmlFor="source">Where did you find Flair?</label>
                <select id="source" name="source" required defaultValue="">
                  <option value="" disabled>Choose one</option>
                  {SOURCES.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </div>

              <div className="lp-field lp-field-wide">
                <label htmlFor="handle">Social handle (optional)</label>
                <input id="handle" name="handle" type="text" maxLength={60} autoComplete="off" />
              </div>

              <div className="lp-consent lp-field-wide">
                <label htmlFor="consent">
                  <input id="consent" name="consent" type="checkbox" required />
                  <span>{CONSENT_TEXT}</span>
                </label>
                <p>{REMOVAL_LINE}</p>
              </div>

              <div className="lp-field-wide">
                <button type="submit" className="lp-btn lp-btn-light">{APPROVED.cta}</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <a href="#top" className="lp-logo" aria-label="Flair Health, back to top">
            <Image src="/app_icon.png" alt="" width={40} height={40} />
          </a>
          <nav className="lp-footer-links" aria-label="Legal and contact">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/support">Support</Link>
            <a href="mailto:support@flairhealth.app">support@flairhealth.app</a>
          </nav>
          {/* Placeholders until the PO supplies the real handles: not links, so nothing leads nowhere. */}
          <div className="lp-social" aria-label="Social profiles, coming soon">
            <span title="Instagram, link to come" aria-label="Instagram, link to come">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" /></svg>
            </span>
            <span title="LinkedIn, link to come" aria-label="LinkedIn, link to come">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M8 10.5V16M8 7.6v.1M11.5 16v-3.2c0-1.4.9-2.3 2.1-2.3s2 .9 2 2.3V16M11.5 10.5V16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            </span>
          </div>
          <p className="lp-footer-copy">© {new Date().getFullYear()} Regal Pines Pte. Ltd. All rights reserved.</p>
          <a href="#top" className="lp-footer-top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
