import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

//Purposefully masking the BookContext a functional Component to see the usage of
//useState() hook and useContext() hook.
export const BookContext = createContext();
//Every context has a contextProvider to provide the context for the components

const BookContextProvider = (props)=>{
  const [books,setBooks] = useState([
    {title: "The Sleeping Beauty",id : 1},
    {title: "The Magic Kindom",id:2},
    {title:"The Winding Road", id :3},
    {title:"HarryPotter and the Socerers Stone", id: 4}
  ]);
  return(
    <BookContext.Provider value = { {books} }>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
