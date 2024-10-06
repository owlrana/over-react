import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Button, TextField, Typography } from '@mui/material';
import { auth } from '../../utils/firebaseConfig';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError('Invalid login credentials');
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}
    >
      <Typography variant="h5">Login</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </form>
  );
};

export default Login;
