/* ==================================================
   YOUTH CARING HEART
   FINAL JAVASCRIPT
================================================== */


/* ==================================================
   MOBILE MENU
================================================== */

function toggleMenu() {

  const nav = document.getElementById("nav");

  if (!nav) return;

  nav.classList.toggle("mobile-open");
}


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav a").forEach(link => {

  link.addEventListener("click", () => {

    const nav = document.getElementById("nav");

    if (nav) {
      nav.classList.remove("mobile-open");
    }

  });

});


/* ==================================================
   DARK MODE
================================================== */

function toggleDark() {

  document.body.classList.toggle("dark");

  const isDark =
    document.body.classList.contains("dark");

  localStorage.setItem(
    "ych-dark-mode",
    isDark ? "true" : "false"
  );

}


/* Load saved theme */

if (
  localStorage.getItem("ych-dark-mode") === "true"
) {

  document.body.classList.add("dark");

}


/* ==================================================
   LANGUAGE
================================================== */

function setLanguage(language) {

  if (language === "ar") {

    document.documentElement.dir = "rtl";

    alert(
      "🇲🇦 العربية ستكون متاحة بشكل كامل في النسخة القادمة."
    );

    return;
  }


  if (language === "fr") {

    document.documentElement.dir = "ltr";

    alert(
      "🇫🇷 La version française complète sera ajoutée prochainement."
    );

    return;
  }


  document.documentElement.dir = "ltr";

}


/* ==================================================
   COUNTDOWN SYSTEM
================================================== */

