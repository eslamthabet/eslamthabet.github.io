/*
أهلاً يا إسلام 👋 ده الملف الوحيد اللي محتاج تعدّله لإضافة أو حذف فيديو.

الطريقة:
1) انسخ أي مجموعة من القوس { لحد القوس } والفاصلة اللي بعده.
2) حطها بعد السطر window.PORTFOLIO_VIDEOS = [ مباشرةً لو عايز الجديد يظهر أولاً.
3) غيّر title (الاسم بالعربي)، titleEn (الاسم بالإنجليزي)، description (الوصف بالعربي)، descriptionEn (الوصف بالإنجليزي)، thumbnail (الصورة)، url (لينك الفيديو).
category للفئة: stories للحكايات، cinema للسينما، art للتجارب الفنية.
4) سيب علامات التنصيص الإنجليزية " " والفواصل زي ما هي.
5) ارفع التعديل على GitHub بزر Commit changes.

الصورة:
ارفع الصورة داخل فولدر assets في GitHub وسمّها مثلاً new-video.jpg.
اكتب thumbnail: "assets/new-video.jpg" مع مراعاة الحروف الكبيرة والصغيرة.
تقدر تستخدم لينك HTTPS مباشر لصورة بدل ملف محلي، لكن الصورة المحلية أفضل.
لا تستخدم لينك صفحة مشاهدة مكان لينك الصورة.

الفيديو: لينك المشاهدة الكامل من YouTube أو TikTok. لا ترفع ملف الفيديو على GitHub.
ترتيب المجموعات هنا هو نفس ترتيب الفيديوهات في الموقع.
لا تكتب علامة تنصيص مزدوجة داخل العنوان نفسه. استخدم ' لو محتاج.

مثال للنسخ (انسخ المجموعة فقط من هنا، خارج التعليق):
{
  title: "اسم الفيديو الجديد",
  titleEn: "New video title",
  description: "جملة قصيرة توصف العمل",
  descriptionEn: "A short description of the work",
  category: "stories",
  thumbnail: "assets/new-video.jpg",
  url: "ضع هنا رابط المشاهدة الكامل",
},

مهم: هذه ليست شاشة رفع فيديوهات. الملف ده هو لوحة تعديل المعرض البسيطة.
*/

window.PORTFOLIO_VIDEOS = [
  {
    title: "نجوم الفن | بين الشباب والكبر",
    titleEn: "Art Stars | Between Youth and Old Age",
    descriptionEn: "A visual journey through youth, familiar faces and the passing years.",
    category: "stories",
    description: "رحلة بصرية بين ملامح الشباب ومرور السنين.",
    thumbnail: "assets/work-1.jpg",
    url: "https://www.youtube.com/watch?v=3Ebk-I2rVK8",
  },
  {
    title: "بين الشباب والكبر | النسخة الكاملة",
    titleEn: "Between Youth and Old Age | Full Film",
    descriptionEn: "A longer visual story revisiting faces and memories from the world of cinema.",
    category: "stories",
    description: "حكاية أطول تستعيد وجوهًا وذكريات من عالم الفن.",
    thumbnail: "assets/work-2.jpg",
    url: "https://www.youtube.com/watch?v=tYHs_pclmeE",
  },
  {
    title: "جينات الفن",
    titleEn: "Genes of Art",
    descriptionEn: "An imagined visual study of resemblance between actors and their sons.",
    category: "cinema",
    description: "تشابه الملامح بين الآباء والأبناء في تصور بصري متخيل.",
    thumbnail: "assets/work-3.jpg",
    url: "https://www.tiktok.com/@eslamtgd/video/7636066135456173332",
  },
  {
    title: "سيلفي من الكواليس",
    titleEn: "A Selfie Behind the Scenes",
    descriptionEn: "Imagined moments bringing the atmosphere of film sets to life with AI.",
    category: "cinema",
    description: "لقطات متخيلة تعيد أجواء كواليس السينما بالذكاء الاصطناعي.",
    thumbnail: "assets/work-4.jpg",
    url: "https://www.tiktok.com/@eslamtgd/video/7584573417316224277",
  },
  {
    title: "كونوا لطفاء مع الناس",
    titleEn: "Be Kind to People",
    descriptionEn: "A human message told through animation and visual storytelling.",
    category: "stories",
    description: "رسالة إنسانية بأسلوب الرسوم المتحركة والحكي البصري.",
    thumbnail: "assets/work-5.jpg",
    url: "https://www.tiktok.com/@eslamtgd/video/7694355290526895381",
  },
  {
    title: "تمثال أبو هيبة",
    titleEn: "Abu Heiba Sculpture",
    descriptionEn: "An AI-powered experiment in sculpture and visual transformation.",
    category: "art",
    description: "تجربة فنية في النحت والتحول البصري بالذكاء الاصطناعي.",
    thumbnail: "assets/work-6.jpg",
    url: "https://www.youtube.com/shorts/_B_yefLhfl0",
  },
];

