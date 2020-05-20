import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/about';
import Shop from './components/shop';
import Navigation from './components/navigation';
import Home from './components/home';
import ItemDetails from './components/itemDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component = {ItemDetails}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
