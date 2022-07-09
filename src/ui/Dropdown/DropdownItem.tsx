import { Menu } from '@headlessui/react';
import classNames from 'classnames';

import { AsProp } from 'utils/asPropType';

interface DropdownItemProps {
  children: React.ReactNode;
}

const DropdownItem = <T extends React.ElementType = 'button'>({
  as,
  className,
  children,
  ...props
}: AsProp<T, DropdownItemProps>) => {
  const Component = as || 'button';

  return (
    <li className="text-link">
      <Menu.Item>
        <Component
          {...props}
          className={classNames(
            'block px-4 py-2 w-full',
            'hover:bg-white/50 dark:hover:bg-white/20',
            className,
          )}
        >
          {children}
        </Component>
      </Menu.Item>
    </li>
  );
};

export default DropdownItem;
