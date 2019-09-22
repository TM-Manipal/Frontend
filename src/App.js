import React from 'react';
import { Router } from "@reach/router";
import Navbar from './components/navigationBar';
import Home from './container/home';
import Event from './container/event';
import './App.css';

const App = () => {
  return (
    <div>
    <Navbar/> 
      <Router>
        <Home path="/" />
        <Event path="/event" />
      </Router>
    </div>
  );
}

export default App;
