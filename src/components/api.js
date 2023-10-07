// api.js (create this file)

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api', // Adjust the URL as needed
});

// Set the token in the headers for all requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
   
    if (token) {
      config.headers["authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
