import fs from "fs";
import path from "path";

const ROOT = process.cwd();

const HERO_BY_SLUG = {
  "index.html": "hero-startsida.jpeg",
  "minilux-pro.html": "minilux-pro-closeup.png",
  "minilux-pro-2.html": "minilux-pro-2-vit.png",
  "minilux-pro-omdome.html": "minilux-pro-bord.png",
  "minilux-pro-2-omdome.html": "minilux-pro-2-vardagsrum.png",
  "minilux-pro-test.html": "minilux-pro-filmkvall.png",
  "miniprojektor-se-recension.html": "miniprojektor-unboxing.jpeg",
  "miniprojektor-se-omdome.html": "miniprojektor-unboxing.jpeg",
  "basta-miniprojektorer-2026.html": "basta-projektorer.jpeg",
  "hemmabio-setup-guide.html": "hemmabio-film.jpeg",
  "projektor-utomhus.html": "utomhusbio-projektor.png",
  "sovrumsprojektor-guide.html": "projektor-vardagsrum.png",
  "hemmabio-barn.html": "projektor-barnfamilj.png",
  "4k-vs-1080p-projektor.html": "projektor-jamforelse.png",
  "wifi-streaming-projektor.html": "projektor-hem-vinter.png",
  "dolby-atmos-hemma.html": "hemmabio-film.jpeg",
  "projektor-eller-oled.html": "projektor-hem-vinter.png",
  "streaming-kvalitet-guide.html": "portabel-projektor.png",
  "hdmi-kablar-sanning.html": "projektor-jamforelse.png",
  "ljusstyrka-projektor.html": "projektor-utomhus-vinter.png",
  "duk-eller-vagg.html": "projektor-vardagsrum.png",
  "soundbar-guide-2026.html": "hemmabio-film.jpeg",
  "hdr-forklarat.html": "projektor-hem-vinter.png",
  "bluetooth-hogtalare-projektor.html": "portabel-projektor.png",
  "minilux-vs-pro.html": "minilux-pro-utomhus.png",
};

const ALT_BY_SLUG = {
  "index.html": "Hemmabio med miniprojektor i mörkt vardagsrum – miniprojektorrecensioner.se",
  "minilux-pro.html": "MiniLux Pro närbild av cylindrisk miniprojektor med blå lins",
  "minilux-pro-2.html": "Vit MiniLux Pro 2 miniprojektor på skrivbord med växt och kopp",
  "minilux-pro-omdome.html": "MiniLux Pro på soffbord i vardagsrum med kvinna som tittar på film",
  "minilux-pro-2-omdome.html": "MiniLux Pro 2 i vardagsrum med kvinna som tittar på film",
  "minilux-pro-test.html": "Familj tittar på tecknat med MiniLux Pro i vardagsrummet",
  "miniprojektor-se-recension.html": "Upppackning av miniprojektor från Miniprojektor.se",
  "miniprojektor-se-omdome.html": "Paket och produkt från Miniprojektor.se vid leverans",
  "basta-miniprojektorer-2026.html": "Jämförelse av bästa miniprojektorer 2026 i hemmabio",
  "hemmabio-setup-guide.html": "Filmkväll i hemmabio med projektor och surroundljud",
  "projektor-utomhus.html": "Utomhusbio med miniprojektor och duk i kvällsljus",
  "sovrumsprojektor-guide.html": "Miniprojektor i sovrum med bild mot vägg eller tak",
  "hemmabio-barn.html": "Par tittar på Disney+ med miniprojektor i vardagsrummet, barnvänlig hemmabio",
  "4k-vs-1080p-projektor.html": "Jämförelse av 4K och 1080p projektor i hemmabio",
  "wifi-streaming-projektor.html": "Miniprojektor i vintermörkt vardagsrum med WiFi-streaming",
  "dolby-atmos-hemma.html": "Hemmabio med film och immersivt ljud i vardagsrum",
  "projektor-eller-oled.html": "Projektor kontra TV i upplyst vardagsrum på vintern",
  "streaming-kvalitet-guide.html": "Portabel miniprojektor för streaming i hemmet",
  "hdmi-kablar-sanning.html": "Projektor och HDMI-uppkoppling i hemmabio",
  "ljusstyrka-projektor.html": "Utomhusprojektor i skymning – ljusstyrka i praktiken",
  "duk-eller-vagg.html": "Projektor mot vägg eller duk i vardagsrum",
  "soundbar-guide-2026.html": "Hemmabio med projektor och soundbar i vardagsrum",
  "hdr-forklarat.html": "Film på projektor i mörkt rum med HDR-innehåll",
  "bluetooth-hogtalare-projektor.html": "Portabel projektor med Bluetooth-högtalare",
  "minilux-vs-pro.html": "MiniLux Pro på trädäck utomhus vid solnedgång",
};

