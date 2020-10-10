// A React app that allows the user to play a game
// of Rock, Paper, Scissors.

import React, {useState} from 'react';

//Styles
import styles from './styles.css'

// Components 
import Heading from './Heading';
import PlayArea from './PlayArea';
import Copyright from './Copyright';


function App() {



  return (
    <div className='App'>

      <Heading />

      <PlayArea />

      <Copyright />
      
    </div>
  );
}

export default App;
