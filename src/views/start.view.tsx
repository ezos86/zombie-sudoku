import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import actions from '../actions';
import zombieStart from '../assets/zombie-start.gif';

const Start = () => {
    const gameState = useSelector((state: any) => state.game);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const selectDiff = (diff: string) => {
        dispatch(actions.game.setDiff(diff));
    };

    return (
        <div className="start-view">
            <div className="start-header">
                <div className="start-zombie-img">
                    <img className="start-zombie" src={zombieStart} />
                </div>
                <p className="start-text">
                    Solve the Sudoku before zombies eat you. If you quit, you
                    will lose automatically.
                </p>
            </div>
            <div className="start-content">
                <p className="zombie-text align-center">
                    Select Your Zombie Difficulty
                </p>
                <div className="start-diff">
                    <div
                        className="diff-select pointer"
                        onClick={() => selectDiff('easy')}
                    >
                        <p
                            className={`start-diff-select ${
                                gameState.difficulty == 'easy'
                                    ? 'menu-active'
                                    : ''
                            }`}
                        >
                            Easy
                        </p>
                    </div>
                    <div
                        className="diff-select pointer"
                        onClick={() => selectDiff('medium')}
                    >
                        <p
                            className={`start-diff-select ${
                                gameState.difficulty == 'medium'
                                    ? 'menu-active'
                                    : ''
                            }`}
                        >
                            Medium
                        </p>
                    </div>
                    <div
                        className="diff-select pointer"
                        onClick={() => selectDiff('hard')}
                    >
                        <p
                            className={`start-diff-select ${
                                gameState.difficulty == 'hard'
                                    ? 'menu-active'
                                    : ''
                            }`}
                        >
                            Hard
                        </p>
                    </div>
                </div>
                <p
                    className="menu-link pointer m-t-m"
                    onClick={() => navigate('/game')}
                >
                    Start
                </p>
            </div>
        </div>
    );
};

export default Start;
