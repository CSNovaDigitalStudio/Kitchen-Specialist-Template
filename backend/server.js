const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const DB_FILE = "./backend/db.json";

// GET PRODUCTS
app.get("/products", (req, res) => {
    const data = JSON.parse(fs.readFileSync(DB_FILE));
    res.json(data.products);
});

// ADD PRODUCT (ADMIN)
app.post("/products", (req, res) => {
    const data = JSON.parse(fs.readFileSync(DB_FILE));

    data.products.push(req.body);

    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
    res.json({ message: "Product added" });
});

// CREATE ORDER
app.post("/order", (req, res) => {
    const data = JSON.parse(fs.readFileSync(DB_FILE));

    data.orders.push(req.body);

    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));

    res.json({ message: "Order saved" });
});

app.listen(3000, () => console.log("Server running on port 3000"));

// LOGIN
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        return res.json({ success: true });
    }

    res.json({ success: false });
});