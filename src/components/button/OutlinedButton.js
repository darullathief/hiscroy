import { StyleSheet, css } from "aphrodite";



function OutlinedButton(props) {

    const styles = StyleSheet.create({
        outlinedButtonText: {
            fontWeight: "bold",
            fontSize: "18px",
        },
        outlinedButton: {
            display: "block",
            width: "100%",
            padding: "12px",
            margin: "10px auto",
            borderRadius: "15px",
            border: "4px solid #BA5F3B",
            ':hover': {
                borderColor: "#702826",
            }
        }
    })

    return (
        <button
            className={css(styles.outlinedButton)}
            onClick={props.onClick}
        >
            <p className={css(styles.outlinedButtonText)}>{props.title}</p>
        </button>
    );
}

export default OutlinedButton;
