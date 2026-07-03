const HEADER_HTML = `
    <header>
        <div class="tg-header__top">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <div class="tg-header__top-info">
                            <ul class="list-wrap">
                                <li><i class="flaticon-placeholder"></i>P.O.Box, 246990 Riyadh, 11312</li>
                                <li><i class="flaticon-envelope"></i><a
                                        href="mailto:info@majalnet.com">info@majalnet.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="tg-header__top-right">
                            <ul class="list-wrap">
                                <li><i class="flaticon-telephone"></i><a href="tel:+966540025337">+966 540 025 337</a>
                                </li>
                                <li>
                                    <div class="tg-header__top-social">
                                        <ul class="list-wrap">
                                            <li><a href="https://www.facebook.com/" target="_blank"><img
                                                        src="assets/img/icons/facebook.svg" alt=""
                                                        class="injectable"></a></li>
                                            <li><a href="https://x.com/home" target="_blank"><img
                                                        src="assets/img/icons/linkedin.svg" alt=""
                                                        class="injectable"></a></li>
                                            <li><a href="https://www.instagram.com/" target="_blank"><img
                                                        src="assets/img/icons/instagram.svg" alt=""
                                                        class="injectable"></a></li>
                                            <li><a href="https://www.pinterest.com/" target="_blank"><img
                                                        src="assets/img/icons/tiktok.svg" alt="" class="injectable"></a>
                                            </li>
                                            <li><a href="https://www.youtube.com/" target="_blank"><img
                                                        src="assets/img/icons/youtube.svg" alt="" class="injectable"></a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="header-fixed-height"></div>
        <div id="sticky-header" class="tg-header__area tg-header__area-six">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="tgmenu__wrap">
                            <nav class="tgmenu__nav">
                                <div class="logo">
                                    <a href="index.html"><img src="assets/majal/logo.png" alt="Logo"></a>
                                </div>
                                <div class="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                                    <ul class="navigation p-relative">
                                        <li class="tg-mega-menu-has-children"><a href="index.html"
                                                data-tr="nav.home">Home</a></li>
                                        <li><a href="about.html" data-tr="nav.about">About Us</a></li>
                                        <li class="menu-item-has-children"><a href="#"
                                                data-tr="nav.solutions">Solutions</a>
                                            <ul class="sub-menu solutions-sub-menu">
                                                <li><a href="cctv-solutions.html" data-tr="sol.cctv"><i
                                                            class="fas fa-video"></i> CCTV
                                                         Surveillance Solutions</a></li>
                                                <li><a href="anpr-solutions.html" data-tr="sol.anpr"><i
                                                            class="fas fa-camera"></i> ANPR
                                                         Solutions</a></li>
                                                <li><a href="data-networks-data-center.html" data-tr="sol.data"><i
                                                            class="fas fa-server"></i> Data
                                                         Networks & Data Center</a></li>
                                                <li><a href="telephony-systems.html" data-tr="sol.tel"><i
                                                            class="fas fa-phone-alt"></i>
                                                         Telephony Systems</a></li>
                                                <li><a href="public-address-voice-evacuation.html" data-tr="sol.pa"><i
                                                            class="fas fa-volume-up"></i>
                                                         Public Address & Voice Evacuation</a></li>
                                                <li><a href="audio-visual-multimedia-control.html" data-tr="sol.av"><i
                                                            class="fas fa-tv"></i> Audio
                                                         Visual & Multimedia Control</a></li>
                                                <li><a href="access-control-time-attendance.html" data-tr="sol.access"><i
                                                            class="fas fa-fingerprint"></i>
                                                         Access Control & Time Attendance</a></li>
                                                <li><a href="gate-barriers-turnstiles.html" data-tr="sol.gate"><i
                                                            class="fas fa-door-closed"></i>
                                                         Gate Barriers, Turnstiles & Road Blockers</a></li>
                                                <li><a href="intruder-alarm-systems.html" data-tr="sol.intruder"><i
                                                            class="fas fa-bell"></i> Intruder
                                                         Alarm Systems</a></li>
                                                <li><a href="fire-alarm-systems.html" data-tr="sol.fire"><i
                                                            class="fas fa-fire-extinguisher"></i> Fire Alarm Systems</a>
                                                </li>
                                                <li><a href="hotel-wifi-solutions.html" data-tr="sol.wifi"><i
                                                            class="fas fa-wifi"></i> Hotel
                                                         Wi-Fi Solutions</a></li>
                                                <li><a href="xray-inspection-metal-detector-systems.html" data-tr="sol.xray"><i
                                                            class="fas fa-shield-alt"></i>
                                                         X-Ray Inspection & Metal Detector Systems</a></li>
                                                <li><a href="structured-cabling-fiber-networks.html" data-tr="sol.cabling"><i
                                                            class="fas fa-network-wired"></i>
                                                         Structured Cabling & Fiber Networks</a></li>
                                                <li><a href="matv-systems.html" data-tr="sol.matv"><i
                                                            class="fas fa-broadcast-tower"></i> MATV Systems</a></li>
                                                <li><a href="transmission-systems.html" data-tr="sol.trans"><i
                                                            class="fas fa-satellite-dish"></i>
                                                         Transmission Systems</a></li>
                                                <li><a href="ups-power-backup-solutions.html" data-tr="sol.ups"><i
                                                            class="fas fa-battery-full"></i>
                                                         UPS Power Backup Solutions</a></li>
                                                <li><a href="our-associates.html" data-tr="sol.assoc"><i
                                                            class="fas fa-handshake"></i> Our
                                                         Associates</a></li>
                                                <li><a href="customer-references.html" data-tr="sol.ref"><i
                                                            class="fas fa-users"></i> Customer
                                                         References</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children"><a href="#"
                                                data-tr="nav.services">Services</a>
                                            <ul class="sub-menu">
                                                <li><a href="electricla-installation-maintanance.html" data-tr="ser.elec">Electrical
                                                         Installation &
                                                         Maintenance</a></li>
                                                <li><a href="annual-maintanance.html" data-tr="ser.fire">Annual Maintanance Contract</a></li>
                                            </ul>
                                        </li>
                                        <li class=""><a href="awards.html" data-tr="nav.awards">Awards</a></li>
                                        <li class=""><a href="clients.html" data-tr="nav.blogs">Clientele</a></li>
                                        <li class=""><a href="#0" data-tr="nav.videos">Shop</a></li>
                                        <li><a href="contact.html" data-tr="nav.contact">Contact</a></li>
                                        <li class="d-block d-lg-none"><a href="https://majalnet.freshdesk.com/support/login" target="_blank" rel="noopener noreferrer" data-tr="nav.ticket">Submit Ticket</a></li>
                                    </ul>
                                </div>
                                <div class="tgmenu__action tgmenu__action-six arabic-lang-btn-wrapper" style="margin-right: 20px;">
                                    <ul class="list-wrap">
                                        <li class="header-btn">
                                            <a href="#" class="tg-btn tg-btn-four tg-btn-five">عربي</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tgmenu__action tgmenu__action-six">
                                    <ul class="list-wrap">
                                        <li class="header-btn">
                                            <a href="https://majalnet.freshdesk.com/support/login" target="_blank" rel="noopener noreferrer" class="tg-btn tg-btn-four tg-btn-five"
                                                data-tr="nav.ticket">Submit
                                                 Ticket<img src="assets/img/icons/right_arrow02.svg" alt=""
                                                     class="injectable"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mobile-nav-toggler"><i class="tg-flaticon-menu"></i></div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Menu  -->
        <div class="tgmobile__menu">
            <nav class="tgmobile__menu-box">
                <div class="close-btn"><i class="tg-flaticon-close-1"></i></div>
                <div class="nav-logo">
                    <a href="index.html"><img src="assets/majal/logo.png" alt="Logo"></a>
                </div>
                
                <div class="tgmobile__menu-outer">
                    <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                </div>
                <div class="social-links">
                    <ul class="list-wrap">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="tgmobile__menu-backdrop"></div>
        <!-- End Mobile Menu -->

        <!-- header-search -->
        <div class="search__popup">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="search__wrapper">
                            <div class="search__close">
                                <button type="button" class="search-close-btn">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="search__form">
                                <form action="#">
                                    <div class="search__input">
                                        <input class="search-input-field" type="text" placeholder="Type keywords here">
                                        <span class="search-focus-border"></span>
                                        <button>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                                <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor"
                                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="search-popup-overlay"></div>
        <!-- header-search-end -->

        <!-- offCanvas-menu -->
        <div class="offCanvas__info">
            <div class="offCanvas__close-icon menu-close">
                <button><img src="assets/img/icons/times.svg" alt="" class="injectable"></button>
            </div>
            <div class="offCanvas__logo mb-30">
                <a href="index.html"><img src="assets/img/logo/logo.svg" alt="Logo"></a>
            </div>
            <div class="offCanvas__content">
                <p>Businorem ipsum dolor sit amet cons interdum quam duis variuy time honored tradition etting .</p>
            </div>
            <div class="offCanvas__img">
                <ul class="list-wrap">
                    <li><a href="javascript:void(0)"><img src="assets/img/images/footer_insta01.jpg" alt="img"></a></li>
                    <li><a href="javascript:void(0)"><img src="assets/img/images/footer_insta02.jpg" alt="img"></a></li>
                    <li><a href="javascript:void(0)"><img src="assets/img/images/footer_insta03.jpg" alt="img"></a></li>
                    <li><a href="javascript:void(0)"><img src="assets/img/images/footer_insta04.jpg" alt="img"></a></li>
                    <li><a href="javascript:void(0)"><img src="assets/img/images/footer_insta05.jpg" alt="img"></a></li>
                    <li><a href="javascript:void(0)"><img src="assets/img/images/footer_insta06.jpg" alt="img"></a></li>
                </ul>
            </div>
            <div class="offCanvas__side-info">
                <div class="contact-list">
                    <i class="flaticon-telephone"></i>
                    <a href="tel:+966540025337">+966 540 025 337</a>
                </div>
                <div class="contact-list">
                    <i class="flaticon-telephone"></i>
                    <a href="tel:+966114733002">+(966) 114733002</a>
                </div>
                <div class="contact-list">
                    <i class="fas fa-globe"></i>
                    <a href="https://www.majalnet.com" target="_blank">www.majalnet.com</a>
                </div>
                <div class="contact-list">
                    <i class="flaticon-placeholder"></i>
                    <p>P.O.Box, 246990 Riyadh, 11312</p>
                </div>
                <div class="contact-list">
                    <i class="flaticon-envelope"></i>
                    <a href="mailto:info@majalnet.com">info@majalnet.com</a>
                </div>
                <div class="contact-list">
                    <i class="fas fa-fax"></i>
                    <p>+966 11474 4736</p>
                </div>
            </div>
            <div class="offCanvas__social">
                <h6 class="title">Follow us</h6>
                <ul class="list-wrap">
                    <li><a href="https://www.facebook.com/" target="_blank"><img src="assets/img/icons/facebook.svg"
                                alt="" class="injectable"></a></li>
                    <li><a href="https://x.com/home" target="_blank"><img src="assets/img/icons/twitter.svg" alt=""
                                class="injectable"></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank"><img src="assets/img/icons/instagram.svg"
                                alt="" class="injectable"></a></li>
                    <li><a href="https://www.pinterest.com/" target="_blank"><img src="assets/img/icons/pinterest.svg"
                                alt="" class="injectable"></a></li>
                </ul>
            </div>
        </div>
        <div class="offCanvas__overly"></div>
        <!-- offCanvas-menu-end -->
    </header>
`;

