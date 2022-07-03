import classNames from 'classnames';

import { AsProp } from 'utils/asPropType';

interface ButtonProps {
  variant?: 'primary' | 'secondary',
  icon?: React.ElementType,
}

const Button = <T extends React.ElementType = 'button'>({
  as,
  children,
  icon: Icon,
  variant,
  className,
  ...props
}: AsProp<T, ButtonProps>) => {
  const Component = as || 'button';

  return (
    <Component
      type={Component === 'button' ? 'button' : undefined}
      {...props}
      className={classNames(
        className,
        'py-2 rounded-md font-medium',
        'disabled:opacity-50 disabled:pointer-events-none',
        {
          'px-6': !!children,
          'px-2': !children,
          'bg-primary text-white hover:bg-primary-500': variant === 'primary',
          'border dark:border-white/25': variant === 'secondary',
          'bg-bg-light dark:bg-transparent': variant === 'secondary',
          'hover:bg-white/50 dark:hover:bg-white/20': variant === 'secondary',
        },
      )}
    >
      {Icon && <Icon />}
      {children}
    </Component>
  );
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
