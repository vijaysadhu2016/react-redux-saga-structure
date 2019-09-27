import { all, put, takeEvery } from 'redux-saga/effects';
import axios from "axios";

import {CALL_API, CHANGE_PAGE} from "../constants";
import {callAPI, callAPISuccessfully} from '../actions'

function* callApi(action){
    try {
        const res = yield axios.get(`https://randomuser.me/api/?page=${action.payload}&results=10&seed=abc`);
        /*call action after api response*/
        yield put(callAPISuccessfully(res.data.results));
    } catch (error) {
        console.error(error);
    }
}

function* changePage(action){
    try {
        /*call action*/
        yield put(callAPI(action.payload));
    } catch (e) {
        console.log(e);
    }
}

/*watch function for api*/
export function* watchCustomCallApi() {
    yield takeEvery(CALL_API, callApi)
}

/*watch function for page change*/
export function* watchChangePage() {
    yield takeEvery(CHANGE_PAGE, changePage)
}

export default function* rootSaga() {
    yield all([
        watchCustomCallApi(),
        watchChangePage()
    ]);
}
