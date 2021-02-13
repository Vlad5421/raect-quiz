import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FnishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        ansverState: null,
        quiz: [
            {
                question: 'Какого цвета небо',
                rightAnsverId: 2,
                id: 1,
                ansvers: [
                    {text: 'Черный', id: 1},
                    {text: 'Синий', id: 2},
                    {text: 'Красный', id: 3},
                    {text: 'Зеленый', id: 4},
                ]
            },
            {
                question: 'В каком году основан Санкт Петрбург',
                rightAnsverId: 3,
                id: 2,
                ansvers: [
                    {text: '1700', id: 1},
                    {text: '1702', id: 2},
                    {text: '1703', id: 3},
                    {text: '1803', id: 4},
                ]
            },
        ]
    }

    ansverClickHandler = (ansverId) => {

        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results


        if (question.rightAnsverId === ansverId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }
            if (this.state.ansverState) {
                const  key = Object.keys(this.state.ansverState)[0]
                if (this.state.ansverState[key] === 'success') {
                    return
                }
            }
            this.setState({
                ansverState: {[ansverId]: 'success'},
                results
            })
        } else {
            if (!results[question.id]) {
                results[question.id] = 'error'
            }
            this.setState({
                ansverState: {[ansverId]: 'error'},
                results
            })
        }
        const timeout = window.setTimeout(()=>{
            if (this.isQuizFinished()) {
                this.setState({
                    isFinished:true
                })
            } else {
                this.setState({
                    activeQuestion: this.state.activeQuestion +1,
                    ansverState: null
                })
            }
            clearTimeout(timeout)
        }, 2000)

    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            ansverState: null,
            isFinished: false,
            results: {}
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1>Ответь на все впросы</h1>
                        {
                            this.state.isFinished
                            ? <FnishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            />
                            : <ActiveQuiz
                                question = {this.state.quiz[this.state.activeQuestion].question}
                                ansvers = {this.state.quiz[this.state.activeQuestion].ansvers}
                                onAnsverClick = {this.ansverClickHandler}
                                quizLength = {this.state.quiz.length}
                                numberQuestion = {this.state.activeQuestion + 1}
                                state={this.state.ansverState}
                            />
                        }
                    
                </div>
            </div>
        )
    }
}


export default Quiz