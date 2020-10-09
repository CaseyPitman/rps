import React from 'react';

const Result = () => {


   return (

      <div className = 'result'> 
         {/* winner will be blue, loser red, class set dynamically    */}
         <i className ="far fa-hand-rock winner"></i>
         <i className ="far fa-hand-scissors loser"></i>
         <h1 className = 'win-status'>You win!</h1>
         <h2 className = 'win-explain'>You chose rock. Your opponent chose scissors. Rock smashes scissors.</h2>
         {/* Click to reset */}
         <h3>Play Again.</h3>   
      </div>


   )
}

export default React;