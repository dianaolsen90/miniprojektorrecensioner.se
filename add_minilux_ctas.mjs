import fs from "fs";
import path from "path";

const ROOT = process.cwd();

const LINK_PRO2 =
  '<a href="https://www.miniprojekter.se/minilux-pro-2" rel="dofollow" style="color:#2e7d6b;font-weight:600;text-decoration:underline;text-underline-offset:2px">MiniLux Pro 2</a>';
const LINK_PRO =
  '<a href="https://www.miniprojekter.se/minilux-pro" rel="dofollow" style="color:#2e7d6b;font-weight:600;text-decoration:underline;text-underline-offset:2px">MiniLux Pro</a>';

const PRO2_PAGES = new Set(["minilux-pro-2.html", "minilux-pro-2-omdome.html"]);
const PRO2_H2_PAGES = new Set([...PRO2_PAGES, "minilux-vs-pro.html"]);
const PRO2_SIDEBAR_PAGES = new Set([...PRO2_PAGES, "minilux-vs-pro.html"]);

const H2_CTA_PRO = `<div style="background:#f0faf6;border:1px solid #2e7d6b;border-radius:8px;padding:1.2rem 1.5rem;margin:1.5rem 0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem">
  <div>
    <div style="font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#2e7d6b;margin-bottom:.3rem">Rekommenderad produkt</div>
    <div style="font-size:.95rem;font-weight:600;color:#1e1e1e">MiniLux Pro — Se aktuellt pris och tillgänglighet</div>
    <div style="font-size:.8rem;color:#666;margin-top:.2rem">Fri frakt · 90 dagars returrätt · Köp direkt hos återförsäljaren</div>
  </div>
  <a href="https://www.miniprojekter.se/minilux-pro" rel="dofollow" style="background:#2e7d6b;color:#fff;font-size:.85rem;font-weight:600;padding:.6rem 1.4rem;border-radius:6px;text-decoration:none;white-space:nowrap;flex-shrink:0">Se MiniLux Pro →</a>
</div>`;

const H2_CTA_PRO2 = `<div style="background:#f0faf6;border:1px solid #2e7d6b;border-radius:8px;padding:1.2rem 1.5rem;margin:1.5rem 0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem">
  <div>
    <div style="font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#2e7d6b;margin-bottom:.3rem">Rekommenderad produkt</div>
    <div style="font-size:.95rem;font-weight:600;color:#1e1e1e">MiniLux Pro 2 — Se aktuellt pris och tillgänglighet</div>
    <div style="font-size:.8rem;color:#666;margin-top:.2rem">Fri frakt · 90 dagars returrätt · Köp direkt hos återförsäljaren</div>
  </div>
  <a href="https://www.miniprojekter.se/minilux-pro-2" rel="dofollow" style="background:#2e7d6b;color:#fff;font-size:.85rem;font-weight:600;padding:.6rem 1.4rem;border-radius:6px;text-decoration:none;white-space:nowrap;flex-shrink:0">Se MiniLux Pro 2 →</a>
</div>`;

const SIDEBAR_CTA_PRO = `<div style="background:#1e1e1e;border-radius:8px;padding:1.4rem;margin-bottom:2rem;text-align:center">
  <div style="font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#7dd6c3;margin-bottom:.5rem">Testad och rekommenderad</div>
  <div style="font-family:'DM Serif Display',serif;font-size:1.1rem;color:#fff;margin-bottom:.4rem">MiniLux Pro</div>
  <div style="font-size:.78rem;color:rgba(255,255,255,.55);margin-bottom:1rem;line-height:1.5">Standard WiFi · 180° lins · 200 ANSI Lumen · 130 tum</div>
  <a href="https://www.miniprojekter.se/minilux-pro" rel="dofollow" style="display:block;background:#2e7d6b;color:#fff;font-size:.85rem;font-weight:600;padding:.65rem;border-radius:6px;text-decoration:none;transition:background .2s">Se pris hos miniprojekter.se →</a>
</div>`;

const SIDEBAR_CTA_PRO2 = `<div style="background:#1e1e1e;border-radius:8px;padding:1.4rem;margin-bottom:2rem;text-align:center">
  <div style="font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#7dd6c3;margin-bottom:.5rem">Testad och rekommenderad</div>
  <div style="font-family:'DM Serif Display',serif;font-size:1.1rem;color:#fff;margin-bottom:.4rem">MiniLux Pro 2</div>
  <div style="font-size:.78rem;color:rgba(255,255,255,.55);margin-bottom:1rem;line-height:1.5">WiFi 6 · 390 ANSI Lumen · 5W HiFi · 150 tum</div>
  <a href="https://www.miniprojekter.se/minilux-pro-2" rel="dofollow" style="display:block;background:#2e7d6b;color:#fff;font-size:.85rem;font-weight:600;padding:.65rem;border-radius:6px;text-decoration:none;transition:background .2s">Se pris hos miniprojekter.se →</a>
</div>`;

