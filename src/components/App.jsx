import React, { Component } from 'react';
import { connect } from 'react-redux';
import {questionAnswer, nextQuestion, prevQuestion, submit} from '../redux/actions.js';
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
    this.appTips = this.appTips.bind(this);
    this.appImg = this.appImg.bind(this);
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
          <Botones appPrevClick={this.appPrevClick} appSubmitClick={this.appSubmitClick} appNextClick={this.appNextClick}/>
        </div>
      );
    } else {
      return (
        <div>
          <GameOver score={this.props.score}/>
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

/*
Para poner los bordes redondos de los botones
border-top-left-radius: 80px 80px;
border-top-right-radius: 80px 80px;
border-bottom-left-radius: 80px 80px;
border-bottom-right-radius: 80px 80px;


*************INCISO**************
Creo que se podría hacer todo el en app.js
Sobretodo para el css es mas fácil





}
*/
