import WinCircle from "./WinCircle";
import styles from "./styles/TeamWins.module.css"

const TeamWins = (props) => {
    
    if(props.team === "left"){
        return(
            <div className={`${styles.team} ${styles.left}`}>
                <WinCircle id="l1" team="left"/>
                <WinCircle id="l2" team="left"/>
                <WinCircle id="l3" team="left"/>
                <WinCircle id="l4" team="left"/>
            </div>
        )
    }
    else {
        return(
            <div className={`${styles.team} ${styles.right}`}>
                <WinCircle id="r1" team="right"/>
                <WinCircle id="r2" team="right"/>
                <WinCircle id="r3" team="right"/>
                <WinCircle id="r4" team="right"/>
            </div>
        )
    }          
}

export default TeamWins;