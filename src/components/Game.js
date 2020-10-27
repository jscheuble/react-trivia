import React, { useState } from 'react';
import Questions from './Questions';

const Game = () => {
    const [running, setRunning] = useState(false);

    return (
        <div>
            {running === false && <div className='button' onClick={() => setRunning(true)}>Click to start!</div>}
            {running === true && <Questions />}
        </div>
    )
}

export default Game;