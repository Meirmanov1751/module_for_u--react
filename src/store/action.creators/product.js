import {
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    FETCH_PRODUCT_REQUEST
} from './../const';
import instance from "../api";

export const fetchProductRequest = () => ({
    type: FETCH_PRODUCT_REQUEST,
});

export const fetchProductSuccess = (order) => ({

    type: FETCH_PRODUCT_SUCCESS,
    payload: order,
});

export const fetchProductFailure = (error) => ({
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
});

export const fetchProduct = () => async (dispatch) => {
    dispatch(fetchProductRequest());

    try {
        const response = await instance.get(`/api/product/product/`);
        // const data = await response.json();
        // console.log(data)

        dispatch(fetchProductSuccess(response.data.results));

    } catch (error) {
        if (error.response && error.response.status === 401) {
            // window.location.href = '/login';
        } else {
            console.log('Произошла ошибка:', error.message);
        }
        dispatch(fetchProductFailure(error));
    }
};