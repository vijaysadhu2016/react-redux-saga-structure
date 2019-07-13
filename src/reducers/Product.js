/**
 * Create By Sanjay 
 * Created Date 13-07-2019
 * Reducer For Product CRUD
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
} from "../actions/types";

const INITIAL_STATE = {
    loading: false,
    deleteProduct: {},
    addProduct: {},
    editProduct: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PRODUCT_REMOVE:
            return { ...state, loading: true }
        case PRODUCT_REMOVE_SUCCESS:
            return { ...state, loading: false, deleteProduct: { ReturnCode: 200, ReturnMessage: 'Delete Record Successfully' } }
        case PRODUCT_REMOVE_FAILURE:
            return { ...state, loading: false, deleteProduct: { ReturnCode: 400, ReturnMessage: 'somthing went wrong' } }
        case ADD_PRODUCT:
            return { ...state, loading: true }
        case ADD_PRODUCT_SUCCESS:
            return { ...state, loading: false, addProduct: { ReturnCode: 200, ReturnMessage: 'Add Record Successfully' } }
        case ADD_PRODUCT_FAILURE:
            return { ...state, loading: false, addProduct: { ReturnCode: 400, ReturnMessage: 'somthing went wrong' } }
        case EDIT_PRODUCT:
            return { ...state, loading: true }
        case EDIT_PRODUCT_SUCCESS:
            return { ...state, loading: false, editProduct: { ReturnCode: 200, ReturnMessage: 'Edit/Update Record Successfully' } }
        case EDIT_PRODUCT_FAILURE:
            return { ...state, loading: false, editProduct: { ReturnCode: 400, ReturnMessage: 'somthing went wrong' } }
        default:
            return state;
    }
}