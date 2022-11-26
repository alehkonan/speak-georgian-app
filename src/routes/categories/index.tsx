import { CategoryCard } from './components/CategoryCard';
import { categories } from './mock';

export const Categories = () => {
  return (
    <div className="grid gap-2">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          title={category.name}
          learnedWords={category.learnedWordsCount}
          wordsCount={category.allWordsCount}
          picture={category.picture}
        />
      ))}
    </div>
  );
};
