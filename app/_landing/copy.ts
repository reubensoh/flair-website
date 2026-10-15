// APPROVED: counsel-read words, verbatim from docs/plans/2026-10-06-landing-page-copy.md (app repo).
// Do not edit these strings without counsel.
export const APPROVED = {
  heroLine1: ["Health you can ", "read", "."],
  heroLine2: ["Data you ", "keep", "."],
  subtitle:
    "Flair reads what you tell it about your days and shows you the patterns. Your journal is encrypted on your phone.",
  cta: "Ask to join the beta",
  // Counsel, 16 Oct 2026 (docs/legal/2026-10-16-counsel-live-site-hotfix-subtitle-meta-footer-offline.md).
  metaDescription: "A personal health journal. Your health data is kept on your phone. When you send any of it to AI, you get a receipt.",
  proof1: "Type it, say it to Siri, or take a photo of your meal. Flair reads it.",
  proof2:
    "It connects your food, sleep, movement and mood and shows you the patterns: an energy forecast for the day, your eating windows, your habits.",
  proof3:
    "No account and no email to use it. Your journal is encrypted on your phone, and your backup is a file you own, saved where you choose.",
  proof4:
    "Before an AI feature first sends anything, it shows you which kinds of data it will send, and you can say no. It asks again whenever that list changes.",
  proof5Title: "Works with what you wear.",
  proof5Body: "Anything that writes to Apple Health is included.",
  dryLine: "No ads, nothing sold. That last one is rarer than it sounds.",
  selectionLine:
    "We invite in small groups, and we read every request. If you want to understand your days and keep what you write, ask.",
  formNotice:
    "Flair has no accounts. This email is for the beta list only. Flair reads it, invites you through TestFlight, and that is all it does. It is never in the app.",
} as const;

// PROPOSED: drafted for this design from docs/plans/2026-10-05-landing-page-what-we-can-say.md
// (item numbers in brackets). NOT read by counsel. Nothing here may publish until counsel has read it.
export const PROPOSED = {
  howEyebrow: "How it works",
  howHeading: "Tell it your day. See the patterns.", // [1, 2]
  step1Title: "Log it in your own words.", // [1]
  step2Title: "See how your days connect.", // [2]
  step3Title: "You decide what the AI sees.", // [5, the list's own heading]
  featuresEyebrow: "Features",
  featuresHeading: "What Flair reads, and what it shows you.", // [1, 2, 8]
  feature1Title: "Log it your way", // [1]
  feature2Title: "Patterns across your days", // [2]
  faqEyebrow: "FAQs",
  faqHeading: "Questions, answered.",
  joinEyebrow: "The beta",
  faqs: [
    {
      q: "Do I need an account to use Flair?",
      a: "No. There is no account and no email to use Flair. The beta list on this page is the one place we ask for an email.", // [3]
    },
    { q: "What does the AI see?", a: APPROVED.proof4 }, // [5], answer is proof 4 exactly
    { q: "Is my journal encrypted?", a: "Your journal is encrypted on your phone." }, // [4], the permitted sentence exactly
    {
      q: "Does Flair work with my watch or ring?",
      a: "Flair reads Apple Health, so a watch, ring or band that writes there is included.", // [8]
    },
    {
      q: "Is Flair medical advice?",
      a: "No. Flair describes your days. It is lifestyle guidance and never medical advice.", // [2]
    },
    { q: "Does Flair show ads or sell my data?", a: "No ads, and nothing sold." }, // [7]
    {
      q: "How do I join the beta?",
      a: "Ask with the form below. We invite in small groups, and we read every request.", // selection line, first sentence
    },
    { q: "How do I leave the beta list?", a: null }, // answered with the counsel-read removal line
  ],
} as const;

// Real build 50 screenshots, supplied by the PO into public/screens/. null shows a labelled placeholder.
export const SCREENS: Record<"today" | "logging" | "patterns" | "consent", string | null> = {
  today: null,
  logging: null,
  patterns: null,
  consent: null,
};
