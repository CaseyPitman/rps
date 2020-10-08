import React, {useState} from 'react';


function App() {

  const [userChoice, setUserChoice] = useState(null);
  const [opponnentChoice, setOpponentChoice] = useState(null);



  return (
    <div className='App'>
      <h1 className = 'headline'>Let's play rock paper scissors.</h1>
      <h2 className = 'subheadline'>Choose wisely.</h2>
      <div className = 'select'>
        <i class="far fa-hand-rock"></i>
        <i class="far fa-hand-paper"></i>
        <i class="far fa-hand-scissors"></i>
      </div>
    </div>
  );
}

export default App;
