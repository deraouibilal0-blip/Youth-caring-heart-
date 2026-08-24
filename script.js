/* =========================================================
   YOUTH CARING HEART
   COMPLETE MULTILINGUAL SYSTEM
   MEMBERS + MEETING ROOM + CHAT
   ========================================================= */


/* ================= TRANSLATIONS ================= */

const translations = {
  en: {
    navHome: "Home",
    navAbout: "About Us",
    navMagazine: "Magazine",
    navNews: "News",
    navEnvironment: "Environment",
    navActivities: "Activities",
    navGallery: "Gallery",
    navMembers: "Members",
    navJoin: "Join Us",

    heroLabel: "BERKANE • MOROCCO",
    heroTitle: "Young People.",
    heroSpan: "Positive Action.",
    heroText:
      "A youth platform connecting young people in Berkane through community, environment, education and ideas.",
    heroButton: "Explore Activities",

    aboutLabel: "❤️ ABOUT US",
    aboutTitle: "Young hearts. Positive action.",
    aboutText:
      "Youth Caring Heart is a youth initiative based in Berkane, Morocco, created to encourage young people to participate, volunteer and create positive change in their community.",

    communityTitle: "🤝 Community",
    communityText:
      "Connecting young people through meaningful activities.",

    environmentPointTitle: "🌱 Environment",
    environmentPointText:
      "Encouraging awareness and positive environmental action.",

    ideasTitle: "💡 Ideas",
    ideasText:
      "Giving young people a space to share and develop ideas.",

    magazineLabel: "OUR MAGAZINE",
    magazineTitle: "Stories that inspire action.",
    magazineText:
      "Discover stories, ideas and articles about youth, science, technology and the environment.",

    articleEnvironmentCategory: "ENVIRONMENT",
    articleEnvironmentTitle: "Building a Greener Berkane",
    articleEnvironmentText:
      "Young people can contribute to a cleaner and greener Berkane through awareness, teamwork, volunteering and responsible community action.",

    articleYouthCategory: "YOUTH",
    articleYouthTitle: "The Power of Youth Ideas",
    articleYouthText:
      "Young people have ideas that can become meaningful projects when they work together and receive the right support.",

    articleScienceCategory: "SCIENCE & TECHNOLOGY",
    articleScienceTitle: "Young Minds, New Ideas",
    articleScienceText:
      "Science and technology give young people new ways to learn, create and develop solutions for the future.",

    readMore: "Read More →",

    newsLabel: "NEWS",
    newsTitle: "What's happening?",
    newsText:
      "Follow the latest news and updates from Youth Caring Heart.",

    news1Title: "New Youth Activities",
    news1Text:
      "New community activities will be announced soon.",

    news2Title: "Green Berkane",
    news2Text:
      "We are preparing new environmental initiatives.",

    news3Title: "Join Our Community",
    news3Text:
      "Young people can join us and participate in future projects.",

    environmentLabel: "🌱 ENVIRONMENT",
    environmentTitle: "Let's make Berkane a better place.",
    environmentText:
      "We believe that young people can contribute to protecting their local environment through awareness, teamwork and positive action.",
    environmentButton: "Take Part",

    activitiesLabel: "COMMUNITY",
    activitiesTitle: "Upcoming Activities",
    activitiesText:
      "Discover activities and initiatives organized by Youth Caring Heart.",

    activity1Category: "ENVIRONMENT",
    activity1Title: "Community Clean-Up",
    activity1Text:
      "A youth activity focused on helping keep public spaces cleaner.",

    activity2Category: "COMMUNITY",
    activity2Title: "Green Berkane",
    activity2Text:
      "An initiative encouraging environmental awareness and local action.",

    activity3Category: "YOUTH",
    activity3Title: "Youth Ideas Workshop",
    activity3Text:
      "A space where young people can share ideas and develop positive projects.",

    activityButton: "Join Activity →",

    galleryLabel: "OUR GALLERY",
    galleryTitle: "Moments of positive action.",
    galleryText:
      "Discover moments from our community, environmental and youth activities.",

    gallery1: "Volunteering",
    gallery2: "Environment",
    gallery3: "Youth",
    gallery4: "Community",

    membersLabel: "👥 MEMBERS AREA",
    membersTitle: "A space for our members.",
    membersText:
      "Members can access community discussions, meetings and shared activities.",

    loginTitle: "Member Access",
    loginButton: "Enter Members Area",
    namePlaceholder: "Your name",
    codePlaceholder: "Member code",

    welcomeMember: "Welcome",
    meetingButton: "💬 Meeting Room",
    logoutButton: "Log Out",

    meetingLabel: "💬 MEMBERS MEETING ROOM",
    meetingTitle: "Community Meeting Room",
    meetingText:
      "A private space for members to discuss ideas, prepare activities and communicate with the team.",

    meetingOnline: "🟢 Members Meeting",
    meetingPrivate: "Members only",

    welcomeMessage:
      "Welcome to the members meeting room.",

    messagePlaceholder: "Write a message...",
    sendButton: "Send",

    loginError:
      "Please enter your name and member code.",

    donation:
      "❤️ Support our initiative through official and transparent channels.",

    joinLabel: "🤝 GET INVOLVED",
    joinTitle: "Join Youth Caring Heart",
    joinText:
      "Want to participate in our activities, share an idea or support our initiative?",
    joinButton: "Join Us",

    footer:
      "Youth • Community • Environment • Action"
  },

  fr: {
    navHome: "Accueil",
    navAbout: "À propos",
    navMagazine: "Magazine",
    navNews: "Actualités",
    navEnvironment: "Environnement",
    navActivities: "Activités",
    navGallery: "Galerie",
    navMembers: "Membres",
    navJoin: "Nous rejoindre",

    heroLabel: "BERKANE • MAROC",
    heroTitle: "Jeunesse.",
    heroSpan: "Action Positive.",
    heroText:
      "Une plateforme pour les jeunes de Berkane autour de la communauté, de l'environnement, de l'éducation et des idées.",
    heroButton: "Voir les activités",

    aboutLabel: "❤️ À PROPOS DE NOUS",
    aboutTitle: "Jeunesse et action positive.",
    aboutText:
      "Youth Caring Heart est une initiative de jeunes basée à Berkane, au Maroc, créée pour encourager les jeunes à participer, à faire du bénévolat et à créer un changement positif dans leur communauté.",

    communityTitle: "🤝 Communauté",
    communityText:
      "Connecter les jeunes à travers des activités significatives.",

    environmentPointTitle: "🌱 Environnement",
    environmentPointText:
      "Encourager la sensibilisation et l'action positive pour l'environnement.",

    ideasTitle: "💡 Idées",
    ideasText:
      "Offrir aux jeunes un espace pour partager et développer leurs idées.",

    magazineLabel: "NOTRE MAGAZINE",
    magazineTitle: "Des histoires qui inspirent l'action.",
    magazineText:
      "Découvrez des histoires, des idées et des articles sur la jeunesse, la science, la technologie et l'environnement.",

    articleEnvironmentCategory: "ENVIRONNEMENT",
    articleEnvironmentTitle: "Construire un Berkane plus vert",
    articleEnvironmentText:
      "Les jeunes peuvent contribuer à un Berkane plus propre et plus vert grâce à la sensibilisation, au travail d'équipe et au bénévolat.",

    articleYouthCategory: "JEUNESSE",
    articleYouthTitle: "Le pouvoir des idées des jeunes",
    articleYouthText:
      "Les idées des jeunes peuvent devenir des projets utiles lorsqu'ils travaillent ensemble et reçoivent le soutien nécessaire.",

    articleScienceCategory: "SCIENCE & TECHNOLOGIE",
    articleScienceTitle: "Jeunes esprits, nouvelles idées",
    articleScienceText:
      "La science et la technologie offrent aux jeunes de nouvelles possibilités pour apprendre, créer et préparer l'avenir.",

    readMore: "Lire plus →",

    newsLabel: "ACTUALITÉS",
    newsTitle: "Quoi de neuf ?",
    newsText:
      "Suivez les dernières nouvelles et mises à jour de Youth Caring Heart.",

    news1Title: "Nouvelles activités jeunesse",
    news1Text:
      "De nouvelles activités communautaires seront annoncées prochainement.",

    news2Title: "Berkane Verte",
    news2Text:
      "Nous préparons de nouvelles initiatives environnementales.",

    news3Title: "Rejoignez notre communauté",
    news3Text:
      "Les jeunes peuvent nous rejoindre et participer à nos futurs projets.",

    environmentLabel: "🌱 ENVIRONNEMENT",
    environmentTitle: "Faisons de Berkane un endroit meilleur.",
    environmentText:
      "Nous croyons que les jeunes peuvent contribuer à protéger leur environnement local grâce à la sensibilisation, au travail d'équipe et à l'action positive.",
    environmentButton: "Participer",

    activitiesLabel: "COMMUNAUTÉ",
    activitiesTitle: "Activités à venir",
    activitiesText:
      "Découvrez les activités et initiatives organisées par Youth Caring Heart.",

    activity1Category: "ENVIRONNEMENT",
    activity1Title: "Nettoyage communautaire",
    activity1Text:
      "Une activité jeunesse visant à contribuer à garder les espaces publics plus propres.",

    activity2Category: "COMMUNAUTÉ",
    activity2Title: "Berkane Verte",
    activity2Text:
      "Une initiative visant à encourager la sensibilisation environnementale et l'action locale.",

    activity3Category: "JEUNESSE",
    activity3Title: "Atelier des idées des jeunes",
    activity3Text:
      "Un espace où les jeunes peuvent partager leurs idées et développer des projets positifs.",

    activityButton: "Participer →",

    galleryLabel: "NOTRE GALERIE",
    galleryTitle: "Des moments d'action positive.",
    galleryText:
      "Découvrez des moments de nos activités communautaires, environnementales et jeunesse.",

    gallery1: "Bénévolat",
    gallery2: "Environnement",
    gallery3: "Jeunesse",
    gallery4: "Communauté",

    membersLabel: "👥 ESPACE MEMBRES",
    membersTitle: "Un espace pour nos membres.",
    membersText:
      "Les membres peuvent accéder aux discussions, réunions et activités communes.",

    loginTitle: "Accès membre",
    loginButton: "Entrer dans l'espace membres",
    namePlaceholder: "Votre nom",
    codePlaceholder: "Code membre",

    welcomeMember: "Bienvenue",
    meetingButton: "💬 Salle de réunion",
    logoutButton: "Déconnexion",

    meetingLabel: "💬 SALLE DE RÉUNION DES MEMBRES",
    meetingTitle: "Salle de réunion",
    meetingText:
      "Un espace réservé aux membres pour discuter des idées, préparer les activités et communiquer avec l'équipe.",

    meetingOnline: "🟢 Réunion des membres",
    meetingPrivate: "Membres uniquement",

    welcomeMessage:
      "Bienvenue dans la salle de réunion des membres.",

    messagePlaceholder: "Écrivez un message...",
    sendButton: "Envoyer",

    loginError:
      "Veuillez entrer votre nom et votre code membre.",

    donation:
      "❤️ Soutenez notre initiative par des moyens officiels et transparents.",

    joinLabel: "🤝 PARTICIPEZ",
    joinTitle: "Rejoignez Youth Caring Heart",
    joinText:
      "Vous souhaitez participer à nos activités, partager une idée ou soutenir notre initiative ?",
    joinButton: "Nous rejoindre",

    footer:
      "Jeunesse • Communauté • Environnement • Action"
  },

  ar: {
    navHome: "الرئيسية",
    navAbout: "من نحن",
    navMagazine: "المجلة",
    navNews: "الأخبار",
    navEnvironment: "البيئة",
    navActivities: "الأنشطة",
    navGallery: "المعرض",
    navMembers: "المنخرطون",
    navJoin: "انضم إلينا",

    heroLabel: "بركان • المغرب",
    heroTitle: "شباب.",
    heroSpan: "عمل إيجابي.",
    heroText:
      "منصة شبابية تجمع شباب بركان حول المجتمع والبيئة والتعليم والأفكار.",
    heroButton: "استكشف الأنشطة",

    aboutLabel: "❤️ من نحن",
    aboutTitle: "شباب وعمل إيجابي.",
    aboutText:
      "Youth Caring Heart هي مبادرة شبابية في بركان، المغرب، تهدف إلى تشجيع الشباب على المشاركة والتطوع وصنع تغيير إيجابي في المجتمع.",

    communityTitle: "🤝 المجتمع",
    communityText:
      "ربط الشباب من خلال أنشطة هادفة ومفيدة.",

    environmentPointTitle: "🌱 البيئة",
    environmentPointText:
      "تشجيع الوعي والعمل الإيجابي من أجل البيئة.",

    ideasTitle: "💡 الأفكار",
    ideasText:
      "منح الشباب مساحة لمشاركة أفكارهم وتطويرها.",

    magazineLabel: "مجلتنا",
    magazineTitle: "قصص تلهم العمل.",
    magazineText:
      "اكتشف قصصًا وأفكارًا ومقالات حول الشباب والعلوم والتكنولوجيا والبيئة.",

    articleEnvironmentCategory: "البيئة",
    articleEnvironmentTitle: "نحو بركان أكثر خضرة",
    articleEnvironmentText:
      "يمكن للشباب المساهمة في جعل بركان أنظف وأكثر خضرة من خلال التوعية والعمل الجماعي والتطوع.",

    articleYouthCategory: "الشباب",
    articleYouthTitle: "قوة أفكار الشباب",
    articleYouthText:
      "يمكن لأفكار الشباب أن تتحول إلى مشاريع مفيدة عندما يعملون معًا ويحصلون على الدعم المناسب.",

    articleScienceCategory: "العلوم والتكنولوجيا",
    articleScienceTitle: "عقول شابة وأفكار جديدة",
    articleScienceText:
      "تمنح العلوم والتكنولوجيا الشباب طرقًا جديدة للتعلم والإبداع وتطوير حلول للمستقبل.",

    readMore: "اقرأ المزيد ←",

    newsLabel: "الأخبار",
    newsTitle: "ما الجديد؟",
    newsText:
      "تابع آخر الأخبار والمستجدات الخاصة بـ Youth Caring Heart.",

    news1Title: "أنشطة شبابية جديدة",
    news1Text:
      "سيتم الإعلان عن أنشطة مجتمعية جديدة قريبًا.",

    news2Title: "بركان الخضراء",
    news2Text:
      "نحن نعمل على إعداد مبادرات بيئية جديدة.",

    news3Title: "انضم إلى مجتمعنا",
    news3Text:
      "يمكن للشباب الانضمام إلينا والمشاركة في المشاريع القادمة.",

    environmentLabel: "🌱 البيئة",
    environmentTitle: "لنجعل بركان مكانًا أفضل.",
    environmentText:
      "نؤمن بأن الشباب يمكنهم المساهمة في حماية بيئتهم المحلية من خلال التوعية والعمل الجماعي والعمل الإيجابي.",
    environmentButton: "شارك معنا",

    activitiesLabel: "المجتمع",
    activitiesTitle: "الأنشطة القادمة",
    activitiesText:
      "اكتشف الأنشطة والمبادرات التي تنظمها Youth Caring Heart.",

    activity1Category: "البيئة",
    activity1Title: "تنظيف المجتمع",
    activity1Text:
      "نشاط شبابي يهدف إلى المساهمة في الحفاظ على نظافة الأماكن العامة.",

    activity2Category: "المجتمع",
    activity2Title: "بركان الخضراء",
    activity2Text:
      "مبادرة تشجع على الوعي البيئي والعمل المحلي.",

    activity3Category: "الشباب",
    activity3Title: "ورشة أفكار الشباب",
    activity3Text:
      "مساحة يمكن للشباب من خلالها مشاركة أفكارهم وتطوير مشاريع إيجابية.",

    activityButton: "شارك في النشاط ←",

    galleryLabel: "معرضنا",
    galleryTitle: "لحظات من العمل الإيجابي.",
    galleryText:
      "اكتشف لحظات من أنشطتنا المجتمعية والبيئية والشبابية.",

    gallery1: "التطوع",
    gallery2: "البيئة",
    gallery3: "الشباب",
    gallery4: "المجتمع",

    membersLabel: "👥 فضاء المنخرطين",
    membersTitle: "فضاء خاص بالمنخرطين.",
    membersText:
      "يمكن للمنخرطين الوصول إلى النقاشات والاجتماعات والأنشطة المشتركة.",

    loginTitle: "دخول المنخرطين",
    loginButton: "الدخول إلى فضاء المنخرطين",
    namePlaceholder: "اسمك",
    codePlaceholder: "رمز المنخرط",

    welcomeMember: "مرحبًا",
    meetingButton: "💬 قاعة الاجتماعات",
    logoutButton: "تسجيل الخروج",

    meetingLabel: "💬 قاعة اجتماعات المنخرطين",
    meetingTitle: "قاعة الاجتماعات",
    meetingText:
      "مساحة خاصة بالمنخرطين لمناقشة الأفكار وإعداد الأنشطة والتواصل مع الفريق.",

    meetingOnline: "🟢 اجتماع المنخرطين",
    meetingPrivate: "للمنخرطين فقط",

    welcomeMessage:
      "مرحبًا بك في قاعة اجتماعات المنخرطين.",

    messagePlaceholder: "اكتب رسالة...",
    sendButton: "إرسال",

    loginError:
      "يرجى إدخال اسمك ورمز المنخرط.",

    donation:
      "❤️ ادعم مبادرتنا من خلال وسائل رسمية وشفافة.",

    joinLabel: "🤝 شارك معنا",
    joinTitle: "انضم إلى Youth Caring Heart",
    joinText:
      "هل تريد المشاركة في أنشطتنا أو مشاركة فكرة أو دعم مبادرتنا؟",
    joinButton: "انضم إلينا",

    footer:
      "الشباب • المجتمع • البيئة • العمل"
  }
};


