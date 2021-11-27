import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import History from '../views/history.view';

describe('History', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store: any, wrapper;

    it('renders login without crash', () => {
        expect(
            <Provider store={store}>
                <History />
            </Provider>
        );
    });
});
