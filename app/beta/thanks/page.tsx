import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flair Health",
  robots: { index: false },
};

export default function BetaThanks() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-[#EFEFEF] dark:bg-[#201E4B]">
      <main className="flex flex-col items-center text-center px-6 py-24 max-w-md w-full gap-6">
        <h1 className="text-2xl font-semibold tracking-tight text-[#201E4B] dark:text-[#ECE9E7]">
          You&apos;re on the list.
        </h1>
        <p className="text-base text-[#201E4B]/70 dark:text-[#ECE9E7]/70 leading-relaxed">
          Invitations go out in small groups through TestFlight, and the email comes from Flair.
        </p>
        <Link href="/" className="text-sm text-[#9156F1] underline underline-offset-4">
          Back to Flair Health
        </Link>
      </main>
    </div>
  );
}
