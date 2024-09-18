import React from 'react'

function CryptoCard() {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md w-full md:w-1/4 h-64 flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <h2 className="text-2xl font-bold mb-4">CryptoCurrency</h2>
      <p className="mb-4 text-sm overflow-hidden text-ellipsis">A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it.</p>
      <a href="https://en.wikipedia.org/wiki/Cryptocurrency" className="text-blue-400 hover:underline mt-auto">Read more</a>
    </div>
  )
}

export default CryptoCard
