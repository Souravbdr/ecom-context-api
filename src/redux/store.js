import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root.saga';

const sagaMiddleWares = createSagaMiddleWare();

const middlewares = [sagaMiddleWares];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleWares.run(rootSaga);

export const persistor = persistStore(store);