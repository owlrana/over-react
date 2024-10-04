import { t } from 'i18next';
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <h1>{t('welcome')}</h1>
      <p>{t('welcomeText')}</p>
      <Link to="/users">
        <button>View Users</button>
      </Link>
    </div>
  );
};

export default HomePage;
