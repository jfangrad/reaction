import React from 'react';

import './Button.css';

interface Props {
  onClick: (index: number) => void;
  index: number;
  activeIndex: number;
}

export default function Button(props: Props) {
  const { onClick, index, activeIndex } = props;

  function handleClick(e: any) {
    e.stopPropagation();
    onClick(index);
  }

  const className = activeIndex === index ?  "dots-btn dots-btn--active" : "dots-btn";
  const innnerClassName = activeIndex === index ? "dots-btn--inner dots-btn--inner-active" : "dots-btn--inner";
  return (
    <div className={className} role="button" onClick={handleClick}>
      <div className={innnerClassName} />
    </div>
  )
}
