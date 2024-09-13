import React from 'react';
import BitSpin365_logo from '../assets/BitSpin365_logo.png';
import Signup from "../Signup.jsx";

const ResponsiveBox = ({ openSignup, amount, handleAmountChange, currency, handleCurrencyChange }) => {
    return (
        <div className="absolute inset-0 flex  sm:w-[30%] md:w-[100%] items-center justify-center">
            <div className="bg-gradient-to-br from-yellow-300 via-pink-200 to-white text-gray-800 rounded-xl shadow-2xl flex flex-col md:flex-row w-11/12 md:w-3/4 lg:w-1/2 h-auto md:h-100 p-4 md:p-6">
                {/* Form Section */}
                <div className="flex-1 flex-col items-center justify-center space-y-4">
                    <h2 className="text-lg md:text-2xl font-bold mb-4 text-center">Welcome to the Ultimate Gaming Experience!</h2>
                    <p className="text-md mb-4 text-center">Enter the amount and select your currency to start playing!</p>
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </div>
                    <button
                        className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-400 transition duration-300 w-full"
                        onClick={openSignup}
                    >
                        Start Playing
                    </button>
                </div>
                {/* Image Section */}
                <div className="flex-1 mt-4 md:mt-0">
                    <img
                        src={BitSpin365_logo}
                        alt="Gaming Image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default ResponsiveBox;
