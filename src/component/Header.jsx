import React, { useState, useEffect } from 'react';
import { FaHome, FaGift, FaPiggyBank, FaDollarSign, FaQuestionCircle, FaStar } from 'react-icons/fa';
import Login from './Login.jsx'; // Import Login component
import Signup from './Signup.jsx'; // Import Signup component

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false); // For login component
    const [showSignup, setShowSignup] = useState(false); // For signup component
    const [promotionsOpen, setPromotionsOpen] = useState(false);
    const [supportOpen, setSupportOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
    };

    const togglePromotions = () => {
        setPromotionsOpen(!promotionsOpen);
        setSupportOpen(false); // Close support dropdown if promotions is opened
    };

    const toggleSupport = () => {
        setSupportOpen(!supportOpen);
        setPromotionsOpen(false); // Close promotions dropdown if support is opened
    };

    const openLogin = () => {
        setShowLogin(true);
        setShowSignup(false); // Close signup if it was open
    };

    const openSignup = () => {
        setShowSignup(true);
        setShowLogin(false); // Close login if it was open
    };

    const closeForms = () => {
        setShowLogin(false);
        setShowSignup(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-menu') && !event.target.closest('.menu-icon')) {
                setMenuOpen(false);
                document.body.style.overflow = 'auto';
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full bg-gradient-to-br from-blue-800 to-purple-900 py-4 px-8 z-50 shadow-lg">
            <div className="flex justify-between items-center">
                <div className="menu-icon flex flex-col cursor-pointer text-yellow-300" onClick={toggleMenu}>
                    <div className="bar w-8 h-1 bg-yellow-300 rounded mb-1 transition-transform duration-300 ease-in-out" style={{ transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'rotate(0)' }}></div>
                    <div className="bar w-8 h-1 bg-yellow-300 rounded mb-1" style={{ opacity: menuOpen ? '0' : '1' }}></div>
                    <div className="bar w-8 h-1 bg-yellow-300 rounded" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'rotate(0)' }}></div>
                </div>
                <div className="logo">
                    <h1 className="text-3xl font-bold text-yellow-300">BitSpin365</h1>
                </div>
                <div className="nav-buttons flex gap-4">
                    <button className="nav-button py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-600 transition duration-300" onClick={openLogin}>
                        Login
                    </button>
                    <button className="nav-button py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-600 transition duration-300" onClick={openSignup}>
                        Signup
                    </button>
                </div>
            </div>

            {menuOpen && (
                <nav className="dropdown-menu fixed top-0 left-0 w-full sm:w-3/4 md:w-1/3 h-full bg-gray-900 bg-opacity-95 z-50 shadow-lg flex flex-col transition-all duration-300">
                    <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
                        <h1 className="text-2xl font-bold text-yellow-300">BitSpin365</h1>
                        <button onClick={toggleMenu} className="text-white text-3xl">&times;</button>
                    </div>
                    <ul className="flex flex-col mt-4 px-4 space-y-2">
                        <li className="py-3 px-4 rounded-lg flex items-center bg-gray-800 hover:bg-gray-700 transition duration-300">
                            <FaHome className="text-yellow-300 mr-3" />
                            <a href="/" className="text-yellow-300">Home</a>
                        </li>

                        <li className="relative py-3 px-4 rounded-lg flex flex-col bg-gray-800 hover:bg-gray-700 transition duration-300">
                            <div className="flex justify-start items-center w-full cursor-pointer"
                                 onClick={togglePromotions}>
                                <FaGift className="text-yellow-300 mr-3"/>
                                <span className="text-yellow-300">Promotions</span>
                                <span
                                    className={`transition-transform duration-300 text-yellow-300 ml-auto ${promotionsOpen ? 'rotate-180' : ''}`}>▼</span>
                            </div>
                            {promotionsOpen && (
                                <ul className="mt-2 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                                    <li className="py-2 px-4 rounded-lg flex items-center hover:bg-gray-700 transition duration-200">
                                        <FaDollarSign className="text-gray-400 mr-3" />
                                        <a href="/jackpotz-mania" className="text-gray-400">Jackpotz Mania</a>
                                    </li>
                                    <li className="py-2 px-4 rounded-lg flex items-center hover:bg-gray-700 transition duration-200">
                                        <FaPiggyBank className="text-gray-400 mr-3" />
                                        <a href="/welcome-package" className="text-gray-400">Welcome Package</a>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="py-3 px-4 rounded-lg flex items-center bg-gray-800 hover:bg-gray-700 transition duration-300">
                            <FaPiggyBank className="text-yellow-300 mr-3" />
                            <a href="/vip" className="text-yellow-300">Banking</a>
                        </li>

                        <li className="py-3 px-4 rounded-lg flex items-center bg-gray-800 hover:bg-gray-700 transition duration-300">
                            <FaStar className="text-yellow-300 mr-3" />
                            <a href="/vip" className="text-yellow-300">VIP</a>
                        </li>

                        <li className="relative py-3 px-4 rounded-lg flex flex-col bg-gray-800 hover:bg-gray-700 transition duration-300">
                            <div className="flex justify-start items-center w-full cursor-pointer"
                                 onClick={toggleSupport}>
                                <FaQuestionCircle className="text-yellow-300 mr-3"/>
                                <span className="text-yellow-300">Support</span>
                                <span
                                    className={`transition-transform duration-300 text-yellow-300 ml-auto ${promotionsOpen ? 'rotate-180' : ''}`}>▼</span>
                            </div>
                            {supportOpen && (
                                <ul className="mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                                    <li className="py-2 px-4 rounded-lg flex items-center hover:bg-gray-700 transition duration-200">
                                        <FaQuestionCircle className="text-gray-400 mr-3" />
                                        <a href="/support-contact" className="text-gray-400">Contact Us</a>
                                    </li>
                                    <li className="py-2 px-4 rounded-lg flex items-center hover:bg-gray-700 transition duration-200">
                                        <FaQuestionCircle className="text-gray-400 mr-3" />
                                        <a href="/support-faq" className="text-gray-400">FAQ</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
            )}

            {showLogin && <Login onClose={closeForms} />}
            {showSignup && <Signup onClose={closeForms} />}
        </header>
    );
};

export default Header;
