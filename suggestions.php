<?php
ini_set('memory_limit', '512M');

// Read JSON file
$jsonString = file_get_contents('./data.json');

// Check if file reading was successful
if ($jsonString === false) {
    http_response_code(500);
    echo json_encode(["Error reading JSON file."]);
    exit;
}

// Decode JSON
$data = json_decode($jsonString, true);

// Check if JSON decoding was successful
if ($data === null) {
    http_response_code(500);
    echo json_encode(["Error decoding JSON: " . json_last_error_msg()]);
    exit;
}

// Extract protocol section data
$cardData = array_column($data, 'protocolSection');

// Get the query parameter
$query = isset($_GET['query']) ? strtolower(trim($_GET['query'])) : '';

$suggestions = [];

if (!empty($query)) {
    // Collect unique suggestions from the data
    $suggestionSet = [];

    foreach ($cardData as $item) {
        $identificationModule = $item['identificationModule'];
        $conditionsModule = $item['conditionsModule'];
        $contactsLocationsModule = $item['contactsLocationsModule'];

        // briefTitle and officialTitle
        if (isset($identificationModule['briefTitle'])) {
            $briefTitle = strtolower(trim($identificationModule['briefTitle']));
            if (strpos($briefTitle, $query) !== false) {
                $suggestionSet['Title: ' . $identificationModule['briefTitle']] = null;
            }
        }
        if (isset($identificationModule['officialTitle'])) {
            $officialTitle = strtolower(trim($identificationModule['officialTitle']));
            if (strpos($officialTitle, $query) !== false) {
                $suggestionSet['Official Title: ' . $identificationModule['officialTitle']] = null;
            }
        }

        // nctId
        if (isset($identificationModule['nctId'])) {
            $nctId = strtolower(trim($identificationModule['nctId']));
            if (strpos($nctId, $query) !== false) {
                $suggestionSet['NCT ID: ' . $identificationModule['nctId']] = null;
            }
        }

        // therapeuticArea
        if (isset($identificationModule['therapeuticArea']) && is_array($identificationModule['therapeuticArea'])) {
            foreach ($identificationModule['therapeuticArea'] as $area) {
                $areaLower = strtolower(trim($area));
                if (strpos($areaLower, $query) !== false) {
                    $suggestionSet['Therapeutic Area: ' . $area] = null;
                }
            }
        }

        // conditions and keywords
        if (isset($conditionsModule['conditions']) && is_array($conditionsModule['conditions'])) {
            foreach ($conditionsModule['conditions'] as $condition) {
                $conditionLower = strtolower(trim($condition));
                if (strpos($conditionLower, $query) !== false) {
                    $suggestionSet['Condition: ' . $condition] = null;
                }
            }
        }
        if (isset($conditionsModule['keywords']) && is_array($conditionsModule['keywords'])) {
            foreach ($conditionsModule['keywords'] as $keyword) {
                $keywordLower = strtolower(trim($keyword));
                if (strpos($keywordLower, $query) !== false) {
                    $suggestionSet['Keyword: ' . $keyword] = null;
                }
            }
        }

        // locations
        if (isset($contactsLocationsModule['locations']) && is_array($contactsLocationsModule['locations'])) {
            foreach ($contactsLocationsModule['locations'] as $location) {
                if (isset($location['city'])) {
                    $cityLower = strtolower(trim($location['city']));
                    if (strpos($cityLower, $query) !== false) {
                        $suggestionSet['City: ' . $location['city']] = null;
                    }
                }
                if (isset($location['state'])) {
                    $stateLower = strtolower(trim($location['state']));
                    if (strpos($stateLower, $query) !== false) {
                        $suggestionSet['State: ' . $location['state']] = null;
                    }
                }
                if (isset($location['country'])) {
                    $countryLower = strtolower(trim($location['country']));
                    if (strpos($countryLower, $query) !== false) {
                        $suggestionSet['Country: ' . $location['country']] = null;
                    }
                }
                if (isset($location['zip'])) {
                    $zipLower = strtolower(trim($location['zip']));
                    if (strpos($zipLower, $query) !== false) {
                        $suggestionSet['Zip: ' . $location['zip']] = null;
                    }
                }
            }
        }
    }

    // Remove duplicates and limit the number of suggestions
    $suggestions = array_keys($suggestionSet);
    $suggestions = array_slice($suggestions, 0, 10); // Limit to 10 suggestions
}

// Return the suggestions as JSON
header('Content-Type: application/json');
echo json_encode($suggestions);
