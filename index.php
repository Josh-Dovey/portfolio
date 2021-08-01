<!DOCTYPE html>
<html dir="ltr" lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <noscript> <link rel="Stylesheet" href="css/noscript.css" /> </noscript>
    <title>Web Developer | Josh Dovey</title>
    <meta
      name="description"
      content="My name's Josh and I make websites. Need help with a website?"
    />
    <!-- Favicon -->
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="assets/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="assets/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="assets/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="assets/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="assets/favicon/safari-pinned-tab.svg"
      color="#2d81ff"
    />
    <meta name="apple-mobile-web-app-title" content="Josh Dovey" />
    <meta name="application-name" content="Josh Dovey" />
    <meta name="msapplication-TileColor" content="#2b5797" />
    <meta name="theme-color" content="#ffffff" />
    <!-- SEO -->
    <!-- TODO: Set to live url -->
    <!-- <link rel=“canonical” href=“https://example.com/sample-page” /> -->
    <!-- TODO: If create a twitter account change data -->
    <!-- TODO: Create twitter card and facebook card images -->
    <!-- Twitter Card -->
    <!-- <meta name="twitter:card" content="summary" /> <meta name="twitter:site" content="@yoursite" /> <meta name="twitter:title" content="Freelance Web Developer | Josh Dovey" /> <meta name="twitter:description" content="My name's Josh and I make websites. Need help with a website? Check out my skills and previous projects to see how I can help you create your amazing website!" /> <meta name="twitter:image" content="./assets/favicon/favicon-32x32.png" /> -->
    <!-- Facebook OpenGraph -->
    <!-- TODO: Set to live url -->
    <!-- <meta property="og:url" content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" /> -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Freelance Web Developer | Josh Dovey" />
    <meta
      property="og:description"
      content="My name's Josh and I make websites. Need help with a website? Check out my skills and previous projects to see how I can help you create your amazing website!"
    />
    <meta property="og:image" content="./assets/favicon/favicon-32x32.png" />
    <!-- TODO: Set to live URL -->
    <!-- <link rel="canonical" href="https://joshdovey.co.uk" /> -->
    <link rel="preload" href="/js/bundle.js" />
  </head>
  <body>
    <div class="nav-bg" id="nav-box">
      <nav class="nav">
        <p class="logo">Joshua Dovey</p>
        <ul class="nav-list">
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
          <a href="#portfolio" class="btn btn-white fade-in">View Portfolio</a>
        </div>
      </div>
    </header>
    <section class="services" id="services">
      <div class="row align-right">
        <h2 class="h2 js-services-heading">Services</h2>
        <hr class="h2-hr" id="js-services-hr" />
      </div>
      <div class="services-bg services-bg-right js-services-bg-1">
        <div class="row services-1 js-services-1">
          <div class="col-1-of-2 mobile-show">
            <img
              loading="lazy"
              src="./assets/phone-portrait-outline.svg"
              alt="Mobile Device Icon"
              width="32"
              height="32"
              class="services-svg"
            />
          </div>
          <div class="col-1-of-2">
            <h3>Responsive Design</h3>
            <p class="services-p">
              Over 50% of the web is viewed on mobile devices! It's essential
              then that your site is compatible with multiple screen sizes.
            </p>
            <p class="services-p">
              Your website will look great and work consistently from a giant 4k
              monitor to a small smartphone!
            </p>
          </div>
          <div class="col-1-of-2 mobile-hide">
            <img
              loading="lazy"
              src="./assets/phone-portrait-outline.svg"
              alt="Mobile Device Icon"
              width="180"
              height="180"
              class="services-svg"
            />
          </div>
        </div>
      </div>
      <div class="services-bg services-bg-left js-services-bg-2">
        <div class="row services-2 js-services-2">
          <div class="col-1-of-2">
            <img
              loading="lazy"
              src="./assets/flash-outline.svg"
              alt="Rocket Icon"
              width="180"
              height="180"
              class="services-svg"
            />
          </div>
          <div class="col-1-of-2">
            <h3>Rapid Loads</h3>
            <p class="services-p">
              Slow websites are the quickest way to lose visitors! A recent
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.akamai.com/uk/en/about/news/press/2017-press/akamai-releases-spring-2017-state-of-online-retail-performance-report.jsp#:~:text=A%20two-second%20delay%20in%20web%20page%20load%20time%20increase%20bounce%20rates%20by%20103%20percent"
                >study</a
              >
              found that a 2 second delay in page speed can increase
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.abtasty.com/blog/bounce-rate/#:~:text=To%20bounce%20from%20a%20website%20is%20to%20leave%20it%20before%20interacting%20with%20the%20site%20in%20some%20way%2C"
                >bounce rates</a
              >
              by 103%!
            </p>
            <p class="services-p">
              My job is to eliminate that problem and increase the number of
              visitors to your site.
            </p>
          </div>
        </div>
      </div>
      <div class="services-bg services-bg-right js-services-bg-3">
        <div class="row services-3 js-services-3">
          <div class="col-1-of-2 mobile-show">
            <img
              loading="lazy"
              src="./assets/search-outline.svg"
              alt="Magnifying Glass Icon"
              width="180"
              height="180"
              class="services-svg"
            />
          </div>
          <div class="col-1-of-2">
            <h3>SEO</h3>
            <p class="services-p">
              Have you ever searched through the 709,000,000 google results? I
              doubt it! That's why it's imperative that visistors find your site
              with ease.
            </p>
            <p class="services-p">
              I'll use the best and latest seo techniques to get your website at
              the top of search engine results!
            </p>
          </div>
          <div class="col-1-of-2 mobile-hide">
            <img
              loading="lazy"
              src="./assets/search-outline.svg"
              alt="Magnifying Glass Icon"
              width="180"
              height="180"
              class="services-svg"
            />
          </div>
        </div>
      </div>
      <div class="services-bg services-bg-left js-services-bg-4">
        <div class="row services-4 js-services-4">
          <div class="col-1-of-2">
            <img
              loading="lazy"
              src="./assets/refresh-outline.svg"
              alt="Spanner Icon"
              width="180"
              height="180"
              class="services-svg"
            />
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
        <h2 class="h2 js-portfolio-heading" id="js-project-name">Portfolio</h2>
        <hr class="h2-hr" id="js-portfolio-hr" />
      </div>
      <div class="row project-showcase-div js-project-list">
        <div class="col-1-of-3 project-container">
          <div class="project-img-container" id="js-portfolio-1">
            <img
              loading="lazy"
              src="./assets/portfolio.png"
              alt="Portfolio Project"
              class="project-img js-project-1"
              height="200"
              width="350"
            />
            <noscript class="noscript-project-container">
              <a
                class="noscript-project-link"
                href="https://joshdovey.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </noscript>
          </div>
          <h4 id="js-project-1-title">Portfolio</h4>
        </div>
        <div class="col-1-of-3 project-container">
          <div class="project-img-container" id="js-portfolio-2">
            <img
              loading="lazy"
              src="./assets/natours.png"
              alt="Natours Project"
              class="project-img js-project-2"
              height="200"
              width="350"
            />
            <noscript class="noscript-project-container">
              <a
                class="noscript-project-link"
                href="https://github.com/Josh-Dovey/Natours"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </noscript>
          </div>
          <h4 id="js-project-2-title">Natours</h4>
        </div>
        <div class="col-1-of-3 project-container">
          <div class="project-img-container" id="js-portfolio-3">
            <img
              loading="lazy"
              src="./assets/noticeboard.png"
              alt="Notice Board Project"
              class="project-img js-project-3"
              height="200"
              width="350"
            />
            <noscript class="noscript-project-container">
              <a
                class="noscript-project-link"
                href="https://kidderminster-kh-notice-board.herokuapp.com/home"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </noscript>
          </div>
          <h4 id="js-project-3-title">Notice Board</h4>
        </div>
      </div>
      <div class="row project-info-div js-project-info-div">
        <div class="col-1-of-2 project-info-img-container">
          <button class="project-info-back js-project-back">
            <img
              loading="lazy"
              src="https://s2.svgbox.net/octicons.svg?color=2d81ff&ic=chevron-left-bold"
              alt="Back Arrow Icon"
              width="32"
              height="32"
            />
            Back
          </button>
          <img
            loading="lazy"
            src="./assets/portfolio-mobile.jpg"
            alt="Portfolio Info Page"
            class="project-info-img"
            id="js-project-img"
          />
        </div>
        <div class="col-1-of-2 project-info">
          <h4>Description</h4>
          <p id="js-project-p1">
            This one took me a while. But as I was learning new techniques, I
            wanted to implement them straight away in my own designs. And as
            this site is giving you a glimpse into my skills, it was kind of
            important that I understood what I was doing.
          </p>
          <p id="js-project-p2">
            This one took me a while. But as I was learning new techniques, I
            wanted to implement them straight away in my own designs. And as
            this site is giving you a glimpse into my skills, it was kind of
            important that I understood what I was doing.
          </p>
          <div class="project-info-btns">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-blue"
              id="js-project-visit"
              >Visit</a
            >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-blue"
              id="js-project-code"
              >Code</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="contact" id="contact">
      <div class="row align-right">
        <h2 class="h2 js-contact-heading">Contact</h2>
        <hr class="h2-hr" id="js-contact-hr" />
      </div>
      <form method="post" action="mailer.php" class="form" id="form">
        <div class="row row-contact">
          <div class="col-1-of-3 input-1 js-input-1">
            <label for="name" class="form-label">Name</label>
            <input type="text" name="name" id="name" class="form-input" />
          </div>
          <div class="col-1-of-3 input-2 js-input-2">
            <label for="email" class="form-label">Email</label>
            <input type="email" name="email" id="email" class="form-input" />
          </div>
          <div class="col-1-of-3 input-3 js-input-3">
            <label for="number" class="form-label">Number</label>
            <input type="tel" name="number" id="number" class="form-input" />
          </div>
        </div>
        <div class="row row-textarea input-4 js-input-4">
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
          <div class="col-1-of-2 input-5 js-input-5">
            <input
              type="submit"
              class="btn btn-blue btn-form"
              id="form-btn"
              value="Submit"
            />
          </div>
          <div class="col-1-of-2">
          <?php 
            if($_GET['success'] == 1) {
                echo "<p class=\"form-message success\" id=\"form-msg\">Message sent successfully!</p>";
            }

            if($_GET['success'] == -1) {
                echo "<p class=\"form-message error\" id=\"form-msg\">Something went wrong!</p>";
            }
          ?>
          </div>
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
          <button class="btn btn-theme" id="js-theme-switch">
            Switch Theme
          </button>
        </div>
        <div class="col-1-of-3 stuff">
          <h4>Stuff...</h4>
          <p>2021 &copy; Joshua Dovey</p>
        </div>
      </div>
    </footer>
    <script src="js/onscreen.js" defer></script>
    <script src="js/bundle.js" defer></script>
    <noscript class="noscript-advisory"
      >Please enable Javascript for a better experience</noscript
    >
  </body>
</html>
