import React from 'react';
import Button from 'src/dots/shared/Button';
import { RouteChildrenProps } from 'react-router';

import '../styles/Menu.less';

export default function Menu(props: RouteChildrenProps) {
  const { history } = props;

  const onClick = () => {
    history.push('game');
  }

  return (
    <div className="dots-menu">
      <div className="dots-menu--title">
        Times Up
        <div className="underline-small" />
        <div className="underline-large" />
        <div className="underline-small" />
      </div>
      <div className="dots-menu--description">
        <div className="description--main">
          Race against the clock
        </div>
        <div className="description--sub">
          Test your reactions
        </div>
        <div className="description--minor">
          Hit the <span className="text--green">green</span> targets
        </div>
      </div>
      <div className="dots-menu--butons-container">
        <Button onClick={onClick}>Start</Button>
        <Button onClick={onClick} type="secondary">Highscores</Button>
      </div>
    </div>
  )
}
