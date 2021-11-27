import * as React from 'react';
import Login from '../views/login.view';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Login', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store: any, wrapper;

    it('renders login without crash', () => {
        expect(
            <Provider store={store}>
                <Login />
            </Provider>
        );
    });
});
