import { Switch as HeadlessSwitch } from '@headlessui/react';
import classNames from 'classnames';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  srOnly?: string;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange, srOnly }) => {
  return (
    <HeadlessSwitch
      checked={checked}
      onChange={onChange}
      className={classNames(
        'relative flex h-6 w-11 items-center rounded-full',
        'dark:border dark:border-white/25 dark:bg-transparent',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        {
          'bg-primary': checked,
          'bg-black/25': !checked,
        },
      )}
    >
      {srOnly && <span className="sr-only">{srOnly}</span>}
      <span
        className={classNames(
          'h-4 w-4 rounded-full bg-white',
          'transform transition ease-in-out duration-200',
          {
            'translate-x-6 dark:bg-primary': checked,
            'translate-x-1': !checked,
          },
        )}
      />
    </HeadlessSwitch>
  );
};

export default Switch;
