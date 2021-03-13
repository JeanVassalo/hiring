const axios = require('../client/client.js');

require('dotenv').config();

module.exports = {

    async test(req,res){
        res.send('Hello World!')
    },

    //Returns the most recent quote for the stock [Atual Price]
    async getQuoteStock(req, res) {
        
    },


    //Get time Series
    async getTimeSeriesStock(req, res) {
        
    },


    //Compare Stocks
    async getCompareStocks(req, res) {
        

    },


    //Gains
    async getGainProjection(req, res) {

        
    }
}