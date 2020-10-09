import React from 'react';

const Result = (props) => {


   // Display this to show the result of the game.
   let style = (props.stage === 'result') ? {display : 'block'} : {display: 'none'};

   return (


      <div className = 'result' style = {style}> 
         {/* winner will be blue, loser red, class set dynamically    */}
         <i className ="far fa-hand-rock winner"></i>
         <i className ="far fa-hand-scissors loser"></i>
         <h1 className = 'win-status'>You win!</h1>
         <h2 className = 'win-explain'>You chose rock. Your opponent chose scissors. Rock smashes scissors.</h2>
       
         <h3>Play Again.</h3>   
      </div>


   )
}

export default Result;