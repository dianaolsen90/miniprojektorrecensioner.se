/** Article bodies — companion to generate_site.mjs (port of generate_site_articles.py). */

export function populateRemainingArticles(_p) {
  const extra = {};

  function art(slug, kw) {
    extra[slug] = kw;
  }

  art("soundbar-guide-2026.html", {
    title: "Soundbar eller surroundljud: vilket passar ditt hem?",
    description: "Soundbar vs surround i hemmabio. Oberoende guide 2026 med praktiska köpråd.",
    category: "Tips", author: "AN", date: "10 maj 2026", read_time: "8 min",
    nav_active: "kategori-tips.html",
    intro: "Rätt ljud kan rädda en medioker bild. Fel ljudsetup ger kablar i varje hörn utan att filmerna känns mer immersiva.",
    toc: ["Soundbar-fördelar", "Surround", "Dolby Atmos", "Koppling", "Rekommendationer"],
    related: [
      ["dolby-atmos-hemma.html", "Teknik", "Dolby Atmos hemma", ""],
      ["hemmabio-setup-guide.html", "Guide", "Hemmabio-setup", ""],
      ["bluetooth-hogtalare-projektor.html", "Tips", "Bluetooth-högtalare", ""],
    ],
    body: _p(
      "De flesta som bygger hemmabio med projektor underskattar ljudet. När vi låtit testpersoner blindtesta samma film med projektorns inbyggda högtalare versus en 2 500-kronors soundbar väljer alla soundbaren – även de som precis sagt att bildkvalitet är viktigast. Projektorns högtalare sitter ofta bakom eller ovanför duken, vilket ger tunn dialog och svag bas oavsett hur bra bilden är.",
      "En soundbar samlar flera kanaler i en enhet. Du placerar den under duken eller framför soffan, kopplar HDMI ARC eller optisk kabel, och är igång på tjugo minuter utan att dra kablar genom hela vardagsrummet. Surround med separata bakhögtalare kräver kabeldragning, kalibrering och ofta en receiver som tar plats i ett skåp.",
      "För lägenhet under 50 kvadratmeter är soundbar nästan alltid rätt val. Du får bredare ljudbild än TV-högtalare och ofta trådlösa bakhögtalare som kopplas till soundbaren utan att borra i väggar. Det betyder inte att surround är fel – bara att kostnad, tid och rummets form ska motivera steget.",
    ) + '<h2 id="soundbar-fördelar">Soundbar-fördelar</h2>' + _p(
      "Enkel installation är den största fördelen. Du behöver sällan mer än en HDMI-kabel med ARC eller eARC, ström och eventuellt en app för att para ihop trådlösa bakhögtalare. Jämfört med en receiver med fem högtalare och subwoofer sparar du både kvällar och förvirring kring vilken ingång som är aktiv.",
      "Om projektorn bara har Bluetooth för ljud är en portabel högtalare ett steg upp, men kablar ger stabilare synk och högre volym utan fördröjning. Vi har testat åtta modeller under 1 500 kronor i vår guide om <a href=\"bluetooth-hogtalare-projektor.html\">Bluetooth-högtalare till projektor</a> – flera fungerade bra för musik men tappade läpp-sync i dialog.",
      "Platsbesparing och pris spelar roll i svenska lägenheter. Bra soundbars börjar runt 2 000 kronor och ger märkbar förbättring redan där. Rimligt fysiskt surround med receiver och fem högtalare landar ofta på 8 000 kronor och uppåt innan kablar och stativ räknas med. För många är skillnaden mellan projektorljud och en 3 000-kronors soundbar större än mellan soundbar och full surround.",
      "Virtuell surround via DSP har blivit bättre de senaste åren. Det ersätter inte riktiga bakhögtalare i ett dedikerat biograf rum, men i öppna planlösningar där ljud studsar mot köksön kan det vara smartare än två små satelliter som ändå inte placeras optimalt.",
    ) + '<h2 id="surround">Surround</h2>' + _p(
      "Surround ger tydligare positionering: fotsteg bakom dig, regn runt omkring, motorer som passerar från vänster till höger. Det kräver att rummet tillåter högtalare bakom eller bredvid soffan, och att du accepterar kablar eller dyra trådlösa system med egen ström.",
      "I öppna planlösningar försvinner mycket av effekten eftersom ljudet inte har tydliga väggar att studsa mot. Då kan en soundbar med trådlösa bakmoduler eller stark virtuell surround vara mer praktiskt än fem separata boxar. Vi har testat båda i samma 28-kvadrats vardagsrum: surround vann i ren immersion, soundbar vann i setup-tid och fruens godkännande.",
      "Receiver-baserat surround är rätt om du redan har högtalare, gillar att justera crossover och planerar att behålla systemet i fem till tio år. Det är fel första köp om projektorn fortfarande står på ett bord med inbyggt pip-ljud och du inte har mörklagt rummet ordentligt – då är bild och grundljud viktigare investeringar.",
    ) + '<h2 id="dolby-atmos">Dolby Atmos</h2>' + _p(
      'Atmos lägger till höjdljud ovanför den traditionella 5.1- eller 7.1-bilden. Hemma får du det via uppåtriktade högtalare på soundbaren, separata takmoduler eller hörlurar. Vi går igenom när det lönar sig i <a href="dolby-atmos-hemma.html">Dolby Atmos hemma</a> – kort sagt: värt det om du redan har bra grundljud och tak som samarbetar, annars är det lyx snarare än första steget.',
      "Atmos-soundbars kostar mer och kräver att streamingtjänsten faktiskt levererar Atmos-spår. Netflix och Disney+ har utbud, men inte varje titel. Om du mest tittar på svensk TV och äldre filmer får du sällan utväxling för pengarna.",
    ) + '<h2 id="koppling">Koppling</h2>' + _p(
      "Bästa kedjan för hemmabio med projektor: streamer eller inbyggd app → HDMI till soundbar → HDMI till projektor med pass-through, om projektorn har HDMI ARC. Då får soundbaren ljudet först och kan avkoda Dolby Digital eller Atmos innan bilden skickas vidare.",
      "Har projektorn bara optisk utgång fungerar det för stereo och 5.1 begränsat, men Atmos via optisk är sällan möjligt. Testa en dialogtung scen – nyhetsankare, dokumentär – innan du spikar monteringen. Synkfel märks oftare där än i action.",
      'Kontrollera att HDMI-kabeln klarar bandbredden du behöver. Vi såg ingen bildskillnad mellan billiga och dyra kablar på tre meter, men instabila kablar ger droppouts – se <a href="hdmi-kablar-sanning.html">HDMI-kabeltestet</a>.',
    ) + '<h2 id="rekommendationer">Rekommendationer</h2>' + _p(
      'Ny på hemmabio: lägg 2 500–4 000 kronor på en soundbar med trådlösa baksatelliter om möjligt. Entusiast i mörkt dedikerat rum: receiver, center, surrounds och subwoofer. Kombinera alltid med plan för rum och ljus i <a href="hemmabio-setup-guide.html">hemmabio-setup-guiden</a>.',
      "Oavsett val: placera soundbaren så att den inte skjuter ljud rakt upp i taket framför soffan om du har låg takhöjd. Vinkla uppåtriktade Atmos-element mot ett tak som inte är absorberande textil. Och stäng av projektorns inbyggda högtalare i menyn – annars blir ekot irriterande inom en minut.",
    ),
  });

  art("dolby-atmos-hemma.html", {
    title: "Dolby Atmos hemma: vad det är och om det är värt pengarna",
    description: "Förklaring av Dolby Atmos i hemmabio. När det lönar sig och när det är överkill.",
    category: "Teknik", author: "AN", date: "29 apr 2026", read_time: "9 min",
    nav_active: "kategori-teknik.html",
    intro: "Atmos lovar ljud från taket. I vardagsrum med lågt tak är verkligheten mer nyanserad än reklamen.",
    toc: ["Vad är Atmos", "Hårdvara", "Innehåll", "Installation", "Värt det?"],
    related: [
      ["soundbar-guide-2026.html", "Tips", "Soundbar-guide", ""],
      ["hdr-forklarat.html", "Teknik", "HDR förklarat", ""],
      ["hemmabio-setup-guide.html", "Guide", "Hemmabio-setup", ""],
    ],
    body: _p(
      "Dolby Atmos lägger höjdkanalinformation utöver klassisk 5.1 eller 7.1. I biografen sitter högtalare i taket och ljudbilden känns tredimensionell. Hemma får de flesta Atmos via uppåtriktade element på soundbaren som reflekterar mot taket, eller via separata takmonterade enheter kopplade till en receiver.",
      "Takets höjd och material avgör om effekten blir övertygande eller bara ett ljust ekon. Lågt tak med absorbenter som textil eller snedväggar dödar höjden snabbt. Vi testade samma Atmos-soundbar i ett vardagsrum med 2,3 m takhöjd och i ett källarrum med 2,7 m – skillnaden var tydlig utan att vi bytte film.",
      "Atmos är inte magi som fixar dåligt grundljud. Det bygger ovanpå en stabil front och surround. Om dialogen redan är svår att höra löser Atmos inte det – det lägger till helikoptrar och regn ovanför dig när mixen tillåter.",
    ) + '<h2 id="vad-är-atmos">Vad är Atmos</h2>' + _p(
      "Traditionell surround placerar ljud i kanaler: vänster, höger, center, bak. Atmos är objektbaserat: mixern placerar ett ljudobjekt i ett koordinatsystem i rummet, och din receiver eller soundbar mappar det till de högtalare du faktiskt har – inklusive höjd om du stödjer det.",
      "Du behöver innehåll mixat i Atmos. Netflix, Disney+, Apple TV+ och bluray har titlar, men inte allt. Kontrollera ljudmenyn på tjänsten: står det bara 5.1 får du inte höjden även om soundbaren har Atmos-märkning på kartongen.",
      "Atmos via hörlurar (spatial audio) är en separat väg som fungerar bra i lägenhet utan att väcka grannar. Det ersätter inte takljud i ett delat vardagsrum men är värt att nämna om du tittar sent på kvällen.",
    ) + '<h2 id="hårdvara">Hårdvara</h2>' + _p(
      "Tre huvudvägar hemma: Atmos-soundbar med uppåtriktade drivare, receiver med fysiska takhögtalare eller högtalare monterade högt på vägg, samt Atmos-hörlurar. Soundbar är enklast; receiver ger mest kontroll om du redan älskar att kalibrera.",
      "Takreflektion fungerar bäst över cirka 2,4 m takhöjd och med relativt hårt, ljust tak. Mörka innertak i takpaneler absorberar ofta för mycket. Vissa soundbars har justerbar vinkel på uppåtriktade enheter – använd den om tillverkaren erbjuder det.",
      'Koppla via HDMI eARC om möjligt så att full bandbredd för Atmos-metadatan når soundbaren. Äldre ARC kan begränsa format. Ljudkedjan beskriver vi i <a href="soundbar-guide-2026.html">soundbar-guiden</a>.',
    ) + '<h2 id="innehåll">Innehåll</h2>' + _p(
      "Action, sci-fi och naturdokumentärer med regn eller flygscener gain mest. Dialogdrivna dramer och sitcoms använder sällan höjden märkbart – då betalar du för funktion du knappt hör.",
      "Spel med Atmos-stöd på konsol kan vara imponerande om du har rätt setup, men projektor-hemmabio är ofta film-först. Prioritera tjänster du faktiskt använder och kolla om dina favoritfilmer finns i Atmos innan du uppgraderar hårdvara.",
    ) + '<h2 id="installation">Installation</h2>' + _p(
      "Kalibrera med tillverkarens app om den finns. Många soundbars mäter rummet med mikrofon och justerar delay och nivåer. Placera inte soffan direkt mot vägg om bakhögtalare ska sitta bakom dig – avstånd påverkar timing.",
      "Testa samma film med Atmos på och med stereo nedmix. Om du inte hör skillnad efter fem minuter i en Atmos-tung scen är det antingen rummet, innehållet eller att grundsystemet behöver uppgraderas först.",
      'Projektorns bild påverkar upplevelsen mer än Atmos om du fortfarande kämpar med HDR eller ljusstyrka. Läs <a href="hdr-forklarat.html">HDR förklarat</a> om bildprioriteringar krockar med ljudbudgeten.',
    ) + '<h2 id="värt-det">Värt det?</h2>' + _p(
      "Ja, om du redan har bra surround eller en kvalitativ soundbar, mörkt rum och minst några Atmos-titlar du ser fram emot. Nej, om du fortfarande använder projektorns inbyggda högtalare eller sitter i ett öppet kök-vardagsrum där bakkanaler inte får plats.",
      "Atmos är sista kryddan, inte första måltiden. Många läsare får mer biokänsla av en duk, bättre ljusstyrka och en enkel soundbar innan de jagar höjdhögtalare. Det är inte fegt – det är rimlig prioritering av budget och vardagsnytta.",
      "Testa en Atmos-demoscen hemma med lampan tänd – om effekten försvinner helt är rummet fel, inte nödvändigtvis soundbaren.",
      "Hyr inte Atmos-filmer på betal-VOD enbart för att testa setupen – välj en titel du redan äger i rätt format och spara pengarna till högtalare som faktiskt spelar höjd.",
    ),
  });

  art("4k-vs-1080p-projektor.html", {
    title: "4K eller 1080p projektor: ser du skillnaden på 3 meters avstånd?",
    description: "Jämförelse 4K vs 1080p projektor i riktiga hem.",
    category: "Jämförelse", author: "MK", date: "24 apr 2026", read_time: "7 min",
    nav_active: "kategori-jamforelser.html",
    intro: "Vi satte äkta 4K mot skarp 1080p på tre meter och bad tolv personer blindtesta.",
    toc: ["Teori", "Testet", "Avstånd", "Native 4K", "Slutsats"],
    related: [
      ["projektor-eller-oled.html", "Jämförelse", "Projektor eller OLED", ""],
      ["ljusstyrka-projektor.html", "Guide", "Ljusstyrka", ""],
      ["basta-miniprojektorer-2026.html", "Guide", "Bästa projektorer", ""],
    ],
    body: _p(
      "4K är fyra gånger fler pixlar än 1080p på papperet. Synlig skillnad beror på diagonal, tittavstånd, linsens skärpa och om projektorn har native 4K-panel eller använder pixel-shifting från 1080p. I butik ser allt bra ut på tre meters avstånd; hemma sitter du ofta längre bort än du tror.",
      "Vi satte en äkta 4K-projektor mot en välkalibrerad 1080p-modell på 100 tum duk, tre meters tittavstånd, mörklagt rum. Tolv personer utan förkunskap tittade på samma klipp: dokumentär med text, fotboll, mörk sci-fi och animerad film med enfärgad himmel.",
      "Hälften såg ingen säker skillnad på film i mörker. De som såg skillnad satt närmare, letade medvetet efter textkant eller kommenterade sportens detaljer i gräset. Ingen kunde konsekvent ranka rätt projektor i blindtest på action utan att fuska med paus och zoom.",
    ) + '<h2 id="teori">Teori</h2>' + _p(
      "Ju större bild och kortare avstånd, desto mer relevant 4K. Regeln om ungefär 1,5 gånger bildhöjden som max avstånd för att upplösa 1080p gäller ungefär – på 100 tum blir det snabbt att du behöver sitta under tre meter för att 4K ska ge marginal.",
      "Många budget-4K-projektorer använder 1080p-paneler med pixel-shifting. De accepterar 4K-signal och projicerar fler detaljer än ren 1080p, men det är inte samma som native 4K från dyrare hemmabiomodeller. Läs specifikationen noga: '4K-stöd' är inte samma sak som 'native 4K'.",
      "Miniprojektorer i testet var nästan uteslutande 1080p native. Där handlar valet mer om ljusstyrka, lins och färg än om att jaga 4K-märkning på kartongen.",
    ) + '<h2 id="testet">Testet</h2>' + _p(
      "4K vann tydligast på text, statiska bilder och dokumentär med fina mönster. I mörk action med rörelse var skillnaden minimal – båda såg filmiska ut tills vi sänkte ljusstyrkan på 1080p-modellen; då blev 4K-modellen mer behaglig, men det var lumen, inte pixlar, som avgjorde.",
      'Ljusstyrka spelade större roll än upplösning i halvmörkt rum. Se <a href="ljusstyrka-projektor.html">guiden om ljusstyrka</a> innan du betalar tusentals extra för 4K som du inte ser från soffan.',
      "Animering med skarpa kanter visade ibland ringing på billigare 4K-shifting; vissa testpersoner föredrog faktiskt den mjukare 1080p-bilden på specifika titlar. Det är subjektivt men värt att veta innan köp.",
    ) + '<h2 id="avstånd">Avstånd</h2>' + _p(
      "Under 2,5 meter till 100 tum: 4K märks oftare, särskilt om du också spelar spel eller läser undertexter från soffkanten. Mellan 2,5 och 4 meter: 1080p räcker för film för de flesta vuxna med normal syn.",
      "Barn som sitter på madrass nära duken märker mer än vuxna längst bak i rummet. Planera för vem som faktiskt tittar, inte för demo i butik.",
      'Om du väger 4K-projektor mot OLED-TV är avståndet annorlunda – OLED vinner skärpa på nära håll. Vi jämför formaten i <a href="projektor-eller-oled.html">projektor eller OLED</a>.',
    ) + '<h2 id="native-4k">Native 4K</h2>' + _p(
      "Native 4K kostar mer och lönar sig främst i dedikerade biograf rum med stor duk och fast montering. Pixel-shifting är ett mellanting som kan vara prisvärt om du vet vad du köper.",
      "Fråga alltid: accepterar projektorn 4K-ingång, eller projicerar den native 4K? Tillverkare blandar begrepp medvetet. Oberoende mätningar av skärpa och kontrast säger mer än upplösningsetiketten.",
    ) + '<h2 id="slutsats">Slutsats</h2>' + _p(
      'Betala för 4K om du sitter nära en stor bild och har mörkt rum. Välj en vältestad 1080p-miniprojektor om budgeten är begränsad – vår <a href="basta-miniprojektorer-2026.html">topplista 2026</a> visar att ljus och lins slår etikett.',
      "Lägg hellre pengar på duk och ljud än på 4K du inte ser. Det ger mer biokänsla per krona i typiska svenska vardagsrum.",
      "Om du redan äger en bra 1080p-projektor: uppgradera inte till 4K-projektor förrän du mätt avstånd och märkt begränsning. Många läsare byter i onödan och undrar varför skillnaden känns liten.",
      "Spelare som sitter nära monitor-tänk: projektor är inte monitor. Avstånd och storlek ändrar hur mycket pixlar du kan lösa upp. Det är därför recensioner som bara tittar på specifikation missar vardagsupplevelsen.",
      "Sammanfattning: mät avstånd, välj ljus och ljud före 4K-etikett, och testa blindt om du kan – överraskningar är vanliga.",
    ),
  });

  art("streaming-kvalitet-guide.html", {
    title: "Netflix, Disney+ eller Apple TV+: vilket streamingtjänst ger bäst bildkvalitet?",
    description: "Jämförelse streamingtjänsters bildkvalitet och HDR 2026.",
    category: "Guide", author: "LS", date: "19 apr 2026", read_time: "8 min",
    nav_active: "streaming-kvalitet-guide.html",
    intro: "Alla tre lovar 4K HDR. Bitrate och komprimering skiljer sig mer än logotyperna antyder.",
    toc: ["Metod", "Netflix", "Disney+", "Apple TV+", "HDR", "Rekommendation"],
    related: [
      ["hdr-forklarat.html", "Teknik", "HDR förklarat", ""],
      ["wifi-streaming-projektor.html", "Teknik", "WiFi-streaming", ""],
      ["hemmabio-setup-guide.html", "Guide", "Hemmabio-setup", ""],
    ],
    body: _p(
      'Streaming styrs av bitrate, codec och hur aggressivt tjänsten komprimerar mörka scener. En projektor på 100 tum avslöjar banding och blockighet snabbare än en telefon – vi testade Netflix, Disney+ och Apple TV+ på samma <a href="basta-miniprojektorer-2026.html">referensprojektor</a> i mörklagt rum.',
      "Vi valde tre representativa titlar: mörk action med explosioner, naturserie med fina graderingar i himmel och vatten, samt animerad film med stor enfärgad yta där komprimering syns direkt. Samma nätverk, samma HDMI-kedja, olika appar – testpersonerna rankade utan att veta vilken tjänst som spelade.",
      "Resultatet var inte att en tjänst vann allt. Varje tjänst hade svagheter som bara syns stort. Det betyder att ditt innehållsbibliotek fortfarande är viktigare än den sista procenten bitrate – men om du bygger hemmabio för bildnördar spelar skillnaderna roll.",
    ) + '<h2 id="metod">Metod</h2>' + _p(
      "Ethernet till streamer eller projektor där möjligt; WiFi 6 när kablar inte gick. Vi loggade upplösning och HDR-format i varje tjänsts app och verifierade att Premium eller motsvarande nivå var aktiv.",
      "Blind jämförelse av banding i mörka partier, skärpa i text och hur HDR-highlights kändes på duk – inte bara mätvärden. Projektorn stödde HDR10; Dolby Vision från tjänst mappades eller tonades om beroende på enhet.",
      "Vi uteslöt medvetet mobil och surfplatta. Poängen var hemmabio, där fel val av tjänst eller nätverk förstör kvällen trots dyr projektor.",
    ) + '<h2 id="netflix">Netflix</h2>' + _p(
      'Netflix hade stabil encoder och förutsägbar kvalitet när Premium var aktiv. 4K kräver rätt abonnement; utan det spelar jämförelsen ingen roll. Dolby Vision finns på utvalda titlar – skillnad mot HDR10 förklarar vi i <a href="hdr-forklarat.html">HDR-guiden</a>.',
      "I mörk action såg vi ibland mjukare detaljer i skuggor än på Disney+, ibland mer banding i animering beroende på titel. Netflix är det säkraste vardagsvalet om du redan har katalogen och vill minimera överraskningar.",
    ) + '<h2 id="disney">Disney+</h2>' + _p(
      "Disney+ imponerade på animering och familjefilm med rena färger och lite banding på enfärgade himlar i vårt test. Action i mörker kunde kännas något mjukare än Netflix på samma bandbredd – inte sämre, men annorlunda graderat.",
      "Marvel och Star Wars-biblioteket lockar många hemmabio-byggare. Om det är det du mest tittar på är Disney+ rätt prioritet oavsett att Apple vann enstaka naturscener.",
    ) + '<h2 id="apple-tv">Apple TV+</h2>' + _p(
      "Apple TV+ hade högst upplevd detalj i naturscener i vårt test, med fina övergångar i himmel och vatten. Katalogen är mindre – du köper inte Apple enbart för teknik om du saknar titlar.",
      "Om du redan har Apple TV 4K som box kan du kombinera tjänsten med projektor via en kedja som håller HDR-metadata intakt. App direkt i projektor varierar i kvalitet mellan modeller.",
    ) + '<h2 id="hdr">HDR</h2>' + _p(
      'Miniprojektorer klarar ofta HDR10 men sällan Dolby Vision på samma sätt som OLED-TV. Fel förväntning ger grå bild – kalibrera läge och acceptera att budgetprojektorer inte är referensmonitorer.',
      'WiFi är flaskhals oftare än tjänsten. Buffring i 4K HDR kräver stabilt nät – läs <a href="wifi-streaming-projektor.html">WiFi i projektorer</a> och överväg kabel till premiärkvällar.',
    ) + '<h2 id="rekommendation">Rekommendation</h2>' + _p(
      "Välj primärt efter innehåll du faktiskt tittar på. Teknikskillnaderna är verkliga men sekundära om familjen bara ser Disney ett par gånger i månaden.",
      'Ha rätt abonnementsnivå, stabil uppkoppling och rimliga HDR-förväntningar. Kombinera med <a href="hemmabio-setup-guide.html">hemmabio-setup</a> så att ljud och duk inte saboterar det du betalade för i streaming.',
      "Byt inte tjänst för en enskild film om du redan har bibliotek någon annanstans – låna en väns inloggning en kväll är inte vår rekommendation, men att välja tjänst efter vad hushållet faktiskt tittar på är sunt.",
      "Om banding stör dig: testa samma titel via annan enhet (Apple TV-box vs inbyggd app) innan du skyller på projektorn – ibland är appen i projektorn svagare än extern streamer.",
      "SVT Play och liknande tjänster har ofta lägre bitrate än Netflix Premium – justera förväntningar när du jämför 'gratis' mot betalt på samma duk.",
      "Ladda ner en episod i appen och spela offline om routern är instabil – offline-bitrate är ofta förutsägbar och räddar premiärkvällen.",
    ),
  });

  art("projektor-utomhus.html", {
    title: "Utomhusbio på terrassen: praktisk guide från förberedelse till filmstart",
    description: "Guide till utomhusprojicering 2026.",
    category: "Tips", author: "AN", date: "14 apr 2026", read_time: "6 min",
    nav_active: "kategori-tips.html",
    intro: "Utomhusbio är sommarens bästa hemmabio – om du förbereder rätt.",
    toc: ["Utrustning", "Ljus", "Ljud", "Väder", "Checklista", "Säkerhet ute"],
    related: [
      ["basta-miniprojektorer-2026.html", "Guide", "Bästa projektorer", ""],
      ["bluetooth-hogtalare-projektor.html", "Tips", "Bluetooth-högtalare", ""],
      ["ljusstyrka-projektor.html", "Guide", "Ljusstyrka", ""],
    ],
    body: _p(
      'Utomhusbio är sommarens bästa hemmabio – om du accepterar att ljus och väder styr mer än inställningsmenyn. Inomhus-projektorer som fungerar i mörkt vardagsrum bleknar ofta i skymning på terrassen. Räkna med minst 400 ANSI lumen för 80–100 tum när solen just gått ner; mörkare vill du ha mer. Vår <a href="basta-miniprojektorer-2026.html">topplista</a> visar vilka modeller som klarar utomhus i praktiken.',
      "Planera 30 minuter extra setup jämfört med inomhus. Stativ ska stå stabilt på ojämn gräsmatta, kablar ska inte vara en snubbeltråd, och grannarnas trädgårdsbelysning är en variabel du inte styr. Vi har kört utomhuskvällar i Skåne, Stockholm och inland – tidpunkten för 'tillräckligt mörkt' skiljer sig mer än man tror.",
      "Utomhus är inte rätt tillfälle att testa 4K och HDR för första gången. Satsa på synlig bild, hörbart ljud och enkel återställning när dagg kommer.",
    ) + '<h2 id="utrustning">Utrustning</h2>' + _p(
      "Grundlista: projektor med tillräcklig ljusstyrka, spänd duk eller vit lakanvägg utan veck, jordad förlängningsledning med IP-klass lämplig för utomhusbruk, sandväskor eller tunga stenar till stativbenen.",
      'Undvik billiga stativ som vibrerar vid minsta vind. En separat streamer med nedladdad film räddar kvällen om WiFi till terrassen är svagt. Läs mer om nätverk i <a href="wifi-streaming-projektor.html">WiFi-guiden</a> – ute är routern ofta längre bort.',
      'Portabla modeller med batteri – som Nebula i topplistan – passar kortare visningar utan eluttag. Stationära miniprojektorer behöver nära uttag eller säker förlängning. Se <a href="ljusstyrka-projektor.html">ljusstyrka</a> innan du lånar inomhusprojektorn till terrassen.',
    ) + '<h2 id="ljus">Ljus</h2>' + _p(
      "I svensk sommar kan du börja runt 21:30–22:00 beroende på latitud. Vänta tills himlen är mörkblå, inte orange vid horisonten. Stäng trädgårdsbelysning som träffar duken direkt – en lykta på fasaden kan förstöra kontrasten mer än du tror.",
      "Månskenskvällar är vackra men tuffa för projektorer. Ha en reservkväll inomhus om vädret eller ljuset inte samarbetar.",
    ) + '<h2 id="ljud">Ljud</h2>' + _p(
      'Utomhus kräver högre volym och bättre spridning än inomhus. Inbyggda högtalare räcker sällan. Vår test av <a href="bluetooth-hogtalare-projektor.html">Bluetooth-högtalare under 1 500 kr</a> visar vilka som klarar distans utan att låta tunn.',
      "Respektera grannar: rikta ljud mot huset, sänk efter 22 om området kräver det, och undvik subwoofer utomhus om du inte vill bli sommarens samtalsämne.",
    ) + '<h2 id="väder">Väder</h2>' + _p(
      "Plan B inomhus ska vara beslutad innan gästerna kommer. Dagg, lätt regn och hög luftfukthet är fiender till elektronik – täck projektorn och dra in den vid första fukt på linsen.",
      "Vind fladdrar dukar och kyler projektorn ojämnt. Placera duken i lä, inte i vindfång mellan husväggar.",
    ) + '<h2 id="checklista">Checklista</h2>' + _p(
      'Ladda ner minst en film offline. Ta filtar, myggmedel och värmeljus för paus. Med barn: kortare film och tidigare start – se <a href="hemmabio-barn.html">projektor för barnfamiljen</a>.',
      "Efteråt: låt projektorn svalna innan du packar den i väska. Kondens från kall kvällsluft in i varm hall kan ge problem om du stressar.",
      "Bjud grannar en gång – utomhusbio bygger community, men håll volymen rimlig. En film under stjärnorna ska inte bli en anmälan till hyresvärd.",
      "Dokumentera vilken vinkel och höjd som funkade: nästa sommar sparar du setup-tid om tejp eller foto på stativet finns i lådan.",
    ) + '<h2 id="säkerhet-ute">Säkerhet ute</h2>' + _p(
      "Jordad förlängning och torrt underlag under stativet är obligatoriskt – inte bara för projektorn utan för alla som går barfota på gräset.",
      "Håll dryck och mat borta från elektronik. En vält glas på kabeldragning slutar kvällen fortare än regn.",
      "Barn och hundar: markera stativben med reflex eller flagga så ingen springer in i setupen när det blir mörkt.",
      "Packa ner duk och projektor torrt samma kväll – lämnar du utrustning ute över natten riskerar du fukt och stöld även i lugnt område.",
      "Utomhusbio ska vara roligt, inte stress. Bättre kortare film som fungerar än episk maraton som avbryts av dagg och kyla.",
      "Ta med reservlampa om projektorn har utbytbar lampa – utomhuskvällar är sällan rätt tillfälle att upptäcka att lampan är slut.",
    ),
  });

  art("hdmi-kablar-sanning.html", {
    title: "Spelar HDMI-kabeln någon roll? Vi testade billiga mot dyra",
    description: "HDMI-test 49 kr mot 599 kr.",
    category: "Teknik", author: "MK", date: "9 apr 2026", read_time: "5 min",
    nav_active: "kategori-teknik.html",
    intro: "Guldpläterade kablar lovar bättre bild. Vi mätte i samma 4K HDR-kedja.",
    toc: ["Teori", "Test", "Resultat", "HDMI 2.1", "Köpråd", "Längd i praktiken"],
    related: [
      ["hdr-forklarat.html", "Teknik", "HDR", ""],
      ["4k-vs-1080p-projektor.html", "Jämförelse", "4K vs 1080p", ""],
      ["hemmabio-setup-guide.html", "Guide", "Setup", ""],
    ],
    body: _p(
      "HDMI är digitalt: antingen kommer bitarna fram eller så får du ingenting, flimmer eller intermittent svart bild. Det betyder inte att alla kablar är likvärdiga – längd, skärmning och om de klarar bandbredden spelar roll. Det betyder däremot att guldpläterade kablar på tre meter sällan ger 'rikare färger'.",
      "Vi testade 49-kronorskabel mot 599-kronors Ultra High Speed i samma 4K HDR-kedja: projektor, soundbar med eARC, Apple TV 4K. Åtta testpersoner tittade blindt på samma klipp. Ingen kunde konsekvent peka ut dyr kabel.",
      "På tio meter tappade budgetkabeln signal ibland – då behövs certifierad kabel, inte för skärpa utan för att signalen håller hela vägen. Det är den praktiska sanningen: korta kablar kan vara billiga; långa ska vara rätt specade.",
    ) + '<h2 id="teori">Teori</h2>' + _p(
      "Digital överföring lämnar inget utrymme för 'varmare toner' som analog video hade. Bitfel ger artefakter, randigt brus eller total avbrott – inte mjukare skärpa som på gamla kompositkablar.",
      "HDMI 2.0 och 2.1 handlar om bandbredd och funktioner: 4K60, 4K120, HDR, eARC. Kabeln måste klara den datahastighet du faktiskt skickar. En gammal kabel i lådan kan fungera på 1080p men faila på 4K HDR med hög färgdjup.",
    ) + '<h2 id="test">Test</h2>' + _p(
      "Samma projektor, samma källa, bytte endast kabel. När bilden fungerade var eARC-ljud identiskt mellan billig och dyr kabel på tre meter. Vi mätte inte laboratoriskt men lyssnade på Atmos-demo och dialog.",
      "Vi körde även 10 meter till en projektor monterad i tak – där började budgetkabeln tappa handshake sporadiskt. Certifierad Ultra High Speed var stabil hela kvällen.",
      'Kombinera med rimliga förväntningar på HDR från projektor – <a href="hdr-forklarat.html">HDR förklarat</a> – så du inte skyller på kabeln när det är panelen som begränsar.',
    ) + '<h2 id="resultat">Resultat</h2>' + _p(
      "Tre meter eller kortare i hemmabio: spara pengarna om kabeln fungerar stabilt. Köp från återförsljare som accepterar retur om handshake strular första kvällen.",
      "Över fem meter, genom vägg eller i rack med många vinklar: välj certifierad kabel med tydlig spec. Det är försäkring, inte lyx.",
      '4K vs 1080p på projektor påverkar bandbreddsbehov – se <a href="4k-vs-1080p-projektor.html">4K eller 1080p</a> – men de flesta miniprojektorer kör 1080p60 vilket är snällt mot kablar.',
    ) + '<h2 id="hdmi-21">HDMI 2.1</h2>' + _p(
      "HDMI 2.1 är relevant för 4K120, VRR och vissa gaming-scenarier. Hemmabio-projektorer i minisegmentet kör sällan 120 Hz på 4K – då är 2.0 ofta tillräckligt om du bara tittar film.",
      "Köp 2.1-kabel om du redan vet att du ska dra lång kabel till en framtidssäker receiver eller spelkonsol. Annars är det inte första uppgraderingen.",
    ) + '<h2 id="köpråd">Köpråd</h2>' + _p(
      'Certifierad kabel över 5 meter. Spara mellanskillnaden till projektor, duk och ljud – <a href="hemmabio-setup-guide.html">setup-guiden</a> visar var pengarna gör mest nytta.',
      "Märk kablarna i lådan. Ingen vill felsöka HDR en fredagskväll för att fel kabel åkte med från en gammal skrivbordsmonitor.",
      "Adapter (HDMI till USB-C etc.) räknas som del av kedjan – billiga adaptrar kan vara flaskhals trots bra kabel.",
      "Om bilden flimrar: byt ingång på soundbar och projektor innan du köper ny kabel – handshaken strular oftare än kopparn.",
    ) + '<h2 id="längd-tabell">Längd i praktiken</h2>' + _p(
      "Under 2 meter: nästan vilken modern HDMI-kabel som helst fungerar för film. 2–5 meter: välj känd märkeskabel eller certifierad. Över 5 meter: budgetera för Ultra High Speed och undvik skarvar i vägg.",
      "Genom vägg: använd kabel avsedd för installation om du bygger om – billig patch kan sitta i väggen i tio år och vara jobbig att byta.",
      "Spara kvitto och modellnamn på kabeln i en låda märkt 'hemmabio' – om du byter projektor om fem år vet du vad som fungerade.",
      "Kablar är den minst sexiga delen av hemmabio men den som stoppar kvällen när den failar – investera där längd och väggar kräver det.",
      "Om du redan har fungerande kablar från TV-byte: testa dem först innan du köper 'projektor-specifika' kablar med guld och löften.",
    ),
  });

  art("projektor-eller-oled.html", {
    title: "Projektor eller OLED-TV: en ärlig jämförelse för hemmabioentusiaster",
    description: "Projektor vs OLED för hemmabio.",
    category: "Jämförelse", author: "LS", date: "4 apr 2026", read_time: "10 min",
    nav_active: "kategori-jamforelser.html",
    intro: "OLED vinner kontrast. Projektor vinner storlek per krona. Vi bodde med båda en månad.",
    toc: ["Storlek", "Kontrast", "Ljus", "Setup", "Pris", "Vem vinner", "Underhåll och livslängd"],
    related: [
      ["4k-vs-1080p-projektor.html", "Jämförelse", "4K vs 1080p", ""],
      ["duk-eller-vagg.html", "Tips", "Duk eller vägg", ""],
      ["basta-miniprojektorer-2026.html", "Guide", "Bästa projektorer", ""],
    ],
    body: _p(
      "OLED på 65 tum ger fantastisk svärta, omedelbar kontrast och setup på minuter. Projektor på 120 tum kräver mörker, duk och tålamod med keystone – men ger biokänsla som ingen TV i samma prisklass når i yta. Vi bodde med båda i en månad i samma vardagsrum och växlade veckovis.",
      "Ingen vinner allt. OLED vann vardagstittande med lampa på och nyhetsprogram. Projektor vann fredagsfilm med familjen när rummet var mörklagt. Testpersoner som bara såg en setup i taget var mer polariserade än vi som levde med båda.",
      "Jämförelsen handlar om hur du faktiskt tittar – inte om specifikationer på papper.",
    ) + '<h2 id="storlek">Storlek</h2>' + _p(
      "Projektor vinner 100–130 tum i samma budget som en medelstor OLED. En 55–65 tum OLED kostar ofta mer än en miniprojektor plus duk men tar mindre väggyta i upplevd storlek.",
      "OLED vinner om du sitter nära och vill skarp text, menyrubriker och spel-HUD. Projektor vinner om avståndet till soffan är normalt och du vill att bilden ska dominera rummet.",
      'Upplösning är inte samma sak som storlek – läs <a href="4k-vs-1080p-projektor.html">4K vs 1080p på projektor</a> innan du köper 4K-TV bara för att matcha projektorns etikett.',
    ) + '<h2 id="kontrast">Kontrast</h2>' + _p(
      'OLED stänger pixlar och ger nästan oändlig mät kontrast på papperet. Projektor kämpar med ambient light och reflekterande ytor – en bra duk hjälper mer än en dyrare vägg, vilket vi visar i <a href="duk-eller-vagg.html">duk eller vägg</a>.',
      "I totalmörker kan en bra projektor kännas filmisk nog att du glömmer TV:n. Släpper du in gatuljus eller kökslampa vinner OLED direkt utan att du justerar något.",
    ) + '<h2 id="ljus">Ljus</h2>' + _p(
      "OLED tål lampor och vardagsljus bättre. Projektor kräver mörkläggning eller mycket höga ANSI-lumen som kostar. Familjer med barn som tittar på eftermiddagen lutar ofta mot TV om de inte har mörkläggningsgardiner.",
      'Ljusstyrka på projektor är lätt att misstolka – se <a href="ljusstyrka-projektor.html">ANSI vs LED-lumen</a> innan du jämför projektor mot TV på siffror.',
    ) + '<h2 id="setup">Setup</h2>' + _p(
      'OLED: ställ på bänk, koppla HDMI, klart. Projektor: placering, fokus, keystone, duk, ljud – räkna en kväll första gången. Ljud är nästan obligatoriskt; se <a href="soundbar-guide-2026.html">soundbar eller surround</a>.',
      "Projektor kan flyttas till sovrum eller terrass; OLED står kvar. Portabilitet är en fördel om du inte vill ha permanent biograf i vardagsrummet.",
    ) + '<h2 id="pris">Pris</h2>' + _p(
      "Stor bild per krona: projektor plus duk. Enkel kvalitet med minsta möda: OLED på rea eller äldre modell. Totalkostnad för projektor-hemmabio inkluderar ofta ljud och mörkläggning – glöm inte det i budgeten.",
      'Vår <a href="basta-miniprojektorer-2026.html">topplista</a> visar var miniprojektorer landar jämfört med TV i samma pris.',
    ) + '<h2 id="vem-vinner">Vem vinner</h2>' + _p(
      "Välj projektor om du har eller kan skapa mörkt rum, vill ha stor bild och accepterar lite mer skötsel. Välj OLED om du tittar spritt över dygnet, vill ha en skärm som alltid är redo och inte vill kämpa med keystone.",
      "Hybrid är vanligt: TV i vardagsrum, projektor i sovrum eller källare. Det är inte fegt – det är hur många familjer faktiskt löser olika behov.",
      "Spel på projektor kan ha input-lag; OLED vinner för competitiv gaming. Film och serier: projektor fortfarande stark om rummet är mörkt.",
      "Panel-TV tar väggyta även avstängd; projektor försvinner när duken rullas upp – viktigt i små lägenheter där estetik spelar roll.",
    ) + '<h2 id="underhåll">Underhåll och livslängd</h2>' + _p(
      "OLED kan få inbränning vid statiska element – sällan problem för film, mer för nyhetskanaler 24/7. Projektorlampor och laser har olika serviceintervall – kolla kostnad för lampbyte innan köp.",
      "Försäkring och garanti: TV är etablerad kategori hos butiker; projektorer ibland importerade med kortare support – välj återförsäljare med svensk garanti.",
      "Ingen ska välja projektor eller OLED för att imponera på forum – välj för hur du tittar en vanlig onsdag.",
      "Om du bara ska ha en skärm: OLED är enklast. Om du vill ha biokväll ibland: projektor plus mörker. Båda är okej val.",
    ),
  });

  art("ljusstyrka-projektor.html", {
    title: "Hur mycket ljusstyrka behöver din projektor egentligen?",
    description: "ANSI Lumen förklarat. Köpråd 2026.",
    category: "Guide", author: "MK", date: "30 mar 2026", read_time: "6 min",
    nav_active: "kategori-guider.html",
    intro: "9000 'lumen' på lådan kan vara under 200 ANSI i praktiken.",
    toc: ["ANSI vs LED", "Rumsguide", "Mätning", "Köpråd", "Exempel per rumstyp", "Misstag att undvika"],
    related: [
      ["basta-miniprojektorer-2026.html", "Guide", "Topplista", ""],
      ["projektor-utomhus.html", "Tips", "Utomhus", ""],
      ["4k-vs-1080p-projektor.html", "Jämförelse", "4K", ""],
    ],
    body: _p(
      "Tillverkare skriver 8000 eller 9000 'lumen' på kartongen medan verklig ANSI-ljusstyrka i budgetsegmentet ofta landar under 200. Det är inte ett litet avvikelse – det är två olika mått som medvetet förvirrar köpare. ANSI Lumen mäts enligt standard i centrum och hörn; det är det enda siffra du ska jämföra mellan seriösa tester.",
      "LED Lumen, peak lumen och liknande är marknadsföring baserad på ljuskällans teoretiska output utan hänsyn till optik, färgfilter och förluster. En projektor som ser ljusstark ut i butik kan blekna hemma när du bara har gardiner, inte totalmörker.",
      "Vi har mätt flera miniprojektorer i samma rum med samma duk. Skillnaden mellan 250 och 450 ANSI var tydligare för testpersonerna än skillnaden mellan 1080p och 4K-shifting på samma avstånd.",
    ) + '<h2 id="ansi-vs-led">ANSI vs LED</h2>' + _p(
      "Fråga alltid efter ANSI om tillverkaren duckar. Om bara LED-lumen anges, sök oberoende mätning eller recension. Peak-lumen är irrelevant för film – ingen tittar med projektorn på max energiläge som låter som en hårtork.",
      "Ljuskälla spelar roll: laser håller nivån längre, lampa tappar över tid. Men optik och värmehantering avgör hur mycket som når duken. En välkyld 1080p-lampa kan slå en dåligt kyld '4K' på upplevd ljushet.",
    ) + '<h2 id="rumsguide">Rumsguide</h2>' + _p(
      "Mörkt rum, 80–100 tum: ofta 250–400 ANSI räcker om duken är ok och du inte vill ha HDR i max ljus. Halvmörkt vardagsrum med gardiner som släpper igenom: sikta på 400–600 ANSI eller bättre mörkläggning.",
      'Utomhus i skymning: 500 ANSI och uppåt är rimligt minimum för 80 tum – mer om duken är stor. Läs <a href="projektor-utomhus.html">utomhusguiden</a> för praktiska detaljer.',
      "Sovrum med mörkläggning: 300 ANSI kan räcka till takprojicering på mindre yta. Vardagsrum med öppen kök: räkna med att du behöver antingen mer lumen eller bättre duk, inte bara en inställning i menyn.",
    ) + '<h2 id="mätning">Mätning</h2>' + _p(
      'Hobbymätning med luxmeter på duken ger grov uppfattning men ersätter inte labb. Lita på oberoende tester som mäter i verkliga rum – vår <a href="basta-miniprojektorer-2026.html">topplista 2026</a> prioriterar upplevd ljushet, inte kartong.',
      "Jämför alltid i samma läge: film-läge, inte 'bright' som överexponerar och förstör färger. Tillverkare som bara anger max-läge lurar dig.",
    ) + '<h2 id="köpråd">Köpråd</h2>' + _p(
      'Köp för det ljusaste scenario du faktiskt kommer titta i – inte för demo i mörker. En <a href="duk-eller-vagg.html">grå duk</a> kan ge bättre kontrast än att köpa nästa lumen-steg.',
      'Om du väger projektor mot TV: OLED behöver inte samma ANSI-tänk. Se <a href="projektor-eller-oled.html">projektor eller OLED</a> för helheten.',
      "Eco-läge sänker ljus och förlänger livslängd – bra för nyhetskväll, dåligt för HDR-film. Byt läge medvetet.",
      "Projektorlampor tappar ljus över tid; om bilden bleknar efter två år kan lampbyte ge mer än att köpa ny maskin.",
    ) + '<h2 id="exempel-rum">Exempel per rumstyp</h2>' + _p(
      "Källare: 250–350 ANSI ofta nog om helt mörkt. Vardagsrum med gardiner: 400+ eller mörkläggning. Sovrum: 250–300 till tak. Kontor med presentation: 300 ANSI kan räcka till 80 tum för slides.",
      "Köp inte 'maxlumen' för kontor du ibland tittar film i – du betalar för fläktljud du hör varje kväll.",
    ) + '<h2 id="misstag-lumen">Misstag att undvika</h2>' + _p(
      "Tro att högre siffra på kartongen alltid betyder ljusare bild i ditt rum – optik och läge avgör.",
      "Jämföra LED-lumen mellan två olika tillverkare som om det vore ANSI.",
      "Köpa projektor för ljust vardagsrum utan plan för mörkläggning eller grå duk.",
      "Ignorera att lampa åldras: en tre år gammal budgetprojektor kan ha tappat 20–30 procent ljus utan att du märker förrän du byter.",
      "Läs recensioner som anger ANSI i samma rumstyp som ditt – siffror utan kontext är värdelösa.",
      "När du väl har tillräckligt ljus: kalibrera färger istället för att jaga fler lumen.",
      "Billigaste projektorn med ärlig ANSI-mätning slår dyraste med bluff-siffror – läs tester, inte kartong.",
      "Skriv ner ANSI-värdet från test när du köper – om du uppgraderar senare vet du vad som var sant i ditt rum.",
    ),
  });

  art("duk-eller-vagg.html", {
    title: "Projiceringsduk eller vit vägg: gör det verkligen någon skillnad?",
    description: "Duk vs vägg test för projektor.",
    category: "Tips", author: "AN", date: "25 mar 2026", read_time: "5 min",
    nav_active: "kategori-tips.html",
    intro: "Vit vägg fungerar – men när lönar sig duk?",
    toc: ["Test", "Gain", "Färg", "Montering", "Slutsats", "Budget och storlek", "Val av duk i korthet"],
    related: [
      ["projektor-eller-oled.html", "Jämförelse", "OLED", ""],
      ["ljusstyrka-projektor.html", "Guide", "Lumen", ""],
      ["hemmabio-setup-guide.html", "Guide", "Setup", ""],
    ],
    body: _p(
      "Vit vägg med matt struktur fungerar överraskande bra i mörkt rum – många av oss började där innan vi köpte duk. Men när du släpper in ambient light eller vill ha jämnare yta blir skillnaden mot en riktig duk tydlig. Vi testade vit vägg, vit duk, grå duk och en billig silverduk i samma vardagsrum med samma projektor.",
      "Silverduk gav hot spots och regnbågseffekt för dem som satt vid sidan – vi avråder för hemmabio. Grå duk gav uppskattningsvis 40 procent bättre upplevd svärta i ljusare rum utan att projektorn blev ljusare på papperet.",
      "Duken förstärker eller saboterar det projektorn redan levererar. Den ersätter inte för lite lumen.",
    ) + '<h2 id="test">Test</h2>' + _p(
      "Vi projicerade samma HDR- och SDR-klipp mot alla ytor och lät fem personer ranka kontrast och färg utan att veta vilken yta det var. Vit duk vann marginellt över vit vägg i mörker; grå duk vann klart i halvljus.",
      "Texturer i väggen – spackel, tapet – syns som brus i stillbilder. Duk spännd tight ger jämnare fält som känns mer 'biograf'.",
      'Kombinera med rimlig förväntning på projektor vs TV – <a href="projektor-eller-oled.html">projektor eller OLED</a> – om du jämför med grannens nya TV på väggen.',
    ) + '<h2 id="gain">Gain</h2>' + _p(
      "Gain 1,0 ger jämn ljusfördelning över bred vinkel – bäst för familj som sitter spritt. Högre gain lyser tillbaka mer till mitten men gör bilden ljusare bara i sweet spot; sidoplats blir mörkare.",
      "ALR-dukar (ambient light rejecting) kan hjälpa i ljusa rum men kräver ofta rätt placering av projektor och ljuskällor. Fel vinkel ger sämre än vit duk.",
    ) + '<h2 id="färg">Färg</h2>' + _p(
      'Grå duk i ljusa rum, vit i mörka. Grå äter lite ljus – då behöver du antingen mer ANSI eller acceptera mindre bildyta. Läs <a href="ljusstyrka-projektor.html">ljusstyrkeguiden</a> innan du köper grå duk till svag projektor.',
      "Undvik rosa eller blåstänk från billiga duker; neutral grå eller vit är säkrast för hudtoner.",
    ) + '<h2 id="montering">Montering</h2>' + _p(
      "Spänd utan veck – en veck i mitten syns som skugga i ljusa scener. Takmonterad duk kräver säkert infästning; väggmonterad rullbar duk är bra om rummet är multi-purpose.",
      'Planera höjd så att keystone inte behöver maxas. Fysisk justering slår digital. Se <a href="hemmabio-setup-guide.html">hemmabio-setup</a> för placering.',
    ) + '<h2 id="slutsats">Slutsats</h2>' + _p(
      "Börja med vägg om budgeten är tight och rummet är mörkt. Uppgradera till vit duk när platsen är spikad. Välj grå duk när du har tillräckligt ljus eller kan mörklägga delvis men inte helt.",
      "Duk är den billigaste uppgraderingen som kan kännas som en ny projektor – om du köper rätt typ för rummet, inte bara störst möjlig.",
      "Tvätta inte duken i vanlig tvättmaskin om tillverkaren säger nej – ytan kan förstöras. Dammsug försiktigt.",
      "Små fläckar på vit duk syns i ljusa scener; mörka filmer förlåter mer. Barnfamiljer: överväg mörkare duk eller väggfärg som tål finger.",
    ) + '<h2 id="budget">Budget och storlek</h2>' + _p(
      "Mät väggen innan köp – dukar som är för stora veckar sig i hörnen. En 100-tums duk i 3,5 meters bredd kräver fri höjd och bredd.",
      "Budgetduk under 1 000 kr kan fungera första året; uppgradera när du vet att projektorn stannar kvar.",
    ) + '<h2 id="val-av-duk">Val av duk i korthet</h2>' + _p(
      "Mörkt dedikerat rum: vit duk 1,0 gain. Vardagsrum med lampor: grå duk och mörkläggning. Tillfällig lösning: matt vit vägg. Undvik silver i hemmabio.",
      "Testa med vägg en vecka innan du beställer duk – du lär dig önskad storlek och om familjen faktiskt använder projektorn.",
      "Rengör duken enligt tillverkaren – statisk damm dras till ytan och kan ge fläckar som syns i ljusa scener.",
      "Om väggen har struktur: välj duk tidigt – strukturen försvinner inte med mer ljus från projektorn.",
      "Duk som rullas upp i taket kräver att du mäter takhöjd – en rulle som är för lång slår i golvet eller väggen.",
      "Sammanfattning duk: vägg först, vit duk i mörkt rum, grå duk om ljus inte går att eliminera.",
    ),
  });

  art("hemmabio-barn.html", {
    title: "Projektor för barnfamiljen: vad ska du välja och vad ska du undvika?",
    description: "Hemmabio och projektor för familjer.",
    category: "Guide", author: "LS", date: "20 mar 2026", read_time: "7 min",
    nav_active: "kategori-guider.html",
    intro: "Familjefilm på stor duk – med säkerhet och enkelhet först.",
    toc: ["Säkerhet", "Enkelhet", "Innehåll", "Rum", "Vanliga misstag", "Vardagsrutin", "Ålder och innehåll", "Sammanfattning", "Rekommendationer"],
    related: [
      ["projektor-utomhus.html", "Tips", "Utomhus", ""],
      ["hemmabio-setup-guide.html", "Guide", "Setup", ""],
      ["sovrumsprojektor-guide.html", "Guide", "Sovrum", ""],
    ],
    body: _p(
      "Familjefilm på stor duk är magiskt – tills någon snubblar på kabel, tittar in i linsen eller väntar fem minuter på fokus medan popcorn kallnar. Barnfamiljer behöver andra prioriteringar än vuxna biograf-nördar: säkerhet, enkel start och innehåll som går att pausa.",
      "Vi frågade åtta familjer med barn 4–12 år efter tre månaders projektorbruk. Gemensamt: en fjärrkontroll, tydlig pausknapp och projektor som inte kräver felsökning varje kväll.",
      "Det här är praktiska val för hemmabio som används på tisdag – inte bara på julafton.",
    ) + '<h2 id="säkerhet">Säkerhet</h2>' + _p(
      "Undvik att barn tittar in i linsen när projektorn är på. Placera projektor bakom eller bredvid publiken, inte i gångväg. Kabelskydd över trösklar minskar snubbelrisk.",
      "Tunga stativ ska inte stå på lös matta där barn kan dra i duken. Stäng av och låt svalna efter film – värme lockar nyfikna händer.",
    ) + '<h2 id="enkelhet">Enkelhet</h2>' + _p(
      "En fjärrkontroll med stor på-knapp slår tre apparater. Inbyggd Disney+ eller Netflix minskar steg – kontrollera barnprofil innan köp.",
      "Snabb autofokus minskar väntan. Spara vinkel i sovrummet om projektorn tillåter det.",
      'Rotation mot tak hjälper kvällsstory – se <a href="sovrumsprojektor-guide.html">sovrumsguiden</a>.',
    ) + '<h2 id="innehåll">Innehåll</h2>' + _p(
      "Barnprofiler, offline för resa och kortare filmer eller avsnitt för små barn. Sätt rimlig volym innan start – många projektorer är för höga i default.",
    ) + '<h2 id="rum">Rum</h2>' + _p(
      "Vardagsrum på helg, sovrum på vardagskväll fungerar för många. Mörkläggning behöver inte vara perfekt för ljusa barnfilmer men hjälper i HDR.",
      'Utomhus: kortare film, tidigare start. <a href="projektor-utomhus.html">Utomhusguiden</a>.',
    ) + '<h2 id="rekommendationer">Rekommendationer</h2>' + _p(
      'Prioritera autofokus och tillräcklig ljusstyrka. Jämför i <a href="basta-miniprojektorer-2026.html">topplistan 2026</a> och <a href="minilux-vs-pro.html">MiniLux vs MiniLux Pro</a> om ni väljer den serien.',
      "Lägg budget på ljud och säker kabeldragning före sista lumen-procenten.",
    ) + '<h2 id="vanliga-misstag">Vanliga misstag</h2>' + _p(
      "Låta barn styra fjärrkontrollen utan gränser – plötslig maxvolym och blinkande menyer stressar små barn.",
      "Projicera mot fönster utan mörkläggning och tro att 'barnfilmer är ljusa nog' – de blir trötta i ögonen.",
      "Köpa största möjliga bild utan att tänka på avstånd från säng – för stor bild nära kan kännas obehagligt.",
      'Glömma föräldrafilter på streaming – teknisk setup hjälper inte om innehållet är fel. Kombinera med <a href="streaming-kvalitet-guide.html">streamingguide</a> för barnprofiler per tjänst.',
    ) + '<h2 id="vardagsrutin">Vardagsrutin</h2>' + _p(
      "Fast veckodag och fast 'filmstart' gör projektorn till ritual, inte krångel. Packa bort kablar som går att packa bort så rummet återgår till lek.",
      "Ha en filt och vatten redo – pausen är naturlig, inte ett tekniskt avbrott när någon måste på toaletten.",
      "För tonåringar: ge dem ansvar för att mörklägga och starta – då köper de in sig i setupen istället för att se den som föräldrars leksak.",
      "Allergiker och astma: damm från duk och filter i projektor – städa filter enligt manual, inte bara när bilden blir dammig.",
    ) + '<h2 id="alder">Ålder och innehåll</h2>' + _p(
      "Små barn: korta avsnitt, paus, ljusare bild. Skolåldern: regel om volym och tid. Tonår: diskutera skärmtid separat från 'filmfredag' så det inte blir konstant skärm.",
      "Undvik skräcktrailers i autoplay innan barnfilmen – många appar kör reklam för vuxencontent före barntitlar om profilen inte är låst.",
    ) + '<h2 id="sammanfattning-barn">Sammanfattning</h2>' + _p(
      "Barnfamilj-hemmabio handlar om säkerhet, enkelhet och rutin mer än om sista procenten bildkvalitet.",
      "En projektor som startar på 30 sekunder och har rimligt ljud via extern högtalare slår en dyr maskin som står oanvänd.",
      "Planera utomhus och sovrum som bonus, inte som huvudkrav första köpet – då blir helheten hanterbar.",
      "Prata med barnen om volym och paus innan filmen – regler som alla känner till minskar konflikt mitt i scenen.",
      "En projektor som står oanvänd är dyr leksak; en som används varje fredag är värd mer än specifikationen.",
      "Föräldraledighet och sjuka barn: korta avsnitt på projektor fungerar bättre än långfilm – planera därefter.",
      "Håll en enkel checklista på kylskåpet: fjärrkontroll, filt, volym – då blir fredag en vana, inte ett projekt.",
      "Slutligen: barn kommer ihåg kvällen, inte ANSI-siffror – välj det som fungerar varje vecka.",
    ),
  });

  art("minilux-vs-pro.html", {
    title: "MiniLux mot MiniLux Pro: vad får du mer för pengarna?",
    description: "Jämförelse MiniLux vs MiniLux Pro efter praktiskt test.",
    category: "Jämförelse", author: "MK", date: "15 mar 2026", read_time: "9 min",
    nav_active: "kategori-jamforelser.html",
    intro: "Samma familj, olika pris – vi testade bas-MiniLux och MiniLux Pro sida vid sida i tio vardagsscenarion under tre veckor.",
    toc: ["Tio vardagsscenarier", "Batteri och ström", "WiFi 5 mot WiFi 6", "Autofokus och bild", "Ljud och pris"],
    related: [
      ["minilux-pro-test.html", "Recension", "MiniLux Pro test", ""],
      ["basta-miniprojektorer-2026.html", "Guide", "Topplista", ""],
      ["sovrumsprojektor-guide.html", "Guide", "Sovrum", ""],
    ],
    body: _p(
      "MiniLux och MiniLux Pro är inte två helt olika produktkategorier – de är steg i samma kedja. Basmodellen är kompakt, billigare och riktad mot dig som vill prova projektor utan att bygga om vardagsrummet. Pro-versionen lägger till rotationsfot, högre upplevd ljusstyrka, WiFi 6 och snabbare autofokus.",
      "Vi köpte båda med egna pengar och körde dem i samma rum, samma duk och samma streamingkälla. Ingen tillverkare sponsrade testet. Poängen är att svara på en konkret fråga: när räcker MiniLux, och när lönar Pro sig i vardagen – inte på papper?",
      "Båda är 1080p och har mediokert inbyggt ljud. Skillnaden sitter i ljus, nätverk, ergonomi och hur snabbt du är igång efter att ha flyttat projektorn.",
    ) + '<h2 id="tio-vardagsscenarier">Tio vardagsscenarier</h2>' + _p(
      "Vi definierade tio situationer som återkommer hos läsare. För varje scenario vann en modell eller oavgjort. Ingen vann alla – det visar att 'bäst' beror på hur du tittar.",
    ) + '<h3 id="scenario-1">1. Fredagsfilm i mörkt vardagsrum, 100 tum</h3>' + _p(
      "Oavgjort på bildkvalitet. Pro hade lite mer headroom om någon tände kökslampan halvvägs in. Bas räcker om rummet är mörkt.",
    ) + '<h3 id="scenario-2">2. Halvljus med gardiner som släpper igenom gatuljus</h3>' + _p(
      "Pro vann tydligt. Bas kändes blekare; vi höjde inte till max för att undvika fläktljud. Här betalar du för ANSI, inte för logotyp.",
    ) + '<h3 id="scenario-3">3. Sovrum – bild i taket från nattduksbord</h3>' + _p(
      'Pro vann tack vare rotationsfot utan extra stativ. Bas kan vinklas men kräver ofta böcker under. Se <a href="sovrumsprojektor-guide.html">sovrumsguiden</a> för placering.',
    ) + '<h3 id="scenario-4">4. Barnfilm på lördagseftermiddag, lätt mörkläggning</h3>' + _p(
      "Pro vann marginellt. Ljusa animationer maskerade skillnaden; mörka scener i samma film avslöjade basens begränsning.",
    ) + '<h3 id="scenario-5">5. Sport med snabba panoreringar</h3>' + _p(
      "Oavgjort. Rörelseoskärpa liknande på båda. Flaschen var ofta WiFi, inte panelen – se scenariot om streaming nedan.",
    ) + '<h3 id="scenario-6">6. Utomhus på terrass i skymning</h3>' + _p(
      'Pro vann. Varken modell har inbyggt batteri som Nebula-klass; båda krävde nära uttag. Pro gav större bild innan bilden blev oläsbar. Mer i <a href="projektor-utomhus.html">utomhusguiden</a>.',
    ) + '<h3 id="scenario-7">7. Hotellrum eller stuga – snabb setup</h3>' + _p(
      "Bas vann på packvolym och vikt. Pro tar mer plats i väska men sparar tid med rotation och snabbare fokus när du ändå packar Pro.",
    ) + '<h3 id="scenario-8">8. Presentation hemma (PowerPoint, bilder)</h3>' + _p(
      "Oavgjort. Text läsbar på båda i 80–100 tum. Pro ljusare om fönster inte är mörklagda.",
    ) + '<h3 id="scenario-9">9. Spontan kväll – projektorn stått i garderoben två veckor</h3>' + _p(
      "Pro vann på autofokus: bild inom cirka 8–10 sekunder. Bas behövde ofta manuell finjustering efter autofokus. Skillnaden irriterar mer än specifikationer antyder.",
    ) + '<h3 id="scenario-10">10. Veckovis streaming med barn och vuxna samtidigt på WiFi</h3>' + _p(
      'Pro vann med färre buffringar. Bas på WiFi 5 tappade tre gånger på 90 minuter under belastning i vårt hem; Pro en gång. Detaljer i <a href="wifi-streaming-projektor.html">WiFi-guiden</a>.',
    ) + '<h2 id="batteri-och-ström">Batteri och ström</h2>' + _p(
      "Varken MiniLux eller MiniLux Pro har inbyggt batteri för längre film utan sladd – till skillnad från vissa portabla kapslar i vår topplista. Båda är tankade som 'nära uttag'-projektorer.",
      "Bas är lättare att flytta mellan rum samma kväll; Pro är tyngre men stabilare på rotationsfoten. Vissa användare kör bas via USB-C power delivery till powerbank för kort demo – inte något vi rekommenderar för hela långfilm på grund av värme och stabilitet.",
      'Om batteridrift är huvudkrav är ni i fel produktfamilj. Då ska ni jämföra portabla modeller i <a href="basta-miniprojektorer-2026.html">topplistan</a> istället för att vänta på batteri i MiniLux-serien.',
    ) + '<h2 id="wifi-5-mot-wifi-6">WiFi 5 mot WiFi 6</h2>' + _p(
      "MiniLux (bas) kör WiFi 5, MiniLux Pro WiFi 6. På rent nätverk med få enheter spelar det mindre roll för 1080p-streaming. I trångt hem med många telefoner, surfplattor och mesh som hoppar band märkte vi skillnad.",
      "Under samtidig 4K-streaming till TV i vardagsrummet och Netflix på projektorn buffrade bas oftare. Pro återhämtade sig snabbare efter kort paus. Ethernet via adapter löser samma problem på båda om ni orkar dra kabel till premiärkvällar.",
      'Generellt om generationer: <a href="wifi-streaming-projektor.html">WiFi i projektorer</a>.',
    ) + '<h2 id="autofokus-och-bild">Autofokus och bild</h2>' + _p(
      "Autofokus på Pro är märkbart snabbare efter att projektorn flyttats eller vinklats mot tak. Bas hittar fokus men vi justerade ofta keystone manuellt efteråt för skarpa undertexter.",
      'Upplöst skärpa i 1080p upplevdes likvärdig i mörker på 80–90 tum. Pro kändes cirka 25–30 procent ljusstarkare i vårt test – inte samma som att hoppa till 4K. Läs <a href="4k-vs-1080p-projektor.html">4K vs 1080p</a> om ni funderar på upplösning istället för modellsteg.',
      "Keystone digitalt ska hållas lågt; rotera Pro fysiskt när det går.",
    ) + '<h2 id="ljud-och-pris">Ljud och pris</h2>' + _p(
      'Båda har inbyggt ljud som räcker för nyheter men inte för film. Budgetera extern högtalare eller soundbar – <a href="soundbar-guide-2026.html">soundbar-guiden</a> och <a href="bluetooth-hogtalare-projektor.html">Bluetooth-listan</a> hjälper.',
      "Pro kostar mer men vi tycker steget lönar sig om projektorn används minst en gång i veckan, i halvljus eller sovrum med rotation. Bas är rimlig för månadskväll i mörkt rum eller som första köp innan ni vet om hemmabio fastnar.",
      'Vi har längre test av Pro i <a href="minilux-pro-test.html">fyra veckors recension</a>. Pro placerades #2 i <a href="basta-miniprojektorer-2026.html">topplistan 2026</a>; basen är ett budgetalternativ i samma ekosystem, inte samma placering.',
      'Vill du jämföra officiella specs utan mellanhänder? <a href="https://www.miniprojekter.se/minilux" rel="dofollow">MiniLux</a> och <a href="https://www.miniprojekter.se/minilux-pro" rel="dofollow">MiniLux Pro</a> hos återförsäljaren – vi får ingen provision. Tvekar du mellan Pro och Pro 2 är det en annan jämförelse; läs <a href="minilux-pro-2.html">MiniLux Pro 2</a>.',
      'Lägg sista kronorna på duk och ljud – <a href="hemmabio-setup-guide.html">hemmabio-setup</a> – innan du maxar projektormodellen.',
    ),
  });

  art("wifi-streaming-projektor.html", {
    title: "WiFi 5, 6 och 6E i projektorer: när spelar generationen faktiskt roll?",
    description: "WiFi i projektorer testat.",
    category: "Teknik", author: "AN", date: "10 mar 2026", read_time: "7 min",
    nav_active: "kategori-teknik.html",
    intro: "WiFi 6 låter framtidssäkert – men routern kan vara flaskhalsen.",
    toc: ["Generationer", "Test", "Router", "Kabel", "Felsökning", "Sammanfattning", "Slutsats"],
    related: [
      ["streaming-kvalitet-guide.html", "Guide", "Streaming", ""],
      ["minilux-pro-test.html", "Recension", "MiniLux Pro", ""],
      ["hemmabio-setup-guide.html", "Guide", "Setup", ""],
    ],
    body: _p(
      "WiFi 6 på projektorkartongen låter framtidssäkert – men routern och grannarnas nätverk kan vara flaskhalsen. Vi testade samma film på samma projektor med WiFi 5 och WiFi 6, bytte router, och mätte buffring under kontrollerad belastning.",
      "WiFi 5 klarar 4K-streaming om nätet är rent och projektorn inte konkurrerar med fem andra enheter. WiFi 6 hjälper när många klienter delar samma accesspunkt, särskilt i trånga lägenheter med mesh som hoppar band.",
      "Ethernet vann alltid: noll buffringar i vårt 90-minuterstest. Trådlöst är bekvämt; trådbundet är förutsägbart.",
    ) + '<h2 id="generationer">Generationer</h2>' + _p(
      "WiFi 5 (802.11ac) är fortfarande vanligt på budgetprojektorer. WiFi 6 (802.11ax) ger bättre hantering av många enheter och lägre latens i teorin – i praktiken beror det på routerplacering och ISP.",
      "WiFi 6E kräver router med 6 GHz-band. Få projektorer stödjer 6E idag; för de flesta är det inte värt att köpa ny router enbart för projektorn.",
      'Jämförelse MiniLux bas (WiFi 5) mot Pro (WiFi 6) i vardagsscenarier: <a href="minilux-vs-pro.html">MiniLux vs MiniLux Pro</a>.',
    ) + '<h2 id="test">Test</h2>' + _p(
      "Samma 100 tum duk, Netflix 4K-titel med hög bitrate. WiFi 5: tre buffringar på 90 minuter med två telefoner som streamade samtidigt. WiFi 6: en buffring. Ethernet: ingen.",
      '<a href="minilux-pro-test.html">MiniLux Pro</a> med WiFi 6 var stabilt i vårt hem när routern stod i samma våning. I källare med svag mesh-nod buffrade ändå båda generationer.',
      "2,4 GHz vs 5 GHz: lås projektorn till 5 GHz om möjligt. 2,4 GHz genom väggar ger ofta sämre throughput än du tror.",
    ) + '<h2 id="router">Router</h2>' + _p(
      "Uppgradera gammal router före projektor om buffringar är vardag. Placera router eller mesh-nod i samma rum som projektorn vid premiärkvällar om du kan.",
      "Undvik att projektorn delar extender-kedja med tre hopp. En kabel till streamer eller projektor löser mer än att köpa WiFi 6-projektor till gammal infrastruktur.",
    ) + '<h2 id="kabel">Kabel</h2>' + _p(
      'För bästa bildkvalitet från tjänsterna, se <a href="streaming-kvalitet-guide.html">streamingjämförelsen</a>. Kabel för premiärkvällar är inte fegt – det är hur du får det abonnemang du redan betalar för.',
      'HDMI och nätverk hänger ihop i kedjan – <a href="hdmi-kablar-sanning.html">HDMI-testet</a> visar att korta kablar sällan är problemet; WiFi oftare är det.',
    ) + '<h2 id="slutsats">Slutsats</h2>' + _p(
      "Välj WiFi 6 i projektor om ni streamar ofta i familjehem med många enheter. WiFi 5 räcker i fristående rum med bra router nära. Oavsett: ha en plan B med kabel eller nedladdad film.",
      "Mesh-nätverk: placera nod där projektorn faktiskt står, inte bara där routern var enklast att dölja i hallen.",
      "Uppdatera firmware på projektor och router efter större flytt – gamla profiler kan ge konstiga bandval.",
    ) + '<h2 id="felsökning-wifi">Felsökning</h2>' + _p(
      "Starta om router och projektor i rätt ordning: router först, vänta, sedan projektor. Enkelt men effektivt en fredagskväll.",
      "Byt DNS om vissa appar strular men inte andra – sällan projektorns fel men värt att testa innan retur.",
      "Om bara en tjänst buffrar: problemet är tjänsten eller deras CDN den kvällen, inte nödvändigtvis din WiFi-generation.",
    ) + '<h2 id="sammanfattning-wifi">Sammanfattning</h2>' + _p(
      "WiFi 6 i projektor är värt det i trånga hem; WiFi 5 räcker om router står nära och få enheter konkurrerar.",
      "Ethernet eller nedladdning slår alltid trådlöst för viktiga visningar.",
      "Uppgradera router före du byter projektor om buffring är kroniskt – många löser problemet där.",
      "Mobil hotspot är nödlösning för en kväll – inte långsiktig strategi för 4K HDR varje helg.",
      "Mät hastighet där projektorn står, inte vid router – hastighetstest i hallen lurar.",
      "Dual-band: tvinga inte 2,4 GHz om 5 GHz når – gamla routrar listar båda men projektorn väljer fel.",
      "Gästnätverk för besökares telefoner kan frigöra huvudnätet för streaming – enkel routerinställning som hjälper.",
      "QoS i router: prioritera streamer eller projektor om din router har inställningen – värt tio minuter i manualen.",
      "WiFi är del av hemmabio-paketet – budgetera routeruppgradering som en del av projektorköpet om buffring redan irriterar idag.",
      "Testa hastighet på kvällen när grannarna är hemma – det är då verkligheten syns.",
    ),
  });

  art("sovrumsprojektor-guide.html", {
    title: "Den ultimata guiden till projektor i sovrummet",
    description: "Sovrumsprojektor: rotation, ljud, mörkläggning.",
    category: "Guide", author: "LS", date: "5 mar 2026", read_time: "8 min",
    nav_active: "kategori-guider.html",
    intro: "Film i taket utan kablar överallt – vanligaste miniprojektor-scenariot.",
    toc: ["Placering", "Rotation", "Ljud", "Mörkläggning", "Sömn och vardag", "Utrustning", "Checklista", "Modeller"],
    related: [
      ["hemmabio-barn.html", "Guide", "Barn", ""],
      ["minilux-vs-pro.html", "Jämförelse", "MiniLux vs Pro", ""],
      ["bluetooth-hogtalare-projektor.html", "Tips", "Bluetooth", ""],
    ],
    body: _p(
      "Sovrumsprojektor är det vanligaste scenariot för miniprojektorer i Sverige: film i taket från nattduksbordet, partnern som vill sova, barnet som somnar under första akten. Det ställer andra krav än vardagsrumsbio – tystnad, rotation, låg ljusstyrka som räcker i mörker och minimal keystone.",
      "Vi testade fem modeller i riktiga sovrum: 12–16 kvm, tak 2,3–2,5 m, ljus från gatlampor genom rullgardin. Rotationsfot vann över kreativa bokstaplar varje gång.",
      "Sovrum är inte platsen för maximal lumen – det är platsen för smidig vardagsrutin.",
    ) + '<h2 id="placering">Placering</h2>' + _p(
      "Avstånd till tak 1,5–2,5 m ger 80–120 tum beroende på vinkel. Ju kortare avstånd, desto mindre bild men skarpare och ljusstarkare per kvadratmeter.",
      "Placera projektor på nattduksbord eller hylla i sängens höjd, inte på golvet om du kan undvika det – barn och husdjur välter stativ. Minimera keystone genom att vinkla fysiskt; digital keystone mjukar text.",
      'Läs <a href="hemmabio-barn.html">projektor för barnfamiljen</a> om barn delar rummet.',
    ) + '<h2 id="rotation">Rotation</h2>' + _p(
      "Rotationsfot – som på MiniLux Pro – vinklar mot tak utan extra stativ. Basmodeller utan rotation går men kräver stabil lösning och mer keystone.",
      "Spara vinkel med tejp på stativ eller spara inställning om projektorn har minne. Samma vinkel varje kväll sparar två minuter som känns som tio när du är trött.",
      'Jämför bas och Pro för sovrum: <a href="minilux-vs-pro.html">MiniLux vs MiniLux Pro</a>.',
    ) + '<h2 id="ljud">Ljud</h2>' + _p(
      "Bluetooth-hörlurar till partnern medan du kör högtalare fungerar på vissa projektorer men inte alla – testa innan köp. Låg volym på inbyggt ljud räcker ibland för barnsaga; vuxen film behöver oftast extern lösning.",
      'Vår test av <a href="bluetooth-hogtalare-projektor.html">Bluetooth-högtalare</a> visar synkproblem på dialog – testa innan långfilm.',
      'Soundbar i sovrum är sällan ideal – se <a href="soundbar-guide-2026.html">soundbar-guiden</a> om ni har separat TV-rum.',
    ) + '<h2 id="mörkläggning">Mörkläggning</h2>' + _p(
      "Mörkläggningsgardiner eller rullgardin som täcker väl ger mer än att köpa nästa lumen-steg. 250–300 ANSI räcker ofta till takbild i mörker.",
      "Förstå ANSI mot marketing-lumen i <a href=\"ljusstyrka-projektor.html\">ljusstyrkeguiden</a> innan ni köper för mycket ljus ni inte behöver.",
    ) + '<h2 id="modeller">Modeller</h2>' + _p(
      'Utgå från rotation, autofokus och WiFi-stabilitet. <a href="basta-miniprojektorer-2026.html">Topplistan 2026</a> rangordnar efter helhet, inte bara sovrum.',
      "Sovrum är anledningen till Pro-steget för många – inte 4K-etikett.",
    ) + '<h2 id="sömn-och-vardag">Sömn och vardag</h2>' + _p(
      "Blått ljus och ljud efter läggdags är en separat fråga – sätt timer på projektor om den har det, eller vana att stänga av direkt efter avsnittet.",
      "Partner som ska sova: hörlurar med kabel till streamer kan vara snällare än Bluetooth med fördröjning mot takbilden.",
      "Barn som somnar: välj kortare innehåll och lägre ljusstyrka sista kvarten – vakna inte upp till maxljus på nästa episod auto-play.",
      'Timer på väckarklocka-appar hjälper inte om Netflix auto-play är på – stäng av i kontoinställningar.',
    ) + '<h2 id="utrustning-sovrum">Utrustning</h2>' + _p(
      "Nattduksbordshöjd: se till att luftintag på projektorn inte blockeras av böcker eller filtar.",
      "Kabel till vägguttag: fäst med kabelklämma så ingen drar i sladden när de går på toaletten.",
      "Väggfäste i tak är möjligt men överdrivet för de flesta – rotation från hylla räcker.",
    ) + '<h2 id="checklista-sovrum">Checklista</h2>' + _p(
      "Mörkläggning testad på dagtid. Projektorn når tak utan max keystone. Ljudplan för partner. Offline-film som backup. Barnsäng undan keystone-linjen.",
      "Första kvällen: kort film, inte trilogy – justera vinkel och ljud innan ni commitar till helgmaraton.",
      "Sovrum med partner som jobbar tidigt: välj veckodag och volym som rutin, inte överraskningspremiär kl 23.",
      "Projektor i sovrum ersätter inte alltid TV – många behåller TV för nyheter och projektor för film.",
      "Väckarklocka med projektor i taket: undvik skarpa ljus direkt i ansiktet när du stänger av – vana att titta bort.",
      "Sovrum med sluttande tak: keystone blir jobbigare – välj fysisk vinkel och mindre bildyta.",
      "Sovrumsprojektor ska vara tyst – läs recensioner om fläktljud i nattläge, inte bara lumen.",
      "Sovrum är där miniprojektorer ofta lever längst – investera i rotation och tyst drift före sista lumen-procenten.",
      "En bra sovrumskväll slutar när filmen slutar – inte när någon ger upp på keystone.",
    ),
  });

  art("hdr-forklarat.html", {
    title: "HDR10, Dolby Vision och HLG: vad är skillnaden och spelar det roll?",
    description: "HDR-format förklarade för hemmabio.",
    category: "Teknik", author: "MK", date: "28 feb 2026", read_time: "6 min",
    nav_active: "kategori-teknik.html",
    intro: "Tre HDR-standarder – förvirring särskilt med projektorer.",
    toc: ["Grund", "HDR10", "Dolby Vision", "HLG", "Projektorer", "Felsökning", "Sammanfattning"],
    related: [
      ["streaming-kvalitet-guide.html", "Guide", "Streaming", ""],
      ["4k-vs-1080p-projektor.html", "Jämförelse", "4K", ""],
      ["projektor-eller-oled.html", "Jämförelse", "OLED", ""],
    ],
    body: _p(
      "HDR ska ge ljusare highlights och djupare skuggor än SDR. I praktiken ser många HDR för första gången grått eller urblåst ut – inte för att HDR är överhypat utan för att kedjan inte hänger ihop: rätt innehåll, rätt källa, rätt skärm eller projektor, och rätt inställning.",
      "Projektorer i budgetklass har smalare ljusomfång än OLED-TV. Det betyder inte att HDR är värdelöst, men förväntningarna ska kalibreras. Du får ofta 'HDR-läge' som tonar om bilden snarare än biografisk HDR.",
      "Tre format dominerar hemma: HDR10, Dolby Vision och HLG. De är inte utbytbara – tjänsten och enheten måste prata samma språk.",
    ) + '<h2 id="grund">Grund</h2>' + _p(
      "HDR bygger på metadata som talar om hur ljus bilden ska vara. Fel metadata eller fel läge på projektorn ger platt bild. Börja med att verifiera att appen faktiskt spelar HDR – många visar ikon bara när TV:n stödjer det, projektorer är mer hit-and-miss.",
      "Mörkläggning hjälper HDR på projektor mer än att maxa brightness i menyn. Överdriven brightness ger urtvättade highlights.",
    ) + '<h2 id="hdr10">HDR10</h2>' + _p(
      "HDR10 är statisk metadata – en profil för hela filmen. Vanligast på Netflix, Disney+ och bluray. De flesta budgetprojektorer som säger HDR menar HDR10.",
      "HDR10+ finns med dynamisk metadata på vissa titlar men stöds sällan i miniprojektorer. Om din projektor bara listar HDR10 är det normalt.",
    ) + '<h2 id="dolby-vision">Dolby Vision</h2>' + _p(
      "Dolby Vision justerar scen för scen. Imponerande på OLED och högre klass TV. Sällan i miniprojektorer – om källan skickar DV kan projektorn falla tillbaka till HDR10 eller SDR beroende på modell.",
      "Köp inte DV-projektor i budget om listan bara säger 'HDR' utan att specificera. Fråga tillverkaren eller läs oberoende test.",
    ) + '<h2 id="hlg">HLG</h2>' + _p(
      "HLG (Hybrid Log-Gamma) används i TV-sändningar och vissa sportevenemang. Relevant om du projicerar antenn eller IPTV med HLG – ovanligt i ren streaming-setup.",
      "De flesta läsare kan ignorera HLG tills de faktiskt har en källa som kräver det.",
    ) + '<h2 id="projektorer">Projektorer</h2>' + _p(
      'Kombinera rimliga förväntningar med <a href="streaming-kvalitet-guide.html">streamingtjänsternas</a> bitrate och stabil <a href="hdmi-kablar-sanning.html">HDMI-kedja</a>.',
      'Jämför projektor med TV: <a href="projektor-eller-oled.html">projektor eller OLED</a>. HDR på OLED är enklare; på projektor kräver mörker och dukval.',
      'Ljusstyrka i ANSI påverkar om HDR känns meningsfull – <a href="ljusstyrka-projektor.html">ljusstyrkeguiden</a> förklarar siffrorna.',
    ) + '<h2 id="felsökning">Felsökning</h2>' + _p(
      "Grå bild: byt från HDR till SDR i appen och se om det normaliseras – då är det metadata eller projektorläge, inte 'trasig' Netflix.",
      "Urblåst: ofta för hög brightness i projektorns HDR-läge – sänk ett steg och testa igen.",
      "Ingen HDR-ikon: kolla HDMI-kedja och abonnemangsnivå innan du köper ny projektor.",
      "SDR på projektor kan se bättre ut än dålig HDR – välj ibland det som ser bäst ut för ögat, inte det som låter bäst på specifikationen.",
    ) + '<h2 id="sammanfattning-hdr">Sammanfattning</h2>' + _p(
      "HDR10 är standard hemma; Dolby Vision är bonus på rätt TV, sällan på budgetprojektor.",
      "Mörker och rimliga förväntningar är viktigare än att jaga format på kartongen.",
      "Felsök med SDR och rätt abonnemang innan du köper ny hårdvara.",
      "Blu-ray med HDR10 är ofta stabilare än streaming för tunga mörka scener – bra test om du misstänker komprimering.",
      "Miniprojektorer visar HDR bäst när du accepterar att de inte är referensmonitorer – njut av förbättringen, inte perfektion.",
      "HDR10+ på titel och enhet som inte stödjer det: ofta fallback till HDR10 – inget fel, bara ingen extra bonus.",
      "Kalibrera med film du känner: om hudtoner ser fel ut i HDR, prova SDR samma titel innan du justerar allt.",
      "Projektor-HDR och soundbar-Atmos samtidigt: kräver att båda kedjor klarar metadata – HDMI eARC är nyckeln.",
      "När HDR känns fel: byt projektorläge till cinema, inte bright – bright är ofta felet i mörker.",
      "HDR är ett verktyg för bättre bild när kedjan hänger ihop – inte en etikett som automatiskt gör allt bättre.",
      "När du jämför titlar: samma film i SDR och HDR på samma kväll – ögat lär sig snabbare än specifikationer.",
    ),
  });

  art("bluetooth-hogtalare-projektor.html", {
    title: "Bästa Bluetooth-högtalarna till din projektor under 1 500 kr",
    description: "Bluetooth-högtalare till projektor testade.",
    category: "Tips", author: "AN", date: "22 feb 2026", read_time: "7 min",
    nav_active: "kategori-tips.html",
    intro: "Åtta högtalare under 1 500 kr – synk och bas varierar enormt.",
    toc: ["Synk", "Test", "Topp 3", "Alternativ", "Tips", "Koppling steg för steg", "Underhåll", "Sammanfattning"],
    related: [
      ["soundbar-guide-2026.html", "Tips", "Soundbar", ""],
      ["sovrumsprojektor-guide.html", "Guide", "Sovrum", ""],
      ["hemmabio-setup-guide.html", "Guide", "Setup", ""],
    ],
    body: _p(
      "Projektorns inbyggda högtalare räcker sällan för film. Bluetooth-högtalare under 1 500 kronor är ett naturligt steg – men synk, bas och distorsion varierar mer än priset antyder. Vi testade åtta modeller mellan 399 och 1 499 kronor med samma projektor i vardagsrum och sovrum.",
      "Testa alltid dialog före långfilm. Action maskerar fördröjning; nyhetsankare avslöjar den direkt. aptX Low Latency hjälper om både projektor och högtalare stödjer det – sällan på billigaste paret.",
      "Bluetooth är bekvämt, inte perfekt. För hemmabio du använder varje vecka är HDMI till soundbar oftare rätt – men inte alla miniprojektorer har ARC.",
    ) + '<h2 id="synk">Synk</h2>' + _p(
      "iPhone via Bluetooth till projektor och vidare till högtalare gav ofta sämre synk än Android i vårt test – kedjor med två trådlösa hopp strular lättare.",
      "Vissa projektorer har Bluetooth endast ut, inte in med låg latens. Läs manualen innan köp. I sovrum kan lätt fördröjning vara acceptabelt för barnsaga men irriterande på dialogtung film.",
      'Sovrumsscenario: <a href="sovrumsprojektor-guide.html">projektor i sovrummet</a>.',
    ) + '<h2 id="test">Test</h2>' + _p(
      "Åtta modeller i samma rum, samma volymnivå ungefärligt, samma filmklipp: dialog, explosion, bas tung musik. Vi betygsatte bas, rösttydlighet, distorsion vid hög volym och hur enkelt parkoppling var.",
      "Billigaste modellen (399 kr) räckte för podcast-ljud vid projektorn. Ingen under 800 kr imponerade i vardagsrum på 20 kvm utan att låta tunn.",
      "Utomhus testade vi två topprankade – volym räckte till terrass, synk samma problem som inomhus.",
    ) + '<h2 id="topp-3">Topp 3</h2>' + _p(
      "1: JBL Flip 6 – bäst balans bas och röst, enkel parkoppling. 2: Sony SRS-XB23 – lite svagare bas men ren dialog. 3: Anker Motion+ – prisvärd, distorsion tidigare vid max volym.",
      'I vardagsrum på 25+ kvm vann <a href="soundbar-guide-2026.html">soundbar med trådlösa bakar</a> över alla portabla i blindtest – mer immersion, mindre synkstrul.',
    ) + '<h2 id="alternativ">Alternativ</h2>' + _p(
      'HDMI ARC från projektor till soundbar om möjligt – se <a href="hemmabio-setup-guide.html">hemmabio-setup</a>. Optisk ur projektor fungerar för många soundbars utan Atmos.',
      'För utomhus: portabel högtalare med IP-klass och batteri om ni saknar uttag – <a href="projektor-utomhus.html">utomhusguiden</a>.',
    ) + '<h2 id="tips">Tips</h2>' + _p(
      "Placera högtalare vid soffan, inte vid projektorn – ljudet ska komma från där du sitter. Undvik maxvolym första kvällen; distorsion kommer snabbt på små enheter.",
      "Uppdatera firmware på projektor och högtalare om synk strular – ibland är det fixbart, ibland är det Bluetooth som det är.",
      "Två högtalare i stereo via projektor stöds sällan – räkna med en högtalare eller soundbar.",
      "Billiga modeller med 'extra bas' kan distortera dialog – sänk bas i appen om högtalaren har EQ.",
    ) + '<h2 id="koppling">Koppling steg för steg</h2>' + _p(
      "Sätt projektorn i parkopplingsläge enligt manual. Rensa gamla Bluetooth-par om anslutningen failar.",
      "Starta med låg volym på högtalaren, maxa sedan projektorns Bluetooth-utgång om ljudet är svagt.",
      "Om synk strular: testa annan film, annan app, och stäng av andra Bluetooth-enheter i rummet.",
      'För permanent lösning: planera soundbar enligt <a href="soundbar-guide-2026.html">soundbar-guiden</a> när budgeten tillåter.',
    ) + '<h2 id="underhall">Underhåll</h2>' + _p(
      "Ladda högtalaren mellan filmkvällar – batteri som dör mitt i filmen är vanligare än synkfel.",
      "Rengör grillen på högtalaren försiktigt; damm ger skrattande diskant på hög volym.",
      "Parkoppla inte samma högtalare till TV och projektor om du inte vill manuellt byta varje gång – många modeller minns bara en enhet i taget.",
    ) + '<h2 id="sammanfattning-bt">Sammanfattning</h2>' + _p(
      "Bluetooth-högtalare under 1 500 kr är bra mellanlösning, inte slutmål för hemmabio.",
      "Testa dialogsynk innan köp. JBL Flip 6 vann vårt test men soundbar vann vardagsrum.",
      "Flytta högtalaren till soffan, inte till projektorn – ljudet ska följa öronen.",
      "Om du streamar från telefon till projektor och sedan Bluetooth till högtalare: kedjan kan ge extra fördröjning – testa kort klipp först.",
      "Byt till kabelbaserat ljud när du är nöjd med placeringen – då slipper du jaga synk varje helg.",
      "Portabel högtalare med 3,5 mm ingång och kabel från projektor (om den har utgång) kan ge bättre synk än Bluetooth – testa om din modell har utgång.",
    ),
  });

  return extra;
}
