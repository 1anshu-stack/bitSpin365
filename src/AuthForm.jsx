import { useState, useRef, useEffect } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import Bonus from './assets/Bonus.jpg'; // Example background image path

const AuthForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
        is18OrAbove: false,
        agreeToTerms: false,
    });

    const validateRequiredFields = () => {
        const requiredFields = [
            formData.firstName,
            formData.lastName,
            formData.dob,
            formData.address,
            formData.city,
            formData.country,
            formData.postcode,
            formData.phone,
            formData.securityQuestion,
            formData.answer,
        ];

        return requiredFields.every(field => field.trim() !== '');
    };

    const completeRegistration = () => {
        if (validateRequiredFields()) {
            setShowSuccessDialog(true);
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                required: 'Please fill in all required fields.',
            }));
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSignup, setIsSignup] = useState(true); // Control the form mode
    const [isRegistered, setIsRegistered] = useState(false); // Track if user has submitted signup
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false); // Add state for success dialog
    const [isForgotPassword, setIsForgotPassword] = useState(false); // New state for Forgot Password

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

    const validateDOB = (dob) => {
        const dobDate = new Date(dob);
        const today = new Date();
        const age = today.getFullYear() - dobDate.getFullYear();
        const monthDifference = today.getMonth() - dobDate.getMonth();
        const dayDifference = today.getDate() - dobDate.getDate();
        return age > 18 || (age === 18 && (monthDifference > 0 || (monthDifference === 0 && dayDifference >= 0)));
    };

    const validatePhone = (phone) => /^\d{10}$/.test(phone);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));

        // Validate fields on change
        if (name === 'phone' && !validatePhone(value)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: 'Phone number must be exactly 10 digits',
            }));
        } else if (name === 'phone') {
            setErrors((prevErrors) => {
                const { phone, ...rest } = prevErrors;
                return rest;
            });
        }

        if (name === 'dob' && !validateDOB(value)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                dob: 'You must be at least 18 years old',
            }));
        } else if (name === 'dob') {
            setErrors((prevErrors) => {
                const { dob, ...rest } = prevErrors;
                return rest;
            });
        }
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
            if (isSignup) {
                setIsRegistered(true); // Show registration form
                completeRegistration(); // Call completeRegistration to show the success dialog
            } else {
                console.log('Login form submitted:', formData);
            }
        }
    };
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleClose = () => setShowConfirmationDialog(true);

    const confirmClose = () => {
        setShowSuccessDialog(false); // Hide success dialog if it's shown
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
                    <img src={Bonus} alt="Signup Background" className="w-full h-full object-cover" />
                </div>

                {/* Form Section */}
                <div
                    className="w-full md:w-1/2 p-8 flex flex-col justify-center relative bg-gradient-to-br from-yellow-50 to-yellow-100"
                >
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
                                {isSignup ? 'Sign Up' : isForgotPassword ? 'Forgot Password' : 'Log In'}
                            </h2>

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

                            {/* Password Input - Only show if not in Forgot Password mode */}
                            {!isForgotPassword && (
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
                            )}

                            {/* Forgot Password Link - Only show in Login mode */}
                            {!isSignup && !isForgotPassword && (
                                <div className="text-right">
                                    <button
                                        type="button"
                                        className="text-sm text-blue-500 hover:underline"
                                        onClick={() => setIsForgotPassword(true)}
                                    >
                                        Forgot Password?
                                    </button>
                                </div>
                            )}

                            {/* T&C and Age Checkboxes */}
                            {isSignup && (
                                <>
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
                                </>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
                            >
                                {isSignup ? 'Sign Up' : isForgotPassword ? 'Send Reset Link' : 'Log In'}
                            </button>

                            <div className="text-center mt-4">
                                <button
                                    type="button"
                                    className="text-sm text-blue-500 hover:underline"
                                    onClick={() => {
                                        setIsSignup(!isSignup);
                                        setIsForgotPassword(false); // Reset Forgot Password mode
                                    }}
                                >
                                    {isSignup ? 'Already have an account? Log In' : 'New user? Sign Up here'}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <form className="space-y-2">
                            <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-4">Almost There!</h2>
                            <p className="text-center text-lg text-gray-600 mb-6">
                                Complete your profile to enjoy all the benefits.
                            </p>

                            {/* All additional fields */}
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Enter your first name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                                />
                            </div>
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Enter your last name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                                />
                            </div>
                            <div className="relative mb-4">
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${errors.dob ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                                />
                                {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
                            </div>

                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter your address"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                                />
                            </div>
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Enter your city"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                                />
                            </div>
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    placeholder="Enter your country"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                                />
                            </div>
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    name="postcode"
                                    value={formData.postcode}
                                    onChange={handleChange}
                                    placeholder="Enter your postcode"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                                />
                            </div>
                            <div className="relative mb-4">
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                className={`w-full p-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>
                            <div className="mb-4">
                                <select
                                    name="securityQuestion"
                                    value={formData.securityQuestion}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                                >
                                    <option value="pet">What was the name of your first pet?</option>
                                    <option value="mother">What is your mother's maiden name?</option>
                                    <option value="city">What city were you born in?</option>
                                </select>
                            </div>

                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    name="answer"
                                    value={formData.answer}
                                    onChange={handleChange}
                                    placeholder="Enter your answer"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                                />
                            </div>

                            <button
                                type="button"
                                onClick={completeRegistration}
                                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
                            >
                                Complete Registration
                            </button>
                        </form>
                    )}
                </div>
            </div>


            {/* Confirmation Dialog */}
            {showConfirmationDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-60">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <p className="text-gray-700 mb-4">Are you sure you want to close the form?</p>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={cancelClose}
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmClose}
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Dialog */}
            {showSuccessDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-60">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <p className="text-gray-700 mb-4">Registration complete! You may now log in.</p>
                        <button onClick={()=> setShowSuccessDialog(true)} className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600">
                            Continue
                        </button>
                        {errors.required && <p className="text-red-500 text-sm mt-1">{errors.required}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthForm;
