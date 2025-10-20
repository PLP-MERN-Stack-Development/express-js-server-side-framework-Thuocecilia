const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const productsRoutes = require('./routes/products.routes');
const { requestLogger } = require('./middleware/logger');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');


const app = express();


app.use(helmet());
app.use(express.json());


// Use morgan for concise dev logging and our requestLogger for timestamps
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'));
app.use(requestLogger);


app.use('/api/products', productsRoutes);


app.use(notFoundHandler);
app.use(errorHandler);


module.exports = app;