import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/views/Home/HomePage';
import UsersView from './components/views/UsersView/UsersView';
import NavBar from './components/navigation/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
