"use client";

import { FormEvent, useState } from "react";

export function SmsForm({ compact = false }: { compact?: boolean }) {
  const [insurance, setInsurance] = useState("Nie");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Dobrý deň, mám záujem o obhliadku vozidla.",
      `Meno: ${data.get("name")}`,
      `Vozidlo: ${data.get("car")}`,
      `Poškodenie: ${data.get("damage")}`,
      `Poistná udalosť: ${data.get("insurance")}`,
      data.get("insurer") ? `Poisťovňa: ${data.get("insurer")}` : "",
    ].filter(Boolean).join("\n");
    window.location.href = `sms:+421949189314?body=${encodeURIComponent(message)}`;
  };

  return <form className={`sms-form ${compact ? "compact" : ""}`} onSubmit={submit}>
    <div className="field"><label htmlFor="name">Meno a priezvisko</label><input id="name" name="name" autoComplete="name" required /></div>
    <div className="field"><label htmlFor="phone">Telefón</label><input id="phone" name="phone" type="tel" autoComplete="tel" required /></div>
    <div className="field"><label htmlFor="car">Značka a model vozidla</label><input id="car" name="car" required /></div>
    {!compact && <div className="field"><label htmlFor="damage">Stručný opis poškodenia</label><textarea id="damage" name="damage" rows={4} required /></div>}
    <div className="field"><label htmlFor="insurance">Týka sa oprava poistnej udalosti?</label><select id="insurance" name="insurance" value={insurance} onChange={(e) => setInsurance(e.target.value)}><option>Nie</option><option>Áno, škoda je už nahlásená</option><option>Áno, potrebujem ju nahlásiť</option><option>Áno, potrebujem poradiť s postupom</option></select></div>
    {insurance !== "Nie" && <div className="field"><label htmlFor="insurer">Poisťovňa</label><input id="insurer" name="insurer" /></div>}
    <label className="consent"><input type="checkbox" required /> Súhlasím s použitím údajov na vybavenie tejto požiadavky.</label>
    <button className="btn red" type="submit">Pripraviť SMS <span>↗</span></button>
    <p className="form-note">Po kliknutí sa otvorí SMS aplikácia s pripravenou správou. Správu odošlete sami.</p>
  </form>;
}
