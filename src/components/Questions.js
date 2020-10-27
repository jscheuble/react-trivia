import React, { useState, useEffect } from 'react';
import data from '../data.json';

const Questions = () => {
    const [questions, setQuestions] = useState(data)
    const [currentQuestion, setCurrentQuestion] = useState({})
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        const index = Math.floor(Math.random() * Math.floor(questions.length))
        setCurrentQuestion(questions[index])
        setQuestions(questions.filter((e, i) => {
            return i !== index;
        }))
    }, [])

    return (
        <div onClick={() => console.log(questions)}>
            {currentQuestion.question}
        </div>
    )
}

export default Questions;