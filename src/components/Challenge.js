import React, { Component } from 'react';
import Divider from "material-ui/Divider";
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import RenderTable from './RenderTable';
import Paper from 'material-ui/Paper';
import AnswerTable from './AnswerTable';
import '../App.css';

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
          
          Once you have each array
          write a function that is able to return the index of the array where the sum of integers on the left is equal to the sum of integers on the right.
          If there is no index return null
        </p>
        <p>
          For example given the array <code>[10, 15, 5, 7, 1, 24, 36, 2] </code>
          index 5 (with the value of 24) would be the center, as 10 + 15 + 5 + 7 + 1 = 38 and  36 + 2 = 38
        </p>

        <RenderTable/>
        <AnswerTable/>

      </div>
      </Paper>
  </section>
)

export default Challenge;
