import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Example web app
        </Typography>
        <LanguageSwitcher />
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/users">
          Users
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/register">
          Register
        </Button>
        <Button color="inherit" component={Link} to="/funny-cat-gif">
          Funny Cat GIF
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
