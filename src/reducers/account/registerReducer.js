import {
    REGISTER_SUCCESS,
    REGISTER_PENDING,
    REGISTER_ERROR
} from "../../actions/account/registerAction";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export function registerUser(state = initialState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                loggingIn: true,
            }
        case REGISTER_PENDING:
            return {
                loggingIn: true,
                user: action.data
            }
        case REGISTER_ERROR:
            return {}
        default:
            return state
    }
}