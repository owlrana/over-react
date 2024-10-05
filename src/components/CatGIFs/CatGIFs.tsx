import React from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';
import { useCatGif } from '../../hooks/useCatGIF';

const CatGif: React.FC = () => {
  const { data, isLoading, isError, getNewCatGif } = useCatGif();

  if (isLoading) return <Typography>Loading cat GIF...</Typography>;
  if (isError) return <Typography>Error fetching cat GIF!</Typography>;

  return (
    <Card style={{ maxWidth: 500, margin: '0 auto', textAlign: 'center' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Funny Cat GIFs
        </Typography>
        <div style={{ margin: '20px 0' }}>
          <img
            src={data?.url}
            alt="Funny Cat GIF"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <Button variant="contained" color="primary" onClick={getNewCatGif}>
          Get Another Cat GIF
        </Button>
      </CardContent>
    </Card>
  );
};

export default CatGif;
