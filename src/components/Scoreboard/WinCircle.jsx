import styles from "./styles/WinCircle.module.css"
import { useState } from "react";

const WinCircle = (props) => {
    const [isClicked, setIsClicked] = useState(false)

    const toggle = () => {
        setIsClicked((isClicked) => !isClicked)
    }

    // setting the color for the team game wins below match score
    let colorState = isClicked ? "" : "#ffffff"


    if(props.team === "left"){
        return (
            <div className={`${styles.outerCircle} ${styles.left}`}>
                <div className={`${styles.innerCircle} ${styles.left}`} style={{backgroundColor: colorState}} onClick={toggle} ></div>
            </div>
        )
    }
    else {
        return (
            <div className={`${styles.outerCircle} ${styles.right}`}>
                <div className={`${styles.innerCircle} ${styles.right}`} style={{backgroundColor: colorState}} onClick={toggle} ></div>
            </div>
        )
    }
}

export default WinCircle;