import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../src/screens/home/home.screen';
import AppTopBar from './components/header.component';

function App() {
  return (
    <div className="App">
      <AppTopBar/>
      <Home/>
    </div>
  );
}

export default App;
