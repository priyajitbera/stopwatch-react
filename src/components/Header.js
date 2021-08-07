import React from "react";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes.header}>
      <h2 className={classes.title} >Stopwatch</h2>
    </div>
  );
}
