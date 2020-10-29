import React from 'react';
import './styles/App.css';
import { Heading } from './styles/styledComponents';
import Game from './components/Game';

function App() {

  return (
    <div>
        <Heading>TRIVIA</Heading>
        <Game />
    </div>
  );
}

export default App;
