import React from 'react';
import { useNavigate } from 'react-router-dom';
import zombieMenu from '../assets/zombie-menu2.gif';
import firebase from '../services/firebase.service';

const Menu = () => {
    const navigate = useNavigate();

    const logout = () => {
        firebase.auth().signOut();
        navigate('/login');
    };

    return (
        <div className="menu-view">
            <div className="menu-header">
                <img className="menu-zombie" src={zombieMenu} />
                <div className="login-title-container">
                    <a className="menu-link" href="/start">
                        New Game
                    </a>
                    <a className="menu-link" href="/leaderboard">
                        Leader Board
                    </a>
                    <a className="menu-link" href="/history">
                        Game History
                    </a>
                    <a className="menu-link" href="/about">
                        About Me
                    </a>
                    <p className="menu-link pointer" onClick={logout}>
                        Logout
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Menu;
