import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quiz from './components/Quiz';
import QuizManager from './components/QuizManager';

function App() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Rome', 'Berlin'],
      correctAnswer: 'Paris',
    },
    {
      id: 2,
      question: 'What is the largest planet in our solar system?',
      options: ['Mars', 'Jupiter', 'Earth', 'Saturn'],
      correctAnswer: 'Jupiter',
    }
  ]);

  return (
    <div>
      <h1>Quiz Game</h1>
      <h2>Please attempt all questions</h2>
      <Quiz questions={questions} />
      <hr />
      <h2>Manage questions</h2>
      <QuizManager questions={questions} setQuestions={setQuestions} />
    </div>
  );
}

export default App;
