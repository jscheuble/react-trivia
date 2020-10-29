import React, { useState, useEffect } from 'react';
import data from '../data.json';
import { Question, Answer, AnswerContainer, Button } from '../styles/styledComponents';
import { shuffle } from '../utils/shuffle';
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
        const index = Math.floor(Math.random() * questions.length);
        await setCurrentQuestion(questions[index])

        let answerChoices = await [...questions[index].incorrect, questions[index].correct];
        await setAnswers(shuffle(answerChoices))

        // filter questions array to avoid duplicates
        await setQuestions(questions.filter((e, i) => {
            return i !== index;
        }))
    }

    useEffect(() => {
        setUpQuestion()
    }, [])
    
    const nextQuestion = () => {
        setCurrentResponse('')
        setSubmitted(false)
        setUpQuestion()
    }

    const checkAnswer = (input) => {
        console.log(input === currentQuestion.correct)
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

    return (
        <div>
            <Question>{currentQuestion.question}</Question>
            {counts.questions}
            <AnswerContainer>
                {answers.map((option, i) => {
                    return (
                        <Answer key={i} onClick={() => setCurrentResponse(option)} className={option === currentResponse ? 'selected' : ''}>
                            <p>{option}</p>
                        </Answer>
                    )
                })}
            </AnswerContainer>
            {submitted && counts.questions < 10 ? 
            <Button onClick={() => nextQuestion()}>Next Question</Button> : 
            counts.questions === 10 ? 
            <Button onClick={() => setShowScore(true)}>View Score</Button> :
            currentResponse && <Button onClick={() => checkAnswer(currentResponse)}>Submit</Button>}

            {showScore && <Score score={counts.score} />}
        </div>
    )
}

export default Questions;