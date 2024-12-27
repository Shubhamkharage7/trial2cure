<?php
ini_set('memory_limit', '512M');

// Read JSON file
$jsonString = file_get_contents('./data.json');

// Check if file reading was successful
if ($jsonString === false) {
    die("Error reading JSON file.");
}

// Decode JSON
$data = json_decode($jsonString, true);

// Check if JSON decoding was successful
if ($data === null) {
    die("Error decoding JSON: " . json_last_error_msg());
}

// Extract protocol section data
$cardData = array_column($data, 'protocolSection');

// Function to truncate text
function truncateText($text, $length)
{
    if (strlen($text) > $length) {
        return substr($text, 0, $length) . '...';
    }
    return $text;
}

// Function to generate URL
function generateURL($study)
{
    return "trialsindex?study=" . urlencode($study);
}

// Handle search query
$searchQuery = isset($_GET['search']) ? $_GET['search'] : '';

// if (!empty($searchQuery)) {
//     // Lowercase and trim the search query
//     $searchQueryLower = strtolower(trim($searchQuery));

//     // Split the search query into individual words/terms
//     $searchTerms = array_filter(array_map('trim', explode(' ', $searchQueryLower)));

//     // Arrays to store exact matches and partial matches
//     $exactMatches = [];
//     $partialMatches = [];

//     // Loop through each item and categorize as exact or partial match
//     foreach ($cardData as $item) {
//         // Extract and prepare data fields
//         $identificationModule = $item['identificationModule'];
//         $statusModule = $item['statusModule'];
//         $descriptionModule = $item['descriptionModule'];
//         $conditionsModule = $item['conditionsModule'];
//         $contactsLocationsModule = $item['contactsLocationsModule'];

//         // Prepare fields for exact matching
//         $briefTitle = isset($identificationModule['briefTitle']) ? strtolower(trim($identificationModule['briefTitle'])) : '';
//         $studyField = isset($identificationModule['study']) ? strtolower(trim($identificationModule['study'])) : '';

//         // Check for exact match in briefTitle or study
//         if ($briefTitle === $searchQueryLower || $studyField === $searchQueryLower) {
//             $exactMatches[] = $item;
//             continue; // Skip to next item since we've found an exact match
//         }

//         // Prepare fields for partial matching
//         $fieldsToSearch = [];

//         // briefTitle and officialTitle
//         if (!empty($briefTitle)) {
//             $fieldsToSearch[] = $briefTitle;
//         }
//         if (isset($identificationModule['officialTitle'])) {
//             $fieldsToSearch[] = strtolower(trim($identificationModule['officialTitle']));
//         }

//         // nctId
//         if (isset($identificationModule['nctId'])) {
//             $fieldsToSearch[] = strtolower(trim($identificationModule['nctId']));
//         }

//         // therapeuticArea (array)
//         if (isset($identificationModule['therapeuticArea']) && is_array($identificationModule['therapeuticArea'])) {
//             foreach ($identificationModule['therapeuticArea'] as $area) {
//                 $fieldsToSearch[] = strtolower(trim($area));
//             }
//         }

//         // briefSummary
//         if (isset($descriptionModule['briefSummary'])) {
//             $fieldsToSearch[] = strtolower(trim($descriptionModule['briefSummary']));
//         }

//         // conditions and keywords (arrays)
//         if (isset($conditionsModule['conditions']) && is_array($conditionsModule['conditions'])) {
//             foreach ($conditionsModule['conditions'] as $condition) {
//                 $fieldsToSearch[] = strtolower(trim($condition));
//             }
//         }
//         if (isset($conditionsModule['keywords']) && is_array($conditionsModule['keywords'])) {
//             foreach ($conditionsModule['keywords'] as $keyword) {
//                 $fieldsToSearch[] = strtolower(trim($keyword));
//             }
//         }

//         // locations (array of objects)
//         if (isset($contactsLocationsModule['locations']) && is_array($contactsLocationsModule['locations'])) {
//             foreach ($contactsLocationsModule['locations'] as $location) {
//                 if (isset($location['city'])) {
//                     $fieldsToSearch[] = strtolower(trim($location['city']));
//                 }
//                 if (isset($location['state'])) {
//                     $fieldsToSearch[] = strtolower(trim($location['state']));
//                 }
//                 if (isset($location['zip'])) {
//                     $fieldsToSearch[] = strtolower(trim($location['zip']));
//                 }
//                 if (isset($location['country'])) {
//                     $fieldsToSearch[] = strtolower(trim($location['country']));
//                 }
//             }
//         }

