import fs from "fs";

const shell = fs.readFileSync("kontakt.html", "utf8");
const headNav = shell.slice(0, shell.indexOf('<div class="static-page">'));
const footer = shell.slice(shell.indexOf("<footer>"));

function page(title, desc, body, extraStyle = "") {
  let h = headNav.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  h = h.replace(
    /<meta name="description" content="[^"]*"\/>/,
    `<meta name="description" content="${desc}"/>`
  );
  if (extraStyle) {
    h = h.replace("</style>", `${extraStyle}</style>`);
  }
  return `${h}<div class="static-page">${body}</div>${footer}`;
}

const nlStyle =
  ".newsletter-page{max-width:600px;margin:0 auto;padding:4rem 2rem}.newsletter-page h1{font-family:'DM Serif Display',serif;color:#fff;margin-bottom:1rem}.newsletter-page .sub{color:#8899aa;margin-bottom:2rem;line-height:1.75}.newsletter-page label{display:block;font-size:12px;color:#4a6280;margin-bottom:6px}.newsletter-page .form-group{margin-bottom:1rem}.newsletter-page .note{font-size:12px;color:#4a6280;margin-top:1rem}";

fs.writeFileSync(
  "nyhetsbrev.html",
  page(
    "Nyhetsbrev | miniprojektorrecensioner.se",
    "Prenumerera på nyhetsbrevet från miniprojektorrecensioner.se.",
    `<div class="newsletter-page">
<h1>Prenumerera på nyhetsbrevet</h1>
<p class="sub">Veckans bästa hemmabioartiklar direkt i inkorgen. Oberoende granskning utan reklamlöften.</p>
<form action="#" method="post" onsubmit="return false;">
<div class="form-group"><label for="namn">Namn</label><input type="text" id="namn" name="namn" required/></div>
<div class="form-group"><label for="email">E-post</label><input type="email" id="email" name="email" required/></div>
<button type="submit" class="form-btn">Prenumerera gratis</button>
</form>
<p class="note">Vi delar aldrig din e-post med tredje part.</p>
</div>`,
    nlStyle
  )
);

fs.writeFileSync(
  "om-oss.html",
  page(
    "Om oss | miniprojektorrecensioner.se",
    "Om miniprojektorrecensioner.se – oberoende hemmabio-blogg.",
    `<h1>Om miniprojektorrecensioner.se</h1>
<p>Vi är en oberoende blogg om hemmabio, projektorer och ljud. Varje produkt vi skriver om köps med egna medel. Vi har ingen ekonomisk koppling till butiker eller tillverkare som styr våra betyg.</p>
<p>Testerna sker i riktiga hem: sovrum, vardagsrum och ibland terrass. Poängen är att ge dig svar du kan lita på när ljus, ljud och budget skiljer sig från ett perfekt demo-rum.</p>
<h2>Skribenterna</h2>
<div class="author-card" style="display:flex;gap:1rem;margin-bottom:1.5rem;padding:1.2rem;background:#111117;border:1px solid rgba(255,255,255,0.06);border-radius:8px">
<div class="av-lg" style="width:48px;height:48px;flex-shrink:0">LS</div>
<div><div style="font-family:'DM Serif Display',serif;color:#fff;font-size:1.1rem">Lisa Strand</div><div class="bio-role">Chefredaktör</div><p class="bio-text">Åtta år från Ljud och Bild. Fokus på projektorer och streaming i vardagsrum. 250+ produkter och 55+ projektorer testade.</p><div class="bio-stats"><div class="bs"><strong>250+</strong><span>Produkter</span></div><div class="bs"><strong>55+</strong><span>Projektorer</span></div></div></div>
</div>
<div class="author-card" style="display:flex;gap:1rem;margin-bottom:1.5rem;padding:1.2rem;background:#111117;border:1px solid rgba(255,255,255,0.06);border-radius:8px">
<div class="av-lg" style="width:48px;height:48px;flex-shrink:0">MK</div>
<div><div style="font-family:'DM Serif Display',serif;color:#fff;font-size:1.1rem">Martin Kjell</div><div class="bio-role">Seniorskribent</div><p class="bio-text">Tidigare AV-installatör, nu teknikjournalist i tio år. Kombinerar mätningar med hur produkter känns efter flera filmkvällar.</p><div class="bio-stats"><div class="bs"><strong>290+</strong><span>Produkter</span></div><div class="bs"><strong>70+</strong><span>Projektorer</span></div></div></div>
</div>
<div class="author-card" style="display:flex;gap:1rem;margin-bottom:1.5rem;padding:1.2rem;background:#111117;border:1px solid rgba(255,255,255,0.06);border-radius:8px">
<div class="av-lg" style="width:48px;height:48px;flex-shrink:0">AN</div>
<div><div style="font-family:'DM Serif Display',serif;color:#fff;font-size:1.1rem">Anders Nord</div><div class="bio-role">Skribent</div><p class="bio-text">Nio år från Konsumenternas Forum. Skriver om ljud, kablar och rimliga uppgraderingar utan onödiga tillbehör.</p><div class="bio-stats"><div class="bs"><strong>180+</strong><span>Produkter</span></div><div class="bs"><strong>40+</strong><span>Projektorer</span></div></div></div>
</div>
<div class="callout"><p>Vi köper alltid produkter med egna medel. Inga tillverkare har ekonomiskt inflytande över vårt redaktionella innehåll.</p></div>`
  )
);

