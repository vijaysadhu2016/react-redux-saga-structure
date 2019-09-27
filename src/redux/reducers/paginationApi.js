import {
    CALL_API_SUCCESSFULLY, CHANGE_PAGE
} from "../constants";

/*initial state*/
const INITIAL_STATE = {
    data: [],
    page: 1
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CALL_API_SUCCESSFULLY:
            return { ...state, data: action.payload };
        case CHANGE_PAGE:
            return { ...state, page: action.payload };
        default:
            return state;
    }
}
