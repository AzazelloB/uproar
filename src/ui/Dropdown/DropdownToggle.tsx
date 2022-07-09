import { Menu } from '@headlessui/react';

interface DropdownToggleProps {
  children: React.ReactNode;
  className?: string;
}

const DropdownToggle: React.FC<DropdownToggleProps> = ({ children, className }) => {
  return (
    <Menu.Button className={className}>
      {children}
    </Menu.Button>
  );
};

export default DropdownToggle;
