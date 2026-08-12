import Link from "next/link";
import { site } from "../site-data";

export function Logo() {
  return <span className="logo"><b>Plecho<span>Design</span></b><small>AUTOLAKOVŇA</small></span>;
}

export function Header() {
  return (
    <header className="header">
      <Link href="/" aria-label="PlechoDesign – domov"><Logo /></Link>
      <nav aria-label="Hlavná navigácia">
        <Link href="/sluzby">Služby</Link>
        <Link href="/poistne-udalosti">Poistné udalosti</Link>
        <Link href="/#realizacie">Realizácie</Link>
        <Link href="/#recenzie">Recenzie</Link>
        <Link href="/kontakt">Kontakt</Link>
      </nav>
      <a className="head-phone" href={site.phoneHref}><span>Zavolať</span> {site.phone}</a>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div><Logo /><p>Profesionálne lakovanie áut a kovových výrobkov v Pezinku.</p></div>
      <div><small>SLUŽBY</small><Link href="/sluzby">Lakovanie a opravy</Link><Link href="/poistne-udalosti">Poistné udalosti</Link><Link href="/#priemysel">Priemyselné lakovanie</Link></div>
      <div><small>KONTAKT</small><a href={site.phoneHref}>{site.phone}</a><a href={site.maps} target="_blank" rel="noreferrer">{site.workAddress}</a></div>
      <p className="copyright">© {new Date().getFullYear()} PlechoDesign</p>
    </footer>
  );
}
