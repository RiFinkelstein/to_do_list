<?php 
    $servername = 'localhost';
    $username= 'root';   //because we are using xampp
    $password='';
    $dbname= 'Recipes';
    $conn = mysqli_connect($servername,$username,$password,$dbname) or die("Could not connect to database");
    if (mysqli_connect_errno()){
        echo "Failed to connecto to mySQL: ".mysqli_connect_errno()();
    }
?>