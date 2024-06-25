import { padding } from "@mui/system";
import { StyleSheet, css } from "aphrodite"
import { Link } from "react-router-dom";
import PrimaryButton from "../button/PrimaryButton";

function Navbar(props) {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: "#210F0F",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            height: "80px",
            zIndex: "99",
            top: 0,
        },
        linkGroup: {
            display: "flex",
            width: "30%",
            justifyContent: "flex-end",
            alignItems: "center",
        },
        linkItem: {
            color: "#F9DECD",
            fontWeight: "bold",
            marginRight: "24px",

        },
        linkButton: {
            width: "120px",
            marginRight: "24px",
        }
    })

    const { loggedIn } = props

    return (
        <div className={css(styles.container)}>
            <div></div>
            <div className={css(styles.linkGroup)}>
                <Link className={css(styles.linkItem)}>Home</Link>
                <Link className={css(styles.linkItem)}>Story</Link>
                <Link className={css(styles.linkItem)}>Series</Link>

                {loggedIn ? (
                    <Link className={css(styles.linkItem)}>Account</Link>
                ) : (
                    <div className={css(styles.linkButton)}>
                        <PrimaryButton title="Masuk" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;