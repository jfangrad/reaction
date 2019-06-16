import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { STATUS } from 'src/common/constants';
import DotsContainer from './DotsContainer';
import Header from './Header';
import Summary from './Summary';
import Countdown from './Countdown';

import './Dots.less';

function getRandomInt(max: number, prev: number = 0) {
  let num;
  do {
    num = ((Math.floor(Math.random() * Math.floor(max * 2))) % 12) + 1
  } while (num === prev)
  return num;
}

const MAX_INDEX = 11;
const GAME_LENGTH = process.env.NODE_ENV === 'development' ? 2 : 15;
const INITIAL_ACTIVE_KEY = getRandomInt(MAX_INDEX);

export default function Dots() {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(GAME_LENGTH);
  const [status, setStatus] = useState(STATUS.COUNTDOWN);
  const [missClicks , setMissClicks] = useState(0);
  const [activeIndex, setActiveIndex] = useState(INITIAL_ACTIVE_KEY);
  const intervalRef = useRef<NodeJS.Timeout>();

  // Disable scrolling to stop any issues while tapping
  useEffect(() => {
    disableBodyScroll(null as any);
    return () => enableBodyScroll(null as any);
  }, []);

  useEffect(() => {
    if (status === STATUS.PLAY) {
      intervalRef.current = setInterval(() => setTime(p => p - 1), 1000);
    }
  }, [status]);

  useEffect(() => {
    if (time <= 0) {
      clearInterval(intervalRef.current!);
      setStatus(STATUS.DONE);
      setTime(0);
    }
  });

  const handleScoreUpdate = (index: number) => {
    if (index === activeIndex && status === STATUS.PLAY) {
      setScore(p => p + 1);
      setActiveIndex(p => getRandomInt(MAX_INDEX, p));
    } else if (index === -1) {
      setMissClicks(p => p + 1);
    }
  }

  const onCountdownFinish = () => {
    setStatus(STATUS.PLAY);
  }

  const resetGame = () => {
    setStatus(STATUS.COUNTDOWN);
    setTime(GAME_LENGTH);
    setScore(0);
    setMissClicks(0);
  }

  return (
    <div className={classNames('dots-game-container', { 'dots-game-container--done': status === STATUS.DONE })}>
      {status === STATUS.COUNTDOWN && <Countdown onFinish={onCountdownFinish} />}
      <Header score={score} time={time} />
      <DotsContainer updateScore={handleScoreUpdate} activeIndex={status === STATUS.PLAY ? activeIndex : -1} />
      {status === STATUS.DONE &&
        <Summary
          score={score}
          missClicks={missClicks}
          resetGame={resetGame}
        />
      }
    </div>
  );
}
