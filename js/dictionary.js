/* =========================================================
   TurkmenSon — Turkmen ⇆ Persian glossary (js/dictionary.js)

   Original glossary compiled for this project (not copied from
   any existing dictionary dataset — none suitable was found as
   an open, redistributable dataset at build time).

   Each entry:
     tk        — the Turkmen word, official Latin orthography
     faScript  — an APPROXIMATE phonetic rendering of the Turkmen
                 word using Persian script (for a Persian reader
                 who cannot read Latin-Turkmen, to get a rough
                 idea of the pronunciation). This is a phonetic
                 aid, not a standard orthography — Persian script
                 cannot represent sounds like ä/ö/ü/ň precisely.
     fa        — the Persian meaning/translation
   ========================================================= */

const DICTIONARY = {
  note: {
    fa:'نویسه‌گردانی فارسی، تلفظ تقریبی کلمات ترکمنی است (نه رسم‌الخط رسمی)؛ چون خط فارسی صداهایی مانند ä، ö، ü و ň را دقیق ندارد. پیش از استفادهٔ رسمی یا آموزشی، تلفظ را با یک گویشور بومی بررسی کنید.',
    tk:'Pars elipbiýindäki ýazylyş diňe çemeleşdirilen aýdylyşdyr (resmi ýazuw däl); sebäbi pars elipbiýinde ä, ö, ü, ň ýaly sesler takyk ýok. Resmi ýa-da bilim maksatly ulanmazdan öň, aýdylyşyny ene dilli biri bilen barlaň.'
  },
  categories:[
    {
      id:'greetings', fa:'سلام و احوال‌پرسی', tk:'Salamlaşyk',
      words:[
        { tk:'Salam',            faScript:'سلام',            fa:'سلام' },
        { tk:'Salawmaleýkim',    faScript:'سلاومالئیکیم',      fa:'سلام علیکم (رسمی‌تر)' },
        { tk:'Hoş geldiňiz',     faScript:'خوش گلدی‌نگیز',      fa:'خوش آمدید' },
        { tk:'Sag boluň',        faScript:'ساغ بولونگ',        fa:'متشکرم / سلامت باشید' },
        { tk:'Hoş / Sag boluň',  faScript:'خوش',              fa:'خداحافظ' },
        { tk:'Ýagşy',            faScript:'یاقشی',            fa:'خوب' },
        { tk:'Erbet / Ýaman',    faScript:'اربت / یامان',      fa:'بد' },
        { tk:'Bagyşlaň',         faScript:'باغیشلانگ',        fa:'ببخشید' },
        { tk:'Hawa',             faScript:'هاوا',             fa:'بله' },
        { tk:'Ýok',              faScript:'یوک',              fa:'نه / نیست' },
        { tk:'Dogry',            faScript:'دوغری',            fa:'درست است' },
        { tk:'Bolýar',           faScript:'بولیار',           fa:'باشد / می‌شود' },
        { tk:'Nähili?',          faScript:'نه‌هیلی؟',          fa:'چطور؟ / حالت چطوره؟' },
        { tk:'Adyň näme?',       faScript:'آدینگ نمه؟',        fa:'اسمت چیست؟' }
      ]
    },
    {
      id:'family', fa:'خانواده و بستگان', tk:'Maşgala',
      words:[
        { tk:'Maşgala', faScript:'ماشغالا', fa:'خانواده' },
        { tk:'Ata',     faScript:'آتا',     fa:'پدر' },
        { tk:'Eje',     faScript:'اجه',     fa:'مادر' },
        { tk:'Ogul',    faScript:'اوغول',    fa:'پسر (فرزند)' },
        { tk:'Gyz',     faScript:'قیز',     fa:'دختر' },
        { tk:'Dogan',   faScript:'دوغان',   fa:'خواهر یا برادر' },
        { tk:'Uýa',     faScript:'اویا',    fa:'خواهر' },
        { tk:'Aga',     faScript:'آغا',     fa:'برادر بزرگ‌تر' },
        { tk:'Är',      faScript:'أر',      fa:'شوهر' },
        { tk:'Aýal',    faScript:'آیال',    fa:'همسر (زن) / زن' },
        { tk:'Bije / Ene-ata', faScript:'ابه-آتا', fa:'پدربزرگ و مادربزرگ / والدین' },
        { tk:'Agtyk',   faScript:'آغتیق',   fa:'نوه' },
        { tk:'Garyndaş',faScript:'قارینداش', fa:'خویشاوند' },
        { tk:'Dost',    faScript:'دوست',    fa:'دوست' }
      ]
    },
    {
      id:'numbers', fa:'اعداد', tk:'Sanlar',
      words:[
        { tk:'Bir',    faScript:'بیر',      fa:'۱ / یک' },
        { tk:'Iki',    faScript:'ایکی',     fa:'۲ / دو' },
        { tk:'Üç',     faScript:'اوچ',      fa:'۳ / سه' },
        { tk:'Dört',   faScript:'دؤرت',     fa:'۴ / چهار' },
        { tk:'Bäş',    faScript:'بَش',      fa:'۵ / پنج' },
        { tk:'Alty',   faScript:'آلتی',     fa:'۶ / شش' },
        { tk:'Ýedi',   faScript:'یدی',      fa:'۷ / هفت' },
        { tk:'Sekiz',  faScript:'سکیز',     fa:'۸ / هشت' },
        { tk:'Dokuz',  faScript:'دوقوز',    fa:'۹ / نه' },
        { tk:'On',     faScript:'اون',      fa:'۱۰ / ده' },
        { tk:'Ýigrimi',faScript:'ییگیرمی',   fa:'۲۰ / بیست' },
        { tk:'Otuz',   faScript:'اوتوز',    fa:'۳۰ / سی' },
        { tk:'Ýüz',    faScript:'یوز',      fa:'۱۰۰ / صد' },
        { tk:'Müň',    faScript:'مونگ',     fa:'۱۰۰۰ / هزار' }
      ]
    },
    {
      id:'colors', fa:'رنگ‌ها', tk:'Reňkler',
      words:[
        { tk:'Ak',      faScript:'آق',      fa:'سفید' },
        { tk:'Gara',    faScript:'قارا',    fa:'سیاه' },
        { tk:'Gyzyl',   faScript:'قیزیل',   fa:'قرمز' },
        { tk:'Gök',     faScript:'گؤک',     fa:'آبی / سبز آسمانی' },
        { tk:'Ýaşyl',   faScript:'یاشیل',   fa:'سبز' },
        { tk:'Sary',    faScript:'ساری',    fa:'زرد' },
        { tk:'Mele',    faScript:'مله',     fa:'قهوه‌ای' },
        { tk:'Çal',     faScript:'چال',     fa:'خاکستری' },
        { tk:'Benewşe', faScript:'بنفشه',   fa:'بنفش' },
        { tk:'Altyn reňk', faScript:'آلتین رنگ', fa:'طلایی' }
      ]
    },
    {
      id:'nature', fa:'طبیعت و آسمان', tk:'Tebigat',
      words:[
        { tk:'Gün',    faScript:'گون',     fa:'خورشید / روز' },
        { tk:'Aý',     faScript:'آی',      fa:'ماه (کره) / ماه (تقویمی)' },
        { tk:'Ýyldyz', faScript:'ییلدیز',   fa:'ستاره' },
        { tk:'Asman',  faScript:'آسمان',    fa:'آسمان' },
        { tk:'Suw',    faScript:'سوو',     fa:'آب' },
        { tk:'Ot',     faScript:'اوت',     fa:'علف / آتش (بسته به بافت)' },
        { tk:'Çöl',    faScript:'چؤل',     fa:'صحرا / بیابان' },
        { tk:'Dag',    faScript:'داغ',     fa:'کوه' },
        { tk:'Deňiz',  faScript:'دنگیز',    fa:'دریا' },
        { tk:'Ýel',    faScript:'یئل',     fa:'باد' },
        { tk:'Gar',    faScript:'قار',     fa:'برف' },
        { tk:'Ýagyş',  faScript:'یاغیش',   fa:'باران' },
        { tk:'Çäge',   faScript:'چأگه',    fa:'شن' }
      ]
    },
    {
      id:'animals', fa:'حیوانات', tk:'Haýwanlar',
      words:[
        { tk:'At',     faScript:'آت',      fa:'اسب' },
        { tk:'Goýun',  faScript:'قویون',    fa:'گوسفند' },
        { tk:'Düýe',   faScript:'دویه',    fa:'شتر' },
        { tk:'It',     faScript:'ایت',     fa:'سگ' },
        { tk:'Pişik',  faScript:'پیشیک',    fa:'گربه' },
        { tk:'Guş',    faScript:'قوش',     fa:'پرنده' },
        { tk:'Balyk',  faScript:'بالیق',    fa:'ماهی' },
        { tk:'Gurt',   faScript:'قورت',    fa:'گرگ' },
        { tk:'Sygyr',  faScript:'سیغیر',    fa:'گاو' },
        { tk:'Geçi',   faScript:'گچی',     fa:'بز' },
        { tk:'Towuk',  faScript:'توووق',    fa:'مرغ خانگی' }
      ]
    },
    {
      id:'food', fa:'غذا و نوشیدنی', tk:'Iýmit',
      words:[
        { tk:'Çörek',  faScript:'چؤرک',     fa:'نان' },
        { tk:'Et',     faScript:'ات',      fa:'گوشت' },
        { tk:'Süýt',   faScript:'سویت',    fa:'شیر' },
        { tk:'Çaý',    faScript:'چای',     fa:'چای' },
        { tk:'Gant',   faScript:'قند',     fa:'قند / شکر' },
        { tk:'Duz',    faScript:'دوز',     fa:'نمک' },
        { tk:'Miwe',   faScript:'میوه',    fa:'میوه' },
        { tk:'Gawun',  faScript:'قاوون',    fa:'طالبی/خربزه' },
        { tk:'Garpyz', faScript:'قارپیز',   fa:'هندوانه' },
        { tk:'Üzüm',   faScript:'اوزوم',    fa:'انگور' },
        { tk:'Alma',   faScript:'آلما',    fa:'سیب' },
        { tk:'Bal',    faScript:'بال',     fa:'عسل' },
        { tk:'Suw içmek', faScript:'سوو ایچمک', fa:'آب خوردن' }
      ]
    },
    {
      id:'body', fa:'بدن انسان', tk:'Beden agzalary',
      words:[
        { tk:'Baş',   faScript:'باش',   fa:'سر' },
        { tk:'Göz',   faScript:'گؤز',   fa:'چشم' },
        { tk:'Gulak', faScript:'قولاق', fa:'گوش' },
        { tk:'Burun', faScript:'بورون', fa:'بینی' },
        { tk:'Agyz',  faScript:'آغیز',  fa:'دهان' },
        { tk:'El',    faScript:'ال',    fa:'دست' },
        { tk:'Aýak',  faScript:'آیاق',  fa:'پا' },
        { tk:'Ýürek', faScript:'یورک',  fa:'قلب' },
        { tk:'Saç',   faScript:'ساچ',   fa:'مو' },
        { tk:'Diş',   faScript:'دیش',   fa:'دندان' }
      ]
    },
    {
      id:'time', fa:'زمان و تقویم', tk:'Wagt',
      words:[
        { tk:'Gün',      faScript:'گون',      fa:'روز' },
        { tk:'Hepde',    faScript:'هفده',     fa:'هفته' },
        { tk:'Aý',       faScript:'آی',       fa:'ماه' },
        { tk:'Ýyl',      faScript:'ییل',      fa:'سال' },
        { tk:'Şu gün',   faScript:'شو گون',   fa:'امروز' },
        { tk:'Düýn',     faScript:'دویون',    fa:'دیروز' },
        { tk:'Ertir',    faScript:'ارتیر',    fa:'فردا / صبح' },
        { tk:'Agşam',    faScript:'آقشام',    fa:'عصر / شب' },
        { tk:'Gije',     faScript:'گیجه',     fa:'شب (هنگام)' },
        { tk:'Sagat',    faScript:'ساعات',    fa:'ساعت' }
      ]
    },
    {
      id:'adjectives', fa:'صفت‌های رایج', tk:'Sypatlar',
      words:[
        { tk:'Uly',    faScript:'اولی',    fa:'بزرگ' },
        { tk:'Kiçi',   faScript:'کیچی',    fa:'کوچک' },
        { tk:'Gowy',   faScript:'گووی',    fa:'خوب' },
        { tk:'Erbet',  faScript:'اربت',    fa:'بد' },
        { tk:'Täze',   faScript:'تأزه',    fa:'جدید' },
        { tk:'Köne',   faScript:'کؤنه',    fa:'قدیمی' },
        { tk:'Uzyn',   faScript:'اوزین',   fa:'بلند / طولانی' },
        { tk:'Gysga',  faScript:'قیسقا',   fa:'کوتاه' },
        { tk:'Ýyly',   faScript:'ییلی',    fa:'گرم' },
        { tk:'Sowuk',  faScript:'سووق',    fa:'سرد' },
        { tk:'Gymmat', faScript:'قیمّت',   fa:'گران' },
        { tk:'Arzan',  faScript:'ارزان',   fa:'ارزان' }
      ]
    },
    {
      id:'verbs', fa:'افعال رایج', tk:'Işlikler',
      words:[
        { tk:'Gelmek',   faScript:'گلمک',    fa:'آمدن' },
        { tk:'Gitmek',   faScript:'گیتمک',   fa:'رفتن' },
        { tk:'Görmek',   faScript:'گؤرمک',   fa:'دیدن' },
        { tk:'Bilmek',   faScript:'بیلمک',   fa:'دانستن' },
        { tk:'Aýtmak',   faScript:'آیتماق',  fa:'گفتن' },
        { tk:'Iýmek',    faScript:'ایمک',    fa:'خوردن' },
        { tk:'Içmek',    faScript:'ایچمک',   fa:'نوشیدن' },
        { tk:'Ýazmak',   faScript:'یازماق',  fa:'نوشتن' },
        { tk:'Okamak',   faScript:'اوقاماق',  fa:'خواندن' },
        { tk:'Söýmek',   faScript:'سویمک',   fa:'دوست‌داشتن' },
        { tk:'Işlemek',  faScript:'ایشلمک',  fa:'کار کردن' },
        { tk:'Oturmak',  faScript:'اوتورماق', fa:'نشستن' }
      ]
    },
    {
      id:'home', fa:'خانه و زندگی روزمره', tk:'Öý we durmuş',
      words:[
        { tk:'Öý',      faScript:'اوی',     fa:'خانه' },
        { tk:'Gapy',    faScript:'قاپی',    fa:'در' },
        { tk:'Ýol',     faScript:'یول',     fa:'راه / جاده' },
        { tk:'Bazar',   faScript:'بازار',   fa:'بازار' },
        { tk:'Pul',     faScript:'پول',     fa:'پول' },
        { tk:'Dükan',   faScript:'دوکان',   fa:'مغازه' },
        { tk:'Mekdep',  faScript:'مکدپ',    fa:'مدرسه' },
        { tk:'Hat',     faScript:'هات',     fa:'نامه / خط' },
        { tk:'Kitap',   faScript:'کیتاب',   fa:'کتاب' },
        { tk:'Galam',   faScript:'قلم',     fa:'قلم' }
      ]
    },
    {
      id:'emotions', fa:'احساسات', tk:'Duýgular',
      words:[
        { tk:'Söýgi',      faScript:'سویگی',    fa:'عشق' },
        { tk:'Begenmek',   faScript:'بگنمک',    fa:'خوشحال شدن' },
        { tk:'Gynanmak',   faScript:'غینانماق',  fa:'ناراحت شدن / غمگین شدن' },
        { tk:'Gorkmak',    faScript:'قورقماق',   fa:'ترسیدن' },
        { tk:'Ynanmak',    faScript:'ینانماق',   fa:'اعتماد کردن / باور کردن' },
        { tk:'Umyt',       faScript:'اومید',     fa:'امید' },
        { tk:'Hormat',     faScript:'حرمت',      fa:'احترام' },
        { tk:'Minnetdarlyk', faScript:'مینتدارلیق', fa:'قدردانی / تشکر' }
      ]
    }
  ]
};
