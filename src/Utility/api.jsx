import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7298/'
});

//requst interceptor to add jwt token

axiosInstance.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('jwt');
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error)=>Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response)=>response,
    (error)=> {
        if(error.response?.status === 401){
            localStorage.removeItem('jwt')
            window.location.href= '/'
        }
        return Promise.reject(error)
    }
);

export default axiosInstance;