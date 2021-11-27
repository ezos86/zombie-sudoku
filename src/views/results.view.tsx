import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import zombieLeader from '../assets/zombie-leader.gif';
import zombieLost from '../assets/zombie-lost.gif';

const Results = () => {
    const points = 1;
    const status = 'won';
    const navigate = useNavigate();

    return (
        <div className="results-view">
            <div className="view-header">
                {status == 'won' ? (
                    <div className="results-won">
                        <div className="results-zombie-img">
                            <img
                                className="results-zombie"
                                src={zombieLeader}
                            />
                        </div>
                        <p className="zombie-title">
                            You Won {points} and escaped the Zombies!
                        </p>
                    </div>
                ) : (
                    <div className="results-lost">
                        <div className="results-zombie-img">
                            <img className="results-zombie" src={zombieLost} />
                        </div>
                        <p className="zombie-title">
                            The zombies got your brains!
                        </p>
                    </div>
                )}
                <div className="button-group flex justify-space-between">
                    <p
                        className="menu-link pointer"
                        onClick={() => navigate('/start')}
                    >
                        Play Again
                    </p>
                    <p
                        className="menu-link pointer"
                        onClick={() => navigate('/menu')}
                    >
                        Menu
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Results;
