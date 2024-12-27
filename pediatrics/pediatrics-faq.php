<?php
ini_set('memory_limit', '512M');

// Read JSON file
$jsonString = file_get_contents('./pediatrics_faq_data.json');
if ($jsonString === false) {
    die("Error reading JSON file.");
}

// Decode JSON
$data = json_decode($jsonString, true);
if ($data === null) {
    die("Error decoding JSON: " . json_last_error_msg());
}

// Extract questions
$questions = array_column($data, 'q');

// Pagination settings
$itemsPerPage = 20;
$totalItems = count($questions);
$totalPages = ceil($totalItems / $itemsPerPage);
$page = isset($_GET['page']) ? (int) $_GET['page'] : 1;
$page = max(1, min($page, $totalPages));
$offset = ($page - 1) * $itemsPerPage;
$currentItems = array_slice($data, $offset, $itemsPerPage);

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
    <meta name="description"
        content="Explore frequently asked questions about pediatrics, autoimmune diseases, and related healthcare topics. Trial2Cure helps patients connect with clinical trials and offers detailed health information for pediatric care and clinical research.">
    <meta name="keywords"
        content="Pediatrics FAQs, Trial2Cure, pediatric healthcare, autoimmune disease in children, pediatric clinical trials, health questions, pediatric care, medical research, clinical trials for children, autoimmune pediatric diseases, healthcare professionals, patient care, clinical trial information, disease management, healthcare innovation, patient data privacy">
    <meta name="author" content="Trial2Cure">
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    <meta name="bingbot" content="index, follow" />
    <meta name="revisit-after" content="7 days" />
    <meta name="rating" content="General" />
    <meta name="distribution" content="global" />

    <title>Pediatric FAQs | Trial2Cure - Clinical Trial Information for Pediatric Patients</title>
    <link rel="canonical" href="https://trial2cure.com/pediatrics/pediatrics-faq" />

    <!-- Pagination Meta Tags -->
    <?php if ($page > 1): ?>
        <link rel="prev" href="?page=<?php echo $page - 1; ?>">
    <?php endif; ?>
    <?php if ($page < $totalPages): ?>
        <link rel="next" href="?page=<?php echo $page + 1; ?>">
    <?php endif; ?>

    <!-- Open Graph Tags -->
    <meta property="og:title" content="Pediatric FAQs | Trial2Cure - Clinical Trial Information for Pediatric Patients" />
    <meta property="og:description"
        content="Discover answers to common questions about pediatric healthcare and clinical trials. Trial2Cure connects patients with clinical trials and provides information on pediatric care and autoimmune diseases." />
    <meta property="og:url" content="https://trial2cure.com/pediatrics/pediatrics-faq" />
    <meta property="og:image" content="https://trial2cure.com/assets/img/trialtocure-logo.png" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Trial2Cure" />

    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Pediatric FAQs | Trial2Cure - Clinical Trial Information for Pediatric Patients" />
    <meta name="twitter:description"
        content="Find answers to frequently asked questions on pediatrics, autoimmune diseases in children, and clinical trials. Trial2Cure helps patients connect with pediatric clinical trials and provides detailed healthcare information." />
    <meta name="twitter:url" content="https://trial2cure.com/pediatrics/pediatrics-faq" />
    <meta name="twitter:image" content="https://trial2cure.com/assets/img/trialtocure-logo.png" />
    <meta name="twitter:site" content="@trial2cure" />
    <meta name="twitter:creator" content="@trial2cure" />

    <!-- Schema.org Markup -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                <?php foreach ($currentItems as $item) : ?> {
                        "@type": "Question",
                        "name": "<?php echo htmlspecialchars($item['q']); ?>",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Visit our FAQ detail page for more information."
                        }
                    },
                <?php endforeach; ?>
            ],
            "publisher": {
                "@type": "Organization",
                "name": "Trial2Cure",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://trial2cure.com/assets/img/trialtocure-logo.png"
                }
            },
            "url": "https://trial2cure.com/pediatrics/pediatrics-faq",
            "description": "Explore frequently asked questions related to pediatrics, autoimmune diseases, and more with Trial2Cure."
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

    <section class="wrapper">
        <div class="container mt-8 py-4 py-md-6">
            <h1 class="display-4 text-center">Frequently Asked Questions</h1>
            <div id="cardContainer">
                <?php foreach ($currentItems as $item): ?>
                    <div class="card border mb-2 lift">
                        <a href="pediatrics-faqindex?question=<?php echo urlencode($item['question']); ?>">
                            <div class="card-body d-flex flex-xl-row flex-column justify-content-between align-items-xl-center p-2">
                                <h4><?php echo htmlspecialchars($item['q']); ?></h4>
                                <span class="more hover link-yellow">Learn More</span>
                            </div>
                        </a>
                    </div>
                <?php endforeach; ?>
            </div>

            <div id="pagination-div" class="justify-content-between align-items-baseline mt-5" style="display: flex;">
                <div id="pagination" class="pagination-Container d-flex justify-content-between">
                    <?php if ($page > 1): ?>
                        <a href="?page=<?php echo $page - 1; ?>" class="btn btn-primary rounded p-1 me-4">Previous</a>
                    <?php endif; ?>
                    <?php if ($page < $totalPages): ?>
                        <a href="?page=<?php echo $page + 1; ?>" class="btn btn-primary rounded p-1">Next</a>
                    <?php endif; ?>
                </div>
                <h2 class="text-primary" style="margin: 1em;">Total FAQs: <span class="text-primary"><?php echo "$offset - $totalItems"; ?></span></h2>
            </div>
        </div>
    </section>

    <?php include "../include/footer.php" ?>

</body>

</html>