import { actionError, actionPending, actionSuccess } from "..";
import Api from "../Api";

const registerUrl = "auth/register";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_PENDING = "REGISTER_PENDING"
export const REGISTER_ERROR = "REGISTER_ERROR"

export function register(formData, navigate) {
    return (dispath) => {
        dispath(actionPending(REGISTER_PENDING));
        Api.post(registerUrl, {
            username: formData.username ,
            name: formData.name ,
            email: formData.email ,
            password: formData.password ,
            confirm_password: formData.confirmPassword ,
         })
            .then((user) => {
                dispath(actionSuccess(REGISTER_SUCCESS))
                console.log("Register Success");
                localStorage.setItem('user_hiscroy', JSON.stringify(user.data));
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                dispath(actionError(REGISTER_ERROR))

            })
    }
}