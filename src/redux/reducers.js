import { combineReducers } from 'redux';
//import { QUESTION_ANSWER, NEXT_QUESTION, PREV_QUESTION, SUBMIT, INIT_QUESTION } from './actions'

function score(state = 0, action = {}) {
  switch (action.type) {
    case "SUBMIT":
      let count = 0;
      for (let i = 0; i<action.questions.length; i++) {
        if (action.questions[i].answer === action.questions[i].userAnswer) {
          count++;
        }
      }
      state = count;
      return state;
    default:
      return state;
  }
}

function finished(state = false, action = {}) {
  switch (action.type) {
    case "SUBMIT":
      state = true;
      return state;
    default:
      return state;
  }
}

function currentQuestion(state = 0, action = {}) {
  switch (action.type) {
    case "NEXT_QUESTION":
      if( state === action.load.length-1 ){
        state = 0;
        return state;
      }
      return state + 1;
    case "PREV_QUESTION":
      if( state === 0 ){
        return state;
      }
      return state - 1;
    default:
      return state;
  }
}

function questions(state = [], action = {}) {
  switch (action.type) {
    case "QUESTION_ANSWER":
      return state.map((question, i) => {
        return {...question, userAnswer: action.load.index === i ? action.load.answer : question.userAnswer}
      })
    default:
      return state;
  }
}

const GlobalState = (combineReducers({
  score,
  finished,
  currentQuestion,
  questions
}));

export default GlobalState;
