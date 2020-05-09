import React from 'react';
import './index.css'
import BookContextProvider from './contexts/BookContext';
import NavBar from './components/navBar';
import BookList from './components/bookList';
import NewBookForm from './components/newBookForm';

function App() {
  return (
    <div className="App">
    <BookContextProvider>
      <NavBar/>
      <BookList/>
      <NewBookForm/>
    </BookContextProvider>
    </div>
  );
}

export default App;