//         // Check for partial matches
//         $matched = false;
//         foreach ($fieldsToSearch as $fieldValue) {
//             foreach ($searchTerms as $term) {
//                 if (strpos($fieldValue, $term) !== false) {
//                     $matched = true;
//                     break 2; // Break both loops if a match is found
//                 }
//             }
//         }

//         if ($matched) {
//             $partialMatches[] = $item;
//         }
//     }

//     // Combine exact matches and partial matches
//     $cardData = array_merge($exactMatches, $partialMatches);
// }


if (!empty($searchQuery)) {
    $searchQueryLower = strtolower(trim($searchQuery));
    $searchTerms = array_filter(array_map('trim', explode(' ', $searchQueryLower)));

    $exactMatches = [];
    $partialMatches = [];

    foreach ($cardData as $item) {
        // Prepare data fields
        $identificationModule = $item['identificationModule'];
        $descriptionModule = $item['descriptionModule'];
        $conditionsModule = $item['conditionsModule'];
        $contactsLocationsModule = $item['contactsLocationsModule'];

        $fieldsToSearch = [];

        // Include all searchable fields
        // briefTitle and officialTitle
        if (isset($identificationModule['briefTitle'])) {
            $fieldsToSearch[] = strtolower(trim($identificationModule['briefTitle']));
        }
        if (isset($identificationModule['officialTitle'])) {
            $fieldsToSearch[] = strtolower(trim($identificationModule['officialTitle']));
        }

        // NCT ID
        if (isset($identificationModule['nctId'])) {
            $fieldsToSearch[] = strtolower(trim($identificationModule['nctId']));
        }

        // Therapeutic areas
        if (isset($identificationModule['therapeuticArea']) && is_array($identificationModule['therapeuticArea'])) {
            foreach ($identificationModule['therapeuticArea'] as $area) {
                $fieldsToSearch[] = strtolower(trim($area));
            }
        }

        // Summary
        if (isset($descriptionModule['briefSummary'])) {
            $fieldsToSearch[] = strtolower(trim($descriptionModule['briefSummary']));
        }

        // Conditions and keywords
        if (isset($conditionsModule['conditions']) && is_array($conditionsModule['conditions'])) {
            foreach ($conditionsModule['conditions'] as $condition) {
                $fieldsToSearch[] = strtolower(trim($condition));
            }
        }
        if (isset($conditionsModule['keywords']) && is_array($conditionsModule['keywords'])) {
            foreach ($conditionsModule['keywords'] as $keyword) {
                $fieldsToSearch[] = strtolower(trim($keyword));
            }
        }

        // Locations
        if (isset($contactsLocationsModule['locations']) && is_array($contactsLocationsModule['locations'])) {
            foreach ($contactsLocationsModule['locations'] as $location) {
                if (isset($location['city'])) {
                    $fieldsToSearch[] = strtolower(trim($location['city']));
                }
                if (isset($location['state'])) {
                    $fieldsToSearch[] = strtolower(trim($location['state']));
                }
                if (isset($location['zip'])) {
                    $fieldsToSearch[] = strtolower(trim($location['zip']));
                }
                if (isset($location['country'])) {
                    $fieldsToSearch[] = strtolower(trim($location['country']));
                }
            }
        }

        // Exact match for full query
        $prioritizedFields = ['briefTitle', 'officialTitle', 'therapeuticArea'];
        foreach ($prioritizedFields as $field) {
            if (isset($item[$field]) && strpos(strtolower($item[$field]), $searchQueryLower) !== false) {
                $exactMatches[] = $item;
                continue 2; // Skip further checks for this item
            }
        }

        // Partial matching: Ensure all terms match at least one field
        $allTermsMatch = true;
        foreach ($searchTerms as $term) {
            $termFound = false;
            foreach ($fieldsToSearch as $fieldValue) {
                if (strpos($fieldValue, $term) !== false) {
                    $termFound = true;
                    break;
                }
            }
            if (!$termFound) {
                $allTermsMatch = false;
                break;
            }
        }

        if ($allTermsMatch) {
            $partialMatches[] = $item;
        }
    }

    // Combine exact and partial matches
    $cardData = array_merge($exactMatches, $partialMatches);
}

