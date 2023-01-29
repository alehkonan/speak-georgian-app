import { Switch as HeadlessSwitch } from '@headlessui/react';
import { useState } from 'react';

type Props = {
  enabled?: boolean;
};

export const Switch = ({ enabled }: Props) => {
  const [checked, setChecked] = useState(enabled);

  return (
    <HeadlessSwitch
      checked={checked}
      onChange={setChecked}
      className={`${
        checked ? 'bg-steel-blue' : 'bg-gray-200'
      } relative inline-flex h-7 w-14 items-center rounded-full`}
    >
      <span
        className={`${
          checked ? 'translate-x-8 bg-yellow-300' : 'translate-x-1 bg-white'
        } inline-block h-5 w-5 transform rounded-full transition`}
      />
    </HeadlessSwitch>
  );
};
