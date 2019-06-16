import React from 'react';
import LinkButton from 'src/dots/shared/LinkButton/LinkButton';
import { Pages } from 'src/common/constants';

import './Menu.less';

export default function Menu() {
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
        <LinkButton to={Pages.Dots.Game}>Start</LinkButton>
        <div className="dots-menu--secondary-container">
          <LinkButton to={Pages.Home} type="secondary">Main Menu</LinkButton>
          <LinkButton to={Pages.Dots.HighScores} type="secondary">Highscores</LinkButton>
        </div>
      </div>
    </div>
  )
}
