<?php
ini_set('memory_limit', '512M');

// Get the 'study' from the query parameter
$study = isset($_GET['study']) ? $_GET['study'] : null;

if (!$study) {
    die("No Study found.");
}

// Construct the path to the JSON file
$jsonFilePath = './masterdata/' . $study . '.json';

// Read JSON file
$jsonString = file_get_contents($jsonFilePath);

if ($jsonString === false) {
    die("Error reading JSON file: " . htmlspecialchars($jsonFilePath));
}

// Decode JSON
$data = json_decode($jsonString, true);

if ($data === null) {
    die("Error decoding JSON: " . json_last_error_msg());
}

// Extract protocol section data
$protocolSection = isset($data['protocolSection']) ? $data['protocolSection'] : [];

// Extract data for meta tags
$studyTitle = isset($protocolSection['identificationModule']['briefTitle']) ? $protocolSection['identificationModule']['briefTitle'] : 'Clinical Trial';
$studyDescription = isset($protocolSection['descriptionModule']['briefSummary']) ? $protocolSection['descriptionModule']['briefSummary'] : 'Detailed information about this clinical trial.';
$studyKeywords = isset($protocolSection['conditionsModule']['keywords']) ? implode(', ', $protocolSection['conditionsModule']['keywords']) : 'clinical trial, medical research';

// Function to truncate text
function truncateText($text, $length)
{
    if (strlen($text) > $length) {
        return substr($text, 0, $length) . '...';
    }
    return $text;
}

// Function to format date
function formatDate($dateStr)
{
    $dateStr = trim($dateStr);
    if (empty($dateStr) || strtolower($dateStr) == 'n/a') {
        return 'N/A';
    }

    $dateStr = str_replace('/', '-', $dateStr); // Replace '/' with '-' if any

    if (preg_match('/^\d{4}-\d{2}-\d{2}$/', $dateStr)) {
        // Format is YYYY-MM-DD
        $date = DateTime::createFromFormat('Y-m-d', $dateStr);
        return $date->format('j F Y');
    } elseif (preg_match('/^\d{4}-\d{2}$/', $dateStr)) {
        // Format is YYYY-MM
        $date = DateTime::createFromFormat('Y-m', $dateStr);
        return $date->format('F Y');
    } elseif (preg_match('/^\d{4}$/', $dateStr)) {
        // Format is YYYY
        $date = DateTime::createFromFormat('Y', $dateStr);
        return $date->format('Y');
    } else {
        return $dateStr; // Return as is if format is unrecognized
    }
}

// Since we are displaying a single trial, prepare the data accordingly
$currentItems = [$protocolSection];
?>

<!DOCTYPE html>
<html lang="en">

