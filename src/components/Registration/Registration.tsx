import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Button, TextField, Typography } from '@mui/material';
import { auth } from '../../utils/firebaseConfig';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError('Error creating account');
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}
    >
      <Typography variant="h5">Register</Typography>
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
        Register
      </Button>
    </form>
  );
};

export default Register;
