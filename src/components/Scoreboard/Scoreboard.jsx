import TeamName from './TeamName';
import TeamScore from './TeamScore';
import styles from './styles/Scoreboard.module.css'


// STILL NEED TO ADD TIME AND MATCH SCORE
const Scoreboard = (props) => {
    return (
        <div className={styles.scoreboardWrapper}>
            <TeamName id="left" name={props.data.leftName}/>
            <TeamScore id="left" score={props.data.leftScore} />
            <div className={styles.vsBG}>
                <div className={styles.vs}>VS</div>
            </div>
            <TeamScore id="right" score={props.data.rightScore} />
            <TeamName id="right" name={props.data.rightName}/>
        </div>
    )
}

export default Scoreboard; 