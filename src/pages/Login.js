import TextField from "../components/form/TextField";
import {StyleSheet, css} from "aphrodite"
import { useState } from "react";
import PrimaryButton from "../components/button/PrimaryButton";
import Checkbox from "../components/form/Checkbox";
import { login } from "../actions/account/loginAction";
import {connect} from 'react-redux';
import Api from "../actions/Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login(props) {

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
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(username, password,navigate);
    }
    return (
        <div className={css(styles.container)}>
            <div
                className={css(styles.loginBox)}
            >
                <span className={css(styles.divider)}></span>
                <div className={css(styles.loginTitle)}>
                    <h2>Login</h2>
                    <p>Masuk dengan akun anda</p>
                </div>
                <form className={css(styles.formGroup)} onSubmit={(e) => handleSubmit(e)}>
                    <TextField 
                        type="text"
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    <TextField 
                        type="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    <Checkbox 
                        label="Remember Me"/>
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


function mapStateToProps({ authentication: { loggingIn } }) {
    return {
      loggingIn,
    };
  }
  
  export default connect(mapStateToProps, {login})((Login));