import React, { Component } from 'react';
import RenderTable from './RenderTable';
import Paper from 'material-ui/Paper';
import AnswerTable from './AnswerTable';

const paperStyle = {
  padding: 20,
  height: 1100,
  margin: 20,
  alignItems:'center',
  textAlign: 'center',
  backgroundColor: '#ced7e5'
};
export default class Challenge extends Component {   
  render() {
    return (
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
  }
}

