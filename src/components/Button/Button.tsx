import React, { FC } from 'react';
import cx from 'classnames';

import './Button.scss';

type Props = JSX.IntrinsicElements['button'] & {
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
};

const Button: FC<Props> = ({ primary, secondary, className, children, onClick, disabled }) => {
  const classNames = cx(
    'Button',
    { 'Button-primary': primary, 'Button-secondary': secondary },
    className,
  );

  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
