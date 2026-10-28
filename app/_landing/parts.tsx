import Image from "next/image";

// Grace's onboarding cat (app repo 3cd2fa2e), self-hosted in public/mascot/. Decorative, so hidden from screen readers.
// ownership and first_entry have thin dark ground lines: keep them on light backgrounds only.
const POSES = {
  welcome: [360, 400],
  journal: [280, 262],
  intro: [280, 473],
  ownership: [280, 300],
  first_entry: [320, 290],
  get_to_know_you: [260, 467],
} as const;

export function Mascot({ pose, className }: { pose: keyof typeof POSES; className?: string }) {
  const [w, h] = POSES[pose];
  return <Image src={`/mascot/${pose}.png`} alt="" aria-hidden="true" width={w / 2} height={h / 2} className={className} />;
}

export function Phone({ src, label, priority = false }: { src: string | null; label: string; priority?: boolean }) {
  return (
    <div className="lp-phone">
      <div className="lp-phone-screen">
        {src ? (
          <Image src={src} alt={label} fill sizes="(max-width: 768px) 70vw, 300px" className="object-cover object-top" priority={priority} />
        ) : (
          <div className="lp-phone-placeholder" role="img" aria-label={`${label}, screenshot to come`}>
            <Image src="/app_icon.png" alt="" width={56} height={56} className="rounded-full" />
            <span>{label}</span>
            <small>Build 50 screenshot, from the PO</small>
          </div>
        )}
        <span className="lp-phone-island" aria-hidden="true" />
      </div>
    </div>
  );
}
