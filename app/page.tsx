import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "./components/SiteChrome";
import { PhotoGallery } from "./components/PhotoGallery";
import { SmsForm } from "./components/SmsForm";
import { assetBase, services, site } from "./site-data";

export default function Home() {
  return <main>
    <Header />
    <section className="hero" id="top">
      <Image src={`${assetBase}/gallery/praca-12.webp`} alt="Vozidlo počas profesionálneho lakovania v Plechodesign" fill priority sizes="100vw" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="overline">AUTOLAKOVŇA · PEZINOK</p>
        <h1>Precízna oprava.<br />Lak, ktorý vyzerá <em>správne.</em></h1>
        <p>Opravujeme škrabance a poškodený lak, lakujeme autodiely aj karosérie. Klampiarske, mechanické a poistné opravy vieme koordinovať na jednom mieste.</p>
        <div className="hero-actions"><a className="btn red" href="#objednavka">Dohodnúť obhliadku <span>↗</span></a><a className="btn glass" href={site.phoneHref}>Zavolať {site.phone}</a></div>
      </div>
      <div className="hero-place"><small>MIESTO VÝKONU PRÁCE</small><b>Viničnianska cesta 23<br />Pezinok</b></div>
    </section>

    <section className="trust-row">
      <article><span>01</span><h2>Priamo v lakovni</h2><p>Poškodenie si pozrieme a navrhneme ďalší postup.</p></article>
      <article><span>02</span><h2>Nadväzujúce práce</h2><p>Klampiareň a mechanická dielňa sú v rovnakej budove.</p></article>
      <article><span>03</span><h2>Pomoc pri škode</h2><p>Spolupracujeme s odborníkom na poistné udalosti.</p></article>
    </section>

    <section className="split intro-block">
      <div><p className="eyebrow">PLECHODESIGN</p><h2>Od malého škrabanca<br />po rozsiahlejšiu <em>opravu.</em></h2></div>
      <div className="prose"><p>Kvalitné lakovanie nie je iba otázkou vzhľadu. Pomáha chrániť karosériu a dotvára celkový charakter vozidla.</p><p>V Plechodesign opravujeme lak po škrabancoch, odreninách a ďalších poškodeniach. Postaráme sa o jednotlivé diely aj väčšie časti karosérie.</p><a className="text-link" href={site.phoneHref}>Poradiť sa o oprave →</a></div>
    </section>

    <section className="service-section" id="sluzby">
      <div className="section-head"><div><p className="eyebrow">SLUŽBY</p><h2>Opravu vieme<br />spojiť do <em>jedného celku.</em></h2></div><p>Jeden kontakt pre lakovanie a koordináciu ďalších prác potrebných na opravu vozidla.</p></div>
      <div className="service-grid">{services.map((service) => <article key={service.n}><span>{service.n}</span><h3>{service.title}</h3><p>{service.text}</p></article>)}</div>
      <Link className="btn dark" href="/sluzby">Pozrieť všetky služby <span>→</span></Link>
    </section>

    <section className="insurance-band">
      <Image src={`${assetBase}/gallery/praca-17.webp`} alt="Vozidlo pripravené na opravu poškodenia" fill sizes="100vw" />
      <div className="insurance-overlay" />
      <div className="insurance-copy"><p className="overline">POISTNÁ UDALOSŤ</p><h2>Poškodenie vozidla?<br /><em>Pomôžeme s postupom.</em></h2><p>Pri poistných udalostiach spolupracujeme s odborníkom. Ozvite sa najprv nám — prejdeme s vami situáciu a pomôžeme koordinovať ďalšie kroky od obhliadky po opravu.</p><div><Link className="btn red" href="/poistne-udalosti">Ako postupovať <span>→</span></Link><a className="btn glass" href={site.phoneHref}>Zavolať teraz</a></div></div>
    </section>

    <section className="gallery-section" id="realizacie">
      <div className="section-head light"><div><p className="eyebrow">Z NAŠEJ LAKOVNE</p><h2>Viac práce.<br />Viac <em>detailov.</em></h2></div><p>Autentické zábery priamo z lakovacieho boxu. Menší formát zachováva prirodzený charakter fotografií.</p></div>
      <PhotoGallery />
    </section>

    <section className="industrial" id="priemysel">
      <Image src={`${assetBase}/priemyselne-lakovanie-brany.png`} alt="Ilustračná vizualizácia kovových brán v lakovacom boxe" fill sizes="100vw" />
      <div className="industrial-overlay" />
      <div className="industrial-copy"><p className="overline">NIELEN PRE AUTÁ</p><h2>Priemyselné lakovanie<br /><em>kovových výrobkov.</em></h2><p>Poskytujeme aj priemyselné lakovanie kovových výrobkov kvalitnými epoxidovými a polyuretánovými nástrekmi.</p><a className="btn red" href={site.phoneHref}>Prebrať zákazku <span>↗</span></a><small>Ilustračná vizualizácia použitia reálneho lakovacieho boxu</small></div>
    </section>

    <section className="reviews" id="recenzie">
      <div><p className="eyebrow">GOOGLE PROFIL</p><h2>Skúsenosti zákazníkov<br />sú pre nás <em>dôležité.</em></h2></div>
      <div className="review-call"><div className="stars" aria-label="Google recenzie">★★★★★</div><p>Aktuálne hodnotenia a skúsenosti zákazníkov nájdete na Google profile Plechodesign. Konkrétne recenzie na stránku doplníme iba v ich pôvodnom znení.</p><a className="btn dark" href={site.maps} target="_blank" rel="noreferrer">Otvoriť Google profil <span>↗</span></a></div>
    </section>

    <section className="booking" id="objednavka">
      <div><p className="eyebrow">NEZÁVÄZNÁ OBHLIADKA</p><h2>Napíšte nám,<br />čo potrebuje <em>opraviť.</em></h2><p>Formulár pripraví SMS s najdôležitejšími údajmi. Fotografie poškodenia môžete poslať následne po dohode.</p></div>
      <SmsForm />
    </section>

    <section className="contact-band"><div><small>TELEFÓN</small><a href={site.phoneHref}>{site.phone}</a></div><div><small>MIESTO VÝKONU PRÁCE</small><p>{site.workAddress}</p></div><a className="btn red" href={site.maps} target="_blank" rel="noreferrer">Spustiť navigáciu <span>↗</span></a></section>
    <Footer />
  </main>;
}
