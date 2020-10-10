// This module renders the user's available choices when
// playing the game.

import React from 'react';

const Selection = (props) => {


   // Display this comoponent on game start.
   let style = (props.stage === 'choose') ? {display : 'flex'} : {display: 'none'};

   //User clicks their choice. 
   let clickHandler = (event) => {
      let choice = event.target.id;
      props.select(choice);
   }


   return (
      <div className = 'selection-area' style = {style}>
         <h2 className = 'subHeadline'>Choose wisely.</h2>
         <div className = 'choices'>
            <i className ='fas fa-hand-rock' id = 'rock' onClick = {clickHandler}></i>
            <i className ='fas fa-hand-paper' id = 'paper' onClick = {clickHandler}></i>
            <i className ='fas fa-hand-scissors' id = 'scissors' onClick = {clickHandler}></i>
         </div>
      </div>
   )
}

export default Selection;