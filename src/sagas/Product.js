/**
 * Created By Sanjay 
 * Created Date 13-07-2019
 * Saga File For Product CRUD 
 */

import { all, fork, put, takeEvery } from 'redux-saga/effects';

import {
    PRODUCT_REMOVE,
    ADD_PRODUCT,
    EDIT_PRODUCT
} from "../actions/types";

import {
    productRemoveSuccess,
    productRemoveFailure,
    productAddSuccess,
    productAddFailure,
    productEditSuccess,
    productEditFailure
} from "../actions";

function* productRemove({ Payload }) {
    try {
        yield put(productRemoveSuccess());
    } catch (error) {
        yield put(productRemoveFailure());
    }
}

function* productAdd({ Payload }) {
    try {
        yield put(productAddSuccess());
    } catch (error) {
        yield put(productAddFailure())
    }
}

function* productEdit({Payload}){
    try{
        yield put(productEditSuccess());
    } catch (error) {
        yield put(productEditFailure())
    }
}

export function* watchProductRemove() {
    yield takeEvery(PRODUCT_REMOVE, productRemove)
}

export function* watchProductAdd() {
    yield takeEvery(ADD_PRODUCT, productAdd)
}

export function* watchProductEdit() {
    yield takeEvery(EDIT_PRODUCT, productEdit)
}

export default function* rootSaga() {
    yield all([
        fork(watchProductRemove),
        fork(watchProductAdd),
        fork(watchProductEdit)
    ]);
}