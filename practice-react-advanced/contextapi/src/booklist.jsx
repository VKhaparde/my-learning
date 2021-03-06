import React, { useContext }from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { BookContext } from './contexts/BookContext';

// export default class BookList extends React.Component{
//   static contextType = ThemeContext;
//   render(){
//     const {isLightTheme ,light ,dark} = this.context;
//     const theme = isLightTheme ? light : dark ;
//     return(
//       <div className="book-list" style = {{
//         backgroundColor: theme.bg ,
//         color : theme.syntax
//       }}>
//         <ul>
//           <li style={{ "background": theme.ui }}>The Socerers Stone</li>
//           <li style={{ "background": theme.ui }}>The Magic Kindom</li>
//           <li style={{ "background": theme.ui }}>The Sleeping Beauty and the Demon</li>
//         </ul>
//       </div>
//     );
//   }
// }

// Making the BookList functional Component to see the usage of useContext() hook.
const BookList = ()=>{
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light :dark ;
  const { books } = useContext(BookContext);
  return (
    <div className="book-list" style={{
      backgroundColor: theme.bg,
      color: theme.syntax
    }}>
      <ul>
        {
        books.map(currentVal=>{
          return(
          <li key = {currentVal.id} style={{ "background": theme.ui }}>{currentVal.title}</li>
          )
        })
        }
      </ul>
    </div>
  );
}
export default BookList;
