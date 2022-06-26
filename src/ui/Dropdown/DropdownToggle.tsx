import { Menu } from '@headlessui/react';

interface DropdownToggleProps {
  children: React.ReactNode;
}

const DropdownToggle: React.FC<DropdownToggleProps> = ({ children }) => {
  return (
    <Menu.Button>
      {children}
    </Menu.Button>
  );
};

export default DropdownToggle;
