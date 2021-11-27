import React, { useState } from 'react';
import zombieLoader from '../assets/zombie-lost.gif';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../actions';
import firebase from '../services/firebase.service';
import zombieHead from '../assets/zombie-fly.gif';

const Register = () => {
    const [register, setRegister] = useState<any>({});
    const authState = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();

    // // Validate Phone Number
    // const validatePhoneForE164 = (phoneNumber: string) => {
    //     const regEx = /^\+[1-9]\d{10,14}$/;
    //     return regEx.test(phoneNumber);
    // };

    const registerSubmit = async (event: any) => {
        event.preventDefault();
        dispatch(actions.auth.authLoad());
        try {
            console.log(register);
            // Register User
            const fbuser = await firebase
                .auth()
                .createUserWithEmailAndPassword(
                    register.email,
                    register.password
                );
            if (fbuser.user) {
                await firebase
                    .database()
                    .ref('/users/' + fbuser.user.uid)
                    .set({
                        first_name: register.first_name,
                        last_name: register.last_name,
                        email: register.email,
                        score: 0,
                    });
            }
            //.signInWithEmailAndPassword(register.email, register.password);
        } catch (error: any) {
            if (error.code == 'auth/email-already-in-use') {
                alert('This email is already in use, Login.');
            } else {
                console.log(error);
                alert('Error occurred. Try again later.');
            }
            dispatch(actions.auth.error());
        }
    };

    return (
        <div className="login-view">
            <div className="login-header">
                <img src={zombieHead} />
                <div className="login-title-container">
                    <h1 className="login-title">Zombie Sudoku</h1>
                </div>
            </div>
            <div className="login-form">
                {authState.status == 'loading' ? (
                    <div className="align-center">
                        <img className="zombie-loader" src={zombieLoader} />
                        <p className="m-t-m">Loading...</p>
                    </div>
                ) : (
                    <div className="register-box-content">
                        {/* Register Single */}
                        <div className="register-single">
                            <form onSubmit={registerSubmit}>
                                <div className="form-field">
                                    <label className="form-label">
                                        First Name
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={(event) =>
                                            setRegister({
                                                ...register,
                                                first_name: event.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="form-field">
                                    <label className="form-label">
                                        Last Name
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={(event) =>
                                            setRegister({
                                                ...register,
                                                last_name: event.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="form-field">
                                    <label className="form-label">
                                        Email Address
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={(event) =>
                                            setRegister({
                                                ...register,
                                                email: event.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="form-field">
                                    <label className="form-label">
                                        Password
                                    </label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        onChange={(event) =>
                                            setRegister({
                                                ...register,
                                                password: event.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-full btn-primary wd-100"
                                >
                                    Register
                                </button>
                            </form>
                        </div>
                        <div className="flex justify-space-between m-t-s">
                            <a className="sub-link" href="/login">
                                Already have an account?
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Register;
