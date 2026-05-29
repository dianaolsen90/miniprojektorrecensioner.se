import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const ASSETS =
  "C:/Users/Diana/.cursor/projects/c-Users-Diana-OneDrive-Skrivbord-miniprojektorrecensioner-se/assets";
const STYLE =
  "width:100%;height:100%;object-fit:cover;display:block;border-radius:8px";

const COPY_MAP = [
  [
    "c__Users_Diana_AppData_Roaming_Cursor_User_workspaceStorage_131422e0d17b12c314c22fcc1a23c461_images_miniluxpro2room-143acf85-5777-4dc9-81ed-a47f1d52524b.png",
    "minilux-pro-2-room.png",
  ],
  [
    "c__Users_Diana_AppData_Roaming_Cursor_User_workspaceStorage_131422e0d17b12c314c22fcc1a23c461_images_miniluxpro2white-4ff503f9-652d-48a9-a811-d47fca6ab02d.png",
    "minilux-pro-2-vit.png",
  ],
  [
    "c__Users_Diana_AppData_Roaming_Cursor_User_workspaceStorage_131422e0d17b12c314c22fcc1a23c461_images_miniluxpro2livingroom-f26ead79-99ae-4d04-bc08-0f8b6ee07523.png",
    "minilux-pro-2-vardagsrum.png",
  ],
  [
    "c__Users_Diana_AppData_Roaming_Cursor_User_workspaceStorage_131422e0d17b12c314c22fcc1a23c461_images_miniluxpro2kidsroom-d76de628-bb71-417b-9c05-e8f8ef582b36.png",
    "minilux-pro-2-bord.png",
  ],
  [
    "c__Users_Diana_AppData_Roaming_Cursor_User_workspaceStorage_131422e0d17b12c314c22fcc1a23c461_images_miniluxpro2closeup-af39a071-7e12-426c-941e-649a9590d77d.png",
    "minilux-pro-2-closeup.png",
  ],
];

const PRO2_HERO = {
  "minilux-pro-2.html": {
    file: "minilux-pro-2-vit.png",
    alt: "Vit MiniLux Pro 2 miniprojektor på skrivbord med växt och kopp",
  },
  "minilux-pro-2-omdome.html": {
    file: "minilux-pro-2-vardagsrum.png",
    alt: "MiniLux Pro 2 i vardagsrum med kvinna som tittar på film",
  },
};

function img(file, alt) {
  return `<img src="bilder/${file}" alt="${alt.replace(/"/g, "&quot;")}" style="${STYLE}"/>`;
}

for (const [src, name] of COPY_MAP) {
  fs.copyFileSync(path.join(ASSETS, src), path.join(ROOT, "bilder", name));
  console.log("copied", name);
}

function fixLinkedPro2Thumbs(html) {
  return html.replace(
    /<a([^>]*\shref="(minilux-pro-2(?:-omdome)?\.html)"[^>]*)>([\s\S]*?)<\/a>/gi,
    (full, aattrs, slug, inner) => {
      if (!/(card-img|rel-img|pr-thumb)/.test(inner)) return full;
      const h = PRO2_HERO[slug];
      if (!h) return full;
      const fixed = inner.replace(
        /<div class="((?:card-img|rel-img|pr-thumb)[^"]*)">[\s\S]*?<\/div>/,
        (_, cls) => `<div class="${cls}">${img(h.file, h.alt)}</div>`
      );
      return `<a${aattrs}>${fixed}</a>`;
    }
  );
}

function patchMiniluxPro2(html) {
  let n = 0;
  return html.replace(/<img src="bilder\/[^"]+"[^/]*\/>/g, (tag) => {
    n++;
    if (n === 1)
      return img(
        "minilux-pro-2-vit.png",
        "Vit MiniLux Pro 2 miniprojektor på skrivbord med växt och kopp"
      );
    if (n === 2)
      return img(
        "minilux-pro-2-vit.png",
        "Vit MiniLux Pro 2 miniprojektor i ljust inrett rum"
      );
    if (n === 3)
      return img(
        "minilux-pro-2-room.png",
        "Svart MiniLux Pro 2 miniprojektor med fjärrkontroll på bord"
      );
    return tag;
  });
}

function patchMiniluxPro2Omdome(html) {
  let n = 0;
  return html.replace(/<img src="bilder\/[^"]+"[^/]*\/>/g, (tag) => {
    n++;
    if (n === 1)
      return img(
        "minilux-pro-2-vardagsrum.png",
        "MiniLux Pro 2 i vardagsrum med kvinna som tittar på film"
      );
    if (n === 2)
      return img(
        "minilux-pro-2-closeup.png",
        "MiniLux Pro 2 hållen i handen utomhus vid vit husvägg"
      );
    if (n === 3)
      return img(
        "minilux-pro-2-bord.png",
        "MiniLux Pro 2 på skrivbord i mysigt rum med laptop och hörlurar"
      );
    return tag;
  });
}

function patchBastaRankPro2(html) {
  return html.replace(
    /<h3><span class="rank-badge">#2<\/span> MiniLux Pro 2[\s\S]*?<div class="art-img art-img-photo">[\s\S]*?<\/div>/,
    (block) =>
      block.replace(
        /<div class="art-img art-img-photo">[\s\S]*?<\/div>/,
        `<div class="art-img art-img-photo">${img(
          "minilux-pro-2-vit.png",
          "Vit MiniLux Pro 2 miniprojektor på skrivbord med växt och kopp"
        )}</div>`
      )
  );
}

for (const f of fs.readdirSync(ROOT).filter((x) => x.endsWith(".html"))) {
  let html = fs.readFileSync(path.join(ROOT, f), "utf8");
  const before = html;
  html = fixLinkedPro2Thumbs(html);
  if (f === "minilux-pro-2.html") html = patchMiniluxPro2(html);
  if (f === "minilux-pro-2-omdome.html") html = patchMiniluxPro2Omdome(html);
  if (f === "basta-miniprojektorer-2026.html") html = patchBastaRankPro2(html);
  if (html !== before) {
    fs.writeFileSync(path.join(ROOT, f), html);
    console.log("updated", f);
  }
}
