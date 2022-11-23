import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabaseClient } from 'src/services/supabase';
import { Card } from 'src/components';
import { formatDate } from 'src/utils';

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
    <div className="grid grid-cols-2 gap-2 p-2">
      {words?.map((word) => (
        <Card key={word.id}>
          <h5>{word.name_en}</h5>
          <h5>{word.name_ka}</h5>
          <p>{formatDate(word.created_at)}</p>
        </Card>
      ))}
    </div>
  );
};
