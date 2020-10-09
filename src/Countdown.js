import React from 'react';

const Countdown = (props) => {

   // Display this comoponent while countdown runs.
   let style = (props.stage === 'countdown') ? {display : 'block'} : {display: 'none'};


   return (
      <div className = "countdown" style = {style}>
         <h1 className = "countdown-text">Three</h1>
      </div>
   )
}

export default Countdown;