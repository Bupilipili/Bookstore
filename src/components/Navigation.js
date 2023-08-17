import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/books">Books</Link>
      <Link to="/categories">Categories</Link>
    </nav>
  );
}

export default Navigation;
