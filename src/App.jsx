import { useState } from "react"
import styles from "./App.module.css"
import Scoreboard from './components/Scoreboard/Scoreboard'
import {parseEvent} from './scripts/parseEvent'

function App() {

  const [isHidden, hideAll] = useState(true)

  const tempData = {
    leftScore: 10,
    rightScore: 2,
    leftName: "Ohio Northern",
    rightName: "Other Team",
    time: "+88:88",
    gameState: "live",           //used for determining if the game is currently live, replay, not started, or ended
    bestOf: 9,
    leftWins: 2,
    rightWins:2,
  }
  let data = [];

  const ws = new WebSocket('ws://localhost:49122');

  ws.onopen = () => {
    //  ws.send('Message From Client')
  }
  
  ws.onerror = (error) => {
    console.log(`WebSocket error: ${error}`)
  }

  ws.onmessage = (msg) => {
    var event = JSON.parse(msg.data)
    switch(event.event){
      case('game:update_state'):
        data = parseEvent(data, event.data);
        break;
      case('game:statfeed_event'):
        break;
      case('game:podium_start'):
      case('game:match_ended'):
        hideAll();
        break;
      default:
        break;

    }
  }


  return (
    <>
      <Scoreboard className={styles.scorebug} data={tempData} style={{visibility: `${isHidden}`}}/>
    </>
  )
}

export default App
