import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import LoginPage from './containers/template/loginPage';
import DashboardTemplate from './containers/template/DashboardTemplate';


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route  path="/dashboard" component={DashboardTemplate} />
        
       
      </Switch>
    </Router>
    
  );
}

export default App;
