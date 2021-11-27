import React from 'react';
import zombieMenu from '../assets/zombie-menu2.gif';

const Menu = () => {
    return (
        <div className="leader-view">
            <div className="leader-header">
                <img className="leader-zombie" src={zombieMenu} />
                <div className="leader-txt">
                    <p>
                        Earn points by solving harder Sudoku challenges and
                        become the Zombie Sudoku master.
                    </p>
                    <ul>
                        <li>Hard - 3 Points</li>
                        <li>Medium - 2 Points</li>
                        <li>Easy - 1 point</li>
                    </ul>
                </div>
                <div className="leader-board">
                    <p>placeholder</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;
