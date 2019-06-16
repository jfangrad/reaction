import React from 'react'
import LinkButton from '../dots/shared/LinkButton/LinkButton';
import { Pages } from '../common/constants';

import './MainMenu.less';

const MainMenu = () => {
  return (
    <div className="main-menu">
      Main menu
      <LinkButton to={Pages.Dots.Home}>Dots</LinkButton>
    </div>
  )
}

export default MainMenu;
