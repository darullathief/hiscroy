import {StyleSheet,css  } from "aphrodite";

function TextField(props) {
    const styles = StyleSheet.create({
        inputText:{
            backgroundColor: "#702826",
            border: "2px solid #BA5F3B",
            borderRadius: "10px",
            padding: "12px 16px 14px",
            margin: "10px auto",
            color: "#F9DECD",
            fontSize: "20px",
            ':focus' : {
                borderColor: "#FF4901",
            }

        }
    })
    return (
        <input 
            type={props.type}
            placeholder={props.label}
            value={props.value}
            onChange={props.onChange}
            className={css(styles.inputText)}
            ></input>
    )
}

export default TextField;