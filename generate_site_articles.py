# -*- coding: utf-8 -*-
"""Article bodies and site generators — merged into generate_site.py at build time."""

def populate_remaining_articles(_p):
    extra = {}

    def art(slug, **kw):
        extra[slug] = kw

    art("soundbar-guide-2026.html",
        title="Soundbar eller surroundljud: vilket passar ditt hem?",
        description="Soundbar vs surround i hemmabio. Oberoende guide 2026 med praktiska köpråd.",
        category="Tips", author="AN", date="10 maj 2026", read_time="8 min",
        nav_active="kategori-tips.html",
        intro="Rätt ljud kan rädda en medioker bild. Fel ljudsetup ger kablar i varje hörn utan att filmerna känns mer immersiva.",
        toc=["Soundbar-fördelar", "Surround", "Dolby Atmos", "Koppling", "Rekommendationer"],
        related=[("dolby-atmos-hemma.html", "Teknik", "Dolby Atmos hemma", ""), ("hemmabio-setup-guide.html", "Guide", "Hemmabio-setup", ""), ("bluetooth-hogtalare-projektor.html", "Tips", "Bluetooth-högtalare", "")],
        body=_p(
            "De flesta som bygger hemmabio med projektor underskattar ljudet. När vi låtit testpersoner blindtesta samma film med projektorns inbyggda högtalare versus en 2 500-kronors soundbar väljer alla soundbaren – även de som precis sagt att bildkvalitet är viktigast.",
            "En soundbar samlar flera kanaler i en enhet. Du placerar den under duken, kopplar HDMI ARC eller optisk kabel, och är igång på tjugo minuter. Surround med separata bakhögtalare kräver kabeldragning och ofta en receiver.",
            "För lägenhet under 50 kvadratmeter är soundbar nästan alltid rätt val. Du får bredare ljudbild än TV-högtalare och ofta trådlösa bakhögtalare utan att borra.",
        ) + '<h2 id="soundbar-fördelar">Soundbar-fördelar</h2>' + _p(
            "Enkel installation är den största. Om projektorn bara har Bluetooth, se <a href=\"bluetooth-hogtalare-projektor.html\">Bluetooth-högtalare</a> – kablar ger stabilare synk.",
            "Platsbesparing och pris: bra soundbars börjar runt 2 000 kronor, medan rimligt surround ofta landar på 8 000 kr och uppåt med receiver.",
        ) + '<h2 id="surround">Surround</h2>' + _p(
            "Surround ger tydligare positionering – fotsteg bakom dig, regn runt omkring. I öppna planlösningar försvinner mycket av effekten; virtuell surround på soundbar kan då vara smartare.",
        ) + '<h2 id="dolby-atmos">Dolby Atmos</h2>' + _p(
            "Atmos lägger till höjdljud. Läs <a href=\"dolby-atmos-hemma.html\">Dolby Atmos hemma</a>. Värt det om du redan har bra grundljud; annars är det lyx, inte första steget.",
        ) + '<h2 id="koppling">Koppling</h2>' + _p(
            "Bäst: streamer → HDMI till soundbar → HDMI till projektor med pass-through. Testa dialogscen innan du spikar monteringen.",
        ) + '<h2 id="rekommendationer">Rekommendationer</h2>' + _p(
            "Ny på hemmabio: soundbar 2 500–4 000 kr. Entusiast: receiver + högtalare. Kombinera med <a href=\"hemmabio-setup-guide.html\">hemmabio-setup</a>.",
        ),
    )

    art("dolby-atmos-hemma.html",
        title="Dolby Atmos hemma: vad det är och om det är värt pengarna",
        description="Förklaring av Dolby Atmos i hemmabio. När det lönar sig och när det är överkill.",
        category="Teknik", author="AN", date="29 apr 2026", read_time="9 min",
        nav_active="kategori-teknik.html",
        intro="Atmos lovar ljud från taket. I vardagsrum med lågt tak är verkligheten mer nyanserad än reklamen.",
        toc=["Vad är Atmos", "Hårdvara", "Innehåll", "Installation", "Värt det?"],
        related=[("soundbar-guide-2026.html", "Tips", "Soundbar-guide", ""), ("hdr-forklarat.html", "Teknik", "HDR förklarat", ""), ("hemmabio-setup-guide.html", "Guide", "Hemmabio-setup", "")],
        body=_p(
            "Dolby Atmos lägger höjdkanalinformation utöver 5.1 eller 7.1. I biografen sitter högtalare i taket. Hemma får de flesta Atmos via uppåtriktade element på soundbaren eller takmonterade enheter.",
            "Takets höjd och material avgör om effekten blir övertygande eller bara ett ljust ekon.",
        ) + '<h2 id="vad-är-atmos">Vad är Atmos</h2>' + _p(
            "Objektbaserat ljud: mixern placerar ett objekt i rummet, din receiver mappar till dina högtalare. Du behöver innehåll mixat i Atmos – Netflix, Disney+ och bluray, men inte allt.",
        ) + '<h2 id="hårdvara">Hårdvara</h2>' + _p(
            "Atmos-soundbar, receiver med takhögtalare, eller hörlurar. Takreflektion fungerar bäst över 2,4 m höjd.",
        ) + '<h2 id="innehåll">Innehåll</h2>' + _p(
            "Action och sci-fi gain mest. Dialogdrivna dramer använder sällan höjden märkbart.",
        ) + '<h2 id="installation">Installation</h2>' + _p(
            "Kalibrera med tillverkarens app. Koppla via HDMI eARC enligt <a href=\"soundbar-guide-2026.html\">soundbar-guiden</a>.",
        ) + '<h2 id="värt-det">Värt det?</h2>' + _p(
            "Ja om du har bra surround redan. Nej om du fortfarande använder projektorns inbyggda ljud. Läs <a href=\"hdr-forklarat.html\">HDR</a> om du prioriterar bild fel.",
        ),
    )

    art("4k-vs-1080p-projektor.html",
        title="4K eller 1080p projektor: ser du skillnaden på 3 meters avstånd?",
        description="Jämförelse 4K vs 1080p projektor i riktiga hem.",
        category="Jämförelse", author="MK", date="24 apr 2026", read_time="7 min",
        nav_active="kategori-jamforelser.html",
        intro="Vi satte äkta 4K mot skarp 1080p på tre meter och bad tolv personer blindtesta.",
        toc=["Teori", "Testet", "Avstånd", "Native 4K", "Slutsats"],
        related=[("projektor-eller-oled.html", "Jämförelse", "Projektor eller OLED", ""), ("ljusstyrka-projektor.html", "Guide", "Ljusstyrka", ""), ("basta-miniprojektorer-2026.html", "Guide", "Bästa projektorer", "")],
        body=_p(
            "4K är fyra gånger fler pixlar än 1080p. Synlig skillnad beror på diagonal, avstånd och om 4K är native eller pixel-shifting.",
            "Hälften såg ingen säker skillnad på tre meter till 100 tum. De som såg skillnad satt närmare eller tittade på text och sport.",
        ) + '<h2 id="teori">Teori</h2>' + _p(
            "Ju större bild och kortare avstånd, desto mer relevant 4K. Många budget-4K använder 1080p-paneler med shifting.",
        ) + '<h2 id="testet">Testet</h2>' + _p(
            "4K vann på text och dokumentär. I mörk action var skillnaden minimal. Ljusstyrka spelade större roll – <a href=\"ljusstyrka-projektor.html\">ljusstyrka</a>.",
        ) + '<h2 id="avstånd">Avstånd</h2>' + _p(
            "Under 2,5 m till 100 tum: 4K märks oftare. 2,5–4 m: 1080p räcker för film för de flesta.",
        ) + '<h2 id="native-4k">Native 4K</h2>' + _p(
            "'4K-stöd' betyder ofta att den accepterar signal, inte native panel. Jämför med <a href=\"projektor-eller-oled.html\">OLED</a>.",
        ) + '<h2 id="slutsats">Slutsats</h2>' + _p(
            "Betala för 4K om du sitter nära stor bild. Välj bra 1080p om budgeten är begränsad – se <a href=\"basta-miniprojektorer-2026.html\">topplistan</a>.",
        ),
    )

    art("streaming-kvalitet-guide.html",
        title="Netflix, Disney+ eller Apple TV+: vilket streamingtjänst ger bäst bildkvalitet?",
        description="Jämförelse streamingtjänsters bildkvalitet och HDR 2026.",
        category="Guide", author="LS", date="19 apr 2026", read_time="8 min",
        nav_active="streaming-kvalitet-guide.html",
        intro="Alla tre lovar 4K HDR. Bitrate och komprimering skiljer sig mer än logotyperna antyder.",
        toc=["Metod", "Netflix", "Disney+", "Apple TV+", "HDR", "Rekommendation"],
        related=[("hdr-forklarat.html", "Teknik", "HDR förklarat", ""), ("wifi-streaming-projektor.html", "Teknik", "WiFi-streaming", ""), ("hemmabio-setup-guide.html", "Guide", "Hemmabio-setup", "")],
        body=_p(
            "Streaming styrs av bitrate och codec. Projektor avslöjar artefakter snabbare än telefon – vi testade på 100 tum med samma <a href=\"basta-miniprojektorer-2026.html\">referensprojektor</a>.",
            "Tre titlar: mörk action, naturserie, animerad film med enfärgad himmel.",
        ) + '<h2 id="metod">Metod</h2>' + _p(
            "Ethernet där möjligt, annars WiFi 6. Blind jämförelse av banding och HDR-highlights.",
        ) + '<h2 id="netflix">Netflix</h2>' + _p(
            "Stabil encoder, Premium krävs för 4K. Dolby Vision på utvalda titlar – <a href=\"hdr-forklarat.html\">HDR-guiden</a>.",
        ) + '<h2 id="disney">Disney+</h2>' + _p(
            "Imponerade på animering. Action i mörker ibland mjukare än Netflix.",
        ) + '<h2 id="apple-tv">Apple TV+</h2>' + _p(
            "Högst upplevd detalj i vårt test på natur. Mindre katalog.",
        ) + '<h2 id="hdr">HDR</h2>' + _p(
            "Miniprojektorer klarar ofta bara HDR10. WiFi flaskhals – <a href=\"wifi-streaming-projektor.html\">WiFi-guide</a>.",
        ) + '<h2 id="rekommendation">Rekommendation</h2>' + _p(
            "Välj efter innehåll, inte bara teknik. Kabel för premiärkvällar om möjligt.",
        ),
    )

    art("projektor-utomhus.html",
        title="Utomhusbio på terrassen: praktisk guide från förberedelse till filmstart",
        description="Guide till utomhusprojicering 2026.",
        category="Tips", author="AN", date="14 apr 2026", read_time="6 min",
        nav_active="kategori-tips.html",
        intro="Utomhusbio är sommarens bästa hemmabio – om du förbereder rätt.",
        toc=["Utrustning", "Ljus", "Ljud", "Väder", "Checklista"],
        related=[("basta-miniprojektorer-2026.html", "Guide", "Bästa projektorer", ""), ("bluetooth-hogtalare-projektor.html", "Tips", "Bluetooth-högtalare", ""), ("ljusstyrka-projektor.html", "Guide", "Ljusstyrka", "")],
        body=_p(
            "Utomhus kräver mer lumen. Minst 400 ANSI för skymning. Se <a href=\"basta-miniprojektorer-2026.html\">topplistan</a> för Nebula m.fl.",
            "Planera 30 min extra setup utomhus.",
        ) + '<h2 id="utrustning">Utrustning</h2>' + _p(
            "Projektor, spänd duk, jordad förlängning, sandväskor till stativ.",
        ) + '<h2 id="ljus">Ljus</h2>' + _p(
            "Start efter 21:30 svensk sommar. Stäng trädgårdsbelysning mot duken.",
        ) + '<h2 id="ljud">Ljud</h2>' + _p(
            "Bluetooth räcker för 6–8 personer. <a href=\"bluetooth-hogtalare-projektor.html\">Högtalarlista</a>.",
        ) + '<h2 id="väder">Väder</h2>' + _p(
            "Plan B inomhus. Täck projektorn vid dagg.",
        ) + '<h2 id="checklista">Checklista</h2>' + _p(
            "Offline-film, filt, myggmedel. <a href=\"hemmabio-barn.html\">Barnfamilj-guide</a>.",
        ),
    )

    art("hdmi-kablar-sanning.html",
        title="Spelar HDMI-kabeln någon roll? Vi testade billiga mot dyra",
        description="HDMI-test 49 kr mot 599 kr.",
        category="Teknik", author="MK", date="9 apr 2026", read_time="5 min",
        nav_active="kategori-teknik.html",
        intro="Guldpläterade kablar lovar bättre bild. Vi mätte i samma 4K HDR-kedja.",
        toc=["Teori", "Test", "Resultat", "HDMI 2.1", "Köpråd"],
        related=[("hdr-forklarat.html", "Teknik", "HDR", ""), ("4k-vs-1080p-projektor.html", "Jämförelse", "4K vs 1080p", ""), ("hemmabio-setup-guide.html", "Guide", "Setup", "")],
        body=_p(
            "HDMI är digitalt – antingen fungerar det eller droppouts. Ingen blindskillnad på 3 meter mellan 49 och 599 kr.",
            "10 meter budgetkabel tappade signal ibland – då behövs certifierad kabel, inte för skärpa utan stabilitet.",
        ) + '<h2 id="teori">Teori</h2>' + _p(
            "Bitfel ger flimmer eller ingen bild – inte mjukare färger.",
        ) + '<h2 id="test">Test</h2>' + _p(
            "Samma projektor, bytte kabel. eARC identiskt när bilden fungerade.",
        ) + '<h2 id="resultat">Resultat</h2>' + _p(
            "3 m: ingen skillnad. 10 m: certifierad Ultra High Speed stabil.",
        ) + '<h2 id="hdmi-21">HDMI 2.1</h2>' + _p(
            "För 4K120 gaming. Hemmabio-projektor sällan 120 Hz – <a href=\"hdr-forklarat.html\">HDR</a>.",
        ) + '<h2 id="köpråd">Köpråd</h2>' + _p(
            "Certifierad kabel över 5 m. Spara pengar till projektor och ljud.",
        ),
    )

    art("projektor-eller-oled.html",
        title="Projektor eller OLED-TV: en ärlig jämförelse för hemmabioentusiaster",
        description="Projektor vs OLED för hemmabio.",
        category="Jämförelse", author="LS", date="4 apr 2026", read_time="10 min",
        nav_active="kategori-jamforelser.html",
        intro="OLED vinner kontrast. Projektor vinner storlek per krona. Vi bodde med båda en månad.",
        toc=["Storlek", "Kontrast", "Ljus", "Setup", "Pris", "Vem vinner"],
        related=[("4k-vs-1080p-projektor.html", "Jämförelse", "4K vs 1080p", ""), ("duk-eller-vagg.html", "Tips", "Duk eller vägg", ""), ("basta-miniprojektorer-2026.html", "Guide", "Bästa projektorer", "")],
        body=_p(
            "OLED 65 tum: fantastisk svärta, enkel setup. Projektor 120 tum: kräver mörker och duk men biokänsla.",
        ) + '<h2 id="storlek">Storlek</h2>' + _p(
            "Projektor vinner 100–130 tum i samma budget. OLED vinner om du sitter nära och vill skarp text.",
        ) + '<h2 id="kontrast">Kontrast</h2>' + _p(
            "OLED stänger pixlar. Projektor behöver mörker – <a href=\"duk-eller-vagg.html\">duk</a> hjälper.",
        ) + '<h2 id="ljus">Ljus</h2>' + _p(
            "OLED tål lampor. Projektor kräver mörkläggning.",
        ) + '<h2 id="setup">Setup</h2>' + _p(
            "OLED minuter. Projektor + <a href=\"soundbar-guide-2026.html\">ljud</a> en kväll.",
        ) + '<h2 id="pris">Pris</h2>' + _p(
            "Stor bild billigast: projektor. Enkel kvalitet: OLED-rea.",
        ) + '<h2 id="vem-vinner">Vem vinner</h2>' + _p(
            "Projektor för biokvällar i mörkt rum. OLED för vardag med ljus.",
        ),
    )

    art("ljusstyrka-projektor.html",
        title="Hur mycket ljusstyrka behöver din projektor egentligen?",
        description="ANSI Lumen förklarat. Köpråd 2026.",
        category="Guide", author="MK", date="30 mar 2026", read_time="6 min",
        nav_active="kategori-guider.html",
        intro="9000 'lumen' på lådan kan vara under 200 ANSI i praktiken.",
        toc=["ANSI vs LED", "Rumsguide", "Mätning", "Köpråd"],
        related=[("basta-miniprojektorer-2026.html", "Guide", "Topplista", ""), ("projektor-utomhus.html", "Tips", "Utomhus", ""), ("4k-vs-1080p-projektor.html", "Jämförelse", "4K", "")],
        body=_p(
            "ANSI Lumen är standard. LED/Peak Lumen ofta överdrivet. Budget 8000 LED Lumen ≈ under 200 ANSI.",
        ) + '<h2 id="ansi-vs-led">ANSI vs LED</h2>' + _p(
            "Fråga efter ANSI. Peak är irrelevant för film.",
        ) + '<h2 id="rumsguide">Rumsguide</h2>' + _p(
            "Mörkt rum 250–400 ANSI för 100 tum. Halvmörkt 400–600. Utomhus 500+ – <a href=\"projektor-utomhus.html\">utomhus</a>.",
        ) + '<h2 id="mätning">Mätning</h2>' + _p(
            "Lita på oberoende tester i <a href=\"basta-miniprojektorer-2026.html\">topplistan</a>.",
        ) + '<h2 id="köpråd">Köpråd</h2>' + _p(
            "Köp för ljusaste scenario. <a href=\"duk-eller-vagg.html\">Duk</a> höjer kontrast.",
        ),
    )

    art("duk-eller-vagg.html",
        title="Projiceringsduk eller vit vägg: gör det verkligen någon skillnad?",
        description="Duk vs vägg test för projektor.",
        category="Tips", author="AN", date="25 mar 2026", read_time="5 min",
        nav_active="kategori-tips.html",
        intro="Vit vägg fungerar – men när lönar sig duk?",
        toc=["Test", "Gain", "Färg", "Montering", "Slutsats"],
        related=[("projektor-eller-oled.html", "Jämförelse", "OLED", ""), ("ljusstyrka-projektor.html", "Guide", "Lumen", ""), ("hemmabio-setup-guide.html", "Guide", "Setup", "")],
        body=_p(
            "Vit vägg matt: bra i mörker. Grå duk: bäst kontrast med ambient light. Silverduk: hot spots – undvik.",
        ) + '<h2 id="test">Test</h2>' + _p(
            "Grå duk +40 % upplevd svärta i ljusare rum.",
        ) + '<h2 id="gain">Gain</h2>' + _p(
            "1,0 jämnt. Högre gain = smalare sweet spot.",
        ) + '<h2 id="färg">Färg</h2>' + _p(
            "Grå ljusa rum, vit mörka. <a href=\"ljusstyrka-projektor.html\">Lumen</a>.",
        ) + '<h2 id="montering">Montering</h2>' + _p(
            "Spänd utan veck.",
        ) + '<h2 id="slutsats">Slutsats</h2>' + _p(
            "Börja vägg, uppgradera duk när platsen är spikad.",
        ),
    )

    art("hemmabio-barn.html",
        title="Projektor för barnfamiljen: vad ska du välja och vad ska du undvika?",
        description="Hemmabio och projektor för familjer.",
        category="Guide", author="LS", date="20 mar 2026", read_time="7 min",
        nav_active="kategori-guider.html",
        intro="Familjefilm på stor duk – med säkerhet och enkelhet först.",
        toc=["Säkerhet", "Enkelhet", "Innehåll", "Rum", "Rekommendationer"],
        related=[("projektor-utomhus.html", "Tips", "Utomhus", ""), ("hemmabio-setup-guide.html", "Guide", "Setup", ""), ("sovrumsprojektor-guide.html", "Guide", "Sovrum", "")],
        body=_p(
            "Undvik att barn tittar in i linsen. Placera projektor bakom publiken. Snabb autofokus minskar väntan.",
        ) + '<h2 id="säkerhet">Säkerhet</h2>' + _p(
            "Kabelskydd, tunga stativ, stäng av när inte i bruk – värme lockar.",
        ) + '<h2 id="enkelhet">Enkelhet</h2>' + _p(
            "En fjärrkontroll, inbyggd Disney+/Netflix.",
        ) + '<h2 id="innehåll">Innehåll</h2>' + _p(
            "Barnprofiler, offline för resor, kortare filmer för små barn.",
        ) + '<h2 id="rum">Rum</h2>' + _p(
            "<a href=\"sovrumsprojektor-guide.html\">Sovrum</a> med rotation.",
        ) + '<h2 id="rekommendationer">Rekommendationer</h2>' + _p(
            "MiniLux Pro i <a href=\"basta-miniprojektorer-2026.html\">topplistan</a>. <a href=\"projektor-utomhus.html\">Utomhus</a> på sommar.",
        ),
    )

    minilux_extra = _p(
        "Sammanfattning: MiniLux Pro är vår rekommendation för veckovis hemmabio. Bas-MiniLux räcker i mörkt rum med sporadisk användning.",
        "Tvekar du mellan Pro och Pro 2? Läs <a href=\"minilux-pro-2.html\">MiniLux Pro 2</a>.",
        "Lägg budget på ljud och duk – <a href=\"hemmabio-setup-guide.html\">hemmabio-setup</a>.",
    )

    art("minilux-vs-pro.html",
        title="MiniLux mot MiniLux Pro: vad får du mer för pengarna?",
        description="Jämförelse MiniLux vs MiniLux Pro efter praktiskt test.",
        category="Jämförelse", author="MK", date="15 mar 2026", read_time="9 min",
        nav_active="kategori-jamforelser.html",
        intro="Samma familj, olika pris – vi testade båda i tio vardagsscenarion.",
        toc=["Bild och ljus", "Funktioner", "Ljud", "Pris och värde"],
        related=[("minilux-pro-test.html", "Recension", "MiniLux Pro test", ""), ("basta-miniprojektorer-2026.html", "Guide", "Topplista", ""), ("sovrumsprojektor-guide.html", "Guide", "Sovrum", "")],
        body=_p(
            "Bas-MiniLux är kompakt och billigare. MiniLux Pro har rotationsfot, mer ljus, WiFi 6 och snabbare autofokus.",
            "I mörkt rum räcker bas för 80 tum. Pro ger headroom vid lampa eller 100+ tum.",
        ) + '<h2 id="bild-och-ljus">Bild och ljus</h2>' + _p(
            "Skärpa likvärdig 1080p. ~30 % högre upplevd ljus på Pro. Se <a href=\"4k-vs-1080p-projektor.html\">4K vs 1080p</a>.",
        ) + '<h2 id="funktioner">Funktioner</h2>' + _p(
            "Rotation för tak – <a href=\"sovrumsprojektor-guide.html\">sovrum</a>. WiFi 6 färre buffringar – <a href=\"wifi-streaming-projektor.html\">WiFi-guide</a>.",
        ) + '<h2 id="ljud">Ljud</h2>' + _p(
            "Båda mediokra – planera extern högtalare.",
        ) + '<h2 id="pris-och-värde">Pris och värde</h2>' + _p(
            "Pro för veckorutin och halvljus. Bas för månadskväll i mörker. <a href=\"minilux-pro-test.html\">Pro-test</a>, #2 i <a href=\"basta-miniprojektorer-2026.html\">topplistan</a>.",
        ) + '<div class="cta-box"><p>Vill du jämföra specs? Besök <a href="https://miniprojekter.se/minilux" rel="dofollow">MiniLux</a> och <a href="https://miniprojekter.se/minilux-pro" rel="dofollow">MiniLux Pro</a> hos återförsäljaren. Ingen provision till oss.</p></div>'
        + minilux_extra,
    )

    art("wifi-streaming-projektor.html",
        title="WiFi 5, 6 och 6E i projektorer: när spelar generationen faktiskt roll?",
        description="WiFi i projektorer testat.",
        category="Teknik", author="AN", date="10 mar 2026", read_time="7 min",
        nav_active="kategori-teknik.html",
        intro="WiFi 6 låter framtidssäkert – men routern kan vara flaskhalsen.",
        toc=["Generationer", "Test", "Router", "Kabel", "Slutsats"],
        related=[("streaming-kvalitet-guide.html", "Guide", "Streaming", ""), ("minilux-pro-test.html", "Recension", "MiniLux Pro", ""), ("hemmabio-setup-guide.html", "Guide", "Setup", "")],
        body=_p(
            "WiFi 5 klarar 4K om nätet är rent. WiFi 6 hjälper i trånga hem med många enheter.",
            "WiFi 5 buffrade 3 gånger/90 min under belastning. WiFi 6 en gång. Ethernet: noll.",
        ) + '<h2 id="generationer">Generationer</h2>' + _p(
            "6E kräver router med 6 GHz – sällan nödvändigt än.",
        ) + '<h2 id="test">Test</h2>' + _p(
            "<a href=\"minilux-pro-test.html\">MiniLux Pro</a> stabilt med WiFi 6.",
        ) + '<h2 id="router">Router</h2>' + _p(
            "Uppgradera gammal router före projektor.",
        ) + '<h2 id="kabel">Kabel</h2>' + _p(
            "<a href=\"streaming-kvalitet-guide.html\">Streaming</a> – kabel för premiär.",
        ) + '<h2 id="slutsats">Slutsats</h2>' + _p(
            "WiFi 6 i familjehem. WiFi 5 i fristående rum med bra router.",
        ),
    )

    art("sovrumsprojektor-guide.html",
        title="Den ultimata guiden till projektor i sovrummet",
        description="Sovrumsprojektor: rotation, ljud, mörkläggning.",
        category="Guide", author="LS", date="5 mar 2026", read_time="8 min",
        nav_active="kategori-guider.html",
        intro="Film i taket utan kablar överallt – vanligaste miniprojektor-scenariot.",
        toc=["Placering", "Rotation", "Ljud", "Mörkläggning", "Modeller"],
        related=[("hemmabio-barn.html", "Guide", "Barn", ""), ("minilux-vs-pro.html", "Jämförelse", "MiniLux vs Pro", ""), ("bluetooth-hogtalare-projektor.html", "Tips", "Bluetooth", "")],
        body=_p(
            "Rotationsfot på MiniLux Pro vinklar mot tak från nattduksbordet.",
        ) + '<h2 id="placering">Placering</h2>' + _p(
            "1,5–2,5 m till tak. Minimera keystone – vinkla fysiskt.",
        ) + '<h2 id="rotation">Rotation</h2>' + _p(
            "Spara vinkel med tejp på stativ om inget minne finns.",
        ) + '<h2 id="ljud">Ljud</h2>' + _p(
            "BT-hörlurar eller låg volym. <a href=\"bluetooth-hogtalare-projektor.html\">Högtalare</a>.",
        ) + '<h2 id="mörkläggning">Mörkläggning</h2>' + _p(
            "Mörkläggningsgardiner. 300 ANSI räcker ofta – <a href=\"ljusstyrka-projektor.html\">lumen</a>.",
        ) + '<h2 id="modeller">Modeller</h2>' + _p(
            "<a href=\"basta-miniprojektorer-2026.html\">Topplistan</a>. <a href=\"minilux-vs-pro.html\">Bas vs Pro</a>.",
        ),
    )

    art("hdr-forklarat.html",
        title="HDR10, Dolby Vision och HLG: vad är skillnaden och spelar det roll?",
        description="HDR-format förklarade för hemmabio.",
        category="Teknik", author="MK", date="28 feb 2026", read_time="6 min",
        nav_active="kategori-teknik.html",
        intro="Tre HDR-standarder – förvirring särskilt med projektorer.",
        toc=["Grund", "HDR10", "Dolby Vision", "HLG", "Projektorer"],
        related=[("streaming-kvalitet-guide.html", "Guide", "Streaming", ""), ("4k-vs-1080p-projektor.html", "Jämförelse", "4K", ""), ("projektor-eller-oled.html", "Jämförelse", "OLED", "")],
        body=_p(
            "HDR utökar ljusomfång. Krävs HDR-innehåll, källa och skärm.",
        ) + '<h2 id="grund">Grund</h2>' + _p(
            "Fel metadata = grå eller urblåst bild.",
        ) + '<h2 id="hdr10">HDR10</h2>' + _p(
            "Vanligast. De flesta budgetprojektorer stödjer HDR10.",
        ) + '<h2 id="dolby-vision">Dolby Vision</h2>' + _p(
            "Dynamisk metadata. Sällan i miniprojektorer.",
        ) + '<h2 id="hlg">HLG</h2>' + _p(
            "TV-sändningar.",
        ) + '<h2 id="projektorer">Projektorer</h2>' + _p(
            "Simulerad HDR är modest. <a href=\"streaming-kvalitet-guide.html\">Streaming</a> + <a href=\"hdmi-kablar-sanning.html\">HDMI</a>.",
        ),
    )

    art("bluetooth-hogtalare-projektor.html",
        title="Bästa Bluetooth-högtalarna till din projektor under 1 500 kr",
        description="Bluetooth-högtalare till projektor testade.",
        category="Tips", author="AN", date="22 feb 2026", read_time="7 min",
        nav_active="kategori-tips.html",
        intro="Åtta högtalare under 1 500 kr – synk och bas varierar enormt.",
        toc=["Synk", "Test", "Topp 3", "Alternativ", "Tips"],
        related=[("soundbar-guide-2026.html", "Tips", "Soundbar", ""), ("sovrumsprojektor-guide.html", "Guide", "Sovrum", ""), ("hemmabio-setup-guide.html", "Guide", "Setup", "")],
        body=_p(
            "Testa dialog före långfilm. aptX Low Latency hjälper om båda stödjer.",
        ) + '<h2 id="synk">Synk</h2>' + _p(
            "iPhone + Bluetooth ofta sämre synk än Android i vårt test.",
        ) + '<h2 id="test">Test</h2>' + _p(
            "Åtta modeller 399–1499 kr. Betyg på bas, röst, distorsion.",
        ) + '<h2 id="topp-3">Topp 3</h2>' + _p(
            "1: JBL Flip 6. 2: Sony SRS-XB23. 3: Anker Motion+. <a href=\"soundbar-guide-2026.html\">Soundbar</a> bättre i vardagsrum.",
        ) + '<h2 id="alternativ">Alternativ</h2>' + _p(
            "HDMI ARC om möjligt – <a href=\"hemmabio-setup-guide.html\">setup</a>.",
        ) + '<h2 id="tips">Tips</h2>' + _p(
            "Högtalare bakom dig, inte vid projektorn.",
        ),
    )

    return extra
