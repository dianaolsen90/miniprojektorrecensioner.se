import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const filler =
  "För många läsare är den största vinsten att slippa dyra misstag: en projektor med för låg ANSI-ljusstyrka, en soundbar som inte klarar dialog i ert rum, eller streamingupplägg som buffrar varje kväll. Genom att testa i verkligheten istället för att återge pressreleaser hoppas vi att du kan fatta beslut tryggare – oavsett om du väljer budget eller premium.";

const editorial = [
  "Alla slutsatser i den här artikeln bygger på praktiska tester i svenska hem – vardagsrum, sovrum och i vissa fall terrass – under våren 2026. Vi finansierar utrustningen själva och har inga affiliate-avtal som styr rankning eller formuleringar. Om en produkt nämns är det för att den är relevant för ämnet, inte för att någon tillverkare bett om det.",
  "När vi skriver om specifikationer som lumen, HDR eller WiFi-generationer jämför vi alltid mot vad du faktiskt upplever på soffan, inte bara vad databladet lovar. Det är därför våra guider ofta skiljer sig från butikernas marknadsföring: vi mäter och tittar länge innan vi rekommenderar något.",
];

for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".html"))) {
  let html = fs.readFileSync(path.join(dir, file), "utf8");
  const before = html;
  while (html.includes(`<p>${filler}</p>`)) {
    html = html.replace(`<p>${filler}</p>`, "");
  }
  for (const p of editorial) {
    while ((html.match(new RegExp(`<p>${p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</p>`, "g")) || []).length > 1) {
      html = html.replace(`<p>${p}</p>`, "");
    }
  }
  const kontakt =
    'Har du frågor eller hittat ett faktafel? Kontakta oss via <a href="kontakt.html">kontaktsidan</a>. Vi uppdaterar artiklar när nya firmware-versioner eller modeller ändrar förutsättningarna väsentligt, och datum i artikelhuvudet visar senaste större revision.';
  while ((html.match(new RegExp(`<p>${kontakt.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</p>`, "g")) || []).length > 1) {
    html = html.replace(`<p>${kontakt}</p>`, "");
  }
  if (html !== before) {
    fs.writeFileSync(path.join(dir, file), html);
    console.log("Cleaned:", file);
  }
}
