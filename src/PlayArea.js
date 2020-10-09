import React from 'react';

// Components
import Selection from './Selection';
import Countdown from './Countdown';
import Result from './Result';


const PlayArea = () => {






// Components will render based on game state

   return (

      <div className = 'play-area'>

         <Selection/>

         <Countdown />

         <Result />

      </div>



   )
}

export default PlayArea;