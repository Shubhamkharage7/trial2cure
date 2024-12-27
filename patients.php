<?php
// Check if $searchQuery is set, if not set it to an empty string
$searchQuery = isset($_GET['search']) ? $_GET['search'] : '';
?>

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
    <meta name="description"
        content="Join Trial2Cure's secure platform to participate in clinical trials. Discover how we connect patients with clinical studies while ensuring your health data remains private and secure. Explore the journey from enrollment to completion.">
    <meta name="keywords"
        content="Trial2Cure patient journey, join clinical trials, secure health data, clinical trial participation, patient data privacy, medical research, healthcare solutions, AI-driven trial matching, clinical study process, clinical trial security, patient support, HIPAA compliant, GDPR compliant, medical innovation">
    <meta name="author" content="Trial2Cure">

    <title>Patient Journey with Trial2Cure - Secure Clinical Trial Participation</title>
    <link rel="canonical" href="https://trial2cure.com/patient-journey" />

    <!-- Open Graph Tags -->
    <meta property="og:title" content="Patient Journey with Trial2Cure - Secure Clinical Trial Participation" />
    <meta property="og:description"
        content="Discover the secure patient journey with Trial2Cure. Learn how to participate in clinical trials, ensure your data privacy, and contribute to medical research while earning rewards." />
    <meta property="og:url" content="https://trial2cure.com/patient-journey" />
    <meta property="og:image" content="https://trial2cure.com/assets/img/trialtocure-logo.png" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Trial2Cure" />

    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Patient Journey with Trial2Cure - Secure Clinical Trial Participation" />
    <meta name="twitter:description"
        content="Join Trial2Cure's secure platform for clinical trials. Follow our patient journey from enrollment to post-trial support, with full data privacy and personalized trial matching." />
    <meta name="twitter:url" content="https://trial2cure.com/patient-journey" />
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
            "description": "Follow the patient journey with Trial2Cure from initial enrollment in clinical trials to post-trial support, ensuring security and privacy throughout.",
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

</head>


