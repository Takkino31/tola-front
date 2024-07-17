// lib/axios.js
import axios from 'axios';

// Crée une instance d'Axios
const apiClient = axios.create({
  baseURL: 'http://localhost:8081', // Remplacez par votre URL de base
});

// Ajoute un intercepteur pour les requêtes
apiClient.interceptors.request.use(
  (config) => {
    // Récupère le token du localStorage
    const token = localStorage.getItem('token');

    // Si un token est trouvé, l'ajoute à l'en-tête de la requête
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
