import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnsversList from './AnsversList/AnsversList'


const ActiveQuiz = props => (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>{props.numberQuestion}.</strong>&nbsp;
                    { props.question }?
                </span>
                <small>{props.numberQuestion} из {props.quizLength}</small>
            </p>

            <AnsversList 
                ansvers = {props.ansvers}
                onAnsverClick = { props.onAnsverClick }
                state={props.state}
            />
            
        </div>
)

export default ActiveQuiz