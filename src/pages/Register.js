import TextField from "../components/form/TextField";
import { StyleSheet, css } from "aphrodite"
import { useState } from "react";
import PrimaryButton from "../components/button/PrimaryButton";
import Checkbox from "../components/form/Checkbox";
import { connect } from "react-redux";
import { register } from "../actions/account/registerAction";
import { registerUser } from "../reducers/account/registerReducer";
import { useNavigate } from "react-router-dom";



function Register(props) {

    const styles = StyleSheet.create({
        container: {
            backgroundColor: "#210F0F",
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        divider: {
            display: "block",
            backgroundColor: "#BA5F3B",
            height: "3px",
            width: "100%",
        },
        loginBox: {
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            width: "500px",
            backgroundColor: "#3A1817",
            padding: "48px"
        },
        formGroup: {
            width: "100%",
            marginTop: "24px"
        },
        loginTitle: {
            marginTop: "24px"
        },
        submitButton: {
            marginTop: "32px",
        }
    });

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
       e.preventDefault();
       
       let formData = {
        username : username,
        name : name,
        email : email,
        password : password,
        confirmPassword : confirmPassword,
       }
       props.register(formData, navigate);
       
    }
    return (
        <div className={css(styles.container)}>
            <div
                className={css(styles.loginBox)}
            >
                <span className={css(styles.divider)}></span>
                <div className={css(styles.loginTitle)}>
                    <h2>Register</h2>
                    <p>Daftarkan akun anda</p>
                </div>
                <form id="registerForm" className={css(styles.formGroup)} onSubmit={(e) => handleSubmit(e)}>
                    <TextField
                        type="text"
                        label="Username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        type="text"
                        label="Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        type="email"
                        label="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        type="password"
                        label="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        type="password"
                        label="Konfirmasi Password"
                        name="confirm_password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className={css(styles.submitButton)}>
                        <PrimaryButton
                            title="Login"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

function mapStateToProps({registerUser: {loggingIn}}){
    return {
        loggingIn
    }
}

export default connect(mapStateToProps, {register})(Register);