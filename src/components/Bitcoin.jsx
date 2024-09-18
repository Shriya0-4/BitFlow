import React from 'react'

function Bitcoin() {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md w-full md:w-1/4 h-64 flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Bitcoin</h2>
      <p className="mb-4 text-sm overflow-hidden text-ellipsis">Bitcoin (BTC) is a cryptocurrency designed to act as money and a form of payment outside the control of any one person, group, or entity. This removes the need for trusted third-party involvement in financial transactions.</p>
      <a href="https://en.wikipedia.org/wiki/Bitcoin" className="text-blue-400 hover:underline mt-auto">Read more</a>
    </div>
  )
}

export default Bitcoin
