import React, { useState, useRef, useEffect } from 'react';
import BigWin from '../assets/BigWin.jpg'; // Example background image path
import { FaGoogle, FaEye, FaEyeSlash, FaEnvelope, FaLock } from 'react-icons/fa'; // For icons

const Login = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    is18OrAbove: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    setIsReset(true);
  };

  return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div
            ref={modalRef}
            className="bg-white rounded-lg w-full max-w-4xl h-auto md:h-4/5 overflow-hidden shadow-lg flex flex-col md:flex-row"
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-full hidden md:flex items-center justify-center overflow-hidden">
            <img
                src={BigWin}
                alt="Casino Background"
                className="w-full h-full object-cover"
            />
          </div>

          {/* Form Section */}
          <form
              onSubmit={handleSubmit}
              className="w-full md:w-1/2 p-8 flex flex-col justify-center relative bg-gradient-to-br from-yellow-50 to-yellow-100"
          >
            {/* Close Button */}
            <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl font-bold"
            >
              &times;
            </button>

            {/* Form Header */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 text-center">
                {isReset ? 'Reset Password' : 'Log In'}
              </h2>

              {/* Conditional Rendering Based on Reset State */}
              {!isReset ? (
                  <>
                    {/* Email Input */}
                    <div className="relative mb-4">
                      <FaEnvelope className="absolute top-4 left-3 text-gray-500" />
                      <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                      />
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
                          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                      />
                      <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute top-3 right-3 text-gray-500"
                      >
                        {showPassword ? <FaEyeSlash className="absolute top-1 right-4 text-gray-500" /> : <FaEye className="absolute top-1 right-4 text-gray-500" />}
                      </button>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors mb-4"
                    >
                      Log In
                    </button>

                    {/* Forgot Password Link */}
                    <button
                        type="button"
                        onClick={handleForgotPassword}
                        className="block mx-auto text-gray-500 hover:underline mb-4"
                    >
                      Forgot password?
                    </button>
                  </>
              ) : (
                  <div className="space-y-4">
                    <p className="text-gray-600 text-center mb-4">
                      Fill in your e-mail address and we will send you instructions on how to reset your password via
                      e-mail.
                    </p>
                    <p className="text-gray-600 text-center mb-4">
                      Contact us via <a href="/support" className="text-green-600 hover:underline">Support</a> if you
                      need further help.
                    </p>
                    <div className="relative mb-4">
                      <FaEnvelope className="absolute top-4 left-3 text-gray-500" />
                      <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                      />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors mb-4"
                    >
                      Reset Password
                    </button>
                    <p className="text-center text-gray-600">
                      <a href="/forgot-password" className="text-gray-600 hover:underline">Didn't receive unlock
                        instructions?</a>
                    </p>
                    <p className="text-center text-gray-600">
                      <a href="/forgot-password" className="text-gray-600 hover:underline">Didn't receive
                        confirmation instructions?</a>
                    </p>
                    <button
                        type="button"
                        onClick={() => setIsReset(false)}
                        className="block mx-auto text-gray-600 hover:underline"
                    >
                      Back to Login
                    </button>
                  </div>
              )}
            </div>
          </form>
        </div>
      </div>
  );
};

export default Login;