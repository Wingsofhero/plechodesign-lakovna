import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "../components/SiteChrome";
import { assetBase, services, site } from "../site-data";

export const metadata = { title: "Služby | PlechoDesign Pezinok", description: "Lakovanie vozidiel, koordinácia klampiarskych a mechanických prác a pomoc pri poistných udalostiach v Pezinku." };

export default function ServicesPage() {
  return <main><Header />
    <section className="sub-hero"><Image src={`${assetBase}/gallery/praca-04.webp`} alt="Lakovací box Plechodesign" fill priority sizes="100vw" /><div className="sub-overlay"/><div><p className="overline">SLUŽBY</p><h1>Oprava vozidla<br />s jasnou <em>nadväznosťou.</em></h1><p>Lakovanie zabezpečujeme priamo. Potrebné klampiarske a mechanické práce vieme koordinovať so spolupracujúcimi dielňami v rovnakej budove.</p></div></section>
    <section className="detail-services">{services.map((s,index)=><article key={s.n}><div className="detail-photo"><Image src={`${assetBase}/gallery/praca-${String([3,17,11,14,20][index]).padStart(2,"0")}.webp`} alt={s.title} fill sizes="(max-width:800px) 100vw, 45vw" /></div><div><span>{s.n}</span><h2>{s.title}</h2><p>{s.text}</p>{index===4?<Link className="text-link" href="/poistne-udalosti">Ako postupovať pri škode →</Link>:<a className="text-link" href={site.phoneHref}>Dohodnúť obhliadku →</a>}</div></article>)}</section>
    <section className="page-cta"><p className="eyebrow">JEDEN KONTAKT</p><h2>Začnime krátkou<br /><em>obhliadkou.</em></h2><p>Rozsah prác a ich nadväznosť dohodneme podľa konkrétneho poškodenia vozidla.</p><a className="btn red" href={site.phoneHref}>Zavolať {site.phone} <span>↗</span></a></section>
    <Footer /></main>;
}
