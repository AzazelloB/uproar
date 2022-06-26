import { Menu } from '@headlessui/react';
import classNames from 'classnames';

import { AsProp } from 'utils/asPropType';

interface DropdownItemProps {
  children: React.ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = <T extends React.ElementType = 'button'>({
  as,
  children,
  ...props
}: AsProp<T>) => {
  const Component = as || 'button';

  return (
    <li className="py-1 text-link">
      <Menu.Item>
        {({ active }) => (
          <Component
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            className={classNames(
              'block',
              {
                'text-primary': active,
              },
            )}
          >
            {children}
          </Component>
        )}
      </Menu.Item>
    </li>
  );
};

export default DropdownItem;
