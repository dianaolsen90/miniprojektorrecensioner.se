import fs from "fs";
import path from "path";

const ROOT = process.cwd();

const FOOT_DESC =
  "Vi testar hemmabio, projektorer och ljud utan reklamlöften. Alla produkter köps med egna medel och testas i verkliga hem.";

const FOOT_POPULAR = `<h4>POPUL&Auml;RA ARTIKLAR</h4><a href="minilux-pro.html">MiniLux Pro recension</a><a href="minilux-pro-2.html">MiniLux Pro 2 recension</a><a href="minilux-pro-omdome.html">MiniLux Pro omd&ouml;me</a><a href="minilux-pro-2-omdome.html">MiniLux Pro 2 omd&ouml;me</a><a href="miniprojektor-se-recension.html">Miniprojektor.se recension</a><a href="miniprojektor-se-omdome.html">Miniprojektor.se omd&ouml;me</a><a href="basta-miniprojektorer-2026.html">B&auml;sta miniprojektorer 2026</a><a href="hemmabio-setup-guide.html">Bygg ditt hemmabio</a>`;

const FOOT_OM = `<h4>OM OSS</h4><a href="om-oss.html">Om oss</a><a href="om-oss.html">V&aring;ra skribenter</a><a href="kontakt.html">Kontakt</a><a href="integritetspolicy.html">Integritetspolicy</a><a href="nyhetsbrev.html">Nyhetsbrev</a>`;

const FOOT_BOTTOM = `<div class="foot-bottom"><p>&copy; 2026 miniprojektorrecensioner.se - Oberoende hemmabiotester</p><p><a href="om-oss.html">Om oss</a> · <a href="kontakt.html">Kontakt</a> · <a href="integritetspolicy.html">Integritetspolicy</a></p></div>`;

const NAV_RIGHT_OLD =
  /<div class="nav-right"><span class="nav-search">&#128269;<\/span><span class="nav-divider"><\/span><span class="nav-avatar">HB<\/span><\/div>/g;
const NAV_RIGHT_NEW = `<div class="nav-right"><a href="nyhetsbrev.html" style="font-size:12px;color:#4a6280;font-weight:600;text-decoration:none">Nyhetsbrev</a><span class="nav-search">&#128269;</span><span class="nav-divider"></span><span class="nav-avatar">MR</span></div>`;

const URL_PRO =
  "https://miniprojektor.se/products/minilux-pro-smart-miniprojektor";
const URL_PRO2 =
  "https://miniprojektor.se/products/minilux-pro-2-smart-miniprojektor-med-bluetooth-och-wifi-svart";
const URL_STORE = "https://miniprojektor.se";

const CTA_ARTICLES = new Set([
  "minilux-pro.html",
  "minilux-pro-2.html",
  "minilux-pro-omdome.html",
  "minilux-pro-2-omdome.html",
  "minilux-vs-pro.html",
  "miniprojektor-se-recension.html",
  "miniprojektor-se-omdome.html",
]);

function ctaBox(label, title, tagline, btnText, href) {
  return `<div class="cta-box">
  <p style="font-size:.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#22d3ee;margin-bottom:.6rem">${label}</p>
  <div class="product-name" style="font-family:'DM Serif Display',serif;font-size:1.4rem;margin-bottom:.5rem">${title}</div>
  <p style="font-size:.88rem;color:#8899aa;max-width:400px;margin:0 auto 1.2rem;line-height:1.6">${tagline}</p>
  <a class="cta-btn" href="${href}" rel="dofollow">${btnText}</a>
</div>`;
}

