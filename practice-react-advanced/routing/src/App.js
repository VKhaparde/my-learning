import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import About from './components/about';
import Shop from './components/shop';
import Navigation from './components/navigation';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router>
        <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path = "/about" component = {About}/>
        <Route path="/shop" component={Shop}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
