import React from 'react'
import CryptoCard from './CryptoCard'
import Blockchain from './BlockChain'
import Bitcoin from './Bitcoin'
import Etherum from './Etherum'
 
function Learn() {
  return (
    <div className='relative py-12'>
      <div className="absolute inset-x-0 bottom-0 w-full h-auto -z-10">
      </div>

      <h1 className='text-6xl text-blue-700 font-extrabold m-6  text-center drop-shadow-lg'>
        Let's Learn
      </h1>

      <div className='flex flex-row justify-around items-center space-x-6 mt-12 '>
        <CryptoCard/>
        <Blockchain />
        <Bitcoin/>
        <Etherum/>
      </div>
    </div>
  )
}

export default Learn
