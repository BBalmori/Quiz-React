import React from 'react' ;
import '../css/App.css';


export default class GameOver extends React.Component {
  render () {
    return (
      <div className="Game-Over">
        <h2 id="go">GAME OVER!</h2>
        <p id="punt"> Tu puntuacion es: {this.props.score}</p>
      </div>
    )
  }
}
