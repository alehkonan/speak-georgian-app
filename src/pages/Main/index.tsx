import React from 'react';
import { AddWord } from 'src/widgets/AddWord';
import { AllWords } from 'src/widgets/AllWords';

export const MainPage = () => {
  return (
    <div>
      <AllWords />
      <AddWord />
    </div>
  );
};
