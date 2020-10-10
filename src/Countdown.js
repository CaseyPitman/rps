// This module renders and updates a countdown for the gameplay - Three, two, one, shoot!

import React, {useState} from 'react';

const Countdown = (props) => {
   const countdown = ['Three', 'Two', 'One', 'Shoot']


   const [countdownText, setCountdownText] = useState(countdown[0]);





   // Display this comoponent while countdown runs.
   let style = (props.stage === 'countdown') ? {display : 'flex'} : {display: 'none'};


   return (
      <div className = "countdown" style = {style}>
         <h1 className = "countdown-text">{countdownText}</h1>
      </div>
   )
}

export default Countdown;