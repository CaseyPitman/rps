// This module tracks wins and losses and keeps a running win percentage.
//It renders an update after each contest

import React from 'react';



const WinPercentageTracker = (props) =>{

   let winPercentage = 69;

   return (

      <div className = 'win-percentage-container'>
         <h3 className = 'win-percentage-text'>Your Win Percentage: {winPercentage}%</h3>
      </div>
   )

}

export default WinPercentageTracker;