
import styles from "./App.module.css"
import Scoreboard from './components/Scoreboard/Scoreboard'

function App() {

  const tempData = {
    leftScore: 10,
    rightScore: 2,
    leftName: "Ohio Northern",
    rightName: "Other Team"
  }



  return (
    <>
      <Scoreboard className={styles.scorebug} data={tempData}/>
    </>
  )
}

export default App
