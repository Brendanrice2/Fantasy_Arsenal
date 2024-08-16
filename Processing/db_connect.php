<?php

$server_name = "18.190.239.187" #host name
$sql_username = "root"
$password = "TheRainSong32!"
$db_name = "fantasyfootballplayerdb" 

$connection = new mysqli($server_name, $sql_username, $password);

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

echo "Connected successfully";

?>