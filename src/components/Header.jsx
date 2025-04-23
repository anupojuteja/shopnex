import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-xl font-bold">React Store</h1>
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
    </header>
  );
};

export default Header;  