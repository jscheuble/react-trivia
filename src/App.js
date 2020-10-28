import React, { useState } from 'react';
import './styles/App.css';
import Context from './contexts/context'
import { Heading } from './styles/styledComponents';
import Game from './components/Game';

function App() {

  const [counts, setCounts] = useState({
    questions: 0,
    score: 0
  })

  return (
    <div>
      <Context.Provider value={{ counts, setCounts }}>
          <Heading>TRIVIA</Heading>
          <Game />
      </Context.Provider>
    </div>
  );
}

export default App;
