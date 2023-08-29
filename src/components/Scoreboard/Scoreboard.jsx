import TeamName from './TeamName';
import TeamScore from './TeamScore';


const Scoreboard = (props) => {
    console.log(props.data.leftScore)
    return (
        <>
            <TeamName id="left"/>
            <TeamScore id="left" score={props.data.leftScore}/>
            <div>VS</div>
            <TeamScore id="right" score={props.data.rightScore}/>
            <TeamName id="right"/>
        </>
    )
}

export default Scoreboard; 