<?php
ini_set('memory_limit', '512M');

// Get the 'title' from the query parameter
$title = isset($_GET['discussion']) ? $_GET['discussion'] : null;
if (!$title) {
    die("No discussion provided.");
}

// Read JSON file
$jsonString = file_get_contents('./lupus_qacommunity_data.json');
if ($jsonString === false) {
    die("Error reading JSON file.");
}

// Decode JSON
$data = json_decode($jsonString, true);
if ($data === null) {
    die("Error decoding JSON: " . json_last_error_msg());
}

// Search for the title in the JSON data
$threadItem = null;
foreach ($data as $item) {
    if ($item['discussion'] === $title) {
        $threadItem = $item;
        break;
    }
}

// Handle the case where the title is not found
if ($threadItem === null) {
    die("Thread not found.");
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
    <meta name="description" content="<?php echo htmlspecialchars($threadItem['content']); ?>">
    <meta name="keywords" content="<?php echo htmlspecialchars(implode(', ', $threadItem['keywords'])); ?>, lupus community, autoimmune diseases, lupus support, medical discussions, Trial2Cure">
    <meta name="author" content="Trial2Cure">
    <title><?php echo htmlspecialchars($threadItem['title']); ?> - Lupus Community | Trial2Cure</title>
    <link rel="canonical" href="https://trial2cure.com/lupus/lupus-qacommunityindex?discussion=<?php echo urlencode($threadItem['discussion']); ?>" />

    <!-- Open Graph Tags -->
    <meta property="og:title" content="<?php echo htmlspecialchars($threadItem['title']); ?> - Lupus Community | Trial2Cure" />
    <meta property="og:description" content="<?php echo htmlspecialchars($threadItem['content']); ?>" />
    <meta property="og:url" content="https://trial2cure.com/lupus/lupus-qacommunityindex?discussion=<?php echo urlencode($threadItem['discussion']); ?>" />
    <meta property="og:image" content="https://trial2cure.com/assets/img/trialtocure-logo.png" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Trial2Cure" />

    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="<?php echo htmlspecialchars($threadItem['title']); ?> - Lupus Community | Trial2Cure" />
    <meta name="twitter:description" content="<?php echo htmlspecialchars($threadItem['content']); ?>" />
    <meta name="twitter:url" content="https://trial2cure.com/lupus/lupus-qacommunityindex?discussion=<?php echo urlencode($threadItem['discussion']); ?>" />
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
            "headline": "<?php echo htmlspecialchars($threadItem['title']); ?>",
            "description": "<?php echo htmlspecialchars($threadItem['content']); ?>",
            "author": {
                "@type": "Organization",
                "name": "Trial2Cure"
            },
            "url": "https://trial2cure.com/lupus-qacommunityindex?discussion=<?php echo urlencode($threadItem['discussion']); ?>",
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
            "mainEntityOfPage": "https://trial2cure.com/lupus-qacommunityindex?discussion=<?php echo urlencode($threadItem['discussion']); ?>"
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

    <div class="content-wrapper bg-gray">
        <main class="container col-11 my-lg-10 my-8" id="main">
            <section>
                <div class="bg-primary card p-4 mb-4">
                    <h1 class="text-white"><?php echo htmlspecialchars($threadItem['title']); ?></h1>
                    <div class="d-flex justify-content-between">
                    </div>
                    <div class="card p-4" id="author-question" style="display: block;"><?php echo htmlspecialchars($threadItem['content']); ?></div>

                </div>
            </section>

            <div class="row">
                <div class="col-lg-9 mx-auto">
                    <div class="p-4">
                        <h3 class="text-primary">Top Replies</h3>

                        <?php for ($i = 1; $i <= $threadItem['replies_count']; $i++): ?>
                            <div class="bg-white p-3 rounded mb-3">
                                <p><?php echo htmlspecialchars($threadItem['replies']["reply$i"]['content']); ?></p>
                                <ul class="post-meta mb-0">
                                    <li class="post-author"><i class="uil uil-user"></i><span>By Admin</span></li>
                                </ul>
                            </div>
                        <?php endfor; ?>

                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="bg-white mt-5 p-4 rounded">
                        <h4 class="text-primary">Related Topics</h4>
                        <ul>
                            <li><a href="./lupus-rash-guide-butterfly-rash-to-autoimmune-triggers">Lupus Rash Guide: Butterfly Rash to Autoimmune
                                    Triggers</a></li>
                            <li><a href="./lupus-and-pregnancy-what-every-woman-should-know">Lupus and Pregnancy: What Every Woman Should Know</a>
                            </li>
                            <li><a href="./can-you-get-a-service-dog-for-lupus-everything-you-need-to-know">Can You Get a Service Dog for Lupus?
                                    Everything You Need to Know</a></li>
                            <li><a href="./lupus-and-your-kidneys-what-you-need-to-know-about-transplants-biopsies-and-more">Lupus and Your Kidneys:
                                    What You Need to Know About Transplants, Biopsies, and More</a></li>
                            <li><a href="./understanding-the-differences-lupus-vs-rheumatoid-arthritis-what-you-need-to-know">Understanding the
                                    Differences: Lupus vs. Rheumatoid Arthritis—What You Need to Know</a></li>
                            <li><a href="./lupus-and-liver-function-navigating-elevated-enzymes-and-fatty-liver-disease">Lupus and Liver Function:
                                    Navigating Elevated Enzymes and Fatty Liver Disease</a></li>
                            <li><a href="./lupus-and-vitamin-d-could-the-sunshine-vitamin-be-your-secret-weapon">Lupus and Vitamin D: Could the
                                    Sunshine Vitamin Be Your Secret Weapon?</a></li>
                            <li><a href="./decoding-lupus-blood-tests-what-low-hemoglobin-crp-and-anticoagulants-mean-for-you">Decoding Lupus Blood
                                    Tests: What Low Hemoglobin, CRP, and Anticoagulants Mean for You</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-10 col-md-7 mb-5 d-flex flex-column flex-md-row justify-content-between">
                    <a href="../lupus/" class="btn btn-lg btn-green rounded mb-2 mb-md-0 me-md-2 flex-grow-1 text-center">Check Lupus Community</a>
                    <a href="../clinicaltrials?search=Lupus" class="btn btn-lg btn-green rounded flex-grow-1 text-center">Find Lupus Study</a>
                </div>
            </div>

        </main>

    </div>


    <?php include "../include/footer.php" ?>

</body>

</html>