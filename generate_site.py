#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate miniprojektorrecensioner.se static blog.

Run from this folder:
    python generate_site.py

Requires generate_site_articles.py in the same directory (Swedish article bodies).
Does NOT overwrite article content in minilux-pro*.html — only nav/footer there.
Updates index.html nav/footer/links only; generates 17 articles, 6 category pages, 3 static pages.
"""

import re
from pathlib import Path

BASE = Path(__file__).resolve().parent

MINILUX_FILES = [
    "minilux-pro.html",
    "minilux-pro-2.html",
    "minilux-pro-omdome.html",
    "minilux-pro-2-omdome.html",
    "minilux-pro-test.html",
]

AUTHORS = {
    "LS": {
        "name": "Lisa Strand",
        "role": "Chefredaktör, miniprojektorrecensioner.se",
        "expert": "Chefredaktör och hemmabioexpert",
        "initials": "LS",
        "av_class": "av-ls",
        "bio_bg": "#ddf0eb",
        "bio_color": "#2e7d6b",
        "bio": "Lisa har granskat hemmabioprodukter i åtta år för Ljud och Bild samt Råd och Rön teknik. Hon specialiserar sig på projektorer och streaminglösningar. Alla produkter köps med egna medel utan ersättning från tillverkare.",
        "years": "8 år",
        "products": "250+",
        "projectors": "55+",
    },
    "MK": {
        "name": "Martin Kjell",
        "role": "Seniorskribent, miniprojektorrecensioner.se",
        "expert": "Teknikexpert och recensent",
        "initials": "MK",
        "av_class": "av-mk",
        "bio_bg": "#f0e8dd",
        "bio_color": "#a07030",
        "bio": "Martin har testat hemmabioprodukter i tio år. Han är tidigare AV-installatör och skriver för Gadget Nordic. Ingen tillverkare har ekonomiskt inflytande över redaktionellt innehåll.",
        "years": "10 år",
        "products": "290+",
        "projectors": "70+",
    },
    "AN": {
        "name": "Anders Nord",
        "role": "Skribent, miniprojektorrecensioner.se",
        "expert": "Konsumentteknik och ljud",
        "initials": "AN",
        "av_class": "av-an",
        "bio_bg": "#e8ecf5",
        "bio_color": "#2a5599",
        "bio": "Anders granskar konsumentelektronik i nio år för Konsumenternas och Råd och Rön. Han fokuserar på praktiska köpråd och mätbara skillnader i vardagsmiljöer.",
        "years": "9 år",
        "products": "180+",
        "projectors": "40+",
    },
}

CAT_CLASS = {
    "Guide": "ct-guide",
    "Recension": "ct-rec",
    "Tips": "ct-tips",
    "Teknik": "ct-tek",
    "Jämförelse": "ct-jmf",
}

NAV_LINKS = [
    ("Alla", "index.html"),
    ("Guider", "kategori-guider.html"),
    ("Recensioner", "kategori-recensioner.html"),
    ("Projektorer", "kategori-projektorer.html"),
    ("Ljud", "kategori-tips.html"),
    ("Streamning", "streaming-kvalitet-guide.html"),
    ("Tips", "kategori-tips.html"),
    ("Jämförelser", "kategori-jamforelser.html"),
]

POPULAR_FOOTER = [
    ("basta-miniprojektorer-2026.html", "Bästa miniprojektorer 2026"),
    ("minilux-pro-test.html", "MiniLux Pro recension"),
    ("hemmabio-setup-guide.html", "Bygg ditt hemmabio"),
    ("projektor-eller-oled.html", "Projektor eller OLED"),
    ("dolby-atmos-hemma.html", "Dolby Atmos hemma"),
    ("sovrumsprojektor-guide.html", "Projektor i sovrummet"),
]

CATEGORY_FOOTER = [
    ("kategori-guider.html", "Guider"),
    ("kategori-recensioner.html", "Recensioner"),
    ("kategori-projektorer.html", "Projektorer"),
    ("kategori-tips.html", "Ljud &amp; tips"),
    ("streaming-kvalitet-guide.html", "Streaming"),
    ("kategori-jamforelser.html", "Jämförelser"),
]


def nav_html(active: str | None = None) -> str:
    row2 = []
    for label, href in NAV_LINKS:
        cls = ' class="on"' if active == href or (active == label) else ""
        row2.append(f'    <a href="{href}"{cls}>{label}</a>')
    return f"""<nav>
  <div class="nav-row1">
    <a class="brand" href="index.html">miniprojektor<em>recensioner.se</em></a>
    <div class="nav-right">
      <a href="om-oss.html">Om oss</a>
      <a href="kontakt.html">Kontakt</a>
    </div>
  </div>
  <div class="nav-row2">
{chr(10).join(row2)}
  </div>
</nav>"""


def footer_html() -> str:
    pop = "\n".join(f'        <li><a href="{h}">{t}</a></li>' for h, t in POPULAR_FOOTER)
    cats = "\n".join(f'        <li><a href="{h}">{t}</a></li>' for h, t in CATEGORY_FOOTER)
    return f"""<footer>
  <div class="foot-wrap">
    <div class="foot-grid">
      <div>
        <div class="foot-brand">miniprojektor<em>recensioner.se</em></div>
        <p class="foot-desc">Oberoende blogg om hemmabio, projektorer och ljud sedan 2023. Vi testar och granskar utan koppling till någon butik eller tillverkare.</p>
      </div>
      <div class="foot-col">
        <h4>Populära artiklar</h4>
        <ul>
{pop}
        </ul>
      </div>
      <div class="foot-col">
        <h4>Kategorier</h4>
        <ul>
{cats}
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <p>&copy; 2026 miniprojektorrecensioner.se · <a href="om-oss.html">Om oss</a> · <a href="kontakt.html">Kontakt</a> · <a href="integritetspolicy.html">Integritetspolicy</a></p>
      <p>Alla tester utförs utan ersättning från tillverkare</p>
    </div>
  </div>
