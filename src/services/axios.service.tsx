import axios from 'axios';
import firebase from './firebase.service';

let baseUrl = null;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    baseUrl = 'https://localhost:8001/v1';
} else {
    baseUrl = 'https://api.creatormade.app/v1';
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
        // Option 1: Reauth (auto)
        // console.log('ran error');
        // const errorObj = { ...error };
        // if (errorObj.response.status == 401) {
        //     firebase
        //         .auth()
        //         .currentUser.getIdToken(true)
        //         .then((token) => {
        //             console.log(token);
        //             // dispatch(
        //             //     actions.auth.login({
        //             //         uuid: user.uid,
        //             //         token: token
        //             //     })
        //             // );

        //             api.defaults.headers.common['token'] = token;
        //             // Resetting page
        //             window.location.reload(false);
        //         })
        //         .catch((error) => {
        //             // send to login page
        //         });
        // }

        // Option 2: Expire session and force re-login

        // Send Toast or Pop up Modal like stripe (re-auth modal)
        const errorObj = { ...error };
        if (errorObj.response.status == 401) {
            firebase.auth().signOut();
            window.location.href = '/login';
        }
        return Promise.resolve({ error });
    }
);

export default api;
