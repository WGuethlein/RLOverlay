import styles from "./styles/ActivePlayer.module.css"

const ActivePlayer = (props) => {
    let picture = ""
    if(props.name == 'BigAnt'){
        picture = "AnthonyBellino.png"
      } else if(props.name == 'Flamez'){
        picture = "MichaelFogg.png"
      } else if(props.name == 'Dino'){
        picture = "EvanDinan.png"
      } else if(props.name == 'Uncle STN'){
        picture = "RyanMiller.png"
      } else if(props.name == 'JRupp'){
        picture = "JakeRuppelli.png"
      } else if(props.name == 'coffon'){
        picture = "MatthewExcoffon.png"
      } else {
        picture = "Blank.png"
      }
      
      picture = `../../../headshots/${picture}`

    return (
        <div className={styles.wrapper} style={{backgroundColor: `${props.team === 0 ? "#5452c5" : "#bc8341" }`}}>
            <div className={styles.topRow}>
                <div className={styles.imageWrapper}>
                    <img src={picture ? picture : '../../../headshots/Blank.png'} alt="" className={styles.image} />
                </div>
                <div className={styles.name}>{props.name}</div>
            </div>
            <div className={styles.bottomRow}>
                <div className={styles.score}>
                    <div className={styles.text}>Score</div>
                    <div className={styles.num}>{props.score}</div>
                </div>
                <div className={styles.goals}>
                    <div className={styles.text}>Goals</div>
                    <div className={styles.num}>{props.goals}</div>
                </div>
                <div className={styles.shots}>
                    <div className={styles.text}>Shots</div>
                    <div className={styles.num}>{props.shots}</div>
                </div>
                <div className={styles.assists}>
                    <div className={styles.text}>Assists</div>
                    <div className={styles.num}>{props.assists}</div>
                </div>
            </div>
        </div>
    )
}

export default ActivePlayer;