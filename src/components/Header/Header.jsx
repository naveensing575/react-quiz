import React from "react";
import logo from "../../assets/quiz-logo.png";
import Quiz from "../Quiz/Quiz";
const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>ReactQuiz</h1>
      <Quiz />
    </header>
  );
};

export default Header;
