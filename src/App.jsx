import { useRef, useState, useEffect } from "react";
import styles from "./App.module.css";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import { parseEvent } from "./scripts/parseEvent";
import ReconnectingWebSocket from "reconnecting-websocket";
import Team from "./components/Players/Team";
import ActivePlayer from "./components/ActivePlayer/ActivePlayer";
import Replay from "./components/Replay";


function App() {
  // https://stackoverflow.com/a/60161181
  // https://stackoverflow.com/a/72859816
  const ws = useRef(null);

  let startData = {
    gameTime: "00:00",
    bestOf: 7,
    leftTeam: {
      name: "",
      score: 0,
      players: {
        0: {
          name: "",
          boost: 0,
        },
        1: {
          name: "",
          boost: 0,
        },
        2: {
          name: "",
          boost: 0,
        },
      },
    },
    rightTeam: {
      name: "",
      score: 0,
      players: {
        0: {
          name: "",
          boost: 0,
        },
        1: {
          name: "",
          boost: 0,
        },
        2: {
          name: "",
          boost: 0,
        },
      },
    },
    activePlayer: {
      name: "",
      team: 0,
      goals: 0,
      shots: 0,
      assists: 0,
      score: 0,
    },
  };

  const [data, setData] = useState(startData);
  const [isHidden, setIsHidden] = useState(true);
  const [isReplay, setIsReplay] = useState(false);

  useEffect(() => {

    ws.current = new ReconnectingWebSocket("ws://localhost:49122", [], { maxReconnectionDelay: 1000 });
    ws.current.onopen = () => console.log("ws open");

    ws.current.onclose = () => console.log("WS Closed, retrying connection in 1 second")
    ws.current.onerror = (error) => console.log(`Error: ${error}`);
  }, []);

  useEffect(() => {
    ws.current.onmessage = (msg) => {
      var event = JSON.parse(msg.data);
      console.log(event.event)
      switch (event.event) {
        case "game:update_state":
          setData(parseEvent(event.data));
          break;
        case "game:statfeed_event":
          break;
        case "game:podium_start":
        case "game:match_ended":
        case "game:clock_stopped":
          setIsHidden(true);
          break;
        case "game:round_started_go":
          setIsHidden(false);
          break;
        case "game:replay_start":
          setIsHidden(true);
          setIsReplay(true);
          break;
        case "game:replay_end":
          setIsReplay(false);
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
      {isHidden ? '' : <div className={styles.teams}>
        <Team id="left" {...data.leftTeam} />
        <Team id="right" {...data.rightTeam} />
      </div>}
      {isHidden ? "" : data.activePlayer.name === "" ? "" : data.activePlayer.name === undefined ? '' : <ActivePlayer {...data.activePlayer} />}
      {isReplay ? <Replay/> : ""}
    </>
  );
}

export default App;
