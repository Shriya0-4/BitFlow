import React from 'react';
import { Pie } from 'react-chartjs-2'; 
import { useState, useEffect } from 'react';

const Analyze= () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const cryptos = ['Bitcoin', 'Ethereum', 'Ripple'];
    const amounts = [0.5, 2, 10];

    setChartData({
      labels: cryptos,
      datasets: [
        {
          data: amounts,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    });
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">User Details</h2>
        <p className="text-lg font-semibold text-gray-700">Name: John Doe</p>
        <p className="text-lg text-gray-600">
          Amount in Wallet: ₹{(Math.random() * 100000).toFixed(2)}
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl flex flex-col items-center justify-center">
  <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
    Portfolio Distribution
  </h2>
  <div className="w-[50vw] h-[20vw] flex justify-center items-center">
    {chartData ? <Pie data={chartData} /> : <p>Loading chart...</p>}
  </div>
</div>

    </div>
  );
};

export default Analyze;
