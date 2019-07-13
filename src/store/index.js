/**
 * Created By Sanjay 
 * Created Date 13/07/2019
 * Store for React with Redux 
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from '../reducers';
import RootSaga from "../sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export function configureStore(initialState) {

    const store = createStore(
        reducers,        
        initialState,
        composeWithDevTools(compose(applyMiddleware(...middlewares))),
    );

    sagaMiddleware.run(RootSaga);

    return store;
}

