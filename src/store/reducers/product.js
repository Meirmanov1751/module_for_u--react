import { combineReducers } from 'redux';
import {
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    FETCH_PRODUCT_REQUEST
} from './../const';

const items = (state = [], action) => {
    switch (action.type) {
        case FETCH_PRODUCT_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return true;
        case FETCH_PRODUCT_SUCCESS:
        case FETCH_PRODUCT_FAILURE:
            return false;
        default:
            return state;
    }
};

const error = (state = null, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_FAILURE:
            return action.payload;
        case FETCH_PRODUCT_REQUEST:
        case FETCH_PRODUCT_SUCCESS:
            return null;
        default:
            return state;
    }
};

export default combineReducers({
    items,
    isFetching,
    error,
});