<head>

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

    <!-- Meta tags and other head content -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php echo htmlspecialchars($studyDescription); ?>">
    <meta name="keywords" content="<?php echo htmlspecialchars($studyKeywords); ?>">
    <meta name="author" content="Trial2Cure">
    <title><?php echo htmlspecialchars($studyTitle); ?> | Trial2Cure</title>
    <link rel="canonical" href="<?php echo htmlspecialchars($currentUrl); ?>" />

    <!-- Open Graph Tags -->
    <meta property="og:title" content="<?php echo htmlspecialchars($studyTitle); ?> | Trial2Cure" />
    <meta property="og:description" content="<?php echo htmlspecialchars($studyDescription); ?>" />
    <meta property="og:url" content="<?php echo htmlspecialchars($currentUrl); ?>" />
    <meta property="og:image" content="https://trial2cure.com/assets/img/trialtocure-logo.png" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Trial2Cure" />

    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="<?php echo htmlspecialchars($studyTitle); ?> | Trial2Cure" />
    <meta name="twitter:description" content="<?php echo htmlspecialchars($studyDescription); ?>" />
    <meta name="twitter:url" content="<?php echo htmlspecialchars($currentUrl); ?>" />
    <meta name="twitter:image" content="https://trial2cure.com/assets/img/trialtocure-logo.png" />
    <meta name="twitter:site" content="@trial2cure" />
    <meta name="twitter:creator" content="@trial2cure" />

    <!-- SEO Meta Tags -->
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
            "name": "<?php echo htmlspecialchars($studyTitle); ?> | Trial2Cure",
            "url": "<?php echo htmlspecialchars($currentUrl); ?>",
            "description": "<?php echo htmlspecialchars($studyDescription); ?>",
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

    <!-- Link Tags -->
    <link rel="stylesheet" href="./assets/css/plugins.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="stylesheet" href="./assets/css/colors/green.css">
    <link rel="icon" href="./assets/img/trialtocure-logo.png" type="image/png">
    <!-- Additional SEO styles if needed -->
    <style>
        /* Existing styles */
        .btn-green:hover {
            background-color: #fab758 !important;
            border-color: #fab758 !important;
        }

        @media screen and (max-width: 768px) {
            .feature-item {
                width: calc(50% - 20px);
            }
        }

        #phone-content h1 {
            font-size: 18px;
            color: white;
        }

        /* New styles */
        .location-labels,
        .condition-labels {
            overflow: hidden;
            max-height: 80px;
            /* Adjust based on how many locations/conditions to show initially */
            transition: max-height 0.3s ease;
        }

        .location-labels.expanded,
        .condition-labels.expanded {
            max-height: none;
            /* Show all locations/conditions */
        }

        .more-link {
            color: #007bff;
            cursor: pointer;
            text-decoration: underline;
        }
    </style>
</head>


