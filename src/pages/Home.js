import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions/account/loginAction";
import { StyleSheet, css } from "aphrodite";
import Navbar from "../components/nav/Navbar";

function Home(props) {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: "#BA5F3B",
            width: "100%",
            minHeight: "200vh",
            position: "relative",
        }
    })
    const {loggedIn} = props;
    
    return (
        <div className={css(styles.container)}>
            <Navbar loggedIn={loggedIn} />
        </div>
    )
}

function mapStateToProps({authentication}) {
    return {
        loggedIn: authentication.loggedIn,
    };
  }
  
  export default connect(mapStateToProps, {login})((Home));