import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Bonus from '../assets/Bonus.jpg';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from '../APIs/Api';
import Joi from 'joi';


const validationSchema = Joi.object({
  fname: Joi.string().required(),
  lname: Joi.string().required(),
  password: Joi.string().required(),
  birthDate: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
  postcode: Joi.string().required(),
  phone: Joi.string().required(),
  question: Joi.string().required(),
  answer: Joi.string().required(),
});

const getCsrfTokenFromCookie = () => {
  const cookies = document.cookie.split('; ');
  const csrfTokenCookie = cookies.find((cookie) => cookie.startsWith('XSRF-TOKEN='));
  const token =  csrfTokenCookie ? csrfTokenCookie.split('=')[1] : null;
  console.log('CSRF Token:', token);
  return token;
};

const ADD_DETAILS_MUTATION = async ({ details, context }) => {
    const csrfToken = getCsrfTokenFromCookie();
    const response = await axios.post(API_ENDPOINTS.ADD_DETAILS, { details }, {
        headers: {
            ...context.headers,
            'X-XSRF-TOKEN' : csrfToken
        }
    });
    return response.data;
};

const FINALIZE_REGISTRATION_MUTATION = async ({ details, bannerID, tracker, context }) => {
    const csrfToken = getCsrfTokenFromCookie();
    const response = await axios.post(API_ENDPOINTS.FINALIZE_REGISTRATION, { details, bannerID, tracker }, {
        headers: {
            ...context.headers,
            'X-XSRF-TOKEN' : csrfToken
        }
    });
    return response.data;
};

const AddDetails = () => {
  const token = sessionStorage.getItem('token');
  const [details, setDetails] = useState({
    fname: '',
    lname: '',
    password: '',
    birthDate: '',
    address: '',
    city: '',
    country: '',
    postcode: '',
    phone: '',
    question: '',
    answer: '',
  });

  const [errors, setErrors] = useState({});
  const [bannerId, setBannerId] = useState('');
  const [tracker, setTracker] = useState('');
  const [showBannerTracker, setShowBannerTracker] = useState(false);

  const { mutate: addDetailsMutate, isLoading, isError, error } = useMutation({
    mutationFn: ADD_DETAILS_MUTATION,
  });
  const { mutate: finalizeRegistrationMutate } = useMutation({
      mutationFn: FINALIZE_REGISTRATION_MUTATION,
  });

  const navigate = useNavigate();
  const [validationErrors, setValidationErrors] = useState({});
  const handleFinalizeRegistration = async () => {
      //call finalize registration mutation
      finalizeRegistrationMutate({ details, bannerId: parseInt(bannerId),tracker, context: { headers: { Authorization: `Bearer ${token}`, 'X-XSRF-TOKEN': getCsrfTokenFromCookie() } } }, {
          onSuccess: (data) => {
              console.log('registration finalized successfully:', data);
              navigate('/login', { replace: true });
              alert('registered successfully!');
          },
          onError: (error) => {
              console.log('error finalizing registration:', error);
              alert('Error finalizing registration. Please try again!');
          },
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validationSchema.validate(details, { abortEarly: false });

    if (validationErrors.error) {
        const formattedErrors = validationResult.error.details.reduce((acc, curr) => {
            acc[curr.path[0]] = curr.message;
            return acc;
        }, {});
        setErrors(formattedErrors);
        return;
    }

    if (token) {
      try {
        await addDetailsMutate({ details, context: { headers: { Authorization: `Bearer ${token}`, 'X-XSRF-TOKEN': getCsrfTokenFromCookie() } } }, {
          onSuccess: (data) => {
            console.log('Details added successfully!', data);
            setShowBannerTracker(true);
            handleFinalizeRegistration();
          },
          onError: (error) => {
              console.error('Error adding your details:', error);
              alert('Error adding your details. Please try again!');
          },
        });
      }catch (error) {
          console.log('Error adding your details:', error);
          alert('Error creating account. Please try again!');
      }
    }else {
        console.log('Token is not defined');
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
                    name="fname"
                    value={details.fname}
                    onChange={(e) => setDetails({ ...details, fname: e.target.value })}
                    placeholder="First Name"
                    className={`w-full p-3 border ${
                        validationErrors.lname ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                  />
                </div>
                <div className="relative mb-4">
                  <input
                    type="text"
                    name="lname"
                    value={details.lname}
                    onChange={(e) => setDetails({ ...details, lname: e.target.value })}
                    placeholder="Last Name"
                    className={`w-full p-3 border ${
                      validationErrors.lname ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                  />
                </div>
                <div className="relative mb-4">
                    <input
                       type="text"
                       name="password"
                       value={details.password}
                       onChange={(e) => setDetails({ ...details, password: e.target.value })}
                       placeholder="Password"
                       className={`w-full p-3 border ${
                           validationErrors.password ? 'border-red-500' : 'border-gray-300'
                       } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                    />
                </div>
                <div className="relative mb-4">
                  <input
                    type="date"
                    name="birthDate"
                    value={details.birthDate}
                    onChange={(e) => setDetails({ ...details, birthDate: e.target.value })}
                    placeholder="Date of Birth"
                    className={`w-full p-3 border ${
                      validationErrors.birthDate ? 'border-red-500' : 'border-gray-300'
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
                      validationErrors.address ? 'border-red-500' : 'border-gray-300'
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
                      validationErrors.city ? 'border-red-500' : 'border-gray-300'
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
                      validationErrors.country ? 'border-red-500' : 'border-gray-300'
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
                      validationErrors.postcode ? 'border-red-500' : 'border-gray-300'
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
                      validationErrors.phone ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                  />
                </div>
                <div className="relative mb-4">
                    <select
                      name="question"
                      value={details.question}
                      onChange={(e) =>
                        setDetails({ ...details, question: e.target.value })
                      }
                      className={`w-full p-3 border ${
                        validationErrors.question ? 'border-red-500' : 'border-gray-300'
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
                            validationErrors.answer ? 'border-red-500' : 'border-gray-300'
                          } rounded-lg focus:outline-none focus:ring focus:ring-yellow-500`}
                        />
                      </div>
                      {showBannerTracker && (
                        <div>
                          <div className="relative mb-4">
                            <input
                              type="number"
                              name="bannerId"
                              value={bannerId}
                              onChange={(e) => setBannerId(e.target.value)}
                              placeholder="Banner ID"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                            />
                          </div>
                          <div className="relative mb-4">
                            <input
                              type="text"
                              name="tracker"
                              value={tracker}
                              onChange={(e) => setTracker(e.target.value)}
                              placeholder="Tracker"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                            />
                          </div>
                        </div>
                      )}
                <button
                  type={showBannerTracker ? 'button' : 'submit'}
                  onClick={showBannerTracker ? handleFinalizeRegistration : null}
                  className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  {showBannerTracker ? 'Finalize Registration' : 'Save Changes'}
                </button>
              </form>
            </div>
          </div>
    </div>
  );
};

export default AddDetails;