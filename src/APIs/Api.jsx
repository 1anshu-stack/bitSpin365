export const API_URL = 'http://localhost:8080/api';
export const API_ENDPOINTS = {
  SIGNUP: `${API_URL}/registration/create`,
  ADD_DETAILS: `${API_URL}/registration/add-details`,
  FINALIZE_REGISTRATION: `${API_URL}/registration/finalize`,
  CREATE_USER: `${API_URL}/users`,
  LOGIN: `${API_URL}/users/login`,
  RESET_PASSWORD: `${API_URL}/users/{id}/change-password`,
  // Add other endpoints here
};
