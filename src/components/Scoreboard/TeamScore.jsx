import styles from "./styles/TeamScore.module.css"

const TeamScore = (props) =>{
    if(props.id == "left"){
        return(
            <>
                <div className={`${styles.score} ${styles.left}`}>{props.score}</div>
            </>
        )
    }
    else {
        return(
            <>
                <div className={`${styles.score} ${styles.right}`}>{props.score}</div>
            </>
        )
    }
    
    
}

export default TeamScore;