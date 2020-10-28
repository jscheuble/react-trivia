import React, { useState, useEffect } from 'react';
import data from '../data.json';

const Questions = () => {
    const [questions, setQuestions] = useState(data)
    const [currentQuestion, setCurrentQuestion] = useState({})
    const [answers, setAnswers] = useState([])

    const setUpQuestion = async () => {
        // generate random index to choose question
        const index = Math.floor(Math.random() * questions.length)
        await setCurrentQuestion(questions[index])
        let answerChoices = await [...questions[index].incorrect, questions[index].correct]
        await setAnswers(answerChoices)
        await setQuestions(questions.filter((e, i) => {
            return i !== index;
        }))
    }

    useEffect(() => {
        setUpQuestion()
    }, [])

    return (
        <div>
            {currentQuestion.question}
            {answers.map((option, i) => {
                return (
                    <div key={i}>
                        {option}
                    </div>
                )
            })}
        </div>
    )
}

export default Questions;