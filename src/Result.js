// This module renders the results of the game

import React from 'react';

const Result = (props) => {


   // Player clicks to play again
   let clickHandler = () => {
      props.reset();
   }




   let userIconClassName = `fas fa-hand-${props.userChoice}`;
   let userTextClassName = '';
   let opponentIconClassName = `fas fa-hand-${props.opponentChoice}`;
   let opponentTextClassName = '';
   //if user wins add class name 'winner' to it's classname

   
   return (

      <div className = 'result'> 
         <h1 className = 'win-status'>You win!</h1>
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
            Rock smashes scissors.</h2>
       
         <h3 className = 'play-again' id = 'reset' onClick = {clickHandler}>Play Again</h3>   
      </div>
   )
}

export default Result;