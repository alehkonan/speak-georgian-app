import { Switch as HeadlessSwitch } from '@headlessui/react';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

type Props = {
  enabled?: boolean;
  onSwitch?: (checked: boolean) => void;
  disabled?: boolean;
};

export const Switch = ({ enabled, onSwitch, disabled }: Props) => {
  const [checked, setChecked] = useState(enabled);

  useEffect(() => {
    if (enabled !== undefined) setChecked(enabled);
  }, [enabled]);

  return (
    <HeadlessSwitch
      data-testid="switch"
      checked={checked}
      onChange={(value: boolean) => {
        setChecked(value);
        onSwitch && onSwitch(value);
      }}
      className={classNames([
        'relative inline-flex h-7 w-14 items-center rounded-full',
        {
          'bg-steel-blue': checked,
          'bg-gray-200': !checked,
        },
      ])}
      disabled={disabled}
    >
      <span
        className={classNames([
          'inline-block h-5 w-5 transform rounded-full transition',
          {
            'translate-x-8 bg-yellow-300': checked,
            'translate-x-1 bg-white': !checked,
          },
        ])}
      />
    </HeadlessSwitch>
  );
};
