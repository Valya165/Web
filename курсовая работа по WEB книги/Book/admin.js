function editUserData(userId) {
    document.getElementById("edit_user_id").value = userId;
    document.getElementById("new_username").value = prompt("Enter new username:", "");
    document.getElementById("new_password").value = prompt("Enter new password:", "");
    document.getElementById("new_tel").value = prompt("Enter new phone:", "");
    document.forms[0].submit();
}
function deleteData(userId) {
    var confirmDelete = confirm("Вы уверены, что хотите удалить данного пользователя?");
    if (confirmDelete) {
        var deleteForm = document.createElement("form");
        deleteForm.method = "post";
        deleteForm.action = "deleteUsers.php";
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = "user_id";
        input.value = userId;
        deleteForm.appendChild(input);
        document.body.appendChild(deleteForm);
        deleteForm.submit();
    }
}
function addUser() {
    var new_username = prompt("Enter new username:", "");
    var new_password = prompt("Enter new password:", "");
    var new_tel = prompt("Enter new phone:", "");
    var usernameInput = document.createElement("input");
    usernameInput.type = "text";
    usernameInput.name = "new_username";
    usernameInput.value = new_username;
    var passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.name = "new_password";
    passwordInput.value = new_password;
    var telInput = document.createElement("input");
    telInput.type = "text";
    telInput.name = "new_tel";
    telInput.value = new_tel;
    var addButton = document.createElement("button");
    addButton.type = "submit";
    var form = document.createElement("form");
    form.method = "post";
    form.action = "addUsers.php";
    form.appendChild(usernameInput);
    form.appendChild(passwordInput);
    form.appendChild(telInput);
    form.appendChild(addButton);
    document.body.appendChild(form);
    form.submit();
}
function addBook(){
    var book = prompt("Enter new book:", "");
    var author = prompt("Enter author:", "");
    var image = prompt("Enter imagepath:", "");
    var desc = prompt("Enter description:", "");
    var price = prompt("Enter price:", "");
    var priceInput =  document.createElement("input");
    priceInput.type = "text";
    priceInput.name = "price";
    priceInput.value = price;
    var bookInput =  document.createElement("input");
    bookInput.type = "text";
    bookInput.name = "new_book";
    bookInput.value = book;
    var authorInput =  document.createElement("input");
    authorInput.type = "text";
    authorInput.name = "author";
    authorInput.value = author;
    var imageInput =  document.createElement("input");
    imageInput.type = "text";
    imageInput.name = "image";
    imageInput.value = image;
    var descInput =  document.createElement("input");
    descInput.type = "text";
    descInput.name = "desc";
    descInput.value = desc;
    var addButton = document.createElement("button");
    addButton.type = "submit";
    var form = document.createElement("form");
    form.method = "post";
    form.action = "addBooks.php";
    form.appendChild(bookInput);
    form.appendChild(authorInput);
    form.appendChild(imageInput);
    form.appendChild(descInput);
    form.appendChild(priceInput);
    form.appendChild(addButton);
    document.body.appendChild(form);
    form.submit();
}
function corPassword() {
    var password = document.getElementById('new_password').value;
    if (password.length < 5) {
        alert("Пароль должен содержать не менее 5 символов");
        return false;
    }
    var phone= document.getElementById('new_tel').value;
    var str = /^8\d{10}$/;
    if(!str.test(phone)){alert("Введите корректный телефон в формате: 88005553535");return false;}
    return true;
}