import { Disclosure } from '@headlessui/react';
import classNames from 'classnames';
import AnimateHeight from 'react-animate-height';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

interface AccordionProps {
  initialOpen?: boolean;
  label: string;
  children: React.ReactNode;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  initialOpen, label, children, className,
}) => {
  return (
    <Disclosure defaultOpen={initialOpen}>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNames(
              'w-full flex justify-between items-center',
              className,
            )}
          >
            <span>{label}</span>
            {open ? <FiChevronUp /> : <FiChevronDown />}
          </Disclosure.Button>

          <AnimateHeight duration={200} height={open ? 'auto' : 0}>
            <Disclosure.Panel static>
              {children}
            </Disclosure.Panel>
          </AnimateHeight>
        </>
      )}
    </Disclosure>
  );
};

export default Accordion;
