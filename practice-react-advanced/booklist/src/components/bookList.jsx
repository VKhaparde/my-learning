import React , {useContext} from 'react';
import {BookContext} from '../contexts/BookContext';
import BookDetails from './bookDetails';

const BookList = ()=>{
 const {books} =useContext(BookContext);
  return (books.length ? (
      <div className="bookList">
        <ul>
          {
            books.map((book) => {
              return (
                <BookDetails key={book.id} book={book} />
              )
            })
          }
        </ul>
      </div>
      ) : (
        <div className = "bookList">
          You have no books to read. Happy Free Time!!!
        </div>
      )
  );

}
export default BookList;
