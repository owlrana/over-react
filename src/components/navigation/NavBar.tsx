import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/users">Users</Link>
    </nav>
  );
};

export default NavBar;
