import React from 'react';

const Selection = (props) => {


   // Display this comoponent on game start.
   let style = (props.stage === 'choose') ? {display : 'flex'} : {display: 'none'};

   return (
      <div className = 'selection-area' style = {style}>
         <h2 className = 'subHeadline'>Choose wisely.</h2>
         <div className = 'choices'>
            <i className="fas fa-hand-rock"></i>
            <i className="fas fa-hand-paper"></i>
            <i className="fas fa-hand-scissors"></i>
         </div>
      </div>
   )
}

export default Selection;