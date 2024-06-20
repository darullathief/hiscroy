import { StyleSheet, css } from "aphrodite";



function PrimaryButton(props) {

    const styles = StyleSheet.create({
        primaryButtonText: {
            fontWeight: "bold",
            fontSize: "18px",
        },
        primaryButton: {
            display: "block",
            width: "100%",
            padding: "12px",
            margin: "10px auto",
            width: "100%",
            borderRadius: "15px",
            backgroundColor: "#BA5F3B",
            ':hover': {
                backgroundColor: "#702826",
            }
        }
    })

    return (
        <button
            className={css(styles.primaryButton)}
            onClick={props.onClick}
        >
            <p className={css(styles.primaryButtonText)}>{props.title}</p>
        </button>
    );
}

export default PrimaryButton;
