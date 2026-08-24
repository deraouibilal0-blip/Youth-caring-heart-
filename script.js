/* =====================================================
   YOUTH CARING HEART — script.js
===================================================== */

/* ================= MOBILE MENU ================= */

function toggleMenu(){
  const nav = document.getElementById("nav");

  if(nav){
    nav.classList.toggle("mobile-open");
  }
}


/* ================= DARK MODE ================= */

function toggleDark(){

  document.body.classList.toggle("dark");

  const isDark =
    document.body.classList.contains("dark");

  localStorage.setItem("ych-dark", isDark);

}


/* Load saved theme */

if(localStorage.getItem("ych-dark") === "true"){
  document.body.classList.add("dark");
}


/* ================= LANGUAGE ================= */

function setLanguage(lang){

  if(lang === "ar"){

    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";

    alert("🇲🇦 تم اختيار اللغة العربية.");

  }

  else if(lang === "fr"){

    document.documentElement.lang = "fr";
    document.documentElement.dir = "ltr";

    alert("🇫🇷 Français sélectionné.");

  }

  else{

    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";

    alert("🇬🇧 English selected.");

  }

}


/* =====================================================
   COMPETITION COUNTDOWN
===================================================== */

function updateCountdowns(){

  document
    .querySelectorAll(".countdown")
    .forEach(counter => {

      const date = counter.dataset.date;

      if(!date) return;

      const target =
        new Date(date).getTime();

      const now =
        Date.now();

      let distance =
        target - now;

      if(distance < 0){
        distance = 0;
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


      if(daysElement)
        daysElement.textContent =
          String(days).padStart(2,"0");

      if(hoursElement)
        hoursElement.textContent =
          String(hours).padStart(2,"0");

      if(minutesElement)
        minutesElement.textContent =
          String(minutes).padStart(2,"0");

      if(secondsElement)
        secondsElement.textContent =
          String(seconds).padStart(2,"0");

    });

}


/* Start countdown */

updateCountdowns();

setInterval(
  updateCountdowns,
  1000
);


/* =====================================================
   COMPETITION APPLICATION
===================================================== */

let selectedCompetition = "";


/* Open application */

function joinCompetition(name){

  selectedCompetition = name;

  const modal =
    document.getElementById(
      "applicationOverlay"
    );

  const title =
    document.getElementById(
      "applicationCompetition"
    );

  if(title){
    title.textContent =
      "🏆 " + name;
  }

  if(modal){
    modal.classList.add("active");

    document.body.style.overflow =
      "hidden";
  }

}


/* Close application */

function closeApplication(){

  const modal =
    document.getElementById(
      "applicationOverlay"
    );

  if(modal){

    modal.classList.remove("active");

    document.body.style.overflow =
      "";

  }

}


/* Close by clicking outside */

document.addEventListener(
  "click",
  function(event){

    const overlay =
      document.getElementById(
        "applicationOverlay"
      );

    if(
      overlay &&
      event.target === overlay
    ){

      closeApplication();

    }

  }
);


/* Escape key */

document.addEventListener(
  "keydown",
  function(event){

    if(event.key === "Escape"){

      closeApplication();

    }

  }
);


/* =====================================================
   SUBMIT COMPETITION APPLICATION
===================================================== */

function submitApplication(event){

  if(event){
    event.preventDefault();
  }


  const name =
    document.getElementById(
      "appName"
    )?.value.trim();

  const email =
    document.getElementById(
      "appEmail"
    )?.value.trim();

  const phone =
    document.getElementById(
      "appPhone"
    )?.value.trim();


  if(!name || !email || !phone){

    alert(
      "⚠️ Please complete all required fields."
    );

    return;

  }


  const application = {

    competition:
      selectedCompetition,

    name:
      name,

    email:
      email,

    phone:
      phone,

    date:
      new Date().toISOString()

  };


  /*
    Prototype storage only.

    Later this can be replaced
    with a real secure database.
  */

  const applications =
    JSON.parse(
      localStorage.getItem(
        "ych-applications"
      ) || "[]"
    );


  applications.push(application);


  localStorage.setItem(
    "ych-applications",
    JSON.stringify(applications)
  );


  const form =
    document.getElementById(
      "applicationForm"
    );

  const success =
    document.getElementById(
      "applicationSuccess"
    );


  if(form){

    form.style.display =
      "none";

  }


  if(success){

    success.classList.add(
      "active"
    );

  }


}


/* =====================================================
   CHAT
===================================================== */

function sendChat(){

  const input =
    document.getElementById(
      "chatInput"
    );

  const messages =
    document.getElementById(
      "chatMessages"
    );


  if(!input || !messages){
    return;
  }


  const text =
    input.value.trim();


  if(!text){
    return;
  }


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


  message.appendChild(
    small
  );

  message.appendChild(
    content
  );


  messages.appendChild(
    message
  );


  input.value = "";


  messages.scrollTop =
    messages.scrollHeight;


  saveChatMessage(text);

}


/* Save chat locally */

function saveChatMessage(text){

  const messages =
    JSON.parse(
      localStorage.getItem(
        "ych-chat"
      ) || "[]"
    );


  messages.push({

    text:text,

    date:
      new Date().toISOString()

  });


  localStorage.setItem(
    "ych-chat",
    JSON.stringify(messages)
  );

}


/* =====================================================
   MEETING
===================================================== */

function meetingAction(action){

  if(action === "Leave"){

    alert(
      "📞 You left the meeting."
    );

    return;

  }


  alert(
    action +
    " selected.\n\n" +
    "This feature will be connected to the real meeting system later."
  );

}


/* =====================================================
   ADMIN — ANNOUNCEMENT
===================================================== */

function publishAnnouncement(){

  const title =
    document
      .getElementById(
        "announcementTitle"
      )
      ?.value.trim();

  const text =
    document
      .getElementById(
        "announcementText"
      )
      ?.value.trim();

  const category =
    document
      .getElementById(
        "announcementCategory"
      )
      ?.value;


  if(!title || !text){

    alert(
      "⚠️ Please complete the announcement."
    );

    return;

  }


  const grid =
    document.getElementById(
      "announcementGrid"
    );


  if(!grid){
    return;
  }


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


  const date =
    document.createElement(
      "div"
    );

  date.className =
    "announcement-date";

  date.textContent =
    category.toUpperCase();


  const heading =
    document.createElement(
      "h3"
    );

  heading.textContent =
    title;


  const paragraph =
    document.createElement(
      "p"
    );

  paragraph.className =
    "muted";

  paragraph.textContent =
    text;


  body.appendChild(date);
  body.appendChild(heading);
  body.appendChild(paragraph);

  card.appendChild(poster);
  card.appendChild(body);


  grid.prepend(card);


  saveAnnouncement(
    title,
    text,
    category
  );


  clearAnnouncementForm();


  alert(
    "📢 Announcement published!"
  );

}


/* Save announcement */

function saveAnnouncement(
  title,
  text,
  category
){

  const announcements =
    JSON.parse(
      localStorage.getItem(
        "ych-announcements"
      ) || "[]"
    );


  announcements.push({

    title:title,

    text:text,

    category:category,

    date:
      new Date().toISOString()

  });


  localStorage.setItem(
    "ych-announcements",
    JSON.stringify(
      announcements
    )
  );

}


/* Clear announcement */

function clearAnnouncementForm(){

  const title =
    document.getElementById(
      "announcementTitle"
    );

  const text =
    document.getElementById(
      "announcementText"
    );


  if(title)
    title.value = "";


  if(text)
    text.value = "";

}


/* =====================================================
   ADMIN — CREATE COMPETITION
===================================================== */

function createCompetition(){

  const name =
    document
      .getElementById(
        "competitionName"
      )
      ?.value.trim();

  const deadline =
    document
      .getElementById(
        "competitionDeadline"
      )
      ?.value;

  const type =
    document
      .getElementById(
        "competitionType"
      )
      ?.value;


  if(!name || !deadline){

    alert(
      "⚠️ Please complete the competition information."
    );

    return;

  }


  const competition = {

    name:name,

    type:type,

    deadline:deadline,

    createdAt:
      new Date().toISOString()

  };


  const competitions =
    JSON.parse(
      localStorage.getItem(
        "ych-competitions"
      ) || "[]"
    );


  competitions.push(
    competition
  );


  localStorage.setItem(
    "ych-competitions",

    JSON.stringify(
      competitions
    )
  );


  alert(
    "🏆 Competition created successfully!\n\n" +
    name
  );


  document.getElementById(
    "competitionName"
  ).value = "";

  document.getElementById(
    "competitionDeadline"
  ).value = "";

}


/* =====================================================
   DEADLINE NOTIFICATIONS
===================================================== */

function checkDeadlines(){

  document
    .querySelectorAll(
      ".countdown"
    )
    .forEach(counter => {

      const target =
        new Date(
          counter.dataset.date
        ).getTime();


      const remaining =
        target - Date.now();


      /*
        3 days before deadline
      */

      if(
        remaining > 0 &&
        remaining <=
        1000 * 60 * 60 * 24 * 3
      ){

        console.log(
          "🔔 Competition deadline is approaching!"
        );

      }

    });

}


setInterval(
  checkDeadlines,
  60000
);


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

document
  .querySelectorAll(".nav a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        const nav =
          document.getElementById(
            "nav"
          );

        if(nav){

          nav.classList.remove(
            "mobile-open"
          );

        }

      }
    );

  });


/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    updateCountdowns();

    checkDeadlines();

  }
);
