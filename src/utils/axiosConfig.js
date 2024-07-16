// src/utils/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081', // Votre URL de backend Spring Boot
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
