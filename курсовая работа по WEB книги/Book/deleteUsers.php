<?php
require('dataBase.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $userToDelete = $_POST['user_id'];
    if ($dbreg->query("DELETE FROM users WHERE id = $userToDelete")) 
    {
        header("Location: page.php");
        exit();
    } 
    else 
    {
        echo "Ошибка в удалении пользователя: " . $dbreg->error;
    }
} 
else 
{
    echo "Некорректный запрос";
}
$dbreg->close();
?>