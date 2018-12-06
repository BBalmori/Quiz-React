import React from 'react' ;
import '../css/App.css';


export default class Body extends React.Component {

  render () {
    return (
      <div className="Body">
        <img id="img" src={this.props.attach.attachment.url} width="400" height="300" alt=""/>
      </div>
    );
  }
}
