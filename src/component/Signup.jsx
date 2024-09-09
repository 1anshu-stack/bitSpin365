import React, { useState, useRef, useEffect } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import casino from "../assets/casino.jpeg";

const Signup = ({ onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        is18OrAbove: false,
        currency: ''
    });
    const [errors, setErrors] = useState({});
    const [showExitConfirmation, setShowExitConfirmation] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [success, setSuccess] = useState(false); // Success state
    const [errorMessage, setErrorMessage] = useState(''); // Error message state
    const modalRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target) && !formRef.current.contains(event.target)) {
                setShowExitConfirmation(true);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    const validateCheckbox = () => {
        if (!formData.is18OrAbove) {
            setErrors(prevErrors => ({
                ...prevErrors,
                is18OrAbove: 'You must be 18 years or older to sign up.'
            }));
            return false;
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                is18OrAbove: '' // Clear error if checkbox is checked
            }));
            return true;
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        let error = {};

        if (name === 'email') {
            if (!validateEmail(value)) {
                error.email = 'Invalid email format';
            } else {
                error.email = ''; // Clear error if email is valid
            }
        } else if (name === 'password') {
            if (!validatePassword(value)) {
                error.password = 'Password must be at least 8 characters long, contain at least one uppercase letter, one digit, and one special character.';
            } else {
                error.password = ''; // Clear error if password is valid
            }
        }else if (name === 'is18OrAbove') {
            if (!checked) {
                error.is18OrAbove = 'You must be 18 years or older to sign up.';
            } else {
                error.is18OrAbove = ''; // Clear error if checkbox is checked
            }
        }

        setErrors(prevErrors => ({
            ...prevErrors,
            ...error
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload
        const errors = {};

        if (!validateEmail(formData.email)) {
            errors.email = 'Invalid email format';
        }

        if (!validatePassword(formData.password)) {
            errors.password = 'Password must be at least 8 characters long, contain at least one uppercase letter, one digit, and one special character.';
        }

        if (!validateCheckbox()) {
            errors.is18OrAbove = 'You must be 18 years or older to sign up.';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        try {
            // Send form data to the server (API call)
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();

            if (response.ok) {
                setSuccess(true); // Assuming signup is successful
                setErrorMessage(''); // Clear any errors
                // Optionally handle success response (e.g., redirect, etc.)
            } else {
                setErrorMessage(result.message || 'An error occurred during signup. Please try again later.');
                setSuccess(false);
            }
        } catch (err) {
            setErrorMessage('An error occurred during signup. Please try again later.');
            setSuccess(false);
        }
    };

    const handleCancelClose = () => {
        setShowExitConfirmation(false);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
                <div ref={modalRef} className="bg-white rounded-lg overflow-hidden w-11/12 sm:w-3/4 md:w-1/2 h-auto max-h-full relative flex flex-col md:flex-row">
                    <div className="flex-shrink-0 w-full md:w-1/2 relative h-40 md:h-auto">
                        <img src={casino} alt="Casino background" className="w-full h-full object-cover" />
                    </div>
                    <form ref={formRef} className="w-full p-6 md:p-8 flex flex-col overflow-y-auto" onSubmit={handleSubmit}>
                        <button type="button" className="absolute top-4 right-4 text-2xl font-bold z-20" onClick={() => setShowExitConfirmation(true)}>
                            X
                        </button>
                        <h2 className="text-xl md:text-2xl font-bold mb-5">Sign Up</h2>
                        <div className="relative mb-4">
                            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter email"
                                className="pl-10 p-2 border border-gray-400 rounded w-full"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div className="relative mb-4">
                            <FaLock className="absolute top-3 left-3 text-gray-400" />
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter password"
                                className="pl-10 p-2 border border-gray-400 rounded w-full"
                            />
                            <button
                                type="button"
                                className="absolute top-3 right-3"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                            >
                                {passwordVisible ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
                            </button>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>
                        <label className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                name="is18OrAbove"
                                checked={formData.is18OrAbove}
                                onChange={handleChange}
                                onBlur={validateCheckbox}
                                className="mr-2"
                            />
                            I am 18 years or above
                        </label>
                        {errors.is18OrAbove && <p className="text-red-500 text-sm mt-1">{errors.is18OrAbove}</p>}
                        <button type="submit" className="bg-orange-500 text-white p-2 rounded mb-4">
                            Sign Up
                        </button>
                        <a href="/forgot-password" className="text-orange-500 text-center mb-4">
                            Forgot password?
                        </a>
                    </form>
                </div>
            </div>

            {showExitConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-20">
                    <div className="bg-white rounded-lg p-5 w-11/12 sm:w-3/4 md:w-1/2 max-w-md relative">
                        <p className="text-lg mb-2">Are you sure you want to exit?</p>
                        <p className="mb-4">Don’t miss out on the high stakes and big wins at our casino!</p>
                        <div className="flex justify-end space-x-4">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={handleCancelClose}
                            >
                                Back to Signup
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded"
                                onClick={onClose}
                            >
                                Exit
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {success && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-green-600 mb-4">Signup Successful!</h2>
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {errorMessage && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-red-600 mb-4">Signup Error</h2>
                        <p className="mb-4">{errorMessage}</p>
                        <button
                            onClick={() => setErrorMessage('')}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Signup;