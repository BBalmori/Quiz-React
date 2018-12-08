import { combineReducers } from 'redux';
import { QUESTION_ANSWER, NEXT_QUESTION, PREV_QUESTION, SUBMIT, RESET, INIT_QUESTION, IMG} from './actions'

function score(state = 0, action = {}) {
    switch (action.type) {
        case NEXT_QUESTION:
            let countt = 0;
            for (let i = 0; i<action.questions.length; i++) {
                if (action.questions[i].answer === action.questions[i].userAnswer) {
                    countt++;
                }
            }
            state = countt;
            return state;
        case SUBMIT:
            let count = 0;
            for (let i = 0; i<action.questions.length; i++) {
                if (action.questions[i].answer === action.questions[i].userAnswer) {
                    count++;
                }
                action.questions[i].userAnswer = 0;
            }
            state = count;
            return state;
        case RESET:

            state = 0;

            return state;
        default:
            return state;
    }

}
function finished(state = false, action = {}) {
  switch (action.type) {
    case SUBMIT:
      state = true;
      return state;
    case RESET:
      state = false;
      return state;
    default:
      return state;
  }
}

function currentQuestion(state = 0, action = {}) {
  switch (action.type) {
    case NEXT_QUESTION:
      if( state === action.load.length-1 ){
        state = 0;
        return state;
      }
      return state + 1;
    case PREV_QUESTION:
      if( state === 0 ){
        return state;
      }
      return state - 1;
    case RESET:
      state = 0;
      return state;
    default:
      return state;
  }
}

function questions(state = [], action = {}) {
  switch (action.type) {
    case QUESTION_ANSWER:
      return state.map((question, i) => {
        return {...question, userAnswer: action.load.index === i ? action.load.answer : question.userAnswer}
      })
    case INIT_QUESTION:
    return state.map((questions, i) => {
      return {questions, userAnswer: action.load.index === i ? action.load.answer : questions.userAnswer}
    })
    default:
      return state;
  }
}

function img(state = true, action = {}) {
  switch (action.type) {
    case IMG:
      if (action.img === true) {
        state = true;
        return state;
      } else {
        state = false;
        return state;
      }
    default:
      return state;
  }
}

const GlobalState = (combineReducers({
  score,
  finished,
  currentQuestion,
  questions,
  img
}));

export default GlobalState;
