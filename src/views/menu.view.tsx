import React from 'react';
import zombieMenu from '../assets/zombie-menu2.gif';

const Menu = () => {
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
                    <a className="menu-link" href="/logout">
                        Logout
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Menu;
