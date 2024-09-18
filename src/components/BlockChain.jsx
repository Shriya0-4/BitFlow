import React from 'react'

function Blockchain() {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md w-full md:w-1/4 h-64 flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <h2 className="text-2xl font-bold mb-4">BlockChain</h2>
      <p className="mb-4 text-sm overflow-hidden text-ellipsis">A blockchain is a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data.</p>
      <a href="https://en.wikipedia.org/wiki/Blockchain" className="text-blue-400 hover:underline mt-auto">Read more</a>
    </div>
  )
}

export default Blockchain
