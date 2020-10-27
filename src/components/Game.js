import React, { useState } from 'react';

const Game = () => {
    const [running, setRunning] = useState(false);

    return (
        <div>
            {running === false && <div className='button' onClick={() => setRunning(true)}>Click to start!</div>}
        </div>
    )
}

export default Game;