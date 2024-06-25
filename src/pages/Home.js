import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions/account/loginAction";
import { StyleSheet, css } from "aphrodite";
import Navbar from "../components/nav/Navbar";
import Jumbotron from "../components/home/Jumbotron";

function Home(props) {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: "#210F0F",
            width: "100%",
            minHeight: "200vh",
            position: "relative",
        }
    })
    const {loggedIn} = props;
    
    return (
        <div className={css(styles.container)}>
            <Navbar loggedIn={loggedIn} />
            <Jumbotron />
        </div>
    )
}

function mapStateToProps({authentication}) {
    return {
        loggedIn: authentication.loggedIn,
    };
  }
  
  export default connect(mapStateToProps, {login})((Home));