function img(file, alt) {
  return `<img src="bilder/${file}" alt="${alt.replace(/"/g, "&quot;")}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:8px"/>`;
}

function heroFor(slug) {
  return HERO_BY_SLUG[slug] || "basta-projektorer.jpeg";
}

function altFor(slug) {
  return ALT_BY_SLUG[slug] || "Miniprojektor och hemmabio";
}

function replaceBracketInContainer(html, containerRe, getSlug) {
  return html.replace(containerRe, (full, ...groups) => {
    const inner = groups[groups.length - 2];
    const open = groups[0];
    const close = groups[groups.length - 1];
    if (!/\[(?:Bild|Omslagsbild|Produktbild|Hero)/.test(inner)) return full;
    const slug = getSlug(full, ...groups);
    return `${open}${img(heroFor(slug), altFor(slug))}${close}`;
  });
}

function fixLinkedThumbs(html) {
  return html.replace(
    /<a([^>]*\shref="([^"]+\.html)"[^>]*)>([\s\S]*?)<\/a>/gi,
    (full, aattrs, slug, inner) => {
      if (!/(card-img|rel-img|pr-thumb)/.test(inner)) return full;
      const fixed = inner.replace(
        /<div class="((?:card-img|rel-img|pr-thumb)[^"]*)">[\s\S]*?<\/div>/,
        (_, cls) => `<div class="${cls}">${img(heroFor(slug), altFor(slug))}</div>`
      );
      return `<a${aattrs}>${fixed}</a>`;
    }
  );
}

