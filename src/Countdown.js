// This module renders and updates a countdown for the gameplay - Three, two, one, shoot!

import React from 'react';

const Countdown = (props) => {

   // Display this comoponent while countdown runs.
   let style = (props.stage === 'countdown') ? {display : 'flex'} : {display: 'none'};


   return (
      <div className = "countdown" style = {style}>
         <h1 className = "countdown-text">Shoot!</h1>
      </div>
   )
}

export default Countdown;