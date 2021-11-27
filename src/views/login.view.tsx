import React from 'react';
import zombieHead from '../assets/zombie-fly.gif';

const Login = () => {
    // const login = () => {
    //     alert('hi');
    // };

    return (
        <div className="login-view">
            <div className="login-header">
                <img src={zombieHead} />
                <div className="login-title-container">
                    <h1 className="login-title">Zombie Sudoku</h1>
                </div>
            </div>
            <div className="login-form">
                <form>
                    <fieldset>
                        <label htmlFor="nameField">Email Address</label>
                        <input type="email" id="nameField" />
                        <label htmlFor="nameField">Password</label>
                        <input type="password" id="nameField" />
                        <button className="button-primary wd-100">Login</button>
                    </fieldset>
                </form>
                <div className="flex justify-space-between m-t-s">
                    <a href="/register">Don&apos;t have an account?</a>
                    <a className="pointer" onClick={() => alert('forgot')}>
                        Forgot Password
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
