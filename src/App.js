import React, {useState} from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';

import {Route, NavLink} from 'react-router-dom';
import BucketForm from './components/BucketForm';
import __Data from './MOCKDATA';


function App() {
  const [bucket, setList] = useState([]);
  console.log('BUCKETLIST:: ', bucket);
  
  return (

    <div className="App">
      <TopBar/>
      <Route exact path='/' component={Login}/>
      <Route exact path='/dashboard/' render={()=><Dashboard bucketList={bucket} />}/>
      <Route exact path='/signup/' render={()=><Dashboard bucketList={Signup} />}/>
      <Route exact path='/dashboard/new-bucketlist'  render={() => <BucketForm bucket={bucket} setList={setList} />} /> 
      {/* <div className='debug'>
        DEBUG
        <NavLink to='/dashboard'><p>dashboard</p></NavLink>
        <NavLink to='/'><p>log-in</p></NavLink>
      </div> */}
    </div>
  );

export default App;
