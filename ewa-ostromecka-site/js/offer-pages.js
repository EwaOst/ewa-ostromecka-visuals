/* =========================================================
   PODSTRONY OFERTY — JĘZYKI
   Ewa Ostromecka Visuals
========================================================= */

const offerTranslations = {

  pl: {

  navHome: "HOME",
  navOffer: "OFERTA",
  navPortfolio: "PORTFOLIO",
  navAbout: "O MNIE",
  navContact: "KONTAKT",

  offerLabel: "OFERTA",
  sportTitle: "SPORT",

  sportLead:
    "FOTOGRAFIA, KTÓRA POKAZUJE RUCH, EMOCJE I CHARAKTER.",

  sportIntro:
    "Dokumentuję wydarzenia sportowe, treningi i przygotowania, a także momenty, które dzieją się poza główną areną. Tworzę zdjęcia, które opowiadają historię i budują autentyczny wizerunek zawodników, klubów i marek sportowych.",

  section01: "CO OBEJMUJE?",

  sportServicesIntro:
    "Fotografuję szeroki zakres wydarzeń i aktywności sportowych, dostosowując się do potrzeb Twojego projektu.",

  service01: "Zawody i turnieje",
  service02: "Treningi i przygotowania",
  service03: "Reportaż z wydarzenia",
  service04: "Zdjęcia zawodników",
  service05: "Materiały do social media i promocji",

  section02: "DLA KOGO?",

  sportAudienceIntro:
    "Pracuję z osobami, klubami i markami, które potrzebują autentycznych, profesjonalnych zdjęć pokazujących sport od środka.",

  audience01: "ZAWODNICY",
  audience01Text:
    "Indywidualne sesje i dokumentacja startów.",

  audience02: "KLUBY SPORTOWE",
  audience02Text:
    "Mecze, treningi, zawody i komunikacja klubu.",

  audience03: "ORGANIZATORZY",
  audience03Text:
    "Kompleksowa fotografia wydarzeń sportowych.",

  audience04: "MARKI SPORTOWE",
  audience04Text:
    "Materiały promocyjne i kampanie.",

  section03: "ZAPYTAJ O WYCENĘ",

  ctaText:
    "Opowiedz mi o swoim wydarzeniu lub projekcie. Przygotuję indywidualną wycenę i zaproponuję najlepsze rozwiązanie.",

  ctaButton: "SKONTAKTUJ SIĘ"

},

en: {

  navHome: "HOME",
  navOffer: "SERVICES",
  navPortfolio: "PORTFOLIO",
  navAbout: "ABOUT ME",
  navContact: "CONTACT",

  offerLabel: "SERVICES",
  sportTitle: "SPORT",

  sportLead:
    "PHOTOGRAPHY THAT CAPTURES MOVEMENT, EMOTION AND CHARACTER.",

  sportIntro:
    "I document sporting events, training sessions and preparations, as well as the moments that happen beyond the main arena. I create images that tell a story and build an authentic image of athletes, clubs and sports brands.",

  section01: "WHAT DOES IT INCLUDE?",

  sportServicesIntro:
    "I photograph a wide range of sporting events and activities, adapting to the needs of your project.",

  service01: "Competitions and tournaments",
  service02: "Training and preparation",
  service03: "Event reportage",
  service04: "Athlete photography",
  service05: "Social media and promotional content",

  section02: "WHO IS IT FOR?",

  sportAudienceIntro:
    "I work with individuals, clubs and brands that need authentic, professional photography showing sport from the inside.",

  audience01: "ATHLETES",
  audience01Text:
    "Individual sessions and coverage of competitions.",

  audience02: "SPORTS CLUBS",
  audience02Text:
    "Matches, training sessions, competitions and club communication.",

  audience03: "ORGANIZERS",
  audience03Text:
    "Comprehensive photography of sporting events.",

  audience04: "SPORTS BRANDS",
  audience04Text:
    "Promotional materials and campaigns.",

  section03: "REQUEST A QUOTE",

  ctaText:
    "Tell me about your event or project. I will prepare an individual quote and suggest the best solution.",

  ctaButton: "GET IN TOUCH"

},

de: {

  navHome: "HOME",
  navOffer: "ANGEBOT",
  navPortfolio: "PORTFOLIO",
  navAbout: "ÜBER MICH",
  navContact: "KONTAKT",

  offerLabel: "ANGEBOT",
  sportTitle: "SPORT",

  sportLead:
    "FOTOGRAFIE, DIE BEWEGUNG, EMOTION UND CHARAKTER SICHTBAR MACHT.",

  sportIntro:
    "Ich dokumentiere Sportveranstaltungen, Trainings und Vorbereitungen sowie die Momente, die abseits der großen Arena entstehen. Ich erstelle Bilder, die Geschichten erzählen und das authentische Bild von Sportlern, Vereinen und Sportmarken stärken.",

  section01: "WAS IST ENTHALTEN?",

  sportServicesIntro:
    "Ich fotografiere unterschiedlichste Sportveranstaltungen und Aktivitäten und passe mich dabei den Anforderungen Ihres Projekts an.",

  service01: "Wettkämpfe und Turniere",
  service02: "Training und Vorbereitung",
  service03: "Eventreportage",
  service04: "Sportlerfotografie",
  service05: "Content für Social Media und Werbung",

  section02: "FÜR WEN?",

  sportAudienceIntro:
    "Ich arbeite mit Einzelpersonen, Vereinen und Marken, die authentische und professionelle Bilder benötigen, die den Sport von innen zeigen.",

  audience01: "SPORTLER",
  audience01Text:
    "Individuelle Shootings und Dokumentation von Wettkämpfen.",

  audience02: "SPORTVEREINE",
  audience02Text:
    "Spiele, Trainings, Wettkämpfe und Vereinskommunikation.",

  audience03: "VERANSTALTER",
  audience03Text:
    "Umfassende Fotografie von Sportveranstaltungen.",

  audience04: "SPORTMARKEN",
  audience04Text:
    "Werbematerialien und Kampagnen.",

  section03: "ANGEBOT ANFRAGEN",

  ctaText:
    "Erzählen Sie mir von Ihrer Veranstaltung oder Ihrem Projekt. Ich erstelle ein individuelles Angebot und schlage die passende Lösung vor.",

  ctaButton: "KONTAKT AUFNEHMEN"

}
};


/* =========================================================
   LANGUAGE SWITCHER
========================================================= */

const languageButtons = document.querySelectorAll(".lang-btn");


function applyOfferLanguage(lang) {

  const dictionary = offerTranslations[lang];

  if (!dictionary) return;


  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.getAttribute("data-i18n");

    if (dictionary[key] !== undefined) {
      element.innerHTML = dictionary[key];
    }

  });


  languageButtons.forEach(button => {

    button.classList.toggle(
      "active",
      button.dataset.lang === lang
    );

  });


  document.documentElement.lang = lang;

  localStorage.setItem("ewaLanguage", lang);

}


/* =========================================================
   CLICK
========================================================= */

languageButtons.forEach(button => {

  button.addEventListener("click", () => {

    applyOfferLanguage(button.dataset.lang);

  });

});


/* =========================================================
   START
========================================================= */

const savedLanguage =
  localStorage.getItem("ewaLanguage") || "pl";

applyOfferLanguage(savedLanguage);