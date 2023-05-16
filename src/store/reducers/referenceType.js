import { combineReducers } from 'redux';
import {
    FETCH_REFERENCESTYPE_SUCCESS,
    FETCH_REFERENCESTYPE_REQUEST,
    FETCH_REFERENCESTYPE_FAILURE
} from './../const';

const items = (state = [], action) => {
    switch (action.type) {
        case FETCH_REFERENCESTYPE_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case FETCH_REFERENCESTYPE_REQUEST:
            return true;
        case FETCH_REFERENCESTYPE_SUCCESS:
        case FETCH_REFERENCESTYPE_FAILURE:
            return false;
        default:
            return state;
    }
};

const error = (state = null, action) => {
    switch (action.type) {
        case FETCH_REFERENCESTYPE_FAILURE:
            return action.payload;
        case FETCH_REFERENCESTYPE_REQUEST:
        case FETCH_REFERENCESTYPE_SUCCESS:
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