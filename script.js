/* =========================================================
   YOUTH CARING HEART
   PLATFORM FRONTEND SYSTEM
   ========================================================= */


/* ================= DARK MODE ================= */

function toggleDarkMode() {

  document.body.classList.toggle("dark");

  const enabled =
    document.body.classList.contains("dark");

  localStorage.setItem(
    "ych-dark-mode",
    enabled ? "1" : "0"
  );
}


if (
  localStorage.getItem("ych-dark-mode") === "1"
) {
  document.body.classList.add("dark");
}


/* ================= MOBILE MENU ================= */

function toggleMobileMenu() {

  document
    .getElementById("mobileMenu")
    .classList.toggle("active");

}

function closeMobileMenu() {

  document
    .getElementById("mobileMenu")
    .classList.remove("active");

}


/* ================= NOTIFICATIONS ================= */

function toggleNotifications() {

  document
    .getElementById("notificationsPanel")
    .classList.toggle("active");

}


/* ================= EVENT COUNTDOWN ================= */

function startEventCountdown() {

  const eventDate =
    new Date("2026-08-28T10:00:00");

  const element =
    document.getElementById(
      "eventCountdown"
    );

  function update() {

    const now = new Date();

    const difference =
      eventDate - now;

    if (difference <= 0) {

      element.textContent =
        "The event is starting now.";

      return;

    }

    const days =
      Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
      );

    const hours =
      Math.floor(
        difference /
        (1000 * 60 * 60)
      ) % 24;

    const minutes =
      Math.floor(
        difference /
        (1000 * 60)
      ) % 60;

    element.textContent =
      `${days} days • ${hours} hours • ${minutes} minutes remaining`;

  }

  update();

  setInterval(update, 60000);

}


/* ================= COMPETITION ================= */

let currentCompetition = "";


const competitions = {

  football: {

    type: "SPORTS",
    title: "YCH Football League",
    description:
      "A youth football league where teams compete, collect points and progress through the official ranking."
  },

  chess: {

    type: "MIND SPORTS",
    title: "YCH Chess League",
    description:
      "An individual chess competition with an organized ranking and points system."
  }

};


function openCompetition(type) {

  currentCompetition = type;

  const competition =
    competitions[type];

  if (!competition) return;

  document.getElementById(
    "modalCompetitionType"
  ).textContent =
    competition.type;

  document.getElementById(
    "modalCompetitionTitle"
  ).textContent =
    competition.title;

  document.getElementById(
    "modalCompetitionDescription"
  ).textContent =
    competition.description;

  document
    .getElementById("competitionModal")
    .classList.add("active");

}


function closeCompetition() {

  document
    .getElementById("competitionModal")
    .classList.remove("active");

}


function showLeagueTab(tab) {

  document
    .querySelectorAll(".league-tab")
    .forEach(
      element =>
        element.classList.remove("active")
    );

  document
    .querySelectorAll(".league-tabs button")
    .forEach(
      element =>
        element.classList.remove("active")
    );

  const target =
    document.getElementById(
      tab + "Tab"
    );

  if (target) {
    target.classList.add("active");
  }

  const buttons =
    document.querySelectorAll(
      ".league-tabs button"
    );

  if (tab === "ranking") {
    buttons[0].classList.add("active");
  }

  if (tab === "rules") {
    buttons[1].classList.add("active");
  }

  if (tab === "register") {
    buttons[2].classList.add("active");
  }

}


/* ================= FOOTBALL REGISTRATION COUNTDOWN ================= */

function startRegistrationCountdown() {

  const deadline =
    new Date("2026-08-29T23:59:59");

  const element =
    document.getElementById(
      "footballCountdown"
    );

  function update() {

    const now = new Date();

    const difference =
      deadline - now;

    if (difference <= 0) {

      element.textContent =
        "Registration closed";

      return;

    }

    const days =
      Math.ceil(
        difference /
        (1000 * 60 * 60 * 24)
      );

    element.textContent =
      `${days} days`;

  }

  update();

  setInterval(update, 60000);

}


/* ================= CALENDAR ================= */

let calendarDate =
  new Date(2026, 7, 1);


