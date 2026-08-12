export const site = {
  name: "PlechoDesign",
  location: "Pezinok",
  workAddress: "Viničnianska cesta 23, Pezinok",
  phone: "0949 189 314",
  phoneHref: "tel:+421949189314",
  smsHref: "sms:+421949189314",
  maps: "https://maps.app.goo.gl/i9bEoH8htcNDRVp47?g_st=iw",
};
export const assetBase = "https://raw.githubusercontent.com/Wingsofhero/plechodesign-lakovna/main/public/images";

export const services = [
  { n: "01", title: "Autolakovňa", text: "Opravy škrabancov, odrenín a poškodeného laku. Lakovanie jednotlivých dielov aj väčších častí karosérie." },
  { n: "02", title: "Opravy po nehode", text: "Podľa rozsahu poškodenia zabezpečíme lakovanie a skoordinujeme potrebné klampiarske či mechanické práce." },
  { n: "03", title: "Klampiarske opravy", text: "Klampiarske práce vieme koordinovať so spolupracujúcou dielňou priamo v rovnakej budove." },
  { n: "04", title: "Mechanické práce", text: "Ak si oprava vyžiada servisný zásah, zabezpečíme nadväznosť so spolupracujúcim autoservisom." },
  { n: "05", title: "Poistné udalosti", text: "Pri poistnej udalosti spolupracujeme s odborníkom a pomôžeme vám zorientovať sa v ďalšom postupe." },
];

export const gallery = Array.from({ length: 24 }, (_, index) => ({
  src: `${assetBase}/gallery/praca-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `Práca z lakovne Plechodesign – záber ${index + 1}`,
}));
