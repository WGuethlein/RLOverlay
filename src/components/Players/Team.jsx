import Player from "./Player";
import styles from "./styles/Team.module.css"

const Team = (props) => {
    console.log(props)
    return(
        <div className={styles.team}>
            <Player team={props.id} {...props.players[0]}/>
            <Player team={props.id} {...props.players[1]}/>
            <Player team={props.id} {...props.players[2]}/>
        </div>
    )
}

export default Team;