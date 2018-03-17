import React, { Component } from 'react';
import Divider from "material-ui/Divider";
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import RenderTable from './RenderTable';
import Paper from 'material-ui/Paper'

import '../App.css';

const submitForm = (answers) => {
  // submit to endpoint
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
        <h1>Arrays</h1>

        <h3>Below are a number of arrays.</h3>

        <p>
          Your job is to use selenium to find the elements in each array listed below.
          Once found write a function that is able to return the index where the sum of the arrays integers on the left is equal to the sum of integers on the right.
          If there is no index return null
        </p>
        <p>
          For example given the array
          <code>[10, 15, 5, 7, 1, 24, 38] </code>

          You would return index 6
        </p>

        <RenderTable/>

        <TextField hintText="submit challenge 1" underlineShow={false} />
        <Divider />
        <TextField hintText="submit challenge 1" underlineShow={false} />
        <Divider />
        <TextField hintText="submit challenge 3" underlineShow={false} />
        <Divider />
        <RaisedButton label="Submit Answers" primary={true} onClick={submitForm}/>
      </div>
      </Paper>
  </section>
)

export default Challenge;
