import React from 'react';
import Answer from './Answer'

const Answers = (props) => {
    return(
        <>
            <Answer 
                letter='A' 
                answer={props.question.answer_a} 
                selected={props.currentAnswer === 'a'} 
                handleClick={props.handleClick}
            />
            <Answer 
                letter='B' 
                answer={props.question.answer_b} 
                selected={props.currentAnswer === 'b'} 
                handleClick={props.handleClick}
            />
            <Answer 
                letter='C' 
                answer={props.question.answer_c} 
                selected={props.currentAnswer === 'c'} 
                handleClick={props.handleClick}
            />
        </>
    )
}

export default Answers;