import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "../components/SiteChrome";
import { assetBase, site } from "../site-data";

export const metadata = { title: "Poistné udalosti | PlechoDesign", description: "Praktický postup pri poškodení vozidla a koordinácia opravy s odborníkom na poistné udalosti." };
const steps=[
  ["01","Bezpečnosť na mieste","Najprv sa postarajte o bezpečnosť posádky a ostatných účastníkov. Ak si to situácia vyžaduje, kontaktujte príslušné zložky."],
  ["02","Zdokumentujte poškodenie","Odfoťte poškodenie vozidiel, celkovú situáciu a relevantné okolnosti. Uchovajte si dostupné údaje druhej strany."],
  ["03","Kontaktujte poisťovňu","Oznámte udalosť svojej poisťovni podľa jej pokynov. Pri nejasnostiach sa poraďte priamo s poisťovňou alebo servisom."],
  ["04","Dohodnite obhliadku","Pred opravou môže byť potrebná obhliadka poškodenia. Ozvite sa nám a pomôžeme vám koordinovať ďalší postup."],
  ["05","Oprava vozidla","Po odsúhlasení postupu zabezpečíme lakovanie a skoordinujeme potrebné klampiarske alebo mechanické práce."],
];
export default function InsurancePage(){return <main><Header />
  <section className="sub-hero insurance"><Image src={`${assetBase}/gallery/praca-23.webp`} alt="Poškodené vozidlo pripravené na opravu" fill priority sizes="100vw"/><div className="sub-overlay"/><div><p className="overline">POISTNÉ UDALOSTI</p><h1>Pomôžeme vám<br />postupovať <em>pokojne.</em></h1><p>Spolupracujeme s odborníkom na poistné udalosti. Prvým kontaktom zostáva Plechodesign a potrebné kroky s vami prejdeme.</p></div></section>
  <section className="insurance-intro"><div><p className="eyebrow">PRAKTICKÝ POSTUP</p><h2>Čo urobiť po<br />poškodení vozidla?</h2></div><div><p>Tento prehľad je všeobecnou pomôckou, nie právnou radou. Konkrétny postup si vždy overte vo svojej poisťovni.</p><div className="warning"><b>Dôležité</b><span>Opravu nezačínajte pred obhliadkou, ak ju poisťovňa vyžaduje.</span></div></div></section>
  <section className="steps">{steps.map(s=><article key={s[0]}><span>{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div></article>)}</section>
  <section className="expert-band"><div><p className="eyebrow">SPOLUPRÁCA S ODBORNÍKOM</p><h2>Nemusíte vedieť,<br />kde <em>začať.</em></h2><p>Zavolajte nám, stručne opíšte situáciu a pomôžeme vám zorientovať sa v ďalšom postupe.</p></div><div><a className="btn red" href={site.phoneHref}>Zavolať {site.phone} <span>↗</span></a><Link className="btn outline" href="/#objednavka">Pripraviť SMS</Link></div></section>
  <Footer /></main>}
