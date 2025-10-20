// middleware/auth.js
const { ValidationError } = require('../utils/customErrors');

const auth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return next(new ValidationError('Unauthorized: Invalid or missing API key'));
  }
  next();
};

module.exports = auth;
