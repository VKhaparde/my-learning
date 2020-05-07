import React from 'react';
import './App.css';
import NavBar from './navbar';
import BookList from './booklist';
import './index.css'
import ThemeProvider from './contexts/ThemeContext';
import ThemeContext from './contexts/ThemeContext';


function App() {
  return (
    <div className="App">
      <h1>Welcome to Advanced React</h1>
     <ThemeProvider>
        <NavBar />
        <BookList />
     </ThemeProvider>
    </div>
  );
}

export default App;
