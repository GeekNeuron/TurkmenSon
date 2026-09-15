# TurkmenSon

**TurkmenSon** یک وب‌سایت/داشبورد متن‌باز و دوزبانه (فارسی و ترکمنی) دربارهٔ فرهنگ، تاریخ، پوشاک، غذا، زبان، چهره‌های ماندگار، شاعران و میراث مردم ترکمن است. پروژه با **HTML + CSS + جاوااسکریپت خالص** ساخته شده؛ بدون نیاز به build step، فریم‌ورک یا وابستگی npm — یعنی مستقیم روی GitHub Pages یا هر هاست استاتیک دیگری اجرا می‌شود.

TurkmenSon is a free, open, bilingual (Persian / Turkmen) reference site covering Turkmen history, traditional dress, cuisine, language, notable figures, poets, and cultural influences. It is plain HTML/CSS/JS — no build step, no framework, no npm dependency — so it runs as-is on GitHub Pages or any static host.

---

## ✨ ویژگی‌ها | Features

- 🌗 **دو پوسته روشن/تاریک** با انیمیشن نرم و ذخیرهٔ انتخاب کاربر (`localStorage`)
- 🌐 **دو زبان کامل**: فارسی (راست‌به‌چپ) و ترکمنی با خط لاتین رسمی (چپ‌به‌راست) — سوییچ لحظه‌ای جهت و چیدمان
- 📱 **واکنش‌گرا**: نوار کناری تاشو در موبایل، چیدمان گرید در دسکتاپ
- 🎨 **تمام اجزای رابط کاربری سفارشی** — منوی کشویی زبان، جست‌وجو، دکمه‌ها، کارت‌ها، تایم‌لاین؛ هیچ‌کدام از عناصر پیش‌فرض مرورگر استفاده نشده
- 🖱️ حذف کامل هایلایت لمسی/کلیک پیش‌فرض مرورگر (`tap-highlight-color: transparent`) و جایگزینی با استایل فوکوس اختصاصی
- 🎞️ انیمیشن‌های ورودی نرم (reveal on scroll) با `IntersectionObserver` و انتقال‌های ملایم روی هاور/کلیک
- 🖼️ **همهٔ آیکون‌ها SVG دستی و بدون کتابخانهٔ خارجی** (`js/icons.js`)
- 🔎 جست‌وجوی زندهٔ سبک در داخل هر بخش
- 🗂️ ۹ بخش محتوایی: داشبورد، تاریخ، جنگ و صلح، پوشاک، غذاها، زبان، چهره‌های ماندگار، شاعران و فرزانگان، تأثیرات و میراث

---

## 📁 ساختار پروژه | Project structure

```
turkmenson/
├── index.html          # اسکلت اصلی صفحه (App Shell)
├── css/
│   └── style.css       # توکن‌های طراحی، تم روشن/تاریک، تمام کامپوننت‌ها
├── js/
│   ├── icons.js         # مجموعه آیکون‌های SVG دست‌ساز
│   ├── data.js          # محتوای دوزبانهٔ تمام بخش‌ها
│   └── app.js            # روتینگ، تم، زبان، رندر، تعامل‌ها
└── README.md
```

هیچ وابستگی بیرونی‌ای جز فونت **Vazirmatn** (از Google Fonts، برای فارسی و لاتین ترکمنی) بارگذاری نمی‌شود.

No external dependency other than the **Vazirmatn** web font (loaded from Google Fonts, used for both Persian and Latin-script Turkmen text).

---

## 🚀 اجرا روی GitHub Pages | Deploy to GitHub Pages

1. یک ریپازیتوری جدید در گیت‌هاب بسازید (مثلاً `turkmenson`).
2. محتوای این پوشه را در ریشهٔ ریپازیتوری push کنید:
   ```bash
   git init
   git add .
   git commit -m "TurkmenSon: initial release"
   git branch -M main
   git remote add origin https://github.com/<username>/turkmenson.git
   git push -u origin main
   ```
3. در گیت‌هاب به مسیر **Settings → Pages** بروید.
4. زیر «Build and deployment»، گزینهٔ **Deploy from a branch** را انتخاب کنید، شاخهٔ `main` و پوشهٔ `/ (root)` را تنظیم کنید و ذخیره کنید.
5. پس از چند دقیقه، سایت روی آدرسی مانند `https://<username>.github.io/turkmenson/` در دسترس خواهد بود.

برای اجرای محلی، کافی است `index.html` را با یک سرور استاتیک ساده باز کنید (به‌دلیل واکشی فونت آنلاین، اتصال اینترنت لازم است):
```bash
npx serve .
# یا
python3 -m http.server 8080
```

---

## 🧩 توسعه و افزودن محتوا | Extending the content

