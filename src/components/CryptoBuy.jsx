import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoBuy = () => {
  const [cryptoOptions, setCryptoOptions] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [amount, setAmount] = useState('');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets', 
          {
            params: {
              vs_currency: 'usd',
              ids: 'bitcoin,ethereum,ripple,dogecoin', 
              order: 'market_cap_desc',
              per_page: 4,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCryptoOptions(response.data);
        setSelectedCrypto(response.data[0]); 
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch crypto data');
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    if (value && !isNaN(value) && selectedCrypto) {
      setTotal(parseFloat(value) * selectedCrypto.current_price);
    } else {
      setTotal(0);
    }
  };

  const handleCryptoChange = (e) => {
    const selected = cryptoOptions.find((crypto) => crypto.id === e.target.value);
    setSelectedCrypto(selected);
    if (amount && !isNaN(amount)) {
      setTotal(parseFloat(amount) * selected.current_price);
    }
  };

  if (loading) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-100 p-10 max-w-xl m-20 mx-auto rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Buy Cryptocurrency</h2>

      <div className="mb-4">
        <label htmlFor="crypto" className="block text-lg font-semibold mb-2">
          Select Cryptocurrency:
        </label>
        <select
          id="crypto"
          value={selectedCrypto ? selectedCrypto.id : ''}
          onChange={handleCryptoChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
        >
          {cryptoOptions.map((crypto) => (
            <option key={crypto.id} value={crypto.id}>
              {crypto.name} ({crypto.symbol.toUpperCase()}) - ${crypto.current_price}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="amount" className="block text-lg font-semibold mb-2">
          Enter Amount (in {selectedCrypto ? selectedCrypto.symbol.toUpperCase() : ''}):
        </label>
        <input
          id="amount"
          type="text"
          value={amount}
          onChange={handleAmountChange}
          placeholder="0.00"
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-6">
        <p className="text-lg">
          <span className="font-semibold">Total Cost: </span>${total.toFixed(2)}
        </p>
      </div>

      <button
        className="w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300"
        onClick={() => alert(`You have bought ${amount} ${selectedCrypto.symbol.toUpperCase()} for $${total.toFixed(2)}`)}
      >
        Buy {selectedCrypto ? selectedCrypto.name : 'Crypto'}
      </button>
    </div>
  );
};

export default CryptoBuy;
