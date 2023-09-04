
import styles from "./App.module.css"
import Scoreboard from './components/Scoreboard/Scoreboard'

function App() {

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



  return (
    <>
      <Scoreboard className={styles.scorebug} data={tempData}/>
    </>
  )
}

export default App
