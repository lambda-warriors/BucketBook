import React, {useState} from 'react';
import './App.css';
import Login from './components/Login';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import {Route, NavLink} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <TopBar/>
      <Route exact path='/' component={Login}/>
      <Route path='/dashboard/' component={Dashboard}/>

      <div className='debug'>
        DEBUG
        <NavLink to='/dashboard'><p>dashboard</p></NavLink>
        <NavLink to='/'><p>log-in</p></NavLink>
      </div>
    </div>
  );
}

export default App;
