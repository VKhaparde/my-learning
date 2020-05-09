import React, { useContext } from 'react';
import {BookContext} from '../contexts/BookContext';

const NavBar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navBar">
      <h1>My Reading List</h1>
      <p>Currently I have {books.length} books to read through....</p>
    </div>
    );
}


export default NavBar;