/* ================= LANGUAGE ================= */

let currentLanguage =
  localStorage.getItem("ych-language") || "en";

function changeLanguage(language) {

  if (!translations[language]) {
    language = "en";
  }

  currentLanguage = language;

  localStorage.setItem(
    "ych-language",
    language
  );

  const t = translations[language];

  document
    .querySelectorAll("[data-key]")
    .forEach(element => {

      const key = element.dataset.key;

      if (t[key] !== undefined) {
        element.textContent = t[key];
      }

    });


  /* HERO */

  const heroTitle =
    document.getElementById("hero-title");

  if (heroTitle) {

    heroTitle.innerHTML =
      t.heroTitle +
      "<br><span>" +
      t.heroSpan +
      "</span>";

  }


  /* INPUT PLACEHOLDERS */

  const nameInput =
    document.getElementById("memberName");

  const codeInput =
    document.getElementById("memberCode");

  const messageInput =
    document.getElementById("meetingMessage");


  if (nameInput) {
    nameInput.placeholder =
      t.namePlaceholder;
  }

  if (codeInput) {
    codeInput.placeholder =
      t.codePlaceholder;
  }

  if (messageInput) {
    messageInput.placeholder =
      t.messagePlaceholder;
  }


  document.documentElement.lang =
    language;
}


