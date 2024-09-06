import React, { useState, useRef, useEffect } from 'react';
import casino from '../assets/casino.jpeg'; // Example background image path
import { FaGoogle } from 'react-icons/fa'; // For Google icon

const Login = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    is18OrAbove: false,
  });

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

  return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div
            ref={modalRef}
            className="bg-white rounded-lg w-full max-w-4xl h-4/5 overflow-hidden shadow-lg flex"
        >
          {/* Image Section */}
          <div className="w-1/2 h-full hidden md:block">
            <img
                src={casino}
                alt="Casino Background"
                className="h-full w-full object-cover"
            />
          </div>

          {/* Form Section */}
          <form
              onSubmit={handleSubmit}
              className="w-full md:w-1/2 p-8 flex flex-col justify-between overflow-y-auto"
          >
            {/* Close Button */}
            <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              &times;
            </button>

            {/* Form Header */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">Log In</h2>

              <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
              />

              <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
              />

              <label className="flex items-center text-sm text-gray-700">
                <input
                    type="checkbox"
                    name="is18OrAbove"
                    checked={formData.is18OrAbove}
                    onChange={handleChange}
                    className="mr-2"
                />
                I am 18 years or above
              </label>
            </div>

            {/* Submit Button */}
            <div className="space-y-4">
              <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Log In
              </button>

              <a
                  href="/forgot-password"
                  className="block text-center text-yellow-500 hover:underline"
              >
                Forgot password?
              </a>

              <button
                  type="button"
                  className="w-full bg-red-500 text-white py-3 flex justify-center items-center rounded-lg hover:bg-red-600 transition-colors"
              >
                <FaGoogle className="mr-2" /> Log In with Gmail
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Login;
