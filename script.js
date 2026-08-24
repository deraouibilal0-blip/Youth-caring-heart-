/* =====================================================
   YOUTH CARING HEART — JAVASCRIPT
   ===================================================== */

/* ================= MOBILE MENU ================= */

function toggleMenu() {
  const nav = document.getElementById("nav");

  if (nav) {
    nav.classList.toggle("mobile-open");
  }
}


/* ================= DARK MODE ================= */

function toggleDark() {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  localStorage.setItem("ych-dark", isDark ? "true" : "false");
}

if (localStorage.getItem("ych-dark") === "true") {
  document.body.classList.add("dark");
}


/* ================= LANGUAGE ================= */

function setLanguage(language) {

  if (language === "ar") {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";

    alert("🇲🇦 العربية ستكون متاحة بشكل كامل في النسخة القادمة.");
  }

  else if (language === "fr") {
    document.documentElement.lang = "fr";
    document.documentElement.dir = "ltr";

    alert("🇫🇷 La version française sera disponible prochainement.");
  }

  else {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
  }
}


/* ================= COMPETITION COUNTDOWN ================= */

function updateCountdowns() {

  const countdowns = document.querySelectorAll(".countdown");

  countdowns.forEach(function (counter) {

    const date = counter.getAttribute("data-date");

    if (!date) return;

    const target = new Date(date).getTime();
    const now = Date.now();

    let distance = target - now;

    if (distance < 0) {
      distance = 0;
    }

    const days = Math.floor(
      distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) /
      (1000 * 60)
    );

    const seconds = Math.floor(
      (distance % (1000 * 60)) /
      1000
    );


    const daysElement = counter.querySelector(".days");
    const hoursElement = counter.querySelector(".hours");
    const minutesElement = counter.querySelector(".minutes");
    const secondsElement = counter.querySelector(".seconds");


    if (daysElement) {
      daysElement.textContent =
        String(days).padStart(2, "0");
    }

    if (hoursElement) {
      hoursElement.textContent =
        String(hours).padStart(2, "0");
    }

    if (minutesElement) {
      minutesElement.textContent =
        String(minutes).padStart(2, "0");
    }

    if (secondsElement) {
      secondsElement.textContent =
        String(seconds).padStart(2, "0");
    }
  });
}

updateCountdowns();

setInterval(updateCountdowns, 1000);


/* ================= COMPETITION JOIN ================= */

function joinCompetition(name) {

  alert(
    "🏆 " +
    name +
    "\n\nRegistration selected successfully!\n\n" +
    "The complete registration system will be connected later."
  );
}


/* ================= COMMUNITY CHAT ================= */

function sendChat() {

  const input = document.getElementById("chatInput");
  const messages = document.getElementById("chatMessages");

  if (!input || !messages) return;

  const text = input.value.trim();

  if (!text) return;


  const message = document.createElement("div");

  message.className = "message mine";

  message.innerHTML = `
    <small>You</small>
    <div></div>
  `;

  message.querySelector("div").textContent = text;

  messages.appendChild(message);

  input.value = "";

  messages.scrollTop = messages.scrollHeight;
}


/* ================= CHAT CHANNELS ================= */

document.addEventListener("DOMContentLoaded", function () {

  const channels = document.querySelectorAll(".channel");

  channels.forEach(function (channel) {

    channel.addEventListener("click", function () {

      channels.forEach(function (item) {
        item.classList.remove("active");
      });

      channel.classList.add("active");

      const header = document.querySelector(".chat-header");

      if (header) {
        header.innerHTML =
          channel.textContent +
          '<span style="float:right;font-size:12px;opacity:.6">Community</span>';
      }
    });

  });

});


/* ================= MEETING ROOM ================= */