/* ================= ARTICLES ================= */

const articles = {

  environment: {

    en: {
      category: "ENVIRONMENT",
      title: "Building a Greener Berkane",
      text:
        "Young people can contribute to a cleaner and greener Berkane through awareness, teamwork, volunteering and responsible community action."
    },

    fr: {
      category: "ENVIRONNEMENT",
      title: "Construire un Berkane plus vert",
      text:
        "Les jeunes peuvent contribuer à un Berkane plus propre et plus vert grâce à la sensibilisation, au travail d'équipe et au bénévolat."
    },

    ar: {
      category: "البيئة",
      title: "نحو بركان أكثر خضرة",
      text:
        "يمكن للشباب المساهمة في جعل بركان أنظف وأكثر خضرة من خلال التوعية والعمل الجماعي والتطوع."
    }

  },

  youth: {

    en: {
      category: "YOUTH",
      title: "The Power of Youth Ideas",
      text:
        "Young people have ideas that can become meaningful projects when they work together and receive the right support."
    },

    fr: {
      category: "JEUNESSE",
      title: "Le pouvoir des idées des jeunes",
      text:
        "Les idées des jeunes peuvent devenir des projets utiles lorsqu'ils travaillent ensemble et reçoivent le soutien nécessaire."
    },

    ar: {
      category: "الشباب",
      title: "قوة أفكار الشباب",
      text:
        "يمكن لأفكار الشباب أن تتحول إلى مشاريع مفيدة عندما يعملون معًا ويحصلون على الدعم المناسب."
    }

  },

  science: {

    en: {
      category: "SCIENCE & TECHNOLOGY",
      title: "Young Minds, New Ideas",
      text:
        "Science and technology give young people new ways to learn, create and develop solutions for the future."
    },

    fr: {
      category: "SCIENCE & TECHNOLOGIE",
      title: "Jeunes esprits, nouvelles idées",
      text:
        "La science et la technologie offrent aux jeunes de nouvelles possibilités pour apprendre, créer et préparer l'avenir."
    },

    ar: {
      category: "العلوم والتكنولوجيا",
      title: "عقول شابة وأفكار جديدة",
      text:
        "تمنح العلوم والتكنولوجيا الشباب طرقًا جديدة للتعلم والإبداع وتطوير حلول للمستقبل."
    }

  }

};


