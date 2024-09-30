import { useState } from 'react';
import BitSpin365_logo from '../assets/BitSpin365_logo.png';
import Login from "../pages/Login.jsx"; // Adjust path as needed

const ResponsiveBox = ({ openSignup, amount, handleAmountChange, currency, handleCurrencyChange }) => {
    const [showLogin, setShowLogin] = useState(false);

    const handleOpenAuthForm = () => {
        setShowLogin(true);
    };

    const handleCloseAuthForm = () => {
        setShowLogin(false);
    };

    return (
        <div className="absolute inset-0 flex items-center justify-center bg-cover bg-center">
            <div className="bg-gradient-to-br from-yellow-300 via-pink-200 to-white text-gray-800 rounded-xl shadow-2xl flex flex-col md:flex-row max-w-2xl h-auto md:h-100 p-4 md:p-6 m-8 md:m-10 space-y-4 md:space-y-2 md:space-x-0">
                {/* Image Section */}
                <div className="flex-1 flex items-center justify-center">
                    <img
                        src={BitSpin365_logo}
                        alt="BitSpin365 Logo"
                        className="w-30 h-30"
                    />
                </div>
                {/* Form Section */}
                <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                    <h2 className="text-lg md:text-2xl font-bold text-center md:text-left mb-2 md:mb-4">
                        Welcome to the Ultimate Gaming Experience!
                    </h2>
                    <p className="text-center md:text-left">Enter the amount and select your currency to start playing!</p>
                    <div className="w-full space-y-4">
                        <input
                            type="number"
                            value={amount}
                            onChange={handleAmountChange}
                            placeholder="Enter amount"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                        <select
                            value={currency}
                            onChange={handleCurrencyChange}
                            className="w-full py-2 px-4 border border-gray-300 rounded-lg"
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </div>
                    <button
                        className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-400 transition duration-300 w-50"
                        onClick={handleOpenAuthForm}
                    >
                        Start Playing
                    </button>
                </div>
            </div>

            {/* Render AuthForm Component */}
            {showLogin && (
                <Login onClose={handleCloseAuthForm} />
            )}
        </div>
    );
};

export default ResponsiveBox;
