
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import Carousel  from './Carousel';

const mockStore = configureMockStore();
const store = mockStore({});

const COMPONENT = 'Carousel';

describe(`>>> ${COMPONENT}`, () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Provider store={store}>
                <Carousel />
            </Provider>
        );
    });

    it('Snapshot test', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render without throwing an error', () => {
        expect(wrapper.exists(COMPONENT)).toBe(true);
    });
    it('should render a dump version', () => {
        expect(wrapper.length).toEqual(1);
    });
});
