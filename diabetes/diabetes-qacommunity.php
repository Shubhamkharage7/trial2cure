<?php
ini_set('memory_limit', '512M');

// Read JSON file
$jsonString = file_get_contents('./diabetes_qacommunity_data.json');
if ($jsonString === false) {
    die("Error reading JSON file.");
}

// Decode JSON
$data = json_decode($jsonString, true);
if ($data === null) {
    die("Error decoding JSON: " . json_last_error_msg());
}

// Search functionality
$searchQuery = isset($_GET['search']) ? trim($_GET['search']) : '';
if (!empty($searchQuery)) {
    $searchQuery = strtolower($searchQuery);
    $data = array_filter($data, function ($item) use ($searchQuery) {
        $title = strtolower($item['title']);
        $keywords = array_map('strtolower', $item['keywords']);
        return strpos($title, $searchQuery) !== false || in_array($searchQuery, $keywords);
    });
}

// Pagination settings
$itemsPerPage = 15;
$totalItems = count($data);
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
    <meta name="description" content="Explore community questions and discussions related to diabetes, blood sugar management, clinical trials, and more with Trial2Cure.">
    <meta name="keywords" content="Trial2Cure, diabetes, blood sugar management, clinical trials, community discussions, patient care, diabetes research, healthcare professionals, patient support, diabetes awareness, health discussions">
    <meta name="author" content="Trial2Cure">
    <title>Community Q&A | Diabetes and Blood Sugar Management | Trial2Cure</title>
    <link rel="canonical" href="https://trial2cure.com/diabetes/diabetes-qacommunity" />

    <!-- Open Graph Tags -->
    <meta property="og:title" content="Community Q&A | Diabetes and Blood Sugar Management | Trial2Cure" />
    <meta property="og:description" content="Explore community questions and discussions related to diabetes, blood sugar management, clinical trials, and more with Trial2Cure." />
    <meta property="og:url" content="https://trial2cure.com/diabetes/diabetes-qacommunity" />
    <meta property="og:image" content="https://trial2cure.com/assets/img/trialtocure-logo.png" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Trial2Cure" />

    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Community Q&A | Diabetes and Blood Sugar Management | Trial2Cure" />
    <meta name="twitter:description" content="Explore community questions and discussions related to diabetes, blood sugar management, clinical trials, and more with Trial2Cure." />
    <meta name="twitter:url" content="https://trial2cure.com/diabetes/diabetes-qacommunity" />
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
            "@type": "WebPage",
            "name": "Community Q&A | Diabetes and Blood Sugar Management | Trial2Cure",
            "url": "https://trial2cure.com/diabetes-qacommunity",
            "description": "Explore community questions and discussions related to diabetes, blood sugar management, clinical trials, and more with Trial2Cure.",
            "publisher": {
                "@type": "Organization",
                "name": "Trial2Cure",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://trial2cure.com/assets/img/trialtocure-logo.png"
                }
            }
        }
    </script>

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
            <h1 class="display-4 text-center">Community Questions & Discussions</h1>
            <div class="row height d-flex justify-content-center align-items-center">
                <div class="col-md-10 mt-1 pt-1 mb-2 pb-2">
                    <form method="GET" action="">
                        <div class="form">
                            <i class="fa fa-search"></i>
                            <input type="text" class="form-control form-input" name="search" placeholder="Search..."
                                value="<?php echo htmlspecialchars($searchQuery); ?>">
                            <span class="left-pan"><i class="fa fa-microphone"></i></span>
                        </div>
                    </form>
                </div>
            </div>

            <div id="cardContainer">
                <?php if ($totalItems > 0): ?>
                    <?php foreach ($currentItems as $item): ?>
                        <div class="card border mb-2 lift">
                            <a href="diabetes-qacommunityindex?discussion=<?php echo urlencode($item['discussion']); ?>">
                                <div class="card-body flex-xl-row flex-column justify-content-between align-items-xl-center p-2">
                                    <h4 class="text-primary"><?php echo htmlspecialchars($item['title']); ?></h4>
                                    <p class="text-muted"><?php echo htmlspecialchars(substr($item['content'], 0, 300)); ?>...</p>
                                    <ul class="post-meta mb-0">
                                        <li class="post-author"><i class="uil uil-user"></i><span>By Admin</span></li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    <?php endforeach; ?>
                <?php else: ?>
                    <p class="text-center text-muted">No results found for "<?php echo htmlspecialchars($searchQuery); ?>".</p>
                <?php endif; ?>
            </div>

            <div id="pagination-div" class="justify-content-between align-items-baseline mt-5" style="display: flex;">
                <div id="pagination" class="pagination-Container d-flex justify-content-between">
                    <?php if ($page > 1): ?>
                        <a href="?page=<?php echo $page - 1; ?>&search=<?php echo urlencode($searchQuery); ?>" class="btn btn-primary rounded p-1 me-4">Previous</a>
                    <?php endif; ?>
                    <?php if ($page < $totalPages): ?>
                        <a href="?page=<?php echo $page + 1; ?>&search=<?php echo urlencode($searchQuery); ?>" class="btn btn-primary rounded p-1">Next</a>
                    <?php endif; ?>
                </div>
                <h2 class="text-primary" style="margin: 1em;">Total Threads: <span class="text-primary"><?php echo "$offset - $totalItems"; ?></span></h2>
            </div>
        </div>
    </section>

    <?php include "../include/footer.php" ?>

</body>

</html>