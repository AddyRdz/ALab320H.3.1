import React from "react";

export default function Score(props) {
  return (
    <div>
      <p>Date: {props.date}</p>
      <p>Score: {props.score}</p>
    </div>
  );
}
