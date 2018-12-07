import React from 'react' ;
import '../css/App.css';


export default class Body extends React.Component {
  render () {
    console.log(this.props.aux);
    if (this.props.aux) {
      return (
        <div className="BodyImg">
          <img id="img" src={this.props.attach.attachment.url}  width="400" height="300" alt=""/>
        </div>
      );
    } else {
      return (
        <div className="BodyTips">
          <li id="listatips">{this.props.attach.tips}></li>
        </div>
      );
    }
  }
}
