// This module renders the main gameplay area

import React, {useState} from 'react';

// Components
import Selection from './Selection';
import Result from './Result';
import WinPercentageTracker from './WinPercentageTracker';

//Functions
import opponentChooses from './opponentChooses';


const PlayArea = () => {

   //State hooks
   const [stage, setStage] = useState('choose'); //choose, countdown, result
   const [userChoice, setUserChoice] = useState('');
   const [opponentChoice, setOpponentChoice ] = useState('');

 
   //Function to record user choice, find opponent choice, and advance to countdown stage
   let userSelects = (choice) => {
      setOpponentChoice(opponentChooses())
      setUserChoice(choice);
      setStage('result');

   }

   let reset = () => {
      setStage('choose');
      setUserChoice('');
      setOpponentChoice('');
   }

   let show;
   if (stage === 'choose'){
      show =   <Selection stage = {stage} select = {userSelects}/>
   } else if (stage === 'result'){
      show =   <Result stage = {stage} reset = {reset} userChoice = {userChoice} opponentChoice = {opponentChoice}/>
   }
   
   // Components will render based on game state
   return (

      <div className = 'play-area'>

         {show}
         
         <WinPercentageTracker />

  

      </div>
   )
}

export default PlayArea;