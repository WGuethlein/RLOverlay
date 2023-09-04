import styles from "./styles/WinCircle.module.css"
import { useEffect, useState } from "react";

const WinCircle = (props) => {
    
    const [isClicked, setIsClicked] = useState(props.hiddenOrNah)

    useEffect(() =>{
        localStorage.setItem(props.id, isClicked)
        localStorage.setItem(props.id, props.hiddenOrNah)
    },[isClicked, props.hiddenOrNah])

    const toggle = () => {
        setIsClicked((isClicked) => !isClicked)
    }

    // setting the color for the team game wins below match score
    let colorState = isClicked ? "#ffffff" : ""

    if(props.team === "left"){
        return (
            <div className={`${styles.outerCircle} ${styles.left}`}>
                <div className={`${styles.innerCircle} ${styles.left}`} style={(localStorage.getItem(props.id) ? {backgroundColor: colorState} : {backgroundColor: !colorState}) && (props.hiddenOrNah ? {backgroundColor: colorState} : {backgroundColor: !colorState})} onClick={toggle} ></div>
            </div>
        )
    }
    else {
        return (
            <div className={`${styles.outerCircle} ${styles.right}`}>
                <div className={`${styles.innerCircle} ${styles.right}`} style={(localStorage.getItem(props.id) ? {backgroundColor: colorState} : {backgroundColor: !colorState}) && (props.hiddenOrNah ? {backgroundColor: colorState} : {backgroundColor: !colorState})} onClick={toggle} ></div>
            </div>
        )
    }
}

export default WinCircle;