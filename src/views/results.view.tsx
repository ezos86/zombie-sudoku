import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import zombieLeader from '../assets/zombie-leader.gif';
import zombieLost from '../assets/zombie-lost.gif';

const Results = () => {
    const gameState = useSelector((state: any) => state.game);
    const points: any = {
        easy: 1,
        medium: 2,
        hard: 3,
    };
    const navigate = useNavigate();

    return (
        <div className="results-view">
            <div className="view-header">
                {gameState.status == 'won' ? (
                    <div className="results-won">
                        <div className="results-zombie-img">
                            <img
                                className="results-zombie"
                                src={zombieLeader}
                            />
                        </div>
                        <p className="zombie-title">
                            You Won {points[gameState.difficulty]} and escaped
                            the Zombies!
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
