import axios from 'axios';
import { API_URL } from '../APIs/Api'; // Import the base API URL

// Create an Axios instance
const axiosClient = axios.create({
  baseURL: API_URL, // Set the base URL to your API
  withCredentials: true,  // Ensure cross-site requests are allowed
});

// Function to get CSRF token from cookies
const getCsrfTokenFromCookie = () => {
  const name = 'XSRF-TOKEN';  // This depends on the name of your CSRF token cookie
  const cookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith(name));
  return cookie ? cookie.split('=')[1] : null;
};

// Add a request interceptor to attach Authorization and CSRF token
axiosClient.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  const csrfToken = getCsrfTokenFromCookie();
  if (csrfToken) {
    config.headers['X-XSRF-TOKEN'] = csrfToken; // Set the CSRF token header
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosClient;
