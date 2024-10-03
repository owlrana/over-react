import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <h1>Welcome to the Home Page</h1>
      <p>
        This is the main page. Click the link below to view the list of users.
      </p>
      <Link to="/users">
        <button>View Users</button>
      </Link>
    </div>
  );
};

export default HomePage;
