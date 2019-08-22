import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Login/>
    </div>
  );
}

export default App;
