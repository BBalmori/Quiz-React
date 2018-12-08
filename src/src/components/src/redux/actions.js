export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const PREV_QUESTION = 'PREV_QUESTION';
export const SUBMIT = 'SUBMIT';
export const RESET = 'RESET';
//export const INIT_QUESTION = 'INIT_QUESTION';

export function questionAnswer(index, answer) {
  return {type: 'QUESTION_ANSWER', load: {index, answer}};
}

export function nextQuestion(index, length) {
  return {type: 'NEXT_QUESTION', load: {index, length}};
}
export function prevQuestion(index, length) {
  return {type: 'PREV_QUESTION', load: {index, length}};
}
export function submit(questions) {
  return {type: 'SUBMIT', questions: questions};
}
export function reset() {
  return {type: 'RESET'};
}


/*export function initQuestions(questions, finished) {
  return {type: 'INIT_QUESTION', questions: questions}
}*/
