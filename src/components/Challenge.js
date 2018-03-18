import React, { Component } from 'react';
import Divider from "material-ui/Divider";
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import RenderTable from './RenderTable';
import Paper from 'material-ui/Paper'

import '../App.css';

const submitForm = () => {
  console.log('------------------------------------');
  console.log(answers);
  console.log('------------------------------------');
  // submit to endpoint
}

const answers = [];

const handleText = (event, text) => {
  answers.push(text);
}

const paperStyle = {
  padding: 20,
  height: 800,
  margin: 20,
  textAlign: 'center',
};

const Challenge = () => (
  <section id="challenge">
  <Paper style={paperStyle} zDepth={3}>

      <div>
        <h1>Arrays Challenge</h1>

        <h3>Below are a number of rows with integers</h3>

        <p>
          Your job is to use selenium to read the dom and create an array data structure for each of the rows.
          
          Once you have the array
          write a function that is able to return the index of the array where the sum of integers on the left is equal to the sum of integers on the right.
          If there is no index return null
        </p>
        <p>
          For example given the array <code>[10, 15, 5, 7, 1, 24, 38] </code>
          You would return 6 as the sum of integers on the left is 38 and the sum of integers on the right is 38
        </p>

        <RenderTable/>

        <TextField hintText="submit challenge 1" underlineShow={false} onChange={handleText}/>
        <Divider />
        <TextField hintText="submit challenge 1" underlineShow={false} onChange={handleText}/>
        <Divider />
        <TextField hintText="submit challenge 3" underlineShow={false} onChange={handleText}/>
        <Divider />
        
        <RaisedButton label="Submit Answers" primary={true} onClick={submitForm}/>
      </div>
      </Paper>
  </section>
)

export default Challenge;
