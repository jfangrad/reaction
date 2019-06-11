import React from 'react';
import Button from 'src/dots/shared/Button';
import LinkButton from 'src/dots/shared/LinkButton/LinkButton';

import './Summary.less';
import Header from './Header';

interface Props {
  score: number;
  missClicks: number;
  resetGame: () => void;
}

export default function Summary(props: Props) {
  const { score, resetGame } = props;

  return (
    <>
      <div className="summary--mask" />
      <div className="summary-container">
        <Header inGame={false} />
        <span className="summary--score">Score: {score}</span>
        <div className="summary-name--container">
          <div className="summary-name--title">
            Enter your nickname
          </div>
          <input className="summary-name--input" type="text" placeholder="eg. racer123" />
        </div>
        <div className="summary-buttons--container">
          <Button onClick={resetGame}>GO</Button>
          <div className="summary-buttons--seperator">
            <span /><div className="summary-buttons--seperator-text">OR</div><span />
          </div>
          <LinkButton type="secondary" to="/">Home</LinkButton>
        </div>
      </div>
    </>
  );
}
