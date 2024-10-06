import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/views/Home/HomePage';
import UsersView from './components/views/UsersView/UsersView';
import NavBar from './components/navigation/NavBar';
import { onAuthStateChanged } from 'firebase/auth';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/themes';
import { Typography } from '@mui/material';
import { auth } from './utils/firebaseConfig';
import Login from './components/Login/Login';
import Register from './components/Registration/Registration';
import { LanguageProvider } from './contexts/LanguageContext';
import CatGif from './components/CatGIFs/CatGIFs';

function App() {
  const [user, setUser] = useState<null | { email: string }>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser ? { email: currentUser.email || '' } : null);
    });

    return () => unsubscribe();
  }, []);

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar />
          <div className="App">
            {user ? (
              <Typography
                variant="h5"
                style={{ textAlign: 'center', marginTop: '20px' }}
              >
                Welcome, {user.email}
              </Typography>
            ) : (
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            )}
            <Routes>
              {/* Make sure you have a route for "/" */}
              <Route path="/" element={<HomePage />} />
              <Route path="/users" element={<UsersView />} />
              <Route path="/funny-cat-gif" element={<CatGif />} />
              {'No Cat found!'}
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
