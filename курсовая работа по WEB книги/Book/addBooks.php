<?php
require('dataBase.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $newBook = $_POST['new_book'];
    $author = $_POST['author'];
    $image = $_POST['image'];
    $desc = $_POST['desc'];
    $price=$_POST['price'];
    if ($dbreg->query("INSERT INTO books (book, author, imagepath, description, price) VALUES ('$newBook', '$author', '$image', '$desc', '$price')") == TRUE) 
    {
        header("Location: page.php");
        exit();
    } 
    else 
    {
        echo "Ошибка при добавлении пользователя: " . $dbreg->error;
    }
} 
else 
{
    echo "Неверный запрос";
}
$dbreg->close();
?>