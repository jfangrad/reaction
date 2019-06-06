import React from 'react';
import { Link } from 'react-router-dom';
import { LocationDescriptor } from 'history';
import Button, { ButtonProps } from 'src/dots/shared/Button';

interface Props {
  to: LocationDescriptor,
};

type LinkButtonProps = Props & ButtonProps

export default function LinkButton(props: LinkButtonProps) {
  const { to, onClick, ...rest } = props;

  return (
    <Link to={to}>
      <Button onClick={onClick} {...rest} />
    </Link>
  )
}
