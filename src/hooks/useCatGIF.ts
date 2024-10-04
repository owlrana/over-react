import { useQuery, useQueryClient } from '@tanstack/react-query';

const fetchCatGif = async () => {
  const apiKey = process.env.REACT_APP_CAT_API_KEY || '';

  const response = await fetch(
    'https://api.thecatapi.com/v1/images/search?mime_types=gif',
    {
      headers: {
        'x-api-key': apiKey, // Pass the API key in the headers
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch the cat GIF');
  }

  const data = await response.json();
  return data[0];
};

export const useCatGif = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['catGif'],
    queryFn: fetchCatGif,
    refetchOnWindowFocus: false,
  });

  const getNewCatGif = () => {
    queryClient.invalidateQueries({ queryKey: ['catGif'] });
    refetch();
  };

  return { data, isLoading, isError, getNewCatGif };
};
