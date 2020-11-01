import React from 'react';
import { ScoreContainer, Button } from '../../styles/styledComponents';

const Score = ({ score, resetGame }) => {
    return (
        <ScoreContainer>
            <p>score: {score}/10</p>
            <Button onClick={() => resetGame()} >Play Again</Button>
        </ScoreContainer>
    )
}

export default Score;