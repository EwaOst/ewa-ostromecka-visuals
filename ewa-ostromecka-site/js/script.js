const header = document.getElementById("siteHeader");


/* =========================
   HEADER SCROLL
========================= */

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});


/* =========================
   REVEAL ANIMATIONS
========================= */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});


/* =========================
   MOBILE MENU
========================= */

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("mobile-open", !open);
});


/* =========================
   NAVIGATION
========================= */

const navLinks = [
  ...document.querySelectorAll(".main-nav a[href^='#']")
];

function setActiveSection(id) {
  navLinks.forEach(link => {
    const active = link.getAttribute("href") === `#${id}`;

    link.classList.toggle("active", active);

    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}


nav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    const target = link.getAttribute("href");

    if (target) {
      setActiveSection(target.substring(1));
    }

    nav.classList.remove("mobile-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});


setActiveSection("home");


/* =========================
   TRANSLATIONS
========================= */

const translations = {

  pl: {

    navHome: "HOME",
    navAbout: "O MNIE",
    navOffer: "OFERTA",
    navPortfolio: "PORTFOLIO",
    navClients: "KLIENCI",
    navContact: "KONTAKT",

    quote: "ZAPYTAJ O WYCENĘ",
    contactLabel: "KONTAKT",
contactFormTitle: "ZAPYTAJ<br>O <em>WYCENĘ.</em>",
contactIntro: "Masz wydarzenie, zawody, kampanię albo pomysł na sesję? Napisz kilka słów — odezwę się i przygotujemy coś dobrego.",
formName: "IMIĘ / FIRMA",
formEmail: "E-MAIL",
formPhone: "TELEFON",
formDate: "DATA WYDARZENIA",
formType: "CZEGO POTRZEBUJESZ?",
formChoose: "WYBIERZ",
formSport: "SPORT",
formEvent: "EVENT",
formPeople: "LUDZIE",
formBrand: "MARKA",
formOther: "INNE",
formMessage: "WIADOMOŚĆ",
formPlaceholder: "Opowiedz krótko o swoim projekcie...",
formSubmit: "WYŚLIJ ZAPYTANIE",

instagramContact: "INSTAGRAM →",
location: "POLSKA / ZAGRANICA",

heroEyebrow: "SPORT / EVENTS / PEOPLE",
    heroTitle: "WIĘCEJ<br>NIŻ <em>ZDJĘCIA</em>",
    heroText: "Historie, które inspirują.",
    portfolioButton: "ZOBACZ MOJE PORTFOLIO",

    heroSide: "EMOCJE<br>RADOŚĆ<br>SPORT<br>LUDZIE<br>WYDARZENIA<br>MARKI",

    aboutLabel: "O MNIE",
    aboutTitle: "APARAT<br>W RĘKU.<br>UŚMIECH<br>NA TWARZY.",

    aboutText1:
      "Cześć! Jestem Ewa Ostromecka — fotografka sportowa i eventowa. Kocham ludzi, emocje, ruch i niepowtarzalne historie, które dzieją się na trasie, w strefie kibica, na scenie i za kulisami.",

    aboutText2:
      "Zawsze tam, gdzie coś się dzieje!",

    aboutButton: "POZNAJ MNIE",

    benefit1Title: "SZYBKA REALIZACJA",
    benefit1Text: "Zdjęcia wtedy, kiedy ich potrzebujesz.",

    benefit2Title: "DOŚWIADCZENIE",
    benefit2Text: "Sport, eventy, marki, ludzie i emocje.",

    benefit3Title: "INDYWIDUALNE PODEJŚCIE",
    benefit3Text: "Każde wydarzenie ma swój rytm.",

    benefit4Title: "DOJAZD",
    benefit4Text: "Cała Polska / zagranica.",

    offerLabel: "OFERTA",
    offerTitle: "CO MOGĘ DLA CIEBIE ZROBIĆ?",
    sportTitle: "SPORT",

sportText:
  "Fotografia sportowa pełna emocji, dynamiki i prawdziwych momentów.",

eventsTitle: "EVENTY",

eventsText:
  "Reportaż z wydarzeń, który pokazuje atmosferę, ludzi i najważniejsze momenty.",

realEstateTitle: "NIERUCHOMOŚCI",

realEstateText:
  "Fotografia nieruchomości pokazująca przestrzeń, światło i detale — tak, aby wnętrze prezentowało się atrakcyjnie i profesjonalnie.",

moreTitle: "WIĘCEJ",

    instagramLabel: "NAJNOWSZE",
    instagramTitle: "NA INSTAGRAMIE",
    instagramLink: "INSTAGRAM →",

    clientsLabel: "ZAUFALI MI",
    clientsNote:
      "* przykładowe miejsce na logotypy klientów — podmień na rzeczywiste realizacje",

    contactHandwritten:
      "Stwórzmy coś<br>wyjątkowego!",

    contactTitle:
      "TWOJE<br><em>MOMENTY.</em>",

    instagramFooter: "INSTAGRAM",
    copyright:
      "© 2026 Ewa Ostromecka. Wszelkie prawa zastrzeżone.",

    heroImageAlt:
      "Sportowiec podczas intensywnego treningu",

    aboutImageAlt:
      "Fotografka podczas pracy",

    sportImageAlt:
      "Fotografia sportowa",

    eventsImageAlt:
      "Fotografia eventowa",

    peopleImageAlt:
      "Fotografia ludzi",

    brandsImageAlt:
      "Fotografia dla marek",

    runningImageAlt:
      "Bieg",

    eventPhotographyImageAlt:
      "Fotografia eventowa",

    fitnessImageAlt:
      "Fitness",

    contactImageAlt:
      "Wydarzenie i publiczność"

  },


  en: {

    navHome: "HOME",
    navAbout: "ABOUT ME",
    navOffer: "SERVICES",
    navPortfolio: "PORTFOLIO",
    navClients: "CLIENTS",
    navContact: "CONTACT",

    quote: "GET A QUOTE",
    contactLabel: "CONTACT",
contactTitle: "GET<br>A <em>QUOTE.</em>",
contactIntro: "Do you have an event, competition, campaign or an idea for a shoot? Tell me a few words about it — I'll get back to you.",
formName: "NAME / COMPANY",
formEmail: "E-MAIL",
formPhone: "PHONE",
formDate: "EVENT DATE",
formType: "WHAT DO YOU NEED?",
formChoose: "SELECT",
formSport: "SPORT",
formEvent: "EVENT",
formPeople: "PEOPLE",
formBrand: "BRAND",
formOther: "OTHER",
formMessage: "MESSAGE",
formPlaceholder: "Tell me briefly about your project...",
formSubmit: "SEND INQUIRY",
formMessage: "MESSAGE",
formPlaceholder: "Tell me briefly about your project...",
formSubmit: "SEND INQUIRY",

    heroEyebrow: "SPORT / EVENTS / PEOPLE",
    heroTitle: "MORE<br>THAN <em>PHOTOS</em>",
    heroText: "Stories that inspire.",
    portfolioButton: "VIEW MY PORTFOLIO",

    heroSide: "EMOTIONS<br>JOY<br>SPORT<br>PEOPLE<br>EVENTS<br>BRANDS",

    aboutLabel: "ABOUT ME",
    aboutTitle: "CAMERA<br>IN HAND.<br>SMILE<br>ON MY FACE.",

    aboutText1:
      "Hi! I'm Ewa Ostromecka — a sports and event photographer. I love people, emotions, movement and the unique stories that happen on the course, in the fan zone, on stage and behind the scenes.",

    aboutText2:
      "Always wherever something is happening!",

    aboutButton: "MEET ME",

    benefit1Title: "FAST DELIVERY",
    benefit1Text: "Photos when you need them.",

    benefit2Title: "EXPERIENCE",
    benefit2Text: "Sport, events, brands, people and emotions.",

    benefit3Title: "PERSONAL APPROACH",
    benefit3Text: "Every event has its own rhythm.",

    benefit4Title: "TRAVEL",
    benefit4Text: "All across Poland / worldwide.",

    offerLabel: "SERVICES",
    offerTitle: "WHAT CAN I DO FOR YOU?",

    sportTitle: "SPORT",
    sportText:
      "Competitions, training sessions, races and sports stories. Dynamic frames, emotions and real movement.",

    eventsTitle: "EVENTS",
    eventsText:
      "Comprehensive event photography — from the first preparations to the most important moments.",

      realEstateTitle: "REAL ESTATE",
      realEstateText:
  "Professional real estate photography that highlights space, light and the character of each place.",

    moreTitle: "MORE",
    brandsText:
      "Photography for brands, clubs and organizers, ready to use across social media and advertising.",

    instagramLabel: "LATEST",
    instagramTitle: "ON INSTAGRAM",
    instagramLink: "INSTAGRAM →",

    clientsLabel: "TRUSTED BY",
    clientsNote:
      "* example space for client logos — replace with actual collaborations",

    contactHandwritten:
      "Let's create something<br>extraordinary!",

    contactTitle:
      "YOUR<br><em>MOMENTS.</em>",

    instagramFooter: "INSTAGRAM",

    copyright:
      "© 2026 Ewa Ostromecka. All rights reserved.",

    heroImageAlt:
      "Athlete during an intense training session",

    aboutImageAlt:
      "Photographer at work",

    sportImageAlt:
      "Sports photography",

    eventsImageAlt:
      "Event photography",

    peopleImageAlt:
      "People photography",

    brandsImageAlt:
      "Brand photography",

    runningImageAlt:
      "Running",

    eventPhotographyImageAlt:
      "Event photography",

    fitnessImageAlt:
      "Fitness",

    contactImageAlt:
      "Event and audience"

  },


  de: {

    navHome: "HOME",
    navAbout: "ÜBER MICH",
    navOffer: "ANGEBOT",
    navPortfolio: "PORTFOLIO",
    navClients: "KUNDEN",
    navContact: "KONTAKT",

    quote: "ANGEBOT ANFRAGEN",
    contactLabel: "KONTAKT",
contactTitle: "FRAGE<br>DEIN <em>ANGEBOT AN.</em>",
contactIntro: "Du hast ein Event, einen Wettkampf, eine Kampagne oder eine Idee für ein Shooting? Schreib mir ein paar Worte — ich melde mich bei dir.",
formName: "NAME / FIRMA",
formEmail: "E-MAIL",
formPhone: "TELEFON",
formDate: "EVENTDATUM",
formType: "WAS BRAUCHST DU?",
formChoose: "AUSWÄHLEN",
formSport: "SPORT",
formEvent: "EVENT",
formPeople: "MENSCHEN",
formBrand: "MARKE",
formOther: "SONSTIGES",
formMessage: "NACHRICHT",
formPlaceholder: "Erzähl mir kurz von deinem Projekt...",
formSubmit: "ANFRAGE SENDEN",

    heroEyebrow: "SPORT / EVENTS / PEOPLE",
    heroTitle: "MEHR<br>ALS <em>FOTOS</em>",
    heroText: "Geschichten, die inspirieren.",
    portfolioButton: "MEIN PORTFOLIO ANSEHEN",

    heroSide: "EMOTIONEN<br>FREUDE<br>SPORT<br>MENSCHEN<br>EVENTS<br>MARKEN",

    aboutLabel: "ÜBER MICH",
    aboutTitle: "KAMERA<br>IN DER HAND.<br>EIN LÄCHELN<br>IM GESICHT.",

    aboutText1:
      "Hallo! Ich bin Ewa Ostromecka — Sport- und Eventfotografin. Ich liebe Menschen, Emotionen, Bewegung und einzigartige Geschichten, die auf der Strecke, in der Fanzone, auf der Bühne und hinter den Kulissen entstehen.",

    aboutText2:
      "Immer dort, wo etwas passiert!",

    aboutButton: "LERNE MICH KENNEN",

    benefit1Title: "SCHNELLE UMSETZUNG",
    benefit1Text: "Fotos genau dann, wenn du sie brauchst.",

    benefit2Title: "ERFAHRUNG",
    benefit2Text: "Sport, Events, Marken, Menschen und Emotionen.",

    benefit3Title: "INDIVIDUELLE BETREUUNG",
    benefit3Text: "Jedes Event hat seinen eigenen Rhythmus.",

    benefit4Title: "ANREISE",
    benefit4Text: "Ganz Polen / international.",

    offerLabel: "ANGEBOT",
    offerTitle: "WAS KANN ICH FÜR DICH TUN?",

    sportTitle: "SPORT",
    sportText:
      "Wettkämpfe, Trainings, Läufe und Sportgeschichten. Dynamische Bilder, Emotionen und echte Bewegung.",

    eventsTitle: "EVENTS",
    eventsText:
      "Umfassende Eventfotografie — von den ersten Vorbereitungen bis zu den wichtigsten Momenten.",
realEstateTitle: "IMMOBILIEN",
realEstateText:
  "Professionelle Immobilienfotografie, die Raum, Licht und den Charakter jeder Immobilie hervorhebt.",
    moreTitle: "MEHR",
    brandsText:
      "Fotografie für Marken, Vereine und Veranstalter, bereit für Social Media und Werbung.",

    instagramLabel: "AKTUELL",
    instagramTitle: "AUF INSTAGRAM",
    instagramLink: "INSTAGRAM →",

    clientsLabel: "VERTRAUEN MIR",
    clientsNote:
      "* Beispielplatz für Kundenlogos — durch tatsächliche Kooperationen ersetzen",

    contactHandwritten:
      "Lass uns etwas<br>Besonderes schaffen!",

    contactTitle:
      "DEINE<br><em>MOMENTE.</em>",

    instagramFooter: "INSTAGRAM",

    copyright:
      "© 2026 Ewa Ostromecka. Alle Rechte vorbehalten.",

    heroImageAlt:
      "Sportlerin beim intensiven Training",

    aboutImageAlt:
      "Fotografin bei der Arbeit",

    sportImageAlt:
      "Sportfotografie",

    eventsImageAlt:
      "Eventfotografie",

    peopleImageAlt:
      "Menschenfotografie",

    brandsImageAlt:
      "Markenfotografie",

    runningImageAlt:
      "Laufen",

    eventPhotographyImageAlt:
      "Eventfotografie",

    fitnessImageAlt:
      "Fitness",

    contactImageAlt:
      "Veranstaltung und Publikum"

  }

};


/* =========================
   LANGUAGE SWITCHER
========================= */

const languageButtons = document.querySelectorAll(".lang-btn");


function applyLanguage(lang) {

  const dictionary = translations[lang];

  if (!dictionary) return;

/* Placeholder formularza */

document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
  const key = element.getAttribute("data-i18n-placeholder");

  if (dictionary[key] !== undefined) {
    element.placeholder = dictionary[key];
  }
});
  /* Teksty */
  

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.getAttribute("data-i18n");

    if (dictionary[key] !== undefined) {
      element.innerHTML = dictionary[key];
    }

  });


  /* ALT zdjęć */

  document.querySelectorAll("[data-i18n-alt]").forEach(element => {

    const key = element.getAttribute("data-i18n-alt");

    if (dictionary[key] !== undefined) {
      element.alt = dictionary[key];
    }

  });


  /* Aktywny język */

  languageButtons.forEach(button => {

    button.classList.toggle(
      "active",
      button.dataset.lang === lang
    );

  });


  /* Język dokumentu */

  document.documentElement.lang = lang;


  /* Zapamiętanie wyboru */

  localStorage.setItem("ewaLanguage", lang);

}


languageButtons.forEach(button => {

  button.addEventListener("click", () => {

    const lang = button.dataset.lang;

    applyLanguage(lang);

  });

});


/* =========================
   START LANGUAGE
========================= */

const savedLanguage = localStorage.getItem("ewaLanguage") || "pl";

applyLanguage(savedLanguage);