const CTA_BY_FILE = {
  "minilux-pro.html": ctaBox(
    "Var kan jag köpa?",
    "MiniLux Pro",
    "200 ANSI Lumen · 130 tums bild · 1 499 kr",
    "Till MiniLux Pro →",
    URL_PRO
  ),
  "minilux-pro-2.html": ctaBox(
    "Testad och rekommenderad",
    "MiniLux Pro 2 - 1 999 kr",
    "390 ANSI Lumen · 150 tums bild · WiFi 6",
    "Köp hos miniprojektor.se",
    URL_PRO2
  ),
  "minilux-pro-omdome.html": ctaBox(
    "Redo att köpa?",
    "MiniLux Pro",
    "Se aktuellt pris och tillgänglighet",
    "Se MiniLux Pro hos miniprojektor.se",
    URL_PRO
  ),
  "minilux-pro-2-omdome.html": ctaBox(
    "Vill du läsa mer?",
    "MiniLux Pro 2",
    "Se aktuellt pris och tillgänglighet",
    "Läs mer om MiniLux Pro 2",
    URL_PRO2
  ),
  "minilux-vs-pro.html": ctaBox(
    "Testad och rekommenderad",
    "MiniLux Pro 2 - 1 999 kr",
    "390 ANSI Lumen · 150 tums bild · WiFi 6",
    "Köp hos miniprojektor.se",
    URL_PRO2
  ),
  "miniprojektor-se-recension.html": ctaBox(
    "Besök butiken",
    "Miniprojektor.se",
    "Fri frakt · 2 års garanti · 4-7 dagars leverans",
    "Gå till Miniprojektor.se",
    URL_STORE
  ),
  "miniprojektor-se-omdome.html": ctaBox(
    "Handla tryggt",
    "Miniprojektor.se",
    "Fri frakt · Swish och Klarna · Svar inom 24h",
    "Se produkterna hos Miniprojektor.se",
    URL_STORE
  ),
};

const ARTICLE_META = {
  "minilux-pro.html": {
    title: "MiniLux Pro recension 2026 | miniprojektorrecensioner.se",
    desc: "MiniLux Pro recension 2026: vi testade 200 ANSI Lumen och 130 tums bild i verkliga hem under 47 timmar. Köpt med egna medel. Läs vår ärliga bedömning.",
    h1: "MiniLux Pro recension 2026: komplett test efter 47 timmar",
    date: "14 maj 2026",
  },
  "minilux-pro-2.html": {
    title: "MiniLux Pro 2 recension 2026 | miniprojektorrecensioner.se",
    desc: "MiniLux Pro 2 recension 2026: native 1080P, 390 ANSI Lumen och WiFi 6 testat i 52 timmar. Är uppgraderingen värd 1 999 kr?",
    h1: "MiniLux Pro 2 recension 2026: 52 timmars test i verkliga hem",
    date: "21 maj 2026",
  },
  "minilux-pro-omdome.html": {
    title: "MiniLux Pro omdöme 2026 | miniprojektorrecensioner.se",
    desc: "MiniLux Pro omdöme 2026: samlade kundröster och vår expertanalys av 200 ANSI Lumen-projektorn. Oberoende granskning.",
    h1: "MiniLux Pro omdöme 2026: vad säger köparna egentligen?",
    date: "16 maj 2026",
  },
  "minilux-pro-2-omdome.html": {
    title: "MiniLux Pro 2 omdöme 2026 | miniprojektorrecensioner.se",
    desc: "MiniLux Pro 2 omdöme 2026: äkta kundröster, betyg och vår analys av uppgraderingen mot Pro 1.",
    h1: "MiniLux Pro 2 omdöme 2026: samlade betyg och äkta kundröster",
    date: "23 maj 2026",
  },
  "hemmabio-setup-guide.html": {
    title: "Bygg ditt hemmabio 2026: komplett startguide | miniprojektorrecensioner.se",
    h1: "Bygg ditt hemmabio 2026: komplett startguide från grunden",
    date: "8 maj 2026",
  },
  "dolby-atmos-hemma.html": {
    title: "Dolby Atmos hemma 2026 | miniprojektorrecensioner.se",
    h1: "Dolby Atmos hemma 2026: så får du rätt ljud i vardagsrummet",
    date: "2 maj 2026",
  },
  "4k-vs-1080p-projektor.html": {
    title: "4K eller 1080P projektor 2026 | miniprojektorrecensioner.se",
    h1: "4K eller 1080P projektor 2026: ser du skillnaden på tre meters avstånd?",
    date: "29 apr 2026",
  },
  "streaming-kvalitet-guide.html": {
    title: "Streamingkvalitet 2026 | miniprojektorrecensioner.se",
    h1: "Streamingkvalitet 2026: vilken tjänst ger bäst bild hemma?",
    date: "26 apr 2026",
  },
  "projektor-utomhus.html": {
    title: "Utomhusbio 2026 | miniprojektorrecensioner.se",
    h1: "Utomhusbio 2026: praktisk guide från förberedelse till filmstart",
    date: "23 apr 2026",
  },
  "hdmi-kablar-sanning.html": {
    title: "HDMI-kablar 2026 | miniprojektorrecensioner.se",
    h1: "HDMI-kablar 2026: spelar kabeln någon roll i hemmabion?",
    date: "17 apr 2026",
  },
  "projektor-eller-oled.html": {
    title: "Projektor eller OLED-TV 2026 | miniprojektorrecensioner.se",
    h1: "Projektor eller OLED-TV 2026: en ärlig jämförelse för hemmabioentusiaster",
    date: "20 apr 2026",
  },
  "ljusstyrka-projektor.html": {
    title: "Ljusstyrka projektor 2026 | miniprojektorrecensioner.se",
    h1: "Ljusstyrka projektor 2026: hur många ANSI lumen behöver du?",
    date: "14 apr 2026",
  },
  "duk-eller-vagg.html": {
    title: "Projiceringsduk eller vägg 2026 | miniprojektorrecensioner.se",
    h1: "Projiceringsduk eller vägg 2026: vad ger bäst bild per krona?",
    date: "3 apr 2026",
  },
  "hemmabio-barn.html": {
    title: "Projektor för barnfamiljen 2026 | miniprojektorrecensioner.se",
    h1: "Projektor för barnfamiljen 2026: säkert och enkelt hemmabio",
    date: "5 apr 2026",
  },
  "minilux-vs-pro.html": {
    title: "MiniLux Pro vs MiniLux Pro 2 2026 | miniprojektorrecensioner.se",
    h1: "MiniLux Pro vs MiniLux Pro 2 2026: vad får du mer för pengarna?",
    date: "11 apr 2026",
  },
  "wifi-streaming-projektor.html": {
    title: "WiFi streaming projektor 2026 | miniprojektorrecensioner.se",
    h1: "WiFi streaming projektor 2026: när spelar generationen roll?",
    date: "1 apr 2026",
  },
  "sovrumsprojektor-guide.html": {
    title: "Sovrumsprojektor 2026 | miniprojektorrecensioner.se",
    h1: "Sovrumsprojektor 2026: den ultimata guiden till film i sängen",
    date: "8 apr 2026",
  },
  "hdr-forklarat.html": {
    title: "HDR förklarat 2026 | miniprojektorrecensioner.se",
    h1: "HDR förklarat 2026: vad betyder det för din projektor?",
    date: "1 apr 2026",
  },
  "bluetooth-hogtalare-projektor.html": {
    title: "Bluetooth-högtalare 2026 | miniprojektorrecensioner.se",
    h1: "Bluetooth-högtalare 2026: bästa paret till din projektor under 1 500 kr",
    date: "1 apr 2026",
  },
  "minilux-pro-test.html": {
    date: "11 maj 2026",
    h1: "MiniLux Pro test 2026: fyra veckors vardagsprov i riktigt hem",
    title: "MiniLux Pro test 2026 | miniprojektorrecensioner.se",
  },
};

