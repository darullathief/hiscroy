import {StyleSheet, css} from "aphrodite"

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    checkmark: {
        appearance: "auto",
        width: "24px",
        height: "24px",
        border: "none",
        accentColor: "#BA5F3B",
        colorScheme: "dark",
    },
    label: {
        color: "#F9DECD",
        textAlign: "center",
        marginLeft: "8px",
    }
})
function Checkbox(props) {
    return (
        <div className={css(styles.container)}>
            <input type="checkbox" className={css(styles.checkmark)}></input>
            <label className={css(styles.label)}>{props.label}</label>
        </div>
    )
}

export default Checkbox;