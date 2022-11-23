import React from 'react';
import { Container } from 'src/components';
import { AddWord, AllWords } from 'src/widgets';

export const MainPage = () => {
  return (
    <Container>
      <AllWords />
      <AddWord />
    </Container>
  );
};
