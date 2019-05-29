import React from 'react';
import Button from './Button';

import './DotsContainer.css';

interface Props {
  updateScore: (key: number) => void;
  activeIndex: number;
}

export default function DotsContainer(props: Props) {
  const { updateScore, activeIndex } = props;

  const handleMissClick = () => {
    updateScore(-1);
  }

  return (
    <div className="dots-container" onClick={handleMissClick}>
      <div className="dots-row dots-row--between">
        <Button activeIndex={activeIndex} index={1} onClick={updateScore} />
        <Button activeIndex={activeIndex} index={2} onClick={updateScore} />
      </div>
      <div className="dots-row dots-row--around">
        <Button activeIndex={activeIndex} index={3} onClick={updateScore} />
        <Button activeIndex={activeIndex} index={4} onClick={updateScore} />
      </div>
      <div className="dots-row dots-row--between">
        <Button activeIndex={activeIndex} index={5} onClick={updateScore} />
        <Button activeIndex={activeIndex} index={6} onClick={updateScore} />
        <Button activeIndex={activeIndex} index={7} onClick={updateScore} />
      </div>
      <div className="dots-row dots-row--around">
        <Button activeIndex={activeIndex} index={8} onClick={updateScore} />
        <Button activeIndex={activeIndex} index={9} onClick={updateScore} />
      </div>
      <div className="dots-row dots-row--between">
        <Button activeIndex={activeIndex} index={10} onClick={updateScore} />
        <Button activeIndex={activeIndex} index={11} onClick={updateScore} />
        <Button activeIndex={activeIndex} index={12} onClick={updateScore} />
      </div>
    </div>
  );
}
