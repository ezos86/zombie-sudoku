import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../services/firebase.service';
import { useDispatch, useSelector } from 'react-redux';
import api from '../services/axios.service';

const home = (props: any) => {
    const authState = useSelector((state: any) => state.auth);
    const [authLoad, setAuthLoad] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        // Load App Settings
        firebase.auth().onAuthStateChanged(async (user: any) => {
            if (user) {
                // Auth in Redux
                const token = await user.getIdToken();
                // dispatch(
                //     actions.auth.login({
                //         uuid: user.uid,
                //         token: token,
                //     })
                // );

                api.defaults.headers.common['token'] = token;
                api.defaults.headers.common['target'] = 'coach';
                const userResp: any = await api.get('/users/' + user.uid);
                console.log(userResp);
                if (userResp.error) {
                    window.location.pathname == '/login';
                } else {
                    //dispatch(actions.user.loadUser(userResp.data.data));
                    setAuthLoad(true);
                }
                if (
                    window.location.pathname == '/' ||
                    window.location.pathname == '/login' ||
                    window.location.pathname == '/register'
                ) {
                    window.location.href = '/dashboard';
                }
            } else {
                setAuthLoad(true);
                if (
                    window.location.pathname == '/login' ||
                    window.location.pathname == '/register'
                ) {
                    // do nothing
                } else {
                    window.location.href = '/login';
                }
            }
        });
    }, []);

    if (authLoad) {
        return (
            <div className={authState.uuid ? '' : 'window'}>
                {props.children}
            </div>
        );
    } else {
        return null;
    }
};

export default home;
