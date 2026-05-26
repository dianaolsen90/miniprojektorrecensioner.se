import fs from "fs";

const PRO2 =
  "https://miniprojektor.se/products/minilux-pro-2-smart-miniprojektor-med-bluetooth-och-wifi-svart";
const PRO = "https://miniprojektor.se/products/minilux-pro-smart-miniprojektor";

const pro2Old = [
  "https://www.miniprojekter.se/minilux-pro-2",
  "https://miniprojekter.se/minilux-pro-2",
];
const proOld = [
  "https://www.miniprojekter.se/minilux-pro",
  "https://miniprojekter.se/minilux-pro",
];

const files = fs.readdirSync(".").filter((f) => f.endsWith(".html"));

for (const file of files) {
  let html = fs.readFileSync(file, "utf8");
  const before = html;

  for (const u of pro2Old) html = html.split(u).join(PRO2);
  for (const u of proOld) html = html.split(u).join(PRO);

  html = html.replace(
    /<a\b([^>]*?)href="(https:\/\/miniprojektor\.se\/products\/minilux-pro[^"]*)"([^>]*)>/gi,
    (match, pre, href, post) => {
      const attrs = pre + post;
      if (/rel="[^"]*dofollow/i.test(attrs) || /rel='[^']*dofollow/i.test(attrs)) {
        return match;
      }
      if (/rel="/i.test(attrs)) {
        return match.replace(/rel="([^"]*)"/i, 'rel="$1 dofollow"');
      }
      if (/rel='/i.test(attrs)) {
        return match.replace(/rel='([^']*)'/i, "rel='$1 dofollow'");
      }
      return `<a${pre}href="${href}" rel="dofollow"${post}>`;
    }
  );

  if (html !== before) {
    fs.writeFileSync(file, html, "utf8");
    const n = (before.match(/miniprojekter\.se/g) || []).length;
    console.log(`${file}: updated${n ? ` (${n} old URLs)` : ""}`);
  }
}

const remaining = files.filter((f) => fs.readFileSync(f, "utf8").includes("miniprojekter.se"));
console.log("Remaining miniprojekter.se:", remaining.length ? remaining.join(", ") : "none");
