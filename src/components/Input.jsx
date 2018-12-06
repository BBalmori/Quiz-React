import React from 'react' ;
import '../css/App.css';


export default class Header extends React.Component {
  render () {
    return (
      <div className="Input">
        <input id="texto" type="text" placeholder="Introduzca aquí la respuesta" value={this.props.question.userAnswer || ""} onChange={(e)=> {
            this.props.onQuestionAnswer(e.target.value);
        }}/>
        <button id="tips"/*onClick={this.tipsClick}*/>Tips</button>
      </div>
    )
  }
}
