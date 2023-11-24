import React, { useState } from 'react';

const Quiz = ({ questions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const handleAnswerClick = (selectedAnswer) => {
        setUserAnswers([...userAnswers, selectedAnswer]);
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResult(true);
        }
    };

    const calculateScore = () => {
        let score = 0;
        for (let i = 0; i < questions.length; i++) {
            if (userAnswers[i] === questions[i].correctAnswer) {
                score++;
            }
        }
        return score;
    };

    return (
        <div>
            {showResult ? (
                <div>
                    <h2>Quiz Result</h2>
                    <p>Your score: {calculateScore()} out of {questions.length}</p>
                    <button onClick={() => setShowResult(false)}>Retry Quiz</button>
                </div>
            ) : (
                <div>
                    <h2>Question {currentQuestionIndex + 1}</h2>
                    <p>{questions[currentQuestionIndex].question}</p>
                    <ul>
                        (Click any option to select)
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <li key={index} onClick={() => handleAnswerClick(option)}>
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Quiz;
