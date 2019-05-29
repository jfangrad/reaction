import React, { useState, useEffect, useRef } from 'react';
import DotsContainer from './DotsContainer';
import Header from './Header';

import './Dots.css';

function getRandomInt(max: number, prev: number = 0) {
  let num;
  do {
    num = ((Math.floor(Math.random() * Math.floor(max * 2))) % 12) + 1
  } while (num === prev)
  return num;
}

const MAX_INDEX = 11;
const INITIAL_ACTIVE_KEY = getRandomInt(MAX_INDEX);

export default function Dots() {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);
  const [activeIndex, setActiveIndex] = useState(INITIAL_ACTIVE_KEY);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    intervalRef.current = setInterval(() => setTime(p => p - 1), 1000);
  }, []);

  useEffect(() => {
    if (time <= 0) {
      clearInterval(intervalRef.current!);
    }
  });

  const handleScoreUpdate = (index: number) => {
    console.log(index, activeIndex);
    if (index === activeIndex) {
      setScore(p => p + 1);
      setActiveIndex(p => getRandomInt(MAX_INDEX, p));
    }
  }

  return (
    <div className='dots-game-container'>
      <Header score={score} time={time} />
      <DotsContainer updateScore={handleScoreUpdate} activeIndex={activeIndex} />
    </div>
  );
}
