import React, {useState} from 'react';


// Components 
import Headings from './Headings';
import PlayArea from './PlayArea';



function App() {

  // const [userChoice, setUserChoice] = useState('');
  // const [opponnentChoice, setOpponentChoice] = useState('');
  // const [inProgress, setInProgress] = useState(false);
  // const [userWins, setUserWins] = useState(true);

  // on click. choices disappear. There is a counter 'three two one shoot'
  //Your choice shows up. Then a second later your opponent's choice shows up. one second delay -  Winner turns blue, loser turns red. result text appears.

  return (
    <div className='App'>

      <Headings />

      <PlayArea />



      <div className = 'result'> 
        <i class="far fa-hand-rock"></i>
        <i class="far fa-hand-scissors"></i>
        <h1 className = 'win-status'>You win!</h1>
        <h2 className = 'win-explain'>You chose rock. Your opponent chose scissors. Rock smashes scissors.</h2>
        <h3>Play Again.</h3>
      </div>
      <div class = 'copyright'>
        <h3 className = 'copyright-text'>&copy; 2020 | Casey Pitman</h3>
      </div>
      
    </div>
  );
}

export default App;
