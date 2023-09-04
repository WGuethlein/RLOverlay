import WinCircle from "./WinCircle";
import styles from "./styles/TeamWins.module.css"

const TeamWins = (props) => {




    // while creating the dots, the ID go....
    // left: l0,l1,l2,l3
    // right: r0,r1,r2,r3
    // they are not 0'd towards the center
    if (props.team === "left") {
        // case where number of games is not passed to this, default bo7
        if (props.bestOf in [,5,7,9]) {
            return (
                <div className={`${styles.team} ${styles.left} ${styles[`bo7`]}`}>
                    {Array.from({ length: (4) }, (_, index) => <WinCircle team="left" id={`l${index}`} key={`l${index}`} hiddenOrNah={props.wins < index + 1 ? true : false}/>).reverse()}
                </div>
            )
        }
        return (
            <div className={`${styles.team} ${styles.left} ${styles[`bo${props.bestOf}`]}`}>
                {Array.from({ length: (props.bestOf / 2 + 1) }, (_, index) => <WinCircle team="left" id={`l${index}`} key={`l${index}`} hiddenOrNah={props.wins < index + 1 ? true : false}/>).reverse()}
            </div>
        )
    }
    else {
        // case where number of games is not passed to this, default bo7
        if (props.bestOf in [,5,7,9]) {
            return (
                <div className={`${styles.team} ${styles.right} ${styles[`bo7`]}`}>
                    {Array.from({ length: (4) }, (_, index) => <WinCircle team="right" key={`r${index}`} id={`r${index}`} hiddenOrNah={props.wins < index + 1 ? true : false} />)}
                </div>
            )
        }
        return (
            <div className={`${styles.team} ${styles.right} ${styles[`bo${props.bestOf}`]}`}>
                {Array.from({ length: (props.bestOf / 2 + 1) }, (_, index) => <WinCircle team="right" key={`r${index}`} id={`r${index}`} hiddenOrNah={props.wins < index + 1 ? true : false} />)}
            </div>
        )
    }
}

export default TeamWins;

