
import styles from "./App.module.css"
import Scoreboard from './components/Scoreboard/Scoreboard'

function App() {

  const tempData = {
    leftScore: 10,
    rightScore: 2
  }



  return (
    <>
      <Scoreboard data={tempData}/>
    </>
  )
}

export default App
