import React, { Component } from 'react';
import { connect } from 'react-redux';
import {questionAnswer, nextQuestion, prevQuestion, submit} from './redux/actions.js';
import Header from './components/Header.jsx';
import Botones from './components/Botones.jsx'
import Body from './components/Body.jsx'
import Input from './components/Input.jsx'
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.appPrevClick = this.appPrevClick.bind(this);
    this.appNextClick = this.appNextClick.bind(this);
    this.appSubmitClick = this.appSubmitClick.bind(this);
  }

  appPrevClick() {
    this.props.dispatch(prevQuestion(this.props.currentQuestion, this.props.questions.length));
  }
  appNextClick() {
    this.props.dispatch(nextQuestion(this.props.currentQuestion, this.props.questions.length));
  }
  appSubmitClick() {
    this.props.dispatch(submit(this.props.questions));
  }

  render() { //background-image: url("");
    console.log(this.props);
    return(
      <div>
        <Header q = {this.props.questions[this.props.currentQuestion]}/>
        <Body attach = {this.props.questions[this.props.currentQuestion]}/>
        <Input question = {this.props.questions[this.props.currentQuestion]}
          onQuestionAnswer={(answer) => {
            this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))}}/>
        <Botones appPrevClick={this.appPrevClick}/>
        <Botones appNextClick={this.appNextClick}/>
        <Botones appSubmitClick={this.appSubmitClick}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    score: state.score,
    finished: state.finished,
    currentQuestion: state.currentQuestion,
    questions: state.questions
  };
}

export default connect(mapStateToProps)(App)

/*
Para poner los bordes redondos de los botones
border-top-left-radius: 80px 80px;
border-top-right-radius: 80px 80px;
border-bottom-left-radius: 80px 80px;
border-bottom-right-radius: 80px 80px;


*************INCISO**************
Creo que se podría hacer todo el en app.js
Sobretodo para el css es mas fácil



Para poner iconos en los imagenes
*/
