import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const STYLE =
  'width:100%;height:100%;object-fit:cover;display:block;border-radius:8px';

const PRO_HERO = {
  "minilux-pro.html": {
    file: "minilux-pro-closeup.png",
    alt: "MiniLux Pro närbild av cylindrisk miniprojektor med blå lins",
  },
  "minilux-pro-omdome.html": {
    file: "minilux-pro-bord.png",
    alt: "MiniLux Pro på soffbord i vardagsrum med kvinna som tittar på film",
  },
  "minilux-pro-test.html": {
    file: "minilux-pro-filmkvall.png",
    alt: "Familj tittar på tecknat med MiniLux Pro i vardagsrummet",
  },
  "minilux-vs-pro.html": {
    file: "minilux-pro-utomhus.png",
    alt: "MiniLux Pro på trädäck utomhus vid solnedgång",
  },
};

function img(file, alt) {
  return `<img src="bilder/${file}" alt="${alt.replace(/"/g, "&quot;")}" style="${STYLE}"/>`;
}

function fixLinkedProThumbs(html) {
  return html.replace(
    /<a([^>]*\shref="(minilux-pro(?:-omdome|-test)?\.html)"[^>]*)>([\s\S]*?)<\/a>/gi,
    (full, aattrs, slug, inner) => {
      if (!/(card-img|rel-img|pr-thumb)/.test(inner)) return full;
      const h = PRO_HERO[slug];
      if (!h) return full;
      const fixed = inner.replace(
        /<div class="((?:card-img|rel-img|pr-thumb)[^"]*)">[\s\S]*?<\/div>/,
        (_, cls) => `<div class="${cls}">${img(h.file, h.alt)}</div>`
      );
      return `<a${aattrs}>${fixed}</a>`;
    }
  );
}

function patchMiniluxPro(html) {
  let n = 0;
  html = html.replace(/<img src="bilder\/[^"]+"[^/]*\/>/g, (tag) => {
    n++;
    if (n === 1)
      return img(
        "minilux-pro-closeup.png",
        "MiniLux Pro närbild av cylindrisk miniprojektor med blå lins"
      );
    if (n === 2)
      return img(
        "minilux-pro-bord.png",
        "MiniLux Pro på soffbord i vardagsrum med kvinna som tittar på film"
      );
    if (n === 3)
      return img(
        "minilux-pro-tak.png",
        "MiniLux Pro monterad i taket i ljust vardagsrum med stora fönster"
      );
    if (n === 4)
      return img(
        "minilux-pro-filmkvall.png",
        "Familj tittar på tecknat med MiniLux Pro i vardagsrummet"
      );
    return tag;
  });
  return html;
}

function patchMiniluxProOmdome(html) {
  let n = 0;
  html = html.replace(/<img src="bilder\/[^"]+"[^/]*\/>/g, (tag) => {
    n++;
    if (n === 1)
      return img(
        "minilux-pro-bord.png",
        "MiniLux Pro på soffbord i vardagsrum med kvinna som tittar på film"
      );
    if (n === 2)
      return img(
        "minilux-pro-tak.png",
        "MiniLux Pro monterad i taket i ljust vardagsrum med stora fönster"
      );
    if (n === 3)
      return img(
        "minilux-pro-filmkvall.png",
        "Familj tittar på tecknat med MiniLux Pro i vardagsrummet"
      );
    return tag;
  });
  return html;
}

function patchMiniluxProTest(html) {
  const h = PRO_HERO["minilux-pro-test.html"];
  return html.replace(
    /<img src="bilder\/[^"]+"[^/]*\/>/,
    img(h.file, h.alt)
  );
}

function patchMiniluxVsPro(html) {
  const h = PRO_HERO["minilux-vs-pro.html"];
  return html.replace(
    /<div class="art-img[^"]*">[\s\S]*?<\/div>/,
    `<div class="art-img art-img-photo">${img(h.file, h.alt)}</div>`
  );
}

function patchBastaRankPro(html) {
  return html.replace(
    /<h3><span class="rank-badge">#2<\/span> MiniLux Pro 2[\s\S]*?<div class="art-img art-img-photo">[\s\S]*?<\/div>/,
    (block) =>
      block.replace(
        /<div class="art-img art-img-photo">[\s\S]*?<\/div>/,
        `<div class="art-img art-img-photo">${img(
          "minilux-pro-bord.png",
          "MiniLux Pro på soffbord i vardagsrum med kvinna som tittar på film"
        )}</div>`
      )
  );
}

const PRO_ARTICLES = [
  "minilux-pro.html",
  "minilux-pro-omdome.html",
  "minilux-pro-test.html",
  "minilux-vs-pro.html",
];

for (const f of fs.readdirSync(ROOT).filter((x) => x.endsWith(".html"))) {
  let html = fs.readFileSync(path.join(ROOT, f), "utf8");
  const before = html;
  html = fixLinkedProThumbs(html);

  if (f === "minilux-pro.html") html = patchMiniluxPro(html);
  if (f === "minilux-pro-omdome.html") html = patchMiniluxProOmdome(html);
  if (f === "minilux-pro-test.html") html = patchMiniluxProTest(html);
  if (f === "minilux-vs-pro.html") html = patchMiniluxVsPro(html);
  if (f === "basta-miniprojektorer-2026.html") html = patchBastaRankPro(html);

  if (html !== before) {
    fs.writeFileSync(path.join(ROOT, f), html);
    console.log("updated", f);
  }
}