function openArticle(type) {

  if (
    !articles[type] ||
    !articles[type][currentLanguage]
  ) {
    return;
  }

  const article =
    articles[type][currentLanguage];

  document.getElementById(
    "article-category"
  ).textContent =
    article.category;

  document.getElementById(
    "article-title"
  ).textContent =
    article.title;

  document.getElementById(
    "article-text"
  ).textContent =
    article.text;

  document
    .getElementById("article-modal")
    .classList.add("active");
}


function closeArticle() {

  const modal =
    document.getElementById("article-modal");

  if (modal) {
    modal.classList.remove("active");
  }

}


document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {
      closeArticle();
    }

  }
);


/* ================= MEMBERS ================= */

/*
   DEMO LOGIN

   Member code:
   YCH2026

   IMPORTANT:
   This is NOT real secure authentication.
   It is only for the current prototype.
*/


function memberLogin() {

  const nameInput =
    document.getElementById("memberName");

  const codeInput =
    document.getElementById("memberCode");

  const message =
    document.getElementById("login-message");


  if (!nameInput || !codeInput) {
    return;
  }


  const name =
    nameInput.value.trim();

  const code =
    codeInput.value.trim();


  if (!name || !code) {

    if (message) {

      message.textContent =
        translations[currentLanguage]
          .loginError;

    }

    return;
  }


  if (code !== "YCH2026") {

    if (message) {

      message.textContent =
        currentLanguage === "ar"
          ? "رمز المنخرط غير صحيح."
          : currentLanguage === "fr"
            ? "Code membre incorrect."
            : "Incorrect member code.";

    }

    return;
  }


  localStorage.setItem(
    "ych-member",
    name
  );


  if (message) {
    message.textContent = "";
  }


  showMemberDashboard(name);

}


