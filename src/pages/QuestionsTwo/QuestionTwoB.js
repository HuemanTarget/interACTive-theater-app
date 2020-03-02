import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom'
import Progress from '../QuestionsTwo/Progress'
import Question from '../QuestionsTwo/Question'
import Answers from '../QuestionsTwo/Answers'

// import QuestionsTwoA from '../QuestionsTwo/QuestionTwoA'
// import QuestionsTwoB from '../QuestionsTwo/QuestionTwoB'
// import QuestionsTwoC from '../QuestionsTwo/QuestionTwoC'
// import QuestionsTwoD from '../QuestionsTwo/QuestionTwoD'
// import QuestionsTwoE from '../QuestionsTwo/QuestionTwoE'


import './style.css';


function QuestionsTwoB() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState('');
  // const [answersA, setAnswersA] = useState([1,2,3]);

  const questions = [
    {
        id: 1,
        question: '2B - 1?',
        answer_a: 'Sir Kennsignton',
        answer_b: 'Martha Blackwood',
        answer_c: 'Anderson Brinkley',
        answer_d: 'Brandon Aldridge',
    },
    {
        id: 2,
        question: '2B - 2?',
        answer_a: 'Knife in the back.',
        answer_b: 'Poison.',
        answer_c: 'Candlestick to the head.',
        answer_d: 'Stranglation',
    },
    {
        id: 3,
        question: '2B - 3?',
        answer_a: 'Samantha Spiney',
        answer_b: 'Bruce Santos',
        answer_c: 'Elizabeth Hershey',
        answer_d: 'Demarcus Michaels',
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


  const renderResultsData = () => {
    return (
        <h2>
            {questions[0].question} - {answers[0].answer} <br/>
            {questions[1].question} - {answers[1].answer} <br/>
            {questions[2].question} - {answers[2].answer} <br/>
        </h2>
    )
  }

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

//   const nextQuestion = () => {
//     let a = ["A","A","A"];
//     let b = ["B","B","B"];
//     let c = ["C","C","C"];
//     let d = ["A","B","C"];
    
//     if (a[0] + a[1] + a[2] === answers[0].answer + answers[1].answer + answers[2].answer) {
//       return(
//         <div>
//           <NavLink exact to='/questions-two-a'>
//             <QuestionsTwoA />
//           </NavLink>
//         </div>
//       )
//     }else if(b[0] + b[1] + b[2] === answers[0].answer + answers[1].answer + answers[2].answer) {
//       return(
//         <div>
//           <NavLink exact to='/questions-two-b'>
//             <QuestionsTwoB />
//           </NavLink>
//         </div>
//       )
//     }else if(c[0] + c[1] + c[2] === answers[0].answer + answers[1].answer + answers[2].answer) {
//       return(
//         <div>
//           <NavLink exact to='/questions-two-c'>
//             <QuestionsTwoC />
//           </NavLink>
//         </div>
//       )
//     }else if(d[0] + d[1] + d[2] === answers[0].answer + answers[1].answer + answers[2].answer) {
//       return(
//         <div>
//           <NavLink exact to='/questions-two-d'>
//             <QuestionsTwoD />
//           </NavLink>
//         </div>
//       )
//     }else{
//       return(
//         <div>
//           <NavLink exact to='/questions-two-e'>
//             <QuestionsTwoE />
//           </NavLink>
//         </div>
//       )
//     }
//   }

  if (showResults) {
    return(
      <div className='container results'>
        <h2>
        Thank You For Voting.<br/>
        The Audiences Answers Will Help<br/>
        Determine The Rest Of The Show.<br/>
        </h2>
        <br/>
          {renderResultsData()}
          {/* {nextQuestion()} */}
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

export default QuestionsTwoB;
