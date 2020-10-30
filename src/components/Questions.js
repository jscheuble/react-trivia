import React, { useState, useEffect } from 'react';
import data from '../data.json';
import { Question, AnswerContainer, Button } from '../styles/styledComponents';
import { shuffle } from '../utils/shuffle';
import AnswerCard from './AnswerCard';
import Score from './Score';

const Questions = () => {
    const [questions, setQuestions] = useState(data)
    const [currentQuestion, setCurrentQuestion] = useState({})
    const [answers, setAnswers] = useState([])
    const [currentResponse, setCurrentResponse] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [counts, setCounts] = useState({
        questions: 0,
        score: 0
        })
    const [showScore, setShowScore] = useState(false);

    
    const setUpQuestion = async () => {
        // generate random index to choose question
        const index = await Math.floor(Math.random() * questions.length);
        await setCurrentQuestion(questions[index])
        
        let answerChoices = [...questions[index].incorrect, questions[index].correct];
        await setAnswers(shuffle(answerChoices))
        
        // filter questions array to avoid duplicates
        await setQuestions(questions.filter((e, i) => {
            return i !== index;
        }))
    }
    
    useEffect(() => {
        setUpQuestion()
    }, [])
    
    const checkAnswer = (input) => {
        setSubmitted(true)
        if (input === currentQuestion.correct) {
            setCounts({
                questions: counts.questions + 1,
                score: counts.score + 1
            })
        } else {
            setCounts({...counts, questions: counts.questions + 1})
        }
    }
    
    const nextQuestion = () => {
        setCurrentResponse('')
        setSubmitted(false)
        setUpQuestion()
    }
    
    const resetGame = async () => {
        // await setQuestions(initialState)
        // setCurrentResponse('')
        // setSubmitted(false)
        // setCounts({
        //     questions: 0,
        //     score: 0
        // })
        // setShowScore(false)
        // setUpQuestion()

        window.location.reload(false)
    }

    return (
        <div className={showScore ? 'flip' : ''}>
            {!showScore ? <div>
                <Question>{currentQuestion.question}</Question>
                <AnswerContainer>
                    {answers.map((option, i) => {
                        return <AnswerCard key={i} isCorrect={currentQuestion.correct} submitted={submitted} setCurrentResponse={setCurrentResponse} currentResponse={currentResponse} option={option}  />
                    })}
                </AnswerContainer>

                {submitted && counts.questions < 10 ? 
                <Button onClick={() => nextQuestion()}>Next Question</Button> : 
                counts.questions === 10 ? 
                <Button onClick={() => setShowScore(true)}>View Score</Button> :
                currentResponse && <Button onClick={() => checkAnswer(currentResponse)}>Submit</Button>}
            </div>
            : <div>
                <Score score={counts.score} resetGame={resetGame} />
            </div>}
        </div>
    )
}

export default Questions;