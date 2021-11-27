import React, { useState } from 'react';
import zombieLeader from '../assets/zombie-leader.gif';

const Results = () => {
    const points = 1;

    return (
        <div className="results-view">
            <div className="results-header">
                <div className="results-zombie-img">
                    <img className="results-zombie" src={zombieLeader} />
                </div>
                <p className="results-text">
                    You Won {points} and escaped the Zombies!
                </p>
                <button className="button-start">Goto Menu</button>
            </div>
        </div>
    );
};

export default Results;
