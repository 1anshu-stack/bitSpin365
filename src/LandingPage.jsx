import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img from './assets/mainpagepic.png';
import GameCarousel from './component/GameCarousel.jsx';
import JackpotSection from './component/JackpotSection.jsx';
import FeedbackCard from './component/FeedbackCard.jsx';
import Signup from './Signup.jsx';
import ResponsiveBox from "./component/ResponsiveBox.jsx";

const LandingPage = () => {
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
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-10 space-y-6 relative">
                <div className="relative w-full h-full md:h-150 lg:h-170">
                    <motion.img
                        src={img}
                        alt="image"
                        className="w-full h-full object-cover"
                    />
                    {/* Centered ResponsiveBox */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <ResponsiveBox
                            openSignup={openSignup}
                            amount={amount}
                            handleAmountChange={handleAmountChange}
                            currency={currency}
                            handleCurrencyChange={handleCurrencyChange}
                        />
                    </div>
                </div>
            </section>

            {/* Other Sections */}
            <section className="py-10 md:py-20 px-4 md:px-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-8">Featured Games</h3>
                <GameCarousel />
            </section>

            <section className="py-10 md:py-20 px-4 md:px-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-8">Table Games</h3>
                <GameCarousel />
            </section>

            <section className="py-10 md:py-20 px-4 md:px-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-8">Roulette Games</h3>
                <GameCarousel />
            </section>

            <JackpotSection />

            <section className="py-10 md:py-20 px-4 md:px-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-8">Live Casino</h3>
                <GameCarousel />
            </section>

            <section className="py-10 md:py-20 px-4 md:px-6" onClick={handleClickOutside}>
                <h3 className="text-2xl md:text-3xl font-bold mb-8">User Feedback</h3>
                <div className="relative h-64 md:h-80 overflow-hidden">
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

            {/* Let's Get Started Section */}
            <section className="bg-gradient-to-r from-pink-600 via-indigo-900 to-pink-600 py-10 md:py-16 px-6 md:px-8 text-center">
                <div className="container mx-auto">
                    <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">
                        Let's Get Started
                    </h3>
                    <p className="text-md md:text-lg text-gray-300 mt-4">
                        Play the spins for a chance to win one of the BitSpin365 Jackpots!
                    </p>
                    <button
                        className="nav-button mt-4 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-600 transition duration-300 md:w-auto"
                        onClick={openSignup}
                    >
                        Signup now
                    </button>
                </div>
            </section>

            <section className="py-10 md:py-16 px-4 md:px-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-8">Why Choose Us?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-800 rounded-lg p-4 md:p-6 hover:bg-gray-700">
                        <h4 className=" text-lg md:text-xl font-bold mb-2">Secure Payments</h4>
                        <p>We guarantee fast, secure transactions, giving you peace of mind with every bet.</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 md:p-6 hover:bg-gray-700">
                        <h4 className="text-lg md:text-xl font-bold mb-2">24/7 Support</h4>
                        <p>Our dedicated support team is available around the clock to assist you with any queries.</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 md:p-6 hover:bg-gray-700">
                        <h4 className="text-lg md:text-xl font-bold mb-2">Exciting Rewards</h4>
                        <p>Enjoy fantastic bonuses and rewards that enhance your gaming experience.</p>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-800 py-4 md:py-6 text-center text-white">
                <p>&copy; 2024 BitSpin365</p>
                <p>All rights reserved.</p>
            </footer>

            {showSignup && <Signup closeSignup={closeSignup} />}
        </div>
    );
};

export default LandingPage;
