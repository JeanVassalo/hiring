const express = require('express');
const routes = express.Router();
const api = require('./src/alphavantage')

routes.get('/', api.test);

//Stocks Quotes
routes.get('/stocks/:stock_name/quote', api.getQuoteStock);


// Query params - from & to ;
routes.get('/stocks/:stock_name/history', api.getTimeSeriesStock);

// Compare Stocks
routes.post('/stocks/:stock_name/compare', api.getCompareStocks);

//Gain Projection
routes.get('/stocks/:stock_name/gains', api.getGainProjection);


module.exports = routes;