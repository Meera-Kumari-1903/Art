import axios from 'axios';
import {getUserToken} from '../utils/LoginUtil';

const ArtBackend = axios.create({
    baseURL:`http://localhost:8080/`,
});
ArtBackend.interceptors.request.use(
    (config) => {
        const token = getUserToken();
        if(token) {
            config.headers = {Authorization: `Bearer ${token}`};
            console.log("Inside interceptor");
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default ArtBackend;

