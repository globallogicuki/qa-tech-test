
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { Img } from 'react-image';
import React from 'react';
import logo from '../logo.png';

const paperStyle = {
  padding: 20,
  height: 10000,
  margin: 20,
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '#ced7e5',
};

const Logo = () => <Img src={logo} />;

const Introduction = props => (
  <section id="home">
    <Paper style={paperStyle} zDepth={3}>
      <Logo />
      <h1 className="title">Welcome to the ECS Engineer in Test Tech Test</h1>
      <p className="intro">
          Using the programming language of your choice we want you to create a solution inside ./src/test/e2e/
          Use a UI testing tool to interact with the button below to continue with the test.
      </p>
      <RaisedButton data-test-id={"render-challenge"}  label="Render the Challenge" primary onClick={props.showChallenge} />
      <span style={{fontSize: 60}} role="img" aria-label="down-emoj" >⬇️</span>
    </Paper>
  </section>
);

export default Introduction;
