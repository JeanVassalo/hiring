import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

import Stocks from './components/Stock'
import Button from '@material-ui/core/Button';

import './App.css';

function App() {

  const [data, setData] = useState();
  const [stock_name, setStock_name] = useState("");

  function click() {
    setStock_name(document.getElementById("stockField").value);
    console.log(stock_name);
    document.getElementById("stockField").value = '';
  }

  // Use Effects --

  useEffect(() => {
    try {
      if (stock_name !== "") {

        axios.get(`stocks/${stock_name}/quote`).then(response => {
          if (response.status === 200) {
            let info = response.data
            console.log('quote:', info)
            setData(info);

          } else if (response.status === 400) {
            console.log("No Stock name!")
          }
        });

      }
    } catch (err) {
      console.error("Quote:", err)
    }

    setStock_name("")
  }, [stock_name]);


  return (
    <div id='App'>

      <header > 
        <div class="nav">
          <div class="logo">
            <h1> XL - Solutions  </h1>
          </div>
          <div class="menu">
            <nav>
              <ul>
                <li><a class="active" href="">Quote</a></li>
                <li><a href="">History</a></li>
                <li><a href="">Wallet</a></li>
                <li><a href="">Comparations</a></li>
                <li><a href="">Projections</a></li>
              </ul>
            </nav>
          </div>
        </div>
        
      </header>

      <div id='container'>
        <div class="searchArea">
        <h2>Type here the quote symbol:</h2>
        <TextField id="stockField" label="IBM, AAPL34.SA, TSLA34.SA..."  variant="outlined" />
        <Button className="bt-search" variant="contained" color="primary" onClick={click}> Search </Button>
        <div className="testStocks">

          
        </div>
        </div>
      </div>
        {/* Stock Data */}
      
        <div id='stockDiv'>
          <Stocks
            nome={data?.name}
            price={data?.lastPrice | 0}
            date={data?.pricedAT}
          />         
        </div>
      
    </div>
  );
}

export default App;