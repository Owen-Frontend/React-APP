import React, { Component } from 'react';
// import {Router, Route} from 'react-router'
import { HashRouter as Router,Route} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Home from './components/home/index'
import Form from './components/form/index'
import Pic from './components/picture/index'
import Sign from './components/sign/index'

class App extends Component {
  render() {
    return (
      // <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Form} target='_blank' />
            <Route path="/picture" component={Pic} />
            <Route path="/sign" component={Sign} />
          </div>
        </Router>
      // </div>
    );
  }
}

export default App;
