import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabaseClient } from 'src/services/supabase';

export const AllWords = () => {
  const wordsQuery = useQuery({
    queryKey: ['words'],
    queryFn: async () => supabaseClient.from('words').select(),
  });

  const words = wordsQuery.data?.data;
  const error = wordsQuery.data?.error || wordsQuery.error;
  const isLoading = wordsQuery.isLoading;

  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  if (error instanceof Error)
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );

  return (
    <div>
      {words?.map((word) => (
        <p>{word.id}</p>
      ))}
    </div>
  );
};
