import React, { Component } from 'react';
import { connect } from 'react-redux';
import {questionAnswer, nextQuestion, prevQuestion, submit, reset} from '../redux/actions.js';
import Header from './Header.jsx';
import Botones from './Botones.jsx'
import Body from './Body.jsx'
import Input from './Input.jsx'
import GameOver from './GameOver.jsx'
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.x = true;
    this.appPrevClick = this.appPrevClick.bind(this);
    this.appNextClick = this.appNextClick.bind(this);
    this.appSubmitClick = this.appSubmitClick.bind(this);
    this.appResetClick = this.appResetClick.bind(this);
    this.appTips = this.appTips.bind(this);
    this.appImg = this.appImg.bind(this);
  }
  appPrevClick() {
    this.props.dispatch(prevQuestion(this.props.currentQuestion, this.props.questions.length));
  }
  appNextClick() {
    this.props.dispatch(nextQuestion(this.props.currentQuestion, this.props.questions.length, this.props.questions));
  }
  appSubmitClick() {
    this.props.dispatch(submit(this.props.questions));
  }
  appResetClick() {
    this.props.dispatch(reset());
    ///////HAY QUE BORRAR LAS RESPUESTAS////////
  }

  appTips() {
      if (this.x) {
        this.x = false;
    }
  }
  appImg() {
    if (!this.x) {
      this.x = true;
    }
  }

  render() { //background-image: url("");
    console.log(this.props);
    if (this.props.finished === false){
      return(
        <div>
          <Header q = {this.props.questions[this.props.currentQuestion]}/>
          <Body attach = {this.props.questions[this.props.currentQuestion]} aux={this.x}/>
          <Input question = {this.props.questions[this.props.currentQuestion]}
            onQuestionAnswer={(answer) => {
              this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))}} appTips={this.appTips} appImg={this.appImg}/>
          <Botones appPrevClick={this.appPrevClick} appSubmitClick={this.appSubmitClick} appNextClick={this.appNextClick} />
          <p id="textoscore">LLevas {this.props.score} preguntas acertadas</p>
        </div>
      );
    } else {
      return (
        <div>
          <GameOver score={this.props.score} appResetClick={this.appResetClick}/>
        </div>
      );
    }
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