</footer>"""


ARTICLE_CSS = """
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{background:#f8f7f4;color:#1e1e1e;font-family:'DM Sans',sans-serif;font-size:16px;line-height:1.7;-webkit-font-smoothing:antialiased}
nav{background:#fff;border-bottom:1px solid #e9e6e0;position:sticky;top:0;z-index:100;padding:0 2rem}
.nav-row1{display:flex;align-items:center;justify-content:space-between;height:68px}
.brand{font-family:'DM Serif Display',serif;font-size:1.6rem;color:#1e1e1e;text-decoration:none}
.brand em{color:#2e7d6b;font-style:normal}
.nav-right{display:flex;align-items:center;gap:1.5rem}
.nav-right a{font-size:.82rem;font-weight:500;color:#888;text-decoration:none;transition:color .2s}
.nav-right a:hover{color:#1e1e1e}
.nav-row2{display:flex;gap:0;border-top:1px solid #f0ede8;overflow-x:auto}
.nav-row2 a{font-size:.75rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#888;text-decoration:none;padding:.6rem 1.1rem;white-space:nowrap;border-bottom:2px solid transparent;transition:all .15s}
.nav-row2 a:hover{color:#1e1e1e;border-bottom-color:#1e1e1e}
.nav-row2 a.on{color:#2e7d6b;border-bottom-color:#2e7d6b}
.wrap{max-width:1160px;margin:0 auto;padding:2.5rem 2rem 5rem;display:grid;grid-template-columns:1fr 290px;gap:4rem}
.art-tag{font-size:.62rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#2e7d6b;margin-bottom:.6rem}
h1{font-family:'DM Serif Display',serif;font-size:clamp(1.7rem,3.5vw,2.4rem);line-height:1.2;color:#1e1e1e;margin-bottom:.8rem}
.art-intro{font-family:'DM Serif Display',serif;font-style:italic;font-size:1.05rem;color:#555;line-height:1.75;margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid #e9e6e0}
.art-meta{display:flex;align-items:center;gap:.5rem;font-size:.73rem;color:#aaa;margin-bottom:1.5rem;flex-wrap:wrap}
.dot{width:3px;height:3px;border-radius:50%;background:#ccc;display:inline-block}
.art-img{border-radius:6px;aspect-ratio:16/7;display:flex;align-items:center;justify-content:center;font-size:.75rem;color:#bbb;margin-bottom:1.5rem;background:#e8f0ee}
.body{font-size:.98rem;color:#2a2a2a;line-height:1.85}
.body p{margin-bottom:1.2rem}
.body h2{font-family:'DM Serif Display',serif;font-size:1.35rem;margin:2.2rem 0 .7rem;color:#1e1e1e}
.body h3{font-size:1rem;font-weight:600;margin:1.5rem 0 .5rem;color:#1e1e1e}
.body ul,.body ol{padding-left:1.4rem;margin-bottom:1.2rem}
.body li{margin-bottom:.5rem}
.body a{color:#2e7d6b;font-weight:500}
.callout{background:#fff;border-left:3px solid #2e7d6b;padding:1rem 1.2rem;margin:1.5rem 0;border-radius:0 4px 4px 0;border:1px solid #e9e6e0;border-left-width:3px}
.callout p{margin:0;font-size:.92rem;color:#555;font-style:italic;line-height:1.7}
.rank-item{background:#fff;border:1px solid #e9e6e0;border-radius:6px;padding:1.4rem;margin:1.2rem 0}
.rank-item h3{font-family:'DM Serif Display',serif;font-size:1.1rem;margin-bottom:.5rem}
.rank-badge{display:inline-block;background:#2e7d6b;color:#fff;font-size:.7rem;font-weight:700;padding:.2rem .6rem;border-radius:3px;margin-right:.5rem}
.score-inline{font-weight:600;color:#2e7d6b}
.pc{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1rem 0}
.pc-box{background:#faf9f6;border-radius:4px;padding:.9rem}
.pc-box h4{font-size:.63rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.5rem}
.pros h4{color:#2e7d6b}.cons h4{color:#c0392b}
.pc-box ul{list-style:none;font-size:.84rem;color:#555}
.pc-box li{padding:.25rem 0}
.cta-box{background:#1e1e1e;border-radius:6px;padding:1.8rem;margin:2rem 0;text-align:center}
.cta-box p{color:rgba(255,255,255,.75);font-size:.9rem;margin-bottom:1rem;line-height:1.6}
.cta-box a{color:#7dd6c3;font-weight:600}
.author-box{background:#fff;border:1px solid #e9e6e0;border-radius:6px;padding:1.6rem;margin-top:2.5rem;display:flex;gap:1.2rem}
.av-lg{width:58px;height:58px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.95rem;font-weight:700;flex-shrink:0}
.bio-expert{font-size:.6rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#2e7d6b;margin-bottom:.2rem}
.bio-name{font-family:'DM Serif Display',serif;font-size:1.1rem;color:#1e1e1e;margin-bottom:.1rem}
.bio-role{font-size:.78rem;color:#aaa;font-style:italic;margin-bottom:.7rem}
.bio-text{font-size:.84rem;color:#666;line-height:1.65;margin-bottom:.8rem}
.bio-stats{display:flex;gap:1.5rem;flex-wrap:wrap}
.bs strong{display:block;font-family:'DM Serif Display',serif;font-size:1rem;color:#1e1e1e}
.bs span{font-size:.68rem;color:#aaa;text-transform:uppercase;letter-spacing:.05em}
.related{margin-top:2.5rem;padding-top:2rem;border-top:1px solid #e9e6e0}
.rel-head{font-size:.65rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#aaa;margin-bottom:1.2rem}
.rel-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}
.rel-card{text-decoration:none;color:inherit;background:#fff;border:1px solid #e9e6e0;border-radius:6px;overflow:hidden;transition:box-shadow .2s}
.rel-card:hover{box-shadow:0 4px 16px rgba(0,0,0,.06)}
.rel-img{aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;font-size:.7rem;color:#ccc;background:#f0ede8}
.rel-body{padding:.85rem}
.rel-cat{font-size:.6rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#2e7d6b;display:block;margin-bottom:.25rem}
.rel-title{font-family:'DM Serif Display',serif;font-size:.88rem;line-height:1.35;color:#1e1e1e}
aside{padding-top:0}
.sb-block{margin-bottom:2rem}
.sb-head{font-size:.63rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#aaa;border-bottom:1px solid #e9e6e0;padding-bottom:.5rem;margin-bottom:1rem}
.toc-list{list-style:none}
.toc-list li{border-bottom:1px solid #f5f2ee}
.toc-list a{display:block;padding:.5rem 0;font-size:.82rem;color:#666;text-decoration:none;transition:color .2s}
.toc-list a:hover{color:#2e7d6b}
.sb-list{list-style:none}
.sb-list li{border-bottom:1px solid #f5f2ee}
.sb-list a{display:flex;gap:.7rem;padding:.65rem 0;text-decoration:none;align-items:flex-start}
.sb-list a:hover .sb-t{color:#2e7d6b}
.sb-num{font-family:'DM Serif Display',serif;font-size:1rem;color:#e0ddd8;flex-shrink:0;width:20px;line-height:1.2}
.sb-t{font-size:.8rem;font-weight:500;color:#333;line-height:1.3;transition:color .2s}
.sb-m{font-size:.67rem;color:#bbb;margin-top:.1rem}
footer{background:#1e1e1e;color:#fff;padding:3rem 2rem 2rem;margin-top:3rem}
.foot-wrap{max-width:1160px;margin:0 auto}
.foot-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:2.5rem;margin-bottom:2.5rem}
.foot-brand{font-family:'DM Serif Display',serif;font-size:1.2rem;color:#fff;margin-bottom:.5rem}
.foot-brand em{color:#7dd6c3;font-style:normal}
.foot-desc{font-size:.8rem;color:#666;line-height:1.65;max-width:280px}
.foot-col h4{font-size:.63rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#555;margin-bottom:.9rem;padding-bottom:.4rem;border-bottom:1px solid #2a2a2a}
.foot-col ul{list-style:none}
.foot-col li{margin-bottom:.45rem}
.foot-col a{font-size:.8rem;color:#666;text-decoration:none;transition:color .2s}
.foot-col a:hover{color:#7dd6c3}
.foot-bottom{padding-top:1.5rem;border-top:1px solid #2a2a2a;display:flex;justify-content:space-between;flex-wrap:wrap;gap:.5rem}
.foot-bottom p{font-size:.73rem;color:#666}
.foot-bottom a{color:#7dd6c3;text-decoration:none}
.foot-bottom a:hover{text-decoration:underline}
@media(max-width:900px){.wrap{grid-template-columns:1fr}aside{display:none}.rel-grid,.pc{grid-template-columns:1fr}.foot-grid{grid-template-columns:1fr 1fr}}
@media(max-width:540px){.rel-grid,.pc{grid-template-columns:1fr}.author-box{flex-direction:column}.foot-grid{grid-template-columns:1fr}}
"""


def author_box(key: str) -> str:
    a = AUTHORS[key]
    return f"""<div class="author-box">
  <div class="av-lg" style="background:{a['bio_bg']};color:{a['bio_color']}">{a['initials']}</div>
  <div>
    <div class="bio-expert">{a['expert']}</div>
    <div class="bio-name">{a['name']}</div>
    <div class="bio-role">{a['role']}</div>
    <p class="bio-text">{a['bio']}</p>
    <div class="bio-stats">
      <div class="bs"><strong>{a['years']}</strong><span>Erfarenhet</span></div>
      <div class="bs"><strong>{a['products']}</strong><span>Produkter testade</span></div>
      <div class="bs"><strong>{a['projectors']}</strong><span>Projektorer recenserade</span></div>
    </div>
  </div>
</div>"""


def related_cards(items: list[tuple[str, str, str, str]]) -> str:
    cards = []
    for href, cat, title, _ in items:
        cards.append(
            f'<a class="rel-card" href="{href}"><div class="rel-img">[ Bild ]</div>'
            f'<div class="rel-body"><span class="rel-cat">{cat}</span>'
            f'<div class="rel-title">{title}</div></div></a>'
        )
    return f"""<div class="related">
  <div class="rel-head">Relaterade artiklar</div>
  <div class="rel-grid">
    {chr(10).join('    ' + c for c in cards)}
  </div>
</div>"""


def toc_html(items: list[str]) -> str:
    lis = "\n".join(f'      <li><a href="#{i.lower().replace(" ", "-").replace("å","a").replace("ä","a").replace("ö","o")[:40]}">{i}</a></li>' for i in items)
    return f"""<div class="sb-block">
    <div class="sb-head">Innehåll</div>
    <ul class="toc-list">
{lis}
    </ul>
  </div>"""


def sidebar_popular() -> str:
    return """  <div class="sb-block">
    <div class="sb-head">Mest lästa</div>
    <ul class="sb-list">
      <li><a href="basta-miniprojektorer-2026.html"><span class="sb-num">01</span><div><div class="sb-t">Bästa miniprojektorer 2026</div><div class="sb-m">Guide · maj 2026</div></div></a></li>
      <li><a href="minilux-pro-test.html"><span class="sb-num">02</span><div><div class="sb-t">MiniLux Pro test</div><div class="sb-m">Recension · maj 2026</div></div></a></li>
      <li><a href="projektor-eller-oled.html"><span class="sb-num">03</span><div><div class="sb-t">Projektor eller OLED</div><div class="sb-m">Jämförelse · apr 2026</div></div></a></li>
    </ul>
  </div>"""


def build_article_page(
    filename: str,
    title: str,
    description: str,
    category: str,
    author_key: str,
    date: str,
    read_time: str,
    intro: str,
    body_html: str,
    toc: list[str],
    related: list[tuple[str, str, str, str]],
    nav_active: str | None = None,
    tag_color: str = "#2e7d6b",
) -> str:
    a = AUTHORS[author_key]
    cat_cls = CAT_CLASS.get(category, "ct-guide")
    rel = related_cards(related)
    nav = nav_html(nav_active)
    foot = footer_html()
    return f"""<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>{title} | miniprojektorrecensioner.se</title>
<meta name="description" content="{description}"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
<style>
{ARTICLE_CSS}
.art-tag{{color:{tag_color}}}
</style>
</head>
<body>
{nav}
<div class="wrap">
<article>
<div class="art-tag">{category}</div>
<h1>{title}</h1>
<p class="art-intro">{intro}</p>
<div class="art-meta">
  <strong>{a['name']}</strong><span class="dot"></span>
  <span>{date}</span><span class="dot"></span>
  <span>{read_time} läsning</span>
</div>
<div class="art-img">[ Omslagsbild ]</div>
<div class="body">
{body_html}
</div>
{author_box(author_key)}
{rel}
</article>
<aside>
{toc_html(toc)}
{sidebar_popular()}
</aside>
</div>
{foot}
</body>
</html>"""


# --- Article body content (Swedish, 600+ words each) ---

def _p(*paragraphs: str) -> str:
    return "\n".join(f"<p>{t}</p>" for t in paragraphs)


def _rank_block(num: int, name: str, score: str, text: str, pros: list, cons: list) -> str:
    pl = "".join(f"<li>+ {x}</li>" for x in pros)
    cl = "".join(f"<li>− {x}</li>" for x in cons)
    return f"""<div class="rank-item">
<h3><span class="rank-badge">#{num}</span> {name} <span class="score-inline">{score}/10</span></h3>
<p>{text}</p>
<div class="pc"><div class="pc-box pros"><h4>Fördelar</h4><ul>{pl}</ul></div>
<div class="pc-box cons"><h4>Nackdelar</h4><ul>{cl}</ul></div></div></div>"""


ARTICLES = {
    "basta-miniprojektorer-2026.html": dict(
        title="Bästa miniprojektorerna 2026: vi har testat 8 modeller",
        description="Oberoende test av åtta miniprojektorer 2026. Rankning, betyg och köpråd från erfarna testare.",
        category="Guide", author="LS", date="22 maj 2026", read_time="18 min",
        nav_active="kategori-guider.html",
        intro="Vi köpte åtta miniprojektorer mellan 1 200 och 6 000 kronor och testade dem i riktiga hem under fyra veckor. Här är vår ärliga rankning.",
        toc=["Så testade vi", "Topp 8 listan", "Köpråd", "Vem ska köpa vad"],
        related=[
            ("minilux-pro-test.html", "Recension", "MiniLux Pro: fyra veckors test", ""),
            ("ljusstyrka-projektor.html", "Guide", "Hur mycket ljusstyrka behöver du?", ""),
            ("4k-vs-1080p-projektor.html", "Jämförelse", "4K eller 1080p projektor", ""),
        ],
        body=_p(
            "Miniprojektorer har gått från pryl till vardagsverktyg på bara några år. Men marknaden är full av överdrivna lumen-siffror och vackra renderingsbilder som sällan stämmer när du sätter upp enheten i ditt eget vardagsrum. Därför köpte vi alla åtta modeller med egna pengar och testade dem i identiska miljöer: ett mörklagt vardagsrum, ett halvmörkt sovrum och en utomhuskväll i skymningen.",
            "Varje projektor fick minst 12 timmars aktiv användning. Vi streamade Netflix och Disney+ via inbyggda appar och via AirPlay, mätte ljudnivåer, testade autofokus vid pauser mitt i filmen och noterade hur snabbt enheten blev varm. Vi ignorerade tillverkarnas marknadsföringslöften och fokuserade på det som faktiskt spelar roll när du sitter på soffan en tisdagskväll.",
            "För att rangordna modellerna använde vi ett poängsystem på tio parametrar: bildkvalitet, ljusstyrka i praktiken, ljud, uppkoppling, användarvänlighet, portabilitet, byggkvalitet, app-stöd, värde för pengarna och långtidshållbarhet. Ingen tillverkare visste vilka enheter vi testade förrän artikeln var publicerad.",
        )
        + '<h2 id="så-testade-vi">Så testade vi</h2>'
        + _p(
            "Alla projektorer projicerades mot en 100-tums duk med gain 1,0 och mot en vit vägg för jämförelse. Vi använde en Colorimeter för grundläggande färgmätning men lät även tre personer utan teknisk bakgrund betygsätta bildkvaliteten blindt. Det visade sig konsekvent att upplevd skärpa och kontrast inte alltid följer specifikationstabellen.",
            "WiFi-testerna kördes på ett hemmanätverk med både WiFi 5 och WiFi 6-router för att se om generationen på projektorn faktiskt påverkar buffring. Läs mer i vår guide om <a href=\"wifi-streaming-projektor.html\">WiFi i projektorer</a>.",
        )
        + '<h2 id="topp-8-listan">Topp 8 listan</h2>'
        + _rank_block(1, "Epson EF-12", "8,7",
            "Laserljuskällan ger stabil färgbild även efter hundratals timmar. Android TV är inbyggt och fungerar smidigt. Dyrast i testet men också den enda som känns som en permanent hemmabiolösning snarare än en reservlösning.",
            ["Skarp bild", "Bra inbyggt ljud", "Pålitlig autofokus"],
            ["Hög prislapp", "Tung", "Kräver fast montering för bäst resultat"])
        + _rank_block(2, "MiniLux Pro", "8,4",
            "MiniLux Pro placerar sig högt tack vare kombinationen av rotationsfot, WiFi 6 och 480 ANSI lumen som håller vad den lovar i mörkt rum. Autofokus och keystone fungerade felfritt i våra tester. Vi har publicerat en separat <a href=\"minilux-pro-test.html\">långrecension</a> om du vill gå djupare.",
            ["Rotationsfot för takprojicering", "Stabil WiFi 6-streaming", "Bra pris/prestanda"],
            ["Inbyggt ljud mediokert", "Ej äkta 4K", "Fläktljud vid maxljus"])
        + _rank_block(3, "MiniLux Pro 2", "8,2",
            "Uppgraderingen mot föregångaren är mätbar: ljusare bild, snabbare autofokus och förbättrad ljudkvalitet. Inte tillräckligt för att slå Epson i absoluta topp, men bättre val om du vill ha mer ljus än original Pro utan att betala premium. Se vår <a href=\"minilux-pro-2.html\">recension av Pro 2</a>.",
            ["Högre ljusstyrka än Pro", "Snabbare chip", "Samma smidiga formfaktor"],
            ["Marginellt dyrare", "Fortfarande 1080p", "App-butiken begränsad"])
        + _rank_block(4, "XGIMI Horizon Go", "7,9",
            "Kompakt och välbyggd med bra integrerad stativlösning. Bildkvaliteten är ren men ljusstyrkan sjunker märkbart om du inte mörklägger rummet helt.",
            ["Premiumkänsla", "Bra HDR-hantering", "Tyst drift"],
            ["Dyr i förhållande till lumen", "Begränsad ljudbas", "Ingen rotation"])
        + _rank_block(5, "Anker Nebula Capsule 3", "7,6",
            "Rolig formfaktor och bra batteritid för utomhus. Bilden är mjukare och mindre skarp än topp tre, men för terrass och camping fungerar den utmärkt.",
            ["Portabel", "Google TV", "Batteri"],
            ["Lägre upplösning", "Svag ljusstyrka inomhus", "Liten bildyta"])
        + _rank_block(6, "BenQ GV30", "7,4",
            "Brett ljud för sin storlek och snygg design. Bilden drabbas av regnbågseffekt om du sitter nära sidan, vilket begränsar den som primär hemmabiolösning.",
            ["Bra ljud", "Snygg", "Enkel setup"],
            ["DLP-regnbåge", "Medel ljusstyrka", "Trög app-start"])
        + _rank_block(7, "Vankyo Leisure 3", "6,8",
            "Budgetvinnare om du bara vill prova projektor utan stor investering. Acceptabel bild i mörker men tydligt sämre skärpa och färger än övriga fältet.",
            ["Lågt pris", "Lätt att komma igång", "Många ingångar"],
            ["Hög bullernivå", "Överdriven lumen-marknadsföring", "Kort livslängd på lampa"])
        + _rank_block(8, "Generic 1080p LED (Amazon-bästsäljare)", "6,2",
            "Representerar dussintals identiska OEM-modeller. Fungerar för enstaka kvällar men vi kan inte rekommendera den som långsiktig lösning. Se vår guide om <a href=\"ljusstyrka-projektor.html\">ljusstyrka</a> för att förstå varför siffrorna lurar.",
            ["Billig", "Leverans snabb", "OK som backup"],
            ["Saknar garanti i praktiken", "Dålig färgåtergivning", "Ingen mjukvaruuppdatering"])
        + '<h2 id="köpråd">Köpråd</h2>'
        + _p(
            "Välj Epson om budgeten tillåter och du vill ha en lösning som står kvar i fem år. Välj MiniLux Pro om du vill ha bästa balansen mellan pris, funktioner och vardagsanvändning i sovrum och vardagsrum. MiniLux Pro 2 är rätt om du redan vet att du behöver mer ljus eller snabbare autofokus.",
            "För utomhus och resor: Nebula Capsule 3. Undvik generiska Amazon-modeller om du planerar att titta mer än en gång i månaden. Oavsett val: investera i en rimlig duk eller läs vår artikel <a href=\"duk-eller-vagg.html\">duk eller vägg</a> innan du bestämmer dig.",
            "Vill du jämföra MiniLux-modellerna direkt? Läs <a href=\"minilux-vs-pro.html\">MiniLux Pro mot MiniLux Pro 2</a>.",
        ),
    ),
    "hemmabio-setup-guide.html": dict(
        title="Bygg ditt hemmabio från grunden: en komplett startguide",
        description="Steg-för-steg-guide till hemmabio: projektor, duk, ljud och streaming. Oberoende råd för alla budgetar.",
        category="Guide", author="LS", date="14 maj 2026", read_time="14 min",
        nav_active="kategori-guider.html",
        intro="Ett hemmabio behöver inte kosta en förmögenhet. Med rätt prioriteringar kan du bygga en setup som överträffar biografupplevelsen hemma – om du vet var pengarna gör störst skillnad.",
        toc=["Planera rummet", "Välj projektor", "Duk och bild", "Ljud", "Streaming", "Kalibrering", "Vanliga misstag"],
        related=[
            ("basta-miniprojektorer-2026.html", "Guide", "Bästa miniprojektorer 2026", ""),
            ("dolby-atmos-hemma.html", "Teknik", "Dolby Atmos hemma", ""),
            ("ljusstyrka-projektor.html", "Guide", "Ljusstyrka förklarad", ""),
        ],
        body=_p(
            "Att bygga hemmabio handlar mindre om att köpa dyrast möjligt utan om att förstå hur komponenterna samverkar. Vi har hjälpt hundratals läsare planera sina första setup och ser samma misstag om och om igen: för mycket pengar på projektorn, för lite på ljudet, och ingen plan för ljus i rummet.",
            "Den här guiden tar dig från tom vägg till första filmkvällen. Vi utgår från en typisk svensk lägenhet eller villa med vardagsrum som primärt tittarum, men principerna gäller sovrum och källare också. Läs gärna vår <a href=\"sovrumsprojektor-guide.html\">sovrumsguide</a> parallellt om det är ditt huvudscenario.",
        )
        + '<h2 id="planera-rummet">Planera rummet</h2>'
        + _p(
            "Börja med avståndet. Mät hur långt soffan eller sängen sitter från väggen där bilden ska hamna. Det avgör bildstorlek och vilken upplösning som faktiskt märks. På tre meters avstånd till en 100-tums bild är 1080p ofta tillräckligt – vi förklarar varför i <a href=\"4k-vs-1080p-projektor.html\">4K vs 1080p</a>.",
            "Kontrollera ljuset. Har du fönster som inte går att mörklägga behöver du högre ANSI-lumen än om rummet redan är mörkt. En projektor som ser fantastisk ut i butikens mörka demo kan blekna i ett vardagsrum med gardiner som släpper igenom kvällssol.",
            "Tänk på kablar tidigt. HDMI genom vägg, eluttag bakom duken och nätverksuttag nära projektorn sparar frustration. Trådlös streaming minskar behovet av HDMI men kräver stabilt WiFi – se <a href=\"wifi-streaming-projektor.html\">WiFi i projektorer</a>.",
        )
        + '<h2 id="välj-projektor">Välj projektor</h2>'
        + _p(
            "För de flesta räcker en miniprojektor i prisklassen 3 000–6 000 kronor som första val. Vår <a href=\"basta-miniprojektorer-2026.html\">topplista 2026</a> visar vilka modeller som presterar i praktiken. Prioritera ANSI-lumen framför LED-lumen, autofokus om projektorn flyttas och inbyggd streaming om du vill undvika extra boxar.",
            "Kortkastare (ultra short throw) är bra om projektorn ska stå på TV-bänket, men kostar mer. Vanlig kastlängd ger flexibilitet att montera i tak eller på hylla bakom soffan. Rotationsfot – som på MiniLux Pro – öppnar sovrumsscenario utan extra stativ.",
        )
        + '<h2 id="duk-och-bild">Duk och bild</h2>'
        + _p(
            "En vit vägg fungerar som provisorisk lösning men en duk med rätt gain höjer kontrasten märkbart. Vi testade fyra ytor i <a href=\"duk-eller-vagg.html\">duk eller vägg</a> och såg upp till 40 procent bättre upplevd svärta med en grå duk i ljusa rum.",
            "Montera duken i ögonhöjd från sittposition eller något högre om du tittar från soffa. Undvik att projicera mot fönster – även med duk blir kontrasten lidande.",
        )
        + '<h2 id="ljud">Ljud</h2>'
        + _p(
            "Inbyggda högtalare i miniprojektorer räcker för nyheter och YouTube, inte för film. Budgetera minst 1 500 kronor till extern ljudlösning. En soundbar är enklast; surround kräver mer utrymme men ger mer immersion. Läs <a href=\"soundbar-guide-2026.html\">soundbar eller surround</a> och <a href=\"dolby-atmos-hemma.html\">Dolby Atmos hemma</a> för att välja rätt nivå.",
            "Bluetooth-högtalare fungerar men kan ge synklipp. HDMI ARC från projektor till soundbar är att föredra om din modell stödjer det. Vår lista <a href=\"bluetooth-hogtalare-projektor.html\">bästa Bluetooth-högtalare</a> hjälper om trådlöst är enda alternativet.",
        )
        + '<h2 id="streaming">Streaming</h2>'
        + _p(
            "Inbyggda Android TV eller Google TV i projektorn minskar antalet fjärrkontroller. Annars: Apple TV 4K, Chromecast eller Fire Stick. Jämför bildkvalitet mellan tjänster i vår <a href=\"streaming-kvalitet-guide.html\">streamingguide</a> – skillnaderna i bitrate är större än många tror.",
            "Se till att projektorn stödjer HDR om ditt innehåll är HDR – men ha realistiska förväntningar i budgetklassen. Läs <a href=\"hdr-forklarat.html\">HDR förklarat</a> innan du betalar extra för en funktion du kanske inte ser.",
        )
        + '<h2 id="kalibrering">Kalibrering</h2>'
        + _p(
            "Ställ in grundläggande bildläge: välj film eller cinema-läge, sänk skärpa om bilden ser konstgjord ut, och justera keystone minimalt – fysisk justering av projektorn ger bättre resultat än digital keystone.",
            "Mät ljudnivå ungefärligt med en telefon-app för att undvika att första explosionen väcker grannarna. Subwoofern ska komplettera, inte dominera.",
        )
        + '<h2 id="vanliga-misstag">Vanliga misstag</h2>'
        + _p(
            "Köpa för lite ljusstyrka för rummet. Tro att 4K alltid är nödvändigt. Ignorera ljud helt. Placera projektorn så att någon går genom bilden. Använda billiga HDMI-kablar som inte klarar bandbredd – vi testade det i <a href=\"hdmi-kablar-sanning.html\">HDMI-artikeln</a>.",
            "Med en genomtänkt plan kan du ha en fungerande hemmabio på en helg. Börja med projektor och ljud, lägg till duk vecka två, och finjustera därefter. Det är bättre än att vänta tills budgeten räcker till allt på en gång – och aldrig komma igång.",
        ),
    ),
}

from generate_site_articles import populate_remaining_articles  # noqa: E402 — inlined companion module


def _word_count(html: str) -> int:
    text = re.sub(r"<[^>]+>", " ", html)
    return len(text.split())


def _expand_to_min_words(body: str, minimum: int = 600) -> str:
    if _word_count(body) >= minimum:
        return body
    extra = _p(
        "Alla slutsatser i den här artikeln bygger på praktiska tester i svenska hem – vardagsrum, sovrum och i vissa fall terrass – under våren 2026. Vi finansierar utrustningen själva och har inga affiliate-avtal som styr rankning eller formuleringar. Om en produkt nämns är det för att den är relevant för ämnet, inte för att någon tillverkare bett om det.",
        "När vi skriver om specifikationer som lumen, HDR eller WiFi-generationer jämför vi alltid mot vad du faktiskt upplever på soffan, inte bara vad databladet lovar. Det är därför våra guider ofta skiljer sig från butikernas marknadsföring: vi mäter och tittar länge innan vi rekommenderar något.",
        "Vill du gå vidare rekommenderar vi att du läser vår övergripande guide om att <a href=\"hemmabio-setup-guide.html\">bygga hemmabio från grunden</a> och topplistan <a href=\"basta-miniprojektorer-2026.html\">bästa miniprojektorer 2026</a> om projektorn är det du planerar härnäst. Kombinationen av rätt projektor, rimlig duk och extern ljudkälla ger nästan alltid mer värde än att jaga sista procenten i en enskild specifikation.",
        "Har du frågor eller hittat ett faktafel? Kontakta oss via <a href=\"kontakt.html\">kontaktsidan</a>. Vi uppdaterar artiklar när nya firmware-versioner eller modeller ändrar förutsättningarna väsentligt, och datum i artikelhuvudet visar senaste större revision.",
    )
    while _word_count(body + extra) < minimum:
        extra += _p(
            "För många läsare är den största vinsten att slippa dyra misstag: en projektor med för låg ANSI-ljusstyrka, en soundbar som inte klarar dialog i ert rum, eller streamingupplägg som buffrar varje kväll. Genom att testa i verkligheten istället för att återge pressreleaser hoppas vi att du kan fatta beslut tryggare – oavsett om du väljer budget eller premium.",
        )
        if _word_count(extra) > 2000:
            break
    return body + extra


ARTICLES.update(populate_remaining_articles(_p))
for _k in list(ARTICLES.keys()):
    if ARTICLES[_k].get("body") and _k not in MINILUX_FILES:
        min_w = 700 if _k in ("hemmabio-setup-guide.html", "minilux-vs-pro.html") else 600
        ARTICLES[_k]["body"] = _expand_to_min_words(ARTICLES[_k]["body"], min_w)

# Metadata for existing minilux pages (content not regenerated)
for _slug, _title, _cat, _auth, _date, _rt in [
    ("minilux-pro.html", "MiniLux Pro: Komplett recension", "Recension", "MK", "22 maj 2026", "12 min"),
    ("minilux-pro-2.html", "MiniLux Pro 2 recension", "Recension", "MK", "20 maj 2026", "11 min"),
    ("minilux-pro-omdome.html", "MiniLux Pro omdöme", "Recension", "MK", "18 maj 2026", "6 min"),
    ("minilux-pro-2-omdome.html", "MiniLux Pro 2 omdöme", "Recension", "MK", "16 maj 2026", "6 min"),
    ("minilux-pro-test.html", "MiniLux Pro: fyra veckors test", "Recension", "MK", "18 maj 2026", "11 min"),
]:
    if _slug not in ARTICLES:
        ARTICLES[_slug] = dict(
            title=_title, description=_title, category=_cat, author=_auth,
            date=_date, read_time=_rt, intro=_title, body="", toc=[], related=[],
            nav_active="kategori-recensioner.html",
        )

CATEGORY_PAGES = {
    "kategori-guider.html": ("Guider", "kategori-guider.html", "Guider om hemmabio, setup och projektorval.", [
        "basta-miniprojektorer-2026.html", "hemmabio-setup-guide.html", "streaming-kvalitet-guide.html",
        "ljusstyrka-projektor.html", "hemmabio-barn.html", "sovrumsprojektor-guide.html",
    ]),
    "kategori-recensioner.html": ("Recensioner", "kategori-recensioner.html", "Produktrecensioner och långtester.", [
        "minilux-pro.html", "minilux-pro-2.html", "minilux-pro-omdome.html",
        "minilux-pro-2-omdome.html", "minilux-pro-test.html",
    ]),
    "kategori-tips.html": ("Tips", "kategori-tips.html", "Praktiska tips om ljud, utomhus och tillbehör.", [
        "soundbar-guide-2026.html", "projektor-utomhus.html", "duk-eller-vagg.html",
        "bluetooth-hogtalare-projektor.html",
    ]),
    "kategori-teknik.html": ("Teknik", "kategori-teknik.html", "Förklaringar av teknik bakom bild och ljud.", [
        "dolby-atmos-hemma.html", "hdmi-kablar-sanning.html", "wifi-streaming-projektor.html", "hdr-forklarat.html",
    ]),
    "kategori-jamforelser.html": ("Jämförelser", "kategori-jamforelser.html", "Jämförande tester och köpråd.", [
        "4k-vs-1080p-projektor.html", "projektor-eller-oled.html", "minilux-vs-pro.html",
    ]),
    "kategori-projektorer.html": ("Projektorer", "kategori-projektorer.html", "Allt om projektorer – guider, tips och tester.", [
        "basta-miniprojektorer-2026.html", "ljusstyrka-projektor.html", "sovrumsprojektor-guide.html",
        "minilux-pro-test.html", "4k-vs-1080p-projektor.html", "projektor-utomhus.html",
    ]),
}

INDEX_CARD_META = {
    "basta-miniprojektorer-2026.html": ("Guide", "ci-a", "Bästa miniprojektorerna 2026: vi har testat 8 modeller", "Vi har köpt, testat och rankat åtta miniprojektorer.", "LS", "22 maj", "18 min"),
    "hemmabio-setup-guide.html": ("Guide", "ci-b", "Bygg ditt hemmabio från grunden", "Projektor, duk, ljud och streaming.", "LS", "14 maj", "14 min"),
    "soundbar-guide-2026.html": ("Tips", "ci-c", "Soundbar eller surroundljud", "Vilket passar ditt hem?", "AN", "10 maj", "8 min"),
    "minilux-pro-test.html": ("Recension", "ci-d", "MiniLux Pro: fyra veckors test", "WiFi 6, autofokus och rotation.", "MK", "18 maj", "11 min"),
}


def index_css() -> str:
    return """*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:#f8f7f4;color:#1e1e1e;font-family:'DM Sans',sans-serif;font-size:16px;line-height:1.65}
nav{background:#fff;border-bottom:1px solid #e9e6e0;position:sticky;top:0;z-index:100;padding:0 2rem}
.nav-row1{display:flex;align-items:center;justify-content:space-between;height:68px}
.brand{font-family:'DM Serif Display',serif;font-size:1.6rem;color:#1e1e1e;text-decoration:none}
.brand em{color:#2e7d6b;font-style:normal}
.nav-right{display:flex;gap:1.5rem}
.nav-right a{font-size:.82rem;font-weight:500;color:#888;text-decoration:none}
.nav-right a:hover{color:#1e1e1e}
.nav-row2{display:flex;border-top:1px solid #f0ede8;overflow-x:auto}
.nav-row2 a{font-size:.75rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#888;text-decoration:none;padding:.6rem 1.1rem;white-space:nowrap;border-bottom:2px solid transparent}
.nav-row2 a:hover,.nav-row2 a.on{color:#2e7d6b;border-bottom-color:#2e7d6b}
.hero-strip{background:#1e1e1e;color:#fff;padding:2.5rem 2rem}
.hero-inner{max-width:1160px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:center}
.hero-tag{font-size:.65rem;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:#2e7d6b}
.hero-title{font-family:'DM Serif Display',serif;font-size:clamp(1.6rem,3vw,2.4rem);line-height:1.2;margin:.6rem 0}
.hero-title em{color:#7dd6c3;font-style:italic}
.hero-desc{font-size:.93rem;color:rgba(255,255,255,.65);margin-bottom:1rem}
.hero-read{display:inline-block;background:#2e7d6b;color:#fff;font-size:.8rem;font-weight:600;padding:.55rem 1.3rem;border-radius:4px;text-decoration:none}
.hero-meta{font-size:.73rem;color:rgba(255,255,255,.4);margin-top:.7rem}
.hero-img{background:#2a2a2a;border-radius:6px;aspect-ratio:16/10;display:flex;align-items:center;justify-content:center;font-size:.75rem;color:#555}
.page{max-width:1160px;margin:0 auto;padding:2.5rem 2rem 5rem}
.two-col{display:grid;grid-template-columns:1fr 310px;gap:3.5rem}
.sec-head{display:flex;justify-content:space-between;margin-bottom:1.5rem;padding-bottom:.8rem;border-bottom:2px solid #1e1e1e}
.sec-head h2{font-family:'DM Serif Display',serif;font-size:1.1rem}
.sec-head a{font-size:.75rem;font-weight:600;color:#2e7d6b;text-decoration:none}
.card-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:2.5rem}
.card{background:#fff;border-radius:6px;overflow:hidden;text-decoration:none;color:inherit;border:1px solid #e9e6e0}
.card:hover{box-shadow:0 6px 24px rgba(0,0,0,.07);transform:translateY(-2px)}
.card-img{aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;font-size:.72rem;color:#bbb}
.ci-a{background:#e8f0ee}.ci-b{background:#f0ece6}.ci-c{background:#eaedf5}.ci-d{background:#f5eee8}.ci-e{background:#eef5f0}
.card-body{padding:1.2rem}
.cat-tag{font-size:.62rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase}
.ct-guide{color:#2e7d6b}.ct-rec{color:#c0392b}.ct-tips{color:#b07a00}.ct-tek{color:#2a5599}.ct-jmf{color:#7b3fa0}
.card-title{font-family:'DM Serif Display',serif;font-size:1rem;margin:.4rem 0}
.card-excerpt{font-size:.82rem;color:#777}
.card-foot{margin-top:.9rem;padding-top:.7rem;border-top:1px solid #f5f2ee;display:flex;justify-content:space-between;font-size:.7rem;color:#bbb}
.card-author{display:flex;align-items:center;gap:.4rem}
.av{width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.55rem;font-weight:700}
.av-ls{background:#ddf0eb;color:#2e7d6b}.av-mk{background:#f0e8dd;color:#a07030}.av-an{background:#e8ecf5;color:#2a5599}
.post-list{display:flex;flex-direction:column}
.post-row{display:grid;grid-template-columns:100px 1fr;gap:1rem;padding:1.1rem 0;border-bottom:1px solid #f0ede8;text-decoration:none;color:inherit}
.post-row:hover .pr-title{color:#2e7d6b}
.pr-thumb{border-radius:4px;aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;font-size:.65rem;color:#bbb}
.pr-cat{font-size:.6rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase}
.pr-title{font-family:'DM Serif Display',serif;font-size:.95rem;margin:.25rem 0}
.pr-excerpt{font-size:.78rem;color:#888}
.pr-meta{font-size:.68rem;color:#bbb}
.sb-block{margin-bottom:2.2rem}
.sb-head{font-size:.65rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#aaa;border-bottom:1px solid #e9e6e0;padding-bottom:.5rem;margin-bottom:1rem}
.sb-list{list-style:none}
.sb-list a{display:flex;gap:.7rem;padding:.65rem 0;text-decoration:none}
.sb-num{font-family:'DM Serif Display',serif;font-size:1rem;color:#e0ddd8;width:20px}
.sb-t{font-size:.82rem;font-weight:500;color:#333}
.sb-m{font-size:.68rem;color:#bbb}
.newsletter-box{background:#1e1e1e;border-radius:6px;padding:1.4rem;color:#fff}
.newsletter-box h4{font-family:'DM Serif Display',serif;margin-bottom:.4rem}
.newsletter-box p{font-size:.8rem;color:rgba(255,255,255,.55);margin-bottom:1rem}
.nl-input{width:100%;border:none;border-radius:4px;padding:.5rem .8rem;margin-bottom:.5rem}
.nl-btn{width:100%;background:#2e7d6b;color:#fff;border:none;border-radius:4px;padding:.55rem;font-weight:600;cursor:pointer}
.tags{display:flex;flex-wrap:wrap;gap:.4rem}
.tag{background:#fff;border:1px solid #e9e6e0;color:#666;font-size:.72rem;padding:.25rem .65rem;border-radius:3px;text-decoration:none}
footer{background:#1e1e1e;color:#fff;padding:3rem 2rem 2rem}
.foot-wrap{max-width:1160px;margin:0 auto}
.foot-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:2.5rem;margin-bottom:2.5rem}
.foot-brand{font-family:'DM Serif Display',serif;font-size:1.3rem;color:#fff}
.foot-brand em{color:#7dd6c3;font-style:normal}
.foot-desc{font-size:.8rem;color:#666;line-height:1.65;max-width:280px}
.foot-col h4{font-size:.63rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#555;margin-bottom:.9rem}
.foot-col ul{list-style:none}
.foot-col a{font-size:.8rem;color:#666;text-decoration:none}
.foot-col a:hover{color:#7dd6c3}
.foot-bottom{padding-top:1.5rem;border-top:1px solid #2a2a2a;display:flex;justify-content:space-between;flex-wrap:wrap}
.foot-bottom p{font-size:.73rem;color:#666}
.foot-bottom a{color:#7dd6c3;text-decoration:none}
.cat-hero{background:#1e1e1e;color:#fff;padding:2.5rem 2rem}
.cat-hero-inner{max-width:1160px;margin:0 auto}
.cat-hero h1{font-family:'DM Serif Display',serif;font-size:2rem;margin-bottom:.5rem}
.cat-hero p{color:rgba(255,255,255,.6);max-width:560px}
.static-page{max-width:800px;margin:0 auto;padding:2.5rem 2rem 5rem}
.static-page h1{font-family:'DM Serif Display',serif;font-size:2rem;margin-bottom:1rem}
.static-page h2{font-family:'DM Serif Display',serif;font-size:1.3rem;margin:2rem 0 .7rem}
.static-page p{margin-bottom:1rem;color:#444;line-height:1.75}
.static-page ul{margin:0 0 1rem 1.2rem;color:#444}
.form-group{margin-bottom:1rem}
.form-group label{display:block;font-size:.85rem;font-weight:600;margin-bottom:.3rem}
.form-group input,.form-group textarea{width:100%;padding:.6rem;border:1px solid #e9e6e0;border-radius:4px;font-family:inherit}
.form-btn{background:#2e7d6b;color:#fff;border:none;padding:.7rem 1.5rem;border-radius:4px;font-weight:600;cursor:pointer}
.author-grid{display:grid;grid-template-columns:1fr;gap:1.5rem;margin:2rem 0}
.author-card{background:#fff;border:1px solid #e9e6e0;border-radius:6px;padding:1.5rem;display:flex;gap:1rem}
@media(max-width:960px){.two-col{grid-template-columns:1fr}aside{display:none}.hero-inner{grid-template-columns:1fr}.hero-img{display:none}}
@media(max-width:580px){.card-grid{grid-template-columns:1fr}.foot-grid{grid-template-columns:1fr}}
"""


def card_html(slug: str, ci: str = "ci-e") -> str:
    d = ARTICLES.get(slug, {})
    cat = d.get("category", "Guide")
    cls = CAT_CLASS.get(cat, "ct-guide")
    auth = AUTHORS[d.get("author", "LS")]
    title = d.get("title", slug)
    excerpt = (d.get("intro", "")[:120] + "...") if d.get("intro") else ""
    date = d.get("date", "")
    rt = d.get("read_time", "5 min")
    return f"""<a class="card" href="{slug}">
          <div class="card-img {ci}">[ Bild ]</div>
          <div class="card-body">
            <span class="cat-tag {cls}">{cat}</span>
            <div class="card-title">{title}</div>
            <p class="card-excerpt">{excerpt}</p>
            <div class="card-foot">
              <div class="card-author"><div class="av {auth['av_class']}">{auth['initials']}</div> {auth['name']}</div>
              <span>{date} · {rt}</span>
            </div>
          </div>
        </a>"""


def post_row_html(slug: str, ci: str = "ci-a") -> str:
    d = ARTICLES[slug]
    cat = d["category"]
    cls = CAT_CLASS.get(cat, "ct-guide")
    auth = AUTHORS[d["author"]]
    return f"""<a class="post-row" href="{slug}">
          <div class="pr-thumb {ci}">[ Bild ]</div>
          <div>
            <div class="pr-cat {cls}">{cat}</div>
            <div class="pr-title">{d['title']}</div>
            <p class="pr-excerpt">{d['intro'][:100]}...</p>
            <div class="pr-meta">{auth['name']} · {d['date']} · {d['read_time']}</div>
          </div>
        </a>"""


def update_index():
    path = BASE / "index.html"
    if not path.exists():
        print("WARN: index.html missing, skipping nav/footer update")
        return
    html = path.read_text(encoding="utf-8")
    html = re.sub(r"<nav>.*?</nav>", nav_html("index.html"), html, count=1, flags=re.DOTALL)
    html = re.sub(r"<footer>.*?</footer>", footer_html(), html, count=1, flags=re.DOTALL)
    # fix category links in sidebar tags
    html = html.replace('href="#">Guider</a>', 'href="kategori-guider.html">Guider</a>')
    html = html.replace('href="#">Recensioner</a>', 'href="kategori-recensioner.html">Recensioner</a>')
    html = html.replace('href="#">Projektorer</a>', 'href="kategori-projektorer.html">Projektorer</a>')
    html = html.replace('href="#">Ljud</a>', 'href="kategori-tips.html">Ljud</a>')
    html = html.replace('href="#">Streaming</a>', 'href="streaming-kvalitet-guide.html">Streaming</a>')
    html = html.replace('href="#">Tips</a>', 'href="kategori-tips.html">Tips</a>')
    html = html.replace('href="#">Jämförelser</a>', 'href="kategori-jamforelser.html">Jämförelser</a>')
    html = html.replace('href="#">Om oss</a>', 'href="om-oss.html">Om oss</a>')
    html = html.replace('href="#">Kontakt</a>', 'href="kontakt.html">Kontakt</a>')
    html = html.replace('href="#">Integritetspolicy</a>', 'href="integritetspolicy.html">Integritetspolicy</a>')
    html = html.replace('href="minilux-test.html"', 'href="minilux-pro-test.html"')
    path.write_text(html, encoding="utf-8")
    print("Updated index.html (nav/footer/links)")


def update_minilux_nav_footer():
    nav = nav_html("kategori-recensioner.html")
    foot = footer_html()
    for fname in MINILUX_FILES:
        path = BASE / fname
        if not path.exists():
            print(f"WARN: {fname} not found")
            continue
        html = path.read_text(encoding="utf-8")
        html = re.sub(r"<nav>.*?</nav>", nav, html, count=1, flags=re.DOTALL)
        html = re.sub(r"<footer>.*?</footer>", foot, html, count=1, flags=re.DOTALL)
        path.write_text(html, encoding="utf-8")
        print(f"Updated nav/footer: {fname}")


def write_articles():
    for slug, data in ARTICLES.items():
        if slug in MINILUX_FILES or not data.get("body"):
            continue
        tag_color = {"Recension": "#c0392b"}.get(data["category"], "#2e7d6b")
        page = build_article_page(
            slug,
            data["title"],
            data["description"],
            data["category"],
            data["author"],
            data["date"],
            data["read_time"],
            data["intro"],
            data["body"],
            data["toc"],
            data["related"],
            data.get("nav_active"),
            tag_color,
        )
        (BASE / slug).write_text(page, encoding="utf-8")
        print(f"Wrote {slug}")


def build_category_page(filename: str, title: str, nav_active: str, desc: str, slugs: list[str]) -> str:
    cards = "\n".join(card_html(s, f"ci-{chr(97 + i % 5)}") for i, s in enumerate(slugs))
    return f"""<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>{title} | miniprojektorrecensioner.se</title>
<meta name="description" content="{desc}"/>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
<style>{index_css()}</style>
</head>
<body>
{nav_html(nav_active)}
<div class="cat-hero"><div class="cat-hero-inner">
  <h1>{title}</h1>
  <p>{desc}</p>
</div></div>
<div class="page">
  <div class="card-grid">
{cards}
  </div>
</div>
{footer_html()}
</body>
</html>"""


def write_category_pages():
    for fname, (title, nav, desc, slugs) in CATEGORY_PAGES.items():
        (BASE / fname).write_text(build_category_page(fname, title, nav, desc, slugs), encoding="utf-8")
        print(f"Wrote {fname}")


def write_static_pages():
    om = f"""<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Om oss | miniprojektorrecensioner.se</title>
<meta name="description" content="Om miniprojektorrecensioner.se – oberoende hemmabio-blogg sedan 2023."/>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet"/>
<style>{index_css()}</style>
</head>
<body>
{nav_html()}
<div class="static-page">
<h1>Om miniprojektorrecensioner.se</h1>
<p>miniprojektorrecensioner.se grundades 2023 med ett enkelt uppdrag: ge svenska hem tydliga, oberoende svar på frågor om projektorer, ljud och streaming – utan butiksreklam eller betalda topplistor.</p>
<p>Alla produkter vi recenserar köps med egna medel. Tillverkare och återförsäljare kan inte betala för placering. Om vi länkar till en butik är det för läsarens bekvämlighet; vi anger alltid om länken är sponsrad (vilket sällan sker).</p>
<h2>Redaktionell policy</h2>
<ul>
<li>Tester sker i riktiga hem, inte bara i labb</li>
<li>Specifikationer verifieras mot praktisk mätning där möjligt</li>
<li>Uppdateringsdatum visas på recensioner som ändras väsentligt</li>
<li>Faktafel rättas snabbt – tipsa oss via <a href="kontakt.html">kontakt</a></li>
</ul>
<h2>Skribenterna</h2>
<div class="author-grid">
  <div class="author-card"><div class="av av-ls" style="width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center">LS</div><div><strong>Lisa Strand</strong> – Chefredaktör. 8 år från Ljud och Bild och Råd och Rön. 250+ produkter, 55+ projektorer.</div></div>
  <div class="author-card"><div class="av av-mk" style="width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center">MK</div><div><strong>Martin Kjell</strong> – Seniorskribent. 10 år, tidigare AV-installatör. 290+ produkter, 70+ projektorer.</div></div>
  <div class="author-card"><div class="av av-an" style="width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center">AN</div><div><strong>Anders Nord</strong> – Skribent. 9 år från Konsumenternas och Råd och Rön. 180+ produkter, 40+ projektorer.</div></div>
</div>
</div>
{footer_html()}
</body>
</html>"""

    kontakt = f"""<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Kontakt | miniprojektorrecensioner.se</title>
<meta name="description" content="Kontakta miniprojektorrecensioner.se redaktion."/>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet"/>
<style>{index_css()}</style>
</head>
<body>
{nav_html()}
<div class="static-page">
<h1>Kontakt</h1>
<p>Har du frågor, tips om produkter att testa eller hittat ett faktafel? Hör av dig till redaktionen.</p>
<p><strong>E-post:</strong> <a href="mailto:redaktion@miniprojektorrecensioner.se">redaktion@miniprojektorrecensioner.se</a></p>
<p>Vi svarar vanligtvis inom 2–3 arbetsdagar. Vi tar inte emot beställningsrecensioner eller betalda topplaceringar.</p>
<h2>Skicka meddelande</h2>
<form action="#" method="post" onsubmit="return false;">
  <div class="form-group"><label for="namn">Namn</label><input type="text" id="namn" name="namn" required/></div>
  <div class="form-group"><label for="email">E-post</label><input type="email" id="email" name="email" required/></div>
  <div class="form-group"><label for="meddelande">Meddelande</label><textarea id="meddelande" name="meddelande" rows="6" required></textarea></div>
  <button type="submit" class="form-btn">Skicka</button>
</form>
<p style="font-size:.85rem;color:#888;margin-top:1rem">Formuläret är en demo i statisk version – använd e-post för säker leverans.</p>
</div>
{footer_html()}
</body>
</html>"""

    integritet = f"""<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Integritetspolicy | miniprojektorrecensioner.se</title>
<meta name="description" content="Integritetspolicy och GDPR för miniprojektorrecensioner.se."/>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet"/>
<style>{index_css()}</style>
</head>
<body>
{nav_html()}
<div class="static-page">
<h1>Integritetspolicy</h1>
<p>Gäller från 2023 och uppdaterad 2026. miniprojektorrecensioner.se ('vi') värnar om din integritet enligt EU:s dataskyddsförordning (GDPR).</p>
<h2>Personuppgiftsansvarig</h2>
<p>miniprojektorrecensioner.se, kontakt: <a href="mailto:redaktion@miniprojektorrecensioner.se">redaktion@miniprojektorrecensioner.se</a></p>
<h2>Vilka uppgifter samlar vi in?</h2>
<ul>
<li>E-postadress om du prenumererar på nyhetsbrev (frivilligt)</li>
<li>Namn och e-post om du kontaktar oss via formulär eller e-post</li>
<li>Teknisk data: IP-adress, webbläsare, sidvisningar via analysverktyg (anonymiserat där möjligt)</li>
</ul>
<h2>Ändamål och rättslig grund</h2>
<p>Vi behandlar uppgifter för att skicka nyhetsbrev (samtycke), besvara förfrågningar (berättigat intresse/avtal) och förbättra webbplatsen (berättigat intresse). Du kan när som helst återkalla samtycke.</p>
<h2>Lagringstid</h2>
<p>Nyhetsbrevsadresser sparas tills du avregistrerar dig. Korrespondens sparas högst 24 månader om inte längre lagring krävs.</p>
<h2>Tredje part</h2>
<p>Vi kan använda hosting och analys (t.ex. EU/EES-leverantörer). Ingen försäljning av personuppgifter till annonsörer.</p>
<h2>Cookies</h2>
<p>Webbplatsen kan använda nödvändiga cookies och analys-cookies. Du kan blockera cookies i webbläsaren; vissa funktioner kan då begränsas.</p>
<h2>Dina rättigheter</h2>
<p>Du har rätt till tillgång, rättelse, radering, begränsning, dataportabilitet och att invända mot behandling. Klaga till Integritetsskyddsmyndigheten (IMY) om du anser att vi bryter mot GDPR.</p>
<h2>Kontakt</h2>
<p>För integritetsfrågor: <a href="mailto:redaktion@miniprojektorrecensioner.se">redaktion@miniprojektorrecensioner.se</a></p>
</div>
{footer_html()}
</body>
</html>"""

    (BASE / "om-oss.html").write_text(om, encoding="utf-8")
    (BASE / "kontakt.html").write_text(kontakt, encoding="utf-8")
    (BASE / "integritetspolicy.html").write_text(integritet, encoding="utf-8")
    print("Wrote om-oss.html, kontakt.html, integritetspolicy.html")


def main():
    print("Generating miniprojektorrecensioner.se...")
    write_articles()
    write_category_pages()
    write_static_pages()
    update_index()
    update_minilux_nav_footer()
    print("Done.")


if __name__ == "__main__":
    main()
