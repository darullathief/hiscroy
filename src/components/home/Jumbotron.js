import {StyleSheet, css} from "aphrodite";
import OutlinedButton from "../button/OutlinedButton";
import PrimaryButton from "../button/PrimaryButton";
import bgBambu from "../../assets/images/bgBambu.png"




function Jumbotron(props) {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: "#3A1817",
            width: "100vw",
            height: "90vh",
            padding: "48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
        },
        jumboText: {
            width: "60%",

        },
        jTitle: {
            fontSize: "80px",
            fontWeight: "bold",
            color: "#F9DECD",
        },
        jDesc: {
            fontSize: "24px",
            color: "#F9DECD",
            marginTop: "16px",
        },
        btnGroup: {
            width: "60%",
            marginTop: "24px",
            display: "flex",
            gap: "24px",
        },
        jumboImage: {
            position: "absolute",
            right: "-150px",
            bottom: "-200px",
        },
        image: {
            width: "55vw",
        }
    });




    return (
        <div className={css(styles.container)}>
            <div className={css(styles.jumboText)}>
                <h1 className={css(styles.jTitle)}>Sejarah Adalah </h1>
                <h1 className={css(styles.jTitle)}>Kompas Masa Depan </h1>
                <p className={css(styles.jDesc)}>Sejarah bagaikan kompas yang menuntun langkah di masa kini menuju masa depan yang lebih baik.</p>

                <div className={css(styles.btnGroup)}>
                    <PrimaryButton title="Artikel Terbaru" />
                    <OutlinedButton title="Jelajahi Artikel" />
                </div>
            </div>
            <div className={css(styles.jumboImage)}>
                <img src={bgBambu} className={css(styles.image)}></img>
            </div>
        </div>
    )
}

export default Jumbotron;