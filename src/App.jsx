/* global document */

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Introduction from './components/Introduction';
import Challenge from './components/Challenge';

export default class App extends Component {
  constructor() {
    super();
    this.showChallenge = this.showChallenge.bind(this);
  }

  state = {
    "showChallenge": false
  }

  showChallenge() {
    const showStatus = this.state.showChallenge !== true;
    this.setState({ showChallenge: showStatus });
  }

  componentDidUpdate() {
    if (this.state.showChallenge === true) {
      const elem = document.getElementById('challenge');
      elem.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Introduction showChallenge={this.showChallenge} />
          {
                  this.state.showChallenge === true &&
                  <Challenge />
                }
        </div>
      </MuiThemeProvider>
    );
  }
}

