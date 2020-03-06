import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import Progress from './Progress'
import Question from './Question'
import Answers from './Answers'


import './style.css';


function QuestionsThreeAA() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState('');
  // const [answersA, setAnswersA] = useState([1,2,3]);

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


  // const renderResultsData = () => {
  //   return (
  //       <h2>
  //           {questions[0].question} - {answers[0].answer} <br/>
  //           {questions[1].question} - {answers[1].answer} <br/>
  //           {questions[2].question} - {answers[2].answer} <br/>
  //       </h2>
  //   )
  // }

    // const renderResultsData = () => {
    //     return answers.map(answer => {
    //     const question = questions.find( question => question.id === answer.questionId);
    //     return (
    //         <div key={question.id}>
    //         {question.question} - {answers.answer}
    //         </div>
    //     )
    //     })
    // }

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
          <NavLink exact to='/playbill-four-aaa'>
            Question Four
          </NavLink>
        </div>
      )
    }else if(b[0] === answers[0].answer) {
      return(
        <div>
          <NavLink exact to='/playbill-four-aab'>
            Question Four
          </NavLink>
        </div>
      )
    }else if(c[0] === answers[0].answer) {
      return(
        <div>
          <NavLink exact to='/playbill-four-aac'>
            Question Four
          </NavLink>
        </div>
      )
    }else{
      return(
        <div>
          <NavLink exact to='/playbill-four-aac'>
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
          {/* {renderResultsData()} */}
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

export default QuestionsThreeAA;
