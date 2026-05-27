import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".html"));

const PRO_SPEC = `<table class="spec-tbl">
  <tr><td>Pris</td><td>1 499 kr</td></tr>
  <tr><td>Upplösning</td><td>XGA 1280×720 med stöd för 1080P, 2K och 4K-signaler</td></tr>
  <tr><td>Ljusstyrka</td><td>200 ANSI Lumen</td></tr>
  <tr><td>Skärmstorlek</td><td>30 till 130 tum</td></tr>
  <tr><td>Roterbar lins</td><td>180 grader</td></tr>
  <tr><td>WiFi</td><td>Ja (standard WiFi)</td></tr>
  <tr><td>Bluetooth</td><td>Ja</td></tr>
  <tr><td>Anslutningar</td><td>HDMI, USB, 3,5 mm ljud</td></tr>
  <tr><td>Vikt</td><td>1 kg</td></tr>
  <tr><td>Fläktljud</td><td>25 dB</td></tr>
  <tr><td>Strömförbrukning</td><td>48 W</td></tr>
  <tr><td>Högtalare</td><td>Inbyggd (stöd för externa)</td></tr>
  <tr><td>Appar</td><td>4000+ inbyggda streamingappar</td></tr>
  <tr><td>Ström</td><td>Kräver nätström, inget batteri</td></tr>
  <tr><td>Keystone</td><td>Automatisk keystone-korrigering</td></tr>
  <tr><td>Skärmdelning</td><td>Trådlös via WiFi och Bluetooth</td></tr>
  <tr><td>Garanti</td><td>2 år</td></tr>
  <tr><td>Storlek</td><td>B 9,48 cm × H 15,67 cm</td></tr>
</table>`;

const PRO2_SPEC = `<table class="spec-tbl">
  <tr><td>Pris</td><td>1 999 kr</td></tr>
  <tr><td>Upplösning</td><td>Native 1920×1080P med stöd för 4K-signaler</td></tr>
  <tr><td>Ljusstyrka</td><td>390 ANSI Lumen</td></tr>
  <tr><td>Kontrastförhållande</td><td>10 000:1</td></tr>
  <tr><td>Skärmstorlek</td><td>40 till 150 tum</td></tr>
  <tr><td>Roterbar lins</td><td>180 grader</td></tr>
  <tr><td>WiFi</td><td>WiFi 6 Dual Band (2,4 och 5 GHz)</td></tr>
  <tr><td>Bluetooth</td><td>5.0</td></tr>
  <tr><td>Anslutningar</td><td>HDMI, USB, 3,5 mm ljud</td></tr>
  <tr><td>Vikt</td><td>1 kg</td></tr>
  <tr><td>Fläktljud</td><td>25 dB</td></tr>
  <tr><td>Strömförbrukning</td><td>40 W</td></tr>
  <tr><td>Högtalare</td><td>Inbyggd 5W HiFi-högtalare (stöd för externa)</td></tr>
  <tr><td>Appar</td><td>4000+ inbyggda streamingappar</td></tr>
  <tr><td>Ström</td><td>Kräver nätström, inget batteri</td></tr>
  <tr><td>Keystone</td><td>Automatisk keystone-korrigering</td></tr>
  <tr><td>Skärmdelning</td><td>Trådlös via WiFi 6 och Bluetooth 5.0</td></tr>
  <tr><td>Garanti</td><td>2 år</td></tr>
  <tr><td>Storlek</td><td>B 10,1 cm × D 10,1 cm × H 17 cm</td></tr>
</table>`;

const COMPARE_BOX = `<div class="compare-box">
  <div class="compare-head"><div>Egenskap</div><div>MiniLux Pro</div><div>MiniLux Pro 2</div></div>
  <div class="compare-row"><div>Pris</div><div>1 499 kr</div><div>1 999 kr</div></div>
  <div class="compare-row"><div>Upplösning</div><div>XGA 1280×720</div><div>Native 1080p</div></div>
  <div class="compare-row"><div>Ljusstyrka</div><div>200 ANSI lm</div><div>390 ANSI lm</div></div>
  <div class="compare-row"><div>Max skärm</div><div>130 tum</div><div>150 tum</div></div>
  <div class="compare-row"><div>WiFi</div><div>Standard WiFi</div><div>WiFi 6 Dual Band</div></div>
  <div class="compare-row"><div>Bluetooth</div><div>Ja</div><div>5.0</div></div>
  <div class="compare-row"><div>Högtalare</div><div>Inbyggd</div><div>5W HiFi</div></div>
  <div class="compare-row"><div>Keystone</div><div>Automatisk</div><div>Automatisk</div></div>
</div>`;

