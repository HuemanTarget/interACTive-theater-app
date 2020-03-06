import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import Progress from './Progress'
import Question from './Question'
import Answers from './Answers'


import './style.css';


function QuestionsThreeAC() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState('');
  

  const questions = [
    {
        id: 1,
        question: 'Who is the murderer?',
        answer_a: 'Ernie Middleware',
        answer_b: 'Blake Johnson',
        answer_c: 'Mustang Zane',
    },
  ];
    

  const question = questions[currentQuestion];

  const handleClick = e => {
    setCurrentAnswer(e.target.value)
    setError('');
  }

  const renderError = () => {
    if (!error) {
      return;
    }

    return <div className='error'>{error}</div>

  }


 

  const next = () => {
    const answer = {questionId: question.id, answer: currentAnswer};

    if (!currentAnswer) {
      setError('Please select an option');
      return;
    }

    answers.push(answer);
    setAnswers(answers);
    setCurrentAnswer('');

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }

    setShowResults(true);
  }
  console.log(questions)
  console.log(answers)

  const nextQuestion = () => {
    let a = ["A","A","A"];
    let b = ["B","B","B"];
    let c = ["C","C","C"];
    
    if (a[0] === answers[0].answer) {
      return(
        <div>
          <NavLink exact to='/playbill-four-aca'>
            Question Four
          </NavLink>
        </div>
      )
    }else if(b[0] === answers[0].answer) {
      return(
        <div>
          <NavLink exact to='/playbill-four-acb'>
            Question Four
          </NavLink>
        </div>
      )
    }else if(c[0] === answers[0].answer) {
      return(
        <div>
          <NavLink exact to='/playbill-four-acc'>
            Question Four
          </NavLink>
        </div>
      )
    }else{
      return(
        <div>
          <NavLink exact to='/playbill-four-acc'>
            Question Four
          </NavLink>
        </div>
      )
    }
  }

  if (showResults) {
    return(
      <div className='container results'>
        <h3>
        Thank You For Voting.<br/>
        Your Answers Change How<br/>
        The Rest Of The Story Plays Out.<br/>
        </h3>
        <br/>
          
          {nextQuestion()}
      </div>
    )
  }else{
  return (
    <div className='container'>
      <Progress total={questions.length} current={currentQuestion + 1} />
      <Question question={question.question} />
      {renderError()}
      <Answers question={question} currentAnswer={currentAnswer} handleClick={handleClick} />
      <button className='btn btn-primary' onClick={next}>
        Confirm And Continue
      </button>
    </div>
  );
  }
}

export default QuestionsThreeAC;
