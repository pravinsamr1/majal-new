const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About Us",
        "nav.solutions": "Solutions",
        "nav.services": "Services",
        "nav.awards": "Awards",
        "nav.videos": "Videos",
        "nav.blogs": "Blogs",
        "nav.contact": "Contact",
        "nav.ticket": "Submit Ticket",
        // Solutions items
        "sol.cctv": "CCTV Surveillance Solutions",
        "sol.anpr": "ANPR Solutions",
        "sol.data": "Data Networks & Data Center",
        "sol.tel": "Telephony Systems",
        "sol.pa": "Public Address & Voice Evacuation",
        "sol.av": "Audio Visual & Multimedia Control",
        "sol.access": "Access Control & Time Attendance",
        "sol.gate": "Gate Barriers, Turnstiles & Road Blockers",
        "sol.intruder": "Intruder Alarm Systems",
        "sol.fire": "Fire Alarm Systems",
        "sol.wifi": "Hotel Wi-Fi Solutions",
        "sol.xray": "X-Ray Inspection & Metal Detector Systems",
        "sol.cabling": "Structured Cabling & Fiber Networks",
        "sol.elec": "Electrical Installation & Maintenance",
        "sol.matv": "MATV Systems",
        "sol.trans": "Transmission Systems",
        "sol.ups": "UPS Power Backup Solutions",
        "sol.amc": "Annual Maintenance Contracts (AMC)",
        "sol.assoc": "Our Associates",
        "sol.ref": "Customer References",
        // Services items
        "ser.elec": "Electrical Installation & Maintenance",
        "ser.fire": "Fire Alarm System",
        // Slide 1
        "slider.s1_title": "Integrated Low Current & Security Solutions",
        "slider.s1_desc": "Dedicated to professionalism, integrity, and client focus, we are at the forefront of the low current and integrated security industries in Saudi Arabia.",
        // Slide 2
        "slider.s2_title": "Advanced Networking & Structured Cabling",
        "slider.s2_desc": "Providing state-of-the-art design, supply, commissioning, and maintenance of high-performance IT and security network infrastructures.",
        // Button
        "btn.lang": "Arabic"
    },
    ar: {
        "nav.home": "الرئيسية",
        "nav.about": "من نحن",
        "nav.solutions": "الحلول",
        "nav.services": "الخدمات",
        "nav.awards": "الجوائز",
        "nav.videos": "الفيديو",
        "nav.blogs": "المدونة",
        "nav.contact": "اتصل بنا",
        "nav.ticket": "فتح تذكرة",
        // Solutions items
        "sol.cctv": "حلول المراقبة الأمنية",
        "sol.anpr": "حلول التعرف على لوحات السيارات",
        "sol.data": "شبكات البيانات ومراكز البيانات",
        "sol.tel": "أنظمة الهاتف",
        "sol.pa": "النداء العام وإخلاء الصوت",
        "sol.av": "التحكم السمعي البصري والوسائط المتعددة",
        "sol.access": "مراقبة الدخول وحضور الوقت",
        "sol.gate": "الحواجز البوابية والمصدات الأمنية",
        "sol.intruder": "أنظمة إنذار التسلل",
        "sol.fire": "أنظمة إنذار الحريق",
        "sol.wifi": "حلول واي فاي الفنادق",
        "sol.xray": "أنظمة التفتيش بالأشعة السينية والمعادن",
        "sol.cabling": "الكابلات الهيكلية وشبكات الألياف",
        "sol.elec": "التركيبات الكهربائية والصيانة",
        "sol.matv": "أنظمة البث التلفزيوني الجماعي",
        "sol.trans": "أنظمة الإرسال",
        "sol.ups": "حلول الطاقة الاحتياطية يو بي إس",
        "sol.amc": "عقود الصيانة السنوية (AMC)",
        "sol.assoc": "شركاؤنا",
        "sol.ref": "مراجع العملاء",
        // Services items
        "ser.elec": "التركيبات الكهربائية والصيانة",
        "ser.fire": "نظام إنذار الحريق",
        // Slide 1
        "slider.s1_title": "حلول متكاملة للتيار الخفيف والأنظمة الأمنية",
        "slider.s1_desc": "ملتزمون بالاحترافية والنزاهة والتركيز على العملاء، نحن في طليعة صناعات التيار الخفيف والأنظمة الأمنية المتكاملة في المملكة العربية السعودية.",
        // Slide 2
        "slider.s2_title": "الشبكات المتقدمة والكابلات الهيكلية",
        "slider.s2_desc": "توفير أحدث التصاميم والتوريد والتشغيل والصيانة للبنية التحتية لشبكات تقنية المعلومات والأمن عالية الأداء.",
        // Button
        "btn.lang": "English"
    }
};

