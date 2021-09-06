const d = document;

const portfolio = d.getElementById("js-portfolio");
const natours = d.getElementById("js-natours");
const trillo = d.getElementById("js-trillo");
const omnifood = d.getElementById("js-omnifood");
const nexter = d.getElementById("js-nexter");
const qrcoder = d.getElementById("js-qrcoder");

const setDarkTheme = () => {
  d.documentElement.style.setProperty("--bg", "#000");
  d.documentElement.style.setProperty("--bg-2", "#0f0f0f");
  d.documentElement.style.setProperty("--text", "#fff");
  d.documentElement.style.setProperty("--input", "#151515");
  // Remove white project boxes
  portfolio.classList.remove("project-box-portfolio");
  natours.classList.remove("project-box-natours");
  trillo.classList.remove("project-box-trillo");
  omnifood.classList.remove("project-box-omnifood");
  nexter.classList.remove("project-box-nexter");
  qrcoder.classList.remove("project-box-qrcoder");

  // Add dark project boxes
  portfolio.classList.add("project-box-portfolio-dark");
  natours.classList.add("project-box-natours-dark");
  trillo.classList.add("project-box-trillo-dark");
  omnifood.classList.add("project-box-omnifood-dark");
  nexter.classList.add("project-box-nexter-dark");
  qrcoder.classList.add("project-box-qrcoder-dark");
  d.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

const setLightTheme = () => {
  d.documentElement.style.setProperty("--bg", "#fff");
  d.documentElement.style.setProperty("--bg-2", "#fff");
  d.documentElement.style.setProperty("--text", "#000");
  d.documentElement.style.setProperty("--input", "#fff");
  // Add white project boxes
  portfolio.classList.add("project-box-portfolio");
  natours.classList.add("project-box-natours");
  trillo.classList.add("project-box-trillo");
  omnifood.classList.add("project-box-omnifood");
  nexter.classList.add("project-box-nexter");
  qrcoder.classList.add("project-box-qrcoder");

  // Remove dark project boxes
  portfolio.classList.remove("project-box-portfolio-dark");
  natours.classList.remove("project-box-natours-dark");
  trillo.classList.remove("project-box-trillo-dark");
  omnifood.classList.remove("project-box-omnifood-dark");
  nexter.classList.remove("project-box-nexter-dark");
  qrcoder.classList.remove("project-box-qrcoder-dark");

  localStorage.setItem("theme", "light");
  d.documentElement.classList.remove("dark");
};

// Set theme depending on local storage
if (
  localStorage.getItem("theme") === "dark" ||
  (window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    localStorage.getItem("theme") !== "light")
) {
  setDarkTheme();
}

if (localStorage.getItem("theme") === "light") {
  setLightTheme();
}

const waypoint = window.screen.availHeight,
  navBox = d.getElementById("nav-box"),
  deviceWidth = window.screen.availWidth;
900 > deviceWidth
  ? navBox.classList.add("nav-bg-fill")
  : d.addEventListener("scroll", () => {
      window.scrollY + 300 > waypoint
        ? navBox.classList.add("nav-bg-fill")
        : navBox.classList.remove("nav-bg-fill");
    });
const themeBtn = d.getElementById("js-theme-switch");
themeBtn.addEventListener("click", () => {
  if (d.documentElement.classList.contains("dark")) {
    setLightTheme();
  } else {
    setDarkTheme();
  }
});

(function () {
  let elements;
  let windowHeight;

  function init() {
    elements = d.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (const i of elements) {
      let positionFromTop = i.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -200) {
        i.classList.add("fade-up-element");
        i.classList.remove("hidden");
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
    elements = d.querySelectorAll(".hidden-fade");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (const i of elements) {
      let positionFromTop = i.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -200) {
        i.classList.add("fade-in");
        i.classList.remove("hidden-fade");
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
    elements = d.querySelectorAll(".hidden-fade-left");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (const i of elements) {
      let positionFromTop = i.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -200) {
        i.classList.add("fade-left");
        i.classList.remove("hidden-fade-left");
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
    elements = d.querySelectorAll(".hidden-fade-right");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (const i of elements) {
      let positionFromTop = i.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -200) {
        i.classList.add("fade-right");
        i.classList.remove("hidden-fade-right");
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
    elements = d.querySelectorAll(".hidden-extend");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (const i of elements) {
      let positionFromTop = i.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -200) {
        i.classList.add("extend");
        i.classList.remove("hidden-extend");
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
    elements = d.querySelectorAll(".hidden-bg-1");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (const i of elements) {
      let positionFromTop = i.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -200) {
        i.classList.add("bg-left");
        i.classList.remove("hidden-bg-1");
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
    elements = d.querySelectorAll(".hidden-bg-2");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (const i of elements) {
      let positionFromTop = i.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -200) {
        i.classList.add("bg-right");
        i.classList.remove("hidden-bg-2");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();
