import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/views/Home/HomePage';
import UsersView from './components/views/UsersView/UsersView';
import NavBar from './components/navigation/NavBar';
import { LanguageProvider } from './contexts/LanguageContext';
import CatGif from './components/CatGIFs/CatGIFs';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/themes';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <NavBar />
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users" element={<UsersView />} />
              <Route path="/funny-cat-gif" element={<CatGif />} />
              {'No Cat found!'}
            </Routes>
          </div>
        </ThemeProvider>
      </Router>
    </LanguageProvider>
  );
}

export default App;