<body>
    <div class="content-wrapper">
        <?php include "./header.php" ?>
        <!-- /header -->

        <div class="container py-4 py-md-6">
            <div id="cardContainer">
                <?php foreach ($currentItems as $data): ?>
                    <?php
                    // Extract necessary modules inside the loop
                    $eligibility = isset($data['eligibilityModule']) ? $data['eligibilityModule'] : [];
                    $statusModule = isset($data['statusModule']) ? $data['statusModule'] : [];
                    ?>
                    <div class="mb-3">
                        <div class="card p-4">
                            <!-- Recruitment Details -->
                            <div class="recruitment-details d-flex justify-content-between align-items-center">
                                <div class="status">
                                    <input type="checkbox" id="recruitingCheckbox">
                                    <span class="recruiting">
                                        <?php echo isset($statusModule['overallStatus']) ? htmlspecialchars($statusModule['overallStatus']) : 'Status not available'; ?>
                                    </span>
                                </div>
                                <div class="interested-tile">
                                    <a href="./portal/signup" class="btn btn-sm btn-green rounded-pill me-2">I'm interested ...!!</a>
                                </div>
                            </div>

                            <!-- Title -->
                            <div class="title">
                                <?php echo isset($data['identificationModule']['briefTitle']) ? htmlspecialchars($data['identificationModule']['briefTitle']) : 'Title not available'; ?>
                            </div>

                            <!-- Description -->
                            <div class="text-muted">
                                <?php echo isset($data['descriptionModule']['briefSummary']) ? htmlspecialchars($data['descriptionModule']['briefSummary']) : 'Description not available'; ?>
                            </div>

                            <!-- Conditions -->
                            <div class="conditions">
                                <span>Conditions:</span>
                                <div class="condition-labels" id="conditionLabels-<?php echo $data['identificationModule']['nctId']; ?>">
                                    <?php
                                    $conditions = isset($data['conditionsModule']['conditions']) ? $data['conditionsModule']['conditions'] : [];
                                    foreach ($conditions as $condition): ?>
                                        <span class="condition-label"><span class="condition-icon">🦠 </span><?php echo htmlspecialchars($condition); ?></span>
                                    <?php endforeach; ?>
                                </div>
                                <?php if (count($conditions) > 8): ?>
                                    <div class="more-link" onclick="toggleConditions('<?php echo $data['identificationModule']['nctId']; ?>')">
                                        More conditions available...
                                    </div>
                                <?php endif; ?>
                            </div>

                            <!-- Study Details -->
                            <div class="study-details">
                                <div class="detail-item">
                                    <strong>🗓️ Study Start (Actual)</strong>
                                    <span><?php echo htmlspecialchars(formatDate($statusModule['startDateStruct']['date'] ?? 'N/A')); ?></span>
                                </div>
                                <div class="detail-item">
                                    <strong>🗓️ Primary Completion (Estimated)</strong>
                                    <span><?php echo htmlspecialchars(formatDate($statusModule['primaryCompletionDateStruct']['date'] ?? 'N/A')); ?></span>
                                </div>
                                <div class="detail-item">
                                    <strong>✅ Study Completion (Estimated)</strong>
                                    <span><?php echo htmlspecialchars(formatDate($statusModule['completionDateStruct']['date'] ?? 'N/A')); ?></span>
                                </div>
                                <div class="detail-item">
                                    <strong>👥 Enrollment (Estimated)</strong>
                                    <span><?php echo htmlspecialchars($data['designModule']['enrollmentInfo']['count'] ?? 'N/A'); ?></span>
                                </div>
                                <div class="detail-item">
                                    <strong>🔬 Study Type</strong>
                                    <span><?php echo htmlspecialchars($data['designModule']['studyType'] ?? 'N/A'); ?></span>
                                </div>
                                <div class="detail-item">
                                    <strong>📊 Phase</strong>
                                    <span><?php echo htmlspecialchars($data['designModule']['phases'][0] ?? 'N/A'); ?></span>
                                </div>
                            </div>

                            <div class="locations">
                                <span>Locations:</span>
                                <div class="location-labels" id="locationLabels-<?php echo $data['identificationModule']['nctId']; ?>">
                                    <?php
                                    $locations = isset($data['contactsLocationsModule']['locations']) ? $data['contactsLocationsModule']['locations'] : [];
                                    foreach ($locations as $location): ?>
                                        <div class="location">
                                            <span class="location-icon">📍</span>
                                            <?php
                                            echo htmlspecialchars($location['city'] ?? '') .
                                                (isset($location['state']) ? ', ' . htmlspecialchars($location['state']) : '') .
                                                ', ' . htmlspecialchars($location['country'] ?? '');
                                            ?>
                                        </div>
                                    <?php endforeach; ?>
                                </div>
                                <?php if (count($locations) > 6): ?>
                                    <div class="more-link" onclick="toggleLocations('<?php echo $data['identificationModule']['nctId']; ?>')">
                                        More locations available...
                                    </div>
                                <?php endif; ?>
                            </div>

                            <div class="eligibility-container">
                                <div class="eligibility-header">
                                    <h2>📋 Eligibility Criteria</h2>
                                </div>
                                <div class="eligibility-content">
                                    <h3>Description</h3>
                                    <div class="eligibility-description">
                                        <ul>
                                            <?php
                                            if (isset($eligibility['eligibilityCriteria'])) {
                                                $criteriaLines = explode("\n", $eligibility['eligibilityCriteria']);
                                                $inExclusionSection = false;

                                                foreach ($criteriaLines as $criteria) {
                                                    $trimmedCriteria = trim($criteria);

                                                    if (empty($trimmedCriteria)) {
                                                        continue;
                                                    }

                                                    if (stripos($trimmedCriteria, 'Inclusion Criteria:') !== false || stripos($trimmedCriteria, 'Key inclusion criteria:') !== false) {
                                                        if ($inExclusionSection) {
                                                            echo '</ul>';
                                                        }
                                                        echo '<h4>Inclusion Criteria:</h4><ul>';
                                                        $inExclusionSection = false;
                                                    } elseif (stripos($trimmedCriteria, 'Exclusion criteria:') !== false || stripos($trimmedCriteria, 'Key exclusion criteria:') !== false) {
                                                        if (!$inExclusionSection) {
                                                            echo '</ul><h4>Exclusion Criteria:</h4><ul>';
                                                        }
                                                        $inExclusionSection = true;
                                                    } else {
                                                        echo '<li>' . htmlspecialchars($trimmedCriteria) . '</li>';
                                                    }
                                                }

                                                echo '</ul>'; // Close the last ul tag if open
                                            } else {
                                                echo '<li>No eligibility criteria found.</li>';
                                            }
                                            ?>
                                        </ul>
                                    </div>
                                    <div class="eligibility-info">
                                        <div><strong>Ages Eligible for Study:</strong>
                                            <?php
                                            echo htmlspecialchars($eligibility['minimumAge'] ?? 'N/A') . " to " . htmlspecialchars($eligibility['maximumAge'] ?? 'N/A') . " (" . htmlspecialchars(implode(', ', $eligibility['stdAges'] ?? [])) . ")";
                                            ?>
                                        </div>
                                        <div><strong>Sexes Eligible for Study:</strong> <?php echo htmlspecialchars($eligibility['sex'] ?? 'N/A'); ?></div>
                                        <div><strong>Accepts Healthy Volunteers:</strong>
                                            <?php echo isset($eligibility['healthyVolunteers']) && $eligibility['healthyVolunteers'] ? 'Yes' : 'No'; ?></div>
                                    </div>
                                </div>
                            </div>

                            <!-- Study Record Dates -->
                            <div class="study-record-dates">
                                <div class="study-record-dates-header">
                                    <h2>🗓️ Study Record Dates</h2>
                                </div>
                                <p>These dates track the progress of study record and summary results submissions to ClinicalTrials.gov. Study records and reported
                                    results are reviewed by the National Library of Medicine (NLM) to make sure they meet specific quality control standards before
                                    being posted on the public website.</p>
                                <div class="record-dates-container">
                                    <div class="record-dates-column">
                                        <h4>Study Registration Dates</h4>
                                        <ul>
                                            <li><strong>First Submitted</strong>
                                                <span><?php echo htmlspecialchars(formatDate($statusModule['studyFirstSubmitDate'] ?? 'N/A')); ?></span>
                                            </li>
                                            <li><strong>First Submitted that Met QC Criteria</strong>
                                                <span><?php echo htmlspecialchars(formatDate($statusModule['studyFirstSubmitQcDate'] ?? 'N/A')); ?></span>
                                            </li>
                                            <li><strong>First Posted</strong>
                                                <span><?php echo htmlspecialchars(formatDate($statusModule['studyFirstPostDateStruct']['date'] ?? 'N/A')); ?></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="record-dates-column">
                                        <h4>Study Record Updates</h4>
                                        <ul>
                                            <li><strong>Last Update Submitted that Met QC Criteria</strong>
                                                <span><?php echo htmlspecialchars(formatDate($statusModule['lastUpdateSubmitDate'] ?? 'N/A')); ?></span>
                                            </li>
                                            <li><strong>Last Update Posted</strong>
                                                <span><?php echo htmlspecialchars(formatDate($statusModule['lastUpdatePostDateStruct']['date'] ?? 'N/A')); ?></span>
                                            </li>
                                            <li><strong>Last Verified</strong>
                                                <span><?php echo htmlspecialchars(formatDate($statusModule['statusVerifiedDate'] ?? 'N/A')); ?></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- Interested Tile -->
                            <div class="interested-tile" style="text-align: center;">
                                <a href="./portal/signup" class="btn btn-lg btn-green rounded-pill me-2">I'm interested ...!!</a>
                            </div>

                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

        </div>
    </div>

    <?php include "./footer.php" ?>

    <script>
        function toggleLocations(nctId) {
            var locationLabels = document.getElementById('locationLabels-' + nctId);
            locationLabels.classList.toggle('expanded');
            var moreLink = locationLabels.nextElementSibling;
            if (locationLabels.classList.contains('expanded')) {
                moreLink.textContent = 'Show fewer locations...';
            } else {
                moreLink.textContent = 'More locations available...';
            }
        }

        function toggleConditions(nctId) {
            var conditionLabels = document.getElementById('conditionLabels-' + nctId);
            conditionLabels.classList.toggle('expanded');
            var moreLink = conditionLabels.nextElementSibling;
            if (conditionLabels.classList.contains('expanded')) {
                moreLink.textContent = 'Show fewer conditions...';
            } else {
                moreLink.textContent = 'More conditions available...';
            }
        }
    </script>

</body>

</html>