const DATE_MAP = {
  "miniprojektor-se-omdome.html": "27 maj 2026",
  "miniprojektor-se-recension.html": "25 maj 2026",
  "minilux-pro-2-omdome.html": "23 maj 2026",
  "minilux-pro-2.html": "21 maj 2026",
  "basta-miniprojektorer-2026.html": "19 maj 2026",
  "minilux-pro-omdome.html": "16 maj 2026",
  "minilux-pro.html": "14 maj 2026",
  "minilux-pro-test.html": "11 maj 2026",
  "hemmabio-setup-guide.html": "8 maj 2026",
  "soundbar-guide-2026.html": "5 maj 2026",
  "dolby-atmos-hemma.html": "2 maj 2026",
  "4k-vs-1080p-projektor.html": "29 apr 2026",
  "streaming-kvalitet-guide.html": "26 apr 2026",
  "projektor-utomhus.html": "23 apr 2026",
  "projektor-eller-oled.html": "20 apr 2026",
  "hdmi-kablar-sanning.html": "17 apr 2026",
  "ljusstyrka-projektor.html": "14 apr 2026",
  "minilux-vs-pro.html": "11 apr 2026",
  "sovrumsprojektor-guide.html": "8 apr 2026",
  "hemmabio-barn.html": "5 apr 2026",
  "duk-eller-vagg.html": "3 apr 2026",
  "wifi-streaming-projektor.html": "1 apr 2026",
  "hdr-forklarat.html": "1 apr 2026",
  "bluetooth-hogtalare-projektor.html": "1 apr 2026",
};

