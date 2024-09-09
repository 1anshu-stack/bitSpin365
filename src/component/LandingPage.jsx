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
    const [popupAnimation, setPopupAnimation] = useState(true);



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
        <div className={${darkMode ? 'dark' : ''}}>
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">
                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center text-center py-10 space-y-6 relative">
                    <div className="relative w-full h-100 md:h-90 lg:h-150">
                        <motion.img
                            src={img}
                            alt="image"
                            className="w-full h-full object-cover"
                        />
                        {/* Rectangular Box */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-gradient-to-br from-yellow-300 via-pink-200 to-white text-gray-800 rounded-xl shadow-2xl flex w-4/5 md:w-3/4 lg:w-1/2 h-96">
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
                                    <motion.button
                                        className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-400 transition duration-300"
                                        onClick={openSignup}
                                        animate={{ y: ['0%', '-5%'] }}
                                        transition={{
                                            y: {
                                                repeat: Infinity,
                                                duration: 1,
                                                ease: 'easeInOut',
                                                repeatType: 'reverse'
                                            }
                                        }}
                                    >
                                        Start Playing
                                    </motion.button>
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
import React, { useState, useRef, useEffect } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import BigWin from '../assets/BigWin.jpg'; // Example background image path

const Signup = ({ onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        is18OrAbove: false,
        agreeToTerms: false, // Added for T&C checkbox
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false); // Added for confirmation dialog

    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowConfirmationDialog(true); // Show confirmation when clicking outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Email validation
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Password validation (example: at least 6 characters)
    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        // Validate email
        if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Validate password
        if (!validatePassword(formData.password)) {
            newErrors.password = 'Password must be at least 6 characters long';
        }

        // Checkbox validation
        if (!formData.is18OrAbove) {
            newErrors.is18OrAbove = 'You must be 18 years or older';
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to the terms & conditions';
        }

        setErrors(newErrors);

        // If no errors, submit form
        if (Object.keys(newErrors).length === 0) {
            console.log('Signup form submitted:', formData);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // To handle closing the modal
    const handleClose = () => {
        setShowConfirmationDialog(true);
    };

    // To handle confirming close and staying on the page
    const confirmClose = () => {
        setShowConfirmationDialog(false);
        onClose();
    };

    const cancelClose = () => {
        setShowConfirmationDialog(false); // Cancel close and stay on signup
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
                ref={modalRef}
                className="bg-white rounded-lg w-full max-w-4xl h-auto md:h-4/5 overflow-hidden shadow-lg flex flex-col md:flex-row"
            >
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-full hidden md:flex items-center justify-center overflow-hidden">
                    <img src={BigWin} alt="Signup Background" className="w-full h-full object-cover" />
                </div>

                {/* Form Section */}
                <form
                    onSubmit={handleSubmit}
                    className="w-full md:w-1/2 p-8 flex flex-col justify-center relative bg-gradient-to-br from-yellow-50 to-yellow-100"
                >
                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl font-bold"
                    >
                        &times;
                    </button>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-800 text-center">Sign Up</h2>

                        {/* Email Input */}
                        <div className="relative mb-4">
                            <FaEnvelope className="absolute top-4 left-3 text-gray-500" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className={`w-full p-3 pl-10 border ${
                                    errors.email ? 'border-red-500' : 'border-gray-300'
                                } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Password Input */}
                        <div className="relative mb-4">
                            <FaLock className="absolute top-4 left-3 text-gray-500" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className={`w-full p-3 pl-10 border ${
                                    errors.password ? 'border-red-500' : 'border-gray-300'
                                } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute top-3 right-3 text-gray-500"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>

                        {/* T&C Checkbox */}
                        <div className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                className="mr-2 w-6 h-6"
                            />
                            <label htmlFor="agreeToTerms" className="text-gray-600 font-bold">
                                I agree to the terms & conditions of Bitspin365
                            </label>
                        </div>
                        {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}

                        {/* Age Checkbox */}
                        <div className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="is18OrAbove"
                                checked={formData.is18OrAbove}
                                onChange={handleChange}
                                className="mr-2 w-6 h-6"
                            />
                            <label htmlFor="is18OrAbove" className="text-gray-600 font-bold">
                                I am 18 years or older
                            </label>
                        </div>
                        {errors.is18OrAbove && <p className="text-red-500 text-sm mt-1">{errors.is18OrAbove}</p>}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>

            {/* Confirmation Dialog */}
            {showConfirmationDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Wait! Don't leave yet!</h2>
                        <p className="text-gray-600 mb-4">
                            Stay with us and complete your signup for exciting rewards on Bitspin365!
                        </p>
                        <div className="flex justify-between">
                            <button
                                onClick={cancelClose}
                                className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors"
                            >
                                Back to Signup
                            </button>
                            <button
                                onClick={confirmClose}
                                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                            >
                                Exit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Signup;
























// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import img from '../assets/mainpagepic.png';
// import GameCarousel from './GameCarousel';
// import JackpotSection from './JackpotSection.jsx';
// import FeedbackCard from './FeedbackCard';
// import Signup from './Signup';
// import BitSpin365_logo from '../assets/BitSpin365_logo.png'
// const LandingPage = () => {
//     const [darkMode, setDarkMode] = useState(false);
//     const [showSignup, setShowSignup] = useState(false);
//     const [activeCard, setActiveCard] = useState(null);
//     const [animationPaused, setAnimationPaused] = useState(false);
//     const [amount, setAmount] = useState('');
//     const [currency, setCurrency] = useState('USD');
//     const [popupAnimation, setPopupAnimation] = useState(true);
//
//
//
//     const openSignup = () => setShowSignup(true);
//     const closeSignup = () => setShowSignup(false);
//     const handleCardClick = (index) => {
//         setActiveCard(index);
//         setAnimationPaused(true);
//     };
//
//     const handleClickOutside = (e) => {
//         if (!e.target.closest('.feedback-card')) {
//             setActiveCard(null);
//             setAnimationPaused(false);
//         }
//     };
//
//     const handleAmountChange = (e) => setAmount(e.target.value);
//     const handleCurrencyChange = (e) => setCurrency(e.target.value);
//
//     const feedbacks = [
//         { name: 'Alice', rating: 5, feedback: 'Amazing experience, would highly recommend!' },
//         { name: 'Bob', rating: 4, feedback: 'The gameplay was immersive and engaging from start to finish.' },
//         { name: 'Charlie', rating: 3, feedback: 'The best platform for online gaming!' },
//         { name: 'Joe', rating: 5, feedback: 'The multiplayer mode is a blast and offers endless replayability.' },
//         { name: 'Gamer', rating: 4, feedback: 'The best platform for online gaming!' },
//         { name: 'Ronnie', rating: 5, feedback: 'The best platform for online gaming!' },
//         { name: 'John', rating: 4, feedback: 'Everything about this game is top-tier.' },
//     ];
//
//     return (
//         <div className={${darkMode ? 'dark' : ''}}>
//             <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">
//                 {/* Hero Section */}
//                 <section className="flex flex-col items-center justify-center text-center py-10 space-y-6 relative">
//                     <div className="relative w-full h-100 md:h-90 lg:h-150">
//                         <motion.img
//                             src={img}
//                             alt="image"
//                             className="w-full h-full object-cover"
//                         />
//                         {/* Rectangular Box */}
//                         <div className="absolute inset-0 flex items-center justify-center">
//                             <div className="bg-gradient-to-br from-yellow-300 via-pink-200 to-white text-gray-800 rounded-xl shadow-2xl flex w-4/5 md:w-3/4 lg:w-1/2 h-96">
//                                 {/* Form Section */}
//                                 <div className="flex-1 p-6 flex flex-col items-center justify-center space-y-4">
//                                     <h2 className="text-3xl font-bold mb-4">Welcome to the Ultimate Gaming Experience!</h2>
//                                     <p className="text-lg mb-4">Enter the amount and select your currency to start playing!</p>
//                                     <div className="w-full space-y-4">
//                                         <input
//                                             type="number"
//                                             value={amount}
//                                             onChange={handleAmountChange}
//                                             placeholder="Enter amount"
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                                         />
//                                         <select
//                                             value={currency}
//                                             onChange={handleCurrencyChange}
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                                         >
//                                             <option value="USD">USD</option>
//                                             <option value="EUR">EUR</option>
//                                             <option value="GBP">GBP</option>
//                                             {/* Add more currencies as needed */}
//                                         </select>
//                                     </div>
//                                     <motion.button
//                                         className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-400 transition duration-300"
//                                         onClick={openSignup}
//                                         animate={{ y: ['0%', '-5%'] }}
//                                         transition={{
//                                             y: {
//                                                 repeat: Infinity,
//                                                 duration: 1,
//                                                 ease: 'easeInOut',
//                                                 repeatType: 'reverse'
//                                             }
//                                         }}
//                                     >
//                                         Start Playing
//                                     </motion.button>
//                                 </div>
//                                 {/* Image Section */}
//                                 <div className="flex-1 bg- rounded-r-xl">
//                                     <img
//                                         src={BitSpin365_logo}
//                                         alt="Gaming Image"
//                                         className="w-full h-full object-cover rounded-r-xl"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//
//
//
//                 {/* Other Sections */}
//                 <section className="py-20 px-5">
//                     <h3 className="text-3xl font-bold mb-10">Featured Games</h3>
//                     <GameCarousel />
//                 </section>
//
//                 <section className="py-3 px-4">
//                     <h3 className="text-3xl font-bold mb-10">Table Games</h3>
//                     <GameCarousel />
//                 </section>
//
//                 <section className="py-16 px-4">
//                     <h3 className="text-3xl font-bold mb-10">Roulette Games</h3>
//                     <GameCarousel />
//                 </section>
//
//                 <JackpotSection />
//
//                 <section className="py-16 px-4">
//                     <h3 className="text-3xl font-bold mb-10">Live Casino</h3>
//                     <GameCarousel />
//                 </section>
//
//                 <section className="py-16 px-4" onClick={handleClickOutside}>
//                     <h3 className="text-3xl font-bold mb-10">User Feedback</h3>
//                     <div className="relative h-64 overflow-hidden">
//                         {!animationPaused && (
//                             <motion.div
//                                 className="flex space-x-6 py-4 absolute top-0"
//                                 animate={{ x: ['0%', '-100%'] }}
//                                 transition={{
//                                     repeat: Infinity,
//                                     duration: 20,
//                                     ease: 'linear'
//                                 }}
//                             >
//                                 {feedbacks.map((feedback, index) => (
//                                     <motion.div
//                                         key={index}
//                                         className="feedback-card flex-shrink-0 w-80"
//                                         initial={{ opacity: 0, x: 100 }}
//                                         animate={{ opacity: 1, x: 0 }}
//                                         exit={{ opacity: 0, x: -100 }}
//                                         transition={{
//                                             duration: 0.5,
//                                             delay: index * 0.1,
//                                             type: "spring",
//                                             stiffness: 300,
//                                             damping: 20
//                                         }}
//                                         whileHover={{ scale: 1.08, y: -8 }}
//                                     >
//                                         <FeedbackCard
//                                             {...feedback}
//                                             isActive={activeCard === index}
//                                             onClick={() => handleCardClick(index)}
//                                         />
//                                     </motion.div>
//                                 ))}
//                             </motion.div>
//                         )}
//
//                         {activeCard !== null && (
//                             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                                 <FeedbackCard
//                                     {...feedbacks[activeCard]}
//                                     isActive={true}
//                                     onClick={() => handleCardClick(null)}
//                                 />
//                             </div>
//                         )}
//                     </div>
//                 </section>
//
//                 <section className="bg-gradient-to-r from-pink-600 via-indigo-900 to-pink-600 py-16 px-6 text-center">
//                     <div className="container mx-auto">
//                         <h3 className="text-4xl font-bold text-yellow-400">
//                             Let's Get Started
//                         </h3>
//                         <p className="text-lg text-gray-300 mt-4">
//                             Play the spins for a chance to win one of the BitSpin365 Jackpots!
//                         </p>
//                         <button
//                             className="nav-button mt-4 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-600 transition duration-300"
//                             onClick={openSignup}
//                         >
//                             Signup now
//                         </button>
//                     </div>
//                 </section>
//
//                 <section className="py-16 px-4 text-center">
//                     <h3 className="text-3xl font-bold mb-10">Why Choose Us?</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700">
//                             <h4 className="text-xl font-bold mb-2">Secure Payments</h4>
//                             <p>We guarantee fast, secure transactions, giving you peace of mind with every bet.</p>
//                         </div>
//                         <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700">
//                             <h4 className="text-xl font-bold mb-2">24/7 Support</h4>
//                             <p>Our dedicated support team is available around the clock to assist you with any queries.</p>
//                         </div>
//                         <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700">
//                             <h4 className="text-xl font-bold mb-2">Exciting Rewards</h4>
//                             <p>Enjoy fantastic bonuses and rewards that enhance your gaming experience.</p>
//                         </div>
//                     </div>
//                 </section>
//
//                 <footer className="bg-gray-800 py-4 text-center text-white">
//                     <p>&copy; 2024 BitSpin365</p>
//                     <p>All rights reserved.</p>
//                 </footer>
//             </div>
//
//             {showSignup && <Signup closeSignup={closeSignup} />}
//         </div>
//     );
// };
//
// export default LandingPage;
// import React, { useState, useRef, useEffect } from 'react';
// import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
// import BigWin from '../assets/BigWin.jpg'; // Example background image path
//
// const Signup = ({ onClose }) => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//         is18OrAbove: false,
//         agreeToTerms: false, // Added for T&C checkbox
//     });
//     const [showPassword, setShowPassword] = useState(false);
//     const [errors, setErrors] = useState({});
//     const [showConfirmationDialog, setShowConfirmationDialog] = useState(false); // Added for confirmation dialog
//
//     const modalRef = useRef(null);
//
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (modalRef.current && !modalRef.current.contains(event.target)) {
//                 setShowConfirmationDialog(true); // Show confirmation when clicking outside
//             }
//         };
//
//         document.addEventListener('mousedown', handleClickOutside);
//
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);
//
//     // Email validation
//     const validateEmail = (email) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };
//
//     // Password validation (example: at least 6 characters)
//     const validatePassword = (password) => {
//         return password.length >= 6;
//     };
//
//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData((prevState) => ({
//             ...prevState,
//             [name]: type === 'checkbox' ? checked : value,
//         }));
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//
//         const newErrors = {};
//
//         // Validate email
//         if (!validateEmail(formData.email)) {
//             newErrors.email = 'Please enter a valid email address';
//         }
//
//         // Validate password
//         if (!validatePassword(formData.password)) {
//             newErrors.password = 'Password must be at least 6 characters long';
//         }
//
//         // Checkbox validation
//         if (!formData.is18OrAbove) {
//             newErrors.is18OrAbove = 'You must be 18 years or older';
//         }
//
//         if (!formData.agreeToTerms) {
//             newErrors.agreeToTerms = 'You must agree to the terms & conditions';
//         }
//
//         setErrors(newErrors);
//
//         // If no errors, submit form
//         if (Object.keys(newErrors).length === 0) {
//             console.log('Signup form submitted:', formData);
//         }
//     };
//
//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };
//
//     // To handle closing the modal
//     const handleClose = () => {
//         setShowConfirmationDialog(true);
//     };
//
//     // To handle confirming close and staying on the page
//     const confirmClose = () => {
//         setShowConfirmationDialog(false);
//         onClose();
//     };
//
//     const cancelClose = () => {
//         setShowConfirmationDialog(false); // Cancel close and stay on signup
//     };
//
//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div
//                 ref={modalRef}
//                 className="bg-white rounded-lg w-full max-w-4xl h-auto md:h-4/5 overflow-hidden shadow-lg flex flex-col md:flex-row"
//             >
//                 {/* Image Section */}
//                 <div className="w-full md:w-1/2 h-full hidden md:flex items-center justify-center overflow-hidden">
//                     <img src={BigWin} alt="Signup Background" className="w-full h-full object-cover" />
//                 </div>
//
//                 {/* Form Section */}
//                 <form
//                     onSubmit={handleSubmit}
//                     className="w-full md:w-1/2 p-8 flex flex-col justify-center relative bg-gradient-to-br from-yellow-50 to-yellow-100"
//                 >
//                     {/* Close Button */}
//                     <button
//                         type="button"
//                         onClick={handleClose}
//                         className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl font-bold"
//                     >
//                         &times;
//                     </button>
//
//                     <div className="space-y-6">
//                         <h2 className="text-3xl font-bold text-gray-800 text-center">Sign Up</h2>
//
//                         {/* Email Input */}
//                         <div className="relative mb-4">
//                             <FaEnvelope className="absolute top-4 left-3 text-gray-500" />
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 placeholder="Enter your email"
//                                 className={`w-full p-3 pl-10 border ${
//                                     errors.email ? 'border-red-500' : 'border-gray-300'
//                                 } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
//                             />
//                             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                         </div>
//
//                         {/* Password Input */}
//                         <div className="relative mb-4">
//                             <FaLock className="absolute top-4 left-3 text-gray-500" />
//                             <input
//                                 type={showPassword ? 'text' : 'password'}
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 placeholder="Enter your password"
//                                 className={`w-full p-3 pl-10 border ${
//                                     errors.password ? 'border-red-500' : 'border-gray-300'
//                                 } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
//                             />
//                             <button
//                                 type="button"
//                                 onClick={togglePasswordVisibility}
//                                 className="absolute top-3 right-3 text-gray-500"
//                             >
//                                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//                             </button>
//                             {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//                         </div>
//
//                         {/* T&C Checkbox */}
//                         <div className="flex items-center mb-2">
//                             <input
//                                 type="checkbox"
//                                 name="agreeToTerms"
//                                 checked={formData.agreeToTerms}
//                                 onChange={handleChange}
//                                 className="mr-2 w-6 h-6"
//                             />
//                             <label htmlFor="agreeToTerms" className="text-gray-600 font-bold">
//                                 I agree to the terms & conditions of Bitspin365
//                             </label>
//                         </div>
//                         {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}
//
//                         {/* Age Checkbox */}
//                         <div className="flex items-center mb-2">
//                             <input
//                                 type="checkbox"
//                                 name="is18OrAbove"
//                                 checked={formData.is18OrAbove}
//                                 onChange={handleChange}
//                                 className="mr-2 w-6 h-6"
//                             />
//                             <label htmlFor="is18OrAbove" className="text-gray-600 font-bold">
//                                 I am 18 years or older
//                             </label>
//                         </div>
//                         {errors.is18OrAbove && <p className="text-red-500 text-sm mt-1">{errors.is18OrAbove}</p>}
//
//                         {/* Submit Button */}
//                         <button
//                             type="submit"
//                             className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
//                         >
//                             Sign Up
//                         </button>
//                     </div>
//                 </form>
//             </div>
//
//             {/* Confirmation Dialog */}
//             {showConfirmationDialog && (
//                 <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//                     <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
//                         <h2 className="text-xl font-bold text-gray-800 mb-4">Wait! Don't leave yet!</h2>
//                         <p className="text-gray-600 mb-4">
//                             Stay with us and complete your signup for exciting rewards on Bitspin365!
//                         </p>
//                         <div className="flex justify-between">
//                             <button
//                                 onClick={cancelClose}
//                                 className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors"
//                             >
//                                 Back to Signup
//                             </button>
//                             <button
//                                 onClick={confirmClose}
//                                 className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
//                             >
//                                 Exit
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default Signup;