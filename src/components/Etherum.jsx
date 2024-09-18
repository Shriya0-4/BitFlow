import React from 'react'

function Etherum() {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md w-full md:w-1/4 h-64 flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Etherum</h2>
      <p className="mb-4 text-sm overflow-hidden text-ellipsis">Ethereum is a decentralized blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. Among cryptocurrencies, ether is second only to bitcoin in market capitalization. It is open-source software.</p>
      <a href="https://en.wikipedia.org/wiki/Ethereum" className="text-blue-400 hover:underline mt-auto">Read more</a>
    </div>
  )
}

export default Etherum