fs.writeFileSync(
  "kontakt.html",
  page(
    "Kontakt | miniprojektorrecensioner.se",
    "Kontakta redaktionen på miniprojektorrecensioner.se.",
    `<h1>Kontakta oss</h1>
<div class="callout"><p>Vi tar inte emot betalda recensioner eller sponsrat innehåll.</p></div>
<p>Frågor, produktförslag eller faktafel? Skriv till oss.</p>
<p><strong>E-post:</strong> <a href="mailto:redaktion@miniprojektorrecensioner.se" style="color:#22d3ee">redaktion@miniprojektorrecensioner.se</a></p>
<p>Vi svarar vanligtvis inom 24 timmar. Riktiga människor läser varje meddelande, inte automatiserade svar.</p>
<h2>Skicka meddelande</h2>
<form action="#" method="post" onsubmit="return false;">
<div class="form-group"><label for="namn">Namn</label><input type="text" id="namn" name="namn" required/></div>
<div class="form-group"><label for="email">E-post</label><input type="email" id="email" name="email" required/></div>
<div class="form-group"><label for="meddelande">Meddelande</label><textarea id="meddelande" name="meddelande" rows="6" required></textarea></div>
<button type="submit" class="form-btn">Skicka meddelande</button>
</form>`
  )
);

fs.writeFileSync(
  "integritetspolicy.html",
  page(
    "Integritetspolicy | miniprojektorrecensioner.se",
    "Integritetspolicy för miniprojektorrecensioner.se.",
    `<h1>Integritetspolicy</h1>
<p style="color:#4a6280">Senast uppdaterad: maj 2026</p>
<h2>Vilka vi är</h2>
<p>Personuppgiftsansvarig är miniprojektorrecensioner.se. Webbplatsen publicerar oberoende tester av hemmabio och projektorer.</p>
<h2>Vilken data vi samlar in</h2>
<ul>
<li>Namn och e-post om du prenumererar på nyhetsbrev</li>
<li>Kontaktuppgifter om du skickar meddelande via formulär eller e-post</li>
<li>Teknisk data som IP-adress och webbläsartyp via nödvändiga loggar och analys</li>
</ul>
<h2>Google Fonts</h2>
<p>Vi laddar typsnitt från Google Fonts. Det kan innebära att Google behandlar teknisk data enligt sina villkor. Du kan blockera tredjepartsinnehåll i webbläsaren om du vill minska detta.</p>
<h2>Dina rättigheter</h2>
<p>Du har rätt till tillgång, rättelse, radering och begränsning av behandling enligt GDPR. Du kan när som helst avregistrera nyhetsbrev via länk i utskicket.</p>
<h2>Kontakt</h2>
<p>Integritetsfrågor: <a href="mailto:redaktion@miniprojektorrecensioner.se">redaktion@miniprojektorrecensioner.se</a></p>`
  )
);

console.log("Built static pages.");
