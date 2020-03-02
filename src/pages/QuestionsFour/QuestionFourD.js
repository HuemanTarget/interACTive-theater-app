import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom'
import Progress from '../QuestionsFour/Progress'
import Question from '../QuestionsFour/Question'
import Answers from '../QuestionsFour/Answers'


import './style.css';


function QuestionsFourD() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState('');
  // const [answersA, setAnswersA] = useState([1,2,3]);

  const questions = [
    {
        id: 1,
        question: '4D - Who is the murderer?',
        answer_a: 'Sir Kennsignton',
        answer_b: 'Martha Blackwood',
        answer_c: 'Anderson Brinkley',
        answer_d: 'Brandon Aldridge',
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
    let a = ["A"];
    let b = ["B"];
    let c = ["C"];
    let d = ["D"];
    
    if (a[0] === answers[0].answer) {
      return(
        <div>
          Answer A
        </div>
      )
    }else if(b[0] === answers[0].answer) {
      return(
        <div>
          Answer B
        </div>
      )
    }else if(c[0] === answers[0].answer) {
      return(
        <div>
          Answer C
        </div>
      )
    }else if(d[0] === answers[0].answer) {
      return(
        <div>
          Answer D
        </div>
      )
    }
  }

  if (showResults) {
    return(
      <div className='container results'>
        <h2>
        Thank You For Voting.<br/>
        The Audiences Answers Will Help<br/>
        Determine The Rest Of The Show.<br/>
        </h2>
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

export default QuestionsFourD;
