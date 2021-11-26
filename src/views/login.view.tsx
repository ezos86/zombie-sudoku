import React from 'react';

const Login = () => {
    return (
        <div className="login">
            <form>
                <fieldset>
                    <label htmlFor="nameField">Email Address</label>
                    <input type="email" id="nameField" />
                    <label htmlFor="nameField">Password</label>
                    <input type="password" id="nameField" />
                    <button className="button-primary">Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;
