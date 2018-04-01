
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper'
import Img from 'react-image';
import React, { Component } from 'react';
import logo from '../logo.png';

const paperStyle = {
    padding: 20,
    height: 4500,
    margin: 20,
    alignItems:'center',
    textAlign: 'center',
    backgroundColor: '#ced7e5'
  };
  
const Logo = () => <Img src={logo} />

const Introduction = (props) => (
    <section id="home">
      <Paper style={paperStyle} zDepth={3}>
      <Logo/>
        <h1 className="title">Welcome to the ECSDigital Engineer in Test tech test</h1>
        <p className="intro">
          Using the programming language of your choice we want you to create a simple selenium framework in .src/test/e2e.
          Use selenium to click the button below to continue with the test.
        </p>
        <RaisedButton label="Render the Challenge" primary={true} onClick={props.showChallenge} />
      </Paper>
    </section>
  )

  export default Introduction;