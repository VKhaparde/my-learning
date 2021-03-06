import React from 'react';
import { createContext , useState , useReducer ,useEffect}from 'react';
// import uuid from '../../node_modules/uuid/dist/v1';
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

// const BookContextProvider = (props) => {
//   const [books, setBooks] = useState([
//     { title: "The Magic Kindom and Philip Trodd", author: "Jenny Philips", id: 1 },
//     { title: "The Prisoner of Azkaban", author: "J.K.Rowling", id: 2 }
//   ]);
//   const addBook = (title,author) => {
//     setBooks([...books, { title: title, author: author, id: uuid() }]);
// };
// const removeBook = (id) =>{
//   setBooks(books.filter((currentVal) => currentVal.id !== id));
// };
// return (
//   <BookContext.Provider value = {{books,addBook,removeBook}}>
//    {props.children}
//   </BookContext.Provider>
// );
// }
// export default BookContextProvider;

const BookContextProvider = (props)=>{
  const [books,dispatch] = useReducer(BookReducer,[],()=>{
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : []
  });
  useEffect(()=>{
    localStorage.setItem("books",JSON.stringify(books))
  },[books]);
  return(
    <BookContext.Provider value = {{books,dispatch}}>
      {props.children}
    </BookContext.Provider>
  );
}
export default BookContextProvider;
