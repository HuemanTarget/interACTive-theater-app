import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useSession } from '../../App'
import Firebase from '../../components/Firebase/firebase'
import firebase from 'firebase'
import Progress from '../QuestionsOne/Progress'
import Question from '../QuestionsOne/Question'
import Answers from '../QuestionsOne/Answers'

// import QuestionsTwoA from '../QuestionsTwo/QuestionTwoA'
// import QuestionsTwoB from '../QuestionsTwo/QuestionTwoB'
// import QuestionsTwoC from '../QuestionsTwo/QuestionTwoC'
// import QuestionsTwoD from '../QuestionsTwo/QuestionTwoD'
// import QuestionsTwoE from '../QuestionsTwo/QuestionTwoE'


import './style.css';


function QuestionOne(props) {
  const user = useSession()
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [answerInput, setAnswerInput] = useState('')
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState('');
  // const [answersA, setAnswersA] = useState([1,2,3]);

  const questions = [
    {
        id: 1,
        question: 'Who was just murdered?',
        answer_a: 'Sir Kennsignton',
        answer_b: 'Martha Blackwood',
        answer_c: 'Anderson Brinkley',
        answer_d: 'Brandon Aldridge',
    },
    {
        id: 2,
        question: 'How were they murdered?',
        answer_a: 'Knife in the back.',
        answer_b: 'Poison.',
        answer_c: 'Candlestick to the head.',
        answer_d: 'Stranglation',
    },
    {
        id: 3,
        question: 'Who do you think was the murderer?',
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

  const handleSubmit = async event => {
    event.preventDefault()
    const batch = Firebase.db.batch()
    const userRef = Firebase.db.collection('users').doc(user.uid)
    try {
      // Create a new post doc with auto ID locally
      const newAnswerRef = Firebase.db.collection('answers').doc()
      // add batch op to set post data including logged in uid
      batch.set(newAnswerRef, {
        title: answerInput,
        lastModified: firebase.firestore.FieldValue.serverTimestamp(),
        uid: user.uid,
      })
      // add batch op to update user posts array
      batch.update(userRef, {
        posts: firebase.firestore.FieldValue.arrayUnion(newAnswerRef.id),
      })
      // commit batch ops
      batch.commit().then(() => {
        console.log('Added new post', newAnswerRef.id)
      })
    } catch (error) {
      console.error('Error adding document: ', error)
    }
    setAnswerInput('')
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
    let d = ["A","B","C"];
    
    if (a[0] === answers[0].answer) {
      return(
        <div>
          <NavLink exact to='/questions-two-a'>
            Questions Two
          </NavLink>
        </div>
      )
    }else if(b[0] === answers[0].answer) {
      return(
        <div>
          <NavLink exact to='/questions-two-b'>
            Questions Two
          </NavLink>
        </div>
      )
    }else if(c[0] === answers[0].answer) {
      return(
        <div>
          <NavLink exact to='/questions-two-c'>
            Questions Two
          </NavLink>
        </div>
      )
    }else if(d[0] === answers[0].answer) {
      return(
        <div>
          <NavLink exact to='/questions-two-d'>
            Questions Two
          </NavLink>
        </div>
      )
    }else{
      return(
        <div>
          <NavLink exact to='/questions-two-e'>
            Questions Two
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
    <form
        onSubmit={handleSubmit}
        style={{ marginTop: '.5em', marginBottom: '.5em' }}
    >
      <Progress total={questions.length} current={currentQuestion + 1} />
      <Question question={question.question} />
      {renderError()}
      <Answers question={question} currentAnswer={currentAnswer} handleClick={handleClick} />
      <button className='btn btn-primary' onClick={next}>
        Confirm And Continue
      </button>
    </form>
    </div>
  );
  }
}

export default QuestionOne;
