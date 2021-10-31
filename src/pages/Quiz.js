import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal, { setAppElement } from "react-modal";
import img from "../image/congr.jpeg";
import { fireEvent } from "@testing-library/dom";

function Quiz() {
  // const [persons, setPersons] = useState([]);
  // const fetchData = () => {
  //     const axios = require("axios");
  //     axios.get(`http://laravel.test/api/quiz`).then((res) => {
  //     const fdata = res.data;
  //     setPersons(res.data);
  //     console.log(JSON.stringify(res.data));
  //     });
  // };
  const questions = [
    {
      questionText:
        "Who is the leading wicket taker in the history of Test cricket?",
      isRead: false,
      answerOptions: [
        { answerText: "Muttiah Muralitharan", isCorrect: true },
        { answerText: "Courtney Walsh", isCorrect: false },
        { answerText: "Brian Lara", isCorrect: false },
        { answerText: "Shane Warne", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which player has scored the most runs in a single Test innings?",
      isRead: false,
      answerOptions: [
        { answerText: "Brian Lara", isCorrect: true },
        { answerText: "Matthew Hayden", isCorrect: false },
        { answerText: "Graham Gooch", isCorrect: false },
        { answerText: "Agarkar", isCorrect: false },
      ],
    },
    {
      questionText: "Who has scored the most Test hundreds ever?",
      isRead: false,
      answerOptions: [
        { answerText: "Sachin Tendulkar", isCorrect: true },
        { answerText: "Steve Waugh", isCorrect: false },
        { answerText: "Shane Warne", isCorrect: false },
        { answerText: "Sunil Gavaskar", isCorrect: false },
      ],
    },
    {
      questionText: "Which country won the World Cup in 1999?",
      isRead: false,
      answerOptions: [
        { answerText: "South Africa", isCorrect: false },
        { answerText: "England", isCorrect: false },
        { answerText: "Australia", isCorrect: true },
        { answerText: "Pakistan", isCorrect: false },
      ],
    },
    {
      questionText: "Who has played most consecutive world cup matches?",
      isRead: false,
      answerOptions: [
        { answerText: "Sachin tendulkar", isCorrect: false },
        { answerText: "Ricky pointing", isCorrect: true },
        { answerText: "Kumar sangakarra", isCorrect: false },
        { answerText: "Glenn mcgrath", isCorrect: false },
      ],
    },
    {
      questionText: "2019 world cup held in which country?",
      isRead: false,
      answerOptions: [
        { answerText: "India", isCorrect: false },
        { answerText: "England", isCorrect: true },
        { answerText: "Srilanka", isCorrect: false },
        { answerText: "South Africa", isCorrect: false },
      ],
    },
    {
      questionText: "Which country will host the 2023 cricket world cup?",
      isRead: false,
      answerOptions: [
        { answerText: "England", isCorrect: false },
        { answerText: "India", isCorrect: true },
        { answerText: "Newzeland", isCorrect: false },
        { answerText: "Pakistan", isCorrect: false },
      ],
    },
    {
      questionText: "What is color of ball used in limited over match ?",
      isRead: false,
      answerOptions: [
        { answerText: "Green", isCorrect: false },
        { answerText: "White", isCorrect: true },
        { answerText: "Red", isCorrect: false },
        { answerText: "Pink", isCorrect: false },
      ],
    },
    {
      questionText: "What does DRS stand for?",
      isRead: false,
      answerOptions: [
        { answerText: "Decision Review System", isCorrect: true },
        { answerText: "Decision Review Scenario", isCorrect: false },
        { answerText: "Decision Review State", isCorrect: false },
        { answerText: "Decision Relief System", isCorrect: false },
      ],
    },
    {
      questionText:
        "How many runs are given to the batting side if a bowler bowls a no-ball and it goes to the boundary?",
      isRead: false,
      answerOptions: [
        { answerText: "4", isCorrect: false },
        { answerText: "5", isCorrect: true },
        { answerText: "6", isCorrect: false },
        { answerText: "3", isCorrect: false },
      ],
    },
    {
      questionText:
        "Who captained Sri Lanka to victory at the World Cup final in 1996?",
      isRead: false,
      answerOptions: [
        { answerText: "Romesh Rathnayake", isCorrect: false },
        { answerText: "Arjuna Ranatunga", isCorrect: true },
        { answerText: "Aravinda De Silva", isCorrect: false },
        { answerText: "Sanath Jayasuriya", isCorrect: false },
      ],
    },
    {
      questionText:
        "In which part of the world would you find the Wankhede Stadium?	",
      isRead: false,
      answerOptions: [
        { answerText: "South Africa", isCorrect: false },
        { answerText: "Dubai", isCorrect: false },
        { answerText: "Pakistan", isCorrect: false },
        { answerText: "India", isCorrect: true },
      ],
    },
    {
      questionText:
        "Who holds the record for the fastest ODI century of all time?",
      isRead: false,
      answerOptions: [
        { answerText: "Sanath Jayasuriya", isCorrect: false },
        { answerText: "Matthew Hayden", isCorrect: false },
        { answerText: "Yuvaraj Singh", isCorrect: false },
        { answerText: "AB de Villiers", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which Country recorded highest innings total in Test history?",
      isRead: false,
      answerOptions: [
        { answerText: "India", isCorrect: false },
        { answerText: "Sri Lanka", isCorrect: true },
        { answerText: "Australia", isCorrect: false },
        { answerText: "West Indies", isCorrect: false },
      ],
    },
    {
      questionText: "Who Scored 4 consecutive centuries in world cup?",
      isRead: false,
      answerOptions: [
        { answerText: "AB de Villiers", isCorrect: false },
        { answerText: "Chris Gayle", isCorrect: false },
        { answerText: "Kumar Sangakkara", isCorrect: true },
        { answerText: "Sachin Tendulkar", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isRead, setStatus] = useState(false);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [ShowDialogbox, setShowDialogbox] = useState(false);
  // const [isSuccess,setIsSuccess]= useState(true);
  const [highScore, setHighScore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  Modal.setAppElement("#root");

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      toggleModal();
    }

    setIndex(index + 1);

    const nextQuestion = Math.floor(Math.random() * questions.length);

    if (index < 9 && isRead === false) {
		if (nextQuestion < questions.length) {
		  console.log("questions.length>>> " + questions.length);
		  console.log("nextQuestion>>> " + nextQuestion);
		  console.log("neindextQuestion>>> " + index);
        setCurrentQuestion(nextQuestion);
        // setStatus(currentQuestion =questions[index]);
      }
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app1">
      {showScore ? (
        <div>
          <div>
            <div className="score-header">
              <center>
                <b>{score == 10 ? "CONGRATULATION" : "Fail"}!</b>
              </center>
            </div>
            <div className="score-section">
              <b>You scored {score} out of 10</b>
              <br></br>
              <br></br>
            </div>
          </div>

          <div id="header">
            <center>
              <a className="btn btn-warning" href="/">
                Home
              </a>
            </center>
          </div>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>
              <b>Question {index + 1}</b>
            </span>
            /10
            <div className="question-text">
              <b>{questions[currentQuestion].questionText}</b>
            </div>
          </div>
          <div>
            {/* <Modal
								isOpen={isOpen}
								onRequestClose={toggleModal}
								contentLabel="My dialog"
								// ariaHideApp={false}
							>
								<div>My modal dialog.</div>
								<div>
								<img src={img} alt="G1s" width="840" className="img-fluid"/>

								</div>
								<button onClick={toggleModal}>Next questions</button>
							</Modal> */}
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="n"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Quiz;
