const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let products = [
  { id: uuidv4(), name: "Laptop", description: "Fast and reliable", price: 1200, category: "Electronics", inStock: true },
  { id: uuidv4(), name: "Shoes", description: "Comfortable sneakers", price: 80, category: "Fashion", inStock: true }
];

// ✅ GET all products
router.get("/", (req, res) => {
  res.json(products);
});

// ✅ GET product by ID
router.get("/:id", (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// ✅ POST create new product
router.post("/", (req, res) => {
  const { name, description, price, category, inStock } = req.body;
  if (!name || !price) return res.status(400).json({ message: "Name and price are required" });

  const newProduct = { id: uuidv4(), name, description, price, category, inStock };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// ✅ PUT update product
router.put("/:id", (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  Object.assign(product, req.body);
  res.json(product);
});

// ✅ DELETE product
router.delete("/:id", (req, res) => {
  products = products.filter(p => p.id !== req.params.id);
  res.status(204).send();
});

module.exports = router;
