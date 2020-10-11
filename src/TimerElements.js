//This module reneders a div containing the countdown timer elements


import React, {useState} from 'react';

const TimerElements = (props) => {
   
   // const [countdownText, setCountdownText] = useState('Ready?')
   
   const countdownElements = ['Ready?', 'Three...', 'Two...', 'One...', 'Shoot!'];
  

      if (props.countdownTimer < 5){
         console.log(props.countdownTimer);
      }
      else {
        props.endCountdown();
      }




      return (
      <h1 className = "countdown-text">{countdownElements[props.countdownTimer]}</h1>
      )


}

export default TimerElements;