<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="./css/style.css" />
    <title>Portfolio 2</title>
  </head>
  <body>
    <div class="nav-bg" id="nav-box">
      <nav class="nav">
        <p class="logo">Joshua Dovey</p>

        <ul class="nav-list" role="navigation">
          <li class="nav-item">
            <a href="#services" class="nav-link">Services</a>
          </li>
          <li class="nav-item">
            <a href="#portfolio" class="nav-link">Portfolio</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    </div>

    <header id="header">
      <div class="row header-grid-box">
        <div class="header-text-box">
          <h1>
            Freelance Web Developer
            <span
              >I create user-friendly interfaces that help businesses
              flourish</span
            >
          </h1>
          <a href="#portfolio" class="btn btn-white">Portfolio</a>
        </div>
      </div>
    </header>

    <section class="services" id="services">
      <div class="row align-right">
        <h2 class="h2">Services</h2>
        <hr class="h2-hr" />
      </div>

      <div class="services-bg services-bg-right responsive">
        <div class="row">
          <div class="col-1-of-2">
            <h3>Responsive</h3>
            <p class="services-p">
              Over 50% of the web is viewed on mobile devices! It's essential
              then that your site is compatible on multiple screen sizes.
            </p>
            <p class="services-p">
              Your website will look great and work consistenly from a giant 4k
              monitor to a small smartphone!
            </p>
          </div>
          <div class="col-1-of-2">
            <svg
              data-src="https://s2.svgbox.net/octicons.svg?ic=device-mobile"
              class="services-svg"
            ></svg>
          </div>
        </div>
      </div>

      <div class="services-bg services-bg-left">
        <div class="row">
          <div class="col-1-of-2">
            <svg
              data-src="https://s2.svgbox.net/octicons.svg?ic=rocket"
              class="services-svg"
            ></svg>
          </div>
          <div class="col-1-of-2">
            <h3>Speedy</h3>
            <p class="services-p">
              Slow websites are the quickest way to get rid of visitors! My job
              is to eliminate that problem and increase the amount of visitors
              to your website.

              <!-- You've been in the situation. You know, Wi-Fi has gone down and
              you use some real slow mobile data. Horrible isn't it? Well you
              see my job is to make your site load as quick as it possibly can.
              Imagine the happiness you'll feel when your site loads before
              anyone else's? -->
            </p>
            <p class="services-p">Your sites effiency is a key priority!</p>
          </div>
        </div>
      </div>

      <div class="services-bg services-bg-right">
        <div class="row">
          <div class="col-1-of-2">
            <h3>SEO</h3>
            <p class="services-p">
              Have you ever searched through the 1,330,000,000 google results? I
              know I haven't. That's why it is imperative that everyone sees
              your website at the top.
            </p>
            <p class="services-p">
              I'll use the best seo techniques to get your website at the top of
              search engine results!
            </p>
          </div>
          <div class="col-1-of-2">
            <svg
              data-src="https://s2.svgbox.net/octicons.svg?ic=search"
              class="services-svg"
            ></svg>
          </div>
        </div>
      </div>

      <div class="services-bg services-bg-left">
        <div class="row">
          <div class="col-1-of-2">
            <svg
              data-src="https://s2.svgbox.net/octicons.svg?ic=tools"
              class="services-svg"
            ></svg>
          </div>
          <div class="col-1-of-2">
            <h3>Maintenance</h3>
            <p class="services-p">
              Like anything, a website can get a bit outdated. Mine even will at
              some point. But with some care and attention a site can be
              returned to it's former glory. Perhaps even out performing its
              previous self!
            </p>
            <p class="services-p">
              Does your existing site need refreshing? Or maybe just a final few
              tweaks? Whatever it is let us know. I would love to help!
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="portfolio" id="portfolio">
      <div class="row align-left">
        <h2 class="h2" id="project-name">Portfolio</h2>
        <hr class="h2-hr" />
      </div>

      <div class="row project-showcase-div">
        <div class="col-1-of-3 project-container">
          <div class="project-img-container" onclick="displayProject(0)">
            <img
              loading="lazy"
              src="./assets/portfolio.png"
              alt="Portfolio Project"
              class="project-img"
            />
          </div>

          <h4>Portfolio</h4>
        </div>
        <div class="col-1-of-3 project-container">
          <div class="project-img-container" onclick="displayProject(1)">
            <img
              loading="lazy"
              src="./assets/natours.png"
              alt="Natours Project"
              class="project-img"
            />
          </div>

          <h4>Natours</h4>
        </div>
        <div class="col-1-of-3 project-container">
          <div class="project-img-container" onclick="displayProject(2)">
            <img
              loading="lazy"
              src="./assets/noticeboard.png"
              alt="Notice Board Project"
              class="project-img"
            />
          </div>

          <h4>Notice Board</h4>
        </div>
      </div>

      <div class="row project-info-div">
        <div class="col-1-of-2 project-info-img-container">
          <button class="project-info-back">
            <svg
              data-src="https://s2.svgbox.net/octicons.svg?ic=chevron-left"
            ></svg>
            Back
          </button>
          <img
            src=""
            alt="Portfolio Info Page"
            class="project-info-img"
            id="project-img"
          />
        </div>

        <div class="col-1-of-2 project-info">
          <h4>Description</h4>
          <p id="project-p1">
            This one took me a while. But as I was learning new techniques, I
            wanted to implement them straight away in my own designs. And as
            this site is giving you a glimpse into my skills, it was kind of
            important that I understood what I was doing.
          </p>

          <p id="project-p2">
            This one took me a while. But as I was learning new techniques, I
            wanted to implement them straight away in my own designs. And as
            this site is giving you a glimpse into my skills, it was kind of
            important that I understood what I was doing.
          </p>

          <div class="project-info-btns">
            <a href="#" class="btn btn-blue">Visit</a>
            <a href="#" class="btn btn-blue">Code</a>
          </div>
        </div>
      </div>
    </section>

    <section class="contact" id="contact">
      <div class="row align-right">
        <h2 class="h2">Contact</h2>
        <hr class="h2-hr" />
      </div>

      <form class="form" id="form">
        <div class="row row-contact">
          <div class="col-1-of-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" name="name" id="name" class="form-input" />
          </div>
          <div class="col-1-of-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" name="email" id="email" class="form-input" />
          </div>
          <div class="col-1-of-3">
            <label for="number" class="form-label">Number</label>
            <input type="tel" name="number" id="number" class="form-input" />
          </div>
        </div>

        <div class="row row-textarea">
          <label for="message" class="form-label">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            class="form-textarea"
          ></textarea>
        </div>

        <div class="row">
          <input
            type="submit"
            class="btn btn-blue btn-form"
            id="form-btn"
            value="Submit"
          />

          <?php 
            if($_GET['success'] == 1) {
                echo "<p class=\"form-message success\" id=\"form-msg\">Message sent successfully!</p>";
            }

            if($_GET['success'] == -1) {
                echo "<p class=\"form-message error\" id=\"form-msg\">Something went wrong!</p>";
            }
          ?>
          <p class="form-message" id="form-msg"></p>
        </div>
      </form>
    </section>

    <footer class="footer">
      <div class="row margin-bottom-none">
        <div class="col-1-of-3 quick-nav">
          <h4>Quick Links</h4>
          <ul class="quick-nav">
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div class="col-1-of-3 footer-theme-box">
          <button class="btn btn-theme" id="theme-switch">Switch Theme</button>
        </div>

        <div class="col-1-of-3 stuff">
          <h4>Stuff...</h4>
          <p>2021 &copy; Joshua Dovey</p>
        </div>
      </div>
    </footer>

    <script
      type="text/javascript"
      src="https://unpkg.com/external-svg-loader@latest/svg-loader.min.js"
      async
    ></script>

    <script src="js/script.js"></script>
  </body>
</html>
