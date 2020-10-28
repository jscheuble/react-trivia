import React, { useState, useEffect } from 'react';
import data from '../data.json';
import { Question, Answer, AnswerContainer, Button } from '../styles/styledComponents';
import { shuffle } from '../utils/shuffle';

const Questions = () => {
    const [questions, setQuestions] = useState(data)
    const [currentQuestion, setCurrentQuestion] = useState({})
    const [answers, setAnswers] = useState([])
    const [currentResponse, setCurrentResponse] = useState('')

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

    const checkAnswer = (input) => {
        console.log(input === currentQuestion.correct)
    }

    return (
        <div>
            <Question>{currentQuestion.question}</Question>
            <AnswerContainer>
                {answers.map((option, i) => {
                    return (
                        <Answer key={i} onClick={() => setCurrentResponse(option)} className={option === currentResponse ? 'selected' : ''}>
                            <p>{option}</p>
                        </Answer>
                    )
                })}
            </AnswerContainer>
            <Button>Submit</Button>
        </div>
    )
}

export default Questions;