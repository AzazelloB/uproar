import classNames from 'classnames';

import { AsProp } from 'utils/asPropType';

interface ButtonProps {
  variant?: 'primary' | 'secondary',
}

const Button = <T extends React.ElementType = 'button'>({
  as,
  children,
  variant,
  className,
  ...props
}: AsProp<T, ButtonProps>) => {
  const Component = as || 'button';

  return (
    <Component
      type={Component === 'button' ? 'button' : undefined}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className={classNames(
        className,
        'px-6 py-2 rounded-md font-medium disabled:bg-link-300 disabled:border-link-300 disabled:text-white',
        {
          'bg-primary text-white hover:bg-primary-500': variant === 'primary',
          'bg-white text-link border border-white hover:border-primary hover:text-primary': variant === 'secondary',
        },
      )}
    >
      {children}
    </Component>
  );
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
