import React, { useEffect } from 'react';
import zombieHead from '../assets/zombie-fly.gif';
import axios from 'axios';

const Login = () => {
    const login = () => {
        alert('hi');
    };

    /*
        - Generate grid
        - merge objects
        - then I have a empty value for each. 
        

        option 2
        loop and if value exists push it into input.
        let r = 0; r < 6



        // Setup the timer
        let 60 * 20 * 1000
        let minutes = Math.floor(time / 60);
        let seconds = time - minutes * 60;

    */

    useEffect(() => {
        try {
        } catch (error) {}
        axios.get('');
    }, []);

    return (
        <div className="game-view">
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
