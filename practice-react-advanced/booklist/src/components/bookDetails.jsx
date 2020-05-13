import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
  // const { books, removeBook } = useContext(BookContext);
  const {dispatch} = useContext(BookContext);
  return (
    <li className="bookDetails" onClick = {()=>
      // removeBook(book.id);
      dispatch({
                type:'REMOVE_BOOK',
                id : book.id
              })
    }>
      <div>{book.title}</div>
      <div>{book.author}</div>
    </li>
  );
}
export default BookDetails;
