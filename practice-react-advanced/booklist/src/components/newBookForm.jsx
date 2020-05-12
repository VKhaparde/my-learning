import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
  // const { addBook } = useContext(BookContext);
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // addBook(title, author);
    //dispatch method takes action object which has action type and payload.
    dispatch({
      type: 'ADD_BOOK',
      book: {
        title: title,
        author: author
      }
    });
    setTitle('');
    setAuthor('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="book title" value = {title} onChange={(event) => {
        setTitle(event.target.value);
      }} required />
      <input type="text" placeholder="author" value = {author} onChange={(event) => {
        setAuthor(event.target.value);
      }} required/>
      <input type="submit" value="Add book" />
    </form>
  );
}

export default NewBookForm;
