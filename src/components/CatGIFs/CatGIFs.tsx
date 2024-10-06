import React from 'react';
import { Card, CardContent, Button, Typography, Box } from '@mui/material';
import { useCatGif } from '../../hooks/useCatGIF';
import styles from './CatGIFs.module.css';

const CatGif: React.FC = () => {
  const { data, isLoading, isError, getNewCatGif } = useCatGif();

  if (isLoading) return <Typography>Loading cat GIF...</Typography>;
  if (isError) return <Typography>Error fetching cat GIF!</Typography>;

  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <Typography variant="h5" component="div">
          Funny Cat GIFs
        </Typography>
        <Box className={styles.gifContainer}>
          <img
            src={data?.url}
            alt="Funny Cat GIF"
            className={styles.gifImage}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={getNewCatGif}
          className={styles.button}
        >
          Get Another Cat GIF
        </Button>
      </CardContent>
    </Card>
  );
};

export default CatGif;
