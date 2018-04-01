import React, { Component } from 'react';
import Challenge from './components/Challenge'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Introduction from './components/Introduction';

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
      elem.scrollIntoView({block: "start", inline: "nearest", behavior: 'smooth'});
    }
  }

  render() { 
    return(
      <MuiThemeProvider>
              <div>
                <Introduction showChallenge={this.showChallenge}/>
                {
                  this.state.showChallenge === true && 
                  <Challenge/>
                }
              </div>
      </MuiThemeProvider>
    )
  }
}

