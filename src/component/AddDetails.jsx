import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Bonus from '../assets/Bonus.jpg'; // Example background image path

const ADD_DETAILS_MUTATION = async (details, { context }) => {
  const response = await axios.post('http://localhost:8080/api/registration/add-details', details, {
    headers: context.headers,
  });
  return response.data;
};

const AddDetails = () => {
  const token = sessionStorage.getItem('token');
  const [details, setDetails] = useState({
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

  const [errors, setErrors] = useState({});

  const { mutate, isLoading, isError } = useMutation({
      mutationFn: ADD_DETAILS_MUTATION,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};

    if (!details.firstName) {
      errors.firstName = 'Please enter your first name';
    }

    if (!details.lastName) {
      errors.lastName = 'Please enter your last name';
    }

    if (!details.dob) {
      errors.dob = 'Please enter your date of birth';
    }

    if (!details.address) {
      errors.address = 'Please enter your address';
    }

    if (!details.city) {
      errors.city = 'Please enter your city';
    }

    if (!details.country) {
      errors.country = 'Please enter your country';
    }

    if (!details.postcode) {
      errors.postcode = 'Please enter your postcode';
    }

    if (!details.phone) {
      errors.phone = 'Please enter your phone number';
    }

    if (!details.securityQuestion) {
      errors.securityQuestion = 'Please select a security question';
    }

    if (!details.answer) {
      errors.answer = 'Please enter an answer';
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      mutate(details, {
        onSuccess: () => {
          alert('Details added successfully!');
        },
        onError: (error) => {
            console.log('error is here')
          console.error(error);
        },
        context: {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
      });
    }
  };

  return (
    // Form JSX code here
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl h-100% md:h-4/5 overflow-auto shadow-lg flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-full flex items-center justify-center overflow-hidden bg-gray-200">
              <img src={Bonus} alt="Signup Background" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative bg-gradient-to-br from-yellow-50 to-yellow-100">
              <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-4">Almost There!</h2>
              <p className="text-center text-lg text-gray-600 mb-6">
                Complete your profile to enjoy all the benefits.
              </p>
              <form className="space-y-2" onSubmit={handleSubmit}>
                <div className="relative mb-4">
                  <input
                    type="text"
                    name="firstName"
                    value={details.firstName}
                    onChange={(e) => setDetails({ ...details, firstName: e.target.value })}
                    placeholder="First Name"
                    className={`w-full p-3 border ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                  />
                </div>
                <div className="relative mb-4">
                  <input
                    type="text"
                    name="lastName"
                    value={details.lastName}
                    onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
                    placeholder="Last Name"
                    className={`w-full p-3 border ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                  />
                </div>
                <div className="relative mb-4">
                  <input
                    type="date"
                    name="dob"
                    value={details.dob}
                    onChange={(e) => setDetails({ ...details, dob: e.target.value })}
                    placeholder="Date of Birth"
                    className={`w-full p-3 border ${
                      errors.dob ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                  />
                </div>
                <div className="relative mb-4">
                  <input
                    type="text"
                    name="address"
                    value={details.address}
                    onChange={(e) => setDetails({ ...details, address: e.target.value })}
                    placeholder="Address"
                    className={`w-full p-3 border ${
                      errors.address ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                  />
                </div>
                <div className="relative mb-4">
                  <input
                    type="text"
                    name="city"
                    value={details.city}
                    onChange={(e) => setDetails({ ...details, city: e.target.value })}
                    placeholder="City"
                    className={`w-full p-3 border ${
                      errors.city ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                  />
                </div>
                <div className="relative mb-4">
                  <input
                    type="text"
                    name="country"
                    value={details.country}
                    onChange={(e) => setDetails({ ...details, country: e.target.value })}
                    placeholder="Country"
                    className={`w-full p-3 border ${
                      errors.country ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                  />
                </div>
                <div className="relative mb-4">
                  <input
                    type="text"
                    name="postcode"
                    value={details.postcode}
                    onChange={(e) => setDetails({ ...details, postcode: e.target.value })}
                    placeholder="Postcode"
                    className={`w-full p-3 border ${
                      errors.postcode ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                  />
                </div>
                <div className="relative mb-4">
                  <input
                    type="text"
                    name="phone"
                    value={details.phone}
                    onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                    placeholder="Phone Number"
                    className={`w-full p-3 border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                  />
                </div>
                <div className="relative mb-4">
                    <select
                      name="securityQuestion"
                      value={details.securityQuestion}
                      onChange={(e) =>
                        setDetails({ ...details, securityQuestion: e.target.value })
                      }
                      className={`w-full p-3 border ${
                        errors.securityQuestion ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                    >
                      <option value="">Select Security Question</option>
                      <option value="What is your mother's maiden name?">
                        What is your mother's maiden name?
                      </option>
                      <option value="What is your first pet's name?">
                        What is your first pet's name?
                      </option>
                      <option value="What is your favorite hobby?">
                        What is your favorite hobby?
                      </option>
                      <option value="What is your favorite sports team?">
                        What is your favorite sports team?
                      </option>
                      </select>
                      </div>
                      <div className="relative mb-4">
                        <input
                          type="text"
                          name="answer"
                          value={details.answer}
                          onChange={(e) => setDetails({ ...details, answer: e.target.value })}
                          placeholder="Answer"
                          className={`w-full p-3 border ${
                            errors.answer ? 'border-red-500' : 'border-gray-300'
                          } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                        />
                      </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
  );
};

export default AddDetails;