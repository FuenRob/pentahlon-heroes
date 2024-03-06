import axios from 'axios';

const token = 'your_secret_key_here';

// Configura Axios para incluir el token en las cabeceras de todas las solicitudes
axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${token}`;
  
    return config;
}, error => {
    return Promise.reject(error);
});

export default axios;