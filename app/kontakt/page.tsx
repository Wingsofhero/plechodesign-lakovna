import { Footer, Header } from "../components/SiteChrome";
import { SmsForm } from "../components/SmsForm";
import { site } from "../site-data";
export const metadata={title:"Kontakt | PlechoDesign Pezinok",description:"Kontaktujte autolakovňu PlechoDesign na Viničnianskej ceste 23 v Pezinku."};
export default function ContactPage(){return <main><Header/><section className="contact-page"><div><p className="overline">KONTAKT</p><h1>Dohodnime si<br />ďalší <em>postup.</em></h1><p>Najrýchlejšie sa s nami spojíte telefonicky. Krátky formulár vám pripraví SMS s údajmi o vozidle a poškodení.</p><div className="contact-list"><div><small>TELEFÓN</small><a href={site.phoneHref}>{site.phone}</a></div><div><small>MIESTO VÝKONU PRÁCE</small><p>{site.workAddress}</p></div><a className="btn red" href={site.maps} target="_blank" rel="noreferrer">Spustiť navigáciu <span>↗</span></a></div></div><SmsForm compact/></section><Footer/></main>}
