import React, {useState} from 'react';


function App() {

  const [userChoice, setUserChoice] = useState('');
  const [opponnentChoice, setOpponentChoice] = useState('');


  // on click. choices disappear. There is a counter 'three two one shoot'
  //Your choice shows up. Then a second later your opponent's choice shows up. one second delay -  Winner turns blue, loser turns red. result text appears.

  return (
    <div className='App'>
      <h1 className = 'headline'>Let's play rock paper scissors.</h1>
      <h2 className = 'subheadline'>Choose wisely.</h2>
      <div className = 'select'>
        <i class="far fa-hand-rock"></i>
        <i class="far fa-hand-paper"></i>
        <i class="far fa-hand-scissors"></i>
      </div>
      <div className = 'result'>
        <h1 className = 'win-status'>You win!</h1>
        <h2 className = 'win-explain'>You chose rock. Your opponent chose scissors. Rock smashes scissors.</h2>
        <h3>Play Again.</h3>
      </div>
      
    </div>
  );
}

export default App;
