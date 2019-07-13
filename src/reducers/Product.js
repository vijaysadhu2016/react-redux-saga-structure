/**
 * Create By Sanjay 
 * Created Date 13-07-2019
 * Reducer For Product CRUD
 */

import {
    PRODUCT_REMOVE,
    PRODUCT_REMOVE_SUCCESS,
    PRODUCT_REMOVE_FAILURE
} from "../actions/types";

const INITIAL_STATE = {
    loading: false,
    deleteProduct: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PRODUCT_REMOVE:
            return { ...state, loading: true }
        case PRODUCT_REMOVE_SUCCESS:
            return { ...state, loading: false, deleteProduct: { ReturnCode: 200, ReturnMessage: 'Delete Record Suucessfully' } }
        case PRODUCT_REMOVE_FAILURE:
            return { ...state, loading: false, deleteProduct: { ReturnCode: 400, ReturnMessage: 'somthing went wrong' } }
        default:
            return state;
    }
}