import React from 'react';
import Button from 'src/dots/shared/Button';

import './Summary.css';
import LinkButton from 'src/dots/shared/LinkButton/LinkButton';

interface Props {
  score: number;
  missClicks: number;
  resetGame: () => void;
}

export default function Summary(props: Props) {
  const { score, missClicks, resetGame } = props;

  return (
    <div className="summary-container">
      <span className="summary--title">Well done!</span>
      <span className="summary--score">Score: {score}</span>
      <span className="summary--missclicks">Misses: {missClicks}</span>
      <Button onClick={resetGame}>Play Again</Button>
      <LinkButton to="/">Menu</LinkButton>
    </div>
  )
}
