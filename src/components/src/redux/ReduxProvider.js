import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';
import { questions } from "../assets/mock-data.js";
import React from 'react';
import App from '../components/App.jsx';

export default class ReduxProvider extends React.Component {
  constructor(props) {
    super(props)
    this.initialState = {
      score: 0,
      finished: false,
      currentQuestion: 0,
      questions: [...questions] };
    this.store = this.configureStore();
    //this.download = this.download.bind(this);
  }

  /*download() {
      let url = "https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=5effb23b240e1ed4485d";
      let xhr = new XMLHttpRequest(); // the request

      xhr.open("GET", url, true); // true makes the request asynchronous
      xhr.onreadystatechange = function() {   // es la funcion de retrollamada que sera ejecutada (invocada) cuando cambie
                                              // el valor de la propiedad readyState
          let status;
          let data;
          if(xhr.readyState === 4) {// readyState == XMLHttpResquest.DONE
              status = xhr.status;
              if (xhr.status === 200) {
                  data = JSON.parse(xhr.responseText);
                  this.setinitialState({
                      questios: data,
                  });
              } else{
                  console.error(xhr.statusText);
              }
          }
      }.bind(this);
      xhr.send(); // sends the request to the server
    }*/

  render() {
    return(
      <Provider store={ this.store }>
        <div style={{ height: '100%' }}>
          <App store={ this.store} />
        </div>
      </Provider>
    );
  }

  configureStore() {
    return createStore(GlobalState, this.initialState);
  }
}
