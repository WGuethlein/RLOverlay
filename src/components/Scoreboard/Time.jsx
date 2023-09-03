import styles from "../Scoreboard/styles/Time.module.css"


const Time = (props) => {
    return(
        <div className={styles.time}>
            {props.time}
        </div>
    )
}


export default Time;