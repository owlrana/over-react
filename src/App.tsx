import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/views/Home/HomePage';
import UsersView from './components/views/UsersView/UsersView';
import NavBar from './components/navigation/NavBar';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import { LanguageProvider } from './contexts/LanguageContext';

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
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
