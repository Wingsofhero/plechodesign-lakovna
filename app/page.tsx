"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PHONE_DISPLAY = "0949 189 314";
const PHONE_LINK = "tel:+421949189314";
const MAP_LINK = "https://maps.app.goo.gl/i9bEoH8htcNDRVp47?g_st=iw";

const gallery = [
  { src: "/images/realizacia-cierne-auto.jpg", alt: "Čierne auto pripravené na lakovanie v lakovacom boxe" },
  { src: "/images/realizacia-zlata.jpg", alt: "Lakovanie karosérie auta v zlatom odtieni" },
  { src: "/images/realizacia-suv.jpg", alt: "Svetlé SUV počas lakovania karosérie" },
  { src: "/images/realizacia-modre-auto.jpg", alt: "Modré auto pripravené na opravu laku" },
  { src: "/images/realizacia-kapota.jpg", alt: "Čerstvo nalakovaná čierna kapota s lesklým povrchom" },
  { src: "/images/realizacia-dvere.jpg", alt: "Lokálna oprava a lakovanie dverí auta" },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const move = (direction: number) => {
    setIndex((current) => (current + direction + gallery.length) % gallery.length);
  };

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(false);
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Plechodesign – domov">
          <span className="brand-mark">P</span>
          <span>PLECHO<span>DESIGN</span></span>
        </a>
        <nav aria-label="Hlavná navigácia">
          <a href="#sluzby">Služby</a>
          <a href="#realizacie">Realizácie</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="header-call" href={PHONE_LINK}>Zavolať <span>{PHONE_DISPLAY}</span></a>
      </header>

      <section className="hero" id="top">
        <Image src="/images/hero-lakovanie.jpg" alt="Profesionálne lakovanie auta v prevádzke Plechodesign" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">AUTOLAKOVŇA · PEZINOK</p>
          <h1>Vášmu autu<br />vrátime <em>lesk.</em></h1>
          <p className="hero-lead">Profesionálne lakovanie áut — kvalitne, komplexne a rýchlo. Opravíme lak po škrabancoch aj poškodeniach.</p>
          <div className="actions">
            <a className="button button-primary" href={PHONE_LINK}>Zavolať teraz <span aria-hidden="true">↗</span></a>
            <a className="button button-ghost" href="#realizacie">Pozrieť realizácie <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-note"><span>01</span><p>Salón krásy<br />pre vaše auto.</p></div>
      </section>

      <section className="intro" id="sluzby">
        <p className="section-kicker">ČO ROBÍME</p>
        <div className="intro-grid">
          <h2>Od drobného škrabanca<br />po <em>kompletný lak.</em></h2>
          <p>Poškodený lak nemusí znamenať trvalú stopu. V Plechodesign sa venujeme opravám laku aj profesionálnemu lakovaniu vozidiel s dôrazom na čisté spracovanie a výsledný detail.</p>
        </div>

        <div className="service-cards">
          <article className="service-card service-car">
            <div className="service-number">01</div>
            <div>
              <p className="tag">AUTOLAKOVŇA</p>
              <h3>Lakovanie áut</h3>
              <p>Opravy laku po škrabancoch a poškodeniach, lokálne zásahy aj lakovanie väčších častí karosérie.</p>
              <a href={PHONE_LINK}>Dohodnúť opravu <span>↗</span></a>
            </div>
          </article>
          <article className="service-card service-industry">
            <Image src="/images/lakovaci-box.jpg" alt="Lakovací box v prevádzke Plechodesign" fill sizes="(max-width: 800px) 100vw, 50vw" />
            <div className="card-overlay" />
            <div className="service-number">02</div>
            <div>
              <p className="tag">PRIEMYSELNÉ LAKOVANIE</p>
              <h3>Kovové výrobky</h3>
              <p>Priemyselné lakovanie kovových výrobkov epoxidovými a polyuretánovými nástrekmi.</p>
              <a href={PHONE_LINK}>Prebrať zákazku <span>↗</span></a>
            </div>
          </article>
        </div>
      </section>

      <section className="gallery-section" id="realizacie">
        <div className="gallery-heading">
          <div><p className="section-kicker">Z NAŠEJ LAKOVNE</p><h2>Práca, ktorú<br />vidno v <em>detaile.</em></h2></div>
          <div className="gallery-controls">
            <button onClick={() => move(-1)} aria-label="Predchádzajúca fotografia">←</button>
            <span>{String(index + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</span>
            <button onClick={() => move(1)} aria-label="Nasledujúca fotografia">→</button>
          </div>
        </div>
        <div className="gallery-window">
          <button className="gallery-main" onClick={() => setLightbox(true)} aria-label="Otvoriť fotografiu na celú obrazovku">
            <Image src={gallery[index].src} alt={gallery[index].alt} fill sizes="(max-width: 800px) 100vw, 68vw" />
            <span className="zoom">ZVÄČŠIŤ <b>＋</b></span>
          </button>
          <button className="gallery-next" onClick={() => move(1)} aria-label="Zobraziť ďalšiu fotografiu">
            <Image src={gallery[(index + 1) % gallery.length].src} alt="" fill sizes="30vw" />
          </button>
        </div>
        <div className="dots" aria-label="Výber fotografie">
          {gallery.map((item, itemIndex) => <button key={item.src} onClick={() => setIndex(itemIndex)} className={itemIndex === index ? "active" : ""} aria-label={`Fotografia ${itemIndex + 1}`} />)}
        </div>
      </section>

      <section className="contact" id="kontakt">
        <div className="contact-copy">
          <p className="section-kicker">KONTAKT</p>
          <h2>Pripravení dať<br />autu nový <em>vzhľad?</em></h2>
          <p>Ozvite sa nám a dohodnite si ďalší postup.</p>
        </div>
        <div className="contact-details">
          <div><span>TELEFÓN</span><a href={PHONE_LINK}>{PHONE_DISPLAY}</a></div>
          <div><span>NÁJDETE NÁS</span><p>Viničnianska cesta 23<br />Pezinok</p></div>
          <div className="contact-actions">
            <a className="button button-dark" href={PHONE_LINK}>Zavolať <span>↗</span></a>
            <a className="button button-outline" href={MAP_LINK} target="_blank" rel="noreferrer">Spustiť navigáciu <span>↗</span></a>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">P</span><span>PLECHO<span>DESIGN</span></span></a>
        <p>Profesionálne lakovanie áut a kovových výrobkov v Pezinku.</p>
        <a href="#top">Späť hore ↑</a>
      </footer>

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galéria realizácií">
          <button className="lightbox-close" onClick={() => setLightbox(false)} aria-label="Zatvoriť galériu">×</button>
          <button className="lightbox-arrow left" onClick={(event) => { event.stopPropagation(); move(-1); }} aria-label="Predchádzajúca fotografia">←</button>
          <div className="lightbox-image"><Image src={gallery[index].src} alt={gallery[index].alt} fill sizes="95vw" /></div>
          <button className="lightbox-arrow right" onClick={(event) => { event.stopPropagation(); move(1); }} aria-label="Nasledujúca fotografia">→</button>
        </div>
      )}
    </main>
  );
}
