import cookies from "browser-cookies";
import {
    USER_LOADED,
    USER_LOADING,
    LOGIN_INIT,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
} from "../constants/index";

const initState = {
    token: cookies.get("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    userDetails: {}
};

export default function (state = initState, action) {
    const { type, payload } = action;
    switch (type) {
        case USER_LOADING:
        case LOGIN_INIT:
            return {
                ...state,
                isLoading: true,
            };

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: payload,
            };

        case LOGIN_SUCCESS:
            // cookies.set("token", payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                isLoading: false,
            };

        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            cookies.erase("token");
            localStorage.clear();
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: false,
                user: null,
            };

        default:
            return state;
    }
}
