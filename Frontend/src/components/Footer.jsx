import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 mt-12 border-t border-gray-200">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-black">TechNest</h2>
          <p className="text-sm text-gray-600">
            Quality products for modern life. Bringing you the best at your fingertips.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Support</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/shipping">Shipping</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Follow Us</h3>
          <div className="flex space-x-4 text-gray-600">
            <a href="#" className="hover:text-blue-600"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="hover:text-blue-400"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="hover:text-pink-500"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="hover:text-blue-700"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-100">
        &copy; {new Date().getFullYear()} TechNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
