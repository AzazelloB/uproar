import { Menu } from '@headlessui/react';
import classNames from 'classnames';

interface DropdownMenuProps {
  children: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  return (
    <Menu.Items
      as="ul"
      className={classNames(
        'absolute -bottom-1 z-50 min-w-full translate-y-full',
        'py-1 rounded drop-shadow-sm',
        'border border-black/25 dark:border-white/25 bg-bg-light dark:bg-bg-dark',
        'text-text-light-300 dark:text-text-dark-300',
      )}
    >
      {children}
    </Menu.Items>
  );
};

export default DropdownMenu;
