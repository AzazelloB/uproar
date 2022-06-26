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
        'absolute bottom-0 z-50 min-w-full translate-y-full',
        'px-4 py-1 border border-primary-100 rounded drop-shadow-sm bg-white',
        'divide-y',
      )}
    >
      {children}
    </Menu.Items>
  );
};

export default DropdownMenu;