function fixContent(c, file) {
  if (!/minilux|MiniLux/i.test(c)) return c;

  c = c.replace(/480\s*ANSI/gi, "200 ANSI");
  c = c.replace(/550\s*ANSI/gi, "390 ANSI");
  c = c.replace(/160\s*tum/g, "150 tum");
  c = c.replace(/\b810\s*g\b/g, "1 kg");
  c = c.replace(/\b780\s*g\b/g, "1 kg");
  c = c.replace(/WiFi\s*6E/gi, "WiFi 6 Dual Band");
  c = c.replace(/Bluetooth\s*5\.3/gi, "Bluetooth 5.0");
  c = c.replace(/Bluetooth\s*5\.2/gi, "Bluetooth");

  // Pro 1 wrong native 1080p in spec contexts
  c = c.replace(/1080p\s*Full\s*HD\s*Native/gi, "Native 1920×1080P");
  c = c.replace(/1080p\s*Full\s*HD/gi, "XGA 1280×720");

  // MiniLux Pro (ettan) WiFi 6 -> standard WiFi (careful patterns)
  c = c.replace(
    /(MiniLux Pro)(?! 2)([\s\S]{0,120}?)WiFi 6/gi,
    "$1$2standard WiFi"
  );
  c = c.replace(
    /(MiniLux Pro)(?! 2)([\s\S]{0,80}?)WiFi 6E/gi,
    "$1$2standard WiFi"
  );
  c = c.replace(/MiniLux Pro kör WiFi 6/gi, "MiniLux Pro har standard WiFi");
  c = c.replace(/MiniLux Pro \(WiFi 6\)/gi, "MiniLux Pro (standard WiFi)");
  c = c.replace(/MiniLux Pro med WiFi 6/gi, "MiniLux Pro med standard WiFi");
  c = c.replace(/WiFi 6 på ettan/gi, "standard WiFi på ettan");
  c = c.replace(/WiFi 6 på ettan/gi, "standard WiFi på ettan");

  c = c.replace(/rotationsfot(en)?/gi, (m) =>
    m.toLowerCase().includes("en") ? "180 graders roterbara linsen" : "180 graders roterbar lins"
  );
  c = c.replace(/Rotationsfot(en)?/g, (m) =>
    m.includes("en") ? "180 graders roterbara linsen" : "180 graders roterbar lins"
  );

  c = c.replace(/stereo-högtalare/gi, "5W HiFi-högtalare");
  c = c.replace(/Stereo-högtalare/gi, "5W HiFi-högtalare");
  c = c.replace(/inbyggd mono/gi, "inbyggd högtalare");
  c = c.replace(/Mono-högtalare/gi, "inbyggd högtalare");
  c = c.replace(/mono-ljud/gi, "inbyggd högtalare");
  c = c.replace(/,\s*mono/gi, ", inbyggd högtalare");

  c = c.replace(/<li>Kräver eluttag<\/li>\s*<li>Inbyggt ljud kan förbättras/g, "<li>Kräver eluttag i närheten</li>\n    <li>Medföljer ingen projiceringsduk</li>\n    <li>Inbyggt ljud kan förbättras");
  c = c.replace(/<li>Kräver eluttag i närheten<\/li>\s*<li>Kräver eluttag i närheten<\/li>/g, "<li>Kräver eluttag i närheten</li>");

  if (file === "minilux-pro.html") {
    c = c.replace(
      /<meta name="description" content="[^"]*"/,
      '<meta name="description" content="Vi testade MiniLux Pro i 47 timmar. 1 499 kr, 200 ANSI Lumen, 130 tums bild, standard WiFi. Läs vår recension."'
    );
    c = c.replace(/<table class="spec-tbl">[\s\S]*?<\/table>/, PRO_SPEC);
    c = c.replace(/<div class="compare-box">[\s\S]*?<\/div>\s*(?=<h2 id="specifikationer">)/, "");
  }
  if (file === "minilux-pro-2.html") {
    c = c.replace(
      /<meta name="description" content="[^"]*"/,
      '<meta name="description" content="Vi testade MiniLux Pro 2 i 52 timmar. 1 999 kr, 390 ANSI Lumen, 150 tums bild, WiFi 6, 5W HiFi-högtalare. Läs vår recension."'
    );
    c = c.replace(/<table class="spec-tbl">[\s\S]*?<\/table>/, PRO2_SPEC);
    c = c.replace(/<div class="compare-box">[\s\S]*?<\/div>/, COMPARE_BOX);
  }
  if (file === "minilux-pro-test.html") {
    c = c.replace(
      /<meta name="description" content="[^"]*"/,
      '<meta name="description" content="Vi testade MiniLux Pro i fyra veckor. 1 499 kr, 200 ANSI Lumen, 130 tum, standard WiFi. Läs vårt test."'
    );
    c = c.replace(/<table class="spec-tbl">[\s\S]*?<\/table>/, PRO_SPEC);
  }
  if (file === "minilux-vs-pro.html") {
    if (!c.includes("compare-box")) {
      c = c.replace(
        /<h2 id="ljusstyrka">/,
        `<h2 id="jamforelse-spec">Specifikationer sida vid sida</h2>\n${COMPARE_BOX}\n<h2 id="ljusstyrka">`
      );
    } else {
      c = c.replace(/<div class="compare-box">[\s\S]*?<\/div>/, COMPARE_BOX);
    }
  }

  return c;
}

for (const file of files) {
  const p = path.join(dir, file);
  let c = fs.readFileSync(p, "utf8");
  const orig = c;
  c = fixContent(c, file);
  if (c !== orig) {
    fs.writeFileSync(p, c, "utf8");
    console.log("updated:", file);
  }
}