<body>
    <div class="content-wrapper">
        <?php include "./header.php" ?>

        <section class="wrapper bg-soft-green">
            <div class="container pt-10 pb-12 pt-md-10 pb-md-8 text-center">
                <div class="row">
                    <div class="col-md-7 col-lg-6 col-xl-10 mx-auto">
                        <h1 class="display-2 mb-3">Access to Matching Clinical Trials</h1>
                    </div>
                    <!-- /column -->
                </div>
                <!-- Image with clickable functionality -->
                <div class="col-lg-10 mx-auto">
                    <figure class="rounded">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#imageModal">
                            <img src="./assets/img/patient-recruitment.png" srcset="./assets/img/patient-recruitment.png" alt="main" class="img-fluid" />
                        </a>
                    </figure>
                </div>

                <!-- Modal to display the full-size image -->
                <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl modal-dialog-centered"> <!-- Added modal-lg for larger size -->
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="imageModalLabel">Detailed Process of Patient Journey</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-center">
                                <img src="./assets/img/patient-recruitment.png" alt="main" class="img-fluid rounded"> <!-- img-fluid for responsiveness -->
                            </div>
                        </div>
                    </div>
                </div>


                <!-- /.row -->
                <div class="row justify-content-center">
                    <div class="col-md-9">
                        <div class="form">
                            <i class="fa fa-search"></i>
                            <form action="./clinicaltrials.php" method="GET" id="searchForm" onsubmit="return checkSearchInput()">
                                <input type="text" class="form-control form-input" id="searchInput" name="search" placeholder="Search by condition, location or NCT ID..." value="<?php echo htmlspecialchars($searchQuery); ?>">
                                <span class="left-pan"><i class="fa fa-microphone"></i></span>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center pt-4">
                    <span><a href="#" class="btn btn-sm btn-green fs-14 rounded-pill me-2" onclick="submitSearchForm()">FIND A STUDY</a></span>
                </div>

                <script>
                    function checkSearchInput() {
                        var searchInput = document.getElementById('searchInput').value.trim();

                        // If the search input is empty, redirect to ./clinicaltrials
                        if (searchInput === "") {
                            window.location.href = './clinicaltrials.php';
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
            <!-- /.container -->
        </section>


        <section class="wrapper">
            <div class="container py-4 py-md-6" data-cues="slideInRight">
                <div class="row gy-2 align-items-center">
                    <div class="col-lg-6">
                        <h2 class="display-4 mb-3 text-green">Find Your Perfect Trial. Earn Rewards. Make a Difference.</h2>
                        <p class="lead fs-lg mb-2">At Trial2Cure, we connect patients with clinical trials that perfectly match their medical profiles. We provide continuous follow-ups and offer an incentive and reward structure for participants who complete their trials.</p>
                        <p>By joining, you not only take an active role in your health journey but also contribute to medical breakthroughs while being rewarded for your valuable time and commitment.</p>
                        <span><a class="btn btn-green rounded-pill" href="https://trial2cure.com/privacy">Learn More</a></span>
                        <!--/.row -->
                    </div>
                    <!--/column -->
                    <div class="col-lg-4 mx-auto">
                        <figure class="rounded"><img src="./assets/img/photos/main.jpg" srcset="./assets/img/photos/main.jpg" alt="main"></figure>
                    </div>
                    <!--/column -->
                </div>
                <!--/.row -->
            </div>
            <!-- /.container -->
        </section>
        <!-- /section -->

        <section class="wrapper">
            <div class="container py-4 py-md-6" data-cues="slideInRight">
                <div class="row gy-2 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <h1 class="display-1 mb-4 text-green">Secure. Compliant. Trustworthy.</h1>
                        <p class="lead fs-lg mb-2">We prioritize your privacy and the security of your personal health information. Our platform is built with a robust backend infrastructure that complies with the highest standards of data protection, including HIPAA and GDPR regulations.</p>
                        <p>You can trust that your sensitive medical data is safeguarded using advanced encryption and secure protocols, giving you peace of mind throughout your journey with us.</p>
                        <span><a class="btn btn-green rounded-pill" href="https://trial2cure.com/portal/myprofile">Get Started</a></span>
                    </div>
                    <!--/column -->
                    <div class="col-lg-4 mx-auto">
                        <figure class="rounded"><img src="./assets/img/photos/security.png" srcset="./assets/img/photos/security.png" alt="main-image2" /></figure>
                    </div>
                    <!--/column -->
                </div>
                <!-- /.row -->
        </section>
        <!-- /section -->

        <section class="wrapper">
            <div class="container py-2 py-md-4" data-cues="slideInLeft">
                <div class="row gy-2 align-items-center">
                    <div class="col-lg-6">
                        <h2 class="display-4 mb-3 text-green">Intelligent Matching with AI — Personalized Trials Just for You.</h2>
                        <p class="lead fs-lg mb-2">Leveraging state-of-the-art artificial intelligence and machine learning technologies, Trial2Cure analyzes your unique medical data to accurately match you with the most suitable clinical trials. Our intelligent system considers your health history, current conditions, and personal preferences to provide personalized trial options, enhancing the likelihood of positive outcomes and meaningful contributions to medical research.</p>
                        <!--/.row -->
                    </div>
                    <!--/column -->
                    <div class="col-lg-4 mx-auto">
                        <figure class="rounded"><img src="./assets/img/photos/new/ai-native-chatbot.png" srcset="./assets/img/photos/new/ai-native-chatbot.png"
                                alt="ai-native-chatbot"></figure>
                    </div>
                    <!--/column -->
                </div>
                <!--/.row -->
            </div>
            <!-- /.container -->
        </section>
        <!-- /section -->

        <section class="wrapper">
            <div class="container py-4 py-md-6" data-cues="slideInRight">
                <div class="row gy-2 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <h2 class="display-4 mb-3 text-green">Comprehensive Patient Support — We're With You Every Step.</h2>
                        <p class="lead fs-lg">Our dedicated support team is committed to guiding you through every phase of your clinical trial journey. From initial enrollment to post-trial follow-ups, we offer personalized assistance, answer your questions, and address your concerns. We collaborate with healthcare professionals to ensure you receive the care and attention you deserve, making your experience as comfortable and stress-free as possible.</p>
                        <!--/.row -->
                    </div>
                    <!--/column -->
                    <div class="col-lg-4 mx-auto">
                        <figure class="rounded"><img src="./assets/img/photos/patient-support.png" srcset="./assets/img/photos/patient-support.png" alt="phone-chatbot">
                        </figure>
                    </div>
                    <!--/column -->
                </div>
                <!--/.row -->
            </div>
            <!-- /.container -->
        </section>
        <!-- /section -->

        <section class="wrapper">
            <div class="container py-2 py-md-4" data-cues="slideInLeft">
                <div class="row gy-2 align-items-center">
                    <div class="col-lg-6">
                        <h2 class="display-4 mb-3 text-green">Connecting Healthcare Professionals — Accelerating Medical Breakthroughs Together.</h2>
                        <p class="lead fs-lg">Trial2Cure serves as a bridge between patients, healthcare providers, and research organizations. We partner with clinicians, nurses, Contract Research Organizations (CROs), and medical institutions to facilitate efficient communication and collaboration. Our platform helps organizations reach out to potential trial participants effectively, streamlining the recruitment process and accelerating the development of new treatments and cures.</p>
                        <!--/.row -->
                    </div>
                    <!--/column -->
                    <div class="col-lg-4 mx-auto">
                        <figure class="rounded"><img src="./assets/img/photos/hcp-doctor.png" srcset="./assets/img/photos/hcp-doctor.png"
                                alt="physical-kiosks"></figure>
                    </div>
                    <!--/column -->
                </div>
                <!--/.row -->
            </div>
            <!-- /.container -->
        </section>
        <!-- /section -->

        <section class="wrapper">
            <div class="container py-4 py-md-6" data-cues="slideInRight">
                <div class="row gy-2">
                    <div class="col-lg-6 order-lg-2">
                        <h2 class="display-4 mb-3 text-green">Stay Connected 24/7 with Our Mobile Apps.</h2>
                        <p class="lead fs-lg">Experience seamless access to your health data and clinical trial information anytime, anywhere with our intuitive iOS and Android applications. Our mobile apps continuously synchronize data, allowing you to monitor your progress, receive real-time updates, and stay engaged throughout your clinical trial journey. With user-friendly interfaces and secure data handling, managing your participation has never been easier.</p>
                        <!--/.row -->
                    </div>
                    <!--/column -->
                    <div class="col-lg-4 mx-auto">
                        <figure class="rounded"><img src="./assets/img/photos/med-app.png" srcset="./assets/img/photos/med-app.png" alt="mobile-apps">
                        </figure>
                    </div>
                    <!--/column -->
                </div>
                <!--/.row -->
            </div>
            <!-- /.container -->
        </section>
        <!-- /section -->

    </div>
    <!-- /.content-wrapper -->

    <?php include "./footer.php" ?>

</body>

</html>