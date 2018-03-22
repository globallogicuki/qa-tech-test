import React, { Component } from 'react';
import Challenge from './components/Challenge'
import logo from './logo.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper'
import Lightbox from 'react-images';

import './App.css';

const paperStyle = {
  padding: 20,
  height: 2500,
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
    const show = this.state.showChallenge === true ? false : true;
    this.setState({showChallenge: show});

  };

  componentDidUpdate() {
    if (this.state.showChallenge === true) {
      const elem = document.getElementById('challenge'); 
      elem.scrollIntoView({block: 'end', behavior: 'smooth'});
    }
  }

  render(){ 
  return(
  <MuiThemeProvider>
          <div>
            <Intro showChallenge={this.showChallenge}/>
            {this.state.showChallenge === true && 
            <Challenge/>
          }
          </div>
  </MuiThemeProvider>
  )}
}

const Intro = (props) => (
  <section id="home">
    <Paper style={paperStyle} zDepth={3}>
      <h1 className="title">Welcome to the ECSDigital Engineer in Test tech Test</h1>
      <p className="intro">
        It's time to get serious. 
        Using the programming language of your choice we want you to create a simple selenium framework in .src/test/e2e.
        Use selenium to click the button below to continue with the test.
      </p>
      <RaisedButton label="Render the Challenge" primary={true} onClick={props.showChallenge} />
    </Paper>
  </section>
)

// scrolling into view
//https://stackoverflow.com/questions/41692785/scroll-page-to-the-nested-react-component-on-a-button-click