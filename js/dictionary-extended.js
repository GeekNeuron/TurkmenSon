/* =========================================================
   TurkmenSon — Extended Turkmen-English dictionary
   (js/dictionary-extended.js)

   SOURCE: Türkmençe-iňlisçe sözlük (Turkmen-English Dictionary),
   © 2014 SIL International, published on Webonary.org, compiled
   at Magtymguly adyndaky Türkmen döwlet uniwersiteti (Magtymguly
   Turkmen State University). Licensed under Creative Commons
   Attribution-NonCommercial-ShareAlike 4.0 International
   (CC BY-NC-SA 4.0): https://creativecommons.org/licenses/by-nc-sa/4.0/

   Every entry below was fetched directly, page by page, from the
   dictionary's own browse interface and transcribed without
   alteration to its wording (only HTML/markup was stripped). No
   entry was written, extended, or "completed" from general
   knowledge — each is traceable to one exact source URL, listed
   below, so the batch can be checked and the extraction can be
   safely continued letter by letter in future updates.

   Source pages included in this batch (full dictionary has 7,247
   Turkmen headwords across ~30 letters and many pages per letter;
   this is a first, verified slice — five first-pages, roughly
   letters A, B, D, G, M):
     https://www.webonary.org/turkmen/browse/browse-vernacular-english/?key=tk-TM&letter=a
     https://www.webonary.org/turkmen/browse/browse-vernacular-english/?key=tk-TM&letter=b
     https://www.webonary.org/turkmen/browse/browse-vernacular-english/?key=tk-TM&letter=d
     https://www.webonary.org/turkmen/browse/browse-vernacular-english/?key=tk-TM&letter=g
     https://www.webonary.org/turkmen/browse/browse-vernacular-english/?key=tk-TM&letter=m

   Format: each row is
     { tk: 'headword', phon: 'phonetic or empty', pos: 'part of speech',
       en: 'English gloss (senses joined with " | ")',
       ex: { tk: 'Turkmen example sentence', en: 'English translation' } (optional) }
   ========================================================= */

