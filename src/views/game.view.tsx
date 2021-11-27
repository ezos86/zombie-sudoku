import React, { useEffect, useState } from 'react';
import zombieLoader from '../assets/zombie-lost.gif';
import { useNavigate } from 'react-router-dom';
import firebase from '../services/firebase.service';
import axios from 'axios';
import { useSelector } from 'react-redux';
//import * as moment from 'moment';
import moment from 'moment';

const Game = () => {
    const authState = useSelector((state: any) => state.auth);
    let startGrid: any = [];
    const [startPuzzle, setStartPuzzle] = useState<any>(null);
    const [puzzle, setPuzzle] = useState<any>(null);
    const navigate = useNavigate();
    const grid: any = [];
    const startDateTime = moment().format();

    const giveUp = () => {
        // log game history
        console.log(puzzle, startPuzzle);
        const endDateTime = moment().format();
        firebase
            .database()
            .ref('games/' + authState.uuid)
            .push({
                start: startDateTime,
                end: endDateTime,
                unix: moment().unix(),
                status: 'lost',
                difficulty: 'easy',
                points: 0,
                game: startPuzzle,
            });
        navigate('/results');
    };

    const generateGame = (puzzle: any) => {
        const r = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
        r.map((letter) => {
            const col = [];
            for (let c = 1; c < 10; c++) {
                col.push(
                    <div className="sudoku-block" key={letter + c}>
                        <input
                            className="sudoku-input"
                            type="text"
                            value={puzzle[letter + c]}
                            maxLength={1}
                            onChange={(event: any) => {
                                setStartPuzzle({
                                    ...startPuzzle,
                                    [letter + c]: event.target.value,
                                });
                                if (Object.keys(startPuzzle).length + 1 == 81) {
                                    // Set submit valid
                                }
                            }}
                            disabled={puzzle[letter + c]}
                        />
                    </div>
                );
            }
            const row: any = (
                <div className="sudoku-row" key={letter}>
                    {col}
                </div>
            );
            grid.push(row);
        });
        setPuzzle(grid);
    };

    const getPuzzle = async () => {
        try {
            startGrid = await axios.get(
                'https://vast-chamber-17969.herokuapp.com/generate?difficulty=easy'
            );
            setStartPuzzle(startGrid.data.puzzle);
            generateGame(startGrid.data.puzzle);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log(authState);
        getPuzzle();
    }, []);

    return (
        <div className="game-view">
            <div className="view-header">
                <div className="view-title-container p-t-l">
                    <h1 className="zombie-title">Zombie Sudoku</h1>
                </div>
            </div>
            {puzzle ? (
                <div className="grid-container">
                    <div className="game-grid">{puzzle}</div>
                    <div className="button-group flex justify-space-between">
                        <p className="menu-link pointer">Submit</p>
                        <p className="menu-link pointer" onClick={giveUp}>
                            Give Up
                        </p>
                    </div>
                </div>
            ) : (
                <div className="align-center">
                    <img className="zombie-loader" src={zombieLoader} />
                    <p className="zombie-text m-t-m">Loading...</p>
                </div>
            )}
        </div>
    );
};

export default Game;
