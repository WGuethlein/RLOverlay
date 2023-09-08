import { useRef, useState, useEffect } from "react";
import styles from "./App.module.css";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import { parseEvent } from "./scripts/parseEvent";

function App() {
  // https://stackoverflow.com/a/60161181
  // https://stackoverflow.com/a/72859816
  const ws = useRef(null);

  let startData = {
    gameTime: "+88:88",
    bestOf: 7,
    leftTeam: {
      name: "Name 1",
      score: 2,
      players: {
        0: {
          name: "lp1",
          boost: 33,
        },
        1: {
          name: "lp2",
          boost: 66,
        },
        2: {
          name: "lp3",
          boost: 100,
        },
      },
    },
    rightTeam: {
      name: "Name 2",
      score: 3,
      players: {
        0: {
          name: "rp1",
          boost: 33,
        },
        1: {
          name: "rp2",
          boost: 66,
        },
        2: {
          name: "rp3",
          boost: 100,
        },
      },
    },
    activePlayer: {
      name: "lp1",
      team: 0,
      goals: 1,
      shots: 2,
      assists: 1,
      score: 200,
    },
  };

  const [data, setData] = useState();
  const [isHidden, hideAll] = useState(true);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:49122");
    ws.current.onopen = () => console.log("ws open");
    ws.current.onclose = () => console.log("ws closed");
    ws.current.onerror = (error) => console.log(`Error: ${error}`);
  }, []);

  useEffect(() => {
    ws.current.onmessage = (msg) => {
      var event = JSON.parse(msg.data);
      switch (event.event) {
        case "game:update_state":
          setData(parseEvent(event.data));
          break;
        case "game:statfeed_event":
          break;
        case "game:podium_start":
        case "game:match_ended":
          hideAll();
          break;
        default:
          break;
      }
    };
  }, [ws]);

  return (
    <>
      <Scoreboard
        className={styles.scorebug}
        {...data}
        style={{ visibility: `${isHidden}` }}
      />
    </>
  );
}

export default App;
