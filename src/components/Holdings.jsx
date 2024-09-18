import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';

const Holdings = ({ user }) => {
  const [portfolio, setPortfolio] = useState([]);
  const [historicalData, setHistoricalData] = useState({
    labels: [],
    datasets: [{
      label: 'Portfolio Value',
      data: [],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    }],
  });
  const [cryptoPrices, setCryptoPrices] = useState({});

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
          params: {
            ids: 'bitcoin,ethereum,ripple',
            vs_currencies: 'inr',
          }
        });

        setCryptoPrices(response.data);
        generateRandomPortfolio(response.data);
        const historicalResponse = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart', {
          params: {
            vs_currency: 'inr', 
            days: '7',           
          }
        });

        const historical = historicalResponse.data;
        const labels = historical.prices.slice(0, 7).map(price => new Date(price[0]).toLocaleDateString());
        const values = historical.prices.slice(0, 7).map(price => price[1]);
        

        setHistoricalData({
          labels: labels,
          datasets: [{
            label: 'Portfolio Value',
            data: values,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
          }],
        });

      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    const generateRandomPortfolio = (prices) => {
      const cryptoList = Object.keys(prices);
      const randomPortfolio = cryptoList.map((crypto, index) => ({
        id: index + 1,
        name: crypto.toUpperCase(), 
        amount: Math.floor(Math.random() * 10) + 1,
        currentPrice: prices[crypto].inr, 
        currency: 'INR', 
      }));

      setPortfolio(randomPortfolio);
    };

    fetchCryptoPrices();
  }, []);

  const totalValue = portfolio.reduce((acc, holding) => acc + (holding.amount * holding.currentPrice), 0);

  return (
    <div className="p-6 bg-red-100 min-h-screen">
      <div className="bg-white p-4 rounded shadow-md mb-6">
        <h2 className="text-xl font-semibold">User Details</h2>
        <p className="text-lg font-bold">Name: {user.name}</p>
        <p className="text-lg">Amount in Wallet: ₹{(Math.random() * 100000).toFixed(2)}</p>
      </div>
      <h1 className="text-2xl font-bold mb-4">Your Holdings</h1>
      <div className="bg-white p-4 rounded shadow-md mb-6">
        <h2 className="text-xl font-semibold">Total Portfolio Value</h2>
        <p className="text-2xl font-bold">₹{totalValue.toFixed(2)}</p>
      </div>
      <div className="bg-white p-4 rounded shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Individual Holdings</h2>
        <ul>
          {portfolio.map((holding) => (
            <li key={holding.id} className="flex justify-between items-center py-2 border-b border-black-300">
              <div>
                <div className="font-semibold">{holding.name}</div>
                <div className="text-sm text-gray-600">Amount: {holding.amount} {holding.currency}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Current Price: ₹{holding.currentPrice.toFixed(2)}</div>
                <div className="font-semibold">Total Value: ₹{(holding.amount * holding.currentPrice).toFixed(2)}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Portfolio Performance - Last 7 Days</h2>
        <Line data={historicalData} />
      </div>
    </div>
  );
};

export default Holdings;

