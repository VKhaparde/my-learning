import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
  // const { books, removeBook } = useContext(BookContext);
  const {books , dispatch} = useContext(BookContext);
  return (
    <div className="bookDetails" onClick = {()=>{
      // removeBook(book.id);
      dispatch({
                type:'REMOVE_BOOK',
                id : book.id
              })
    }}>
      <li>{book.title}</li>
      <li>{book.author}</li>
    </div>
  );
}
export default BookDetails;
