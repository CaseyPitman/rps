// This module renders and updates a countdown for the gameplay - Three, two, one, shoot!

import React, {useState, useEffect} from 'react';

const Countdown = (props) => {
   

   const [countdownText, setCountdownText] = useState('Ready?')

   const countdownElements = ['Three...', 'Two...', 'One...', 'Shoot!'];



   let i = 0;
   let countdownTimer = setInterval (() => {
      if(i<4){

         //This keeps rerendering infitiely. Each rerender runs it again?
         // setCountdownText(countdownElements[i])
         console.log(countdownText)
      
         i++;
      } else {
         clearInterval(countdownTimer);
         console.log('end')
         //then call to playArea to advance to results.
        }
      }, 1000)


   return (
      <div className = "countdown" >
         <h1 className = "countdown-text">test</h1>
      </div>
   )
}

export default Countdown;