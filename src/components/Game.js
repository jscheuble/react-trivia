import React, { useState } from 'react';
import Questions from './Questions';
import { Button } from '../styles/styledComponents';

const Game = () => {
    const [running, setRunning] = useState(false);

    return (
        <div>
            {running === false && <Button onClick={() => setRunning(true)}>Click to start!</Button>}
            {running === true && <Questions />}
        </div>
    )
}

export default Game;