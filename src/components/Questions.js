import React, { useState, useEffect } from 'react';
import data from '../data.json';

const Questions = () => {
    const [questions, setQuestions] = useState(data)
    const [currentQuestion, setCurrentQuestion] = useState({})

    useEffect(() => {
        const index = Math.floor(Math.random() * Math.floor(questions.length))
        setCurrentQuestion(questions[index])
    }, [])

    return (
        <div>
            {currentQuestion.question}
        </div>
    )
}

export default Questions;