const BOTTOM_CTA_PRO = `<div style="background:#1e1e1e;border-radius:8px;padding:2rem;margin:2.5rem 0;text-align:center">
  <div style="font-size:.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#7dd6c3;margin-bottom:.6rem">Redo att köpa?</div>
  <div style="font-family:'DM Serif Display',serif;font-size:1.4rem;color:#fff;margin-bottom:.5rem">MiniLux Pro</div>
  <div style="font-size:.88rem;color:rgba(255,255,255,.6);max-width:400px;margin:0 auto 1.2rem;line-height:1.6">Fri frakt inom Sverige · 90 dagars returrätt · Snabb leverans</div>
  <a href="https://www.miniprojekter.se/minilux-pro" rel="dofollow" style="display:inline-block;background:#2e7d6b;color:#fff;font-size:.9rem;font-weight:600;padding:.75rem 2rem;border-radius:6px;text-decoration:none">Köp MiniLux Pro hos miniprojekter.se</a>
</div>`;

const BOTTOM_CTA_PRO2 = `<div style="background:#1e1e1e;border-radius:8px;padding:2rem;margin:2.5rem 0;text-align:center">
  <div style="font-size:.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#7dd6c3;margin-bottom:.6rem">Redo att köpa?</div>
  <div style="font-family:'DM Serif Display',serif;font-size:1.4rem;color:#fff;margin-bottom:.5rem">MiniLux Pro 2</div>
  <div style="font-size:.88rem;color:rgba(255,255,255,.6);max-width:400px;margin:0 auto 1.2rem;line-height:1.6">Fri frakt inom Sverige · 90 dagars returrätt · Snabb leverans</div>
  <a href="https://www.miniprojekter.se/minilux-pro-2" rel="dofollow" style="display:inline-block;background:#2e7d6b;color:#fff;font-size:.9rem;font-weight:600;padding:.75rem 2rem;border-radius:6px;text-decoration:none">Köp MiniLux Pro 2 hos miniprojekter.se</a>
</div>`;

const HOME_BANNER = `<div style="background:#f0faf6;border-top:1px solid #2e7d6b;border-bottom:1px solid #2e7d6b;padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem">
  <div style="max-width:1160px;margin:0 auto;width:100%;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem">
    <div style="display:flex;align-items:center;gap:1rem">
      <span style="font-size:1.5rem">📽️</span>
      <div>
        <div style="font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#2e7d6b">Veckans rekommendation</div>
        <div style="font-size:.95rem;font-weight:600;color:#1e1e1e">MiniLux Pro — testad av vår redaktion i 47 timmar</div>
      </div>
    </div>
    <a href="https://www.miniprojekter.se/minilux-pro" rel="dofollow" style="background:#2e7d6b;color:#fff;font-size:.82rem;font-weight:600;padding:.55rem 1.2rem;border-radius:6px;text-decoration:none;white-space:nowrap">Se MiniLux Pro →</a>
  </div>
</div>`;

function isInsideAnchor(before) {
  return (before.match(/<a\b/gi) || []).length > (before.match(/<\/a>/gi) || []).length;
}

function replaceFirstLiteral(text, pattern, replacement) {
  const re = new RegExp(pattern, "i");
  const m = text.match(re);
  if (!m || m.index === undefined) return text;
  if (isInsideAnchor(text.slice(0, m.index))) return text;
  return text.slice(0, m.index) + replacement + text.slice(m.index + m[0].length);
}

