import React from 'react';
import { Router } from "@reach/router";
import Navbar from './components/navigationBar';
import Home from './container/home';
import Event from './container/event';
import Register from './container/register';
import './App.css';

const App = () => {
  return (
    <div>
    <Navbar/> 
      <Router>
        <Home path="/" />
        <Event path="/events" />
        <Register path="/register"/>
      </Router>
    </div>
  );
}

export default App;
