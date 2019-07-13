/**
 * Created By Sanjay 
 * Created Date 13-07-2019
 * Action File For Prtoduct Table CRUD
 */

import {
    PRODUCT_REMOVE,
    PRODUCT_REMOVE_SUCCESS,
    PRODUCT_REMOVE_FAILURE
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