import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import defaultSagas from './sagas/index';
import forecastSaga from './sagas/forecast';

// creating saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// mounting it on the Store
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
export default store;

sagaMiddleware.run(defaultSagas);
sagaMiddleware.run(forecastSaga);