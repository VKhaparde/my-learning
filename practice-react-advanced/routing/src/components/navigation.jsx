import React from 'react';
import { BrowserRouter as Router ,Link } from 'react-router-dom';

const Navigation = () => {
  const linkStyle = {
    color : "white"
  }
  return (
    <nav>
     <Router>
        <Link to="/" style={linkStyle} >
          <li>Home</li>
        </Link>
        <Link to="/about" style={linkStyle} >
          <li>About</li>
        </Link>
        <Link to="/shop" style={linkStyle} >
          <li>Shop</li>
        </Link>
     </Router>
    </nav>
  );
}
export default Navigation;
