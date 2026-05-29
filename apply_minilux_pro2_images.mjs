import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const ALT =
  "MiniLux Pro 2 vit miniprojektor med 390 ANSI Lumen, native 1080P, WiFi 6 och Bluetooth 5.0 i cinematiskt nattljus";
const ALT_THUMB = "MiniLux Pro 2 miniprojektor för hemmabio 2026";
const ALT_HALF = "MiniLux Pro 2 smart miniprojektor med 5W HiFi-högtalare";

const HERO = `<div class="art-img art-img-photo">
<picture>
<source type="image/webp" srcset="minilux-pro-2-mini-projektor-wifi6-4k-bluetooth-hemmabio.webp" width="1200" height="675"/>
<img src="minilux-pro-2-hero.png" alt="${ALT}" title="MiniLux Pro 2 recension 2026" width="1200" height="675" loading="eager" decoding="async" fetchpriority="high" style="width:100%;height:100%;object-fit:cover;display:block"/>
</picture>
</div>`;

const THUMB_IMG = `<picture><source type="image/webp" srcset="minilux-pro-2-hero-thumb.webp"/><img src="minilux-pro-2-hero.png" alt="${ALT_THUMB}" width="360" height="203" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block"/></picture>`;

const HALF_IMG = `<picture><source type="image/webp" srcset="minilux-pro-2-hero-half.webp"/><img src="minilux-pro-2-hero.png" alt="${ALT_HALF}" width="360" height="270" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block"/></picture>`;

const OG_META = `<meta property="og:image" content="https://miniprojektorrecensioner.se/minilux-pro-2-mini-projektor-wifi6-4k-bluetooth-hemmabio.webp"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="675"/>
<meta property="og:image:alt" content="${ALT}"/>`;

const PRO2_ARTICLES = ["minilux-pro-2.html", "minilux-pro-2-omdome.html"];

function injectOg(html) {
  if (html.includes("og:image") && html.includes("minilux-pro-2-mini")) return html;
  if (html.includes('property="og:image"')) {
    return html.replace(
      /<meta property="og:image"[^/]+\/>\s*(<meta property="og:image:[^/]+\/>\s*)*/,
      `${OG_META}\n`
    );
  }
  return html.replace(/<link rel="canonical"[^/]+\/>/, (m) => `${m}\n${OG_META}`);
}

function patchArticle(file) {
  let html = fs.readFileSync(path.join(ROOT, file), "utf8");
  html = injectOg(html);

  html = html.replace(
    /<div class="art-img art-img-photo">\s*<img[^>]*minilux-pro-2[^>]*>\s*<\/div>/s,
    HERO
  );
  html = html.replace(
    /<div class="art-img">\[ Bild:[^\]]*MiniLux Pro 2[^\]]*\]<\/div>/,
    HERO
  );

  html = html.replace(
    /<div class="img-half-item[^"]*">\s*<img src="minilux-pro-2[^"]*"[^/]*\/>\s*<\/div>/g,
    `<div class="img-half-item">$1</div>`.replace("$1", "") || `<div class="img-half-item">${HALF_IMG}</div>`
  );
  html = html.replace(
    /<div class="img-half-item"><img src="minilux-pro-2[^"]*"[^>]*><\/div>/g,
    `<div class="img-half-item">${HALF_IMG}</div>`
  );
  html = html.replace(
    /<div class="img-half-item img-h-[ab]"><img src="minilux-pro-2[^"]*"[^/]*\/><\/div>/g,
    (m) => m.replace(/<img[^/]+\/>/, HALF_IMG)
  );

  html = html.replace(
    /(<a class="rel-card" href="minilux-pro-2(?:-omdome)?\.html">)<div class="rel-img">\[ Bild \]<\/div>/g,
    `$1<div class="rel-img">${THUMB_IMG}</div>`
  );

  fs.writeFileSync(path.join(ROOT, file), html);
  console.log("article:", file);
}

function patchCardGrid(html) {
  return html.replace(
    /(<a class="card" href="minilux-pro-2(?:-omdome)?\.html">[\s\S]*?<div class="card-img )[^"]*(">)(?:\[ Bild \]|<picture>[\s\S]*?<\/picture>)(<\/div>)/g,
    `$1ci-pro2-photo"$2${THUMB_IMG}$3`
  );
}

function patchBasta(html) {
  html = html.replace(
    /<div class="art-img"><img src="minilux-pro-2-vit\.png"[^/]+\/><\/div>/,
    `<div class="art-img art-img-photo"><picture><source type="image/webp" srcset="minilux-pro-2-mini-projektor-wifi6-4k-bluetooth-hemmabio.webp" width="1200" height="675"/><img src="minilux-pro-2-hero.png" alt="${ALT}" title="MiniLux Pro 2 recension 2026" width="1200" height="675" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block"/></picture></div>`
  );
  return html;
}

for (const file of PRO2_ARTICLES) patchArticle(file);

const allHtml = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));
for (const file of allHtml) {
  let html = fs.readFileSync(path.join(ROOT, file), "utf8");
  let changed = false;

  const relBefore = html;
  html = html.replace(
    /(<a class="rel-card" href="minilux-pro-2(?:-omdome)?\.html">)<div class="rel-img">\[ Bild \]<\/div>/g,
    `$1<div class="rel-img">${THUMB_IMG}</div>`
  );
  if (html !== relBefore) changed = true;

  if (["basta-miniprojektorer-2026.html", "kategori-recensioner.html", "index.html"].includes(file)) {
    const gridBefore = html;
    html = patchCardGrid(html);
    if (file === "basta-miniprojektorer-2026.html") html = patchBasta(html);
    if (html !== gridBefore || file === "basta-miniprojektorer-2026.html") changed = true;
  }

  if (changed) {
    fs.writeFileSync(path.join(ROOT, file), html);
    console.log("patched:", file);
  }
}

console.log("Done.");
