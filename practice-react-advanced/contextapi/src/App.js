import React from 'react';
import './App.css';
import NavBar from './navbar';
import BookList from './booklist';
import './index.css'
import ThemeContextProvider from './contexts/ThemeContext'
import ThemeToggle from './themeToggle';
import AuthContextProvider from './contexts/AuthContext'

function App() {
  return (
    <div className="App">
      <h1>Welcome to Advanced React</h1>
     <ThemeContextProvider>
     <AuthContextProvider>
        <NavBar />
        <BookList />
        <ThemeToggle/>
      </AuthContextProvider>
     </ThemeContextProvider>
    </div>
  );
}

export default App;
