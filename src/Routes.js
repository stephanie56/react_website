import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/HomePage';
import EmploymentPage from './components/EmploymentPage';
import SettlementPage from './components/SettlementPage';


export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage}/>
    <Route path='employment' component={EmploymentPage} />
    <Route path='settlement' component={SettlementPage} />
    <Route path='contact' component={EmploymentPage} />
  </Route>
);