function showMemberDashboard(name) {

  const loginBox =
    document.getElementById("login-box");

  const dashboard =
    document.getElementById("member-dashboard");

  const loggedMember =
    document.getElementById("loggedMember");


  if (loginBox) {
    loginBox.style.display = "none";
  }

  if (dashboard) {
    dashboard.style.display = "block";
  }

  if (loggedMember) {
    loggedMember.textContent = name;
  }

}


function logoutMember() {

  localStorage.removeItem(
    "ych-member"
  );


  const loginBox =
    document.getElementById("login-box");

  const dashboard =
    document.getElementById("member-dashboard");


  if (loginBox) {
    loginBox.style.display = "block";
  }

  if (dashboard) {
    dashboard.style.display = "none";
  }


  const nameInput =
    document.getElementById("memberName");

  const codeInput =
    document.getElementById("memberCode");


  if (nameInput) {
    nameInput.value = "";
  }

  if (codeInput) {
    codeInput.value = "";
  }


  const room =
    document.getElementById("meeting-room");

  if (room) {
    room.style.display = "none";
  }

}


/* ================= MEETING ROOM ================= */

function openMeetingRoom() {

  const member =
    localStorage.getItem("ych-member");


  if (!member) {
    return;
  }


  const room =
    document.getElementById("meeting-room");


  if (!room) {
    return;
  }


  room.style.display = "block";


  loadMessages();


  room.scrollIntoView({
    behavior: "smooth"
  });

}


