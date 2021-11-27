import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

//Store
import rootReducer from './reducers/index';
const logger = (store: any) => (next: any) => (action: any) => {
    console.log(action);
    console.log(store.getState());
    next(action);
};

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
);

store.subscribe(() => {
    console.log('Store changed', store.getState());
});

// Styles
import './styles/base.scss';

// Layout
import Auth from './layout/auth.layout';

// Pages
import Register from './views/register.view';
import Login from './views/login.view';
import About from './views/about.view';
import Menu from './views/menu.view';
import Leaderboard from './views/leaderboard.view';
import History from './views/history.view';
import Start from './views/start.view';
import Game from './views/game.view';
import Results from './views/results.view';
import NoPage from './views/nopage.view';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Auth>
                    <Routes>
                        <Route path="/">
                            <Route path="login" element={<Login />} />
                            <Route path="about" element={<About />} />
                            <Route path="register" element={<Register />} />
                            <Route path="menu" element={<Menu />} />
                            <Route
                                path="leaderboard"
                                element={<Leaderboard />}
                            />
                            <Route path="history" element={<History />} />
                            <Route path="start" element={<Start />} />
                            <Route path="game" element={<Game />} />
                            <Route path="results" element={<Results />} />
                            <Route path="*" element={<NoPage />} />
                        </Route>
                    </Routes>
                </Auth>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
