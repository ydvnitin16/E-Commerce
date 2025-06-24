import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faUser,
    faBagShopping,
    faBars,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/products' },
        { name: 'My Orders', path: '/order' },
        { name: 'Contact Us', path: '/contact' }
    ];

    return (
        <header className="fixed top-3 sm:top-5 left-0 w-full z-50 px-4">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center bg-white/20 backdrop-blur-md shadow-lg rounded-full border border-white/30">
                {/* Logo */}
                <div
                    className="flex items-center cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    <img className="h-15" src={logo} alt="Website Logo" />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6 items-center">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-gray-200 font-bold text-lg hover:text-gray-400 ${
                                    isActive ? 'font-semibold text-black' : ''
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Icons */}
                <div className="flex items-center space-x-4">
                    <button className="text-gray-200 hover:text-gray-400 cursor-pointer">
                        <FontAwesomeIcon icon={faSearch} size="lg" />
                    </button>
                    <button className="text-gray-200 hover:text-gray-400 cursor-pointer">
                        <FontAwesomeIcon icon={faUser} size="lg" />
                    </button>
                    <button className="relative text-gray-200 hover:text-gray-400 cursor-pointer">
                        <FontAwesomeIcon icon={faBagShopping} size="lg" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                            2
                        </span>
                    </button>

                    {/* Hamburger */}
                    <button
                        className="md:hidden text-gray-200 hover:text-gray-400 cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <FontAwesomeIcon icon={faBars} size="xl" />
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <nav className="md:hidden px-4 pb-4 ">
                    <div className="flex flex-col space-y-2 bg-white/20 backdrop-blur-md shadow-lg rounded-2xl p-3">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `block text-gray-200 px-2 py-3 rounded hover:bg-gray-400 hover:text-black  ${
                                        isActive
                                            ? 'font-semibold text-black'
                                            : ''
                                    }`
                                }
                                onClick={() => setIsOpen(false)} // close menu after click
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
