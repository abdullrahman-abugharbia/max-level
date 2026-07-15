/* ============================================================
   Max Level KSA — main script
   Language toggle (AR default / EN), mobile nav, scroll reveal.
   ============================================================ */

const I18N = {
  ar: {
    "meta.title": "مؤسسة الحد الأعلى لتقنية المعلومات | Max Level IT",
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.clients": "عملاؤنا",
    "nav.contact": "تواصل معنا",
    "header.cta": "واتساب",
    "hero.eyebrow": "مؤسسة الحد الأعلى لتقنية المعلومات — الرياض",
    "hero.title": "نرتقي بأعمالك إلى الحدّ الأعلى",
    "hero.sub": "شريكك الموثوق في تطوير البرمجيات والمواقع والتطبيقات — من قلب الرياض، المملكة العربية السعودية",
    "hero.cta1": "راسلنا على واتساب",
    "hero.cta2": "استعرض خدماتنا",
    "hero.trustLabel": "شركاء يثقون بنا",
    "about.eyebrow": "من نحن",
    "about.title": "مؤسسة سعودية متخصصة في تقنية المعلومات",
    "about.lead": "مؤسسة الحد الأعلى لتقنية المعلومات مؤسسة سعودية مقرها الرياض، متخصصة في تطوير البرمجيات والمواقع والتطبيقات.",
    "about.body": "نعمل مع منشآت القطاع الخاص لتحويل أفكارها إلى حلول رقمية عملية — من المواقع الإلكترونية والمتاجر إلى تطبيقات الجوال والأنظمة المخصصة — بجودة عالية ودعم مستمر بعد التسليم.",
    "about.point1": "مؤسسة مسجلة رسمياً لدى وزارة التجارة",
    "about.point2": "مقرنا حي العليا في الرياض",
    "about.point3": "عملاء من قطاعات الصحة والصيدلة وغيرها",
    "services.eyebrow": "خدماتنا",
    "services.title": "حلول برمجية متكاملة",
    "services.sub": "نصمم ونطور ونشغّل الحلول الرقمية التي تحتاجها منشأتك",
    "svc1.title": "تطوير المواقع الإلكترونية",
    "svc1.desc": "مواقع تعريفية وشركات سريعة ومتجاوبة مع جميع الأجهزة، بتصميم عصري يعكس هوية علامتك التجارية.",
    "svc2.title": "تطبيقات سطح المكتب",
    "svc2.desc": "برامج تعمل على أنظمة ويندوز بأداء عالٍ، مصممة لإدارة أعمالك مباشرة من جهازك.",
    "svc3.title": "تطبيقات الجوال",
    "svc3.desc": "تطبيقات iOS وAndroid بتجربة استخدام سلسة، من الفكرة إلى النشر في المتاجر.",
    "svc4.title": "البرمجيات المخصصة",
    "svc4.desc": "أنظمة مبنية خصيصاً لاحتياج منشأتك عندما لا تكفي الحلول الجاهزة.",
    "svc5.title": "المتاجر الإلكترونية",
    "svc5.desc": "متاجر إلكترونية متكاملة مع بوابات الدفع وإدارة المنتجات والطلبات.",
    "svc6.title": "الدعم الفني والصيانة",
    "svc6.desc": "عقود صيانة ودعم مستمر لضمان استقرار أنظمتك وتطويرها بعد الإطلاق.",
    "why.eyebrow": "لماذا نحن",
    "why.title": "لماذا تختار الحد الأعلى؟",
    "why1.title": "جودة واحترافية",
    "why1.desc": "نلتزم بمعايير عالية في التصميم والبرمجة والاختبار قبل كل تسليم.",
    "why2.title": "مؤسسة سعودية مرخصة",
    "why2.desc": "مسجلة رسمياً لدى وزارة التجارة، وتتعامل معك بعقود واضحة وفواتير نظامية.",
    "why3.title": "تواصل ودعم مستمر",
    "why3.desc": "قنوات تواصل مباشرة ودعم فني سريع قبل الإطلاق وبعده.",
    "why4.title": "تقنيات حديثة",
    "why4.desc": "نبني حلولك بأحدث التقنيات لضمان الأداء والأمان وقابلية التوسع.",
    "clients.eyebrow": "عملاؤنا",
    "clients.title": "شركاء نفخر بثقتهم",
    "clients.sub": "قدمنا لعملائنا حلولاً وتطبيقات تقنية تخدم أعمالهم يومياً",
    "client1": "مستشفى المملكة والعيادات الاستشارية",
    "client2": "يونيفارما",
    "client3": "يونيكير فارما",
    "contact.eyebrow": "تواصل معنا",
    "contact.title": "جاهزون لخدمتك",
    "contact.sub": "تواصل معنا عبر القناة الأنسب لك وسنرد عليك في أقرب وقت",
    "contact.phone": "اتصل بنا",
    "contact.whatsapp": "واتساب",
    "contact.email": "البريد الإلكتروني",
    "contact.address": "العنوان",
    "contact.addressVal": "حي العليا، الرياض 12221، المملكة العربية السعودية",
    "footer.blurb": "مؤسسة الحد الأعلى لتقنية المعلومات — حلول برمجية بمعايير عالية من الرياض.",
    "footer.links": "روابط سريعة",
    "footer.contact": "تواصل معنا",
    "footer.rights": "© 2026 مؤسسة الحد الأعلى لتقنية المعلومات — جميع الحقوق محفوظة"
  },
  en: {
    "meta.title": "Max Level IT | Software & Web Development in Riyadh",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.clients": "Clients",
    "nav.contact": "Contact",
    "header.cta": "WhatsApp",
    "hero.eyebrow": "Max Level Information Technology — Riyadh",
    "hero.title": "Taking your business to the Max Level",
    "hero.sub": "Your trusted partner for software, web, and mobile app development — based in Riyadh, Saudi Arabia",
    "hero.cta1": "Chat on WhatsApp",
    "hero.cta2": "Explore our services",
    "hero.trustLabel": "Trusted by",
    "about.eyebrow": "About us",
    "about.title": "A Saudi establishment specialized in IT",
    "about.lead": "Max Level Information Technology is a Riyadh-based Saudi establishment specialized in software, web, and mobile app development.",
    "about.body": "We work with private-sector businesses to turn their ideas into practical digital solutions — from websites and online stores to mobile apps and custom systems — with high quality and ongoing support after delivery.",
    "about.point1": "Officially registered with the Ministry of Commerce",
    "about.point2": "Headquartered in Al-Olaya, Riyadh",
    "about.point3": "Clients across healthcare, pharma, and more",
    "services.eyebrow": "Our services",
    "services.title": "End-to-end software solutions",
    "services.sub": "We design, build, and operate the digital solutions your business needs",
    "svc1.title": "Website Development",
    "svc1.desc": "Fast, fully responsive corporate and business websites with modern designs that reflect your brand identity.",
    "svc2.title": "Desktop Applications",
    "svc2.desc": "High-performance software for Windows, built to manage your business directly from your computer.",
    "svc3.title": "Mobile Applications",
    "svc3.desc": "iOS and Android apps with a smooth user experience — from idea to store release.",
    "svc4.title": "Custom Software",
    "svc4.desc": "Systems built specifically for your business needs when off-the-shelf solutions aren't enough.",
    "svc5.title": "E-commerce Solutions",
    "svc5.desc": "Complete online stores with payment gateways, product management, and order handling.",
    "svc6.title": "Maintenance & Support",
    "svc6.desc": "Maintenance contracts and ongoing support to keep your systems stable and evolving after launch.",
    "why.eyebrow": "Why us",
    "why.title": "Why choose Max Level?",
    "why1.title": "Quality & professionalism",
    "why1.desc": "We hold ourselves to high standards in design, development, and testing before every delivery.",
    "why2.title": "Licensed Saudi establishment",
    "why2.desc": "Officially registered with the Ministry of Commerce, working with clear contracts and compliant invoices.",
    "why3.title": "Ongoing communication & support",
    "why3.desc": "Direct communication channels and fast technical support before and after launch.",
    "why4.title": "Modern technologies",
    "why4.desc": "We build your solutions with the latest technologies for performance, security, and scalability.",
    "clients.eyebrow": "Our clients",
    "clients.title": "Partners who trust us",
    "clients.sub": "We've delivered technology solutions and applications our clients rely on every day",
    "client1": "Kingdom Hospital & Consulting Clinics",
    "client2": "UniPharma",
    "client3": "Unicare Pharma",
    "contact.eyebrow": "Contact us",
    "contact.title": "Ready to serve you",
    "contact.sub": "Reach us through the channel that suits you best and we'll get back to you shortly",
    "contact.phone": "Call us",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.addressVal": "Al-Olaya, Riyadh 12221, Saudi Arabia",
    "footer.blurb": "Max Level Information Technology — high-standard software solutions from Riyadh.",
    "footer.links": "Quick links",
    "footer.contact": "Contact",
    "footer.rights": "© 2026 Max Level Information Technology — All rights reserved"
  }
};

const LANG_KEY = "maxlevel-lang";
const langToggle = document.getElementById("langToggle");

function setLang(lang) {
  const dict = I18N[lang] || I18N.ar;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = dict["meta.title"];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  langToggle.textContent = lang === "ar" ? "English" : "العربية";
  localStorage.setItem(LANG_KEY, lang);
}

langToggle.addEventListener("click", () => {
  const next = document.documentElement.lang === "ar" ? "en" : "ar";
  setLang(next);
});

setLang(localStorage.getItem(LANG_KEY) || "ar");

/* ---------- Mobile nav ---------- */
const header = document.getElementById("siteHeader");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  const open = header.classList.toggle("nav-open");
  hamburger.setAttribute("aria-expanded", open);
});

document.querySelectorAll("#mainNav a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

/* ---------- Scroll reveal ---------- */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
