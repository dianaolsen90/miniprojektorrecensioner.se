import sharp from "sharp";
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const input = process.argv[2];

if (!input || !fs.existsSync(input)) {
  console.error("Usage: node prepare_minilux_pro2_hero.mjs <source.png>");
  process.exit(1);
}

const HERO_W = 1200;
const HERO_H = 675;
const THUMB_W = 360;
const THUMB_H = 203;
const HALF_W = 360;
const HALF_H = 270;
const CARD_W = 400;

const heroPng = path.join(ROOT, "minilux-pro-2-hero.png");
const seoBase = "minilux-pro-2-mini-projektor-wifi6-4k-bluetooth-hemmabio";

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
  .toFile(path.join(ROOT, "minilux-pro-2-hero.webp"));

await sharp(heroPng)
  .resize(THUMB_W, THUMB_H, { fit: "cover", position: "attention" })
  .webp({ quality: 78 })
  .toFile(path.join(ROOT, "minilux-pro-2-hero-thumb.webp"));

await sharp(heroPng)
  .resize(THUMB_W, THUMB_H, { fit: "cover", position: "attention" })
  .webp({ quality: 78 })
  .toFile(path.join(ROOT, `${seoBase}-thumb.webp`));

await sharp(heroPng)
  .resize(HALF_W, HALF_H, { fit: "cover", position: "attention" })
  .webp({ quality: 80 })
  .toFile(path.join(ROOT, "minilux-pro-2-hero-half.webp"));

const cardH = Math.round((CARD_W / meta.width) * meta.height);
await sharp(heroPng)
  .resize(CARD_W, cardH, { withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile(path.join(ROOT, "minilux-pro-2-hero-card.webp"));

console.log(`Created ${heroPng} (${meta.width}x${meta.height})`);
console.log(`Created ${seoBase}.webp, thumbs, half, card`);
