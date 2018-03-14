import React, { Component } from 'react';

const Challenge = () => (
  <div>
    <h1>Arrays</h1>

    <h3>Below is a number of arrays.</h3>
    
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
    <tr>
      {[1,2,3,4,5].map(item => <td>{item}</td>)}
    </tr>
    <tr>
     {[1,2,3,4,5].map(item => <td>{item}</td>)}
    </tr>
    <tr> 
    {[1,2,3,4,5].map(item => <td>{item}</td>)}
    </tr>

  </div>
)

export default Challenge;