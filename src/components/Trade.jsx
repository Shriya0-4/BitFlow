import React from 'react';
import image3 from'../assets/image3.jpg'
const TradeAnywhere = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-5xl w-full flex">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-left">Trade anywhere</h1>
          <p className="text-gray-600 mb-8 text-left">
            Anytime, anywhere. Trade crypto on your terms.
          </p>
          <div className="space-y-4">
            <button className="flex items-center justify-start w-full p-4 bg-gray-100 rounded-lg border-b border-gray-300 hover:bg-gray-200 transition-colors">
              <span className="font-semibold text-lg">Download from App Store</span>
            </button>
            <button className="flex items-center justify-start w-full p-4 bg-gray-100 rounded-lg border-b border-gray-300 hover:bg-gray-200 transition-colors">
              <span className="font-semibold text-lg">Download from Google Play</span>
            </button>
            <button className="flex items-center justify-start w-full p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <span className="font-semibold text-lg">Download for Mac OS</span>
            </button>
          </div>
        </div>
        <img src={image3} alt="bitcoin" className='w-1/2 h-60 m-20 ' />

        </div>
    </div>
  );
};

export default TradeAnywhere;
