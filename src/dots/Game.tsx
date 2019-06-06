import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dots from './DotsGame';
import DotsMenu from './Menu';

const Game = () => {

  return (
    <Router>
      <Route exact path="/" component={DotsMenu} />
      <Route path="/game" component={Dots} />
    </Router>
  );
}

export default Game;
