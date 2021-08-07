import React from "react";
import Timer from "./Timer";
import classes from "./Flags.module.css";

export default function Flags(props) {
  return (
    <div className={classes.flags}>
      {props.flags.map((flag, index) => (
        <>
          <h2>Rank{index+1}</h2>
          <Timer timer={flag} fontSize={"30"}/>
          <hr></hr>
        </>
      ))}
    </div>
  );
}
