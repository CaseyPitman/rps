// This module renders and updates a countdown for the gameplay - Three, two, one, shoot!

import React, {useState, useEffect} from 'react';

const Countdown = (props) => {
   

   const [countdownText, setCountdownText] = useState(null)

   const countdownElements = ['Three', 'Two', 'One', 'Shoot!'];



   return (
      <div className = "countdown" >
         <h1 className = "countdown-text">three</h1>
      </div>
   )
}

export default Countdown;