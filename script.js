/* =========================================================
   YOUTH CARING HEART
   MODERN FRONT-END JAVASCRIPT
   ========================================================= */
/* ================= LANGUAGE ================= */
const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navAnnouncements: "Announcements",
    navEvents: "Events",
    navMagazine: "Magazine",
    navGallery: "Gallery",
    navMembers: "Members",
    notifications: "Notifications"
  },
  fr: {
    navHome: "Accueil",
    navAbout: "À propos",
    navAnnouncements: "Annonces",
    navEvents: "Événements",
    navMagazine: "Magazine",
    navGallery: "Galerie",
    navMembers: "Membres",
    notifications: "Notifications"
  },
  ar: {
    navHome: "الرئيسية",
    navAbout: "من نحن",
    navAnnouncements: "الإعلانات",
    navEvents: "الفعاليات",
    navMagazine: "المجلة",
    navGallery: "المعرض",
    navMembers: "المنخرطون",
    notifications: "التنبيهات"
  }
};
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
      if (t[key]) {
        element.textContent = t[key];
      }
    });
  document.documentElement.lang = language;
  if (language === "ar") {
    document.body.dir = "rtl";
  } else {
    document.body.dir = "ltr";
  }
}
/* ================= NOTIFICATIONS ================= */
function toggleNotifications() {
  const panel =
    document.getElementById(
      "notification-panel"
    );
  panel.classList.toggle("active");
}
/* Close notification when clicking outside */
document.addEventListener(
  "click",
  function(event) {
    const panel =
      document.getElementById(
        "notification-panel"
      );
    const button =
      document.querySelector(
        ".notification-button"
      );
    if (
      panel &&
      panel.classList.contains("active") &&
      !panel.contains(event.target) &&
      !button.contains(event.target)
    ) {
      panel.classList.remove("active");
    }
  }
);
/* ================= COUNTDOWN ================= */
function updateCountdowns() {
  const countdowns =
    document.querySelectorAll(
      ".countdown"
    );
  countdowns.forEach(
    countdown => {
      const date =
        new Date(
          countdown.dataset.date
        ).getTime();
      const now =
        new Date().getTime();
      const distance =
        date - now;
      if (distance <= 0) {
        countdown.textContent =
          "Event is happening now!";
        return;
      }
      const days =
        Math.floor(
          distance /
          (1000 * 60 * 60 * 24)
        );
      const hours =
        Math.floor(
          (distance %
            (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
        );
      const minutes =
        Math.floor(
          (distance %
            (1000 * 60 * 60)) /
          (1000 * 60)
        );
      countdown.textContent =
        `Starts in ${days}d ${hours}h ${minutes}m`;
    }
  );
}
updateCountdowns();
setInterval(
  updateCountdowns,
  60000
);
/* ================= EVENTS ================= */
function joinEvent(eventName) {
  const member =
    localStorage.getItem(
      "ych-member"
    );
  if (!member) {
    alert(
      "Please log in to the Members Area first."
    );
    document
      .getElementById("members")
      .scrollIntoView({
        behavior: "smooth"
      });
    return;
  }
  alert(
    `${eventName}\n\nYou are registered for this activity.`
  );
}
/* ================= ANNOUNCEMENT ================= */
function showAnnouncement() {
  alert(
    "Youth Caring Heart is preparing new environmental initiatives for young people in Berkane."
  );
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
      category: "SCIENCE",
      title: "Young Minds, New Ideas",
      text:
        "Science and technology give young people new ways to learn, create and develop solutions for the future."
    },
    fr: {
      category: "SCIENCE",
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
  document
    .getElementById("article-modal")
    .classList.remove("active");
}
/* ================= MEMBER LOGIN ================= */
/*
   DEMO ONLY
   Code:
   YCH2026
   This is NOT secure authentication.
   Real authentication will be connected
   to the database later.
*/
function memberLogin() {
  const name =
    document
      .getElementById("memberName")
      .value
      .trim();
  const code =
    document
      .getElementById("memberCode")
      .value
      .trim();
  const message =
    document.getElementById(
      "login-message"
    );
  if (!name || !code) {
    message.textContent =
      "Please enter your name and member code.";
    return;
  }
  if (code !== "YCH2026") {
    message.textContent =
      "Incorrect member code.";
    return;
  }
  localStorage.setItem(
    "ych-member",
    name
  );
  showMemberDashboard(name);
}
function showMemberDashboard(name) {
  const loginBox =
    document.getElementById(
      "login-box"
    );
  const dashboard =
    document.getElementById(
      "member-dashboard"
    );
  const loggedMember =
    document.getElementById(
      "loggedMember"
    );
  const videoName =
    document.getElementById(
      "video-member-name"
    );
  if (loginBox) {
    loginBox.style.display =
      "none";
  }
  if (dashboard) {
    dashboard.style.display =
      "block";
  }
  if (loggedMember) {
    loggedMember.textContent =
      name;
  }
  if (videoName) {
    videoName.textContent =
      name;
  }
}
function logoutMember() {
  localStorage.removeItem(
    "ych-member"
  );
  document.getElementById(
    "login-box"
  ).style.display =
    "block";
  document.getElementById(
    "member-dashboard"
  ).style.display =
    "none";
}
/* ================= MEETING ROOM ================= */
function openMeetingRoom() {
  const member =
    localStorage.getItem(
      "ych-member"
    );
  if (!member) {
    alert(
      "Please log in first."
    );
    return;
  }
  const room =
    document.getElementById(
      "meeting-room"
    );
  room.classList.add("active");
  room.scrollIntoView({
    behavior: "smooth"
  });
}
function closeMeetingRoom() {
  const room =
    document.getElementById(
      "meeting-room"
    );
  room.classList.remove(
    "active"
  );
}
/* ================= CHAT ================= */
function sendMessage() {
  const input =
    document.getElementById(
      "meetingMessage"
    );
  const text =
    input.value.trim();
  const member =
    localStorage.getItem(
      "ych-member"
    );
  if (!member || !text) {
    return;
  }
  const message =
    document.createElement(
      "div"
    );
  message.className =
    "chat-message";
  const name =
    document.createElement(
      "strong"
    );
  name.textContent =
    member;
  const paragraph =
    document.createElement(
      "p"
    );
  paragraph.textContent =
    text;
  const time =
    document.createElement(
      "small"
    );
  time.textContent =
    "Just now";
  message.appendChild(name);
  message.appendChild(paragraph);
  message.appendChild(time);
  const messages =
    document.getElementById(
      "messages"
    );
  messages.appendChild(
    message
  );
  input.value = "";
  messages.scrollTop =
    messages.scrollHeight;
}
document
  .getElementById(
    "meetingMessage"
  )
  ?.addEventListener(
    "keydown",
    function(event) {
      if (event.key === "Enter") {
        sendMessage();
      }
    }
  );
/* ================= CAMERA ================= */
let cameraStream = null;
async function startCamera() {
  try {
    cameraStream =
      await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
    const video =
      document.getElementById(
        "local-video"
      );
    video.srcObject =
      cameraStream;
    video.style.display =
      "block";
    document.getElementById(
      "camera-placeholder"
    ).style.display =
      "none";
  } catch (error) {
    alert(
      "Camera permission was not granted."
    );
  }
}
/* ================= CAMERA CONTROL ================= */
function toggleCamera() {
  if (!cameraStream) {
    startCamera();
    return;
  }
  const videoTracks =
    cameraStream.getVideoTracks();
  videoTracks.forEach(
    track => {
      track.enabled =
        !track.enabled;
    }
  );
}
/* ================= MICROPHONE ================= */
let micEnabled = true;
function toggleMic() {
  if (!cameraStream) {
    alert(
      "Enable the camera first to activate the microphone."
    );
    return;
  }
  const audioTracks =
    cameraStream.getAudioTracks();
  micEnabled =
    !micEnabled;
  audioTracks.forEach(
    track => {
      track.enabled =
        micEnabled;
    }
  );
  const button =
    document.getElementById(
      "mic-button"
    );
  button.querySelector(
    "span"
  ).textContent =
    micEnabled
      ? "Mute"
      : "Unmute";
}
/* ================= SCREEN SHARE ================= */
async function shareScreen() {
  if (
    !navigator.mediaDevices ||
    !navigator.mediaDevices.getDisplayMedia
  ) {
    alert(
      "Screen sharing is not supported by this browser."
    );
    return;
  }
  try {
    const screen =
      await navigator.mediaDevices.getDisplayMedia({
        video: true
      });
    const video =
      document.getElementById(
        "local-video"
      );
    video.srcObject =
      screen;
  } catch (error) {
    console.log(
      "Screen sharing cancelled."
    );
  }
}
/* ================= EVENTS NAVIGATION ================= */
function scrollToEvents() {
  document
    .getElementById("events")
    .scrollIntoView({
      behavior: "smooth"
    });
}
/* ================= ESCAPE ================= */
document.addEventListener(
  "keydown",
  function(event) {
    if (event.key === "Escape") {
      closeArticle();
      const notificationPanel =
        document.getElementById(
          "notification-panel"
        );
      if (notificationPanel) {
        notificationPanel.classList.remove(
          "active"
        );
      }
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
    updateCountdowns();
  }
);
