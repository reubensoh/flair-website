import Link from "next/link";
import { connection } from "next/server";
import { CONSENT_TEXT, REMOVAL_LINE, SOURCES, countries, issueToken } from "../lib/beta";

const PROOFS = [
  "Type it, say it to Siri, or take a photo of your meal. Flair reads it.",
  "It connects your food, sleep, movement and mood and shows you the patterns: an energy forecast for the day, your eating windows, your habits.",
  "No account and no email to use it. Your journal is encrypted on your phone, and your backup is a file you own, saved where you choose.",
  "Before an AI feature first sends anything, it shows you which kinds of data it will send, and you can say no. It asks again whenever that list changes.",
];

const NOTICES: Record<string, string> = {
  invalid: "Something in the form did not look right. Please check the fields and try again.",
  error: "We could not save your request just now. Please try again in a few minutes.",
};

const field =
  "w-full rounded-xl border border-[#201E4B]/15 dark:border-[#ECE9E7]/15 bg-white dark:bg-white/8 px-4 py-3 text-sm text-[#201E4B] dark:text-[#ECE9E7] focus:outline-none focus:ring-2 focus:ring-[#9156F1]";
const label = "block text-sm font-medium text-[#201E4B] dark:text-[#ECE9E7] mb-1.5";

export default async function Home({ searchParams }: { searchParams: Promise<{ beta?: string }> }) {
  await connection();
  const { beta } = await searchParams;
  const notice = beta ? NOTICES[beta] : undefined;
  const token = issueToken();

  return (
    <div className="flex flex-col flex-1 items-center min-h-screen bg-[#EFEFEF] dark:bg-[#201E4B] text-[#201E4B] dark:text-[#ECE9E7]">
      <main className="flex flex-col px-6 py-20 max-w-xl w-full gap-16">
        <header className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[12px] bg-[#9156F1] flex items-center justify-center shadow-lg shadow-[#9156F1]/30">
              <span className="text-white text-xl font-bold select-none">F</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Flair Health</span>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
              Health you can read. Data you keep.
            </h1>
            <p className="text-lg leading-relaxed opacity-75">
              Flair reads what you tell it about your days and shows you the patterns. Your journal is encrypted on your phone.
            </p>
          </div>

          <a
            href="#join"
            className="self-start py-3 px-6 rounded-2xl bg-[#9156F1] text-white font-medium text-sm shadow-lg shadow-[#9156F1]/25 transition-opacity hover:opacity-90"
          >
            Ask to join the beta
          </a>
        </header>

        <section className="flex flex-col gap-8">
          <ol className="flex flex-col gap-6">
            {PROOFS.map((text, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-0.5 w-7 h-7 shrink-0 rounded-full bg-[#9156F1]/15 text-[#9156F1] text-sm font-semibold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-base leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
          <p className="text-base leading-relaxed opacity-70">
            No ads, nothing sold. That last one is rarer than it sounds.
          </p>
        </section>

        <section id="join" className="flex flex-col gap-6 scroll-mt-8">
          <p className="text-base leading-relaxed">
            We invite in small groups, and we read every request. If you want to understand your days and keep what you write, ask.
          </p>
          <p className="text-sm leading-relaxed opacity-75">
            Flair has no accounts. This email is for the beta list only. Flair reads it, invites you through TestFlight, and that is all it does. It is never in the app.
          </p>

          {notice && (
            <p role="alert" className="rounded-xl border border-[#9156F1]/40 bg-[#9156F1]/10 px-4 py-3 text-sm">
              {notice}
            </p>
          )}

          <form method="post" action="/api/beta" className="flex flex-col gap-5">
            <input type="hidden" name="t" value={token} />
            <div aria-hidden="true" inert style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
              <input type="text" name="hp_ref" aria-hidden="true" tabIndex={-1} autoComplete="off" defaultValue="" />
            </div>

            <div>
              <label htmlFor="email" className={label}>Email</label>
              <input id="email" name="email" type="email" required maxLength={254} autoComplete="email" className={field} />
            </div>

            <div>
              <label htmlFor="country" className={label}>Country</label>
              <select id="country" name="country" required defaultValue="" className={field}>
                <option value="" disabled>Choose your country</option>
                {countries().map((c) => (
                  <option key={c.code} value={c.code}>{c.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="source" className={label}>Where did you find Flair?</label>
              <select id="source" name="source" required defaultValue="" className={field}>
                <option value="" disabled>Choose one</option>
                {SOURCES.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="handle" className={label}>Social handle (optional)</label>
              <input id="handle" name="handle" type="text" maxLength={60} autoComplete="off" className={field} />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="consent" className="flex items-start gap-3 text-sm leading-relaxed">
                <input id="consent" name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-[#9156F1]" />
                <span>{CONSENT_TEXT}</span>
              </label>
              <p className="pl-7 text-xs leading-relaxed opacity-70">{REMOVAL_LINE}</p>
            </div>

            <button
              type="submit"
              className="self-start py-3 px-6 rounded-2xl bg-[#9156F1] text-white font-medium text-sm shadow-lg shadow-[#9156F1]/25 transition-opacity hover:opacity-90"
            >
              Ask to join the beta
            </button>
          </form>
        </section>

        <footer className="flex flex-col gap-4 pt-8 border-t border-[#201E4B]/10 dark:border-[#ECE9E7]/10">
          <nav className="flex gap-6 text-sm">
            <Link href="/privacy" className="underline underline-offset-4 opacity-80 hover:opacity-100">Privacy Policy</Link>
            <Link href="/terms" className="underline underline-offset-4 opacity-80 hover:opacity-100">Terms of Service</Link>
            <Link href="/support" className="underline underline-offset-4 opacity-80 hover:opacity-100">Support</Link>
          </nav>
          <p className="text-xs opacity-40">© {new Date().getFullYear()} Flair Health. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
