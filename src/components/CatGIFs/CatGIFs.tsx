import React from 'react';
import { useCatGif } from '../../hooks/useCatGIF';

const FunnyCatGif: React.FC = () => {
  const { data, isLoading, isError, getNewCatGif } = useCatGif();

  if (isLoading) return <div>Loading cat GIF...</div>;
  if (isError) return <div>Error fetching cat GIF!</div>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Funny Cat GIFs</h1>
      <div>
        <img
          src={data?.url}
          alt="Funny Cat GIF"
          style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
        />
      </div>
      <button
        onClick={getNewCatGif}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Get Another Cat GIF
      </button>
    </div>
  );
};

export default FunnyCatGif;
