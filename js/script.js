// Set theme depending on local storage
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.style.setProperty("--bg", "#000");
  document.documentElement.style.setProperty("--bg-2", "#0f0f0f");
  document.documentElement.style.setProperty("--text", "#fff");
  document.documentElement.style.setProperty("--input", "#151515");
  document.querySelector(".js-project-1").src = "./assets/portfolio-dark.jpg";
  document.querySelector(".js-project-2").src = "./assets/natours-dark.jpg";
  document.querySelector(".js-project-3").src = "./assets/noticeboard-dark.jpg";
  document.documentElement.classList.add("dark");
}

const waypoint = window.screen.availHeight,
  navBox = document.getElementById("nav-box"),
  deviceWidth = window.screen.availWidth;
900 > deviceWidth
  ? navBox.classList.add("nav-bg-fill")
  : document.addEventListener("scroll", () => {
      window.scrollY + 300 > waypoint
        ? navBox.classList.add("nav-bg-fill")
        : navBox.classList.remove("nav-bg-fill");
    });
const themeBtn = document.getElementById("js-theme-switch");
themeBtn.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.style.setProperty("--bg", "#fff"),
      document.documentElement.style.setProperty("--bg-2", "#fff"),
      document.documentElement.style.setProperty("--text", "#000"),
      document.documentElement.style.setProperty("--input", "#fff"),
      (document.querySelector(".js-project-1").src = "./assets/portfolio.png"),
      (document.querySelector(".js-project-2").src = "./assets/natours.png"),
      (document.querySelector(".js-project-3").src =
        "./assets/noticeboard.png"),
      localStorage.setItem("theme", "light"),
      console.log(localStorage.getItem("dark"));
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.style.setProperty("--bg", "#000"),
      document.documentElement.style.setProperty("--bg-2", "#0f0f0f"),
      document.documentElement.style.setProperty("--text", "#fff"),
      document.documentElement.style.setProperty("--input", "#151515"),
      (document.querySelector(".js-project-1").src =
        "./assets/portfolio-dark.jpg"),
      (document.querySelector(".js-project-2").src =
        "./assets/natours-dark.jpg"),
      (document.querySelector(".js-project-3").src =
        "./assets/noticeboard-dark.jpg"),
      localStorage.setItem("theme", "dark"),
      document.documentElement.classList.add("dark");
  }
});
const projectList = document.querySelector(".js-project-list"),
  projectInfo = document.querySelector(".js-project-info-div"),
  projectBack = document.querySelector(".js-project-back"),
  projectData = [
    {
      name: "Portfolio",
      img: "./assets/portfolio-mobile.jpg",
      p1: "This one took me a while. But as I was learning new techniques, I wanted to implement them straight away in my own designs. And as this site is giving you a glimpse into my skills, it was kind of important that I understood what I was doing.",
      p2: "",
      visit: "https://joshdovey.co.uk",
      code: "https://github.com/Josh-Dovey/portfolio",
    },
    {
      name: "Natours",
      img: "./assets/natours-mobile.jpg",
      p1: "A fun project for sure. This is the first time I got to grips with flexbox. This handy system makes responsive design much easier to acheive whilst making a site look incredible! Rows, columns breakpoints it's got it all.",
      p2: "Ever since I have been using flexbox when creating websites. I'm all about websites being usable on as many devices as possible. Flexbox is supported on over 95% of devices which makes it an awesome option!",
      visit: "#",
      code: "https://github.com/Josh-Dovey/Natours",
    },
    {
      name: "Online Notice Board",
      img: "./assets/noticeboard-mobile.jpg",
      p1: "Definitely my favourite project! With the help of Node.js, React, MongoDB and my own REST API. I was able to create a web app built on top of a server. After a lot of time thinking how to implement different functionalities and many eureka moments the project was complete.",
      p2: "My favourite part about this project is the login system, through the use of JWTs (Json-Web-Tokens) the whole application is made secure. Allowing only verified users on the database to create, edit and delete documents.",
      visit: "https://kidderminster-kh-notice-board.herokuapp.com/home",
      code: "https://github.com/Josh-Dovey/dev-react-notice-board",
    },
  ],
  projectDataDark = [
    {
      img: "./assets/portfolio-mobile-dark.jpg",
    },
    {
      img: "./assets/natours-mobile-dark.jpg",
    },
    {
      img: "./assets/noticeboard-mobile-dark.jpg",
    },
  ];

document.getElementById("js-portfolio-1").addEventListener("click", () => {
  displayProject(0);
});

document.getElementById("js-portfolio-2").addEventListener("click", () => {
  displayProject(1);
});

