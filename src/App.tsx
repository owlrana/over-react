import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/views/Home/HomePage';
import UsersView from './components/views/UsersView/UsersView';
import NavBar from './components/navigation/NavBar';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import { LanguageProvider } from './contexts/LanguageContext';
import FunnyCatGif from './components/CatGIFs/CatGIFs';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <NavBar />
        <LanguageSwitcher />
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersView />} />
            <Route path="/funny-cat-gif" element={<FunnyCatGif />} />
            {'No Cat found!'}
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
