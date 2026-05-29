import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const ALT =
  "MiniLux Pro vit miniprojektor med 200 ANSI Lumen, 4K-stöd, standard WiFi och Bluetooth i cinematiskt nattljus";
const ALT_THUMB = "MiniLux Pro miniprojektor för hemmabio 2026";
const ALT_HALF = "MiniLux Pro smart miniprojektor med inbyggd högtalare";

const HERO = `<div class="art-img art-img-photo">
<picture>
<source type="image/webp" srcset="minilux-pro-mini-projektor-4k-wifi-bluetooth-hemmabio.webp" width="1200" height="675"/>
<img src="minilux-pro-hero.png" alt="${ALT}" title="MiniLux Pro recension 2026" width="1200" height="675" loading="eager" decoding="async" fetchpriority="high" style="width:100%;height:100%;object-fit:cover;display:block"/>
</picture>
</div>`;

const THUMB_IMG = `<picture><source type="image/webp" srcset="minilux-pro-hero-thumb.webp"/><img src="minilux-pro-hero.png" alt="${ALT_THUMB}" width="360" height="203" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block"/></picture>`;

const HALF_IMG = `<div class="img-half-item"><picture><source type="image/webp" srcset="minilux-pro-hero-half.webp"/><img src="minilux-pro-hero.png" alt="${ALT_HALF}" width="360" height="270" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block"/></picture></div>`;

const OG_META = `<meta property="og:image" content="https://miniprojektorrecensioner.se/minilux-pro-mini-projektor-4k-wifi-bluetooth-hemmabio.webp"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="675"/>
<meta property="og:image:alt" content="${ALT}"/>`;

const PRO_ARTICLES = [
  "minilux-pro.html",
  "minilux-pro-omdome.html",
  "minilux-pro-test.html",
  "minilux-vs-pro.html",
];

function injectOg(html) {
  if (html.includes("og:image")) return html;
  return html.replace(
    /<link rel="canonical"[^/]+\/>/,
    (m) => `${m}\n${OG_META}`
  );
}

function patchArticle(file) {
  let html = fs.readFileSync(path.join(ROOT, file), "utf8");
  html = injectOg(html);

  html = html.replace(
    /<div class="art-img art-img-photo">\s*<img[^>]*minilux-pro-hero[^>]*>\s*<\/div>/,
    HERO
  );
  html = html.replace(
    /<div class="art-img">\[ Bild:[^\]]*\]<\/div>/,
    HERO
  );
  html = html.replace(
    /<div class="art-img">\[ Omslagsbild \]<\/div>/,
    HERO
  );
  html = html.replace(
    /<div class="art-img">\[ Produktbild MiniLux Pro \]<\/div>/,
    HERO
  );

  if (file === "minilux-pro-omdome.html") {
    html = html.replace(
      /<div class="img-half-item img-h-a">\[ Bild:[^\]]*\]<\/div>/,
      HALF_IMG.replace('class="img-half-item"', 'class="img-half-item img-h-a"')
    );
  }

  html = html.replace(
    /(<a class="rel-card" href="minilux-pro\.html">)<div class="rel-img">\[ Bild \]<\/div>/g,
    `$1<div class="rel-img">${THUMB_IMG}</div>`
  );

  fs.writeFileSync(path.join(ROOT, file), html);
  console.log("article:", file);
}

function patchCardGrid(html) {
  const cardRe =
    /(<a class="card" href="minilux-pro(?:-omdome|-test)?\.html">[\s\S]*?<div class="card-img )[^>]*(>)\[ Bild \](<\/div>)/g;
  return html.replace(
    cardRe,
    `$1ci-pro-photo"$2${THUMB_IMG}$3`
  );
}

function patchBasta(html) {
  html = html.replace(
    /<div class="art-img"><img src="minilux-pro-hero\.png"[^/]+\/><\/div>/,
    HERO
  );
  html = html.replace(
    /<div class="rel-img"><img src="minilux-pro-hero\.png"[^/]+\/><\/div>/g,
    `<div class="rel-img">${THUMB_IMG}</div>`
  );
  return html;
}

for (const file of PRO_ARTICLES) patchArticle(file);

for (const file of ["basta-miniprojektorer-2026.html", "kategori-recensioner.html", "index.html"]) {
  let html = fs.readFileSync(path.join(ROOT, file), "utf8");
  if (file === "basta-miniprojektorer-2026.html") html = patchBasta(html);
  else html = patchCardGrid(html);
  fs.writeFileSync(path.join(ROOT, file), html);
  console.log("grid:", file);
}

console.log("Done.");
