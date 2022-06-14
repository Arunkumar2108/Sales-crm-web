import axios from "axios";
import cookies from "browser-cookies";
import {
    COMPANY_SUCCESS,
    COMPANY_FAIL
} from "../constants";

// Helpers 
import history from "../helpers/history"
const API_URL = process.env.API_URL;

export const CompanyCreate = (body) => (dispatch, getState) => {

    //  Headers
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    axios
        .post(`${API_URL}/api/v1/company/create`, body, config)
        .then((res) => {
            console.log('res: ', res);
            // dispatch({
            //     type: COMPANY_SUCCESS,
            //     payload: res.data,
            // });
            // history.push("/company");
        })
        .catch((error) => {

            dispatch({
                type: COMPANY_FAIL,
            });
        });

}