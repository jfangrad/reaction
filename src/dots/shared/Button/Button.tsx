import React, { ReactNode, forwardRef } from 'react';
import classNames from 'classnames';

import './Button.less';

export interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  className?: string,
  type?: 'primary' | 'secondary',
  children: ReactNode,
}


const Button = forwardRef((props: Props, ref: React.RefObject<HTMLButtonElement>) => {
  const { onClick, className, type, children } = props;

  const classes = classNames(
    'button',
    className,
    {
      'button-primary': type === 'primary',
      'button-secondary': type === 'secondary',
    }
  )
  return (
    <button className={classes} onClick={onClick} ref={ref}>{children}</button>
  );
});

Button.defaultProps = {
  onClick: () => null,
  type: 'primary',
}

export default Button;
