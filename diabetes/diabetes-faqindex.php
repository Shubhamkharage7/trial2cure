<?php
ini_set('memory_limit', '512M');

// Get the 'question' from the query parameter
$question = isset($_GET['question']) ? $_GET['question'] : null;
if (!$question) {
    die("No question provided.");
}

// Construct the path to the JSON file
$jsonFilePath = './diabetes_faq_data.json';
$jsonString = file_get_contents($jsonFilePath);
if ($jsonString === false) {
    die("Error reading JSON file: " . htmlspecialchars($jsonFilePath));
}

// Decode JSON
$data = json_decode($jsonString, true);
if ($data === null) {
    die("Error decoding JSON: " . json_last_error_msg());
}

// Search for the question in the JSON data
$faqItem = null;
foreach ($data as $item) {
    if ($item['question'] === $question) {
        $faqItem = $item;
        break;
    }
}

// Handle the case where the question is not found
if ($faqItem === null) {
    die("FAQ not found.");
}

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
    <meta name="description" content="Learn more about diabetes: <?php echo htmlspecialchars($faqItem['answer']); ?>. Get answers to frequently asked questions about diabetes, blood sugar management, and treatments on Trial2Cure.">
    <meta name="keywords" content="<?php echo htmlspecialchars($faqItem['Keyword']); ?>, diabetes FAQs, blood sugar management, diabetes treatments, clinical trials, medical research, patient care, Trial2Cure">
    <meta name="author" content="Trial2Cure">
    <title><?php echo htmlspecialchars($faqItem['q']); ?> - Diabetes FAQs | Trial2Cure</title>
    <link rel="canonical" href="https://trial2cure.com/diabetes/diabetes-faqindex?question=<?php echo urlencode($faqItem['question']); ?>" />

    <!-- Open Graph Tags -->
    <meta property="og:title" content="<?php echo htmlspecialchars($faqItem['q']); ?> - Diabetes FAQs | Trial2Cure" />
    <meta property="og:description" content="Learn more about diabetes: <?php echo htmlspecialchars($faqItem['answer']); ?>. Explore diabetes FAQs on Trial2Cure." />
    <meta property="og:url" content="https://trial2cure.com/diabetes/diabetes-faqindex?question=<?php echo urlencode($faqItem['question']); ?>" />
    <meta property="og:image" content="https://trial2cure.com/assets/img/trialtocure-logo.png" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Trial2Cure" />

    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="<?php echo htmlspecialchars($faqItem['q']); ?> - Diabetes FAQs | Trial2Cure" />
    <meta name="twitter:description" content="<?php echo htmlspecialchars($faqItem['answer']); ?>. Discover more FAQs about diabetes and blood sugar management on Trial2Cure." />
    <meta name="twitter:url" content="https://trial2cure.com/diabetes/diabetes-faqindex?question=<?php echo urlencode($faqItem['question']); ?>" />
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
            "@type": "Article",
            "headline": "<?php echo htmlspecialchars($faqItem['q']); ?>",
            "description": "<?php echo htmlspecialchars($faqItem['answer']); ?>",
            "author": {
                "@type": "Organization",
                "name": "Trial2Cure"
            },
            "url": "https://trial2cure.com/diabetes-faqindex?question=<?php echo urlencode($faqItem['question']); ?>",
            "image": "https://trial2cure.com/assets/img/trialtocure-logo.png",
            "publisher": {
                "@type": "Organization",
                "name": "Trial2Cure",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://trial2cure.com/assets/img/trialtocure-logo.png"
                }
            },
            "datePublished": "2024-08-21",
            "mainEntityOfPage": "https://trial2cure.com/diabetes-faqindex?question=<?php echo urlencode($faqItem['question']); ?>"
        }
    </script>

    <!-- Link Tags -->
    <link rel="stylesheet" href="./../assets/css/plugins.css">
    <link rel="stylesheet" href="./../assets/css/style.css">
    <link rel="stylesheet" href="./../assets/css/colors/green.css">
    <link rel="icon" href="./../assets/img/trialtocure-logo.png" type="image/png">
</head>



<body>
    <?php include "../include/header.php" ?>
    <!-- /header -->

    <div class="content-wrapper">
        <main class="container col-11 my-lg-10 my-8" id="main">
            <section>
                <h1 class="display-2"><?php echo htmlspecialchars($faqItem['q']); ?></h1>
                <p><?php echo htmlspecialchars($faqItem['answer']); ?></p>
            </section>
        </main>
    </div>

    <div class="row justify-content-center">
        <div class="col-10 col-md-7 mb-5 d-flex flex-column flex-md-row justify-content-between">
            <a href="../diabetes/" class="btn btn-lg btn-green rounded mb-2 mb-md-0 me-md-2 flex-grow-1 text-center">Check Diabetes Community</a>
            <a href="../clinicaltrials?search=diabetes" class="btn btn-lg btn-green rounded flex-grow-1 text-center">Find Diabetes Study</a>
        </div>
    </div>

    <?php include "../include/footer.php" ?>

</body>

</html>