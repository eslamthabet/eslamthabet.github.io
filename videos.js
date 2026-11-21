/*
أهلاً يا إسلام 👋 ده الملف الوحيد اللي محتاج تعدّله لإضافة أو حذف فيديو.

الطريقة:
1) انسخ أي مجموعة من القوس { لحد القوس } والفاصلة اللي بعده.
2) حطها بعد السطر window.PORTFOLIO_VIDEOS = [ مباشرةً لو عايز الجديد يظهر أولاً.
3) غيّر title (الاسم)، description (الوصف)، thumbnail (الصورة)، url (لينك الفيديو).
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
  description: "جملة قصيرة توصف العمل",
  thumbnail: "assets/new-video.jpg",
  url: "ضع هنا رابط المشاهدة الكامل",
},

مهم: هذه ليست شاشة رفع فيديوهات. الملف ده هو لوحة تعديل المعرض البسيطة.
*/

window.PORTFOLIO_VIDEOS = [
  {
    title: "نجوم الفن | بين الشباب والكبر",
    description: "رحلة بصرية بين ملامح الشباب ومرور السنين.",
    thumbnail: "assets/work-1.jpg",
    url: "https://www.youtube.com/watch?v=3Ebk-I2rVK8",
  },
  {
    title: "بين الشباب والكبر | النسخة الكاملة",
    description: "حكاية أطول تستعيد وجوهًا وذكريات من عالم الفن.",
    thumbnail: "assets/work-2.jpg",
    url: "https://www.youtube.com/watch?v=tYHs_pclmeE",
  },
  {
    title: "جينات الفن",
    description: "تشابه الملامح بين الآباء والأبناء في تصور بصري متخيل.",
    thumbnail: "assets/work-3.jpg",
    url: "https://www.tiktok.com/@eslamtgd/video/7636066135456173332",
  },
  {
    title: "سيلفي من الكواليس",
    description: "لقطات متخيلة تعيد أجواء كواليس السينما بالذكاء الاصطناعي.",
    thumbnail: "assets/work-4.jpg",
    url: "https://www.tiktok.com/@eslamtgd/video/7584573417316224277",
  },
  {
    title: "كونوا لطفاء مع الناس",
    description: "رسالة إنسانية بأسلوب الرسوم المتحركة والحكي البصري.",
    thumbnail: "assets/work-5.jpg",
    url: "https://www.tiktok.com/@eslamtgd/video/7694355290526895381",
  },
  {
    title: "تمثال أبو هيبة",
    description: "تجربة فنية في النحت والتحول البصري بالذكاء الاصطناعي.",
    thumbnail: "assets/work-6.jpg",
    url: "https://www.youtube.com/shorts/_B_yefLhfl0",
  },
];
