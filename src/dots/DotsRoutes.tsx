import React from 'react';
import { Route } from 'react-router-dom';
import { Pages } from 'src/common/constants';
import { DotsGame, DotsMenu, DotsHighscores } from './DotsGame';

const Game = () => {

  return (
    <>
      <Route exact path={Pages.Dots.Home} component={DotsMenu} />
      <Route path={Pages.Dots.Game} component={DotsGame} />
      <Route path={Pages.Dots.HighScores} component={DotsHighscores} />
    </>
  );
}

export default Game;
