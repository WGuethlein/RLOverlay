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
                <TeamName id="left" {...props.leftTeam}/>
                <TeamScore id="left" {...props.leftTeam} />
                <div className={styles.vsBG}>
                    <div className={styles.vs}>VS</div>
                </div>
                <TeamScore id="right" {...props.rightTeam} />
                <TeamName id="right" {...props.rightTeam}/>
            </div>
            <div className={styles.bottomRow}>
                <Time time={props.gameTime}/>
            </div>
        </div>
    )
}

export default Scoreboard; 