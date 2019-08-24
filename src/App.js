import React, {useState} from 'react';
import './App.css';
import Login from './components/Login';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import {Route, NavLink} from 'react-router-dom';
import BucketForm from './components/BucketForm';



function App() {
  return (
    <div className="App">
      <TopBar/>
      <Route exact path='/' component={Login}/>
      <Route exact path='/dashboard/' component={Dashboard}/>
      <Route path='/dashboard/new-bucketlist' component={BucketForm}/>

      <div className='debug'>
        DEBUG
        <NavLink to='/dashboard'><p>dashboard</p></NavLink>
        <NavLink to='/'><p>log-in</p></NavLink>
      </div>
    </div>
  );
}

export default App;
