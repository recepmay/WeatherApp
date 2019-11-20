import {
    SET_TEMPERATURE
} from '../ActionTypes';

const initialState = {
    temp: 'Fahrenheit'
};

export function select(state = initialState, action) {
    switch (action.type) {
        case SET_TEMPERATURE:
            return {
                ...state,
                temp: action.temp
            };
        default:
            return state;
    }
}

export default select;
