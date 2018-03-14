import React, { Component } from 'react';
import Challenge from './components/Challenge'
import logo from './logo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

const App = () => (
      <Router>
          <div>
          <Home /> 
            <ul>
              <li>
                <Link to="/Challenge">Challenge Me</Link>
              </li>
            </ul>
            <Route path="/Challenge" component={Challenge} />
          </div>
      </Router>
)

export default App;

const Home = () => (
  <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="title">Welcome to the ECSDigital Engineer in Test tech Test</h1>
  </header>
  <p className="intro">
    It's time to get serious. We want you would like you to complete the the e2e test that can be found in <code>src/e2e/</code>
  </p>
  </div>
)

