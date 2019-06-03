import React, { useState, useEffect, useRef } from 'react';

import './Countdown.css';

interface Props {
  onFinish: () => void;
}

export default function Countdown({ onFinish }: Props) {
  const [countdown, setCountdown] = useState(4);
  const countdownRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    countdownRef.current = setInterval(() => setCountdown(p => p - 1), 1000);
  }, []);

  useEffect(() => {
    if (countdown <= 1 && countdownRef.current) {
      clearInterval(countdownRef.current);
      onFinish();
    }
  });

  return (
    <div className="countdown-container">
      <div className="countdown-text">
        {countdown - 1}
      </div>
      <div className="countdown-background" />
    </div>
  )
}
