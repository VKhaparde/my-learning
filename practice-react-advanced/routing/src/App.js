import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      Hello Routing
      <Router>
    <nav>
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
    </nav>
      </Router>
    </div>
  );
}

export default App;
