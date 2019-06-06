import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './Button.less';

export interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  className?: string,
  type?: 'primary' | 'secondary',
  children: ReactNode,
}


export default function Button(props: Props) {
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
    <button className={classes} onClick={onClick}>{children}</button>
  );
}

Button.defaultProps = {
  className: null,
  onClick: () => null,
  type: 'primary',
}
