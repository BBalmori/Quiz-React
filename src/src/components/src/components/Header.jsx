import React from 'react' ;
import '../css/App.css';


export default class Header extends React.Component {
  render () {
    return (
      <div className="Question">
        <h1 id="question">
          {this.props.q.question}
        </h1>
      </div>
    )
  }
}
