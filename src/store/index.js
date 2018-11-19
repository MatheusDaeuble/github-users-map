import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import redurces from './redurces';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
];

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createAppropriateStore (redurces, applyMiddleware(...middleware));

sagaMiddleware.run(sagas);

export default store;
