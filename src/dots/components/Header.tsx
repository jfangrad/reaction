import React from 'react';

import './Header.css';

interface Props {
  score: number;
  time: number;
};

export default function Header(props: Props) {
  const { score, time } = props;

  return (
    <div className="dots-header">
      <div>{time}</div>
      <div>score: {score}</div>
    </div>
  )
}
