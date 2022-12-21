import { CloseIcon, CopyIcon, HeartIcon, SoundIcon } from 'src/shared/icons';
import { IconButton } from 'src/shared/components';

type Props = {
  wordKa: string;
  wordEn: string;
  transcription: string;
  soundUrl?: string;
  onClose?: () => void;
};

export const DailyCard = ({
  wordKa,
  wordEn,
  transcription,
  soundUrl,
  onClose,
}: Props) => {
  const onCopyWord = async () => {
    await navigator.clipboard.writeText(wordKa);
    alert('Text copied');
  };

  return (
    <div className="bg-white flex flex-col p-3 border rounded-2xl">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">Daily word</span>
        {onClose && (
          <button title="Close" onClick={onClose}>
            <CloseIcon className="text-primary" />
          </button>
        )}
      </div>
      <p className="px-5">
        <span className="text-secondary text-2xl font-bold font-georgian">
          {wordKa}
        </span>{' '}
        <span className="text-gray font-semibold">({transcription})</span>
      </p>
      <p className="text-dark text-lg px-5">{wordEn}</p>
      <div className="flex justify-end gap-4">
        <IconButton title="Copy word" onClick={onCopyWord}>
          <CopyIcon />
        </IconButton>
        <IconButton title="Add to favorites">
          <HeartIcon />
        </IconButton>
        <IconButton title="Play sound">
          <SoundIcon />
        </IconButton>
      </div>
    </div>
  );
};
