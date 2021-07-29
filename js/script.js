// Set theme depending on local storage
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.style.setProperty("--bg", "#000");
  document.documentElement.style.setProperty("--bg-2", "#0f0f0f");
  document.documentElement.style.setProperty("--text", "#fff");
  document.documentElement.style.setProperty("--input", "#151515");
  document.querySelector(".project-1").src = "./assets/portfolio-dark.png";
  document.querySelector(".project-2").src = "./assets/natours-dark.png";
  document.querySelector(".project-3").src = "./assets/noticeboard-dark.png";
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
const themeBtn = document.getElementById("theme-switch");
themeBtn.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.style.setProperty("--bg", "#fff"),
      document.documentElement.style.setProperty("--bg-2", "#fff"),
      document.documentElement.style.setProperty("--text", "#000"),
      document.documentElement.style.setProperty("--input", "#fff"),
      (document.querySelector(".project-1").src = "./assets/portfolio.png"),
      (document.querySelector(".project-2").src = "./assets/natours.png"),
      (document.querySelector(".project-3").src = "./assets/noticeboard.png"),
      localStorage.setItem("theme", "light"),
      console.log(localStorage.getItem("dark"));
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.style.setProperty("--bg", "#000"),
      document.documentElement.style.setProperty("--bg-2", "#0f0f0f"),
      document.documentElement.style.setProperty("--text", "#fff"),
      document.documentElement.style.setProperty("--input", "#151515"),
      (document.querySelector(".project-1").src =
        "./assets/portfolio-dark.png"),
      (document.querySelector(".project-2").src = "./assets/natours-dark.png"),
      (document.querySelector(".project-3").src =
        "./assets/noticeboard-dark.png"),
      localStorage.setItem("theme", "dark"),
      document.documentElement.classList.add("dark");
  }
});
const projectList = document.querySelector(".project-showcase-div"),
  projectInfo = document.querySelector(".project-info-div"),
  projectBack = document.querySelector(".project-info-back"),
  projectData = [
    {
      name: "Portfolio",
      img: "./assets/portfolio-mobile.jpg",
      p1: "This one took me a while. But as I was learning new techniques, I wanted to implement them straight away in my own designs. And as this site is giving you a glimpse into my skills, it was kind of important that I understood what I was doing.",
      p2: "",
      visit: "#",
      code: "https://github.com/Josh-Dovey/portfolio",
    },
    {
      name: "Natours",
      img: "./assets/natours-mobile.jpg",
      p1: "A fun project for sure. This is the first time I got to grips with flexbox. This handy system makes responsive design much easier to acheive whilst making a site look incredible! Rows, columns breakpoints it's got it all.",
      p2: "Ever since I have been using flexbox when creating websites. I'm all about websites being usable on as many devices as possible. Flexbox is supported on over 95% of devices which makes it an awesome option!",
      visit: "#",
      code: "#",
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

document.getElementById("portfolio-1").addEventListener("click", () => {
  displayProject(0);
});

document.getElementById("portfolio-2").addEventListener("click", () => {
  displayProject(1);
});

document.getElementById("portfolio-3").addEventListener("click", () => {
  displayProject(2);
});
function displayProject(e) {
  document.documentElement.classList.contains("dark")
    ? ((document.getElementById("project-p1").innerText = projectData[e].p1),
      (document.getElementById("project-p2").innerText = projectData[e].p2),
      (document.getElementById("project-img").src = projectDataDark[e].img),
      (document.getElementById("project-name").innerText = projectData[e].name),
      (projectList.style.opacity = 0),
      setTimeout(() => {
        (projectList.style.display = "none"),
          (projectInfo.style.display = "block");
      }, 300),
      setTimeout(() => {
        projectInfo.style.opacity = 100;
      }, 400))
    : ((document.getElementById("project-p1").innerText = projectData[e].p1),
      (document.getElementById("project-p2").innerText = projectData[e].p2),
      (document.getElementById("project-img").src = projectData[e].img),
      (document.getElementById("project-name").innerText = projectData[e].name),
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
  const e = document.querySelector(".project-info-div");
  (document.getElementById("project-name").innerText = "Portfolio"),
    (e.style.opacity = 0),
    setTimeout(() => {
      (e.style.display = "none"), (projectList.style.display = "block");
    }, 300),
    setTimeout(() => {
      projectList.style.opacity = 100;
    }, 400);
});
let os = new OnScreen({ tolerance: 175 });
os.on("enter", ".services-heading", (e, t) => {
  e.classList.add("heading-2-animate-left"),
    document.getElementById("services-hr").classList.add("hr-animate");
}),
  os.on("enter", ".portfolio-heading", (e, t) => {
    e.classList.add("heading-2-animate-right"),
      document.getElementById("portfolio-hr").classList.add("hr-animate");
  }),
  os.on("enter", ".contact-heading", (e, t) => {
    e.classList.add("heading-2-animate-left"),
      document.getElementById("contact-hr").classList.add("hr-animate");
  }),
  os.on("enter", ".services-bg-1", (e, t) => {
    e.classList.add("services-bg-left-animate"),
      document.querySelector(".services-1").classList.add("services-fade-left");
  }),
  os.on("enter", ".services-bg-2", (e, t) => {
    e.classList.add("services-bg-right-animate"),
      document
        .querySelector(".services-2")
        .classList.add("services-fade-right");
  }),
  os.on("enter", ".services-bg-3", (e, t) => {
    e.classList.add("services-bg-left-animate"),
      document.querySelector(".services-3").classList.add("services-fade-left");
  }),
  os.on("enter", ".services-bg-4", (e, t) => {
    e.classList.add("services-bg-right-animate"),
      document
        .querySelector(".services-4")
        .classList.add("services-fade-right");
  }),
  os.on("enter", ".project-1", (e, t) => {
    e.classList.add("project-1-animate"),
      document
        .getElementById("project-1-title")
        .classList.add("project-1-title-animate");
  }),
  os.on("enter", ".project-2", (e, t) => {
    e.classList.add("project-2-animate"),
      document
        .getElementById("project-2-title")
        .classList.add("project-2-title-animate");
  }),
  os.on("enter", ".project-3", (e, t) => {
    e.classList.add("project-3-animate"),
      document
        .getElementById("project-3-title")
        .classList.add("project-3-title-animate");
  }),
  os.on("enter", ".input-1", (e, t) => {
    e.classList.add("input-1-fade-up");
  }),
  os.on("enter", ".input-2", (e, t) => {
    e.classList.add("input-2-fade-up");
  }),
  os.on("enter", ".input-3", (e, t) => {
    e.classList.add("input-3-fade-up");
  }),
  os.on("enter", ".input-4", (e, t) => {
    e.classList.add("input-4-fade-up");
  }),
  os.on("enter", ".input-5", (e, t) => {
    e.classList.add("input-5-fade-in");
  });
