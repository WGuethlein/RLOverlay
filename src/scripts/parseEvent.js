import filter from "lodash/filter";
import get from "lodash/get"

export const parseEvent = (e) => {
    let teamData = e.game.teams

    let time = e.game.time_seconds
    let isOT = e.game.isOT
    let roundTime = Math.round(time)

    let activePlayer = e.game.target ? get(e.players, e.game.target) : ''
    
    let leftPlayers = filter(e.players, {team: 0}) 
    let rightPlayers = filter(e.players, {team: 1}) 
  
    
    return{
        gameTime: formatTime(roundTime, isOT),
        bestOf: 7,
        leftTeam: {
            name: teamData[0].name,
            score: teamData[0].score,
            players:{
                0:{
                    name: leftPlayers[0].name,
                    boost: leftPlayers[0].boost,
                },
                1:{
                    name: leftPlayers[1].name,
                    boost: leftPlayers[1].boost,
                },
                2:{
                    name: leftPlayers[2].name,
                    boost: leftPlayers[2].boost,
                }
            }
        },
        rightTeam: {
            name:teamData[1].name,
            score: teamData[1].score,
            players:{
                0:{
                    name: rightPlayers[0].name,
                    boost: rightPlayers[0].boost,
                },
                1:{
                    name: rightPlayers[1].name,
                    boost: rightPlayers[1].boost,
                },
                2:{
                    name: rightPlayers[2].name,
                    boost: rightPlayers[2].boost,
                }
            }
        },
        activePlayer: {
            name: activePlayer.name,
            team: activePlayer.team,
            goals: activePlayer.goals,
            shots: activePlayer.shots,
            assists: activePlayer.assists,
            score: activePlayer.score
        }
    }
}

const formatTime = (roundTime, isOT) => {
    let min = ~~((roundTime %3600)/60);
    let sec = roundTime % 60;
    if(!isOT){
        var sec_min = `${min}:${sec < 10 ? '0' : ""}${sec}`
    }
    else{
        var sec_min = `+${min}:${sec < 10 ? '0' : ""}${sec}`
    }
    return sec_min;
}