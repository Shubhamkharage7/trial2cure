<?php
// Check if $searchQuery is set, if not set it to an empty string
$searchQuery = isset($_GET['search']) ? $_GET['search'] : '';
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-L50SE7VG5B"></script>
  <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
          dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-L50SE7VG5B');
  </script>


  <!-- SEO Meta Tags -->
  <meta name="description" content="Trial2Cure connects patients with clinical trials using secure, AI-driven matching for personalized experiences. Bridge with healthcare professionals and research organizations today.">
  <meta name="keywords" content="Trial2Cure, clinical trials, patient empowerment, AI healthcare solutions, clinical trial matching, secure medical records, healthcare innovation, patient data privacy, clinical trial recruitment, personalized medicine, healthcare professionals, research organizations, medical research, healthcare collaboration, patient support">
  <meta name="author" content="Trial2Cure">
  <title>Trial2Cure - Connecting Patients with Clinical Trials</title>
  <link rel="canonical" href="https://trial2cure.com" />

  <!-- Open Graph Tags -->
  <meta property="og:title" content="Trial2Cure - Connecting Patients with Clinical Trials" />
  <meta property="og:description" content="Trial2Cure connects patients with clinical trials using secure, AI-driven matching for personalized experiences. Bridge with healthcare professionals and research organizations today." />
  <meta property="og:url" content="https://trial2cure.com" />
  <meta property="og:image" content="https://trial2cure.com/assets/img/trialtocure-logo.png" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Trial2Cure" />

  <!-- Twitter Card Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Trial2Cure - Connecting Patients with Clinical Trials" />
  <meta name="twitter:description" content="Trial2Cure connects patients with clinical trials using secure, AI-driven matching for personalized experiences. Bridge with healthcare professionals and research organizations today." />
  <meta name="twitter:url" content="https://trial2cure.com" />
  <meta name="twitter:image" content="https://trial2cure.com/assets/img/trialtocure-logo.png" />
  <meta name="twitter:site" content="@trial2cure" />
  <meta name="twitter:creator" content="@trial2cure" />

  <!-- Additional SEO Meta Tags -->
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
  <meta name="bingbot" content="index, follow" />
  <meta name="revisit-after" content="7 days" />
  <meta name="rating" content="General" />
  <meta name="distribution" content="global" />

  <!-- Schema.org Markup -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Trial2Cure",
      "url": "https://trial2cure.com",
      "logo": "https://trial2cure.com/assets/img/trialtocure-logo.png",
      "description": "Trial2Cure connects patients with clinical trials using secure, AI-driven matching for personalized experiences. Bridge with healthcare professionals and research organizations today.",
      "sameAs": [
        "https://www.twitter.com/trial2cure",
        "https://www.linkedin.com/company/trial2cure"
      ]
    }
  </script>

  <!-- Link Tags -->
  <link rel="stylesheet" href="./assets/css/plugins.css">
  <link rel="stylesheet" href="./assets/css/style.css">
  <link rel="stylesheet" href="./assets/css/colors/green.css">
  <link rel="icon" href="./assets/img/trialtocure-logo.png" type="image/png">

  <style>
    .btn-green:hover {
      background-color: #fab758 !important;
      border-color: #fab758 !important;
    }
  </style>

  <script type="text/javascript">
    (function(c, l, a, r, i, t, y) {
      c[a] = c[a] || function() {
        (c[a].q = c[a].q || []).push(arguments)
      };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "odme5lp8b6");
  </script>

</head>

<body>
  <div class="content-wrapper">
    <?php include "./header.php" ?>

    <section class="wrapper">
      <div class="container pt-10">
        <div class="row align-items-center">
          <div class="col-lg-6 text-center text-lg-start" data-cues="slideInDown">
            <h1 class="display-2 mb-5 text-green">Connect with Matching <span class="underline-3 style-3 yellow">Clinical Trials</span> Effortlessly</h1>
            <h3 style="color: #343f52">
              Join trials with ease through our AI-powered platform.
              Get matched with clinical trials that align with your medical data.
              Get paid for your active participation.**</h3>


            <div class="form">
              <i class="fa fa-search"></i>
              <form action="./clinicaltrials" method="GET" id="searchForm" onsubmit="return checkSearchInput()">
                <input type="text" class="form-control form-input" id="searchInput" name="search" placeholder="Search by condition, location or NCT ID..." value="<?php echo htmlspecialchars($searchQuery); ?>">
                <span class="left-pan"><i class="fa fa-microphone"></i></span>
              </form>
            </div>
            <div class="d-flex justify-content-center justify-content-lg-start pt-4">
              <span><a href="#" class="btn btn-sm btn-green fs-14 rounded-pill me-2" onclick="submitSearchForm()">FIND A STUDY</a></span>
            </div>

            <script>
              function checkSearchInput() {
                var searchInput = document.getElementById('searchInput').value.trim();

                // If the search input is empty, redirect to ./clinicaltrials
                if (searchInput === "") {
                  window.location.href = './clinicaltrials';
                  return false; // Prevent form submission
                }

                // If the search input is not empty, allow form to submit to clinicaltrials.php
                return true;
              }

              function submitSearchForm() {
                // Trigger form submission
                document.getElementById('searchForm').submit();
              }
            </script>


          </div>
          <!--/column -->
          <!-- Image with clickable functionality -->
          <div class="col-md-8 col-lg-6 ms-auto" data-cue="zoomIn">
            <figure class="rounded">
              <a href="#" data-bs-toggle="modal" data-bs-target="#imageModal">
                <img src="./assets/img/photos/simple-process.png" srcset="./assets/img/simple-process.png" alt="trial2cure-app" />
              </a>
            </figure>
          </div>

          <!-- Modal to display the full-size image -->
          <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="imageModalLabel">Simple Process for Patients</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                  <img src="./assets/img/simple-process.png" alt="trial2cure-app" class="img-fluid rounded">
                </div>
              </div>
            </div>
          </div>

          <!--/column -->`
        </div>
        <!-- /.row -->
        <p class="text-muted text-center"><strong>**</strong> Not all active participation include payment <strong>**</strong></p>
    </section>

    <section class="wrapper">
      <div class="container py-4 pt-md-5 pb-md-2">
        <div class="row text-center">
          <div class="col-lg-11 col-xxl-9 mx-auto" data-cues="zoomIn" data-group="welcome" data-interval="-200">
            <h2 class="display-3 mb-4 text-green">Explore the Future of Health Data with Trial2Cure</h2>
            <p class="lead fs-26 mb-7">Effortlessly connect with <strong>clinical trials tailored to you</strong> through our secure, <strong>AI-powered platform</strong>. We streamline your journey while supporting <strong>healthcare professionals</strong> and <strong>research organizations</strong> in advancing <strong>medical breakthroughs.</strong>
            </p>

          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /section -->

    <section class="wrapper">
      <div class="container mt-10 py-2 py-md-2">
        <h2 class="text-center" style="color: #60697b;">Trial2Cure Communities</h2>
        <div class="slider-container mt-8">
          <div class="slider-content my-5">
            <!-- Original images with links -->
            <div class="slider-item">
              <a href="./cardiovascular/">
                <img src="./assets/img/brands/cardiovascular.png" alt="Cardiovascular">
              </a>
            </div>
            <div class="slider-item">
              <a href="./clinicaltrials?search=dermatology">
                <img src="./assets/img/brands/dermatology.png" alt="Dermatology">
              </a>
            </div>
            <div class="slider-item">
              <a href="./diabetes/">
                <img src="./assets/img/brands/diabetes.png" alt="Diabetes">
              </a>
            </div>
            <div class="slider-item">
              <a href="./cardiovascular/">
                <img src="./assets/img/brands/heart-attack.png" alt="Heart Attack">
              </a>
            </div>
            <div class="slider-item">
              <a href="./clinicaltrials?search=infectious+disease">
                <img src="./assets/img/brands/infectious-disease.png" alt="Infectious Disease">
              </a>
            </div>
            <div class="slider-item">
              <a href="./lupus/">
                <img loading="lazy" src="./assets/img/brands/lupus.png" alt="Lupus">
              </a>
            </div>
            <div class="slider-item">
              <a href="./clinicaltrials?search=neuroscience+research">
                <img loading="lazy" src="./assets/img/brands/neuroscience-research.png" alt="Neuroscience Research">
              </a>
            </div>
            <div class="slider-item">
              <a href="./oncology-hematology/">
                <img loading="lazy" src="./assets/img/brands/oncology-and-hematology.png" alt="Oncology and Hematology">
              </a>
            </div>
            <div class="slider-item">
              <a href="./pediatrics/">
                <img loading="lazy" src="./assets/img/brands/pediatrics.png" alt="Pediatrics">
              </a>
            </div>
            <div class="slider-item">
              <a href="./clinicaltrials?search=women+health">
                <img loading="lazy" src="./assets/img/brands/women-health.png" alt="Women's Health">
              </a>
            </div>
            <div class="slider-item">
              <a href="./obesity/">
                <img loading="lazy" src="./assets/img/brands/obesity.png" alt="Obesity">
              </a>
            </div>
            <div class="slider-item">
              <a href="./mental-health/">
                <img loading="lazy" src="./assets/img/brands/mental_health.png" alt="Mental Health">
              </a>
            </div>

            <!-- Duplicate images for seamless scrolling with links -->
            <div class="slider-item">
              <a href="./cardiovascular/">
                <img src="./assets/img/brands/cardiovascular.png" alt="Cardiovascular">
              </a>
            </div>
            <div class="slider-item">
              <a href="./clinicaltrials?search=dermatology">
                <img src="./assets/img/brands/dermatology.png" alt="Dermatology">
              </a>
            </div>
            <div class="slider-item">
              <a href="./clinicaltrials?search=diabetes">
                <img src="./assets/img/brands/diabetes.png" alt="Diabetes">
              </a>
            </div>
            <div class="slider-item">
              <a href="./cardiovascular/">
                <img src="./assets/img/brands/heart-attack.png" alt="Heart Attack">
              </a>
            </div>
            <div class="slider-item">
              <a href="./clinicaltrials?search=infectious+disease">
                <img src="./assets/img/brands/infectious-disease.png" alt="Infectious Disease">
              </a>
            </div>
            <div class="slider-item">
              <a href="./lupus/">
                <img loading="lazy" src="./assets/img/brands/lupus.png" alt="Lupus">
              </a>
            </div>
            <div class="slider-item">
              <a href="./clinicaltrials?search=neuroscience+research">
                <img loading="lazy" src="./assets/img/brands/neuroscience-research.png" alt="Neuroscience Research">
              </a>
            </div>
            <div class="slider-item">
              <a href="./oncology-hematology/">
                <img loading="lazy" src="./assets/img/brands/oncology-and-hematology.png" alt="Oncology and Hematology">
              </a>
            </div>
            <div class="slider-item">
              <a href="./pediatrics/">
                <img loading="lazy" src="./assets/img/brands/pediatrics.png" alt="Pediatrics">
              </a>
            </div>
            <div class="slider-item">
              <a href="./clinicaltrials?search=women+health">
                <img loading="lazy" src="./assets/img/brands/women-health.png" alt="Women's Health">
              </a>
            </div>
            <div class="slider-item">
              <a href="./obesity/">
                <img loading="lazy" src="./assets/img/brands/obesity.png" alt="Obesity">
              </a>
            </div>
            <div class="slider-item">
              <a href="./mental-health">
                <img loading="lazy" src="./assets/img/brands/mental_health.png" alt="Mental Health">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
  <!-- /.content-wrapper -->

  <?php include "./footer.php" ?>

  <!-- ai assistant js starts here -->
  <script>
    document.getElementById('playPauseBtn').addEventListener('click', function() {
      var audio = document.getElementById('myAudio');
      if (audio.paused) {
        audio.play();
        this.classList.add('playing');
      } else {
        audio.pause();
        this.classList.remove('playing');
      }
    });
  </script>
<!-- deployed 2-->
</body>

</html>