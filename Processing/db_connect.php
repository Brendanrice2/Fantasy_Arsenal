<?php

$connection = mysqli_connect('localhost', 'root', 'host', 'fantasyarsenaldb');

if(!$connection)
    die("Connection failed: " . mysqli_connect_error());

else
echo "Connected successfully";

?>