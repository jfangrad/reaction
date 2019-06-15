import React from 'react';
import { RouteProps } from 'react-router';
import classNames from 'classnames';
import Header from './Header';
import { getScores } from '../utils/localStorage';
import { ScoreType } from '../utils/types';

import './Highscores.less';
import Trophy from 'src/dots/shared/Icons/Trophy';
import LinkButton from 'src/dots/shared/LinkButton/LinkButton';
import { Pages } from '../utils/constants';

// TODO: Refactor out Header to Route level
const Highscores = (props: RouteProps) => {
  const { state: { scoreId } } = props.location!;

  const scores = getScores();

  const renderScore = (score: ScoreType, index: number) => {
    const indexMarkup = index === 0 ? <Trophy /> : index + 1;
    return (
      <li className={classNames('highscore--item', { 'highscore--item-selected': scoreId === score.id })} key={score.id}>
        <div className="item--index">{indexMarkup}</div>
        <span>{score.name}</span>
        <span className="item--score">{score.score}</span>
      </li>
    );
  }

  return (
    <div className="highscore-container">
      <Header inGame={false} />
      <div className="highscore--title">Highscores</div>
      <div className="highscore--list-button-wrapper">
        <ul className="highscore--list">
          {scores.map(renderScore)}
        </ul>
        <div className="highscore-buttons--container">
          <LinkButton to={Pages.Game}>Play Again</LinkButton>
          <LinkButton type="secondary" to={Pages.Home}>Home</LinkButton>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Highscores);
