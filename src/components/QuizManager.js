import React, { useState } from 'react';

const QuizManager = ({ questions, setQuestions }) => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        question: '',
        options: ['', '', '', ''],
        correctAnswer: '',
    });

    const handleInputChange = (e, index) => {
        const updatedOptions = [...formData.options];
        updatedOptions[index] = e.target.value;
        setFormData({ ...formData, options: updatedOptions });
    };

    const handleAddQuestion = () => {
        const newQuestion = {
            id: questions.length + 1,
            question: formData.question,
            options: formData.options,
            correctAnswer: formData.correctAnswer,
        };
        setQuestions([...questions, newQuestion]);
        setFormData({
            question: '',
            options: ['', '', '', ''],
            correctAnswer: '',
        });
        setShowForm(false);
    };

    const handleDeleteQuestion = (id) => {
        const updatedQuestions = questions.filter((question) => question.id !== id);
        setQuestions(updatedQuestions);
    };

    return (
        <div>
            <h2>Quiz Manager</h2>
            <button onClick={() => { setShowForm(!showForm); }}>Add Question</button>
            {
                showForm ?
                    <div>
                        <div>
                            <label htmlFor="question">Question:</label>
                            <input
                                type="text"
                                id="question"
                                value={formData.question}
                                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                            />
                        </div>
                        <div>
                            <p>Options:</p>
                            {formData.options.map((option, index) => (
                                <div key={index}>
                                    <input
                                        type="text"
                                        value={option}
                                        onChange={(e) => handleInputChange(e, index)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <label htmlFor="correctAnswer">Correct Answer:</label>
                            <input
                                type="text"
                                id="correctAnswer"
                                value={formData.correctAnswer}
                                onChange={(e) => setFormData({ ...formData, correctAnswer: e.target.value })}
                            />
                        </div>
                        <button onClick={handleAddQuestion}>Save Question</button>
                    </div> : <div></div>
            }
        </div>
    );
};

export default QuizManager;
