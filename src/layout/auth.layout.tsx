import React, { useState, useEffect } from 'react';
import actions from '../actions';
import firebase from '../services/firebase.service';
import { useDispatch, useSelector } from 'react-redux';
import api from '../services/axios.service';
// import { getDatabase, ref, child, get } from 'firebase/database';

const home = (props: any) => {
    const authState = useSelector((state: any) => state.auth);
    const [authLoad, setAuthLoad] = useState(false);
    const dispatch = useDispatch();

    const getUser = async (uuid: string) => {
        try {
            const user = await firebase
                .database()
                .ref('/users/' + uuid)
                .get();
            return user;
        } catch (error) {
            console.log(error);
        }

        // .then((snapshot) => {
        //     if (snapshot.exists()) {
        //         console.log(snapshot.val());
        //     } else {
        //         console.log('No data available');
        //     }
        // })
        // .catch((error) => {
        //     console.error(error);
        // });
    };

    useEffect(() => {
        // Load App Settings
        firebase.auth().onAuthStateChanged(async (user: any) => {
            if (user) {
                // Auth in Redux
                const token = await user.getIdToken();
                dispatch(
                    actions.auth.login({
                        uuid: user.uid,
                        token: token,
                    })
                );

                api.defaults.headers.common['token'] = token;
                const userSnap: any = await getUser(user.uid);
                const userResp = userSnap.val();
                console.log(userResp);
                if (userResp.error) {
                    window.location.pathname == '/login';
                } else {
                    dispatch(actions.user.loadUser(userResp));
                    setAuthLoad(true);
                }
                if (
                    window.location.pathname == '/' ||
                    window.location.pathname == '/login' ||
                    window.location.pathname == '/register'
                ) {
                    window.location.href = '/menu';
                }
            } else {
                setAuthLoad(true);
                if (
                    window.location.pathname == '/login' ||
                    window.location.pathname == '/register'
                ) {
                    // do nothing
                } else {
                    //window.location.href = '/login';
                }
            }
        });
    }, []);

    if (authLoad) {
        return (
            <div className={authState.uuid ? 'window' : 'window'}>
                {props.children}
            </div>
        );
    } else {
        return null;
    }
};

export default home;
