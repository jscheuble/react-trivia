import React, { useState } from 'react';
import Questions from '../questions/Questions';
import { Button } from '../../styles/styledComponents';

const Game = () => {
    const [running, setRunning] = useState(false);

    return (
        <div>
            {running === false && <Button data-testid='play-button' onClick={() => setRunning(true)}>Let's Play!</Button>}
            {running === true && <Questions />}
        </div>
    )
}

export default Game;