import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Register from '../views/register.view';

describe('Register', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store: any, wrapper;

    it('renders login without crash', () => {
        expect(
            <Provider store={store}>
                <Register />
            </Provider>
        );
    });
});
