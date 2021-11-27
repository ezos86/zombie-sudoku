import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import About from '../views/about.view';
import profile from '../assets/profile.jpeg';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate,
}));

describe('About', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store: any, wrapper;

    it('renders without crash', () => {
        expect(
            <Provider store={store}>
                <About />
            </Provider>
        );
    });

    it('renders image', () => {
        const AboutPage = shallow(<About />);
        expect(AboutPage.find('img').prop('src')).toEqual(profile);
    });
});
