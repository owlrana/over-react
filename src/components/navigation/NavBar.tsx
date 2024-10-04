import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/funny-cat-gif">Funny Cat GIF</Link>{' '}
          {/* New link to the FunnyCatGif page */}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
