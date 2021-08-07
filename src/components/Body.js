import React, { useState } from "react";
import Timer from "./Timer";
import Button from "./UI/Button";
import classes from "./Body.module.css";
import Flags from "./Flags";
const defaultTimer = {
  milisecond: 0,
  second: 0,
  minute: 0,
  hour: 0,
};

let updatedTimer = {
  milisecond: 0,
  second: 0,
  minute: 0,
  hour: 0,
};

export default function Body() {
  const [timer, setTimer] = useState(defaultTimer);
  const [intervalId, setInterValId] = useState(0);
  const [flags, setFlags] = useState([]);

  const incrementTimer = () => {
    if (updatedTimer.milisecond === 99) {
      updatedTimer.second++;
      updatedTimer.milisecond = 0;
    }
    if (updatedTimer.second === 60) {
      updatedTimer.minute++;
      updatedTimer.second = 0;
    }

    updatedTimer.milisecond++;

    setTimer((prevTimer) => {
      return { ...prevTimer, ...updatedTimer };
    });
  };

  const startTimer = () => {
    console.log("start");
    setInterValId((prevIntervalId) => {
      const intervalId = setInterval(incrementTimer, 10);
      console.log("curr:" + intervalId);
      return intervalId;
    });
  };

  const endTimer = () => {
    console.log("stop");
    setInterValId((prevIntervalId) => {
      clearInterval(prevIntervalId);
      clearInterval((+prevIntervalId - 1).toString());
      return 0;
    });
  };

  const resetTimer = () => {
    endTimer();
    setTimer((prevTimer) => {
      return { ...prevTimer, ...defaultTimer };
    });
    setFlags((prevFlags) => []);
  };

  const flagTimer = () => {
    const newFlag = {
      milisecond: updatedTimer.milisecond,
      second: updatedTimer.second,
      minute: updatedTimer.minute,
      hour: updatedTimer.hour,
    };
    setFlags((prevFlags) => {
      return [...prevFlags, newFlag];
    });
  };

  return (
    <div className={classes.body}>
      <Timer timer={timer} fontSize={"48"}/>
      <div>
        {intervalId !== 0 && <Button name="flag" onClick={flagTimer} />}
        {intervalId === 0 && <Button name="start" onClick={startTimer} />}
        {intervalId !== 0 && <Button name="pause" onClick={endTimer} />}

        <Button name="reset" onClick={resetTimer} />
      </div>
      <Flags flags={flags} />
    </div>
  );
}
