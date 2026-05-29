import sharp from "sharp";
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const SOURCE = path.join(
  ROOT,
  "..",
  ".cursor",
  "projects",
  "c-Users-Diana-OneDrive-Skrivbord-miniprojektorrecensioner-se",
  "assets",
  "c__Users_Diana_AppData_Roaming_Cursor_User_workspaceStorage_131422e0d17b12c314c22fcc1a23c461_images_MiniLux_Pro-3303e9f0-9e18-4812-90e2-5fbae50dce1c.png"
);

const altSource = process.argv[2];
const input = altSource && fs.existsSync(altSource) ? altSource : SOURCE;

if (!fs.existsSync(input)) {
  console.error("Source image not found:", input);
  process.exit(1);
}

const HERO_W = 1200;
const HERO_H = 675;
const THUMB_W = 360;
const THUMB_H = 203;
const HALF_W = 360;
const HALF_H = 270;
const CARD_W = 400;

const heroPng = path.join(ROOT, "minilux-pro-hero.png");
const seoBase = "minilux-pro-mini-projektor-4k-wifi-bluetooth-hemmabio";

await sharp(input)
  .resize(HERO_W, HERO_H, {
    fit: "cover",
    position: sharp.strategy.attention,
  })
  .png({ compressionLevel: 9 })
  .toFile(heroPng);

const meta = await sharp(heroPng).metadata();

await sharp(heroPng)
  .webp({ quality: 85 })
  .toFile(path.join(ROOT, `${seoBase}.webp`));

await sharp(heroPng)
  .webp({ quality: 85 })
  .toFile(path.join(ROOT, "minilux-pro-hero.webp"));

await sharp(heroPng)
  .resize(THUMB_W, THUMB_H, { fit: "cover", position: "attention" })
  .webp({ quality: 78 })
  .toFile(path.join(ROOT, "minilux-pro-hero-thumb.webp"));

await sharp(heroPng)
  .resize(THUMB_W, THUMB_H, { fit: "cover", position: "attention" })
  .webp({ quality: 78 })
  .toFile(path.join(ROOT, `${seoBase}-thumb.webp`));

await sharp(heroPng)
  .resize(HALF_W, HALF_H, { fit: "cover", position: "attention" })
  .webp({ quality: 80 })
  .toFile(path.join(ROOT, "minilux-pro-hero-half.webp"));

const cardH = Math.round((CARD_W / meta.width) * meta.height);
await sharp(heroPng)
  .resize(CARD_W, cardH, { withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile(path.join(ROOT, "minilux-pro-hero-card.webp"));

console.log(`Created ${heroPng} (${meta.width}x${meta.height})`);
console.log(`Created ${seoBase}.webp, thumbs, half, card`);
