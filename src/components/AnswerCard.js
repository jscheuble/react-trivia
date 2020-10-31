import React from 'react';
import { AnswerFront, AnswerBack, Card } from '../styles/styledComponents';
import Correct from './Correct';
import Incorrect from './Incorrect';

const AnswerCard = ({ submitted, isCorrect, setCurrentResponse, currentResponse, option, testId }) => {

    return (
        <Card onClick={() => !submitted && setCurrentResponse(option)}
            className={ option === currentResponse && submitted 
            ? 'flip selected' 
            : option === currentResponse 
            ? 'selected' 
            : submitted && option === isCorrect ? 'correct' : ''}>
                
            {!submitted || (submitted && option !== currentResponse) ? 
            <AnswerFront>
                <p>{option}</p>
            </AnswerFront> 
            : <AnswerBack>
                {option === isCorrect ? <Correct /> : <Incorrect />}
            </AnswerBack>}
        </Card>
    )
}

export default AnswerCard;