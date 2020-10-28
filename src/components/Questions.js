import React, { useState, useEffect } from 'react';
import data from '../data.json';
import { Question, Answer, AnswerContainer } from '../styles/styledComponents';

const Questions = () => {
    const [questions, setQuestions] = useState(data)
    const [currentQuestion, setCurrentQuestion] = useState({})
    const [answers, setAnswers] = useState([])

    const setUpQuestion = async () => {
        // generate random index to choose question
        const index = Math.floor(Math.random() * questions.length);
        await setCurrentQuestion(questions[index])

        let answerChoices = await [...questions[index].incorrect, questions[index].correct];
        await setAnswers(answerChoices)

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
                        <Answer key={i} onClick={() => checkAnswer(option)}>
                            <p>{option}</p>
                        </Answer>
                    )
                })}
            </AnswerContainer>
        </div>
    )
}

export default Questions;