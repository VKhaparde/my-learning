import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="book title" required onChange={(event) => {
        setTitle(event.target.value);
      }} />
      <input type="text" placeholder="author" required onChange={(event) => {
        setAuthor(event.target.value);
      }} />
      <input type="submit" value="Add book" />
    </form>
  );
}

export default NewBookForm;
