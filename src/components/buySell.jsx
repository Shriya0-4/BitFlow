import React from 'react'
import image2 from '../assets/image2.jpg'

function BuySell() {
  return (
    <div className='w-full bg-gradient-to-r from-purple-200 to-purple-500 flex flex-col md:flex-row items-center p-8'>
      <div className='flex-1 text-center md:text-left'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-gray-800 mb-4'>
          Buy & Sell Crypto in Minutes
        </h1>
        <h2 className='text-xl md:text-2xl text-gray-600 mb-6'>
          Trade Bitcoin, Ethereum, and other top altcoins on this platform
        </h2>
        <a 
          href="/buy" 
          className='bg-purple-600 text-white p-4 rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300'>
            Get Started
        </a>
      </div>
      <img 
        src={image2} 
        alt="phone" 
        className='w-full md:w-1/2 h-auto object-cover rounded-lg mt-6 md:mt-0'
      />
    </div>
  )
}

export default BuySell