function initLanguage() {
    let currentLang = localStorage.getItem('lang') || 'en';
    
    // Toggle direction and class on HTML
    const htmlEl = document.documentElement;
    if (currentLang === 'ar') {
        htmlEl.setAttribute('dir', 'rtl');
        htmlEl.setAttribute('lang', 'ar');
        injectRtlStyles();
    } else {
        htmlEl.setAttribute('dir', 'ltr');
        htmlEl.removeAttribute('lang');
        removeRtlStyles();
    }
    
    // Translate data-tr elements
    document.querySelectorAll('[data-tr]').forEach(el => {
        const key = el.getAttribute('data-tr');
        if (translations[currentLang] && translations[currentLang][key]) {
            const trText = translations[currentLang][key];
            const icon = el.querySelector('i, img, svg');
            if (icon) {
                const iconHTML = icon.outerHTML;
                el.innerHTML = iconHTML + ' ' + trText;
            } else {
                el.textContent = trText;
            }
        }
    });

    // Translate language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.textContent = translations[currentLang]['btn.lang'];
    });
}

function toggleLanguage(event) {
    if (event) event.preventDefault();
    let currentLang = localStorage.getItem('lang') || 'en';
    let nextLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', nextLang);
    initLanguage();
}

function injectRtlStyles() {
    if (document.getElementById('rtl-custom-styles')) return;
    const style = document.createElement('style');
    style.id = 'rtl-custom-styles';
    style.textContent = `
        html[dir="rtl"] {
            text-align: right !important;
        }
        html[dir="rtl"] body {
            text-align: right !important;
        }
        html[dir="rtl"] .tgmenu__navbar-wrap ul li .sub-menu {
            left: auto !important;
            right: 0 !important;
        }
        html[dir="rtl"] .tgmenu__navbar-wrap ul li .sub-menu.solutions-sub-menu {
            left: auto !important;
            right: -150px !important;
        }
        html[dir="rtl"] .tg-header__top-info ul {
            flex-direction: row-reverse !important;
        }
        html[dir="rtl"] .tg-header__top-info ul li {
            margin-right: 0 !important;
            margin-left: 20px !important;
        }
        html[dir="rtl"] .tg-header__top-info ul li i {
            margin-right: 0 !important;
            margin-left: 8px !important;
        }
        html[dir="rtl"] .tg-header__top-right ul {
            flex-direction: row-reverse !important;
        }
        html[dir="rtl"] .tg-header__top-right ul li i {
            margin-right: 0 !important;
            margin-left: 8px !important;
        }
        html[dir="rtl"] .tg-header__top-social ul {
            flex-direction: row-reverse !important;
        }
        html[dir="rtl"] .tg-header__top-social ul li {
            margin-right: 0 !important;
            margin-left: 10px !important;
        }
        html[dir="rtl"] .tgmenu__nav {
            flex-direction: row-reverse !important;
        }
        html[dir="rtl"] .tgmenu__navbar-wrap.tgmenu__main-menu {
            margin-right: 0 !important;
            margin-left: auto !important;
        }
        html[dir="rtl"] .navigation {
            flex-direction: row-reverse !important;
        }
        html[dir="rtl"] .navigation > li {
            margin-left: 0 !important;
            margin-right: 30px !important;
        }
        html[dir="rtl"] .tgmenu__navbar-wrap ul li .sub-menu li a {
            justify-content: flex-start !important;
            text-align: right !important;
            flex-direction: row-reverse !important;
        }
        html[dir="rtl"] .tgmenu__navbar-wrap ul li .sub-menu li a i {
            margin-right: 0 !important;
            margin-left: 12px !important;
        }
        html[dir="rtl"] .slider__content-three {
            text-align: right !important;
        }
        html[dir="rtl"] .about__list-item-two li i {
            margin-right: 0 !important;
            margin-left: 10px !important;
        }
        html[dir="rtl"] .footer__widget-link li a::before {
            margin-right: 0 !important;
            margin-left: 8px !important;
        }
        html[dir="rtl"] .copyright__content-four ul {
            flex-direction: row-reverse !important;
        }
        html[dir="rtl"] .footer__social ul {
            flex-direction: row-reverse !important;
        }
        html[dir="rtl"] .footer__social ul li {
            margin-right: 0 !important;
            margin-left: 12px !important;
        }
        html[dir="rtl"] .footer__contact ul li i {
            margin-right: 0 !important;
            margin-left: 12px !important;
        }
        html[dir="rtl"] .footer__contact ul li {
            padding-left: 0 !important;
            padding-right: 35px !important;
            text-align: right !important;
        }
        html[dir="rtl"] .footer__contact ul li i {
            left: auto !important;
            right: 0 !important;
        }
        html[dir="rtl"] .tgmenu__action {
            margin-right: 0 !important;
            margin-left: 20px !important;
        }
        html[dir="rtl"] .tgmenu__action ul {
            flex-direction: row-reverse !important;
        }
        html[dir="rtl"] .tgmenu__action ul li {
            margin-left: 0 !important;
            margin-right: 15px !important;
        }
        html[dir="rtl"] .copyright__content-four p {
            text-align: left !important;
        }
    `;
    document.head.appendChild(style);
}

function removeRtlStyles() {
    const el = document.getElementById('rtl-custom-styles');
    if (el) el.remove();
}

// Auto-run on DOM ready
document.addEventListener('DOMContentLoaded', initLanguage);
// Also run on window load to cover any cloned mobile menu elements
window.addEventListener('load', initLanguage);
