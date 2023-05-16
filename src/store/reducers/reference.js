import { combineReducers } from 'redux';
import {
    FETCH_REFERENCES_SUCCESS,
    FETCH_REFERENCES_REQUEST,
    FETCH_REFERENCES_FAILURE
} from './../const';

const items = (state = [], action) => {
    switch (action.type) {
        case FETCH_REFERENCES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case FETCH_REFERENCES_REQUEST:
            return true;
        case FETCH_REFERENCES_SUCCESS:
        case FETCH_REFERENCES_FAILURE:
            return false;
        default:
            return state;
    }
};

const error = (state = null, action) => {
    switch (action.type) {
        case FETCH_REFERENCES_FAILURE:
            return action.payload;
        case FETCH_REFERENCES_REQUEST:
        case FETCH_REFERENCES_SUCCESS:
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