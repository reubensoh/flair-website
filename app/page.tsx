import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-[#EFEFEF] dark:bg-[#201E4B]">
      <main className="flex flex-col items-center text-center px-6 py-24 max-w-sm w-full gap-10">

        {/* Brand Mark */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-[20px] bg-[#9156F1] flex items-center justify-center shadow-xl shadow-[#9156F1]/30">
            <span className="text-white text-3xl font-bold select-none">F</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-2xl font-semibold tracking-tight text-[#201E4B] dark:text-[#ECE9E7]">
              Flair Health
            </h1>
            <p className="text-sm text-[#201E4B]/50 dark:text-[#ECE9E7]/50 leading-relaxed max-w-[220px]">
              Private, offline-first, and powered by AI.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-[#201E4B]/15 dark:bg-[#ECE9E7]/15" />

        {/* Legal Navigation */}
        <nav className="flex flex-col items-center gap-3 w-full">
          <Link
            href="/privacy"
            className="w-full py-3 px-6 rounded-2xl bg-white dark:bg-white/8 border border-[#201E4B]/10 dark:border-[#ECE9E7]/10 text-[#201E4B] dark:text-[#ECE9E7] font-medium text-sm transition-all duration-200 hover:bg-[#9156F1] hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-[#9156F1]/25 dark:hover:bg-[#9156F1] dark:hover:border-transparent"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="w-full py-3 px-6 rounded-2xl bg-white dark:bg-white/8 border border-[#201E4B]/10 dark:border-[#ECE9E7]/10 text-[#201E4B] dark:text-[#ECE9E7] font-medium text-sm transition-all duration-200 hover:bg-[#9156F1] hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-[#9156F1]/25 dark:hover:bg-[#9156F1] dark:hover:border-transparent"
          >
            Terms of Service
          </Link>
          <Link
            href="/support"
            className="w-full py-3 px-6 rounded-2xl bg-white dark:bg-white/8 border border-[#201E4B]/10 dark:border-[#ECE9E7]/10 text-[#201E4B] dark:text-[#ECE9E7] font-medium text-sm transition-all duration-200 hover:bg-[#9156F1] hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-[#9156F1]/25 dark:hover:bg-[#9156F1] dark:hover:border-transparent"
          >
            Support
          </Link>
        </nav>

        {/* Footer */}
        <p className="text-xs text-[#201E4B]/35 dark:text-[#ECE9E7]/35">
          © {new Date().getFullYear()} Flair Health. All rights reserved.
        </p>

      </main>
    </div>
  );
}
