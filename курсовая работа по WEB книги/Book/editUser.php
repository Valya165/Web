<?php
require('dataBase.php');
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $editUserId = $_POST['edit_user_id'];
    $newUsername = $_POST['new_username'];
    $newPassword = password_hash($_POST['new_password'], PASSWORD_DEFAULT);
    $newPhone=$_POST['new_tel'];
    if ($dbreg->query("UPDATE users SET username='$newUsername', password='$newPassword', tel='$newPhone' WHERE id=$editUserId")) 
    {
        $userId=$_SESSION['user_id'];
        $role=$dbreg->query("SELECT role FROM users WHERE id=$userId");
        $userRole=$role->fetch_assoc()['role'];
        if ($userRole =='admin') 
        {
            header("Location: page.php"); 
            exit();
        }
        else
        {
            header("Location: openFirst.html");
            exit();
        }
    } 
    else 
    {
        echo "При обновлении данных возникла ошибка: " . $dbreg->error;
    }
} 
else 
{
    echo "Некорректный запрос";
}
$dbreg->close();
?>