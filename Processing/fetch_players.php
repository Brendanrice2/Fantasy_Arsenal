<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

// Include database connection
include 'db_connect.php';

// Query to select all players
$sql = "SELECT * FROM playerTable";
$result = $connection->query($sql);

$data = array(); // Array to hold the results

if ($result) {
    if ($result->num_rows > 0) {
        // Fetch each row and add it to the results array
        while($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }
    $result->free();
} else {
    // Handle query error
    echo json_encode(array("error" => "Error: " . $sql . " - " . $connection->error));
    exit;
}

// Close the database connection
$connection->close();

// Output the JSON-encoded data
echo json_encode($data);

?>