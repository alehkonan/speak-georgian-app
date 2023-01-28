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
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span
        className={`${
          checked ? 'translate-x-6 bg-ripe-mango' : 'translate-x-1 bg-white'
        } inline-block h-4 w-4 transform rounded-full transition`}
      />
    </HeadlessSwitch>
  );
};
