/* =========================================================
   TurkmenSon — content data (Persian / Turkmen)
   All text is an original, paraphrased educational summary
   written for this project — not copied from any source.
   ========================================================= */

const NAV_ITEMS = [
  { id:'dashboard',   icon:'home'    },
  { id:'history',     icon:'scroll'  },
  { id:'warpeace',    icon:'swords'  },
  { id:'clothing',    icon:'shirt'   },
  { id:'cuisine',     icon:'bowl'    },
  { id:'language',    icon:'letters' },
  { id:'people',      icon:'users'   },
  { id:'poets',       icon:'feather' },
  { id:'influences',  icon:'link'    }
];

const DATA = {
/* =========================================================
   فارسی
   ========================================================= */
fa: {
  dir:'rtl',
  tagline:'دروازه‌ای به فرهنگ ترکمن',
  nav:{
    dashboard:'داشبورد', history:'تاریخ', warpeace:'جنگ و صلح', clothing:'پوشاک',
    cuisine:'غذاها', language:'زبان', people:'چهره‌های ماندگار',
    poets:'شاعران و فرزانگان', influences:'تأثیرات و میراث'
  },
  subtitle:{
    dashboard:'نمای کلی پروژه', history:'از اوغوزها تا استقلال', warpeace:'سنت رزم و سیاست بی‌طرفی',
    clothing:'از تلپک تا چیرپی', cuisine:'سفره‌ای از صحرا تا شهر', language:'زبانی از خانواده اوغوزی',
    people:'از افسانه تا تاریخ', poets:'صدای فرهنگ ترکمن', influences:'میراثی فراتر از مرزها'
  },
  ui:{
    searchPlaceholder:'جست‌وجو در این بخش…',
    noResults:'در این بخش نتیجه‌ای برای جست‌وجوی شما یافت نشد.',
    heroCta1:'شروع کاوش', heroCta2:'درباره پروژه',
    exploreTitle:'کاوش در بخش‌ها',
    aboutTitle:'درباره TurkmenSon',
    aboutText:'TurkmenSon یک پروژهٔ متن‌باز و آموزشی است که می‌کوشد گوشه‌هایی از فرهنگ، تاریخ، پوشاک، زبان و میراث ادبی مردم ترکمن را به دو زبان فارسی و ترکمنی معرفی کند. محتوای این پروژه خلاصه‌ای آموزشی و رو به تکمیل است؛ برای پژوهش دقیق به منابع دانشگاهی و بومی مراجعه کنید.',
    menSection:'پوشاک مردان', womenSection:'پوشاک زنان',
    factsTitle:'واقعیت‌های زبانی', alphabetTitle:'چند حرف متمایز الفبای لاتین ترکمنی'
  },

  dashboard:{
    heroEyebrow:'دانشنامه فرهنگی TurkmenSon',
    heroTitle:'فرهنگ، تاریخ و هنر مردم ترکمن',
    heroText:'از صحرای قره‌قوم تا سواحل خزر، از حماسه‌های اوغوزی تا غزل‌های مختومقلی؛ TurkmenSon تلاش می‌کند روایتی یکپارچه از تاریخ، پوشاک، غذا، زبان و مشاهیر فرهنگ ترکمن ارائه دهد — دوزبانه، مدرن و همیشه در حال تکمیل.',
    stats:[
      { icon:'feather', label:'شاعر ملی', value:'مختومقلی فراغی، شاعر و عارف سدهٔ ۱۸ میلادی' },
      { icon:'link',    label:'میراث یونسکو', value:'هنر قالی‌بافی سنتی ترکمن (ثبت‌شده در ۲۰۱۹)' },
      { icon:'letters', label:'خانوادهٔ زبانی', value:'شاخهٔ اوغوزی زبان‌های ترکی، خویشاوند ترکی استانبولی' },
      { icon:'scroll',  label:'الفبای رسمی', value:'الفبای لاتین، از سال ۱۹۹۳ در ترکمنستان' },
      { icon:'horse',   label:'نژاد اسب ملی', value:'آخال‌تکه، از کهن‌ترین نژادهای اسب اصیل جهان' },
      { icon:'flag',    label:'سیاست خارجی', value:'بی‌طرفی دائمی، به رسمیت شناخته‌شده از سوی سازمان ملل در ۱۹۹۵' }
    ]
  },

  explore:{
    history:'سفری از مهاجرت قبایل اوغوز تا تشکیل ترکمنستان مستقل.',
    warpeace:'از میدان‌های نبرد سلجوقی تا سیاست بی‌طرفی امروز.',
    clothing:'کلاه تلپک، ردای چیرپی و زیورهای نقره‌ای عقیق‌نشان.',
    cuisine:'پلو ترکمنی، چکدیرمه، گوتاپ و چای سبز صحرایی.',
    language:'خط، الفبا و ویژگی‌های زبانی شاخهٔ اوغوزی غربی.',
    people:'از اوغوزخان افسانه‌ای تا چهره‌های تاریخی مستند.',
    poets:'شاعرانی که زبان و هویت ترکمنی را صورت‌بندی کردند.',
    influences:'جاده ابریشم، میراث اوغوزی مشترک و بازتاب جهانی.'
  },

  history:{
    intro:'تاریخ مردم ترکمن روایتی از کوچ، اتحادهای قبیله‌ای، امپراتوری‌سازی و در نهایت دولت‌ملت‌سازی مدرن است؛ روایتی که ریشه در استپ‌های آسیای میانه دارد و به صحرای قره‌قوم و سواحل خزر می‌رسد.',
    eras:[
      { year:'پیش از اسلام', title:'سرزمین سکاها و پارت‌ها', text:'پیش از ورود ترکان، این سرزمین را اقوام ایرانی‌تبار مانند سکاها و پارت‌ها می‌شناختند و بخشی از قلمرو شاهنشاهی هخامنشی بود؛ میراثی که در نام‌های جغرافیایی منطقه هنوز باقی مانده است.' },
      { year:'سدهٔ ۸ میلادی', title:'مهاجرت قبایل اوغوز', text:'قبایل ترک‌زبان اوغوز از مغولستان و آسیای میانه به سوی این منطقه کوچ کردند؛ همین کنفدراسیون قبیله‌ای پایهٔ نژادی و فرهنگی مردم ترکمن امروزی را شکل داد.' },
      { year:'سدهٔ ۱۰ میلادی', title:'پیدایش نام «ترکمن»', text:'نام «ترکمن» نخستین‌بار برای گروه‌هایی از اوغوزها به‌کار رفت که اسلام آورده بودند؛ از این دوران این قبایل هویتی متمایز از سایر شاخه‌های اوغوز یافتند.' },
      { year:'سده‌های ۱۱ و ۱۲', title:'امپراتوری سلجوقی', text:'رهبرانی ترکمن‌تبار مانند طغرل بیگ امپراتوری سلجوقی را بنیان نهادند؛ سپاهیان ترکمن در گسترش زبان و فرهنگ ترکی تا آناتولی و قفقاز نقش مهمی داشتند.' },
      { year:'سده‌های ۱۳ تا ۱۵', title:'حملهٔ مغول و پراکندگی', text:'یورش مغولان کنفدراسیون‌های شمالی را از هم پاشید و بسیاری از ایل‌های ترکمن به سوی جنوب، به دشت قره‌قوم و دامنهٔ کپه‌داغ رانده شدند و این حرکت به شکل‌گیری ایل‌های جدید انجامید.' },
      { year:'سده‌های ۱۶ تا ۱۹', title:'دوران ایل‌ها و خانات', text:'ایل‌های بزرگی چون تکه، یموت، ارساری، سالور و ساریق پیرامون خانات خیوه و بخارا استقرار یافتند؛ روابطی آمیخته از تجارت، رقابت و گاه درگیری با همسایگان ایرانی و ازبک شکل گرفت.' },
      { year:'۱۸۸۱', title:'نبرد گؤک‌تپه', text:'مقاومت ایل تکه در دژ گؤک‌تپه آخرین ایستادگی بزرگ در برابر پیشروی امپراتوری روسیه بود؛ پس از این رویداد تلخ، سرزمین‌های ترکمن به قلمرو روسیهٔ تزاری ضمیمه شد.' },
      { year:'۱۹۲۴', title:'تشکیل جمهوری شوروی ترکمنستان', text:'در چارچوب سیاست مرزبندی اتحاد شوروی، جمهوری شوروی سوسیالیستی ترکمنستان از استان قفقاز ماورای دریای خزر شکل گرفت و دوران مدرن‌سازی و دگرگونی اجباری شیوهٔ زندگی کوچ‌نشینی آغاز شد.' },
      { year:'۲۷ اکتبر ۱۹۹۱', title:'استقلال ترکمنستان', text:'با فروپاشی اتحاد شوروی و برگزاری همه‌پرسی، ترکمنستان استقلال خود را اعلام کرد؛ این روز هرساله به‌عنوان روز استقلال گرامی داشته می‌شود.' },
      { year:'۱۹۹۵', title:'به رسمیت‌شناسی بی‌طرفی دائمی', text:'مجمع عمومی سازمان ملل متحد وضعیت بی‌طرفی دائمی ترکمنستان را به رسمیت شناخت؛ سیاستی که تا امروز ستون اصلی دیپلماسی خارجی این کشور باقی مانده است.' }
    ]
  },

  warpeace:{
    intro:'در تاریخ ترکمن، رزم و آشتی دو روی یک سکه‌اند: سنت اسب‌سواری و دلاوری ایلی در کنار میراثی از دیپلماسی، تجارت جاده ابریشم و در دورهٔ معاصر، سیاست بی‌طرفی فعال.',
    events:[
      { icon:'horse', title:'سنت سوارکاری و اسب آخال‌تکه', text:'زندگی کوچ‌نشینی، مهارت در تیراندازی سواره و پرورش اسب اصیل آخال‌تکه، ستون توان نظامی ایل‌های ترکمن در سده‌های میانه بود.' },
      { icon:'shield', title:'گسترش سلجوقیان', text:'سپاهیان ترکمن‌تبار زیر پرچم سلجوقیان تا آناتولی و ایران پیش رفتند و نظام دیوان‌سالاری و فرهنگ ترک-اسلامی را در دل تمدن‌های کهن منطقه نهادینه کردند.' },
      { icon:'swords', title:'دفاع از واحه‌ها', text:'ایل‌های ترکمن در سده‌های اخیر بارها ناچار به دفاع از واحه‌ها و کاروان‌های خود در برابر تاخت‌وتازهای همسایه شدند؛ رویارویی‌هایی که بخشی از حافظهٔ حماسی این مردم است.' },
      { icon:'flag', title:'نبرد گؤک‌تپه (۱۸۸۱)', text:'ایستادگی ایل تکه در برابر ارتش روسیهٔ تزاری در دژ گؤک‌تپه، نمادی از پایداری و در عین حال یکی از دردناک‌ترین لحظات تاریخ ترکمن به شمار می‌رود.' },
      { icon:'shield', title:'قیام ۱۹۱۶', text:'در پی بسیج اجباری برای جنگ جهانی اول، موج گسترده‌ای از قیام مردمی در آسیای میانه از جمله میان ترکمن‌ها علیه امپراتوری روسیه شکل گرفت.' },
      { icon:'swords', title:'جنبش باسمچی', text:'در دههٔ ۱۹۲۰ گروه‌هایی از ترکمن‌ها همراه با دیگر اقوام آسیای میانه در جنبش باسمچی، در برابر ادغام اجباری در نظام شوروی مقاومت کردند.' },
      { icon:'quote', title:'سهم در جنگ جهانی دوم', text:'ترکمن‌ها همچون دیگر ملیت‌های اتحاد شوروی، رزمندگانی به جبهه‌های جنگ جهانی دوم فرستادند؛ یادمان‌های این دوران هنوز در شهرهای ترکمنستان دیده می‌شود.' },
      { icon:'flag', title:'بی‌طرفی دائمی (۱۹۹۵ تاکنون)', text:'ترکمنستان مستقل، به‌جای پیوستن به ائتلاف‌های نظامی، سیاست بی‌طرفی دائمی را برگزید؛ رویکردی که صلح و عدم مداخله را محور دیپلماسی این کشور قرار داده است.' }
    ]
  },

  clothing:{
    intro:'پوشاک سنتی ترکمن، پاسخی هوشمندانه به اقلیم خشک صحراست: پارچه‌های ابریشمی سبک، کلاه‌های پشمی عایق و زیورهای نقره‌ای که هم زینت‌اند و هم نمادی از جایگاه اجتماعی و باورهای حفاظتی.',
    men:[
      { icon:'shirt', name:'تلپک', badge:'کلاه سنتی مردانه', text:'کلاهی حجیم از پوست گوسفند قره‌قل که در تابستان گرما و در زمستان سرما را تعدیل می‌کند؛ بردن آن از سر کسی در ملأ عام، بی‌احترامی بزرگی شمرده می‌شود.' },
      { icon:'shirt', name:'دون (چاپان)', badge:'ردا و قبا', text:'ردایی بلند و آستین‌تنگ از پشم یا ابریشم راه‌راه که روی پیراهن پوشیده و با کمربندی پارچه‌ای به نام «قوشاق» بسته می‌شود.' },
      { icon:'shirt', name:'کؤینک', badge:'پیراهن زیرین', text:'پیراهنی گشاد از پنبه، پایهٔ پوشش روزمرهٔ مردان که با شلوار گشاد «بالاق» همراه می‌شود.' },
      { icon:'shirt', name:'بؤرک و کلپاک', badge:'کلاه‌های زیرین', text:'کلاهک کوچک گردی که زیر تلپک بر سر می‌ماند تا سر همیشه پوشیده باشد؛ کلپاک نیز نسخه‌ای سبک‌تر برای کار روزانه است.' }
    ],
    women:[
      { icon:'gem', name:'کؤینک زنانه', badge:'پیراهن بلند', text:'پیراهنی بلند و افشان از ابریشم قرمز به نام «کتنی»، با یقهٔ گلدوزی‌شده‌ای موسوم به «یاکا» که نگین‌های نقره و عقیق آن را می‌آراید.' },
      { icon:'gem', name:'چیرپی', badge:'ردای مراسمی', text:'ردایی بلند که زنان متأهل روی سر و شانه می‌اندازند؛ آستین‌های تزئینی آن که هرگز پوشیده نمی‌شود، در پشت آویزان می‌ماند و نقش‌مایه‌های شاخ قوچ و درخت زندگی را دربردارد.' },
      { icon:'gem', name:'بالاق', badge:'شلوار گشاد', text:'شلواری گشاد با لبه‌های گلدوزی‌شده که زیر پیراهن بلند پوشیده می‌شود و در نقش‌های آن نمادهای باروری و برکت تکرار می‌شود.' },
      { icon:'gem', name:'زیورهای نقره و عقیق', badge:'جواهرات سنتی', text:'گردنبندها، تاج‌ها و آویزهای نقره‌ای مرصع به عقیق سرخ، هم نشانهٔ جایگاه اجتماعی زنان است و هم باوری کهن به نقش حفاظتی این سنگ‌ها را بازتاب می‌دهد.' }
    ]
  },

  cuisine:{
    intro:'آشپزی ترکمنی میراث‌دار زندگی کوچ‌نشینی است: طبخ‌های ساده اما پرانرژی با گوشت، برنج و آرد، که با کمترین ادویه اما بیشترین حس مهمان‌نوازی سر سفره می‌آید.',
    dishes:[
      { icon:'bowl', name:'پلو ترکمنی', text:'برنجی همراه با گوشت گوسفند، هویج و پیاز که برخلاف پلوهای همسایه، معمولاً کم‌روغن‌تر و ملایم‌تر طعم‌دهی می‌شود تا مزهٔ اصلی گوشت و سبزی حفظ شود.' },
      { icon:'bowl', name:'چکدیرمه', text:'خورشتی از گوشت و برنج که در دیگ چدنی «قازان» و به‌صورت لایه‌ای پخته می‌شود؛ گوجه‌فرنگی، پیاز و ادویه‌های ساده طعم آن را می‌سازند.' },
      { icon:'bowl', name:'گوتاپ', text:'نوعی نان محشوی نازک که با گوشت، سیب‌زمینی، اسفناج یا کدو پر می‌شود و روی ساج یا در تابه سرخ یا کبابی می‌شود.' },
      { icon:'bowl', name:'ایچلکلی', text:'پای گوشت و پیاز که سنتاً در شن داغ صحرا پخته می‌شد؛ نمونه‌ای گویا از سازگاری آشپزی ترکمن با شرایط صحرایی.' },
      { icon:'bowl', name:'مانتی', text:'خمیر گوشت پیچیده و بخارپز که در سراسر آسیای میانه شناخته‌شده است و نسخهٔ ترکمنی آن معمولاً با پیاز فراوان طعم‌دار می‌شود.' },
      { icon:'bowl', name:'چوره‌ک', text:'نان سنتی گرد که بیش از خوراک، نمادی از مهمان‌نوازی و احترام است؛ در بسیاری از آیین‌ها نان تازه نخستین چیزی است که پیش مهمان می‌گذارند.' },
      { icon:'bowl', name:'گؤک چای', text:'چای سبز، نوشیدنی همیشگی سفرهٔ ترکمنی که گاه با میوهٔ خشک یا گیاهان معطر مانند نعنا همراه می‌شود.' },
      { icon:'bowl', name:'پیشمه', text:'شیرینی سرخ‌شده از خمیر ساده که در مهمانی‌ها و جشن‌ها به‌عنوان تنقلات پذیرایی سرو می‌شود.' }
    ]
  },

  language:{
    intro:'زبان ترکمنی از شاخهٔ اوغوزی غربی خانوادهٔ زبان‌های ترکی است؛ خانواده‌ای که ترکی استانبولی، آذربایجانی و ترکی خراسانی نیز به آن تعلق دارند و همین نسبت، درک متقابل نسبی میان گویشوران این زبان‌ها را ممکن می‌سازد.',
    facts:[
      { icon:'letters', text:'ترکمنی همچون بسیاری از زبان‌های ترکی، از قاعدهٔ «هماهنگی واکه‌ای» پیروی می‌کند؛ یعنی واکه‌های یک واژه معمولاً از یک دسته صوتی (پیشین یا پسین) انتخاب می‌شوند.' },
      { icon:'scroll', text:'در طول یک سده، خط نوشتاری ترکمنی چند بار تغییر کرده است: از خط عربی سنتی، به لاتین در نخستین سال‌های شوروی، سپس سیریلیک در دوران شوروی، و از سال ۱۹۹۳ بازگشت به الفبای لاتین در ترکمنستان مستقل.' },
      { icon:'globe', text:'ترکمن‌های ایران در استان گلستان و خراسان شمالی، همچنان بیشتر با خط عربی-فارسی می‌نویسند؛ چراکه استاندارد لاتین ترکمنستان در ایران رسمیت ندارد.' },
      { icon:'book', text:'مختومقلی فراغی در سدهٔ ۱۸ نقش برجسته‌ای در تثبیت ترکمنی به‌عنوان زبانی مستقل ادبی داشت و آثار او هنوز پایهٔ آموزش زبان و ادبیات ترکمنی است.' }
    ],
    alphabet:[
      { letter:'ý', sound:'شبیه «ی» در «یار»' },
      { letter:'ň', sound:'صدای غنه، نزدیک به «نگ»' },
      { letter:'ö', sound:'واکهٔ گرد پیشین، مانند آلمانی ö' },
      { letter:'ü', sound:'واکهٔ گرد پیشین بسته، مانند آلمانی ü' },
      { letter:'w', sound:'نزدیک به «و» لبی' },
      { letter:'ž', sound:'شبیه «ژ» فارسی' },
      { letter:'ş', sound:'شبیه «ش» فارسی' },
      { letter:'ç', sound:'شبیه «چ» فارسی' }
    ]
  },

  people:{
    intro:'از سرداران افسانه‌ای تا بنیان‌گذاران امپراتوری‌ها، حافظهٔ جمعی ترکمن آمیزه‌ای از اسطوره و تاریخ مستند است.',
    items:[
      { icon:'feather', name:'اوغوزخان', era:'شخصیت افسانه‌ای', text:'در روایات حماسی اوغوز، اوغوزخان نیای بنیان‌گذار قبایل اوغوز و از این رهگذر، جدّ نمادین مردم ترکمن به شمار می‌آید.' },
      { icon:'book', name:'دده قورقود (گورقوت آتا)', era:'حکیم و راوی حماسی', text:'شخصیت افسانه‌ای-تاریخی دده قورقود، پیر خردمند و نوازندهٔ داستان‌سرای مشترک میان ترکمن‌ها، ترک‌ها و آذربایجانی‌هاست؛ کتاب منسوب به او یکی از کهن‌ترین یادگارهای حماسی اوغوزی است.' },
      { icon:'shield', name:'طغرل بیگ', era:'سدهٔ ۱۱ میلادی', text:'بنیان‌گذار امپراتوری سلجوقی که ریشه در ایل‌های اوغوز داشت؛ حکومتی که فرهنگ و زبان ترکی را تا قلب ایران و آناتولی گسترش داد.' },
      { icon:'book', name:'دولت‌محمد آزادی', era:'سدهٔ ۱۸ میلادی', text:'عالم و شاعر صوفی، پدر و آموزگار مختومقلی فراغی؛ او را از نخستین کسانی می‌دانند که به زبان ترکمنی آثار مکتوب پدید آورد.' },
      { icon:'feather', name:'مختومقلی فراغی', era:'حدود ۱۷۲۴ تا ۱۸۰۷', text:'شاعر و عارف ملی ترکمن که غزل‌های او هویت زبانی و فرهنگی مشترک ترکمن‌ها را صورت‌بندی کرد و امروز در ایران، ترکمنستان و افغانستان به یک اندازه گرامی داشته می‌شود.' },
      { icon:'swords', name:'گوروغلی', era:'قهرمان حماسی', text:'قهرمان چرخهٔ حماسی مشترک گوروغلی/کوراوغلو در میان ترک‌زبانان آسیای میانه و قفقاز؛ نمادی از عدالت‌خواهی و مقاومت در برابر ستم.' },
      { icon:'feather', name:'کمینه', era:'اواخر سدهٔ ۱۸ و آغاز ۱۹', text:'شاعر طنزپرداز و مردمی که با زبانی ساده و گزنده از نابرابری‌های اجتماعی روزگار خود سخن گفت.' }
    ]
  },

  poets:{
    intro:'ادبیات ترکمن پیش از هر چیز ادبیاتی شفاهی و آوازی بود؛ اما از سدهٔ ۱۸ به بعد، نسلی از شاعران زبان ترکمنی را به رسانه‌ای برای فلسفه، عرفان و هویت ملی بدل کردند.',
    items:[
      { icon:'book', name:'دولت‌محمد آزادی', years:'سدهٔ ۱۸ میلادی', text:'دانشمند و متفکر صوفی که در کنار شعر، به مسائل اخلاق و تربیت نیز پرداخت و پایه‌گذار فضای فکری‌ای شد که فرزندش مختومقلی در آن بالید.' },
      { icon:'feather', name:'مختومقلی فراغی', years:'حدود ۱۷۲۴ تا ۱۸۰۷', text:'در قالب شعری «قوشوق» -نزدیک به سنت آواز و ترانهٔ عامیانه- دربارهٔ عشق، عدالت اجتماعی و وحدت ایل‌های ترکمن سرود؛ زبان و اندیشهٔ او هنوز الگوی شعر ترکمنی است.' },
      { icon:'quote', name:'کمینه', years:'حدود ۱۷۷۰ تا ۱۸۴۰', text:'شاعر هجوسرا و قصه‌گوی مردمی که با طنزی گزنده، ریاکاری و بی‌عدالتی را به نقد کشید و در حافظهٔ شفاهی ترکمن‌ها زنده ماند.' },
      { icon:'feather', name:'سیدنظر سیدی', years:'سدهٔ ۱۹ میلادی', text:'شاعری که در اشعارش هم از عشق و هم از دشواری‌های زندگی ایلی و اجتماعی زمانهٔ خود سخن گفت.' },
      { icon:'book', name:'مُلانفس', years:'سدهٔ ۱۹ میلادی', text:'سرایندهٔ منظومه‌های عاشقانه، از جمله روایت منظوم «زهره و طاهر»؛ نمونه‌ای از سنت داستان‌های عاشقانهٔ منظوم مشترک میان فرهنگ‌های ترکی و ایرانی.' },
      { icon:'feather', name:'نورمحمد آندلیب', years:'سدهٔ ۱۸ میلادی', text:'از نخستین سرایندگان داستان‌های منظوم بلند (دسان) به زبان ترکمنی، که پلی میان ادبیات شفاهی و ادبیات مکتوب ساخت.' },
      { icon:'quote', name:'زلیلی', years:'سدهٔ ۱۹ میلادی', text:'شاعری که در اشعار خود از رنج جنگ‌های ایلی، آوارگی و اشتیاق بازگشت به سرزمین مادری سرود.' }
    ]
  },

  influences:{
    intro:'موقعیت جغرافیایی ترکمن‌ها -میان ایران، آسیای میانه و استپ‌های روسیه- آنان را به گرهگاهی از داد و ستد فرهنگی بدل کرده است؛ گرهگاهی که تأثیرش را می‌توان در قالی، زبان، ادبیات و حتی سیاست خارجی امروز دید.',
    items:[
      { icon:'compass', title:'جادهٔ ابریشم', text:'سرزمین ترکمن‌نشین بر مسیرهای فرعی جادهٔ ابریشم قرار داشت و کاروان‌های تجاری، همراه با کالا، نقش‌مایه‌های هنری، دین و زبان را نیز جابه‌جا می‌کردند.' },
      { icon:'link', title:'هنر قالی‌بافی، میراث یونسکو', text:'هنر سنتی قالی‌بافی ترکمن در سال ۲۰۱۹ در فهرست میراث ناملموس بشریت یونسکو ثبت شد؛ نقش‌مایه‌های «گل» هر قالی، از دیرباز نشانهٔ هویت ایلی بوده و بعدها الهام‌بخش نشان پرچم ملی ترکمنستان نیز شد.' },
      { icon:'book', title:'میراث حماسی مشترک اوغوزی', text:'داستان‌های دده قورقود و گوروغلی/کوراوغلو را ترکمن‌ها با ترکان آناتولی و آذربایجانی‌ها مشترک دارند؛ نشانه‌ای از ریشهٔ فرهنگی یگانهٔ اوغوزی که در سه کشور امروز جریان‌های ادبی جداگانه‌ای یافته است.' },
      { icon:'feather', title:'پیوند با ادبیات فارسی', text:'شاعرانی چون مختومقلی و پدرش دولت‌محمد آزادی در کنار ترکمنی، به فارسی و عربی نیز آموزش دیدند و مضامین عرفانی شعر فارسی در قالب زبان ترکمنی بازتاب یافت.' },
      { icon:'horse', title:'اسب آخال‌تکه در تاریخ جهانی', text:'برخی پژوهشگران بر این باورند که اسب آخال‌تکه، پرورش‌یافته در صحراهای ترکمن، در شکل‌گیری برخی نژادهای اسب اصیل جهان از جمله از طریق تبادلات تاریخی با سرزمین‌های همسایه اثرگذار بوده است؛ گرچه این ادعا هنوز موضوع بحث تاریخی است.' },
      { icon:'scroll', title:'میراث دوران شوروی', text:'دوران شوروی از یک سو باعث سرکوب برخی سنت‌های دینی و ایلی شد و از سوی دیگر زیرساخت آموزش همگانی و چاپ ادبیات ترکمنی را گسترش داد؛ میراثی دوگانه که در معماری و نظام آموزشی امروز نیز اثر گذاشته است.' },
      { icon:'flag', title:'بی‌طرفی به‌مثابه هویت دیپلماتیک', text:'در دوران استقلال، ترکمنستان به‌جای پیوستن به بلوک‌های نظامی، بی‌طرفی دائمی را برگزید؛ انتخابی که امروز جزئی از هویت بین‌المللی این کشور شمرده می‌شود.' }
    ]
  }
},

/* =========================================================
   Türkmençe
   ========================================================= */
tk: {
  dir:'ltr',
  tagline:'Türkmen medeniýetine açylan gapy',
  nav:{
    dashboard:'Dashboard', history:'Taryh', warpeace:'Uruş we parahatçylyk', clothing:'Egin-eşik',
    cuisine:'Milli tagamlar', language:'Dil', people:'Meşhur şahslar',
    poets:'Şahyrlar we akyldarlar', influences:'Täsirler we miras'
  },
  subtitle:{
    dashboard:'Taslamanyň umumy görnüşi', history:'Oguzlardan Garaşsyzlyga çenli', warpeace:'Harby däp we bitaraplyk syýasaty',
    clothing:'Telpekden çyrpa çenli', cuisine:'Çölden şähere uzaýan saçak', language:'Oguz dil maşgalasynyň bir şahasy',
    people:'Rowaýatdan taryha çenli', poets:'Türkmen medeniýetiniň sesi', influences:'Serhetlerden geçen miras'
  },
  ui:{
    searchPlaceholder:'Bu bölümde gözle…',
    noResults:'Bu bölümde gözlegiňize laýyk netije tapylmady.',
    heroCta1:'Öwrenip başla', heroCta2:'Taslama barada',
    exploreTitle:'Bölümleri öwreniň',
    aboutTitle:'TurkmenSon barada',
    aboutText:'TurkmenSon — türkmen halkynyň medeniýetini, taryhyny, egin-eşigini, dilini we edebi mirasyny pars we türkmen dillerinde tanyşdyrýan açyk çeşmeli, bilim maksatly taslamadyr. Mazmun heniz kämilleşdirilýän gysgaça bilim beriş häsiýetinde bolup, jikme-jik ylmy maglumat üçin ýerli we akademiki çeşmelere ýüz tutmagy maslahat berýäris.',
    menSection:'Erkekleriň egin-eşigi', womenSection:'Aýallaryň egin-eşigi',
    factsTitle:'Dil hakynda maglumatlar', alphabetTitle:'Latyn elipbiýiniň birnäçe aýratyn harpy'
  },

  dashboard:{
    heroEyebrow:'TurkmenSon medeni ensiklopediýasy',
    heroTitle:'Türkmen halkynyň medeniýeti, taryhy we sungaty',
    heroText:'Garagum çölünden Hazar kenaryna çenli, oguz dessanlaryndan Magtymgulynyň goşgularyna çenli — TurkmenSon türkmen taryhyny, egin-eşigini, tagamlaryny, dilini we meşhur şahslaryny bir ýerde, iki dilde, döwrebap görnüşde hödürlemäge synanyşýar.',
    stats:[
      { icon:'feather', label:'Milli şahyr', value:'Magtymguly Pyragy, 18-nji asyryň şahyry we akyldary' },
      { icon:'link',    label:'ÝUNESKO mirasy', value:'Türkmen halyçylyk sungaty (2019-njy ýylda hasaba alyndy)' },
      { icon:'letters', label:'Dil maşgalasy', value:'Oguz topary, türk dilleriniň bir şahasy' },
      { icon:'scroll',  label:'Resmi elipbiý', value:'1993-nji ýyldan bäri latyn elipbiýi' },
      { icon:'horse',   label:'Milli at tohumy', value:'Ahalteke — dünýäniň iň gadymy arassa ganly at tohumlarynyň biri' },
      { icon:'flag',    label:'Daşary syýasat', value:'1995-nji ýylda BMG tarapyndan ykrar edilen hemişelik Bitaraplyk' }
    ]
  },

  explore:{
    history:'Oguz taýpalarynyň göçünden Garaşsyz Türkmenistanyň döremegine çenli ýol.',
    warpeace:'Seljuk söweş meýdanlaryndan häzirki bitaraplyk syýasatyna çenli.',
    clothing:'Telpek, çyrpy we akyk daşly kümüş şaý-sepler.',
    cuisine:'Türkmen palawy, çekdirme, gutap we çöl gök çaýy.',
    language:'Günbatar oguz şahasynyň elipbiýi we aýratynlyklary.',
    people:'Rowaýatdaky Oguz handan resmi taryha çenli şahslar.',
    poets:'Türkmen dilini we kimligini şekillendiren şahyrlar.',
    influences:'Ýüpek ýoly, umumy oguz mirasy we dünýä täsiri.'
  },

  history:{
    intro:'Türkmen halkynyň taryhy — göçüp-gonmalaryň, taýpa birleşikleriniň, imperiýalaryň we ahyrynda döwrebap döwletiň emele gelşiniň hekaýasydyr; bu ýol Merkezi Aziýanyň sähralaryndan başlap, Garagum çölüne we Hazar kenaryna uzaýar.',
    eras:[
      { year:'Yslamdan öň', title:'Skif we Part ýurdy', text:'Türkleriň gelmeginden öň bu ýerde irani gelip çykyşly halklar, şol sanda skifler we partlar ýaşapdyrlar; sebit Ahemenid şalygynyň düzümine hem giripdir.' },
      { year:'8-nji asyr', title:'Oguz taýpalarynyň göçi', text:'Türki dilli oguz taýpalary Moňgoliýadan we Merkezi Aziýadan bu tarapa göçüp gelipdirler; şu taýpa konfederasiýasy häzirki türkmen halkynyň etniki esasyny düzüpdir.' },
      { year:'10-njy asyr', title:'"Türkmen" adynyň dörän wagty', text:'"Türkmen" ady ilkinji gezek yslamy kabul eden oguz toparlaryna ulanylypdyr; şol döwürden bäri bu taýpalar beýleki oguz şahalaryndan tapawutly kimlik gazanypdyr.' },
      { year:'11–12-nji asyrlar', title:'Seljuk imperiýasy', text:'Togrul Beg ýaly türkmen gelip çykyşly serdarlar Seljuk imperiýasyny esaslandyrdylar; türkmen esgerleri türk medeniýetini we dilini Anadola hem-de Kawkaza çenli ýaýratmakda uly rol oýnadylar.' },
      { year:'13–15-nji asyrlar', title:'Mongol çozuşy we dargama', text:'Mongol çozuşy demirgazykdaky taýpa birleşiklerini dargatdy; köp türkmen tirеleri günorta — Garagum çölüne we Köpetdag etegine süründi, bu bolsa täze tire-taýpalaryň emele gelmegine getirdi.' },
      { year:'16–19-njy asyrlar', title:'Tire-taýpalar we hanlyklar döwri', text:'Teke, ýomut, ärsary, salyr we saryk ýaly uly tireler Hywa we Buhara hanlyklarynyň daş-töwereginde ýerleşdiler; goňşy halklar bilen söwda, bäsleşik we käte gapma-garşylyk garym-gatym boldy.' },
      { year:'1881', title:'Gökdepe söweşi', text:'Teke tiresiniň Gökdepe galasyndaky garşylygy Orsýet imperiýasynyň öňe süýşmegine garşy soňky uly göreşdi; bu ajy wakadan soň türkmen topraklary Orsýet imperiýasynyň düzümine goşuldy.' },
      { year:'1924', title:'Türkmenistan SSR-niň döredilmegi', text:'Sowet Soýuzynyň serhet çekiş syýasaty çäginde Zakaspiý oblastyndan Türkmenistan Sowet Sosialistik Respublikasy döredildi; şondan soň göçme durmuş ýörelgesini üýtgetmek syýasaty başlandy.' },
      { year:'1991-nji ýylyň 27-nji oktýabry', title:'Türkmenistanyň Garaşsyzlygy', text:'Sowet Soýuzynyň dargamagy we referendum netijesinde Türkmenistan Garaşsyzlygyny yglan etdi; bu gün her ýyl Garaşsyzlyk güni hökmünde bellenilýär.' },
      { year:'1995', title:'Hemişelik Bitaraplygyň ykrar edilmegi', text:'BMG-niň Baş Assambleýasy Türkmenistanyň hemişelik Bitaraplyk derejesini ykrar etdi; bu syýasat şu güne çenli ýurduň daşary syýasatynyň esasy sütünleriniň biri bolmagynda galýar.' }
    ]
  },

  warpeace:{
    intro:'Türkmen taryhynda söweş we parahatçylyk bir teňňäniň iki tarapy ýalydyr: atly esgerlik we tire gaýduwsyzlygy dessany, Ýüpek ýoly diplomatiýasy we häzirki döwürde işjeň bitaraplyk syýasaty bilen utgaşýar.',
    events:[
      { icon:'horse', title:'Atçylyk we ahalteke däbi', text:'Göçme durmuş, atly söweş ussatlygy we ahalteke atynyň idedilmegi orta asyrlarda türkmen tireleriniň harby güýjüniň esasy bolupdyr.' },
      { icon:'shield', title:'Seljuklaryň ýaýbaňlanmagy', text:'Türkmen gelip çykyşly esgerler Seljuk baýdagynyň astynda Anadola we Eýrana çenli ýöriş etdiler, türk-yslam dolandyryş medeniýetini gadymy siwilizasiýalaryň merkezinde berkitdiler.' },
      { icon:'swords', title:'Wahalary goramak', text:'Soňky asyrlarda türkmen tireleri özleriniň wahalaryny we kerwenlerini goňşy çozuşlaryndan goramaga mejbur bolupdyrlar; bu göreşler halk hakydasynyň möhüm bölegi bolup galýar.' },
      { icon:'flag', title:'Gökdepe söweşi (1881)', text:'Teke tiresiniň Gökdepe galasyndaky Orsýet goşunyna garşy durmagy — tutanýerliligiň nyşany, şol bir wagtda-da türkmen taryhynyň iň agyr pursatlarynyň biri.' },
      { icon:'shield', title:'1916-njy ýyl gozgalaňy', text:'Birinji jahan urşy üçin mejbury çagyryşdan soň Merkezi Aziýada, şol sanda türkmenleriň arasynda hem Orsýet imperiýasyna garşy giň gozgalaň turdy.' },
      { icon:'swords', title:'Basmaçylyk hereketi', text:'1920-nji ýyllarda käbir türkmen toparlary beýleki Merkezi Aziýa halklary bilen bilelikde Sowet düzgünine garşy Basmaçylyk hereketine goşuldylar.' },
      { icon:'quote', title:'Ikinji jahan urşundaky goşant', text:'Beýleki Sowet halklary ýaly türkmenler hem Ikinji jahan urşunyň frontlaryna esgerlerini iberdiler; şol döwrüň ýadygärlikleri henizem türkmen şäherlerinde saklanýar.' },
      { icon:'flag', title:'Hemişelik Bitaraplyk (1995-den bäri)', text:'Garaşsyz Türkmenistan harby bloklara goşulmagyň deregine hemişelik Bitaraplyk syýasatyny saýlap aldy; bu çemeleşme ýurduň daşary syýasatynyň özenini düzýär.' }
    ]
  },

  clothing:{
    intro:'Türkmeniň milli egin-eşigi gurak çöl howasyna akylly jogapdyr: ýeňil ýüpek matalar, ýylylyk saklaýan ýüň telpekler we diňe bezeg däl, eýsem durmuş ýagdaýyny hem-de gorag ynanjyny aňladýan kümüş şaý-sepler.',
    men:[
      { icon:'shirt', name:'Telpek', badge:'Milli erkek başgaby', text:'Garagul goýnunyň derisinden taýýarlanan giň telpek tomus yssydan, gyş sowukdan gorap, hormat-mertebäniň nyşany hasaplanýar; ony resmi ýerde kimdir biriniň kellesinden aýyrmak uly kemsitme hasaplanýar.' },
      { icon:'shirt', name:'Don (çapan)', badge:'Uzyn eşik', text:'Ýüňden ýa-da zolakly ýüpekden tikilen uzyn, dar ýeňli don köýnegiň üstünden geýilýär we "guşak" diýilýän mata bilen berkidilýär.' },
      { icon:'shirt', name:'Köýnek', badge:'Erkek köýneginiň esasy görnüşi', text:'Pagtadan tikilen giň köýnek erkekleriň gündelik eşiginiň esasyny düzýär we giň balak bilen bile geýilýär.' },
      { icon:'shirt', name:'Börük we kepbe', badge:'Aşaky başgap', text:'Kelläniň hemişe ýapyk bolmagy üçin telpegiň aşagyndan geýilýän kiçi tegelek başgap; kepbe bolsa gündelik iş üçin has ýeňil görnüşdir.' }
    ],
    women:[
      { icon:'gem', name:'Aýal köýnegi', badge:'Uzyn köýnek', text:'Gyzyl "keteni" ýüpeginden tikilen uzyn köýnek, kümüş we akyk daşlar bilen bezelen "ýaka" diýilýän keşdeli ýaka bilen görnükli bolýar.' },
      { icon:'gem', name:'Çyrpy', badge:'Dabaraly eşik', text:'Durmuşa çykan aýallaryň kellesinden aşak taşlaýan uzyn eşigi; hiç haçan geýilmeýän bezeg ýeňleri arka tarapdan asylyp galýar we goç şahy hem-de ýaşaýyş agajy nagyşlary bilen keşdelenýär.' },
      { icon:'gem', name:'Balak', badge:'Giň balak', text:'Keşdeli gyra bilen bezelen giň balak, uzyn köýnegiň aşagyndan geýilýär; nagyşlarynda bereket we rysgal simwollary gaýtalanýar.' },
      { icon:'gem', name:'Kümüş we akyk şaý-sepler', badge:'Milli şaý-sepler', text:'Gyzyl akyk daşlary bilen bezelen kümüş monjuklar, täç we asma şaý-sepler aýallaryň durmuş ýagdaýyny görkezýär hem-de gadymy gorag ynanjyny özünde jemleýär.' }
    ]
  },

  cuisine:{
    intro:'Türkmen aşpezçiligi göçme durmuşyň mirasyny göterýär: et, tüwi we un bilen taýýarlanýan ýönekeý, ýöne güýçli tagamlar, iň az bezeg bilen iň uly myhmansöýerlik duýgusyny saçaga getirýär.',
    dishes:[
      { icon:'bowl', name:'Türkmen palawy', text:'Goýun eti, käşir we sogan bilen taýýarlanýan tüwi tagamy; goňşy halklaryňkydan tapawutlylykda adatça az ýaglydyr we et bilen gök önümiň tebigy tagamyny saklaýar.' },
      { icon:'bowl', name:'Çekdirme', text:'Çoýun gazanda gatlak-gatlak taýýarlanýan et-tüwi tagamy; pomidor, sogan we ýönekeý ýertimler onuň tagamyny emele getirýär.' },
      { icon:'bowl', name:'Gutap', text:'Et, kartoşka, ysmanak ýa-da kädi bilen dolduryp, sajda ýa-da gazanda gowrulýan ýuka çörek görnüşi.' },
      { icon:'bowl', name:'Içlekli', text:'Et we sogan bilen taýýarlanýan pirog; asyl görnüşinde çölüň gyzgyn çägesinde bişirilipdir — türkmen aşpezçiliginiň çöl şertine uýgunlaşan aýdyň mysaly.' },
      { icon:'bowl', name:'Manty', text:'Etli hamyr, bugda bişirilip, tutuş Merkezi Aziýada tanalýar; türkmen görnüşi köplenç bol sogan bilen tagamlandyrylýar.' },
      { icon:'bowl', name:'Çörek', text:'Tegelek milli çörek — nahardan öňem myhmansöýerligiň we hormatyň nyşany; köp dessurlarda myhmana ilki täze çörek hödürlenýär.' },
      { icon:'bowl', name:'Gök çaý', text:'Türkmen saçagynyň hemişelik içgisi bolan gök çaý, käte gury miwe ýa-da ýalpyldawuk ýalpar ýaly ösümlikler bilen içilýär.' },
      { icon:'bowl', name:'Pişme', text:'Ýönekeý hamyrdan taýýarlanýan, ýagda gowrulýan süýji tagam; toý-baýramlarda hödür-kerem hökmünde berilýär.' }
    ]
  },

  language:{
    intro:'Türkmen dili türk dilleriniň günbatar oguz şahasyna degişlidir; bu maşgala düýp türk, azerbaýjan we horasan türk dillerini hem öz içine alýar, şonuň üçin bu dilleriň gepleýjileri biri-birini belli bir derejede düşünip bilýärler.',
    facts:[
      { icon:'letters', text:'Köp türk dilleri ýaly türkmen dili hem "sesleriň sazlaşygy" kadasyna eýerýär; ýagny bir sözdäki sesler adatça bir toparyň (öň ýa-da yzky) çäginden saýlanýar.' },
      { icon:'scroll', text:'Bir asyryň dowamynda türkmen ýazuwy birnäçe gezek üýtgedi: asyl arap elipbiýinden, Sowet döwrüniň başynda latyn elipbiýine, soňra kirilise, ahyrynda 1993-nji ýyldan bäri Garaşsyz Türkmenistanda ýene latyn elipbiýine.' },
      { icon:'globe', text:'Eýranyň Gülüstan we Demirgazyk Horasan welaýatlaryndaky türkmenler henizem köplenç arap-pars esasly ýazuwy ulanýarlar, sebäbi Türkmenistanyň latyn ölçegi Eýranda resmi däldir.' },
      { icon:'book', text:'18-nji asyrda Magtymguly Pyragy türkmen diliniň özbaşdak edebi dil hökmünde berkidilmeginde uly rol oýnady; onuň eserleri şu güne çenli türkmen dili we edebiýaty okatmagyň esasy çeşmesi bolup galýar.' }
    ],
    alphabet:[
      { letter:'ý', sound:'"ý" — türk dilindäki ýumşak "y" sesi' },
      { letter:'ň', sound:'burun sesi, "ng" ýaly' },
      { letter:'ö', sound:'tegelek öň basgançak sesi' },
      { letter:'ü', sound:'tegelek, ýapyk öň basgançak sesi' },
      { letter:'w', sound:'dodak "w" sesi' },
      { letter:'ž', sound:'"j" bilen "ş" arasyndaky ses' },
      { letter:'ş', sound:'"ş" sesi' },
      { letter:'ç', sound:'"ç" sesi' }
    ]
  },

  people:{
    intro:'Rowaýatdaky serdarlardan tä imperiýalaryň esaslandyryjylaryna çenli, türkmenleriň umumy hakydasy mif bilen resmi taryhyň sazlaşygydyr.',
    items:[
      { icon:'feather', name:'Oguz han', era:'Rowaýat gahrymany', text:'Oguz dessanlarynda Oguz han oguz taýpalarynyň esaslandyryjy ata-babasy hökmünde beýan edilýär we şoňa görä türkmen halkynyň nyşany hasaplanýar.' },
      { icon:'book', name:'Gorkut ata (Dede Korkut)', era:'Akyldar we rowaýatçy', text:'Gorkut ata türkmenleriň, türkleriň we azerbaýjanlaryň umumy rowaýat gahrymany bolan akyldar-bagşydyr; oňa degişlidilýän kitap iň gadymy oguz dessanlarynyň biridir.' },
      { icon:'shield', name:'Togrul Beg', era:'11-nji asyr', text:'Oguz taýpalaryndan gelip çykan Seljuk imperiýasynyň esaslandyryjysy; bu döwlet türk dilini we medeniýetini Eýranyň hem-de Anadolynyň merkezine çenli ýaýratdy.' },
      { icon:'book', name:'Döwletmämmet Azady', era:'18-nji asyr', text:'Sopy alym we şahyr, Magtymguly Pyragynyň kakasy hem-de mugallymy; türkmen dilinde ýazan ilkinji edebiýatçylaryň biri hasaplanýar.' },
      { icon:'feather', name:'Magtymguly Pyragy', era:'takmynan 1724–1807', text:'Türkmenleriň milli şahyry we akyldary; goşgulary türkmenleriň umumy dil we medeni kimligini şekillendirdi, häzir Eýranda, Türkmenistanda we Owganystanda deň derejede hormatlanýar.' },
      { icon:'swords', name:'Görogly', era:'Dessan gahrymany', text:'Merkezi Aziýa we Kawkaz türki halklarynda ýaýran umumy Görogly dessanynyň gahrymany; adalat we sütemine garşy göreşiň nyşany.' },
      { icon:'feather', name:'Kemine', era:'18-nji asyryň ahyry — 19-njy asyryň başy', text:'Ýönekeý, ýiti dilli şahyr, döwrüniň durmuş adalatsyzlyklaryny henekli setirlerde beýan edipdir.' }
    ]
  },

  poets:{
    intro:'Türkmen edebiýaty ilkinji nobatda dilden-dile geçýän aýdym-dessan edebiýaty bolupdyr; ýöne 18-nji asyrdan başlap şahyrlar türkmen dilini pelsepäniň, tasawwufyň we milli kimligiň serişdesine öwürdiler.',
    items:[
      { icon:'book', name:'Döwletmämmet Azady', years:'18-nji asyr', text:'Sopy alym hem şahyr, goşgy bilen bir hatarda ahlak we terbiýe meselelerine hem üns berdi; ogly Magtymgulynyň kemala gelen pikir gurşawyny esaslandyrdy.' },
      { icon:'feather', name:'Magtymguly Pyragy', years:'takmynan 1724–1807', text:'Halk aýdymyna ýakyn "goşuk" görnüşinde söýgi, sosial adalat we türkmen tireleriniň agzybirligi barada ýazdy; onuň dili we pikri henizem türkmen şygryýetiniň nusgasydyr.' },
      { icon:'quote', name:'Kemine', years:'takmynan 1770–1840', text:'Henekli, ýiti dilli halk şahyry, ikiýüzlülik we adalatsyzlygy tankytlap, türkmenleriň dilden-dile geçýän hakydasynda ýaşap galdy.' },
      { icon:'feather', name:'Seýitnazar Seýdi', years:'19-njy asyr', text:'Goşgularynda hem söýgi, hem öz döwrüniň tire-taýpa we durmuş kynçylyklary barada ýazan şahyr.' },
      { icon:'book', name:'Mollanepes', years:'19-njy asyr', text:'"Zöhre-Tahyr" ýaly söýgi dessanlarynyň awtory; türki we irani medeniýetlerde umumy bolan goşgy dessan däbiniň bir mysaly.' },
      { icon:'feather', name:'Nurmuhammet Andalyp', years:'18-nji asyr', text:'Türkmen dilinde uzyn goşgy dessanlaryny (dessan) ýazan ilkinji şahyrlaryň biri, dilden-dile geçýän edebiýat bilen ýazuw edebiýatynyň arasynda köpri gurdy.' },
      { icon:'quote', name:'Zelili', years:'19-njy asyr', text:'Tire uruşlarynyň jebrini, sürgünligi we ata Watana dolanmak duýgusyny goşgularynda beýan eden şahyr.' }
    ]
  },

  influences:{
    intro:'Türkmenleriň Eýran, Merkezi Aziýa we Orsýet sähralarynyň arasyndaky geografiki ýerleşişi olary medeni alyş-çalyşygyň çatrygyna öwürdi; bu täsiri haly, dil, edebiýat, hatda häzirki daşary syýasatda hem görmek bolýar.',
    items:[
      { icon:'compass', title:'Ýüpek ýoly', text:'Türkmen ýaşaýan topraklar Ýüpek ýolunyň kiçi şahalarynyň üstünde ýerleşdi; kerwenler bilen bilelikde harytlar, çeperçilik nagyşlary, din we dil hem geçip durdy.' },
      { icon:'link', title:'Halyçylyk sungaty, ÝUNESKO mirasy', text:'Türkmen halyçylyk sungaty 2019-njy ýylda ÝUNESKO-nyň adamzadyň maddy däl medeni mirasynyň sanawyna girizildi; her halynyň "gölü" gadymdan bäri tire kimligini aňladyp, soň bu nagyşlar milli baýdagyň nyşanyna hem ylham berdi.' },
      { icon:'book', title:'Umumy oguz dessan mirasy', text:'Dede Korkut we Görogly dessanlary türkmenler bilen Anadoly türkleriniň hem-de azerbaýjanlaryň arasynda umumydyr; bu üç halkyň häzir aýry-aýry edebi ýollary bolsa-da, umumy oguz köküni görkezýär.' },
      { icon:'feather', title:'Pars edebiýaty bilen aragatnaşyk', text:'Magtymguly we onuň kakasy Döwletmämmet Azady ýaly şahyrlar türkmen dili bilen bir hatarda pars we arap dillerinde-de bilim aldylar; pars şygryýetiniň tasawwuf many-many mazmuny türkmen diliniň üsti bilen hem beýan boldy.' },
      { icon:'horse', title:'Ahalteke atynyň dünýä täsiri', text:'Käbir taryhçylar türkmen çölünde ösdürilip ýetişdirilen ahalteke atynyň, goňşy halklar bilen taryhy alyş-çalyşyklar arkaly dünýädäki käbir arassa ganly at tohumlarynyň emele gelmegine täsir edendigini çaklaýarlar; ýöne bu pikir henizem taryhy jedel mowzugydyr.' },
      { icon:'scroll', title:'Sowet döwrüniň mirasy', text:'Sowet döwri bir tarapdan käbir dini we tire dessurlaryny çäklendiren bolsa, beýleki tarapdan hemmeler üçin bilim we türkmen edebiýatynyň çap edilmegini giňeltdi; bu goşa miras häzirki binagärlikde hem-de bilim ulgamynda görünýär.' },
      { icon:'flag', title:'Bitaraplyk — diplomatik kimlik hökmünde', text:'Garaşsyzlyk döwründe Türkmenistan harby bloklara goşulmagyň deregine hemişelik Bitaraplygy saýlap aldy; bu saýlaw häzir ýurduň halkara kimliginiň bir bölegi hasaplanýar.' }
    ]
  }
}
};
