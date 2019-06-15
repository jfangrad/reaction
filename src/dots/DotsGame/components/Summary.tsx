import React, { useState, useEffect } from 'react';
import LinkButton from 'src/dots/shared/LinkButton/LinkButton';
import Header from './Header';
import { insertScore, updateScore } from '../utils/localStorage';
import { Pages, UNNAMED_SCORE } from '../utils/constants';

import './Summary.less';
import { LocationDescriptorObject } from 'history';

interface Props {
  score: number;
  missClicks: number;
  resetGame: () => void;
}

export default function Summary(props: Props) {
  const { score } = props;
  const [name, setName] = useState('');
  const [scoreId, setScoreId] = useState('');

  useEffect(() => {
    const value = insertScore(score, UNNAMED_SCORE);
    setScoreId(value.id);
  }, [])

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName((e.nativeEvent.srcElement as any).value);
  };

  const handleGoClick = () => {
    if (name.length) {
      updateScore(scoreId, { name });
    }
  };

  const locationObject : LocationDescriptorObject = {
    pathname: Pages.HighScores,
    state: { scoreId },
  };

  return (
    <>
      <div className="summary--mask" />
      <div className="summary-container">
        <Header inGame={false} />
        <div className="summary--score">
          <div>Your score:</div>
          <div className="score--value">{score}</div>
        </div>
        <div className="summary-name--container">
          <div className="summary-name--title">
            Enter your nickname
          </div>
          <input
            className="summary-name--input"
            type="text"
            placeholder="eg. racer123"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="summary-buttons--container">
          <LinkButton to={locationObject} onClick={handleGoClick}>GO</LinkButton>
          <div className="summary-buttons--seperator">
            <span /><div className="summary-buttons--seperator-text">OR</div><span />
          </div>
          <LinkButton type="secondary" to={Pages.Home}>Home</LinkButton>
        </div>
      </div>
    </>
  );
}
