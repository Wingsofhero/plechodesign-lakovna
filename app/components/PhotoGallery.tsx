"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { gallery } from "../site-data";

export function PhotoGallery() {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    if (active === null) return;
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((active + 1) % gallery.length);
      if (event.key === "ArrowLeft") setActive((active - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", key); document.body.style.overflow = ""; };
  }, [active]);

  return <>
    <div className="photo-grid">
      {gallery.map((photo, index) => (
        <button key={photo.src} onClick={() => setActive(index)} aria-label={`Zväčšiť fotografiu ${index + 1}`}>
          <Image src={photo.src} alt={photo.alt} fill sizes="(max-width:600px) 50vw, (max-width:1000px) 33vw, 20vw" />
        </button>
      ))}
    </div>
    {active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galéria realizácií">
      <button className="light-close" onClick={() => setActive(null)} aria-label="Zatvoriť">×</button>
      <button className="light-prev" onClick={() => setActive((active - 1 + gallery.length) % gallery.length)} aria-label="Predchádzajúca">←</button>
      <div className="light-image"><Image src={gallery[active].src} alt={gallery[active].alt} fill sizes="95vw" /></div>
      <button className="light-next" onClick={() => setActive((active + 1) % gallery.length)} aria-label="Nasledujúca">→</button>
      <span className="light-count">{active + 1} / {gallery.length}</span>
    </div>}
  </>;
}
