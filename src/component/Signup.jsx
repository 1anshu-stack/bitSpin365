import React, { useState, useRef, useEffect } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons
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
    const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
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

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (!validatePassword(formData.password)) {
            errors.password = 'Password must be at least 8 characters long, contain at least one uppercase letter, one digit, and one special character.';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            console.log('Signup form submitted:', formData);
            onClose();
        }
    };

    const handleCancelClose = () => {
        setShowExitConfirmation(false);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
                <div ref={modalRef} className="bg-white rounded-lg overflow-hidden w-3/4 md:w-1/2 h-3/4 md:h-2/3 relative flex">
                    <div className="flex-shrink-0 w-1/2 relative">
                        <img src={casino} alt="Casino background" className="w-full h-full object-cover" />
                    </div>
                    <form ref={formRef} className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto"
                          onSubmit={handleSubmit}>
                        <button type="button" className="absolute top-4 right-4 text-2xl font-bold z-20"
                                onClick={() => setShowExitConfirmation(true)}>
                            X
                        </button>
                        <h2 className="text-2xl font-bold mb-5">Sign Up</h2>
                        <div className="relative mb-4">
                            <FaEnvelope className="absolute top-3 left-3 text-gray-400"/>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                className="pl-10 p-2 border border-gray-400 rounded w-full"
                            />
                        </div>
                        <div className="relative mb-4">
                            <FaLock className="absolute top-3 left-3 text-gray-400"/>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                                className="pl-10 p-2 border border-gray-400 rounded w-full"
                            />
                            <button
                                type="button"
                                className="absolute top-3 right-3"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                            >
                                {passwordVisible ? <FaEyeSlash className="text-gray-400"/> :
                                    <FaEye className="text-gray-400"/>}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 mb-4 text-sm">{errors.password}</p>}
                        <label className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                name="is18OrAbove"
                                checked={formData.is18OrAbove}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            I agree to the <b>Terms & Conditions</b> and <b>Privacy Policy</b>
                        </label>
                        <label className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                name="is18OrAbove"
                                checked={formData.is18OrAbove}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            I am 18 years or above
                        </label>
                        <button type="submit" className="bg-orange-500 text-white p-2 rounded mb-4">
                            Sign Up
                        </button>
                        <a href="/forgot-password" className="text-orange-500 text-center mb-4">
                            Forgot password?
                        </a>
                        <button className="bg-red-500 text-white p-2 rounded flex items-center justify-center">
                            <i className="fa fa-google mr-2"></i> Sign Up with Gmail
                        </button>
                    </form>
                </div>
            </div>

            {showExitConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-20">
                    <div className="bg-white rounded-lg p-5 w-3/4 md:w-1/2 max-w-md relative">
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
        </>
    );
};

export default Signup;
