import axios from "axios";
import cookies from "browser-cookies";
import {
    LOGIN_INIT,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR
} from "../constants";

// Helpers 
import history from "../helpers/history"
const API_URL = process.env.API_URL;

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    axios
        .post(`${API_URL}/getUser`, {}, configHeaders(getState))
        .then((res) => {
            if (res.data) {
                localStorage.setItem('user', JSON.stringify(res.data));
                // Redirect to Dashboard
                history.push("/dashboard");
            }
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: AUTH_ERROR,
            });

        });
};

export const register = ({ email, password }) => (dispatch) => {
    //  Headers
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    // Body
    const body = JSON.stringify({ email, password });

    axios
        .post(`${API_URL}/auth/register`, body, config)
        .then((res) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            });

            dispatch(loadUser());
            history.push("/");
        })
        .catch((error) => {
            error.response.data.errors.forEach(err => {
                dispatch(
                    returnErrors(err.msg, error.response.status, "error")
                );
            });
            dispatch({
                type: REGISTER_FAIL,
            });
        });
};

export const login = ({ userName, password }) => (dispatch) => {
    console.log('email:');
    dispatch({ type: LOGIN_INIT });
    //  Headers
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    axios
        .post(`${API_URL}/login?userName=${userName}&password=${password}`, {})
        .then((res) => {
            console.log('res: ', res);
            if (res.data) {
                const token = res.data['access_token'];
                cookies.set('token', token);
                // history.push("/dashboard");
            }

            // Load Me 
            dispatch(loadUser());

            // Redirect to Dashboard
            // history.push("/dashboard");
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });

        })
        .catch((error) => {
            console.log('error: ', error);
            dispatch({
                type: LOGIN_FAIL,
            });
        });
};

export const logOut = () => (dispatch) => {
    dispatch({
        type: LOGOUT_SUCCESS,
    });
    dispatch({
        type: SET_USER_DETAILS,
        payload: null
    })
    history.push("/");
};



export const configHeaders = (getState) => {
    // Token
    const token = cookies.get('token');

    //  Headers
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    if (token) {
        config.headers["Authorization"] = token;
    }

    return config;
};

export const configHeadersFromCookies = (getState) => {
    // Token
    const token = cookies.get('token');

    //  Headers
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    if (token) {
        config.headers["Authorization"] = token;
    }

    return config;
};
