// middleware/validateProduct.js
const { ValidationError } = require('../utils/customErrors');

const validateProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;
  if (!name || !description || price == null || !category || typeof inStock !== 'boolean') {
    return next(new ValidationError('Invalid product data. Check all required fields.'));
  }
  next();
};

module.exports = validateProduct;
