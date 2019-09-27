import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from '../reducers';
import RootSaga from "../sagas";

/*create saga middleware*/
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export function configureStore(initialState) {

    /*create store*/
    const store = createStore(
        reducers,        
        initialState,
        /*add devtool(extension)*/
        composeWithDevTools(compose(applyMiddleware(...middleware))),
    );

    sagaMiddleware.run(RootSaga);

    return store;
}
