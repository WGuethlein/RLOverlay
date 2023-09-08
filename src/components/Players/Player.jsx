import styles from "./styles/Player.module.css";
import { useState } from "react";

const Player = (props) => {
  let boostWidth = props.boost * 2.8;
  if (props.team == "left") {
    return (
      <div className={styles.wrapper}>
        <div className={styles.topRow}>
          <div className={styles.name}>{props.name}</div>
          <div className={styles.boost}>{props.boost}</div>
        </div>
        <div className={`${styles.bottomRow}${styles.left}`}>
          <div
            className={`${styles.boostMeter} ${styles.left}`}
            style={{ width: boostWidth }}
          ></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <div className={styles.topRow}>
          <div className={styles.boost}>{props.boost}</div>
          <div className={styles.name}>{props.name}</div>
        </div>
        <div className={`${styles.bottomRow}${styles.right}`}>
          <div
            className={`${styles.boostMeter} ${styles.right}`}
            style={{ width: boostWidth }}
          ></div>
        </div>
      </div>
    );
  }
};

export default Player;
