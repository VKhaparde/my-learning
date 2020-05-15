import React from 'react';
import './App.css';
import SongList from './components/songlist';
import CounterExample from './components/hooksExamples/useStateExample';
import Count from './components/count';
import ErrorBoundary from './components/errorBoundaries/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <SongList />
      {/* <CounterExample /> */}
      <ErrorBoundary>
        <Count/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
