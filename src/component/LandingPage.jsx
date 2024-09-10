import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img from '../assets/mainpagepic.png';
import GameCarousel from './GameCarousel';
import JackpotSection from './JackpotSection.jsx';
import FeedbackCard from './FeedbackCard';
import Signup from './Signup';
import BitSpin365_logo from '../assets/BitSpin365_logo.png'
const LandingPage = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const [animationPaused, setAnimationPaused] = useState(false);
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('USD');



    const openSignup = () => setShowSignup(true);
    const closeSignup = () => setShowSignup(false);
    const handleCardClick = (index) => {
        setActiveCard(index);
        setAnimationPaused(true);
    };

    const handleClickOutside = (e) => {
        if (!e.target.closest('.feedback-card')) {
            setActiveCard(null);
            setAnimationPaused(false);
        }
    };

    const handleAmountChange = (e) => setAmount(e.target.value);
    const handleCurrencyChange = (e) => setCurrency(e.target.value);

    const feedbacks = [
        { name: 'Alice', rating: 5, feedback: 'Amazing experience, would highly recommend!' },
        { name: 'Bob', rating: 4, feedback: 'The gameplay was immersive and engaging from start to finish.' },
        { name: 'Charlie', rating: 3, feedback: 'The best platform for online gaming!' },
        { name: 'Joe', rating: 5, feedback: 'The multiplayer mode is a blast and offers endless replayability.' },
        { name: 'Gamer', rating: 4, feedback: 'The best platform for online gaming!' },
        { name: 'Ronnie', rating: 5, feedback: 'The best platform for online gaming!' },
        { name: 'John', rating: 4, feedback: 'Everything about this game is top-tier.' },
    ];

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">
                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center text-center py-10 space-y-6 relative">
                    <div className="relative w-full h-full h-100 md:h-150 lg:h-170">
                        <motion.img
                            src={img}
                            alt="image"
                            className="w-full h-full object-cover"
                        />
                        {/* Rectangular Box */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-gradient-to-br from-yellow-300 via-pink-200 to-white text-gray-800 rounded-xl shadow-2xl flex w-4/5 md:w-3/4 lg:w-1/2 h-100">
                                {/* Form Section */}
                                <div className="flex-1 p-6 flex flex-col items-center justify-center space-y-4">
                                    <h2 className="text-3xl font-bold mb-4">Welcome to the Ultimate Gaming Experience!</h2>
                                    <p className="text-lg mb-4">Enter the amount and select your currency to start playing!</p>
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
                                            {/* Add more currencies as needed */}
                                        </select>
                                    </div>
                                    <button
                                        className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-400 transition duration-300"
                                        onClick={openSignup}
                                    >
                                        Start Playing
                                    </button>
                                </div>
                                {/* Image Section */}
                                <div className="flex-1 bg- rounded-r-xl">
                                    <img
                                        src={BitSpin365_logo}
                                        alt="Gaming Image"
                                        className="w-full h-full object-cover rounded-r-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Other Sections */}
                <section className="py-20 px-5">
                    <h3 className="text-3xl font-bold mb-10">Featured Games</h3>
                    <GameCarousel />
                </section>

                <section className="py-3 px-4">
                    <h3 className="text-3xl font-bold mb-10">Table Games</h3>
                    <GameCarousel />
                </section>

                <section className="py-16 px-4">
                    <h3 className="text-3xl font-bold mb-10">Roulette Games</h3>
                    <GameCarousel />
                </section>

                <JackpotSection />

                <section className="py-16 px-4">
                    <h3 className="text-3xl font-bold mb-10">Live Casino</h3>
                    <GameCarousel />
                </section>

                <section className="py-16 px-4" onClick={handleClickOutside}>
                    <h3 className="text-3xl font-bold mb-10">User Feedback</h3>
                    <div className="relative h-64 overflow-hidden">
                        {!animationPaused && (
                            <motion.div
                                className="flex space-x-6 py-4 absolute top-0"
                                animate={{ x: ['0%', '-100%'] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 20,
                                    ease: 'linear'
                                }}
                            >
                                {feedbacks.map((feedback, index) => (
                                    <motion.div
                                        key={index}
                                        className="feedback-card flex-shrink-0 w-80"
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20
                                        }}
                                        whileHover={{ scale: 1.08, y: -8 }}
                                    >
                                        <FeedbackCard
                                            {...feedback}
                                            isActive={activeCard === index}
                                            onClick={() => handleCardClick(index)}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {activeCard !== null && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <FeedbackCard
                                    {...feedbacks[activeCard]}
                                    isActive={true}
                                    onClick={() => handleCardClick(null)}
                                />
                            </div>
                        )}
                    </div>
                </section>

                <section className="bg-gradient-to-r from-pink-600 via-indigo-900 to-pink-600 py-16 px-6 text-center">
                    <div className="container mx-auto">
                        <h3 className="text-4xl font-bold text-yellow-400">
                            Let's Get Started
                        </h3>
                        <p className="text-lg text-gray-300 mt-4">
                            Play the spins for a chance to win one of the BitSpin365 Jackpots!
                        </p>
                        <button
                            className="nav-button mt-4 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-600 transition duration-300"
                            onClick={openSignup}
                        >
                            Signup now
                        </button>
                    </div>
                </section>

                <section className="py-16 px-4 text-center">
                    <h3 className="text-3xl font-bold mb-10">Why Choose Us?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700">
                            <h4 className="text-xl font-bold mb-2">Secure Payments</h4>
                            <p>We guarantee fast, secure transactions, giving you peace of mind with every bet.</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700">
                            <h4 className="text-xl font-bold mb-2">24/7 Support</h4>
                            <p>Our dedicated support team is available around the clock to assist you with any queries.</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700">
                            <h4 className="text-xl font-bold mb-2">Exciting Rewards</h4>
                            <p>Enjoy fantastic bonuses and rewards that enhance your gaming experience.</p>
                        </div>
                    </div>
                </section>

                <footer className="bg-gray-800 py-4 text-center text-white">
                    <p>&copy; 2024 BitSpin365</p>
                    <p>All rights reserved.</p>
                </footer>
            </div>

            {showSignup && <Signup closeSignup={closeSignup} />}
        </div>
    );
};

export default LandingPage;
