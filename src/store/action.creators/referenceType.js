import {
    FETCH_REFERENCESTYPE_SUCCESS,
    FETCH_REFERENCESTYPE_REQUEST,
    FETCH_REFERENCESTYPE_FAILURE,
} from './../const';
import instance from "../api";

export const fetchReferenceTypeRequest = () => ({
    type: FETCH_REFERENCESTYPE_REQUEST,
});

export const fetchReferenceTypeSuccess = (reference) => ({

    type: FETCH_REFERENCESTYPE_SUCCESS,
    payload: reference,
});

export const fetchReferenceTypeFailure = (error) => ({
    type: FETCH_REFERENCESTYPE_FAILURE,
    payload: error,
});

export const fetchReferenceType = () => async (dispatch) => {
    dispatch(fetchReferenceTypeRequest());

    try {
        const response = await instance.get(`/api/referenceType/referenceType/`);
        // const data = await response.json();
        dispatch(fetchReferenceTypeSuccess(response.data.results));
    } catch (error) {
        if (error.response && error.response.status === 401) {
            window.count = 1;
       } else {
            console.log('Произошла ошибка:', error.message);
        }
        dispatch(fetchReferenceTypeFailure(error));
    }
};