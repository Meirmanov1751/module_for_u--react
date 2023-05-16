import {
    FETCH_REFERENCES_SUCCESS,
    FETCH_REFERENCES_REQUEST,
    FETCH_REFERENCES_FAILURE
} from './../const';
import instance from "../api";

export const fetchReferenceRequest = () => ({
    type: FETCH_REFERENCES_REQUEST,
});

export const fetchReferenceSuccess = (reference) => ({

    type: FETCH_REFERENCES_SUCCESS,
    payload: reference,
});

export const fetchReferenceFailure = (error) => ({
    type: FETCH_REFERENCES_FAILURE,
    payload: error,
});

export const fetchReference = () => async (dispatch) => {
    dispatch(fetchReferenceRequest());

    try {
        const response = await instance.get(`/api/reference/reference/`);
        // const data = await response.json();
        // console.log(data)

        dispatch(fetchReferenceSuccess(response.data.results));
    } catch (error) {
        if (error.response && error.response.status === 401) {
            // window.location.href = '/login';
        } else {
            console.log('Произошла ошибка:', error.message);
        }
        dispatch(fetchReferenceFailure(error));
    }
};