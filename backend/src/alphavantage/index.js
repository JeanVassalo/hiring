const axios = require('../client/client.js');
const apiKey = process.env.API_KEY

require('dotenv').config();

module.exports = {

    async test(req,res){
        res.send('Hello World!')
    },

    //Returns the most recent quote for the stock [Atual Price]
    async getQuoteStock(req, res) {
        try {
            //stock_name is symbol in global quote csv file
            const stock_name = req.params.stock_name;
            const data = (await axios.get(`query?function=GLOBAL_QUOTE&symbol=${stock_name}&apikey=${apiKey}`)).data;
            const response = {
                name: stock_name,
                lastPrice: (parseFloat(data['Global Quote']['05. price']).toFixed(2)),
                pricedAT: data['Global Quote']['07. latest trading day']
            }
            return res.status(200)
                .json(response);
        } catch (err) {
            res.status(400)
        }
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