const FOOTER_HTML = `
    <footer class="footer__area-four fix footer-backgroundd" style="">
        <div class="footer__top-three footer-padding">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="footer__widget">
                            <div class="footer__logo">
                                <a href="index.html"><img src="assets/majal/footer-logo.png" alt="logo"></a>
                            </div>
                            <div class="footer__content footer__content-three">
                                <p>Majal IT Networks has been providing innovative IT and security solutions since 2007, enhancing operational efficiency and driving growth for clients across various sectors in Saudi Arabia.</p>
                            </div>
                            
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <div class="footer__widget">
                            <h4 class="footer__widget-title footer__widget-title-two">Useful Links</h4>
                            <ul class="footer__widget-link footer__widget-link-two list-wrap">
                                <li><a href="awards.html">Awards</a></li>
                                <li><a href="videos.html">Videos</a></li>
                                <li><a href="blogs.html">Blogs</a></li>
                                <li><a href="#0">Shop</a></li>
                                <li><a href="job.html">Jobs</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-8">
                        <div class="footer__widget">
                            <h4 class="footer__widget-title footer__widget-title-two">Solutions</h4>
                            <ul class="footer__widget-link footer__widget-link-two list-wrap">
                                <li><a href="cctv-solutions.html">CCTV Surveillance Solutions</a></li>
                                <li><a href="data-networks-data-center.html">Data Networks & Data Center</a></li>
                                <li><a href="access-control-time-attendance.html">Access Control & Time Attendance</a></li>
                                <li><a href="public-address-voice-evacuation.html">Public Address & Voice Evacuation</a></li>
                                <li><a href="hotel-wifi-solutions.html">Hotel Wi-Fi Solutions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div class="footer__widget">
                            <h4 class="footer__widget-title footer__widget-title-two">Contact</h4>
                            <div class="footer__contact">
                                <ul class="list-wrap">
                                    <li><i class="flaticon-placeholder"></i>P.O.Box, 246990 Riyadh, 11312</li>
                                    <li><i class="flaticon-telephone"></i><a href="tel:+966540025337">+966 540 025
                                            337</a>
                                    </li>
                                    <li><i class="flaticon-envelope"></i><a
                                            href="mailto:info@majalnet.com">info@majalnet.com</a></li>
                                </ul>
                            </div>
                            <div class="footer__social footer__social-four">
                                <ul class="list-wrap">
                                    <li><a href="https://www.facebook.com/" target="_blank"><img
                                                src="assets/img/icons/facebook.svg" alt="" class="injectable"></a></li>
                                    <li><a href="https://www.instagram.com/" target="_blank"><img
                                                src="assets/img/icons/instagram.svg" alt="" class="injectable"></a></li>
                                    <li><a href="https://www.linkedin.com/" target="_blank"><img
                                                src="assets/img/icons/linkedin.svg" alt="" class="injectable"></a></li>
                                    <li><a href="https://www.tiktok.com/" target="_blank"><img
                                                src="assets/img/icons/tiktok.svg" alt="" class="injectable"></a></li>
                                    <li><a href="https://www.youtube.com/" target="_blank"><img
                                                src="assets/img/icons/youtube.svg" alt="" class="injectable"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom-five">
            <div class="container" style="display: flex; align-items: center;justify-content: space-between;">
                <div class="copyright__content-four footerr-menuu">
                   <p><a href="terms-conditions.html">Terms & Condition</a></p>
                   <p><a href="privacy-policy.html">Privacy Policy</a></p>
                </div>
                <div class="copyright__content-four">
                    <p>© 2008 - 2026 Majal IT Networks & Security. All Rights Reserved | Designed by <a href="https://impinfo.in" target="_blank" style="color: #fff;">Imperial Info Systems</a></p>
                </div>
            </div>
        </div>
        <div class="footer__shape-wrap-four">
            <img src="assets/img/images/h5_footer_shape01.svg" alt="shape" data-aos="fade-right" data-aos-delay="300">
            <img src="assets/img/images/h5_footer_shape02.svg" alt="shape">
            <img src="assets/img/images/h5_footer_shape03.svg" alt="shape" class="rotateme">
        </div>
    </footer>
    <!-- Floating Call Button -->
    <a href="tel:+966502997129" class="floating-call-btn" title="Call Us Now">
        <i class="fas fa-phone"></i>
    </a>
`;

