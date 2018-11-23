import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AppNavBar from './components/layout/AppNavBar'
import Dashboard from './components/layout/Dashboard'

import { Provider } from 'react-redux';

import store from './store/store';


class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <Router>
        <div className="App">
          <AppNavBar />
          <div className="container">
            <Switch>
            <Route exact path="/" component={Dashboard} />
            </Switch>
          </div>
          
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
