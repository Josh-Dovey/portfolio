const d = document;

// Set theme depending on local storage
if (localStorage.getItem("theme") === "dark") {
  d.documentElement.style.setProperty("--bg", "#000");
  d.documentElement.style.setProperty("--bg-2", "#0f0f0f");
  d.documentElement.style.setProperty("--text", "#fff");
  d.documentElement.style.setProperty("--input", "#151515");
  // Remove white project boxes
  d.getElementById("js-portfolio").classList.remove("project-box-portfolio");
  d.getElementById("js-natours").classList.remove("project-box-natours");
  d.getElementById("js-trillo").classList.remove("project-box-trillo");
  d.getElementById("js-omnifood").classList.remove("project-box-omnifood");
  d.getElementById("js-nexter").classList.remove("project-box-nexter");
  d.getElementById("js-noticeboard").classList.remove("project-box-noticeboard");

  // Add dark project boxes
  d.getElementById("js-portfolio").classList.add("project-box-portfolio-dark");
  d.getElementById("js-natours").classList.add("project-box-natours-dark");
  d.getElementById("js-trillo").classList.add("project-box-trillo-dark");
  d.getElementById("js-omnifood").classList.add("project-box-omnifood-dark");
  d.getElementById("js-nexter").classList.add("project-box-nexter-dark");
  d.getElementById("js-noticeboard").classList.add("project-box-noticeboard-dark");
  d.documentElement.classList.add("dark");
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
    d.documentElement.style.setProperty("--bg", "#fff");
    d.documentElement.style.setProperty("--bg-2", "#fff");
    d.documentElement.style.setProperty("--text", "#000");
    d.documentElement.style.setProperty("--input", "#fff");
    // Add white project boxes
    d.getElementById("js-portfolio").classList.add("project-box-portfolio");
    d.getElementById("js-natours").classList.add("project-box-natours");
    d.getElementById("js-trillo").classList.add("project-box-trillo");
    d.getElementById("js-omnifood").classList.add("project-box-omnifood");
    d.getElementById("js-nexter").classList.add("project-box-nexter");
    d.getElementById("js-noticeboard").classList.add("project-box-noticeboard");

    // Remove dark project boxes
    d.getElementById("js-portfolio").classList.remove("project-box-portfolio-dark");
    d.getElementById("js-natours").classList.remove("project-box-natours-dark");
    d.getElementById("js-trillo").classList.remove("project-box-trillo-dark");
    d.getElementById("js-omnifood").classList.remove("project-box-omnifood-dark");
    d.getElementById("js-nexter").classList.remove("project-box-nexter-dark");
    d.getElementById("js-noticeboard").classList.remove("project-box-noticeboard-dark");

    localStorage.setItem("theme", "light");
    d.documentElement.classList.remove("dark");
  } else {
    d.documentElement.style.setProperty("--bg", "#000");
    d.documentElement.style.setProperty("--bg-2", "#0f0f0f");
    d.documentElement.style.setProperty("--text", "#fff");
    d.documentElement.style.setProperty("--input", "#151515");
    // Remove white project boxes
    d.getElementById("js-portfolio").classList.remove("project-box-portfolio");
    d.getElementById("js-natours").classList.remove("project-box-natours");
    d.getElementById("js-trillo").classList.remove("project-box-trillo");
    d.getElementById("js-omnifood").classList.remove("project-box-omnifood");
    d.getElementById("js-nexter").classList.remove("project-box-nexter");
    d.getElementById("js-noticeboard").classList.remove("project-box-noticeboard");

    // Add dark project boxes
    d.getElementById("js-portfolio").classList.add("project-box-portfolio-dark");
    d.getElementById("js-natours").classList.add("project-box-natours-dark");
    d.getElementById("js-trillo").classList.add("project-box-trillo-dark");
    d.getElementById("js-omnifood").classList.add("project-box-omnifood-dark");
    d.getElementById("js-nexter").classList.add("project-box-nexter-dark");
    d.getElementById("js-noticeboard").classList.add("project-box-noticeboard-dark");
    d.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
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
