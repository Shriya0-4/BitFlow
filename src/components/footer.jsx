import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons

function Footer() {
  return (
    <footer className="bg-gray-400 text-white py-8 relative">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Stay Connected</h2>
        <p className="mb-4">Follow us on social media for the latest updates.</p>
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="text-white hover:text-blue-600">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-white hover:text-blue-600">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-blue-600">
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-900">© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
