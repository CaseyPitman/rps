import React from 'react';

const Result = (props) => {


   // Display this to show the result of the game.
   let style = (props.stage === 'result') ? {display : 'flex'} : {display: 'none'};

   return (


      <div className = 'result' style = {style}> 
         <h1 className = 'win-status'>You win!</h1>
         {/* winner will be blue, loser red, class set dynamically    */}
         <div className = 'result-icons-div'>
            <i className ="fas fa-hand-rock winner"></i>
            <i className ="fas fa-hand-scissors loser"></i>
         </div>

         <h2 className = 'win-explain'>You chose rock. <br/>Your opponent chose scissors.<br/> Rock smashes scissors.</h2>
       
         <h3 className = 'play-again'>Play Again</h3>   
      </div>

   )
}

export default Result;