import React from 'react';

const Selection = (props) => {


   // Display this comoponent on game start.
   let style = (props.stage === 'choose') ? {display : 'block'} : {display: 'none'};

   return (
      <div className = 'selection-area' style = {style}>
         <h2 className = 'subheadline'>Choose wisely.</h2>
         <div className = 'choices'>
            <i className="far fa-hand-rock"></i>
            <i className="far fa-hand-paper"></i>
            <i className="far fa-hand-scissors"></i>
         </div>
      </div>
   )
}

export default Selection;