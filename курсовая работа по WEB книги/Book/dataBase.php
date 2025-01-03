<?php
$user = 'root';
$password = ' ';
$db = 'db';
$host = 'localhost';
$port = 3306;
$dbreg = new mysqli($host, $user, $password, $db, $port);
if ($dbreg->connect_error) 
{
    exit("Ошибка соединения: " . $dbreg->connect_error);
}
?>