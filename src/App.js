import React, { Component } from 'react';
import Challenge from './components/Challenge'
import logo from './logo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper'
import './App.css';

const paperStyle = {
  padding: 20,
  height: 800,
  margin: 20,
  textAlign: 'center',
};


export default class App extends Component {
  constructor(props) {
    super()
    this.showChallenge = this.showChallenge.bind(this);
  };

  state = {
    showChallenge: false
  };

  showChallenge() {
    this.setState({showChallenge: true});
  };

  render(){ 
  return(
  <MuiThemeProvider>
          <div>
            <Intro showChallenge={this.showChallenge}/>
            {this.state.showChallenge === true && 
            <Challenge />
          }
          </div>
  </MuiThemeProvider>
  )}
}

const Intro = (props) => (
  <section id="home">
    <Paper style={paperStyle} zDepth={3}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">Welcome to the ECSDigital Engineer in Test tech Test</h1>
      </header>
      <p className="intro">
        It's time to get serious. We want you would like you to complete the the e2e test that can be found in <code>src/e2e/</code>
      </p>
      <RaisedButton onClick={props.showChallenge}>
      </RaisedButton>
    </Paper>
  </section>
)

// scrolling into view
//https://stackoverflow.com/questions/41692785/scroll-page-to-the-nested-react-component-on-a-button-click