import React from 'react'
import Score from './Score'

export default function Learner(props) {
  return (
   <div>
    <h1>Name: {props.name}</h1>
    <p>Bio: {props.bio}</p>
    {props.scores.map((scoreObj,index) => {
      return <Score key={index} date={scoreObj.date} score={scoreObj.score}/>
    })}

   </div>
  )
}