function meetingAction(action) {

  if (action === "Leave") {

    alert("📞 You left the meeting.");

    return;
  }


  if (action === "Camera") {

    alert("📹 Camera control selected.");

    return;
  }


  if (action === "Microphone") {

    alert("🎤 Microphone control selected.");

    return;
  }


  if (action === "Screen Share") {

    alert("🖥️ Screen sharing will be connected later.");

    return;
  }


  if (action === "Chat") {

    alert("💬 Meeting chat opened.");

    return;
  }
}


/* ================= ANNOUNCEMENT MANAGER ================= */

function publishAnnouncement() {

  const titleElement =
    document.getElementById("announcementTitle");

  const textElement =
    document.getElementById("announcementText");

  const categoryElement =
    document.getElementById("announcementCategory");

  const grid =
    document.getElementById("announcementGrid");


  if (
    !titleElement ||
    !textElement ||
    !categoryElement ||
    !grid
  ) {
    return;
  }


  const title = titleElement.value.trim();

  const text = textElement.value.trim();

  const category = categoryElement.value;


  if (!title || !text) {

    alert("⚠️ Please complete the announcement.");

    return;
  }


  const card = document.createElement("article");

  card.className = "announcement";


  card.innerHTML = `
    <div class="poster">📢</div>

    <div class="announcement-body">

      <small>
        ${category.toUpperCase()}
      </small>

      <h3></h3>

      <p></p>

    </div>
  `;


  card.querySelector("h3").textContent = title;

  card.querySelector("p").textContent = text;


  grid.prepend(card);


  titleElement.value = "";

  textElement.value = "";


  alert("📢 Announcement published!");
}


/* ================= CLEAR ANNOUNCEMENT ================= */

function clearAnnouncementForm() {

  const title =
    document.getElementById("announcementTitle");

  const text =
    document.getElementById("announcementText");


  if (title) {
    title.value = "";
  }

  if (text) {
    text.value = "";
  }
}


/* ================= CREATE COMPETITION ================= */

function createCompetition() {

  const nameElement =
    document.getElementById("competitionName");

  const deadlineElement =
    document.getElementById("competitionDeadline");

  const typeElement =
    document.getElementById("competitionType");


  if (
    !nameElement ||
    !deadlineElement ||
    !typeElement
  ) {
    return;
  }


  const name = nameElement.value.trim();

  const deadline = deadlineElement.value;

  const type = typeElement.value;


  if (!name || !deadline) {

    alert(
      "⚠️ Please complete the competition information."
    );

    return;
  }


  alert(
    "🏆 Competition created!\n\n" +
    "Name: " +
    name +
    "\nType: " +
    type +
    "\nDeadline: " +
    deadline +
    "\n\nThe database will be connected in the next stage."
  );


  nameElement.value = "";

  deadlineElement.value = "";
}


/* ================= DEADLINE NOTIFICATIONS ================= */

function checkDeadlines() {

  const countdowns =
    document.querySelectorAll(".countdown");


  countdowns.forEach(function (counter) {

    const date =
      counter.getAttribute("data-date");


    if (!date) return;


    const target =
      new Date(date).getTime();


    const remaining =
      target - Date.now();


    const threeDays =
      1000 * 60 * 60 * 24 * 3;


    if (
      remaining > 0 &&
      remaining <= threeDays
    ) {

      console.log(
        "🔔 Competition deadline is approaching!"
      );
    }

  });
}


setInterval(checkDeadlines, 60000);


/* ================= CLOSE MOBILE MENU ================= */

document.addEventListener("click", function (event) {

  const nav =
    document.getElementById("nav");

  const menuButton =
    document.querySelector(".menu-btn");


  if (!nav || !menuButton) return;


  if (
    window.innerWidth <= 900 &&
    !nav.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {

    nav.classList.remove("mobile-open");
  }

});


/* ================= ESCAPE KEY ================= */

document.addEventListener("keydown", function (event) {

  if (event.key === "Escape") {

    const nav =
      document.getElementById("nav");

    if (nav) {
      nav.classList.remove("mobile-open");
    }
  }

});


/* ================= STARTUP ================= */

console.log(
  "❤️ Youth Caring Heart platform loaded successfully."
);
