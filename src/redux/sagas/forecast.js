import { call, put, takeLatest } from 'redux-saga/effects';

import {
    GET_FORECAST
} from '../ActionTypes';

import {
    setForecastAct,
    setCityAct
} from '../actions';

import {
    getForecast
} from '../../services';

function* getForecastSaga() {
    const data = yield call(getForecast);
    yield put(setForecastAct(data.list));
    yield put(setCityAct(data.city));
}

export default function* forecastSaga() {

    yield takeLatest(GET_FORECAST, getForecastSaga);
}