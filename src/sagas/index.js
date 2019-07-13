/**
 * Created By Sanjay 
 * Created Date 13-07-2019
 * Index file of Saga 
 */

import { all } from "redux-saga/effects";

import ProductSaga from './Product';

export default function* rootSaga(getState) {
    yield all([
        ProductSaga()
    ]);
}