import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false); // State to manage Login modal visibility
    const [showSignup, setShowSignup] = useState(false); // State to manage Signup modal visibility

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const openLogin = () => {
        setShowLogin(true);
    };

    const closeLogin = () => {
        setShowLogin(false);
    };

    const openSignup = () => {
        setShowSignup(true);
    };

    const closeSignup = () => {
        setShowSignup(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-gradient-to-br from-gray-800 to-gray-900 py-4 px-8 z-50 shadow-md">
            <div className="flex justify-between items-center">
                <div className="menu-icon flex flex-col cursor-pointer text-yellow-500" onClick={toggleMenu}>
                    <div className="bar w-6 h-1 bg-yellow-500 rounded mb-2"></div>
                    <div className="bar w-6 h-1 bg-yellow-500 rounded mb-2"></div>
                    <div className="bar w-6 h-1 bg-yellow-500 rounded"></div>
                </div>
                <div className="logo">
                    <h1 className="text-2xl font-cursive text-yellow-300">BitSpin365</h1>
                </div>
                <div className="nav-buttons flex gap-4">
                    <button className="nav-button py-2 px-4 bg-red-600 text-white rounded hover:bg-red-500 transition duration-300" onClick={openLogin}>
                        Login
                    </button>
                    <button className="nav-button py-2 px-4 bg-red-600 text-white rounded hover:bg-red-500 transition duration-300" onClick={openSignup}>
                        Signup
                    </button>
                </div>
            </div>
            {menuOpen && (
                <nav className="dropdown-menu absolute top-full left-0 w-48 bg-gray-800 border border-gray-700 shadow-lg z-10 transition duration-500">
                    <ul>
                        <li className="py-2 px-4 border-b border-gray-700">
                            <a href="/" className="text-yellow-500 hover:text-white transition duration-200">
                                Home
                            </a>
                        </li>
                        <li className="py-2 px-4 border-b border-gray-700">
                            <a href="/games" className="text-yellow-500 hover:text-white transition duration-200">
                                Games
                            </a>
                        </li>
                        <li className="py-2 px-4 border-b border-gray-700">
                            <a href="/promotions" className="text-yellow-500 hover:text-white transition duration-200">
                                Promotions
                            </a>
                        </li>
                        <li className="py-2 px-4 border-b border-gray-700">
                            <a href="/vip" className="text-yellow-500 hover:text-white transition duration-200">
                                VIP
                            </a>
                        </li>
                        <li className="py-2 px-4">
                            <a href="/more" className="text-yellow-500 hover:text-white transition duration-200">
                                More
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
            {showLogin && (
                <Login onClose={closeLogin} />
            )}
            {showSignup && (
                <Signup onClose={closeSignup} />
            )}
        </header>
    );
};

export default Header;
