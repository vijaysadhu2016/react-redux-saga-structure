import {
    CALL_API,
    CALL_API_SUCCESSFULLY,
    CHANGE_PAGE
} from '../constants';

export const callAPI = (payload) => ({
    type: CALL_API,
    payload
});

export const callAPISuccessfully = (payload) => ({
    type: CALL_API_SUCCESSFULLY,
    payload
});

export const changePage = (payload) => {
    return {
        type: CHANGE_PAGE,
        payload
    }
};
