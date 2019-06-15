import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { LocationDescriptor, LocationDescriptorObject } from 'history';
import Button, { ButtonProps } from 'src/dots/shared/Button';

interface Props {
  to: LocationDescriptor,
};

type LinkButtonProps = Props & ButtonProps & RouteComponentProps;

const LinkButton = (props: LinkButtonProps) => {
  const { to, onClick, history, ...rest } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(e);
    }

    history.push(to as LocationDescriptorObject);
  }

  return <Button onClick={handleClick} {...rest} />;
};

export default withRouter<LinkButtonProps>(LinkButton);
