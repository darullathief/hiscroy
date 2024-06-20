import {
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
} from "../../actions/account/loginAction";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case LOGIN_PENDING:
            return {
                loggingIn: true,
            };
        case LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.data,
            };
        case LOGIN_ERROR:
            return {};
        default:
            return state;
    }
}
