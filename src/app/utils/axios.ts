import axios from 'axios';
import { apiConfig } from './axiosConfig';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: apiConfig.baseURL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
