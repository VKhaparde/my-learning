import React from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { useContext } from 'react';

// export default class ThemeToggle extends React.Component{
//   static contextType = ThemeContext;

//   render(){
//     const {toggleTheme} = this.context;
//     return(
//       <button onClick={toggleTheme}>
//         Toggle Theme
//     </button>
//     );
//   }
// }

// Converting ThemeToggle to functional component to see the usage of useContext() hook
const ThemeToggle = ()=>{
  const {toggleTheme} = useContext(ThemeContext);
  return(
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}
export default ThemeToggle;
