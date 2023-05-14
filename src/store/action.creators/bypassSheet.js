import {
    FETCH_ORDER_SUCCESS,
    FETCH_ORDER_FAILURE,
    FETCH_ORDER_REQUEST
} from './../const';
import instance from "../api";

export const fetchOrderRequest = () => ({
    type: FETCH_ORDER_REQUEST,
});

export const fetchOrderSuccess = (order) => ({

    type: FETCH_ORDER_SUCCESS,
    payload: order,
});

export const fetchOrderFailure = (error) => ({
    type: FETCH_ORDER_FAILURE,
    payload: error,
});

export const fetchOrder = () => async (dispatch) => {
    dispatch(fetchOrderRequest());

    try {
        const response = await instance.get(`/api/order/order/`);
        // const data = await response.json();
        // console.log(data)

        dispatch(fetchOrderSuccess(response.data.results));

    } catch (error) {
        dispatch(fetchOrderFailure(error));
    }
};