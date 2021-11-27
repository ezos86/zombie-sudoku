import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import zombieHead from '../assets/zombie-fly.gif';
import firebase from '../services/firebase.service';
import actions from '../actions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [login, setLogin] = useState<any>({});
    const [view, setView] = useState<any>('login');
    const [passwordForm, setPasswordForm] = useState<any>(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginSubmit = async (event: any) => {
        event.preventDefault();
        dispatch(actions.auth.authLoad());
        try {
            await firebase
                .auth()
                .signInWithEmailAndPassword(login.email, login.password);
            // Check if on teams, if on teams, then show teams list.
            navigate('/menu');
        } catch (error: any) {
            console.log(error);
            if (error.code == 'auth/user-not-found') {
                alert('Could not locate the user. Create an account.');
                // Direct to new account
            } else if (error.code == 'auth/wrong-password') {
                alert('Password Invalid.');
            } else {
                console.log(error);
                alert('Error occurred. Try again later.');
            }
            dispatch(actions.auth.error());
        }
    };

    const forgotPasswordSubmit = async () => {
        if (!passwordForm.email || passwordForm.email == '') {
            alert('Enter your email.');
            return;
        }
        try {
            firebase.auth().sendPasswordResetEmail(passwordForm.email);
        } catch (error: any) {
            alert(error.code);
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
                {/* <form>
                    <fieldset>
                        <label htmlFor="nameField">Email Address</label>
                        <input type="email" id="nameField" />
                        <label htmlFor="nameField">Password</label>
                        <input type="password" id="nameField" />
                        <button className="button-primary wd-100">Login</button>
                    </fieldset>
                </form> */}
                {view == 'login' ? (
                    <div className="login-box">
                        <form onSubmit={(event) => loginSubmit(event)}>
                            <div className="form-field m-t-s">
                                <label className="form-label">
                                    Email Address
                                </label>
                                <input
                                    className="form-control m-t-s"
                                    type="text"
                                    onChange={(event) =>
                                        setLogin({
                                            ...login,
                                            email: event.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-field m-t-m">
                                <label className="form-label">Password</label>
                                <input
                                    className="form-control m-t-s"
                                    type="password"
                                    onChange={(event) =>
                                        setLogin({
                                            ...login,
                                            password: event.target.value,
                                        })
                                    }
                                />
                            </div>
                            <button
                                type="submit"
                                className="button-primary wd-100"
                            >
                                Continue
                            </button>
                        </form>
                        <div className="flex justify-space-between m-t-m">
                            <a className="sub-link" href="/register">
                                Don&apos;t Have Account?
                            </a>
                            <a
                                className="sub-link"
                                onClick={() => setView('password')}
                            >
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className="login-box">
                        <p className="m-b-m">
                            Enter the email address associated with your account
                            and we&apos;ll send you a link to reset your
                            password.
                        </p>
                        <form className="m-b-s">
                            <div className="form-field m-t-s">
                                <label className="form-label">
                                    Email Address
                                </label>
                                <input
                                    className="form-control m-t-s"
                                    type="text"
                                    onChange={(event) =>
                                        setPasswordForm(event.target.value)
                                    }
                                />
                            </div>
                            <button
                                type="submit"
                                className="button-primary wd-100"
                                disabled={!passwordForm}
                                onClick={forgotPasswordSubmit}
                            >
                                Submit
                            </button>
                            <div className="m-t-s">
                                <a
                                    className="sub-link"
                                    onClick={() => setView('login')}
                                >
                                    Back to Login
                                </a>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
