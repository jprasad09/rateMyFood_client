import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ratemyfoodserver.onrender.com/api',
  withCredentials: true
});

instance.interceptors.request.use(function (config) {
  config.headers['Access-Control-Allow-Origin'] = 'https://ratemyfood.onrender.com';
  config.headers['Access-Control-Allow-Credentials'] = true;
  return config;
});

export default instance;