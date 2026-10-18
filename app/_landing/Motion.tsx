"use client";

import { useEffect } from "react";

// All landing-page motion in one place. Bundled with the site; loads nothing from another host.
export default function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];

    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.setAttribute("data-shown", ""));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.setAttribute("data-shown", "");
              io.unobserve(e.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
      );
      reveals.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    const header = document.querySelector<HTMLElement>("[data-header]");
    const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-stack] [data-card]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      header?.toggleAttribute("data-scrolled", window.scrollY > 24);
      if (reduce) return;
      // A covered card shrinks and dims as the next one slides over it, as in the Framer file.
      for (let i = 0; i < cards.length - 1; i++) {
        const card = cards[i];
        const next = cards[i + 1];
        const stick = parseFloat(getComputedStyle(card).top) || 0;
        const span = card.offsetHeight;
        const covered = Math.min(1, Math.max(0, 1 - (next.getBoundingClientRect().top - stick) / span));
        const depth = cards.length - 1 - i;
        card.style.setProperty("--stack-scale", String(1 - covered * 0.05 * depth));
        card.style.setProperty("--stack-dim", String(covered * 0.35));
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    });

    // The phone menu is a <details>; close it when one of its links is followed.
    const menu = document.querySelector<HTMLDetailsElement>("[data-menu]");
    const closeMenu = (e: Event) => {
      if ((e.target as HTMLElement).closest("a")) menu?.removeAttribute("open");
    };
    menu?.addEventListener("click", closeMenu);
    cleanups.push(() => menu?.removeEventListener("click", closeMenu));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
