
// Simple placeholder for future features

console.log("Website loaded");

// You can later add:
// - cart system
// - form handling
// - animations

function slide(val) {
    document.getElementById("after").style.width = val + "%";
}

function calculate() {
    let size = document.getElementById("size").value;
    let rate = document.getElementById("type").value;

    if (!size) return alert("Enter size");

    let total = size * rate;

    document.getElementById("result").innerText = "Estimated Price: R" + total;

    let link = document.getElementById("whatsappQuote");
    link.style.display = "inline-block";
    link.href = `https://wa.me/270673061578?text=Hi, I want a kitchen quote. Estimated: R${total}`;
}