function injectHeader() {
    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
        placeholder.outerHTML = HEADER_HTML;
        initHeaderActiveLink();
    }
}

function injectFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.outerHTML = FOOTER_HTML;
    }
    
    // Inject the Gallabox WhatsApp widget script dynamically
    if (!window.gbwawc) {
        (function (w, d, s, u) {
            w.gbwawc = {
                url: u,
                options: {
                    waId: "+966502997129",
                    siteName: "Majal IT Network",
                    siteTag: "Online",
                    siteLogo: "https://majal.pravinsam.in/assets/img/favicon.png",
                    widgetPosition: "RIGHT",
                    welcomeMessage: "Welcome to Majal IT Network",
                    triggerMessage: "",
                    brandColor: "#25D366",
                    messageText: "Which Service you are looking for ",
                    replyOptions: ["CCTV Survillence Solutions", "Data Network & Data Center", "APNR solurtions", "Intruder Alarm Systems", "Time & Attendance Management System", "Visitor Management Systems", "Public Address & Voice Evacuation", "Fire Alarm Systems", "MATV (Master Antenna Television) Systems", "Professional Audio Visual Solutions","Access Control Systems", "Gate Barriers & Turnstiles", "Biometric Attendance Solutions", "Intercom Solutions"],
                    version: "v1",
                    widgetPositionMarginX: "12",
                    widgetPositionMarginY: "12",
                },
            };
            var h = d.getElementsByTagName(s)[0],
                j = d.createElement(s);
            j.async = true;
            j.src = u + "/whatsapp-widget.min.js?_=" + "2026-07-01 17";
            h.parentNode.insertBefore(j, h);
        })(window, document, "script", "https://waw.gallabox.com");
    }
}

function initHeaderActiveLink() {
    let page = window.location.pathname.split("/").pop();
    if (!page || page === "") {
        page = "index.html";
    }

    const nav = document.querySelector('.navigation');
    if (!nav) return;

    // Remove active class from all li in navigation
    nav.querySelectorAll('li').forEach(li => {
        li.classList.remove('active');
    });

    // Find the link that matches the current page
    let matchedLink = null;
    nav.querySelectorAll('a').forEach(a => {
        const href = a.getAttribute('href');
        if (href === page) {
            matchedLink = a;
        }
    });

    if (matchedLink) {
        let parentLi = matchedLink.closest('li');
        if (parentLi) {
            parentLi.classList.add('active');
            
            // If it's inside a submenu, also add active to the parent menu-item-has-children li
            let grandParentLi = parentLi.parentElement.closest('.menu-item-has-children');
            if (grandParentLi) {
                grandParentLi.classList.add('active');
            }
        }
    } else if (page === "index.html") {
        const homeLi = nav.querySelector('li.tg-mega-menu-has-children');
        if (homeLi) homeLi.classList.add('active');
    }
}
