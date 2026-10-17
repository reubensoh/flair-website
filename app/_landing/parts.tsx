import Image from "next/image";
import type { ReactNode } from "react";

const showMarkers = process.env.VERCEL_ENV !== "production";

// Wraps every PROPOSED string. Off production it is underlined so the PO and counsel can see what is unread.
export function Proposed({ children }: { children: ReactNode }) {
  return (
    <span data-proposed="" className={showMarkers ? "lp-proposed" : undefined} title={showMarkers ? "PROPOSED, not yet read by counsel" : undefined}>
      {children}
    </span>
  );
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
