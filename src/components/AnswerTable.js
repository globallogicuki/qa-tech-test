import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

export default class AnswerTable extends Component {

 submitForm = () => {
  console.log('------------------------------------');
  console.log(this.state);
  console.log('------------------------------------');
  // submit to endpoint
}
  handleText = (event, value, formId) => {
    this.setState({
      [formId]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <TextField hintText="submit challenge 1" underlineShow={false} onChange={(event, value) => this.handleText(event, value, 'answer-1')}/>
        <Divider />
        <TextField hintText="submit challenge 1" underlineShow={false} onChange={(event, value) => this.handleText(event, value, 'answer-2')}/>
        <Divider />
        <TextField hintText="submit challenge 3" underlineShow={false} onChange={(event, value) => this.handleText(event, value, 'answer-3')}/>
        <Divider />
        <RaisedButton label="Submit Answers" primary={true} onClick={this.submitForm}/>
      </div>
    );
  }
}