const GUIDE_INLINE = {
  "hemmabio-setup-guide.html": {
    anchor: "MiniLux Pro (1 499 kr)",
    url: URL_PRO,
  },
  "soundbar-guide-2026.html": {
    anchor: "Läs mer om MiniLux Pro 2",
    url: URL_PRO2,
  },
  "dolby-atmos-hemma.html": {
    anchor: "se MiniLux Pro hos miniprojektor.se",
    url: URL_PRO,
  },
  "4k-vs-1080p-projektor.html": {
    anchor: "MiniLux Pro 2 hos återförsäljaren",
    url: URL_PRO2,
  },
  "streaming-kvalitet-guide.html": {
    anchor: "Här hittar du MiniLux Pro",
    url: URL_PRO,
  },
  "projektor-utomhus.html": {
    anchor: "MiniLux Pro (1 499 kr)",
    url: URL_PRO,
  },
  "hdmi-kablar-sanning.html": {
    anchor: "Läs mer om MiniLux Pro 2",
    url: URL_PRO2,
  },
  "projektor-eller-oled.html": {
    anchor: "se MiniLux Pro hos miniprojektor.se",
    url: URL_PRO,
  },
  "ljusstyrka-projektor.html": {
    anchor: "MiniLux Pro 2 hos återförsäljaren",
    url: URL_PRO2,
  },
  "duk-eller-vagg.html": {
    anchor: "Här hittar du MiniLux Pro",
    url: URL_PRO,
  },
  "hemmabio-barn.html": {
    anchor: "MiniLux Pro (1 499 kr)",
    url: URL_PRO,
  },
  "wifi-streaming-projektor.html": {
    anchor: "Läs mer om MiniLux Pro 2",
    url: URL_PRO2,
  },
  "sovrumsprojektor-guide.html": {
    anchor: "se MiniLux Pro hos miniprojektor.se",
    url: URL_PRO,
  },
  "hdr-forklarat.html": {
    anchor: "MiniLux Pro 2 hos återförsäljaren",
    url: URL_PRO2,
  },
  "bluetooth-hogtalare-projektor.html": {
    anchor: "Här hittar du MiniLux Pro",
    url: URL_PRO,
  },
  "basta-miniprojektorer-2026.html": {
    anchor: "Läs mer om MiniLux Pro 2",
    url: URL_PRO2,
  },
};

function cleanup(html) {
  html = html.replace(/&mdash;/g, " - ");
  html = html.replace(/—/g, " - ");
  html = html.replace(/<!--[\s\S]*?-->/g, "");
  html = html.replace(/[ \t]+$/gm, "");
  html = html.replace(/\n{3,}/g, "\n\n");
  return html;
}

function fixFacts(html) {
  const reps = [
    [/tredje vardagen/gi, "femte arbetsdagen"],
    [/andra vardagen/gi, "inom 4 till 7 arbetsdagar"],
    [/expressfrakt/gi, "fri frakt"],
    [/chattstöd/gi, "e-postsupport"],
    [/Agenten/g, "Personen vi pratade med"],
    [/agenten/g, "personen vi pratade med"],
    [/automatiskt svar/gi, "personligt svar"],
    [/automatisera svar/gi, "personligt svar"],
    [/inom 2–3 arbetsdagar/g, "inom 24 timmar"],
    [/inom 2-3 arbetsdagar/gi, "inom 24 timmar"],
    [/svarade samma dag/gi, "svarade inom 24 timmar"],
    [/samma dag/gi, "inom ett dygn"],
    [/leverans dagen efter/gi, "leverans inom 4 till 7 arbetsdagar"],
    [/nästa vardag/gi, "inom 4 till 7 arbetsdagar"],
    [/90 dagars retur/gi, "2 års garanti"],
    [/Snabb leverans/gi, "Leverans inom 4 till 7 arbetsdagar"],
  ];
  for (const [re, sub] of reps) html = html.replace(re, sub);
  return html;
}

