// Set theme depending on local storage
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.style.setProperty("--bg", "#000");
  document.documentElement.style.setProperty("--bg-2", "#0f0f0f");
  document.documentElement.style.setProperty("--text", "#fff");
  document.documentElement.style.setProperty("--input", "#151515");
  // document.querySelector(".js-project-1").src = "./assets/portfolio-dark.jpg";
  // document.querySelector(".js-project-2").src = "./assets/natours-dark.jpg";
  // document.querySelector(".js-project-3").src = "./assets/noticeboard-dark.jpg";
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
      // Add white project boxes
      document.getElementById("js-portfolio").classList.add("project-box-portfolio");
    document.getElementById("js-natours").classList.add("project-box-natours");
    document.getElementById("js-trillo").classList.add("project-box-trillo");
    document.getElementById("js-omnifood").classList.add("project-box-omnifood");
    document.getElementById("js-nexter").classList.add("project-box-nexter");
    document.getElementById("js-noticeboard").classList.add("project-box-noticeboard");

    // Remove dark project boxes
    document.getElementById("js-portfolio").classList.remove("project-box-portfolio-dark");
    document.getElementById("js-natours").classList.remove("project-box-natours-dark");
    document.getElementById("js-trillo").classList.remove("project-box-trillo-dark");
    document.getElementById("js-omnifood").classList.remove("project-box-omnifood-dark");
    document.getElementById("js-nexter").classList.remove("project-box-nexter-dark");
    document.getElementById("js-noticeboard").classList.remove("project-box-noticeboard-dark");

    localStorage.setItem("theme", "light"), console.log(localStorage.getItem("dark"));
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.style.setProperty("--bg", "#000"),
      document.documentElement.style.setProperty("--bg-2", "#0f0f0f"),
      document.documentElement.style.setProperty("--text", "#fff"),
      document.documentElement.style.setProperty("--input", "#151515"),
      // Remove white project boxes
      document.getElementById("js-portfolio").classList.remove("project-box-portfolio");
    document.getElementById("js-natours").classList.remove("project-box-natours");
    document.getElementById("js-trillo").classList.remove("project-box-trillo");
    document.getElementById("js-omnifood").classList.remove("project-box-omnifood");
    document.getElementById("js-nexter").classList.remove("project-box-nexter");
    document.getElementById("js-noticeboard").classList.remove("project-box-noticeboard");

    // Add dark project boxes
    document.getElementById("js-portfolio").classList.add("project-box-portfolio-dark");
    document.getElementById("js-natours").classList.add("project-box-natours-dark");
    document.getElementById("js-trillo").classList.add("project-box-trillo-dark");
    document.getElementById("js-omnifood").classList.add("project-box-omnifood-dark");
    document.getElementById("js-nexter").classList.add("project-box-nexter-dark");
    document.getElementById("js-noticeboard").classList.add("project-box-noticeboard-dark");
    document.documentElement.classList.add("dark");
  }
});

(function () {
  let elements;
  let windowHeight;

  function init() {
    elements = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -200) {
        element.classList.add("fade-up-element");
        element.classList.remove("hidden");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

// Fade in elements
(function () {
  let elements;
  let windowHeight;

  function init() {
    elements = document.querySelectorAll(".hidden-fade");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -200) {
        element.classList.add("fade-in");
        element.classList.remove("hidden-fade");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

// Fade left elements
(function () {
  let elements;
  let windowHeight;

  function init() {
    elements = document.querySelectorAll(".hidden-fade-left");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -200) {
        element.classList.add("fade-left");
        element.classList.remove("hidden-fade-left");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

// Fade left elements
(function () {
  let elements;
  let windowHeight;

  function init() {
    elements = document.querySelectorAll(".hidden-fade-right");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -200) {
        element.classList.add("fade-right");
        element.classList.remove("hidden-fade-right");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

// Extend elements
(function () {
  let elements;
  let windowHeight;

  function init() {
    elements = document.querySelectorAll(".hidden-extend");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -200) {
        element.classList.add("extend");
        element.classList.remove("hidden-extend");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

// Services BG
// Extend elements
(function () {
  let elements;
  let windowHeight;

  function init() {
    elements = document.querySelectorAll(".hidden-bg-1");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -200) {
        element.classList.add("bg-left");
        element.classList.remove("hidden-bg-1");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

// Extend elements
(function () {
  let elements;
  let windowHeight;

  function init() {
    elements = document.querySelectorAll(".hidden-bg-2");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -200) {
        element.classList.add("bg-right");
        element.classList.remove("hidden-bg-2");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();
