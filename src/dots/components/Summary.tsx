import React from 'react';

import './Summary.css';

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
      <button className="summary--play-again" onClick={resetGame}>Play again</button>
    </div>
  )
}