// Pagination settings
$itemsPerPage = 15;
$totalItems = count($cardData);
$totalPages = ($itemsPerPage > 0) ? ceil($totalItems / $itemsPerPage) : 0;
$page = isset($_GET['page']) ? (int) $_GET['page'] : 1;
$page = max(1, min($page, $totalPages)); // Ensure page number is within range
$offset = ($page - 1) * $itemsPerPage;
$currentItems = array_slice($cardData, $offset, $itemsPerPage);

// Calculate the current range of items being displayed
$startItem = $offset + 1;
$endItem = min($offset + $itemsPerPage, $totalItems);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Your existing meta tags and links -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clinical Trials Search</title>

    <!-- Include your existing CSS files -->
    <link rel="stylesheet" href="./assets/css/plugins.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="stylesheet" href="./assets/css/colors/green.css">
    <link rel="icon" href="./assets/img/trialtocure-logo.png" type="image/png">

    <style>
        /* Your existing styles */

        .btn-green:hover {
            background-color: #fab758 !important;
            border-color: #fab758 !important;
        }

        .form {
            position: relative;
        }

        .form .search-icon-button {
            background: none;
            border: none;
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            color: #aaa;
            cursor: pointer;
            padding: 0;
        }

        .form .search-icon-button i {
            font-size: 16px;
        }

        .form .left-pan {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            color: #aaa;
        }

        .form-input {
            padding-left: 35px;
            padding-right: 35px;
        }

        /* Suggestions Dropdown Styles */
        .suggestions-dropdown {
            position: absolute;
            background-color: #fff;
            border: 1px solid #ccc;
            border-top: none;
            max-height: 200px;
            overflow-y: auto;
            width: 100%;
            z-index: 1000;
        }

        .suggestions-dropdown div {
            padding: 10px;
            cursor: pointer;
        }

        .suggestions-dropdown div:hover {
            background-color: #f0f0f0;
        }

    </style>
</head>

