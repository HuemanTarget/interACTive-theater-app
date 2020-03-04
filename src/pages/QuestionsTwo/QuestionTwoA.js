import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import Progress from '../QuestionsTwo/Progress'
import Question from '../QuestionsTwo/Question'
import Answers from '../QuestionsTwo/Answers'

// import QuestionsTwoA from '../QuestionsTwo/QuestionTwoA'
// import QuestionsTwoB from '../QuestionsTwo/QuestionTwoB'
// import QuestionsTwoC from '../QuestionsTwo/QuestionTwoC'
// import QuestionsTwoD from '../QuestionsTwo/QuestionTwoD'
// import QuestionsTwoE from '../QuestionsTwo/QuestionTwoE'


import './style.css';


function QuestionsTwoA() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState('');
  // const [answersA, setAnswersA] = useState([1,2,3]);

  const questions = [
    {
        id: 1,
        question: 'Who fell through the floor?',
        answer_a: 'Bitana The Great',
        answer_b: 'DJ Galindo',
        answer_c: 'The Sophias',
    },
    {
        id: 2,
        question: 'What did they yell as they fell?',
        answer_a: 'Oh Shit!',
        answer_b: "I'm too young to die!",
        answer_c: 'Tell my Long Furby I love him.',
    },
    {
        id: 3,
        question: 'What animal do you wish you could be?',
        answer_a: 'Cat',
        answer_b: 'Dog',
        answer_c: 'Lobster',
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


//   const renderResultsData = () => {
//     return (
//         <h2>
//             {questions[0].question} - {answers[0].answer} <br/>
//             {questions[1].question} - {answers[1].answer} <br/>
//             {questions[2].question} - {answers[2].answer} <br/>
//         </h2>
//     )
//   }

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
    
    if (a[0] + a[1] + a[2] === answers[0].answer + answers[1].answer + answers[2].answer) {
      return(
        <div>
          <NavLink exact to='/playbill-three-a'>
            Continue The Story
          </NavLink>
        </div>
      )
    }else if(b[0] + b[1] + b[2] === answers[0].answer + answers[1].answer + answers[2].answer) {
      return(
        <div>
          <NavLink exact to='/playbill-three-b'>
            Continue The Story
          </NavLink>
        </div>
      )
    }else if(c[0] + c[1] + c[2] === answers[0].answer + answers[1].answer + answers[2].answer) {
      return(
        <div>
          <NavLink exact to='/playbill-three-c'>
            Continue The Story
          </NavLink>
        </div>
      )
    }else{
      return(
        <div>
          <NavLink exact to='/playbill-three-c'>
            Continue The Story
          </NavLink>
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

export default QuestionsTwoA;
