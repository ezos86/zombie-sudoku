import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import './App.css';

// Styles
import './styles/base.scss';

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

// Pages
import Login from './views/login.view';
import About from './views/about.view';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
