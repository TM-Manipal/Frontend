import React from 'react';
import { Router } from "@reach/router";
import Navbar from './components/navigationBar';
import Home from './container/home';
import Event from './container/event';
import './App.css';
import {
  Container
} from 'reactstrap';

const App = () => {
  return (
    <div>
    <Navbar/> 
      <Container>
          <Router>
            <Home path="/" />
            <Event path="/event" />
          </Router>
      </Container>
    </div>
  );
}

export default App;
