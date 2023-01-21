import { useRandomWord } from 'src/api/randomWord';
import { useUser } from 'src/api/user';
import { DailyCard, Divider, Input } from 'src/shared/components';
import { Categories } from './Categories';
import { SearchResults } from './SearchResults';
import { useDailyWord } from './useDailyWord';
import { useFindWord } from './useFindWord';

export const HomeScreen = () => {
  const { isDailyWordClosedToday, onCloseDailyWord } = useDailyWord();
  const { user } = useUser();
  const randomWord = useRandomWord();
  const { searchValue, onSearch, isSearching, results } = useFindWord();

  const userName = user?.user_metadata?.name;

  return (
    <div className="h-full flex flex-col gap-3 px-3 -mx-3">
      <h3 className="text-primary text-2xl font-bold">Hello, {userName}!</h3>
      {!isDailyWordClosedToday && randomWord && (
        <DailyCard
          wordKa={randomWord.name_ka}
          wordEn={randomWord.name_en}
          transcription={randomWord.transcription}
          pictureUrl={randomWord.picture_url}
          soundUrl={randomWord.sound_url}
          onClose={onCloseDailyWord}
        />
      )}
      <div className="flex-1 overflow-hidden flex flex-col gap-4 pt-1 px-3 -mx-3">
        <div className="grid min-[450px]:grid-cols-2 items-center gap-2">
          <h3 className="text-raisin-black text-lg font-bold">
            Choose the category
          </h3>
          <Divider className="min-[450px]:hidden" text="or" />
          <Input placeholder="Find a word..." onChange={onSearch} />
        </div>
        {isSearching ? (
          <p>Searching...</p>
        ) : searchValue ? (
          <SearchResults results={results} />
        ) : (
          <Categories />
        )}
      </div>
    </div>
  );
};