function generateCalendar() {

  const container =
    document.getElementById(
      "calendarDays"
    );

  const title =
    document.getElementById(
      "calendarMonth"
    );

  if (!container || !title) return;

  container.innerHTML = "";

  const year =
    calendarDate.getFullYear();

  const month =
    calendarDate.getMonth();

  const monthName =
    calendarDate.toLocaleString(
      "en-US",
      {
        month: "long"
      }
    );

  title.textContent =
    `${monthName} ${year}`;

  const firstDay =
    new Date(
      year,
      month,
      1
    ).getDay();

  let mondayIndex =
    firstDay === 0
      ? 6
      : firstDay - 1;

  for (
    let i = 0;
    i < mondayIndex;
    i++
  ) {

    const empty =
      document.createElement("div");

    empty.className =
      "calendar-day";

    container.appendChild(empty);

  }


  const days =
    new Date(
      year,
      month + 1,
      0
    ).getDate();


  for (
    let day = 1;
    day <= days;
    day++
  ) {

    const cell =
      document.createElement("div");

    cell.className =
      "calendar-day";

    cell.textContent =
      day;


    if (
      year === 2026 &&
      month === 7 &&
      day === 28
    ) {

      cell.classList.add("event");

      const event =
        document.createElement("span");

      event.textContent =
        "🌱 Green Berkane";

      cell.appendChild(event);

    }


    if (
      year === 2026 &&
      month === 7 &&
      day === 29
    ) {

      cell.classList.add("event");

      const event =
        document.createElement("span");

      event.textContent =
        "⚽ Registration";

      cell.appendChild(event);

    }


    container.appendChild(cell);

  }

}


function previousMonth() {

  calendarDate.setMonth(
    calendarDate.getMonth() - 1
  );

  generateCalendar();

}


function nextMonth() {

  calendarDate.setMonth(
    calendarDate.getMonth() + 1
  );

  generateCalendar();

}


/* ================= COMMUNITY CHAT ================= */

function sendChatMessage() {

  const input =
    document.getElementById(
      "chatInput"
    );

  const text =
    input.value.trim();

  if (!text) return;


  const container =
    document.getElementById(
      "chatMessages"
    );


  const message =
    document.createElement("div");

  message.className =
    "chat-message sent";


  message.innerHTML = `
    <div>
      <strong>You</strong>
      <p></p>
      <small>Now</small>
    </div>
  `;


  message
    .querySelector("p")
    .textContent = text;


  container.appendChild(message);

  input.value = "";

  container.scrollTop =
    container.scrollHeight;

}


document
  .getElementById("chatInput")
  ?.addEventListener(
    "keydown",
    function(event) {

      if (event.key === "Enter") {
        sendChatMessage();
      }

    }
  );


/* ================= MEETING ROOM ================= */

function toggleMeetingButton(button) {

  button.classList.toggle("active");

  if (
    button.textContent.includes("🎤")
  ) {

    button.textContent =
      button.classList.contains("active")
        ? "🔇"
        : "🎤";

  }

  if (
    button.textContent.includes("📹")
  ) {

    button.textContent =
      button.classList.contains("active")
        ? "🚫"
        : "📹";

  }

}


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

    await navigator
      .mediaDevices
      .getDisplayMedia({
        video: true
      });

  } catch (error) {

    console.log(
      "Screen sharing cancelled."
    );

  }

}


/* ================= PROFILE ================= */

function openProfile() {

  const profile =
    document.getElementById(
      "profile"
    );

  if (profile) {

    profile.scrollIntoView({
      behavior: "smooth"
    });

  }

}


/* ================= INITIALIZATION ================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    startEventCountdown();

    startRegistrationCountdown();

    generateCalendar();

  }
);


/* ================= CLOSE MODAL WITH ESC ================= */

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {

      closeCompetition();

      document
        .getElementById("notificationsPanel")
        ?.classList.remove("active");

    }

  }
);


/* ================= FUTURE AI SYSTEM ================= */

/*
   AI MODULE — FUTURE BACKEND

   Later we can connect an AI service to:

   1. Calculate competition points.
   2. Detect registration deadlines.
   3. Recommend activities.
   4. Notify members.
   5. Summarize announcements.
   6. Help administrators manage competitions.
   7. Analyze participation statistics.

   IMPORTANT:
   The real AI API key must NEVER be placed
   directly inside this frontend JavaScript file.
*/