function processFile(file) {
  let html = fs.readFileSync(path.join(ROOT, file), "utf8");
  const selfHero = HERO_BY_SLUG[file];
  const selfAlt = ALT_BY_SLUG[file];

  html = html.replace(/<picture>[\s\S]*?<\/picture>/gi, (match, offset) => {
    const chunk = html.slice(Math.max(0, offset - 500), offset + match.length + 200);
    const hrefs = [...chunk.matchAll(/href="([^"]+\.html)"/gi)];
    const slug = hrefs.length ? hrefs[hrefs.length - 1][1] : file;
    return img(heroFor(slug), altFor(slug));
  });

  if (file === "index.html") {
    html = html.replace(
      /<div class="hero-img">\s*\[[^\]]+\]\s*<\/div>/,
      `<div class="hero-img">${img(heroFor("index.html"), altFor("index.html"))}</div>`
    );
  }

  html = replaceBracketInContainer(
    html,
    /(<a[^>]*href="([^"]+\.html)"[^>]*>[\s\S]*?<div class="(?:card-img|rel-img|pr-thumb)[^"]*">)\s*\[[^\]]+\]\s*(<\/div>)/gi,
    (_f, _o, slug) => slug
  );

  html = html.replace(
    /<div class="art-img[^"]*"[^>]*>\s*\[(?:Bild|Omslagsbild|Produktbild|Hero)[^\]]*\]\s*<\/div>/gi,
    `<div class="art-img">${img(selfHero || "basta-projektorer.jpeg", selfAlt || "Hemmabio med miniprojektor")}</div>`
  );

  html = html.replace(
    /(<div class="art-img"[^>]*>)\s*\[[^\]]+\]\s*(<\/div>)/gi,
    (m, open, close) => {
      const isCompare = /jämförelse/i.test(m);
      const f = isCompare ? "projektor-jamforelse.png" : selfHero || "basta-projektorer.jpeg";
      const a = isCompare
        ? "Jämförelse av projektorbild i mörkt rum och halvljust rum"
        : selfAlt || "Projektor i hemmabio";
      return `${open}${img(f, a)}${close}`;
    }
  );

  let halfN = 0;
  html = html.replace(
    /<div class="img-half-item[^"]*">\s*\[[^\]]+\]\s*<\/div>/gi,
    () => {
      halfN++;
      if (halfN % 2 === 1) {
        const f = selfHero || "minilux-pro-hero.png";
        return `<div class="img-half-item">${img(f, altFor(file) || altFor(f))}</div>`;
      }
      const rf = halfN % 4 === 0 ? "portabel-projektor.png" : "portabel-hand.jpeg";
      const ra =
        rf === "portabel-projektor.png"
          ? "Portabel miniprojektor som enkelt flyttas mellan rum"
          : "Miniprojektor hållen i handen för portabel hemmabio";
      return `<div class="img-half-item">${img(rf, ra)}</div>`;
    }
  );

  html = html.replace(
    /(<div class="(?:card-img|rel-img|pr-thumb)[^"]*">)\s*\[[^\]]+\]\s*(<\/div>)/gi,
    (_, open, close) => `${open}${img(selfHero || "basta-projektorer.jpeg", selfAlt || "Artikelbild")}${close}`
  );

  if (selfHero && file.startsWith("miniprojektor-se-") && !/<div class="art-img"/.test(html)) {
    html = html.replace(
      /(<div class="trust-bar">[\s\S]*?<\/div>)(\s*<div class="body">)/,
      `$1\n<div class="art-img">${img(selfHero, selfAlt)}</div>$2`
    );
  }

  if (selfHero) {
    const omslagRe = /<div class="art-img">\s*\[(?:Bild|Omslagsbild)[^\]]*\]\s*<\/div>/;
    if (omslagRe.test(html)) {
      html = html.replace(
        omslagRe,
        `<div class="art-img">${img(selfHero, selfAlt)}</div>`
      );
    } else if (file !== "basta-miniprojektorer-2026.html") {
      const firstArt = html.match(/<div class="art-img[^"]*">[\s\S]*?<\/div>/);
      if (firstArt && !firstArt[0].includes("<img src=\"bilder/")) {
        html = html.replace(
          /<div class="art-img[^"]*">[\s\S]*?<\/div>/,
          (block, offset) => {
            if (html.slice(0, offset).includes("rank-item")) return block;
            return `<div class="art-img">${img(selfHero, selfAlt)}</div>`;
          }
        );
      }
    }

    if (file === "basta-miniprojektorer-2026.html") {
      html = html.replace(
        /<div class="art-img"><img src="[^"]+"[^/]*\/><\/div>/,
        `<div class="art-img">${img("basta-projektorer.jpeg", altFor(file))}</div>`
      );
      html = html.replace(
        /<div class="art-img art-img-photo">[\s\S]*?<\/div>\s*<p>MiniLux Pro 2 levererar/,
        `<div class="art-img art-img-photo">${img("minilux-pro-2-hero.png", altFor("minilux-pro-2.html"))}</div>\n<p>MiniLux Pro 2 levererar`
      );
      html = html.replace(
        /<div class="art-img art-img-photo">[\s\S]*?<\/div>\s*<p>MiniLux Pro placerar/,
        `<div class="art-img art-img-photo">${img("minilux-pro-hero.png", altFor("minilux-pro.html"))}</div>\n<p>MiniLux Pro placerar`
      );
    }

    if (file === "hemmabio-setup-guide.html") {
      html = html.replace(
        /<div class="art-img"><img src="hemmabio-setup-huvud\.png"[^/]*\/><\/div>/,
        `<div class="art-img">${img("hemmabio-film.jpeg", selfAlt)}</div>`
      );
    }
  }

  html = fixLinkedThumbs(html);

  if (file === "basta-miniprojektorer-2026.html") {
    html = html.replace(
      /<h3><span class="rank-badge">#2<\/span> MiniLux Pro 2[\s\S]*?<div class="art-img art-img-photo">[\s\S]*?<\/div>/,
      (block) =>
        block.replace(
          /<div class="art-img art-img-photo">[\s\S]*?<\/div>/,
          `<div class="art-img art-img-photo">${img("minilux-pro-2-hero.png", altFor("minilux-pro-2.html"))}</div>`
        )
    );
  }

  const remaining = (html.match(/\[(?:Bild|Omslagsbild|Produktbild|Hero)/g) || []).length;
  if (remaining > 0) {
    console.warn(file, "still has", remaining, "bracket placeholders");
  }

  fs.writeFileSync(path.join(ROOT, file), html);
}

for (const f of fs.readdirSync(ROOT).filter((x) => x.endsWith(".html"))) {
  processFile(f);
  console.log("ok", f);
}
