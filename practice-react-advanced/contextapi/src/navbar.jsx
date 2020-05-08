import React from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { AuthContext } from './contexts/AuthContext';
import {useContext} from 'react';

// export default class NavBar extends React.Component {
//   render() {
//     return (
//       <AuthContext.Consumer>{(authContext) => {
//         return (
//           <ThemeContext.Consumer>{(themeContext) => {
//             const { isLightTheme, light, dark } = themeContext;
//             const theme = isLightTheme ? light : dark;
//             const { isAuthenticated, toggleAuth } = authContext;
//             return (
//               <div className="nav" style={{ "background": theme.bg, "color": theme.syntax }}>
//                 <h1>Context App</h1>
//                 <div onClick = {toggleAuth}>{isAuthenticated ? "Logged In" : "Logged Out"}</div>
//                 <ul>
//                   <li>Home</li>
//                   <li>About</li>
//                   <li>Contact</li>
//                 </ul>
//               </div>)
//           }}</ThemeContext.Consumer>
//         )
//       }}</AuthContext.Consumer>
//     );
//   }
// }

//Making the NavBar functional component to see the usage of useContext() hook

const NavBar = ()=>{
  const {isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light :dark ;
  const {isAuthenticated , toggleAuth} = useContext(AuthContext);
  return (
    <div className="nav" style={{ "background": theme.bg, "color": theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>{isAuthenticated ? "Logged In" : "Logged Out"}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
export default NavBar;
