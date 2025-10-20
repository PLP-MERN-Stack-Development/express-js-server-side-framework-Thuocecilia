// controllers/productController.js
const { v4: uuidv4 } = require('uuid');
const { NotFoundError } = require('../utils/customErrors');

// In-memory data
let products = [
  { id: uuidv4(), name: 'Laptop', description: 'High-end laptop', price: 1500, category: 'Electronics', inStock: true },
  { id: uuidv4(), name: 'Phone', description: 'Smartphone', price: 800, category: 'Electronics', inStock: true },
  { id: uuidv4(), name: 'Chair', description: 'Office chair', price: 120, category: 'Furniture', inStock: false },
];

// GET /api/products
const getAllProducts = (req, res, next) => {
  try {
    let result = [...products];

    // Filtering by category
    if (req.query.category) {
      result = result.filter(p => p.category.toLowerCase() === req.query.category.toLowerCase());
    }

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || result.length;
    const start = (page - 1) * limit;
    const end = start + limit;

    const paginated = result.slice(start, end);

    res.json({
      total: result.length,
      page,
      limit,
      data: paginated,
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/products/:id
const getProductById = (req, res, next) => {
  try {
    const product = products.find(p => p.id === req.params.id);
    if (!product) throw new NotFoundError('Product not found');
    res.json(product);
  } catch (err) {
    next(err);
  }
};

// POST /api/products
const createProduct = (req, res, next) => {
  try {
    const { name, description, price, category, inStock } = req.body;
    const newProduct = { id: uuidv4(), name, description, price, category, inStock };
    products.push(newProduct);
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

// PUT /api/products/:id
const updateProduct = (req, res, next) => {
  try {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) throw new NotFoundError('Product not found');

    products[index] = { ...products[index], ...req.body };
    res.json(products[index]);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/products/:id
const deleteProduct = (req, res, next) => {
  try {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) throw new NotFoundError('Product not found');

    const deleted = products.splice(index, 1);
    res.json({ message: 'Product deleted', deleted });
  } catch (err) {
    next(err);
  }
};

// GET /api/products/search?name=...
const searchProducts = (req, res, next) => {
  try {
    const { name } = req.query;
    if (!name) return res.status(400).json({ message: 'Please provide a search term' });

    const result = products.filter(p =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );

    res.json(result);
  } catch (err) {
    next(err);
  }
};

// GET /api/products/stats
const getStats = (req, res, next) => {
  try {
    const categories = {};
    products.forEach(p => {
      categories[p.category] = (categories[p.category] || 0) + 1;
    });
    res.json({ total: products.length, countByCategory: categories });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getStats,
};