/* ================= CHAT SYSTEM ================= */

function sendMessage() {

  const input =
    document.getElementById("meetingMessage");

  const messages =
    document.getElementById("messages");

  const member =
    localStorage.getItem("ych-member");


  if (!input || !messages || !member) {
    return;
  }


  const text =
    input.value.trim();


  if (!text) {
    return;
  }


  createMessage(
    member,
    text,
    new Date()
  );


  saveLocalMessage(
    member,
    text
  );


  input.value = "";


  input.focus();


  scrollMessages();

}


/* ================= CREATE MESSAGE ================= */

function createMessage(
  member,
  text,
  date
) {

  const messages =
    document.getElementById("messages");


  if (!messages) {
    return;
  }


  const currentMember =
    localStorage.getItem("ych-member");


  const message =
    document.createElement("div");


  message.className =
    member === currentMember
      ? "message my-message"
      : "message";


  const header =
    document.createElement("div");


  header.className =
    "message-user";


  const name =
    document.createElement("strong");


  name.textContent =
    member;


  const time =
    document.createElement("span");


  time.textContent =
    formatMessageTime(date);


  header.appendChild(name);

  header.appendChild(time);


  const paragraph =
    document.createElement("p");


  paragraph.textContent =
    text;


  message.appendChild(header);

  message.appendChild(paragraph);


  messages.appendChild(message);

}


