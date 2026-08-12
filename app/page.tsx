"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PHONE_DISPLAY = "0949 189 314";
const PHONE_LINK = "tel:+421949189314";
const MAP_LINK = "https://maps.app.goo.gl/i9bEoH8htcNDRVp47?g_st=iw";
const ASSET_BASE = "https://raw.githubusercontent.com/Wingsofhero/plechodesign-lakovna/main/public/images";

const gallery = [
  { src: `${ASSET_BASE}/realizacia-cierne-auto.webp`, alt: "Čierne auto pripravené na lakovanie v lakovacom boxe" },
  { src: `${ASSET_BASE}/realizacia-zlata.webp`, alt: "Lakovanie karosérie auta v zlatom odtieni" },
  { src: `${ASSET_BASE}/realizacia-suv.webp`, alt: "Svetlé SUV počas lakovania karosérie" },
  { src: `${ASSET_BASE}/realizacia-modre-auto.webp`, alt: "Modré auto pripravené na opravu laku" },
  { src: `${ASSET_BASE}/realizacia-kapota.webp`, alt: "Čerstvo nalakovaná čierna kapota s lesklým povrchom" },
  { src: `${ASSET_BASE}/realizacia-dvere.webp`, alt: "Lokálna oprava a lakovanie dverí auta" },
];

const benefits = [
  { number: "01", title: "Opravy poškodeného laku", text: "Od škrabancov a odrenín až po poškodené časti karosérie." },
  { number: "02", title: "Lakovanie autodielov", text: "Profesionálne lakovanie jednotlivých dielov aj väčších častí vozidla." },
  { number: "03", title: "Dohoda priamo s lakovňou", text: "Zavolajte nám, opíšte poškodenie a dohodneme si ďalší postup." },
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
          <span className="brand-name">Plecho<span>Design</span></span>
          <small>AUTOLAKOVŇA</small>
        </a>
        <nav aria-label="Hlavná navigácia">
          <a href="#sluzby">Služby</a>
          <a href="#realizacie">Realizácie</a>
          <a href="#priemysel">Priemyselné lakovanie</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="header-call" href={PHONE_LINK}>Zavolať <span>{PHONE_DISPLAY}</span></a>
      </header>

      <section className="hero" id="top">
        <Image src={`${ASSET_BASE}/hero-lakovanie.webp`} alt="Profesionálne lakovanie auta v prevádzke Plechodesign" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">AUTOLAKOVŇA V PEZINKU</p>
          <h1>Vášmu autu<br />vrátime <em>lesk.</em></h1>
          <p className="hero-lead">Profesionálne lakovanie áut, opravy škrabancov a poškodeného laku. Kvalitne, komplexne a rýchlo.</p>
          <div className="actions">
            <a className="button button-primary" href={PHONE_LINK}>Zavolať teraz <span aria-hidden="true">↗</span></a>
            <a className="button button-ghost" href={MAP_LINK} target="_blank" rel="noreferrer">Navigovať k nám <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-address"><span>Miesto výkonu práce</span><p>Viničnianska cesta 23<br />Pezinok</p></div>
      </section>

      <section className="benefit-strip" aria-label="Prehľad služieb">
        {benefits.map((benefit) => (
          <article key={benefit.number}>
            <span>{benefit.number}</span>
            <div><h2>{benefit.title}</h2><p>{benefit.text}</p></div>
          </article>
        ))}
      </section>

      <section className="intro" id="sluzby">
        <div className="intro-heading">
          <p className="section-kicker">LAKOVANIE ÁUT</p>
          <h2>Kvalitný lak chráni auto<br />a dotvára jeho <em>charakter.</em></h2>
        </div>
        <div className="intro-copy">
          <p>V Plechodesign si uvedomujeme dôležitosť kvalitného lakovania áut. Lak pomáha chrániť karosériu a zároveň odráža váš osobný štýl.</p>
          <p>Postaráme sa o opravu laku po škrabancoch a poškodeniach, lakovanie jednotlivých autodielov aj väčších častí karosérie.</p>
          <a href={PHONE_LINK}>Poradiť sa o oprave <span>↗</span></a>
        </div>
      </section>

      <section className="quality-section">
        <p className="section-kicker">AKO PRACUJEME</p>
        <h2>Kvalitne. Komplexne. <em>Rýchlo.</em></h2>
        <div className="quality-grid">
          <article><span>01</span><h3>Posúdenie poškodenia</h3><p>Najprv si prejdeme rozsah poškodenia a dohodneme vhodný postup opravy.</p></article>
          <article><span>02</span><h3>Príprava a lakovanie</h3><p>Povrch pripravíme a nalakujeme podľa potrieb konkrétneho dielu alebo karosérie.</p></article>
          <article><span>03</span><h3>Výsledný detail</h3><p>Dôraz kladieme na čisté spracovanie a vzhľad opraveného povrchu.</p></article>
        </div>
      </section>

      <section className="gallery-section" id="realizacie">
        <div className="gallery-heading">
          <div><p className="section-kicker">Z NAŠEJ LAKOVNE</p><h2>Výsledok najlepšie<br />vidno v <em>detaile.</em></h2></div>
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

      <section className="industrial" id="priemysel">
        <Image src={`${ASSET_BASE}/priemyselne-lakovanie-brany.png`} alt="Ilustračný záber kovových brán v lakovacom boxe" fill sizes="100vw" />
        <div className="industrial-shade" />
        <div className="industrial-copy">
          <p className="section-kicker">NIELEN PRE AUTÁ</p>
          <h2>Priemyselné lakovanie<br /><em>kovových výrobkov.</em></h2>
          <p>Poskytujeme aj priemyselné lakovanie kovových výrobkov kvalitnými epoxidovými a polyuretánovými nástrekmi.</p>
          <a className="button button-primary" href={PHONE_LINK}>Prebrať zákazku <span>↗</span></a>
          <small>Ilustračná vizualizácia použitia lakovacieho boxu</small>
        </div>
      </section>

      <section className="contact" id="kontakt">
        <div className="contact-copy">
          <p className="section-kicker">KONTAKT</p>
          <h2>Dohodnime si<br />ďalší <em>postup.</em></h2>
          <p>Zavolajte nám alebo si otvorte navigáciu priamo k lakovni.</p>
        </div>
        <div className="contact-details">
          <div><span>TELEFÓN</span><a href={PHONE_LINK}>{PHONE_DISPLAY}</a></div>
          <div><span>MIESTO VÝKONU PRÁCE</span><p>Viničnianska cesta 23<br />Pezinok</p></div>
          <div className="contact-actions">
            <a className="button button-dark" href={PHONE_LINK}>Zavolať <span>↗</span></a>
            <a className="button button-outline" href={MAP_LINK} target="_blank" rel="noreferrer">Spustiť navigáciu <span>↗</span></a>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-name">Plecho<span>Design</span></span><small>AUTOLAKOVŇA</small></a>
        <p>Profesionálne lakovanie áut a kovových výrobkov v Pezinku.</p>
        <a href="#top">Späť hore ↑</a>
      </footer>

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galéria realizácií">
          <button className="lightbox-close" onClick={() => setLightbox(false)} aria-label="Zatvoriť galériu">×</button>
          <button className="lightbox-arrow left" onClick={() => move(-1)} aria-label="Predchádzajúca fotografia">←</button>
          <div className="lightbox-image"><Image src={gallery[index].src} alt={gallery[index].alt} fill sizes="95vw" /></div>
          <button className="lightbox-arrow right" onClick={() => move(1)} aria-label="Nasledujúca fotografia">→</button>
        </div>
      )}
    </main>
  );
}
