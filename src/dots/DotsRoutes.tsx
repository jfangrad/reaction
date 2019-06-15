import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DotsMenu from './Menu';
import Dots from './DotsGame';
import Highscores from './DotsGame/components/Highscores';
import { Pages } from './DotsGame/utils/constants';

const Game = () => {

  return (
    <Router basename="reaction">
      <Route exact path={Pages.Home} component={DotsMenu} />
      <Route path={Pages.Game} component={Dots} />
      <Route path={Pages.HighScores} component={Highscores} />
    </Router>
  );
}

export default Game;