function addInlineLinks(html) {
  const navEnd = html.indexOf("</nav>");
  const footerStart = html.indexOf("<footer");
  const headAndNav = navEnd >= 0 ? html.slice(0, navEnd + 6) : "";
  const tail = footerStart >= 0 ? html.slice(footerStart) : "";
  let main = html.slice(headAndNav.length, footerStart >= 0 ? footerStart : html.length);

  const asideBlocks = [];
  main = main.replace(/<aside[\s\S]*?<\/aside>/gi, (block) => {
    asideBlocks.push(block);
    return `__ASIDE_${asideBlocks.length - 1}__`;
  });

  const paragraphs = [];
  main = main.replace(/(<p[\s\S]*?>)([\s\S]*?)(<\/p>)/gi, (full, open, inner, close) => {
    paragraphs.push({ open, inner, close });
    return `__P_${paragraphs.length - 1}__`;
  });

  let linkedPro2 = html.includes("miniprojekter.se/minilux-pro-2");
  let linkedPro = /miniprojekter\.se\/minilux-pro"/.test(html);

  for (const p of paragraphs) {
    if (!linkedPro2 && /MiniLux Pro 2/i.test(p.inner)) {
      const next = replaceFirstLiteral(p.inner, "MiniLux Pro 2", LINK_PRO2);
      if (next !== p.inner) {
        p.inner = next;
        linkedPro2 = true;
      }
    }
  }

  for (const p of paragraphs) {
    if (!linkedPro && /MiniLux Pro(?!\s*2)/i.test(p.inner)) {
      const next = replaceFirstLiteral(p.inner, "MiniLux Pro(?!\\s*2)", LINK_PRO);
      if (next !== p.inner) {
        p.inner = next;
        linkedPro = true;
      }
    }
  }

  main = main.replace(/__P_(\d+)__/g, (_, i) => {
    const p = paragraphs[+i];
    return p.open + p.inner + p.close;
  });
  main = main.replace(/__ASIDE_(\d+)__/g, (_, i) => asideBlocks[+i]);

  return headAndNav + main + tail;
}

function insertAfterFirstH2(html, cta) {
  if (html.includes("Rekommenderad produkt")) return html;
  const bodyIdx = html.indexOf('<div class="body">');
  if (bodyIdx === -1) return html;
  const authorIdx = html.indexOf('<div class="author-box">', bodyIdx);
  const end = authorIdx === -1 ? html.length : authorIdx;
  const section = html.slice(bodyIdx, end);
  const h2Match = section.match(/<h2[^>]*>[\s\S]*?<\/h2>/i);
  if (!h2Match) return html;
  const insertAt = bodyIdx + section.indexOf(h2Match[0]) + h2Match[0].length;
  return html.slice(0, insertAt) + cta + html.slice(insertAt);
}

function addSidebarCta(html, cta) {
  if (html.includes("Testad och rekommenderad")) return html;
  if (!html.includes("<aside")) return html;
  return html.replace(/<aside([^>]*)>/i, `<aside$1>\n${cta}\n`);
}

function replaceOrInsertBottomCta(html, cta) {
  if (!html.includes('class="author-box"')) return html;

  const ctaBoxRe =
    /<div class="cta-box">[\s\S]*?<\/div>\s*(?=\n*\s*<\/div>\s*\n*\s*<div class="author-box">|\n*\s*<div class="author-box">)/i;
  if (ctaBoxRe.test(html)) {
    return html.replace(ctaBoxRe, cta + "\n\n");
  }

  const existingBottom =
    /<div style="background:#1e1e1e;border-radius:8px;padding:2rem;margin:2\.5rem 0;text-align:center">[\s\S]*?<\/div>\s*(?=\n*\s*<div class="author-box">)/i;
  if (existingBottom.test(html)) {
    return html.replace(existingBottom, cta + "\n\n");
  }

  return html.replace(/<div class="author-box">/i, cta + "\n\n<div class=\"author-box\">");
}

function addHomeBanner(html) {
  if (html.includes("Veckans rekommendation")) return html;
  return html.replace(
    /<\/div>\s*\n\s*<div class="page">/,
    `</div>\n\n${HOME_BANNER}\n\n<div class="page">`
  );
}

const files = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));

for (const file of files) {
  let html = fs.readFileSync(path.join(ROOT, file), "utf8");
  if (!/MiniLux Pro/i.test(html)) continue;

  html = addInlineLinks(html);

  if (file === "index.html") {
    html = addHomeBanner(html);
    html = addSidebarCta(html, SIDEBAR_CTA_PRO);
  } else {
    const h2Cta = PRO2_H2_PAGES.has(file) ? H2_CTA_PRO2 : H2_CTA_PRO;
    const sidebarCta = PRO2_SIDEBAR_PAGES.has(file) ? SIDEBAR_CTA_PRO2 : SIDEBAR_CTA_PRO;
    const bottomCta = PRO2_SIDEBAR_PAGES.has(file) ? BOTTOM_CTA_PRO2 : BOTTOM_CTA_PRO;
    html = insertAfterFirstH2(html, h2Cta);
    html = addSidebarCta(html, sidebarCta);
    html = replaceOrInsertBottomCta(html, bottomCta);
  }

  fs.writeFileSync(path.join(ROOT, file), html, "utf8");
  console.log("Updated:", file);
}

console.log("Done.");
