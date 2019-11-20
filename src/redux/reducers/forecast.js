import {
    GET_FORECAST,
    SET_FORECAST,
    SET_CITY
} from '../ActionTypes';

const initialState = {
    forecast: [],
    city: {}
};

export function forecast(state = initialState, action) {
    switch (action.type) {
        case GET_FORECAST:
            return {
                ...state
            };
        case SET_FORECAST:
            return {
                ...state,
                forecast: action.forecast
            };
        case SET_CITY:
            return {
                ...state,
                city: action.city
            };
        default:
            return state;
    }
}

export default forecast;
