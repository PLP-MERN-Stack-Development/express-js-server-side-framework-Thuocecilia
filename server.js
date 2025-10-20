require("dotenv").config();
const express = require("express");
const app = express();
const productRoutes = require("./src/routes/productRoutes");

app.use(express.json());

// Basic middleware example
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World 🌍");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));