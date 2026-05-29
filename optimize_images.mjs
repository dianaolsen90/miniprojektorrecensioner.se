import sharp from "sharp";
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const PRODUCT = new Set([
  "minilux-pro-hero.png",
  "minilux-pro-2-hero.png",
]);

const SKIP = new Set([
  "minilux-pro-mini-projektor-4k-wifi-bluetooth-hemmabio.webp",
  "minilux-pro-hero.webp",
  "minilux-pro-hero-thumb.webp",
  "minilux-pro-hero-half.webp",
  "minilux-pro-hero-card.webp",
  "minilux-pro-2-mini-projektor-wifi6-4k-bluetooth-hemmabio.webp",
  "minilux-pro-2-hero.webp",
  "minilux-pro-2-hero-thumb.webp",
  "minilux-pro-2-hero-half.webp",
  "minilux-pro-2-hero-card.webp",
]);

const WIDE_W = 800;
const WIDE_H = 350;
const PRODUCT_W = 400;
const THUMB_W = 360;
const THUMB_H = 203;
const HALF_W = 360;
const HALF_H = 270;

const inputs = fs
  .readdirSync(ROOT)
  .filter(
    (f) =>
      /\.(png|jpe?g)$/i.test(f) &&
      !f.endsWith("-thumb.webp") &&
      !f.endsWith(".webp") &&
      !SKIP.has(f)
  );

for (const file of inputs) {
  const input = path.join(ROOT, file);
  const base = file.replace(/\.(png|jpe?g)$/i, "");

  if (PRODUCT.has(file)) {
    const meta = await sharp(input).metadata();
    const h = Math.round((PRODUCT_W / meta.width) * meta.height);
    await sharp(input)
      .resize(PRODUCT_W, h, { withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(path.join(ROOT, `${base}.webp`));
    await sharp(input)
      .resize(THUMB_W, THUMB_H, { fit: "cover", position: "center" })
      .webp({ quality: 78 })
      .toFile(path.join(ROOT, `${base}-thumb.webp`));
    await sharp(input)
      .resize(HALF_W, HALF_H, { fit: "contain", background: { r: 13, g: 17, b: 23 } })
      .webp({ quality: 80 })
      .toFile(path.join(ROOT, `${base}-half.webp`));
    console.log(`${file} -> product ${PRODUCT_W}w, thumb, half`);
  } else {
    await sharp(input)
      .resize(WIDE_W, WIDE_H, { fit: "cover", position: "center" })
      .webp({ quality: 80 })
      .toFile(path.join(ROOT, `${base}.webp`));
    await sharp(input)
      .resize(THUMB_W, THUMB_H, { fit: "cover", position: "center" })
      .webp({ quality: 78 })
      .toFile(path.join(ROOT, `${base}-thumb.webp`));
    console.log(`${file} -> wide ${WIDE_W}x${WIDE_H}, thumb`);
  }
}

console.log("Done.");
