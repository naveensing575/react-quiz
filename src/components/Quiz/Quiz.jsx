import React, { useState } from "react";
import { questions } from "../../constants/questions";
const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const [activeQuestion, setActiveQuestion] = useState(
    questions[activeQuestionIndex]
  );
  return <p>Active Questions</p>;
};

export default Quiz;
