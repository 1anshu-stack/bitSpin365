import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img from '../assets/mainpagepic.png';
import GameCarousel from './GameCarousel';
import JackpotSection from "./JackpotSection.jsx";
import FeedbackCard from './FeedbackCard';

const LandingPage = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Sample feedback data
    const feedbacks = [
        { name: 'Alice', rating: 5, feedback: 'Amazing experience, would highly recommend!' },
        { name: 'Bob', rating: 4, feedback: 'Great games and user-friendly interface.' },
        { name: 'Charlie', rating: 5, feedback: 'The best platform for online gaming!' },
        // Add more feedbacks as needed
    ];

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            {/* Background gradient and container */}
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">
                <section className="relative w-full">
                    {/* Image Container */}
                    <div className="relative w-full h-96 md:h-[700px] lg:h-[700px] overflow-hidden">
                        <motion.img
                            src={img}
                            alt="Hero Background"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center py-20 space-y-6">
                        <h1 className="text-4xl font-bold">Welcome to BitSpin365</h1>
                        <p className="text-xl">Your ultimate destination for online gaming</p>
                    </div>
                </section>

                {/* Game Carousel Section */}
                <section className="py-16 px-4">
                    <h3 className="text-3xl font-bold mb-10">Featured Games</h3>
                    <GameCarousel/>
                </section>

                <section className="py-16 px-4">
                    <h3 className="text-3xl font-bold mb-10">Table Games</h3>
                    <GameCarousel/>
                </section>

                <section className="py-16 px-4">
                    <h3 className="text-3xl font-bold mb-10">Roulette Games</h3>
                    <GameCarousel/>
                </section>

                {/* Jackpot Section */}
                <JackpotSection/>

                <section className="py-16 px-4">
                    <h3 className="text-3xl font-bold mb-10">Live Casino</h3>
                    <GameCarousel/>
                </section>

                {/* Feedback Section */}
                <section className="py-16 px-4">
                    <h3 className="text-3xl font-bold mb-10">User Feedback</h3>
                    <motion.div
                        className="flex space-x-6 overflow-hidden py-4"
                        whileTap={{ cursor: "grabbing" }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                    >
                        {feedbacks.map((feedback, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <FeedbackCard {...feedback} />
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                <section className="bg-gradient-to-r from-pink-600 via-indigo-900 to-pink-600 py-16 px-6 text-center">
                    <div className="container mx-auto">
                        <h3 className="text-4xl font-bold text-yellow-400">
                            Let's Get Started
                        </h3>
                        <p className="text-lg text-gray-300 mt-4">
                            Play the spins for a chance to win one of the BitStarz Jackpots!
                        </p>
                        {/*<div className="nav-buttons flex gap-4">*/}
                        {/*    <button*/}
                        {/*        className="nav-button py-2 px-4 bg-red-600 text-white rounded hover:bg-red-500 transition duration-300"*/}
                        {/*        onClick={openSignup}>*/}
                        {/*        Signup*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 px-4 text-center">
                    <h3 className="text-3xl font-bold mb-10">Why Choose Us?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700">
                            <h4 className="text-xl font-bold mb-2">Secure Payments</h4>
                            <p>We guarantee fast, secure transactions, giving you peace of mind with every bet.</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700">
                            <h4 className="text-xl font-bold mb-2">Exciting Games</h4>
                            <p>Choose from a wide variety of games, from poker to slots, and much more!</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700">
                            <h4 className="text-xl font-bold mb-2">24/7 Support</h4>
                            <p>We're here for you anytime, any day, to ensure your gaming experience is smooth.</p>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 py-8 text-center text-gray-400">
                    <p>&copy; 2024 BitSpin365. All rights reserved.</p>
                    <a href="/terms" className="underline">Terms & Conditions</a>
                </footer>
            </div>
        </div>
    );
};

export default LandingPage;
