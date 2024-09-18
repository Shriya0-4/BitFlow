import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopGainers = () => {
  const [gainers, setGainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGainers = async () => {
      try {
        const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets', 
        {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false
          }
        }
        );
        const sortedByGain = response.data.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
        setGainers(sortedByGain.slice(0, 5));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGainers();
  }, []);

  const backgroundColors = ['bg-red-100', 'bg-green-100', 'bg-yellow-100', 'bg-blue-100', 'bg-purple-100'];

  return (
    <div className="m-16">
      <h2 className="text-4xl font-bold mb-4 text-center">Top Gaining Cryptos</h2>
      <ul className="flex flex-col flex-wrap justify-center items-center m-4 gap-6">
        {gainers.map((crypto, index) => (
          <li 
            key={crypto.id} 
            className={`flex items-center p-6 rounded-lg w-1/2 shadow-lg ${backgroundColors[index % backgroundColors.length]}`}
          >
            <img 
              src={crypto.image} 
              alt={crypto.name} 
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-bold">{crypto.name} ({crypto.symbol.toUpperCase()})</h3>
              <p className="text-sm text-gray-700">Price: ${crypto.current_price}</p>
              <p className={`text-sm ${crypto.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}`}>
                24h Change: {crypto.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopGainers;