document.getElementById("js-portfolio-3").addEventListener("click", () => {
  displayProject(2);
});
function displayProject(e) {
  document.documentElement.classList.contains("dark")
    ? ((document.getElementById("js-project-p1").innerText = projectData[e].p1),
      (document.getElementById("js-project-p2").innerText = projectData[e].p2),
      (document.getElementById("js-project-img").src = projectDataDark[e].img),
      (document.getElementById("js-project-name").innerText =
        projectData[e].name),
      document
        .getElementById("js-project-visit")
        .setAttribute("href", projectData[e].visit),
      document
        .getElementById("js-project-code")
        .setAttribute("href", projectData[e].code),
      (projectList.style.opacity = 0),
      setTimeout(() => {
        (projectList.style.display = "none"),
          (projectInfo.style.display = "block");
      }, 300),
      setTimeout(() => {
        projectInfo.style.opacity = 100;
      }, 400))
    : ((document.getElementById("js-project-p1").innerText = projectData[e].p1),
      (document.getElementById("js-project-p2").innerText = projectData[e].p2),
      (document.getElementById("js-project-img").src = projectData[e].img),
      (document.getElementById("js-project-name").innerText =
        projectData[e].name),
      document
        .getElementById("js-project-visit")
        .setAttribute("href", projectData[e].visit),
      document
        .getElementById("js-project-code")
        .setAttribute("href", projectData[e].code),
      (projectList.style.opacity = 0),
      setTimeout(() => {
        (projectList.style.display = "none"),
          (projectInfo.style.display = "block");
      }, 300),
      setTimeout(() => {
        projectInfo.style.opacity = 100;
      }, 400));
}
projectBack.addEventListener("click", () => {
  const e = document.querySelector(".js-project-info-div");
  (document.getElementById("js-project-name").innerText = "Portfolio"),
    (e.style.opacity = 0),
    setTimeout(() => {
      (e.style.display = "none"), (projectList.style.display = "block");
    }, 300),
    setTimeout(() => {
      projectList.style.opacity = 100;
    }, 400);
});
let os = new OnScreen({ tolerance: 175 });
os.on("enter", ".js-services-heading", (e, t) => {
  e.classList.add("heading-2-animate-left"),
    document.getElementById("js-services-hr").classList.add("hr-animate");
}),
  os.on("enter", ".js-portfolio-heading", (e, t) => {
    e.classList.add("heading-2-animate-right"),
      document.getElementById("js-portfolio-hr").classList.add("hr-animate");
  }),
  os.on("enter", ".js-contact-heading", (e, t) => {
    e.classList.add("heading-2-animate-left"),
      document.getElementById("js-contact-hr").classList.add("hr-animate");
  }),
  os.on("enter", ".js-services-bg-1", (e, t) => {
    e.classList.add("services-bg-left-animate"),
      document
        .querySelector(".js-services-1")
        .classList.add("services-fade-left");
  }),
  os.on("enter", ".js-services-bg-2", (e, t) => {
    e.classList.add("services-bg-right-animate"),
      document
        .querySelector(".js-services-2")
        .classList.add("services-fade-right");
  }),
  os.on("enter", ".js-services-bg-3", (e, t) => {
    e.classList.add("services-bg-left-animate"),
      document
        .querySelector(".js-services-3")
        .classList.add("services-fade-left");
  }),
  os.on("enter", ".js-services-bg-4", (e, t) => {
    e.classList.add("services-bg-right-animate"),
      document
        .querySelector(".js-services-4")
        .classList.add("services-fade-right");
  }),
  os.on("enter", ".js-project-1", (e, t) => {
    e.classList.add("project-1-animate"),
      document
        .getElementById("js-project-1-title")
        .classList.add("project-1-title-animate");
  }),
  os.on("enter", ".js-project-2", (e, t) => {
    e.classList.add("project-2-animate"),
      document
        .getElementById("js-project-2-title")
        .classList.add("project-2-title-animate");
  }),
  os.on("enter", ".js-project-3", (e, t) => {
    e.classList.add("project-3-animate"),
      document
        .getElementById("js-project-3-title")
        .classList.add("project-3-title-animate");
  }),
  os.on("enter", ".js-input-1", (e, t) => {
    e.classList.add("input-1-fade-up");
  }),
  os.on("enter", ".js-input-2", (e, t) => {
    e.classList.add("input-2-fade-up");
  }),
  os.on("enter", ".js-input-3", (e, t) => {
    e.classList.add("input-3-fade-up");
  }),
  os.on("enter", ".js-input-4", (e, t) => {
    e.classList.add("input-4-fade-up");
  }),
  os.on("enter", ".js-input-5", (e, t) => {
    e.classList.add("input-5-fade-in");
  });