function updateCountdowns() {

  const countdowns =
    document.querySelectorAll(".countdown");


  countdowns.forEach(counter => {

    const date = counter.dataset.date;

    if (!date) return;


    const target =
      new Date(date).getTime();

    const now =
      Date.now();

    let distance =
      target - now;


    /* Competition finished */

    if (distance <= 0) {

      distance = 0;

      const competition =
        counter.closest(".competition");

      if (competition) {

        const badge =
          competition.querySelector(".badge");

        if (badge) {

          badge.textContent =
            "REGISTRATION CLOSED";

          badge.style.background =
            "#f4d6d5";

        }

      }

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


    const seconds =
      Math.floor(
        (distance %
          (1000 * 60)) /
        1000
      );


    const daysElement =
      counter.querySelector(".days");

    const hoursElement =
      counter.querySelector(".hours");

    const minutesElement =
      counter.querySelector(".minutes");

    const secondsElement =
      counter.querySelector(".seconds");


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


/* Start countdown */

updateCountdowns();

setInterval(
  updateCountdowns,
  1000
);


/* ==================================================
   COMPETITION APPLICATION
================================================== */

function joinCompetition(name) {

  const overlay =
    document.getElementById(
      "applicationOverlay"
    );

  const title =
    document.getElementById(
      "applicationCompetition"
    );


  if (!overlay || !title) return;


  title.textContent =
    "🏆 " + name + " Competition";


  overlay.classList.add("active");


  document.body.style.overflow =
    "hidden";


  const success =
    document.getElementById(
      "applicationSuccess"
    );


  const form =
    document.getElementById(
      "applicationForm"
    );


  if (success) {

    success.style.display =
      "none";

  }


  if (form) {

    form.style.display =
      "block";

  }

}


function closeApplication() {

  const overlay =
    document.getElementById(
      "applicationOverlay"
    );


  if (!overlay) return;


  overlay.classList.remove("active");


  document.body.style.overflow =
    "";


  const form =
    document.getElementById(
      "applicationForm"
    );


  const success =
    document.getElementById(
      "applicationSuccess"
    );


  if (form) {

    form.reset();

    form.style.display =
      "block";

  }


  if (success) {

    success.style.display =
      "none";

  }

}


/* Close modal by clicking outside */

const applicationOverlay =
  document.getElementById(
    "applicationOverlay"
  );


if (applicationOverlay) {

  applicationOverlay.addEventListener(
    "click",
    function(event) {

      if (
        event.target ===
        applicationOverlay
      ) {

        closeApplication();

      }

    }
  );

}


/* Close modal with Escape */

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {

      closeApplication();

    }

  }
);


/* ==================================================
   SUBMIT APPLICATION
================================================== */

function submitApplication(event) {

  event.preventDefault();


  const form =
    document.getElementById(
      "applicationForm"
    );

  const success =
    document.getElementById(
      "applicationSuccess"
    );


  if (!form || !success) return;


  const name =
    document.getElementById(
      "appName"
    ).value.trim();

  const email =
    document.getElementById(
      "appEmail"
    ).value.trim();

  const phone =
    document.getElementById(
      "appPhone"
    ).value.trim();


  if (
    !name ||
    !email ||
    !phone
  ) {

    alert(
      "Please complete all required fields."
    );

    return;

  }


  /*
    DEMO STORAGE

    This saves the application
    only in this browser.

    A real database will be connected
    later for the production website.
  */

  const applications =
    JSON.parse(
      localStorage.getItem(
        "ych-applications"
      ) || "[]"
    );


  const competition =
    document
      .getElementById(
        "applicationCompetition"
      )
      .textContent;


  applications.push({

    name: name,

    email: email,

    phone: phone,

    competition: competition,

    date:
      new Date().toISOString()

  });


  localStorage.setItem(
    "ych-applications",
    JSON.stringify(applications)
  );


  form.style.display =
    "none";


  success.style.display =
    "block";


  showNotification(
    "🎉 Application submitted successfully!"
  );

}


/* ==================================================
   CHAT
================================================== */

function sendChat() {

  const input =
    document.getElementById(
      "chatInput"
    );

  const messages =
    document.getElementById(
      "chatMessages"
    );


  if (!input || !messages) return;


  const text =
    input.value.trim();


  if (!text) return;


  const message =
    document.createElement("div");


  message.className =
    "message mine";


  const small =
    document.createElement("small");


  small.textContent =
    "You";


  const content =
    document.createElement("div");


  content.textContent =
    text;


  message.appendChild(small);

  message.appendChild(content);


  messages.appendChild(message);


  input.value = "";


  messages.scrollTop =
    messages.scrollHeight;


  /*
    Demo automatic response
  */

  setTimeout(() => {

    const reply =
      document.createElement("div");


    reply.className =
      "message";


    const replyName =
      document.createElement("small");


    replyName.textContent =
      "Youth Caring Heart";


    const replyText =
      document.createElement("div");


    replyText.textContent =
      "Thanks for your message! ❤️";


    reply.appendChild(replyName);

    reply.appendChild(replyText);


    messages.appendChild(reply);


    messages.scrollTop =
      messages.scrollHeight;

  }, 700);

}


/* ==================================================
   CHANNELS
================================================== */

document
  .querySelectorAll(".channel")
  .forEach(channel => {

    channel.addEventListener(
      "click",
      function() {

        document
          .querySelectorAll(".channel")
          .forEach(item => {

            item.classList.remove(
              "active"
            );

          });


        this.classList.add(
          "active"
        );


        const chatHeader =
          document.querySelector(
            ".chat-header"
          );


        if (chatHeader) {

          const channelName =
            this.textContent.trim();


          chatHeader.innerHTML =
            channelName +
            '<span>24 members</span>';

        }

      }
    );

  });


/* ==================================================
   ANNOUNCEMENT SYSTEM
================================================== */

function publishAnnouncement() {

  const title =
    document
      .getElementById(
        "announcementTitle"
      )
      .value.trim();


  const text =
    document
      .getElementById(
        "announcementText"
      )
      .value.trim();


  const category =
    document
      .getElementById(
        "announcementCategory"
      )
      .value;


  if (!title || !text) {

    alert(
      "Please complete the announcement."
    );

    return;

  }


  const grid =
    document.getElementById(
      "announcementGrid"
    );


  if (!grid) return;


  const card =
    document.createElement(
      "article"
    );


  card.className =
    "announcement";


  const poster =
    document.createElement(
      "div"
    );


  poster.className =
    "announcement-poster";


  poster.textContent =
    "📢";


  const body =
    document.createElement(
      "div"
    );


  body.className =
    "announcement-body";


  const categoryElement =
    document.createElement(
      "div"
    );


  categoryElement.className =
    "announcement-date";


  categoryElement.textContent =
    category.toUpperCase();


  const heading =
    document.createElement(
      "h3"
    );


  heading.textContent =
    title;


  const description =
    document.createElement(
      "p"
    );


  description.className =
    "muted";


  description.textContent =
    text;


  body.appendChild(
    categoryElement
  );

  body.appendChild(
    heading
  );

  body.appendChild(
    description
  );


  card.appendChild(
    poster
  );

  card.appendChild(
    body
  );


  grid.prepend(card);


  clearAnnouncementForm();


  showNotification(
    "📢 Announcement published!"
  );

}


/* ==================================================
   CLEAR ANNOUNCEMENT FORM
================================================== */

function clearAnnouncementForm() {

  const title =
    document.getElementById(
      "announcementTitle"
    );

  const text =
    document.getElementById(
      "announcementText"
    );


  if (title) {

    title.value = "";

  }


  if (text) {

    text.value = "";

  }

}


/* ==================================================
   CREATE COMPETITION
================================================== */

function createCompetition() {

  const name =
    document
      .getElementById(
        "competitionName"
      )
      .value.trim();


  const deadline =
    document
      .getElementById(
        "competitionDeadline"
      )
      .value;


  const type =
    document
      .getElementById(
        "competitionType"
      )
      .value;


  if (!name || !deadline) {

    alert(
      "Please complete the competition information."
    );

    return;

  }


  /*
    Save competition locally
    for this prototype.
  */

  const competitions =
    JSON.parse(
      localStorage.getItem(
        "ych-competitions"
      ) || "[]"
    );


  competitions.push({

    name: name,

    type: type,

    deadline: deadline,

    created:
      new Date().toISOString()

  });


  localStorage.setItem(
    "ych-competitions",
    JSON.stringify(
      competitions
    )
  );


  showNotification(
    "🏆 Competition created successfully!"
  );


  document
    .getElementById(
      "competitionName"
    )
    .value = "";


  document
    .getElementById(
      "competitionDeadline"
    )
    .value = "";

}


/* ==================================================
   NOTIFICATION
================================================== */

function showNotification(message) {

  const notification =
    document.createElement(
      "div"
    );


  notification.textContent =
    message;


  notification.style.position =
    "fixed";

  notification.style.bottom =
    "25px";

  notification.style.right =
    "25px";

  notification.style.zIndex =
    "5000";

  notification.style.background =
    "#173f2a";

  notification.style.color =
    "white";

  notification.style.padding =
    "14px 20px";

  notification.style.borderRadius =
    "14px";

  notification.style.fontWeight =
    "800";

  notification.style.boxShadow =
    "0 10px 30px rgba(0,0,0,.2)";


  document.body.appendChild(
    notification
  );


  setTimeout(() => {

    notification.remove();

  }, 3000);

}


/* ==================================================
   DEADLINE WARNING
================================================== */

function checkDeadlines() {

  document
    .querySelectorAll(".countdown")
    .forEach(counter => {

      const date =
        counter.dataset.date;

      if (!date) return;


      const target =
        new Date(date).getTime();


      const remaining =
        target - Date.now();


      /*
        Warning when less than
        24 hours remain.
      */

      if (
        remaining > 0 &&
        remaining <=
          1000 *
          60 *
          60 *
          24
      ) {

        const competition =
          counter.closest(
            ".competition"
          );


        if (competition) {

          competition.dataset.warning =
            "true";

        }

      }

    });

}


checkDeadlines();

setInterval(
  checkDeadlines,
  60000
);


/* ==================================================
   PREVENT BODY SCROLL WHEN MODAL IS OPEN
================================================== */

window.addEventListener(
  "beforeunload",
  () => {

    document.body.style.overflow =
      "";

  }
);


/* ==================================================
   STARTUP MESSAGE
================================================== */

console.log(
  "❤️ Youth Caring Heart platform loaded successfully."
);
