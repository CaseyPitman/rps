// This module renders the results of the game

import React,  {useState, useEffect}from 'react';
import winRationale from './winRationale';
import findWinner from './findWinner'

const Result = (props) => {

   const [winRationaleText, setWinRationaleText] = useState('');
   const [winner, setWinner] = useState('') //user or opponent or tie

   //Retrieve rationale for win
   useEffect(()=>{
      //Determine Winner
      setWinner(findWinner(props.userChoice, props.opponentChoice));
      setWinRationaleText(winRationale([props.userChoice, props.opponentChoice]));
   })
  

   // Player clicks to play again
   let clickHandler = () => {
      props.reset();
   }

   //update based on context (or You Lose. or It's a tie)
   let winStatusText = 'You Win!'
   let winStatusTextClassName = 'loser' //or winner or Tie


   let userIconClassName = `fas fa-hand-${props.userChoice}`;
   let userTextClassName = '';
   let opponentIconClassName = `fas fa-hand-${props.opponentChoice}`;
   let opponentTextClassName = '';
   //if user wins add class name 'winner' to its classname



   return (

      <div className = 'result'> 
         <h1 className = 'win-status'><span className = {winStatusTextClassName}>{winStatusText}</span></h1>
         {/* winner will be blue, loser red, class set dynamically    */}
         <div className = 'result-icons-div'>
            <i className = {userIconClassName}></i>
            <i className = {opponentIconClassName}></i>
         </div>

         <h2 className = 'win-explain'>
            You chose <span className = {userTextClassName}>{props.userChoice}</span>.
            <br/>
            Your opponent chose <span className = {opponentTextClassName}>{props.opponentChoice}</span>.
            <br/> 
            {winRationaleText}</h2>
       
         <h3 className = 'play-again' id = 'reset' onClick = {clickHandler}>Play Again</h3>   
      </div>
   )
}

export default Result;