const DICTIONARY_EXTENDED = [
  { tk:'abadan', phon:'abada:n', pos:'adj/n', en:'1. prosperous, well, whole | 2. (name) Abadan', ex:{ tk:'Biz abadan durmuşda ýaşaýarys.', en:'We live a prosperous life.' } },
  { tk:'abadançylyk', phon:'abada:nçylyk', pos:'n', en:'1. prosperity | 2. improvements, modern amenities', ex:{ tk:'Biziň Prezidentimiz abadançylyk syýasatyny alyp barýar.', en:'Our President is pursuing a prosperity policy.' } },
  { tk:'abadanlaşdyrmak', phon:'abada:nlaşdyrmak', pos:'v caus', en:'1. to improve, make improvements, redo, remodel | 2. to modernise', ex:{ tk:'Ýertitremesinden soňra, şäheri abadanlaşdyrdylar.', en:'After the earthquake, they modernised the city.' } },
  { tk:'abadanlaşmak', phon:'abada:nlaşmak', pos:'v', en:'to improve', ex:{ tk:'Obalar hem gün-günden abadanlaşýar.', en:'Villages also improve day by day.' } },
  { tk:'abadanlyk', phon:'abada:nlyk', pos:'adv', en:'prosperity, peace, wholeness', ex:{ tk:'Täze ýylda size maşgalaňyzda abadanlyk dileýäris.', en:'We wish your family peace in the New Year.' } },
  { tk:'abanmak', phon:'a:banmak', pos:'v', en:'1. to bend over, to lean over | 2. to overhang | 3. to threaten', ex:{ tk:'Üstüme abanyp durma.', en:"Don't lean over me." } },
  { tk:'abat', phon:'a:ba:t', pos:'adj', en:'1. whole, in one piece | 2. in good condition, in working order | 3. safe and sound', ex:{ tk:'Sen döwük maşyny abat etmeli.', en:'You need to repair the broken-down car.' } },
  { tk:'abatlamak', phon:'', pos:'vt', en:'to improve (abatlap dikeltmek = to restore)', ex:null },
  { tk:'abatlaýyş', phon:'', pos:'n', en:'repairs', ex:{ tk:'Täze okuw ýylyna taýýarlanmak üçin mekdeplerde abatlaýyş işlerini geçirýärler.', en:'They carry out repairs in schools in order to prepare for the new academic year.' } },
  { tk:'abatlyk', phon:'a:ba:tlyk', pos:'n', en:'1. safety, lack of damage | 2. wholeness', ex:{ tk:'Tupan abatlyk getirmez.', en:'A hurricane is bound to cause damage.' } },
  { tk:'abraý', phon:'a:braý', pos:'n', en:'esteem, respect, honour, prestige, (good) reputation', ex:{ tk:'Türkmen atlarynyň dünýäde uly abraýy bar.', en:'Turkmen horses are esteemed around the world.' } },
  { tk:'abraýly', phon:'a:braýly', pos:'adj', en:'1. respected, honoured, prestigious, esteemed | 2. authoritative | 3. high class, formal', ex:{ tk:'Abraýly alymyň sözi ynandyryjy bolýar.', en:"An authoritative scientist's words are trustworthy." } },
  { tk:'abzal', phon:'', pos:'n', en:'1. tool, instrument | 2. equipment, outfit, rig, kit', ex:{ tk:'Ussahanada köp abzal bolýar.', en:'There are many tools in the repair shop.' } },
  { tk:'abzallaşdyrmak', phon:'', pos:'v caus', en:'to equip, fit out, kit out', ex:{ tk:'edarany täze tehnika bilen abzallaşdyrmak', en:'to equip an office with new technology' } },
  { tk:'abzas', phon:"ab'zas", pos:'n', en:'paragraph', ex:{ tk:'Her bir täze pikiri abzasdan başlamaly.', en:'Every new thought should start a new paragraph.' } },
  { tk:'aç', phon:'a:ç', pos:'adj', en:'hungry', ex:{ tk:'Men irden bäri hiç zat iýmänsoň gaty aç.', en:"I am very hungry as I've not eaten anything since this morning." } },
  { tk:'aç-açan', phon:'aç-aça:n', pos:'adj/adv', en:'1. frank, candid | 2. frankly, candidly, openly', ex:{ tk:'aç-açan iş etmek', en:'to do something openly' } },
  { tk:'açar', phon:'', pos:'n', en:'1. key | 2. tin-opener, can-opener, bottle-opener, corkscrew | 3. password', ex:{ tk:'Dil kalbyň açary.', en:'The tongue is the key to the soul.' } },
  { tk:'açgöz', phon:'a:çgöz', pos:'adj', en:'greedy', ex:{ tk:'Meniň dostum açgöz, garny doýsa-da, gözi doýmaýar.', en:'My friend is greedy, his eyes are bigger than his stomach.' } },
  { tk:'açgözlük', phon:'a:çgözlük', pos:'n', en:'greediness', ex:{ tk:'Açgözlük gowy gylyk däl.', en:'To be greedy does not show good character.' } },
  { tk:'açlyk', phon:'a:çlyk', pos:'n', en:'1. hunger | 2. famine', ex:{ tk:'Açlygymdan ölüp barýaryn!', en:'I am dying of hunger!' } },
  { tk:'açmak', phon:'', pos:'v', en:'1. to open, inaugurate | 2. to reveal, discover | 3. to open, begin | 4. to turn on', ex:{ tk:'Gapyny aç.', en:'Open the door.' } },
  { tk:'açyk', phon:'', pos:'adj', en:'1. open | 2. clear | 3. light (of colour)', ex:{ tk:'açyk asman', en:'clear sky' } },
  { tk:'açylmak', phon:'', pos:'v', en:'1. to be opened | 2. to open | 3. to bloom | 4. to brighten up, become clear', ex:{ tk:'Güller ýazda açylýarlar.', en:'Flowers bloom in the spring.' } },
  { tk:'açylyş', phon:'', pos:'n', en:'opening', ex:{ tk:'Bu gün Aşgabatda täze muzeýiň açylyşy boldy.', en:'Today there was the opening of a new museum in Ashgabat.' } },

  { tk:'baba', phon:'ba:ba', pos:'n', en:"1. grandfather (maternal) | 2. ancestor | 3. old man | 4. honorific title, esp. for saints", ex:{ tk:'Ejemiň kakasy – meniň babam.', en:"My mother's father is my grandfather." } },
  { tk:'babadaş', phon:'ba:badaş', pos:'n', en:'maternal cousin, relative (someone sharing the same maternal grandfather)', ex:{ tk:'Özge ýagyň bolmasa, babadaşyň ýokmudyr.', en:"If you don't have extra oil, you don't have any relatives." } },
  { tk:'babatda', phon:'ba:batda', pos:'post', en:'about, concerning', ex:{ tk:'Ol pul babatda ejizdir.', en:'Concerning finances, he is weak.' } },
  { tk:'bada', phon:'ba:da', pos:'adj', en:'at once, at one stroke, as soon as, immediately', ex:{ tk:'Buz çat açanda, adamlar şol bada onuň üstünden düşdüler, gaçdylar.', en:'The moment the ice started cracking people ran away from it.' } },
  { tk:'badam', phon:'ba:dam', pos:'n', en:'almond', ex:null },
  { tk:'badamjan', phon:'ba:damja:n', pos:'n', en:'aubergine, egg-plant', ex:null },
  { tk:'badaşmak', phon:'ba:daşmak', pos:'v', en:'to be connected; to be committed to one another', ex:null },
  { tk:'badyna', phon:'ba:dyna', pos:'prep/n', en:'1. at once, as soon as | 2. speed, velocity', ex:{ tk:'Badyna çapyp barýan aty saklamak kyn.', en:'The speed of a racing horse is difficult to sustain.' } },
  { tk:'bag', phon:'ba:g', pos:'n', en:'1. garden | 2. orchard, grove | 3. park | 4. tree (çagalar bagy = kindergarten)', ex:{ tk:'Şu ýyl biziň bagymyz, köp hasyl berdi.', en:'This year our orchard provided much fruit.' } },
  { tk:'bag (2)', phon:'ba:g', pos:'n', en:'string, lace, shoelace', ex:null },
  { tk:'bag-bakja', phon:'ba:g-bakja', pos:'n', en:'garden, vegetable patch, plot of land, allotment', ex:{ tk:'Bag-bakjada gögerýän gawun—garpyzlar örän tagamly.', en:'Melons and water-melons grown in a vegetable patch are very tasty.' } },
  { tk:'bagana', phon:'', pos:'n', en:"Astrakhan, fur (curly lamb's fur)", ex:{ tk:'Ýaşuly adamlar bagana telpek geýýärler.', en:'Old men wear Astrakhan hats.' } },
  { tk:'bagban', phon:'ba:gba:n', pos:'n', en:'gardener', ex:{ tk:'Bagbanyň işi - baglara seretmek, suwarmak, aklamak we olaryň düýbüni ýumşatmak.', en:"A gardener's work is to watch the garden, water it, weed it, and loosen their roots." } },
  { tk:'bagjyk', phon:'ba:gjyk', pos:'n', en:'tie, strap', ex:{ tk:'Çagalar bagynda çagalara köwüşiň bagjygyny daňmagy öwredýärler.', en:'In a nursery school they teach children how to tie their shoe laces.' } },
  { tk:'baglamak', phon:'ba:glamak', pos:'v', en:'1. to tie | 2. to lock | 3. to shut off, fence | 4. to link', ex:{ tk:'Çapyksuwar atyň eýerini berk baglap münýär.', en:'Jockeys tie the horse\u2019s saddle on tight and then mount.' } },
  { tk:'baglanmak', phon:'ba:glanmak', pos:'v', en:'to be tied', ex:null },
  { tk:'baglanyşdyrmak', phon:'ba:glanyşdyrmak', pos:'v caus', en:'to associate, connect', ex:null },
  { tk:'baglanyşyk', phon:'ba:glanyşyk', pos:'n', en:'connection, tie, bond', ex:{ tk:'Gün bilen ýer şarymyzyň magnetizm baglanyşygy bar.', en:'There is a magnetic bond between the sun and our globe.' } },
  { tk:'baglanyşykly', phon:'ba:glanyşykly', pos:'adj', en:'linked, interconnected, connected with, bound up with, relating to', ex:{ tk:'Ylym we tejribe özara baglanyşykly bolmaly.', en:'Research and practice must be interconnected.' } },
  { tk:'baglaşmak', phon:'ba:glaşmak', pos:'v', en:'to make, form (an agreement)', ex:{ tk:'şertnama baglaşmak', en:'to make a treaty, form an alliance' } },
  { tk:'baglaýjy', phon:'', pos:'adj', en:'connective, conjunction (grammar)', ex:null },
  { tk:'bagly', phon:'ba:gly', pos:'adj', en:'connected with, dependent on', ex:{ tk:'Men kömek edip biljek däl, meniň elim bagly.', en:"I have my hands tied — I won't be able to help." } },
  { tk:'baglyk', phon:'', pos:'n', en:'garden', ex:{ tk:'Tamyň yzy owadan baglyk.', en:'Behind the home there is a beautiful garden.' } },
  { tk:'bagşy', phon:'', pos:'n', en:'folk-singer, bard', ex:{ tk:'Türkmenistanda zehinli bagşylar bar.', en:'Turkmenistan has talented folk-singers.' } },
  { tk:'bagt', phon:'', pos:'n', en:'happiness, good fortune', ex:{ tk:'Uzak hem bagtly durmuşda ýaşamak uly bagt.', en:'It is great fortune to live a long and happy life.' } },

  { tk:'da', phon:'da:', pos:'conj/sfx', en:"1. both...and (Aýna-da, Aknur-da...) | 2. but | 3. even though | 4. surely", ex:{ tk:'Aýna-da, Aknur-da iňlis dilini öwrenýärler.', en:'Both Ayna and Aknur learn English.' } },
  { tk:'dabalamak', phon:'da:balamak', pos:'v', en:'to stomp (used about camels, mainly)', ex:null },
  { tk:'daban', phon:'da:ban', pos:'n', en:'1. sole (of the foot), heel, foot | 2. the place where a foot has trodden | 3. step', ex:{ tk:'Dabanyň gyzmasa, bedeniň ýylamaýar.', en:"If your heel doesn't get hot your body won't get warm." } },
  { tk:'dabara', phon:'', pos:'n', en:'1. celebration, festivity, feast | 2. exuberant high spirits, excitement | 3. victory, triumph, glory, success', ex:{ tk:'maşgala dabarasy', en:'family celebration' } },
  { tk:'dabaralamak', phon:'', pos:'v', en:'1. to celebrate | 2. to hold someone in esteem, revere, pay homage to | 3. to glorify, win fame for', ex:null },
  { tk:'dabaralanmak', phon:'', pos:'vi', en:'1. to be celebrated | 2. to win, have the victory | 3. to be glorified, gain fame', ex:null },
  { tk:'dabaraly', phon:'', pos:'adj', en:'1. festive, celebratory | 2. grand, high, important, ceremonial, solemn', ex:{ tk:'dabaraly gün', en:'gala day, feast day' } },
  { tk:'dabaralylyk', phon:'', pos:'n', en:'pomp', ex:null },
  { tk:'dady-perýat', phon:"da:dy-perýa:t", pos:'n', en:'tears of grief, loud and bitter cries', ex:null },
  { tk:'dadyrmak', phon:'da:dyrmak', pos:'v caus', en:'1. to treat | 2. to encourage someone to taste', ex:{ tk:'Täze ýetişen miwäni ilki çagalara dadyrmaly.', en:'Fresh fruit should firstly be given to the children, as a treat.' } },
  { tk:'dag', phon:'da:g', pos:'n', en:'mountain', ex:{ tk:'Dagdan belent näme bar?', en:'What is higher than a mountain?' } },
  { tk:'dag (2)', phon:'da:g', pos:'n', en:'stamp, brand', ex:{ tk:'dag basmak', en:'to brand' } },
  { tk:'dagamak', phon:'', pos:'v', en:'1. to disperse, break up, be scattered | 2. to collapse, fall down | 3. to fall apart, be worn out', ex:{ tk:'Ýel güýçlenende, ümür dagady.', en:'When the wind strengthened the mist dispersed.' } },
  { tk:'dagatmak', phon:'da:gatmak', pos:'v', en:'1. to spread, scatter, disperse, distribute | 2. to disperse, break up, disband | 3. to wear out | 4. to distribute', ex:{ tk:'Polisiýa demonstrasiýany dagatdy.', en:'Police broke up the demonstration.' } },
  { tk:'daglyk', phon:'da:glyk', pos:'n', en:'1. mountainous | 2. high', ex:{ tk:'Nepal giden daglyk.', en:'Nepal is a mountainous country.' } },
  { tk:'dagy', phon:'', pos:'particle', en:'1. more, also, other, apart from, else | 2. and the rest of them', ex:{ tk:'Bu dagy hiç zat!', en:'That is nothing!' } },
  { tk:'dagynyk', phon:'da:gynyk', pos:'adj', en:'scattered, dispersed, sparse, spread out', ex:{ tk:'Türkmenler dagynyk ýaşapdyrlar.', en:'Turkmen live widely separated from each other.' } },
  { tk:'dahylly', phon:'', pos:'adj', en:'related to', ex:{ tk:'Bu saňa dahylly däl.', en:"That's nothing to do with you." } },
  { tk:'dakmak', phon:'', pos:'v', en:'1. to sew on, fasten, attach | 2. to name', ex:{ tk:'penjege ilik dakmak', en:'to sew a button on a coat' } },
  { tk:'dakynmak', phon:'', pos:'v', en:'to wear, to have on, to put on', ex:{ tk:'äýnek dakynmak', en:"to put on one's glasses" } },
  { tk:'dalaşgär', phon:'', pos:'n', en:'1. competitor | 2. candidate', ex:null },
  { tk:'dalaşgärlik', phon:'', pos:'n', en:'competition', ex:null },
  { tk:'dalaşmak', phon:'da:laşmak', pos:'v', en:'to be entangled', ex:null },
  { tk:'damak', phon:'', pos:'n', en:'1. throat, neck | 2. food, meal', ex:{ tk:'Damagym agyrýar.', en:"I've got a sore throat." } },

  { tk:'gaba', phon:'ga:ba', pos:'adj', en:'1. thick, splendid | 2. big, large', ex:{ tk:'gaba saç', en:'thick hair' } },
  { tk:'gabahat', phon:'', pos:'adj', en:'improper, indecent, outrageous', ex:{ tk:'gabahat iş etmek', en:'to do something indecent' } },
  { tk:'gabak', phon:'ga:bak', pos:'n', en:'eyelid', ex:{ tk:'badam gabak', en:'almond-shaped eyelid' } },
  { tk:'gabalmak', phon:'ga:balmak', pos:'v', en:'1. to be surrounded, be encircled | 2. to be driven, be rounded up', ex:{ tk:'Sygyrlar agyla gabaldy.', en:'The cows were driven into the shed.' } },
  { tk:'gabamak', phon:'', pos:'v', en:'1. to surround, encircle, blockade, block | 2. to drive, round up, herd', ex:{ tk:'duşmany gabamak', en:'to encircle the enemy' } },
  { tk:'gabanjaň', phon:'ga:banjaň', pos:'adj', en:'jealous', ex:{ tk:'gabanjaň bolmak', en:'to be jealous' } },
  { tk:'gabanjaňlyk', phon:'ga:banjaňlyk', pos:'n', en:'jealousy', ex:{ tk:'gabanjaňlyk duýgusy', en:'feeling of jealousy' } },
  { tk:'gabanmak', phon:'ga:banmak', pos:'v', en:'to be jealous', ex:null },
  { tk:'gabara', phon:'', pos:'n', en:'size, dimensions', ex:{ tk:'jaýyň gabarasy', en:'the size of a house' } },
  { tk:'gabarmak', phon:'ga:barmak', pos:'v', en:'1. to fill up, to be full | 2. to swell, be covered with swellings | 3. to boast', ex:{ tk:'Içine goş-golam dykylan torba gabarypdyr.', en:'The bag filled up with household goods.' } },
  { tk:'gabat', phon:'', pos:'adj', en:'1. opposite, facing | 2. in front of', ex:{ tk:'gabatma-gabat oturmak', en:'to sit facing one another' } },
  { tk:'gabatlamak', phon:'', pos:'v', en:'1. to time something to coincide with, arrange for | 2. to arrange', ex:{ tk:'baýramçylyga gabatlamak', en:'to arrange something for the holiday' } },
  { tk:'gabatlanmak', phon:'', pos:'v', en:'to draw near, approach', ex:null },
  { tk:'gabaw', phon:'ga:baw', pos:'n', en:'1. siege, blockade | 2. embargo', ex:{ tk:'gabawa düşmek', en:'to be encircled, be hemmed in on all sides' } },
  { tk:'gabawhana', phon:"ga:bawha:na", pos:'n', en:'1. prison cell | 2. pen (for animals)', ex:{ tk:'Polis ony tutup gabawhana saldy.', en:'The police arrested him and placed him in a cell.' } },
  { tk:'gabrystan', phon:'gabrysta:n', pos:'n', en:'cemetery, graveyard, burial-ground', ex:null },
  { tk:'gabyk', phon:'ga:byk', pos:'n', en:'1. shell | 2. bark | 3. peel, rind', ex:{ tk:'ýumurtganyň gabygy', en:'egg-shell' } },
  { tk:'gabyr', phon:'', pos:'n', en:'grave', ex:{ tk:'Eý, Rebbim, gabyr azabyndan halas etmegiň üçin Saňa sygynýaryn.', en:"Oh Lord, I trust you to save me from the grave's torment." } },
  { tk:'gaçak', phon:'', pos:'n', en:'runaway, fugitive', ex:null },
  { tk:'gaçalga', phon:'', pos:'n', en:'1. refuge, asylum, shelter | 2. way out, loophole, hiding place', ex:{ tk:'gaçalga gözlemek', en:'to seek refuge/asylum' } },
  { tk:'gaçgak', phon:'', pos:'n', en:'1. fugitive, runaway | 2. deserter', ex:null },
  { tk:'gaçgyn', phon:'', pos:'n', en:'refugee', ex:{ tk:'Gaçgynym şol.', en:'I am fed up with it/him.' } },
  { tk:'gaçmak', phon:'', pos:'v', en:'1. to run away, get out of the way | 2. to escape | 3. to fall | 4. to avoid', ex:{ tk:'Güýzde ýapraklar gaçýarlar.', en:'In autumn leaves fall from the trees.' } },
  { tk:'gaçy', phon:'', pos:'n', en:'dam, dike', ex:{ tk:'gaçy gurmak', en:'to dam, dike, block up' } },
  { tk:'gaçybatalga', phon:'', pos:'n', en:'shelter', ex:{ tk:'Garagum çöli köpler üçin gaçybatalga bolupdy.', en:'The Garagum desert was a refuge/shelter for many people.' } },

  { tk:'madda', phon:'', pos:'n', en:'article, clause, item', ex:{ tk:'konstitusiýanyň birinji maddasy', en:'the first clause of the constitution' } },
  { tk:'madda (2)', phon:'', pos:'n', en:'substance, matter', ex:{ tk:'partlaýjy madda', en:'explosive' } },
  { tk:'maddy', phon:'', pos:'adj', en:'1. financial, economic, material | 2. social', ex:{ tk:'halkyň maddy ýagdaýy', en:"the people's economic situation" } },
  { tk:'magaryf', phon:'maga:ryf', pos:'n', en:'1. education, enlightenment | 2. printers, print shop', ex:{ tk:'Aşgabat magaryf gullugy köp kitaplar çap edýär.', en:'Ashgabat Printers publish many books.' } },
  { tk:'magat', phon:'', pos:'adj', en:'definite', ex:null },
  { tk:'magdan', phon:'magda:n', pos:'n', en:'ore', ex:{ tk:'demir magdany', en:'iron-ore, iron-stone' } },
  { tk:'magdançy', phon:'magda:nçy', pos:'n', en:'miner', ex:{ tk:'Meniň doganym magdançy.', en:'My brother is a miner.' } },
  { tk:'magistr', phon:"ma'gistr", pos:'n', en:"master's degree, MA, MSc, magistrate", ex:{ tk:'Ol ýere magistr hem geldi.', en:'The magistrate has arrived there too.' } },
  { tk:'maglumat', phon:'maglu:mat', pos:'n', en:'information, message', ex:{ tk:'gerekli maglumatlar', en:'necessary information' } },
  { tk:'magnitofon', phon:"magnito'fon", pos:'n', en:'tape-recorder, tape-recording machine, cassette player', ex:{ tk:'wideo magnitofon', en:'video cassette recorder, VCR' } },
  { tk:'magşar', phon:'', pos:'n', en:'Day of Judgement (religious)', ex:{ tk:'Magşar güni hemmeler günäleri üçin töleg tölärler.', en:'Everybody will pay for their sins on the day of judgement.' } },
  { tk:'magşuk', phon:'magşu:k', pos:'n', en:'lover, girlfriend', ex:{ tk:'Leýli Mejnunyň magşugy.', en:"Leyli is Mejnun's lover/girlfriend." } },
  { tk:'magtamak', phon:'', pos:'v', en:'to praise, advertise out loud', ex:{ tk:'Söwdagär harydyny magtap başlady.', en:'A salesman started advertising his goods out loud.' } },
  { tk:'magtanjaň', phon:'', pos:'n', en:'opinionated person', ex:{ tk:'Meniň oglan jigim magtanjaň däl.', en:'My little brother is not an opinionated person.' } },
  { tk:'magtanmak', phon:'', pos:'v', en:'to boast, talk about oneself', ex:{ tk:'Ol özüniň ýeňşi barada magtanyp başlady.', en:'He started boasting about his victory.' } },
  { tk:'Magtymguly', phon:'', pos:'n', en:'Magtymguly, the great Turkmen poet', ex:{ tk:'Magtymguly türkmeniň beýik şahyry.', en:'Magtymguly is a great Turkmen poet.' } },
  { tk:'mahabat', phon:'maha:bat', pos:'n', en:'advertisement, announcement', ex:{ tk:'ýalan mahabat', en:'false advertising' } },
  { tk:'mahabatlandyrmak', phon:"maha:batlandyr'mak", pos:'v caus', en:'to advertise', ex:null },
  { tk:'mahal', phon:'', pos:'n', en:'1. period, time | 2. time (of day)', ex:{ tk:'gijäniň bir mahaly', en:'late at night' } },
  { tk:'mahal-mahal', phon:'', pos:'adj', en:'at times, now and then, now and again', ex:{ tk:'Biz mahal-mahal daga gezelenje gidýäris.', en:'We go to the mountains now and then.' } },
  { tk:'mahluk', phon:'mahlu:k', pos:'n', en:'1. creature, being | 2. rebuked', ex:{ tk:'Köne Ähtde geň mahluklar barada gürrüň edilýär.', en:'In the Old Testament there is talk about strange creatures.' } },
  { tk:'mahmal', phon:'', pos:'n', en:'1. velvet, plush material | 2. good, beautiful, fine', ex:{ tk:'Baý adamlar mahmaldan düşek tikýärler.', en:'Rich people make blankets from velvet.' } },
  { tk:'mahrum', phon:'mahru:m', pos:'adj', en:'lacking in, devoid of, deprived of', ex:{ tk:'mahrum etmek', en:'to deprive of' } },
  { tk:'mahsus', phon:'mahsu:s', pos:'adj', en:'characteristic of, inherent in', ex:{ tk:'türkmen diline mahsus bolan aýratynlyklar', en:'the peculiarities characteristic of the Turkmen language' } },
  { tk:'makala', phon:'maka:la', pos:'n', en:'article, entry', ex:{ tk:'gazet makalasy', en:'newspaper article' } }
];
