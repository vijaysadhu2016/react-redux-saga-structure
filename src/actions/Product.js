/**
 * Created By Sanjay 
 * Created Date 13-07-2019
 * Action File For Prtoduct Table CRUD
 */

import {
    PRODUCT_REMOVE,
    PRODUCT_REMOVE_SUCCESS,
    PRODUCT_REMOVE_FAILURE,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_FAILURE
} from './types';

//Action creator for Product Delete  
export const productRemove = req => ({
    type: PRODUCT_REMOVE,
    payload: req
})
export const productRemoveSuccess = res => ({
    type: PRODUCT_REMOVE_SUCCESS,
    payload: res
})
export const productRemoveFailure = err => ({
    type: PRODUCT_REMOVE_FAILURE,
    payload: err
})

//Action creator for Product Add 
export const productAdd = req => ({
    type: ADD_PRODUCT,
    payload: req
})
export const productAddSuccess = res => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: res
})
export const productAddFailure = err => ({
    type: ADD_PRODUCT_FAILURE,
    payload: err
})

//Action creator for Poduct Edit/Update
export const productEdit = req => ({
    type: EDIT_PRODUCT,
    payload: req
})
export const productEditSuccess = res => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: res
})
export const productEditFailure = err => ({
    type: EDIT_PRODUCT_FAILURE,
    payload: err
})