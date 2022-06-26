import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import classNames from 'classnames';

interface SelectProps<T> {
  options: T[];
  selected?: T;
  // eslint-disable-next-line react/require-default-props
  getValue?: (option: T) => string;
  // eslint-disable-next-line react/require-default-props
  getLabel?: (option: T) => string;
  onChange?: (option: T) => void;
  isDisabled?: (option: T) => boolean;
  className?: string;
}

const Select = <T extends unknown | string>({
  options,
  selected: initialSelected,
  getValue = (option: T) => option as string,
  getLabel = (option: T) => option as string,
  onChange,
  isDisabled,
  className,
}: SelectProps<T>) => {
  const [selected, setSelected] = useState(initialSelected ? getValue(initialSelected) : getValue(options[0]));

  const handleChange = (optionValue: string) => {
    setSelected(optionValue);

    if (typeof onChange === 'function') {
      const selectedOption = options.find((option) => getValue(option) === optionValue) as T;
      onChange(selectedOption);
    }
  };

  return (
    <Listbox value={selected} onChange={handleChange} as="div" className={classNames('relative', className)}>
      {({ open }) => (
        <>
          <Listbox.Button
            className={classNames(
              'w-full rounded-md flex justify-between items-center',
            )}
          >
            <span className="mr-2">
              {getLabel(options.find((option) => getValue(option) === selected) as T)}
            </span>
            <span className="text-xs">
              {open ? <GoTriangleUp /> : <GoTriangleDown />}
            </span>
          </Listbox.Button>

          <Listbox.Options
            className={classNames(
              'absolute z-50 rounded-md',
              'bg-bg-light dark:bg-bg-dark text-text-light-300 dark:text-text-dark-300',
            )}
          >
            {options.map((option) => {
              const value = getValue(option);
              const label = getLabel(option);
              const disabled = typeof isDisabled === 'function' ? isDisabled(option) : false;

              return (
                <Listbox.Option
                  key={value}
                  value={value}
                  className={classNames(
                    'px-5 py-2 cursor-pointer',
                    'hover:bg-white/50 dark:hover:bg-white/20',
                    {
                      'text-text-light dark:text-text-dark bg-black/5 dark:bg-white/5': selected === value,
                      'text-link': disabled,
                    },
                  )}
                  disabled={disabled}
                >
                  {label}
                </Listbox.Option>
              );
            })}
          </Listbox.Options>
        </>
      )}
    </Listbox>
  );
};

Select.defaultProps = {
  onChange: undefined,
  selected: undefined,
  isDisabled: undefined,
  className: '',
};

export default Select;
