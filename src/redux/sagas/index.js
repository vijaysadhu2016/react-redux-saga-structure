import { all } from "redux-saga/effects";

import PaginationSaga from './paginationApi';

/*combine all sagas in root saga*/
export default function* rootSaga(getState) {
    yield all([
        PaginationSaga()
    ]);
}
