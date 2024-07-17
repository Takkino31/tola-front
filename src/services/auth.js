// services/auth.js
import apiClient from '../lib/axios';

export const login = async (username, password) => {
  const response = await apiClient.post('/auth/login', { username, password });
  return response.data;
};

export const signup = async (userData) => {
  const response = await apiClient.post('/auth/signup', userData);
  return response.data;
};
