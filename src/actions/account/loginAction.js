import Api from "../Api";
import { actionSuccess, actionPending, actionError } from "..";
import { useNavigate } from 'react-router-dom';
export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

const LOGIN_URL = "auth/login";
const LOGOUT_URL = "auth/logout";

export function login(username, password, navigate) {
    return (dispatch) => {
        dispatch(actionPending(LOGIN_PENDING));
        Api.post(LOGIN_URL, { username, password })
            .then((user) => {
                dispatch(actionSuccess(LOGIN_SUCCESS, user.data));
                localStorage.setItem('user_hiscroy', JSON.stringify(user.data));
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                dispatch(actionError(LOGIN_ERROR));
            })
    };
}