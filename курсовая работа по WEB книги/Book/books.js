let cartCount = 0;
let cartItems = [];
function addToCart(bookTitle,cost) {
    cartCount++;
    cartItems.push(bookTitle+" "+cost+" руб.");
    updateCartCount();
}

function updateCartCount() {
    document.getElementById("cartCount").textContent = cartCount;
}

function showCart() {
    document.getElementById("cartList").innerHTML = "";
    cartItems.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        document.getElementById("cartList").appendChild(li);
    });
    document.getElementById("cartMenu").style.display = "flex";
}

function hideCart() {
    document.getElementById("cartMenu").style.display = "none";
}

function deleteAll() {
    cartCount = 0;
    cartItems = [];
    updateCartCount();
    hideCart();
}

function buyAll() {
    if (cartCount == 0) {
        alert("Сначала выберите книгу(и) для покупки!")
    }
    else { alert("Мы свяжемся с вами по телефону для подтверждения покупки."); }
    cartCount = 0;
    cartItems = [];
    updateCartCount();
    hideCart();
}

function account() {
    var addButton = document.createElement("button");
    addButton.type = "submit";
    var form = document.createElement("form");
    form.method = "post";
    form.action = "page.php";
    form.appendChild(addButton);
    document.body.appendChild(form);
    form.submit();
}