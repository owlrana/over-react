import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { t } from 'i18next';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        {t('welcome.title')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('welcome.message')}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/users"
        style={{ marginRight: '10px' }}
      >
        View active users
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        component={Link}
        to="/funny-cat-gif"
      >
        Fetch funny cat GIFs
      </Button>
    </Container>
  );
};

export default HomePage;