تمام متن‌های قابل‌نمایش در `js/data.js` نگه‌داری می‌شوند، در دو شاخهٔ `DATA.fa` و `DATA.tk` با ساختاری کاملاً یکسان. برای افزودن مورد جدید (مثلاً یک غذای دیگر) کافی‌ست یک آبجکت مشابه به آرایهٔ مربوطه در **هر دو زبان** اضافه کنید؛ رابط کاربری به‌صورت خودکار آن را رندر می‌کند. برای افزودن بخش کاملاً جدید:

1. یک آیتم به `NAV_ITEMS` در `data.js` اضافه کنید (شناسه + نام آیکون).
2. کلید هم‌نام را به `nav`, `subtitle`, `explore` و بلوک محتوای اصلی در هر دو `fa` و `tk` اضافه کنید.
3. یک تابع `render...()` متناظر در `js/app.js` بنویسید و آن را به `switch` داخل تابع `render()` اضافه کنید.
4. در صورت نیاز، آیکون تازه را به `ICONS` در `js/icons.js` اضافه کنید (فقط SVG با `currentColor`).

---

## 🎨 دربارهٔ طراحی | Design notes

پالت رنگی از رنگ‌های واقعی صنایع‌دستی ترکمنی الهام گرفته شده: قرمز ریشه‌ی روناسِ قالی (`--primary`)، اُخرِ صحرا (`--secondary`) و فیروزه‌ای تیره‌شدهٔ نقره (`--accent`) روی زمینه‌ای کِرِم‌رنگِ پشم خام؛ به‌جای پالت رایج «کِرِم + نارنجی‌سوخته»ی رابط‌های تولیدشده با هوش مصنوعی. الگوی هندسی «گل» قالی ترکمن در هدر و آیکون‌ها بازتاب یافته است.

The palette is drawn from real Turkmen material culture — madder-root carpet red, desert ochre, and oxidised-silver teal on raw-wool cream — rather than the generic cream/burnt-orange look common in AI-generated UIs. The carpet "gul" motif recurs in the hero pattern and decorative dividers.

---

## ⚠️ یادداشت دربارهٔ محتوا و ترجمه | Content & translation notes

- محتوای این پروژه **خلاصه‌ای آموزشی** بر پایهٔ منابع عمومی (دانشنامه‌ای و پژوهشی در دسترس) است، نه یک منبع دانشگاهی قطعی. پیش از استناد پژوهشی، به منابع تخصصی و بومی مراجعه کنید.
- متن ترکمنی توسط مدل هوش مصنوعی (با تلاش برای دقت زبانی) نوشته شده و **پیش از انتشار رسمی، بازبینی یک گویشور بومی ترکمن اکیداً توصیه می‌شود**.
- دربارهٔ رویدادهای حساس تاریخی و سیاسی (مانند دوران استعمار روسیه یا سیاست‌های شوروی)، سعی شده لحنی بی‌طرف و واقع‌گرایانه حفظ شود؛ در صورت مشاهدهٔ هرگونه نادقتی، خوشحال می‌شویم اصلاح شود (Issue/PR باز کنید).
- The Turkmen (Latin-script) text was produced with AI assistance; native-speaker review is strongly recommended before any official publication.

---

## 🔍 دربارهٔ الهام‌گیری | On open-source inspiration

پیش از ساخت، چند پروژهٔ متن‌باز مرتبط با «داشبورد میراث فرهنگی» و «سایت‌های دوزبانه» بررسی شد (برای نمونه رویکرد سبک i18n مبتنی بر دیتای جاوااسکریپت در سایت‌های Jekyll دوزبانه، و ابزارهای متن‌باز حوزهٔ GLAM/میراث فرهنگی مانند پروژه‌های Europeana). بیشتر این پروژه‌ها یا بر پایهٔ فریم‌ورک‌های سنگین (Jekyll، Symfony، پایگاه‌داده) بودند یا حوزهٔ کاربردشان متفاوت بود (آرشیو موزه‌ای/کاتالوگ داده)، بنابراین به‌جای وندور کردن یک ریپازیتوری کامل، همان ایدهٔ سبک «یک آبجکت دیتای جاوااسکریپت به‌ازای هر زبان + رندر پویا» به‌صورت اختصاصی برای TurkmenSon بازنویسی شد تا وابستگی به صفر برسد و روی GitHub Pages بدون هیچ مرحلهٔ ساخت اجرا شود.

---

## 📄 مجوز | License

می‌توانید یک فایل `LICENSE` (برای نمونه MIT) به دلخواه خودتان به ریشهٔ ریپازیتوری اضافه کنید؛ این پروژه به‌عنوان نمونهٔ اولیه بدون مجوز خاصی تحویل داده شده تا خودتان مجوز نهایی را بر پایهٔ نیاز پروژه انتخاب کنید.

You may add a `LICENSE` file of your choice (MIT is a common pick for a project like this); none is bundled so you can decide based on your own needs.
