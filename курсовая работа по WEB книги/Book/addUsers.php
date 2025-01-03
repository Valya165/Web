<?php
require('dataBase.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $newUsername = $_POST['new_username'];
    $newPassword = password_hash($_POST['new_password'], PASSWORD_DEFAULT);
    $newTel = $_POST['new_tel'];
    if ($dbreg->query("INSERT INTO users (username, password, tel) VALUES ('$newUsername', '$newPassword', '$newTel')") == TRUE) 
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