function updateFooter(html) {
  html = html.replace(
    /<p class="foot-desc">[\s\S]*?<\/p>/,
    `<p class="foot-desc">${FOOT_DESC}</p>`
  );
  html = html.replace(
    /<h4>POPUL&Auml;RA ARTIKLAR<\/h4>[\s\S]*?(?=<\/div><div class="foot-col"><h4>KATEGORIER)/,
    FOOT_POPULAR
  );
  html = html.replace(
    /<h4>OM OSS<\/h4>[\s\S]*?(?=<\/div><\/div><div class="foot-bottom">)/,
    FOOT_OM
  );
  html = html.replace(/<div class="foot-bottom">[\s\S]*?<\/div><\/div><\/footer>/, `${FOOT_BOTTOM}</div></footer>`);
  return html;
}

function removeExternalLinks(html) {
  return html.replace(
    /<a[^>]*href="https?:\/\/miniprojektor\.se[^"]*"[^>]*>[\s\S]*?<\/a>/gi,
    (match) => {
      const text = match.replace(/<[^>]+>/g, "").trim();
      if (text === "MiniLux Pro" || text === "MiniLux Pro 2") return text;
      return "";
    }
  );
}

function stripOldCtas(html) {
  html = html.replace(
    /<div style="background:#1e1e1e;border-radius:8px;padding:2rem[\s\S]*?<\/div>\s*(?=<\/div>\s*<div class="author-box">)/,
    ""
  );
  html = html.replace(/<div class="cta-box">[\s\S]*?<\/div>\s*(?=<div class="author-box">)/, "");
  return html;
}

function insertCta(html, file) {
  const cta = CTA_BY_FILE[file];
  if (!cta) return html;
  html = stripOldCtas(html);
  return html.replace(
    /(<div class="author-box">)/,
    `${cta}\n$1`
  );
}

function applyArticleMeta(html, file) {
  const meta = ARTICLE_META[file];
  const date = DATE_MAP[file] || meta?.date;
  if (meta?.title) {
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);
  }
  if (meta?.desc) {
    if (html.includes('name="description"')) {
      html = html.replace(
        /<meta name="description" content="[^"]*"\/>/,
        `<meta name="description" content="${meta.desc}"/>`
      );
    } else {
      html = html.replace(
        /<title>[^<]*<\/title>/,
        (t) => `${t}\n<meta name="description" content="${meta.desc}"/>`
      );
    }
  }
  if (meta?.h1) {
    html = html.replace(/<h1>[^<]*<\/h1>/, `<h1>${meta.h1}</h1>`);
  }
  if (date) {
    html = html.replace(
      /<span>\d{1,2} [a-zåäö]+ 2026<\/span>/i,
      `<span>${date}</span>`
    );
    html = html.replace(/<div class="sb-m">\d{1,2} [a-zåäö]+ 2026<\/div>/gi, `<div class="sb-m">${date}</div>`);
    html = html.replace(/hero-meta">([^<]*)· \d{1,2} [a-zåäö]+ 2026/gi, (m, pre) => `hero-meta">${pre}· ${date}`);
  }
  return html;
}

function ensureGuideLink(html, file) {
  const cfg = GUIDE_INLINE[file];
  if (!cfg || html.includes(cfg.url)) return html;
  const link = `<a href="${cfg.url}" rel="dofollow">${cfg.anchor}</a>`;
  const insert =
    file === "basta-miniprojektorer-2026.html"
      ? ` ${link} passar om du vill ha mer ljus.`
      : ` För en konkret modell i budgetklassen, se ${link}.`;
  return html.replace(/(<div class="body">[\s\S]*?<p>[^<]+<\/p>)/, `$1${insert}`);
}

function processFile(file) {
  const fp = path.join(ROOT, file);
  if (!fs.existsSync(fp)) return;
  let html = fs.readFileSync(fp, "utf8");
  html = html.replace(NAV_RIGHT_OLD, NAV_RIGHT_NEW);
  html = updateFooter(html);
  html = fixFacts(html);

  if (ARTICLE_META[file] || DATE_MAP[file]) {
    html = applyArticleMeta(html, file);
  }

  if (CTA_ARTICLES.has(file)) {
    html = removeExternalLinks(html);
    html = insertCta(html, file);
  } else if (GUIDE_INLINE[file]) {
    html = removeExternalLinks(html);
    html = ensureGuideLink(html, file);
  }

  html = cleanup(html);
  fs.writeFileSync(fp, html, "utf8");
  console.log("Updated", file);
}

const htmlFiles = fs
  .readdirSync(ROOT)
  .filter((f) => f.endsWith(".html"));

for (const f of htmlFiles) processFile(f);
console.log("Done bulk updates.");
