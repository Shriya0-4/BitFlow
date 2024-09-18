import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600">
      <div className="max-w-7xl mx-auto my-0 px-4 sm:px-6">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-white font-bold text-2xl">BITFLOW</Link>
          <div className="flex space-x-8">
            <Link to="/analyze" className="text-white hover:text-gray-300">Analyze</Link>
            <Link to="/buy" className="text-white hover:text-gray-300">Buy Crypto</Link>
          <Link to="/holdings" className="text-white hover:text-gray-300">Holdings</Link>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
