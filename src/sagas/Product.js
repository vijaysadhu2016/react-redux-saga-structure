/**
 * Created By Sanjay 
 * Created Date 13-07-2019
 * Saga File For Product CRUD 
 */

import { all, fork, put, takeEvery } from 'redux-saga/effects';

import {
    PRODUCT_REMOVE
} from "../actions/types";

import {
    productRemoveSuccess,
    productRemoveFailure
} from "../actions";

function* productRemove({ Payload }) {
    try {
        yield put(productRemoveSuccess());
    } catch (error) {
        yield put(productRemoveFailure());
    }
}

export function* watchProductRemove() {
    yield takeEvery(PRODUCT_REMOVE, productRemove)
}

export default function* rootSaga() {
    yield all([
        fork(watchProductRemove)
    ]);
}