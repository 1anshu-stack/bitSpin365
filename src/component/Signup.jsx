import { useState, useRef, useEffect } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import Bonus from '../assets/Bonus.jpg'; // Example background image path
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import AddDetails from './AddDetails';
import { useNavigate, useLocation } from 'react-router-dom';
import { API_ENDPOINTS } from '../APIs/Api';
import Login from "./Login.jsx";


const Signup = ({ onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        //password: '',
        username: '',
        locale: '',
        is18OrAbove: false,
        agreeToTerms: false,
    });
    const [showUsername, setShowUsername] = useState(false);
    const [errors, setErrors] = useState({});
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false); // Track if user has submitted signup

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(false);

    const modalRef = useRef(null);
    //add formRef(null)
    const formRef = useRef(null);
    const getCsrfTokenFromCookie = () => {
      const cookies = document.cookie.split('; ');
      const csrfTokenCookie = cookies.find((cookie) => cookie.startsWith('CSRF_TOKEN='));
      return csrfTokenCookie ? csrfTokenCookie.split('=')[1] : null;
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target) && (formRef.current === null || !formRef.current.contains(event.target))) { //changes needed for formRef
                setShowConfirmationDialog(true);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validateUsername = (username) => username.length >= 8;

    //validateCheckBox for is18OrAbove;
    const validateCheckBox = () => formData.is18OrAbove;
    //validation for agreeToTerms;
    const validateAgreeToTerms = () => formData.agreeToTerms;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    //create handleBlur for instant validation
    const handleBlur = (e) => {
        const { name, value, checked } = e.target;
        let error = {};

        if (name === 'email') {
            if (!validateEmail(value)) {
                error.email = 'Invalid email format';
            } else {
                error.email = ''; // Clear error if email is valid
            }
        } else if (name === 'username') {
            if (!validateUsername(value)) {
                error.username = 'username must be at least 8 characters long';
            } else {
                error.username = ''; // Clear error if username is valid
            }
        }else if (name === 'is18OrAbove') {
            if (!validateCheckbox()) {
                error.is18OrAbove = 'You must be 18 years or older to sign up.';
            }
            else {
                error.is18OrAbove = ''; // Clear error if checkbox is checked
            }
        }else if (name === 'agreeToTerms') {
            if (!validateAgreeToTerms()) {
                error.agreeToTerms = 'You must agree to terms.';
            }else {
                error.agreeToTerms = '';
            }
        }

        setErrors(prevErrors => ({
            ...prevErrors,
            ...error
        }));
    };
    //mutation hook for signup using mutationFn explicitly
    const mutation = useMutation({
        mutationFn: async (data) => {
            const csrfToken = getCsrfTokenFromCookie();
            const response = await axios.post(API_ENDPOINTS.SIGNUP, data,
                {
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                },
            });
            return response.data;
        },
        onSuccess: (data) => {
            console.log('response data: ', data);
            sessionStorage.setItem('token', data.token);
            console.log('token: ', data.token);
//             setIsRegistered(true);
//             setErrorMessage('');
            console.log('navigating to add details page');
            navigate({ ...location, pathname: '/add-details' });
            console.log('navigating to add details page');
        },
        onError: (error) => {
            setErrorMessage(error.response?.data?.message || 'An error occurred during signup. Please try again later.');
            setIsRegistered(false);
        }
    });


    const validateForm = () => {
        //const newErrors = {};
        const errors = {};

        if (!validateEmail(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }
        if (!validateUsername(formData.username)) {
            errors.username = 'username must be at least 8 characters long';
        }
        if (!validateCheckBox()) {
            errors.is18OrAbove = 'You must be 18 years or older';
        }
        if (!validateAgreeToTerms()) {
            errors.agreeToTerms = 'You must agree to the terms & conditions';
        }
        return errors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateForm();

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            const formDataWithoutConsent={
                email: formData.email,
                username: formData.username,
            };
            console.log('Signup form submitted:', formDataWithoutConsent);
            mutation.mutate(formDataWithoutConsent);
            setIsRegistered(true); // Show registration form
        }
    };

    const toggleUsernameVisibility = () => setShowUsername(!showUsername);

    const handleClose = () => setShowConfirmationDialog(true);

    const confirmClose = () => {
        setShowConfirmationDialog(false);
        onClose();
    };

    const cancelClose = () => setShowConfirmationDialog(false);

    const handleLoginClick = () => {
        setIsLogin(true); // Switch to signup mode when the link is clicked
    };

// Render the Signup component if isSignup is true
    if (isLogin) {
        return <Login onClose={onClose} />;
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
                ref={modalRef}
                className="bg-white rounded-lg w-full max-w-4xl h-100% md:h-4/5 overflow-auto shadow-lg flex flex-col md:flex-row"
            >
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-full flex items-center justify-center overflow-hidden bg-gray-200">
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
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-6">Welcome to
                                Bitspin365!</h2>

                            {/* Email Input */}
                            <div className="relative mb-4">
                                <FaEnvelope className="absolute top-4 left-3 text-gray-500"/>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter your email"
                                    className={`w-full p-3 pl-10 border ${
                                        errors.email ? 'border-red-500' : 'border-gray-300'//error may give issues.
                                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            {/* username Input */}
                            <div className="relative mb-4">
                                <FaLock className="absolute top-4 left-3 text-gray-500"/>
                                <input
                                    type={showUsername ? 'text' : 'username'}
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter your username"
                                    className={`w-full p-3 pl-10 border ${
                                        errors.username ? 'border-red-500' : 'border-gray-300'//error may give issues.
                                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                                />
                                <button
                                    type="button"
                                    onClick={toggleUsernameVisibility}
                                    className="absolute top-3 right-3 text-gray-500"
                                >
                                    {showUsername ? <FaEyeSlash/> : <FaEye/>}
                                </button>
                                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                            </div>

                            {/* T&C and Age Checkboxes */}
                            <div className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange}
                                    onBlur={validateAgreeToTerms}
                                    className="mr-2 w-6 h-6"
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
                                    onBlur={validateCheckBox}
                                    className="mr-2 w-6 h-6"
                                />
                                <label htmlFor="is18OrAbove" className="text-gray-600 font-bold">
                                    I am 18 years or older
                                </label>
                            </div>
                            {errors.is18OrAbove && <p className="text-red-500 text-sm mt-1">{errors.is18OrAbove}</p>}
                            {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}

                            <button
                                type="submit"
                                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
                                disabled={mutation.isLoading}
                            >
                                {mutation.isLoading ? 'signing Up...' : 'Sign Up'}
                            </button>
                            <button
                                type="button"
                                onClick={handleLoginClick}
                                className="block mx-auto text-gray-500 hover:underline"
                            >
                                Already a user?LOGIN
                            </button>
                        </form>
                    ) : (
                        <AddDetails/>
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
        </div>
    );
};

export default Signup;