/* ================= MESSAGE TIME ================= */

function formatMessageTime(date) {

  return new Date(date).toLocaleTimeString(
    currentLanguage === "ar"
      ? "ar-MA"
      : currentLanguage === "fr"
        ? "fr-FR"
        : "en-US",
    {
      hour: "2-digit",
      minute: "2-digit"
    }
  );

}


/* ================= SAVE MESSAGES ================= */

function saveLocalMessage(
  member,
  text
) {

  const saved =
    JSON.parse(
      localStorage.getItem(
        "ych-messages"
      ) || "[]"
    );


  saved.push({

    member: member,

    text: text,

    time:
      new Date().toISOString()

  });


  localStorage.setItem(
    "ych-messages",
    JSON.stringify(saved)
  );

}


/* ================= LOAD MESSAGES ================= */

function loadMessages() {

  const messages =
    document.getElementById("messages");


  if (!messages) {
    return;
  }


  /*
     Prevent duplicate messages
     when opening the room again.
  */

  messages.innerHTML = "";


  const welcome =
    document.createElement("div");


  welcome.className =
    "message system-message";


  const welcomeName =
    document.createElement("strong");


  welcomeName.textContent =
    "Youth Caring Heart";


  const welcomeText =
    document.createElement("p");


  welcomeText.textContent =
    translations[currentLanguage]
      .welcomeMessage;


  welcome.appendChild(
    welcomeName
  );

  welcome.appendChild(
    welcomeText
  );


  messages.appendChild(
    welcome
  );


  const saved =
    JSON.parse(
      localStorage.getItem(
        "ych-messages"
      ) || "[]"
    );


  saved.forEach(item => {

    createMessage(

      item.member,

      item.text,

      new Date(item.time)

    );

  });


  scrollMessages();

}


/* ================= SCROLL CHAT ================= */

function scrollMessages() {

  const messages =
    document.getElementById("messages");


  if (!messages) {
    return;
  }


  setTimeout(() => {

    messages.scrollTop =
      messages.scrollHeight;

  }, 50);

}


/* ================= ENTER TO SEND ================= */

document.addEventListener(
  "keydown",
  function(event) {

    const target =
      event.target;


    if (
      target &&
      target.id === "meetingMessage" &&
      event.key === "Enter"
    ) {

      event.preventDefault();

      sendMessage();

    }

  }
);


/* ================= STARTUP ================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    changeLanguage(
      currentLanguage
    );


    const savedMember =
      localStorage.getItem(
        "ych-member"
      );


    if (savedMember) {

      showMemberDashboard(
        savedMember
      );

    }

  }
);
