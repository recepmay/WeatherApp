import * as types from '../ActionTypes';

export const setTemperatureAct = temp => ({
    type: types.SET_TEMPERATURE,
    temp: temp
});
