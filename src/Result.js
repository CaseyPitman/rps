// This module renders the results of the game

import React,  {useState, useEffect}from 'react';
import winRationale from './winRationale';
import findWinner from './findWinner'

const Result = (props) => {

   const [winRationaleText, setWinRationaleText] = useState('');
   const [winner, setWinner] = useState(''); //user or opponent or tie




   //Retrieve rationale for win
   useEffect(()=>{
      //Determine Winner
      setWinner(findWinner(props.userChoice, props.opponentChoice));

      //Determine rationale for win.
      setWinRationaleText(winRationale([props.userChoice, props.opponentChoice]));

   }) 
   
   
   // Player clicks to play again
   let clickHandler = () => {
      props.reset();
   }

   //Update based on context
   let winStatusText = 'You Win!'
   let winStatusTextClassName = 'loser' //or winner or tie


   let userIconClassName = `fas fa-hand-${props.userChoice}`;
   let userTextClassName = '';
   let opponentIconClassName = `fas fa-hand-${props.opponentChoice}`;
   let opponentTextClassName = '';
   //if user wins add class name 'winner' to its classname

   if (winner === 'tie'){
      //TIE
      winStatusText = 'It\'s a tie.';
      winStatusTextClassName = ' tie'
      userIconClassName += ' tie';
      opponentIconClassName += ' tie';
      userTextClassName += ' tie';
      opponentTextClassName += ' tie'
   } 
   
   else if (winner === 'user'){
      // USER WINS
      winStatusText = 'You win!';
      winStatusTextClassName = ' winner'
      userIconClassName += ' winner';
      opponentIconClassName += ' loser';
      userTextClassName += ' winner';
      opponentTextClassName += ' loser'
   }
   
   else if (winner === 'opponent'){
      // USER LOSES
      winStatusText = 'You lose.';
      winStatusTextClassName = ' loser'
      userIconClassName += ' loser';
      opponentIconClassName += ' winner';
      userTextClassName += ' loser';
      opponentTextClassName += ' winner'
   }

   return (

      <div className = 'result'> 
         <h1 className = 'win-status'><span className = {winStatusTextClassName}>{winStatusText}</span></h1>
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