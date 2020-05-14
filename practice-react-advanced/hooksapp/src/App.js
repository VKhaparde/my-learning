import React from 'react';
import './App.css';
import SongList from './components/songlist';
import CounterExample from './components/hooksExamples/useStateExample';


function App() {
  return (
    <div className="App">
      <SongList/>
      <CounterExample/>
    </div>
  );
}

export default App;
