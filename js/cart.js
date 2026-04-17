let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    sessionStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart");
}

function displayCart() {
    let container = document.getElementById("cart-items");
    let total = 0;

    container.innerHTML = "";

    cart.forEach(item => {
        total += item.price;
        container.innerHTML += `
            <div class="cart-item">
                ${item.name} - R${item.price}
            </div>`;
    });

    document.getElementById("total").innerText = "Total: R" + total;
}

    // PAYFAST REDIRECT
    function checkout() {
        alert("Redirecting to payment...");
        window.open("https://www.payfast.co.za/eng/process", "_blank");
}