<body>
    <section class="content-wrapper">
        <?php include "./header.php" ?>
        <!-- /header -->

        <div class="container py-4 py-md-6">
            <h1 class="display-4 text-center">Clinical Trials</h1>
            <div class="row height d-flex justify-content-center align-items-center">
                <div class="col-md-10 mt-1 pt-1 mb-2 pb-2">
                    <!-- Search Form -->
                    <form method="GET" action="">
                        <div class="form">
                            <!-- Submit button with search icon -->
                            <button type="submit" class="search-icon-button">
                                <i class="fa fa-search"></i>
                            </button>
                            <input type="text" class="form-control form-input" id="searchInput" name="search" placeholder="Search by condition, location or NCT ID..."
                                value="<?php echo htmlspecialchars($searchQuery); ?>">
                            <!-- Suggestions Dropdown -->
                            <div id="suggestionsList" class="suggestions-dropdown"></div>
                        </div>
                    </form>
                </div>
            </div>
            <div id="cardContainer">
                <?php if (count($currentItems) > 0): ?>
                    <?php foreach ($currentItems as $data): ?>
                        <div class="mb-3 lift ">
                            <div class="card p-2">
                                <a href="<?php echo generateURL($data['identificationModule']['study']); ?>">
                                    <div class="status">
                                        <input type="checkbox" id="recruitingCheckbox">
                                        <span class="recruiting">
                                            <?php echo htmlspecialchars($data['statusModule']['overallStatus']); ?>
                                        </span>
                                    </div>
                                    <div class="title">
                                        <?php echo htmlspecialchars($data['identificationModule']['briefTitle']); ?>
                                    </div>
                                    <div class="text-muted">
                                        <?php echo htmlspecialchars(truncateText($data['descriptionModule']['briefSummary'], 150)); ?>
                                    </div>
                                    <div class="conditions">
                                        <span>Conditions:</span>
                                        <div class="condition-labels">
                                            <?php
                                            $conditions = $data['conditionsModule']['conditions'] ?? [];
                                            $totalConditions = count($conditions);
                                            $displayLimit = 4;
                                            $displayedConditions = array_slice($conditions, 0, $displayLimit);

                                            foreach ($displayedConditions as $condition): ?>
                                                <span class="condition-label"><?php echo htmlspecialchars($condition); ?></span>
                                            <?php endforeach; ?>

                                            <?php if ($totalConditions > $displayLimit): ?>
                                                <div class="text-decoration-underline" style="color: #007bff; margin-bottom: 0.5em; padding: 2px 8px; margin: 5px;">
                                                    <?php echo ($totalConditions - $displayLimit) . ' more condition' . (($totalConditions - $displayLimit) > 1 ? 's' : '') . ' available...'; ?>
                                                </div>
                                            <?php endif; ?>
                                        </div>
                                    </div>

                                    <div class="locations">
                                        <span>Locations:</span>
                                        <div class="location-labels">
                                            <?php
                                            $locations = $data['contactsLocationsModule']['locations'] ?? [];
                                            $totalLocations = count($locations);
                                            $displayLimit = 4;
                                            $displayedLocations = array_slice($locations, 0, $displayLimit);

                                            foreach ($displayedLocations as $location): ?>
                                                <div class="location">
                                                    <span class="location-icon">📍</span>
                                                    <?php
                                                    echo htmlspecialchars($location['city'] ?? '') . ', ' .
                                                        (isset($location['state']) ? htmlspecialchars($location['state']) . ', ' : '') .
                                                        htmlspecialchars($location['country'] ?? '');
                                                    ?>
                                                </div>
                                            <?php endforeach; ?>

                                            <?php if ($totalLocations > $displayLimit): ?>
                                                <div class="text-decoration-underline" style="color: #007bff; 
                                            margin-bottom: 0.5em; 
                                            padding: 2px 8px;
                                            margin: 5px;">
                                                    <?php echo ($totalLocations - $displayLimit) . ' more location' . (($totalLocations - $displayLimit) > 1 ? 's' : '') . ' available...'; ?>
                                                </div>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php else: ?>
                    <p>No results found for the search query "<?php echo htmlspecialchars($searchQuery); ?>".</p>
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
                <h2 class="text-primary" style="margin: 1em;">Total Trials: <span
                        class="text-primary"><?php echo "$startItem - $endItem of $totalItems"; ?></span></h2>
            </div>
        </div>
    </section>

    <?php include "./footer.php" ?>

    <!-- JavaScript for Autocomplete Suggestions -->
    <script>
        // Function to debounce the input to prevent excessive server requests
        function debounce(func, wait) {
            let timeout;
            return function(...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, args), wait);
            };
        }

        document.addEventListener("DOMContentLoaded", function() {
            const searchInput = document.getElementById('searchInput');
            const suggestionsList = document.getElementById('suggestionsList');
            const form = document.querySelector('form'); // Reference to the form

            searchInput.addEventListener('input', debounce(function() {
                const query = this.value.trim();
                if (query.length > 1) { // Start suggesting after 2 characters
                    fetchSuggestions(query);
                } else {
                    suggestionsList.innerHTML = '';
                    suggestionsList.style.display = 'none';
                }
            }, 300)); // Adjust the debounce time as needed

            // Function to fetch suggestions from the server
            function fetchSuggestions(query) {
                fetch('suggestions.php?query=' + encodeURIComponent(query))
                    .then(response => response.json())
                    .then(data => {
                        displaySuggestions(data);
                    })
                    .catch(error => {
                        console.error('Error fetching suggestions:', error);
                    });
            }

            // Function to display suggestions
            function displaySuggestions(suggestions) {
                suggestionsList.innerHTML = '';
                if (suggestions.length > 0) {
                    const query = searchInput.value.trim().toLowerCase();
                    suggestions.forEach(suggestion => {
                        const div = document.createElement('div');
                        // Highlight the matching part
                        const regex = new RegExp(`(${query})`, 'gi');
                        const suggestionText = suggestion.replace(regex, '<strong>$1</strong>');
                        div.innerHTML = suggestionText;
                        div.addEventListener('click', function() {
                            // Set the input value to the actual suggestion without the field label
                            const actualValue = suggestion.split(': ').pop();
                            searchInput.value = actualValue;
                            suggestionsList.innerHTML = '';
                            suggestionsList.style.display = 'none';
                            // Submit the form
                            form.submit();
                        });
                        suggestionsList.appendChild(div);
                    });
                    suggestionsList.style.display = 'block';
                } else {
                    suggestionsList.style.display = 'none';
                }
            }

            // Submit form on Enter key press
            searchInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    suggestionsList.innerHTML = '';
                    suggestionsList.style.display = 'none';
                    // Form will submit naturally
                }
            });

            // Hide suggestions when clicking outside
            document.addEventListener('click', function(event) {
                if (!searchInput.contains(event.target) && !suggestionsList.contains(event.target)) {
                    suggestionsList.innerHTML = '';
                    suggestionsList.style.display = 'none';
                }
            });
        });
    </script>
</body>

</html>