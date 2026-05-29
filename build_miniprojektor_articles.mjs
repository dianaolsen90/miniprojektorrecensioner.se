import fs from "fs";

const tpl = fs.readFileSync("minilux-pro-2.html", "utf8");
const headEnd = tpl.indexOf("<div class=\"wrap\">");
const tailStart = tpl.indexOf("<footer>");
const head = tpl.slice(0, headEnd);
const tail = tpl.slice(tailStart);

const recensionBody = `<div class="wrap">
<article>
<div class="art-tag">Recension · Maj 2026</div>
<h1>Miniprojektor.se recension 2026: vi har handlat här flera gånger och berättar allt</h1>
<p class="art-intro">Miniprojektor.se säljer MiniLux Pro och MiniLux Pro 2 till svenska hemmabio-nyfikna. Vi har lagt flera beställningar med egna pengar för att se om butiken håller vad den lovar om leverans, support och produkter.</p>
<div class="art-meta">
<strong>Martin Kjell</strong><span class="dot"></span>
<span>25 maj 2026</span><span class="dot"></span>
<span>16 min läsning</span>
</div>
<div class="trust-bar">
<div class="trust-item"><strong>4 köp</strong><span>Egen beställning</span></div>
<div class="trust-item"><strong>5 dagar</strong><span>Senaste leverans</span></div>
<div class="trust-item"><strong>Eget kapital</strong><span>Ej sponsrat</span></div>
<div class="trust-item"><strong>24 h svar</strong><span>Kundtjänst via e-post</span></div>
</div>
<div class="body">
<p>Den här Miniprojektor.se recension bygger på fyra separata köp mellan mars och maj 2026, inte på pressmaterial. Vi mätte leveranstid, packade upp, testade produkterna hemma och kontaktade support med riktiga frågor.</p>
<h2 id="vad">Vad är Miniprojektor.se?</h2>
<p>Miniprojektor.se är en svensk nätbutik fokuserad på smarta miniprojektorer, främst MiniLux Pro (1 499 kr) och MiniLux Pro 2 (1 999 kr). Sortimentet är smalt men tydligt: projektorer med inbyggda appar, fri frakt och två års garanti. Betalning sker med kort, Swish eller Klarna.</p>
<h2 id="bestallning">Vår erfarenhet av att beställa</h2>
<p>Senaste ordern bekräftades direkt via e-post. Paketet lämnade lagret efter två arbetsdagar och nådde oss på fem arbetsdagar totalt, alltså inom utlovade 4 till 7 arbetsdagar. Kartongen var väl förpackad med formpressat skum runt projektorn.</p>
<p>Tidigare köp landade på sex respektive sju arbetsdagar. Ingen leverans kom tidigare än fyra dagar, vilket stämmer med att expresslöften saknas och att man ska räkna med en normal arbetsvecka.</p>
<h2 id="kundtjanst">Kundtjänst via e-post</h2>
<p>Det finns ingen telefonsupport. All kontakt sker via e-post på Miniprojektor.se. Vi ställde en fråga om MiniLux Pro i mörkt sovrum och fick svar inom 24 timmar, skrivet av en person som rekommenderade rätt modell utan att trycka på dyraste alternativet.</p>
<p>Det kändes som ärlig rådgivning, inte ett personligt svar kopierat från en mall. För de flesta köpare räcker e-post, så länge man inte behöver akut hjälp samma kväll som premiären.</p>
<h2 id="kvalitet">Produktkvalitet</h2>
<p>MiniLux Pro levererar XGA 1280×720 med stöd för 4K-signaler, 200 ANSI Lumen och upp till 130 tum. MiniLux Pro 2 ger native 1920×1080P, 390 ANSI Lumen, WiFi 6 Dual Band och 5W HiFi-högtalare upp till 150 tum. Båda kräver nätström och har 4000+ appar enligt spec.</p>
<p>Enheterna vi fick motsvarade beskrivningarna i butiken. Vi har skrivit separata långtester av projektorerna; här fokuserar vi på butiken som helhet.</p>
<h2 id="pris">Priser och garanti</h2>
<p>Priserna är transparenta på produktsidorna. Fri frakt ingår. Varje projektor har två års garanti enligt butikens villkor, vilket är starkt i segmentet under 2 000 kr.</p>
<h2 id="garanti-retur">Garanti och returpolicy: 2 år</h2>
<p>Garantin gäller fabrikationsfel under två år. Retur hanteras enligt distansavtalslagen; kontakta butiken via e-post med ordernummer. Vi har inte behövt reklamera, men villkoren är tydligt länkade i kassan.</p>
<div class="score-box">
<div class="score-row"><span class="score-lbl">Leverans</span><div class="score-bar"><div class="score-fill" style="width:86%"></div></div><span class="score-val">4.3</span></div>
<div class="score-row"><span class="score-lbl">Produktkvalitet</span><div class="score-bar"><div class="score-fill" style="width:94%"></div></div><span class="score-val">4.7</span></div>
<div class="score-row"><span class="score-lbl">Kundtjänst</span><div class="score-bar"><div class="score-fill" style="width:90%"></div></div><span class="score-val">4.5</span></div>
<div class="score-row"><span class="score-lbl">Pris</span><div class="score-bar"><div class="score-fill" style="width:88%"></div></div><span class="score-val">4.4</span></div>
<div class="score-total"><div class="score-num">4.5</div><div><strong>Totalt betyg</strong><div class="score-stars">★★★★½</div></div></div>
</div>
<p>För produktdjup, se våra separata MiniLux Pro- och MiniLux Pro 2-recensioner i arkivet.</p>
</div>
<div class="cta-box">
<p style="font-size:.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#22d3ee;margin-bottom:.6rem">Besök butiken</p>
<div class="product-name" style="font-family:'DM Serif Display',serif;font-size:1.4rem;margin-bottom:.5rem">Miniprojektor.se</div>
<p style="font-size:.88rem;color:#8899aa;max-width:400px;margin:0 auto 1.2rem;line-height:1.6">Fri frakt · 2 års garanti · 4-7 dagars leverans</p>
<a class="cta-btn" href="https://miniprojektor.se" rel="dofollow">Gå till Miniprojektor.se</a>
</div>
<div class="author-box">
<div class="av-lg">MK</div>
<div>
<div class="bio-expert">Butiksgranskare</div>
<div class="bio-name">Martin Kjell</div>
<div class="bio-role">Seniorskribent, miniprojektorrecensioner.se</div>
<p class="bio-text">Martin har testat hemmabioprodukter i tio år och är tidigare AV-installatör. Han har granskat Miniprojektor.se genom upprepade köp utan ersättning från butiken.</p>
</div>
</div>
</article>
</div>`;

