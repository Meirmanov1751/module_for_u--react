import { combineReducers } from 'redux';
import {
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_REQUEST,
} from './../const';

const items = (state = [], action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return true;
        case FETCH_POSTS_SUCCESS:
        case FETCH_POSTS_FAILURE:
            return false;
        default:
            return state;
    }
};

const error = (state = null, action) => {
    switch (action.type) {
        case FETCH_POSTS_FAILURE:
            return action.payload;
        case FETCH_POSTS_REQUEST:
        case FETCH_POSTS_SUCCESS:
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