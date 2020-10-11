// This module renders and updates a countdown for the gameplay - Three, two, one, shoot!

import React, {useEffect, useState}from 'react';
import TimerElements from './TimerElements';


const Countdown = (props) => {
   


   const [timer, setTimer] = useState(0);



      useEffect (() => {
         const countdown = setInterval(() =>{
            if (timer < 5){
               setTimer(timer => timer+1); 
            }
      
         }, 1000)
         
         return () => {clearInterval(countdown);}
      }, []);
     

   return (
      <div className = "countdown" >
         <TimerElements 
         countdownTimer = {timer}
         endCountdown = {props.endCountdown}/>
      </div>
   )
}

export default Countdown;