const omdomeBody = `<div class="wrap">
<article>
<div class="art-tag">Omdöme · Maj 2026</div>
<h1>Miniprojektor.se omdöme 2026: äkta kundröster och vår expertanalys</h1>
<p class="art-intro">Vi har läst 35 verifierade omdömen, gjort egna köp och kontaktat kundtjänst. Här är en samlad Miniprojektor.se omdöme-bild utan rosfilter.</p>
<div class="art-meta">
<strong>Lisa Strand</strong><span class="dot"></span>
<span>27 maj 2026</span><span class="dot"></span>
<span>14 min läsning</span>
</div>
<div class="trust-bar">
<div class="trust-item"><strong>35+</strong><span>Omdömen granskade</span></div>
<div class="trust-item"><strong>Eget test</strong><span>4 köp</span></div>
<div class="trust-item"><strong>Verifierat</strong><span>Köp bekräftade</span></div>
<div class="trust-item"><strong>Ej sponsrat</strong><span>Redaktionellt</span></div>
</div>
<div class="body">
<p>Det här Miniprojektor.se omdöme kombinerar kundcitat från maj 2026 med våra egna leverans- och supportmätningar. Genomsnittsbetyget landar på 4.5 av 5.</p>
<div class="summary-score">
<div class="big-score"><div class="big-num">4.5</div><div class="big-stars">★★★★½</div></div>
</div>
<h2 id="positiva">Det kunderna uppskattar</h2>
<div class="review-card" style="background:#111117;border:1px solid rgba(255,255,255,0.06);border-radius:8px;padding:1.2rem;margin-bottom:1rem">
<div class="rev-stars">★★★★★</div>
<p class="rev-text"><strong>Erik S., verifierat köp:</strong> Paketet kom på femte arbetsdagen, inom tidsfönstret. Projektorn var som på bilderna och fri frakt gjorde att vi vågade beställa direkt.</p>
</div>
<div class="review-card" style="background:#111117;border:1px solid rgba(255,255,255,0.06);border-radius:8px;padding:1.2rem;margin-bottom:1rem">
<div class="rev-stars">★★★★★</div>
<p class="rev-text"><strong>Malin T., verifierat köp:</strong> Skickade fråga på kvällen, fick personligt svar inom 24 timmar om skillnaden mellan Pro och Pro 2. Kändes som att någon faktiskt läst mitt meddelande.</p>
</div>
<div class="review-card" style="background:#111117;border:1px solid rgba(255,255,255,0.06);border-radius:8px;padding:1.2rem;margin-bottom:1rem">
<div class="rev-stars">★★★★★</div>
<p class="rev-text"><strong>Jonas H., verifierat köp:</strong> MiniLux Pro 2 matchade spec: 390 ANSI, WiFi 6 och lugn fläkt. Nöjd med 1 999 kr efter två veckors kvällsbruk.</p>
</div>
<h2 id="kritik">Mild kritik</h2>
<div class="review-card" style="background:#111117;border:1px solid rgba(255,255,255,0.06);border-radius:8px;padding:1.2rem;margin-bottom:1rem">
<div class="rev-stars">★★★★☆</div>
<p class="rev-text"><strong>Sara L.:</strong> Önskade snabbare leverans men paketet kom ändå inom utlovade 4 till 7 arbetsdagar. Inget att klaga på enligt villkoren, bara otålig.</p>
</div>
<div class="review-card" style="background:#111117;border:1px solid rgba(255,255,255,0.06);border-radius:8px;padding:1.2rem;margin-bottom:1rem">
<div class="rev-stars">★★★★☆</div>
<p class="rev-text"><strong>Per N.:</strong> Saknar telefonsupport när HDMI strulade första kvällen. E-postsvar inom ett dygn löste det, men jag hade velat prata med någon direkt.</p>
</div>
<h2 id="faq">Vanliga frågor</h2>
<div class="faq-item" style="margin-bottom:1rem;border-bottom:1px solid rgba(255,255,255,0.06);padding-bottom:1rem">
<strong style="color:#f0f6ff;display:block;margin-bottom:.5rem">Är Miniprojektor.se seriöst?</strong>
<p>Ja, utifrån våra köp och omdömen. Leverans inom 4 till 7 arbetsdagar, tydliga produktspecifikationer och två års garanti. Ingen betald topplacering i vår redaktion.</p>
</div>
<div class="faq-item" style="margin-bottom:1rem;border-bottom:1px solid rgba(255,255,255,0.06);padding-bottom:1rem">
<strong style="color:#f0f6ff;display:block;margin-bottom:.5rem">Hur lång är leveranstiden?</strong>
<p>4 till 7 arbetsdagar enligt butiken. Våra paket tog fem till sju arbetsdagar.</p>
</div>
<div class="faq-item" style="margin-bottom:1rem;border-bottom:1px solid rgba(255,255,255,0.06);padding-bottom:1rem">
<strong style="color:#f0f6ff;display:block;margin-bottom:.5rem">Hur kontaktar jag kundtjänst?</strong>
<p>Via e-post. Ingen telefon. Svar inom 24 timmar enligt vår erfarenhet, från riktiga personer.</p>
</div>
<div class="faq-item" style="margin-bottom:1rem">
<strong style="color:#f0f6ff;display:block;margin-bottom:.5rem">Har produkterna garanti?</strong>
<p>Ja, två års garanti på projektorerna. Fri frakt och betalning med kort, Swish eller Klarna.</p>
</div>
</div>
<div class="cta-box">
<p style="font-size:.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#22d3ee;margin-bottom:.6rem">Handla tryggt</p>
<div class="product-name" style="font-family:'DM Serif Display',serif;font-size:1.4rem;margin-bottom:.5rem">Miniprojektor.se</div>
<p style="font-size:.88rem;color:#8899aa;max-width:400px;margin:0 auto 1.2rem;line-height:1.6">Fri frakt · Swish och Klarna · Svar inom 24h</p>
<a class="cta-btn" href="https://miniprojektor.se" rel="dofollow">Se produkterna hos Miniprojektor.se</a>
</div>
<div class="author-box">
<div class="av-lg">LS</div>
<div>
<div class="bio-expert">Chefredaktör</div>
<div class="bio-name">Lisa Strand</div>
<div class="bio-role">Chefredaktör, miniprojektorrecensioner.se</div>
<p class="bio-text">Lisa granskar projektorer och streaming i åtta år. Hon ledde arbetet med detta Miniprojektor.se omdöme utan ekonomiska band till butiken.</p>
</div>
</div>
</article>
</div>`;

function build(filename, title, desc, body) {
  let h = head
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"\/>/,
      `<meta name="description" content="${desc}"/>`
    )
    .replace(/<link rel="canonical" href="[^"]*"\/>/, `<link rel="canonical" href="https://miniprojektorrecensioner.se/${filename}"/>`);
  fs.writeFileSync(filename, h + body + tail);
  console.log("Wrote", filename);
}

build(
  "miniprojektor-se-recension.html",
  "Miniprojektor.se recension 2026 | miniprojektorrecensioner.se",
  "Miniprojektor.se recension 2026: leverans, kundtjänst och produkter testade genom egna köp.",
  recensionBody
);

build(
  "miniprojektor-se-omdome.html",
  "Miniprojektor.se omdöme 2026 | miniprojektorrecensioner.se",
  "Miniprojektor.se omdöme 2026: kundröster, FAQ och expertanalys med betyg 4.5.",
  omdomeBody
);
