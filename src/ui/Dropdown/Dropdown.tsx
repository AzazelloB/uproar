import { Menu } from '@headlessui/react';
import classNames from 'classnames';

import DropdownToggle from './DropdownToggle';
import DropdownMenu from './DropdownMenu';
import DropdownItem from './DropdownItem';

interface DropdownComponents {
  Toggle: typeof DropdownToggle,
  Menu: typeof DropdownMenu,
  Item: typeof DropdownItem,
}

interface MenuRenderPropArg {
  open: boolean,
}

interface DropdownProps {
  className?: string;
  children: React.ReactNode | ((args: MenuRenderPropArg) => React.ReactNode);
}

const Dropdown: React.FC<DropdownProps> & DropdownComponents = ({ children, className }) => {
  return (
    <Menu as="div" className={classNames('relative', className)}>
      {(args) => (
        <>
          {typeof children === 'function' ? children(args) : children}
        </>
      )}
    </Menu>
  );
};

Dropdown.defaultProps = {
  className: '',
};

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;

export default Dropdown;
