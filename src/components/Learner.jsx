import React from 'react'
import Score from './Score'

export default function Learner(props) {
  return (
   <div>
    <h1>Name: {props.learner.name}</h1>
    <p>Bio: {props.learner.bio}</p>
    
    {props.learner.scores.map((score,index) => {
      return <Score key={index} score={score}/>
    })}

   </div>
  )
}
