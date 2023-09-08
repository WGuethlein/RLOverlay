
import styles from "./styles/TeamName.module.css"
import { useEffect, useState } from "react"


const TeamName = (props) =>{

    const [leftTeam, setLeftTeam] = useState(localStorage.getItem("leftTeam"))
    const [rightTeam, setRightTeam] = useState(localStorage.getItem("rightTeam"))

    useEffect(() => {
        // storing input name
        if(props.id == "left") localStorage.setItem('leftTeam', leftTeam);
        if(props.id == "right") localStorage.setItem('rightTeam', rightTeam);
    }, [leftTeam,rightTeam]);

    if(props.id == 'left'){
        return(
            <>
                <div className={`${styles.teamName} ${styles.left}`} contentEditable="true" onBlur={(e) => setLeftTeam(e.currentTarget.textContent)} suppressContentEditableWarning={true}>{localStorage.getItem("leftTeam")}</div>
            </>
        )
    }
    else{
        return(
            <>
                <div className={`${styles.teamName} ${styles.right}`} contentEditable="true" onBlur={(e) => setRightTeam(e.currentTarget.textContent)} suppressContentEditableWarning={true}>{localStorage.getItem("rightTeam")}</div>
            </>
        )
    }
}

export default TeamName;