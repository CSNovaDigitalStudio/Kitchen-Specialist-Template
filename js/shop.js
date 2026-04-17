let products = [];

async function loadProducts() {
    const res = await fetch("http://localhost:3000/products");
    products = await res.json();
    displayProducts(products);
}

function displayProducts(list) {
    const container = document.querySelector(".products");
    container.innerHTML = "";

    list.forEach(p => {
        container.innerHTML += `
        <div class="product">
            <img src="../${p.image}">
            <h3>${p.name}</h3>
            <p>R${p.price}</p>
            <button onclick="addToCart('${p.name}', ${p.price})">
                Add to Cart
            </button>
        </div>`;
    });
}

// FILTER
function filter(category) {
    if (category === "all") return displayProducts(products);
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
}

loadProducts();

