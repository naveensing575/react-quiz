import React, { useState } from "react";
import questions from "../../constants/questions";
import QuizResults from "./QuizResults";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers?.length;

  const hasMoreQuestions = activeQuestionIndex < questions.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  };

  return (
    <div id="quiz">
      <div id="question">
        {hasMoreQuestions ? (
          <div>
            <h2>{questions[activeQuestionIndex].text}</h2>
            <ul>
              {questions[activeQuestionIndex]?.answers.map((answer) => (
                <li
                  key={answer}
                  className="answer"
                  onClick={() => {
                    setUserAnswers([...userAnswers, answer]);
                  }}
                >
                  <button onClick={() => handleSelectAnswer(answer)}>
                    {answer}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <QuizResults />
        )}
      </div>
    </div>
  );
};

export default Quiz;
