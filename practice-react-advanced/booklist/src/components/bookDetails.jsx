import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
  const { books, removeBook } = useContext(BookContext);
  return (
    <div className="bookDetails" onClick = {()=>{
      removeBook(book.id);
    }}>
      <li>{book.title}</li>
      <li>{book.author}</li>
    </div>
  );
}
export default BookDetails;
