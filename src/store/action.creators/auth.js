import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./../const";

import AuthService from "../../service/AuthService";

export const register = (email, password) => (dispatch) => {
    debugger
    return AuthService.registration(email, password).then(
        (response) => {
            debugger
            dispatch({
                type: REGISTER_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const login = (email, password) => {
    return (dispatch) => {
        debugger
        return AuthService.login(email, password).then(

                (data) => {
                    AuthService.getUserInfo().then(
                        (data) => {
                            debugger
                            localStorage.setItem('user', JSON.stringify(data.data))

                            dispatch({
                                type: LOGIN_SUCCESS,
                                payload: {user: data.data},
                            })
                        }
                )



                    return Promise.resolve();
                },
                (error) => {
                    const message =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    dispatch({
                        type: LOGIN_FAIL,
                    });

                    dispatch({
                        type: SET_MESSAGE,
                        payload: message,
                    });

                    return Promise.reject();
                }
            );
    };
};

export const logout = () => (dispatch) => {
    AuthService.logout();
    debugger
    dispatch({
        type: LOGOUT,
    });
};