/*
إعلانات العملاء: القسم جاهز ومخفي تلقائيًا طالما القائمة فارغة.
لإظهار القسم، غيّر [] إلى قائمة تحتوي مجموعات الإعلانات بنفس الحقول أعلاه.
ضع الإعلانات داخل PORTFOLIO_ADS وليس PORTFOLIO_VIDEOS.
مثال البنية: window.PORTFOLIO_ADS = [ { بيانات الإعلان }, ];
أضف title وtitleEn وdescription وdescriptionEn وthumbnail وurl.
لا يحتاج الإعلان إلى category لأنه لا يدخل فلاتر المختارات.
احذف آخر إعلان فيختفي القسم تلقائيًا، دون تعديل HTML أو CSS.
لو تركت titleEn أو descriptionEn فارغًا سيظهر النص العربي كبديل في الإنجليزية.
*/
window.PORTFOLIO_ADS = [
  {
    "title": "VERTEX | انتعاش أزرق",
    "titleEn": "VERTEX | Blue Energy",
    "description": "VERTEX",
    "descriptionEn": "VERTEX",
    "thumbnail": "assets/ad-10.jpg",
    "url": "https://www.instagram.com/reel/DU7ukaeCLAR/",
    "format": "portrait"
  },
  {
    "title": "حكاية اهتمام",
    "titleEn": "A Story of Care",
    "description": "جمعية الوفاء للوالدين",
    "descriptionEn": "Al Wafaa Lelwalidain",
    "thumbnail": "assets/ad-1.jpg",
    "url": "https://www.tiktok.com/@alwafaa.org/video/7706550477789433109",
    "format": "portrait"
  },
  {
    "title": "حكاية رعاية",
    "titleEn": "A Story of Support",
    "description": "حكايات توعوية",
    "descriptionEn": "Awareness Stories",
    "thumbnail": "assets/ad-7.jpg",
    "url": "https://www.tiktok.com/@neheartonesoul1447ah/video/7692195027254136085",
    "format": "wide"
  },
  {
    "title": "VERTEX | أجواء رمضان",
    "titleEn": "VERTEX | Ramadan Mood",
    "description": "VERTEX",
    "descriptionEn": "VERTEX",
    "thumbnail": "assets/ad-6.jpg",
    "url": "https://www.tiktok.com/@vertexnutrition/video/7604562665725381895",
    "format": "portrait"
  },
  {
    "title": "لحظة وفاء",
    "titleEn": "A Moment of Gratitude",
    "description": "جمعية الوفاء للوالدين",
    "descriptionEn": "Al Wafaa Lelwalidain",
    "thumbnail": "assets/ad-3.jpg",
    "url": "https://www.tiktok.com/@alwafaa.org/video/7699855309984107797",
    "format": "portrait"
  },
  {
    "title": "VERTEX | مشهد الصحراء",
    "titleEn": "VERTEX | Desert Scene",
    "description": "VERTEX",
    "descriptionEn": "VERTEX",
    "thumbnail": "assets/ad-11.jpg",
    "url": "https://www.instagram.com/reel/DUvLs6-CIeg/",
    "format": "portrait"
  },
  {
    "title": "حكاية أمل",
    "titleEn": "A Story of Hope",
    "description": "حكايات توعوية",
    "descriptionEn": "Awareness Stories",
    "thumbnail": "assets/ad-8.jpg",
    "url": "https://www.tiktok.com/@neheartonesoul1447ah/video/7692194197926939925",
    "format": "wide"
  },
  {
    "title": "وقت نتشارك فيه",
    "titleEn": "Time Together",
    "description": "جمعية الوفاء للوالدين",
    "descriptionEn": "Al Wafaa Lelwalidain",
    "thumbnail": "assets/ad-2.jpg",
    "url": "https://www.tiktok.com/@alwafaa.org/video/7708027987492457735",
    "format": "portrait"
  },
  {
    "title": "عم فرغلي",
    "titleEn": "Am Farghaly",
    "description": "عم فرغلي",
    "descriptionEn": "Am Farghaly",
    "thumbnail": "assets/ad-farghaly.svg",
    "url": "https://www.tiktok.com/@amfarghaly..2/video/7634970284721818888",
    "format": "portrait"
  },
  {
    "title": "لمة البيت",
    "titleEn": "Family Moments",
    "description": "جمعية الوفاء للوالدين",
    "descriptionEn": "Al Wafaa Lelwalidain",
    "thumbnail": "assets/ad-5.jpg",
    "url": "https://www.tiktok.com/@alwafaa.org/video/7702468421325212946",
    "format": "portrait"
  },
  {
    "title": "خطوة جنبك",
    "titleEn": "A Walk Together",
    "description": "جمعية الوفاء للوالدين",
    "descriptionEn": "Al Wafaa Lelwalidain",
    "thumbnail": "assets/ad-4.jpg",
    "url": "https://www.tiktok.com/@alwafaa.org/video/7695390463787896084",
    "format": "portrait"
  }
];
