import React, {useState} from 'react';

//Styles
import styles from './styles.css'

// Components 
import Heading from './Heading';
import PlayArea from './PlayArea';
import Copyright from './Copyright';


function App() {

  // const [userChoice, setUserChoice] = useState('');
  // const [opponnentChoice, setOpponentChoice] = useState('');
  // const [inProgress, setInProgress] = useState(false);
  // const [userWins, setUserWins] = useState(true);

  // on click. choices disappear. There is a counter 'three two one shoot'
  //Your choice shows up. Then a second later your opponent's choice shows up. one second delay -  Winner turns blue, loser turns red. result text appears.

  return (
    <div className='App'>

      <Heading />

      <PlayArea />

      <Copyright />
      
    </div>
  );
}

export default App;
