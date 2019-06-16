import React from 'react';
import { RouteProps } from 'react-router';
import classNames from 'classnames';
import { Pages } from 'src/common/constants';
import Trophy from 'src/dots/shared/Icons/Trophy';
import LinkButton from 'src/dots/shared/LinkButton/LinkButton';
import Header from './Header';
import { getScores } from '../utils/localStorage';
import { ScoreType } from '../utils/types';

import './Highscores.less';

// TODO: Refactor out Header to Route level
const Highscores = (props: RouteProps) => {
  const { state } = props.location!;
  const { scoreId } = (state || {})!;
  const scores = getScores();

  const renderScore = (score: ScoreType, index: number) => {
    const indexMarkup = index === 0 ? <Trophy /> : index + 1;
    const isCurrentScore = scoreId === score.id;
    const classes = classNames(
      'highscore--item',
      {
        'highscore--item-new': index === 0 && isCurrentScore,
        'highscore--item-selected': isCurrentScore,
      },
    );
    return (
      <li className={classes} key={score.id}>
        <div className="item--index">{indexMarkup}</div>
        <span className="item--name">{score.name}</span>
        <span className="item--score">{score.score}</span>
      </li>
    );
  };

  const isNewHighscore = scores[0] && scores[0].id === scoreId;
  const playButtonText = scoreId ? 'Play Again' : 'Play';

  return (
    <div className="highscore-container">
      <Header inGame={false} />
      <div className="highscore--title">Highscores</div>
      {isNewHighscore && <div className="highscore--text">New Highscore!</div>}
      <div className="highscore--list-button-wrapper">
        <ul className="highscore--list">
          {scores.map(renderScore)}
        </ul>
        <div className="highscore-buttons--container">
          <LinkButton to={Pages.Dots.Game}>{playButtonText}</LinkButton>
          <LinkButton type="secondary" to={Pages.Dots.Home}>Home</LinkButton>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Highscores);
