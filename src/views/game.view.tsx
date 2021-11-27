import React, { useEffect, useState } from 'react';
import zombieSolve from '../assets/zombie-menu.gif';
import { useNavigate } from 'react-router-dom';
import firebase from '../services/firebase.service';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import api from '../services/axios.service';
import moment from 'moment';
import actions from '../actions';
import encodeParams from '../utilities/encode.utility';
import Loader from '../components/Loader.component';

const Game = () => {
    const authState = useSelector((state: any) => state.auth);
    const userState = useSelector((state: any) => state.user);
    const gameState = useSelector((state: any) => state.game);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const startDateTime = moment().format();

    // Game Start
    const points: any = {
        easy: 1,
        medium: 2,
        hard: 3,
    };
    const r = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    const [validating, setValidating] = useState<boolean>(false); // For loader on submit status
    const [startPuzzle, setStartPuzzle] = useState<any>(null); // represents the hash object from spekit endpoint
    const [gameStartArray, setGameStartArray] = useState<any>(null); // Represents the Array we convert and use for 'solve' endpoint
    const [gameArray, setGameArray] = useState<any>([
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]); // Holds default value for gameArray, which is edited when input is changed - used this vs hash, becuase 'validate' endpoint wants array. faster than recreating array on each submit.
    const [solved, setSolved] = useState<boolean>(false); // Triggers values and render when solve is hit.

    const submit = async () => {
        // Use Loader
        setValidating(true);
        try {
            const resp: any = await axios.post(
                'https://sugoku.herokuapp.com/validate',
                encodeParams({
                    board: gameArray,
                })
            );
            if (resp.data.status == 'unsolved') {
                dispatch(actions.game.setStatus('lost'));
            } else {
                dispatch(actions.game.setStatus('won'));
                // Update Firebase Points
                // Get and update
                await firebase
                    .database()
                    .ref('/users/' + authState.uuid + '/score')
                    .set(userState.data.score + points[gameState.difficulty]);
                // Log Game History
                const endDateTime = moment().format();
                await firebase
                    .database()
                    .ref('games/' + authState.uuid)
                    .push({
                        start: startDateTime,
                        end: endDateTime,
                        unix: moment().unix(),
                        status: 'won',
                        difficulty: gameState.difficulty,
                        points: points[gameState.difficulty],
                        game: gameArray,
                    });
            }
            navigate('/results');
        } catch (error: any) {
            alert('Unexpected Error Occurred.');
        }
    };

    const solve = async () => {
        if (validating) {
            return;
        }
        try {
            const resp: any = await axios.post(
                'https://sugoku.herokuapp.com/solve',
                encodeParams({
                    board: gameStartArray,
                })
            );
            setGameArray([...resp.data.solution]);
            setSolved(true);
        } catch (error: any) {
            alert('Unexpected Error.');
        }
    };

    const giveUp = async () => {
        const endDateTime = moment().format();
        dispatch(actions.game.setStatus('lost'));
        await firebase
            .database()
            .ref('games/' + authState.uuid)
            .push({
                start: startDateTime,
                end: endDateTime,
                unix: moment().unix(),
                status: 'lost',
                difficulty: gameState.difficulty,
                points: 0,
                game: gameArray,
            });
        navigate('/results');
    };

    const generateStartGame = (puzzle: any) => {
        const sgrid: any = [];
        r.map((letter) => {
            sgrid.push([]);
            for (let c = 1; c < 10; c++) {
                sgrid[r.indexOf(letter)][c - 1] =
                    Number(puzzle[letter + c]) || 0;
            }
        });
        setGameStartArray(sgrid); // the Start Value for solving later
    };

    const getPuzzle = async () => {
        try {
            const startGrid = await api.get(
                '/generate?difficulty=' + gameState.difficulty
            );
            setStartPuzzle(startGrid.data.puzzle);
            generateStartGame(startGrid.data.puzzle);
        } catch (error) {
            alert('Problem initializing puzzle.');
        }
    };

    useEffect(() => {
        getPuzzle();
    }, []);

    return (
        <div className="game-view">
            <div className="view-header">
                <div className="zombie-solve pointer" onClick={solve}>
                    <img src={zombieSolve} />
                </div>
                <div className="view-title-container mt-n-m">
                    <h1 className="zombie-title">Zombie Sudoku</h1>
                </div>
            </div>
            <div className="solved">
                {startPuzzle && !validating ? (
                    <div className="grid-container">
                        <div className="game-grid">
                            {r.map((letter) => {
                                const col = [];
                                for (let c = 1; c < 10; c++) {
                                    col.push(
                                        <div
                                            className="sudoku-block"
                                            key={letter + c}
                                        >
                                            <input
                                                className="sudoku-input"
                                                type="number"
                                                value={
                                                    solved
                                                        ? gameArray[
                                                              r.indexOf(letter)
                                                          ][c - 1]
                                                        : startPuzzle[
                                                              letter + c
                                                          ]
                                                }
                                                maxLength={1}
                                                onChange={(event: any) => {
                                                    const g = [...gameArray];
                                                    g[r.indexOf(letter)][
                                                        c - 1
                                                    ] = Number(
                                                        event.target.value
                                                    );
                                                    setGameArray(g);
                                                }}
                                                disabled={
                                                    startPuzzle[letter + c] ||
                                                    solved
                                                }
                                            />
                                        </div>
                                    );
                                }
                                return (
                                    <div className="sudoku-row" key={letter}>
                                        {col}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="button-group flex justify-space-between">
                            <p className="menu-link pointer" onClick={submit}>
                                Submit
                            </p>
                            <p className="menu-link pointer" onClick={giveUp}>
                                Give Up
                            </p>
                        </div>
                    </div>
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
};

export default Game;
