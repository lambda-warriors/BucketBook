import React from 'react';
import './App.css';
import Login from './components/Login';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import Signup from '/.components/Signup';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<TopBar />
			<Route exact path='/' component={Login} />
			<Route path='/dashboard/' component={Dashboard} />
			<Route path='/signup/' component={Signup} />
		</div>
	);
}

export default App;
