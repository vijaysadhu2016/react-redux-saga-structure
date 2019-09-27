import { combineReducers } from "redux";

import PaginationReducer from "./paginationApi";

/*combine all reducers*/
const reducers = combineReducers({
    PaginationReducer
});

export default reducers;
