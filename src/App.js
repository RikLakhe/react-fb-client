import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {UserIsAuthenticated,UserIsNotAuthenticated} from './helper/auth'

import AppNavBar from './components/layout/AppNavBar'
import Dashboard from './components/layout/Dashboard'
import AddClient from './components/clients/AddClient'
import ClientDetail from './components/clients/ClientDetail'
import EditClient from './components/clients/EditClient'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

import Settings from './components/settings/Settings'


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
            <Route exact path="/" component={UserIsAuthenticated(Dashboard)} />
            <Route exact path="/client/add" component={UserIsAuthenticated(AddClient)} />
            <Route exact path="/client/:id" component={UserIsAuthenticated(ClientDetail)} />

            <Route exact path="/client/edit/:id" component={UserIsAuthenticated(EditClient)} />
            <Route exact path="/register" component={UserIsNotAuthenticated(Register)} />
            <Route exact path="/login" component={UserIsNotAuthenticated(Login)} />
            <Route exact path="/settings" component={UserIsAuthenticated(Settings)} />


            </Switch>
          </div>
          
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
