import React from "react";

export default function Score(props) {
  return (
    <div>
      <p>Date: {props.score.date}</p>
      <p>Score: {props.score.score}</p>
    </div>
  );
}
