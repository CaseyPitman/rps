// This module renders the main gameplay area

import React, {useState} from 'react';

// Components
import Selection from './Selection';
import Countdown from './Countdown';
import Result from './Result';

//Functions
import opponentChooses from './opponentChooses' 


const PlayArea = () => {

   //State hooks
   const [stage, setStage] = useState('choose'); //choose, countdown, result
   const [userChoice, setUserChoice] = useState('');
   const [opponentChoice, setOpponentChoice ] = useState('');

 
   //Function to record user choice, find opponent choice, and advance to countdown stage
   
   let userSelects = (choice) => {
      setOpponentChoice(opponentChooses())
      setUserChoice(choice);
      setStage('countdown');
   }
   


   // Components will render based on game state
   return (

      <div className = 'play-area'>

         <Selection 
         stage = {stage}
         select = {userSelects}/>

         <Countdown
            stage = {stage} />

         <Result 
            stage = {stage} />

      </div>
   )
}

export default PlayArea;