import TeamName from './TeamName';
import TeamScore from './TeamScore';
import TeamWins from './TeamWins';
import Time from './Time';

import styles from './styles/Scoreboard.module.css'


// STILL NEED TO ADD TIME AND MATCH SCORE
const Scoreboard = (props) => {
    return (
        <div className={styles.scoreboardWrapper}>
            <div className={styles.topRow}>
                <TeamName id="left" name={props.data.leftName}/>
                <TeamScore id="left" score={props.data.leftScore} />
                <div className={styles.vsBG}>
                    <div className={styles.vs}>VS</div>
                </div>
                <TeamScore id="right" score={props.data.rightScore} />
                <TeamName id="right" name={props.data.rightName}/>
            </div>
            <div className={styles.bottomRow}>
                <TeamWins team="left"/>
                <Time time={props.data.time}/>
                <TeamWins team="right"/>
            </div>
        </div>
    )
}

export default Scoreboard; 