// This module renders the results of the game

import React from 'react';

const Result = (props) => {


   // Player clicks to play again
   let clickHandler = () => {
      props.reset();
   }
   
   return (

      <div className = 'result'> 
         <h1 className = 'win-status'>You win!</h1>
         {/* winner will be blue, loser red, class set dynamically    */}
         <div className = 'result-icons-div'>
            <i className ="fas fa-hand-rock winner"></i>
            <i className ="fas fa-hand-scissors loser"></i>
         </div>

         <h2 className = 'win-explain'>
            You chose <span className = 'player-status winner'>rock</span>.
            <br/>
            Your opponent chose <span className = 'opponent-status loser'>scissors</span>.
            <br/> 
            Rock smashes scissors.</h2>
       
         <h3 className = 'play-again' id = 'reset' onClick = {clickHandler}>Play Again</h3>   
      </div>
   )
}

export default Result;