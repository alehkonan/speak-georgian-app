type Category = {
  id: number;
  name: string;
  learnedWordsCount: number;
  allWordsCount: number;
  picture?: {
    url: string;
    description: string;
  };
  pictureUrl?: string;
};

export const categories: Category[] = [
  {
    id: 1,
    name: 'Small talks',
    learnedWordsCount: 10,
    allWordsCount: 100,
    picture: {
      url: 'https://preply.com/wp-content/uploads/2018/07/92_Making-Small-Talk.jpg',
      description: 'People talk with each other',
    },
  },
  {
    id: 2,
    name: 'Public transport',
    learnedWordsCount: 34,
    allWordsCount: 43,
  },
  {
    id: 3,
    name: 'Food',
    learnedWordsCount: 1,
    allWordsCount: 324,
  },
  {
    id: 4,
    name: 'Friends',
    learnedWordsCount: 100,
    allWordsCount: 102,
  },
];
