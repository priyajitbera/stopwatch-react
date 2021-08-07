import React from "react";

export default function Timer(props) {
  return (
    <div style={{ fontSize: `${props.fontSize}px` }}>
      {props.timer.minute <= 9 && 0}
      {props.timer.minute}:{props.timer.second <= 9 && 0}
      {props.timer.second}:{props.timer.milisecond <= 9 && 0}
      {props.timer.milisecond}
    </div>
  );
}
