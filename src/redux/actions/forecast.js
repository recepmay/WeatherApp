import * as types from '../ActionTypes';

export const getForecastAct = () => ({
    type: types.GET_FORECAST
});

export const setForecastAct = forecast => ({
    type: types.SET_FORECAST,
    forecast: forecast
});

export const setCityAct = city => ({
    type: types.SET_CITY,
    city: city
});
