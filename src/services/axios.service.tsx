import axios from 'axios';
import firebase from './firebase.service';

let baseUrl = null;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    baseUrl = 'https://vast-chamber-17969.herokuapp.com/';
} else {
    baseUrl = 'https://vast-chamber-17969.herokuapp.com/';
}

const api = axios.create({
    baseURL: baseUrl,
});

// Interceptor to check for 401 (Unauthorized)
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const errorObj = { ...error };
        if (errorObj.response.status == 401) {
            firebase.auth().signOut();
            window.location.href = '/login';
        }
        return Promise.resolve({ error });
    }
);

export default api;
