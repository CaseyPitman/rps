import React, {useState} from 'react';

// Components
import Selection from './Selection';
import Countdown from './Countdown';
import Result from './Result';


const PlayArea = () => {

   //State hooks
   const [stage, setStage] = useState('choose'); //choose, countdown, result


   // Components will render based on game state

   return (

      <div className = 'play-area'>

         <Selection 
            stage = {stage} />

         <Countdown
            stage = {stage} />

         <Result 
            stage = {stage} />

      </div>
   )
}

export default PlayArea;