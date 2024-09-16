import React, { useState, useRef, useEffect } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import Bonus from './assets/Bonus.jpg'; // Example background image path

const Signup = ({ onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        is18OrAbove: false,
        agreeToTerms: false,
        firstName: '',
        lastName: '',
        dob: '',
        address: '',
        city: '',
        country: '',
        postcode: '',
        phone: '',
        securityQuestion: '',
        answer: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false); // Track if user has submitted signup

    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowConfirmationDialog(true);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validatePassword = (password) => password.length >= 8;

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

        if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!validatePassword(formData.password)) {
            newErrors.password = 'Password must be at least 8 characters long';
        }

        if (!formData.is18OrAbove) {
            newErrors.is18OrAbove = 'You must be 18 years or older';
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to the terms & conditions';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Signup form submitted:', formData);
            setIsRegistered(true); // Show registration form
        }
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleClose = () => setShowConfirmationDialog(true);

    const confirmClose = () => {
        setShowConfirmationDialog(false);
        onClose();
    };

    const cancelClose = () => setShowConfirmationDialog(false);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
                ref={modalRef}
                className="bg-white rounded-lg w-full max-w-4xl h-full md:h-auto overflow-auto shadow-lg flex flex-col md:flex-row"
            >
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-68 md:h-100 flex items-center justify-center overflow-hidden bg-gray-200">
                    <img src={Bonus} alt="Signup Background" className="w-full h-full object-cover"/>
                </div>

                {/* Form Section */}
                <div
                    className="w-full md:w-1/2 p-8 flex flex-col justify-center relative bg-gradient-to-br from-yellow-50 to-yellow-100">
                    <button
                        type="button"
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl font-bold"
                    >
                        &times;
                    </button>

                    {!isRegistered ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-6">
                                Welcome to Bitspin365!
                            </h2>

                            {/* Email Input */}
                            <div className="relative mb-4">
                                <FaEnvelope className="absolute top-4 left-3 text-gray-500"/>
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
                                <FaLock className="absolute top-4 left-3 text-gray-500"/>
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
                                    {showPassword ? <FaEyeSlash/> : <FaEye/>}
                                </button>
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                            </div>

                            {/* T&C and Age Checkboxes */}
                            <div className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange}
                                    className="mr-2 w-7 h-6"
                                />
                                <label htmlFor="agreeToTerms" className="text-gray-600 font-bold">
                                    I agree to the terms & conditions of Bitspin365
                                </label>
                            </div>
                            {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}

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

                            <button
                                type="submit"
                                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
                            >
                                Sign Up
                            </button>
                        </form>
                    ) : (
                        <form className="space-y-2">
                            <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-4">Almost There!</h2>
                            <p className="text-center text-lg text-gray-600 mb-6">
                                Complete your profile to enjoy all the benefits.
                            </p>

                            {/* First Name Input */}
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className={`w-full p-3 border ${
                                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                                />
                            </div>

                            {/* Last Name Input */}
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className={`w-full p-3 border ${
                                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                                />
                            </div>

                            {/* Date of Birth Input */}
                            <div className="relative mb-4">
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${
                                        errors.dob ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                                />
                            </div>

                            {/* Address Input */}
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Address"
                                    className={`w-full p-3 border ${
                                        errors.address ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                                />
                            </div>

                            {/* City and Country Inputs */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="City"
                                    className={`w-full p-3 border ${
                                        errors.city ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                                />

                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    placeholder="Country"
                                    className={`w-full p-3 border ${
                                        errors.country ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                                />
                            </div>

                            {/* Postcode Input */}
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    name="postcode"
                                    value={formData.postcode}
                                    onChange={handleChange}
                                    placeholder="Postcode"
                                    className={`w-full p-3 border ${
                                        errors.postcode ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                                />
                            </div>

                            {/* Phone Input */}
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone"
                                    className={`w-full p-3 border ${
                                        errors.phone ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                                />
                            </div>

                            {/* Security Question */}
                            <div className="relative mb-4">
                                <select
                                    name="securityQuestion"
                                    value={formData.securityQuestion}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${
                                        errors.securityQuestion ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                                >
                                    <option value="">Select a security question</option>
                                    <option value="favoriteColor">What is your favorite color?</option>
                                    <option value="petName">What is your pet name?</option>
                                    <option value="birthCity">In which city were you born?</option>
                                </select>
                            </div>

                            {/* Answer to Security Question */}
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    name="answer"
                                    value={formData.answer}
                                    onChange={handleChange}
                                    placeholder="Answer"
                                    className={`w-full p-3 border ${
                                        errors.answer ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
                            >
                                Complete Registration
                            </button>
                        </form>
                    )}
                </div>
            </div>

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
