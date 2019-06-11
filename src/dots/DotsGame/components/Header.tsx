import React from 'react';

import './Header.less';

interface Props {
  score?: number;
  time?: number;
  inGame?: boolean;
};

export default function Header(props: Props) {
  const { score, time, inGame } = props;

  if (!inGame) {
    return (
      <div className="dots-header">
        <div className="dots-header--title">Times Up</div>
        <div className="dots-header--border" />
      </div>
    );
  }

  return (
    <div className="dots-header--ingame">
      <div>{time}</div>
      <div>Score: {score}</div>
    </div>
  );
}

Header.defaultProps = {
  inGame: true,
};
