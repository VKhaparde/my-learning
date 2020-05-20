import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const linkStyle = {
    color: "white"
  }
  return (
    <nav>
      <Link to="/" style={linkStyle} >
        <li>Home</li>
      </Link>
      <Link to="/about" style={linkStyle} >
        <li>About</li>
      </Link>
      <Link to="/shop" style={linkStyle} >
        <li>Shop</li>
      </Link>
    </nav>
  );
}
export default Navigation;
