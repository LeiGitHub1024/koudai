import './style.less'
import React, { useState } from 'react';

const Heart = ({ onClick }) => {
  const[like, setLike] = useState(false); // [state, setState
  const [isInAnimation, setIsInAnimation] = useState(false);

  const handleClick = () => {
    if (!like) {
      setIsInAnimation(true);
    }
    setLike(!like)

    // onClick&&onClick();
  };

  const handleAnimationEnd = () => {
    setIsInAnimation(false);
  };

  return (
    <div
      className={`heart ${like ? 'right' : 'left'} ${isInAnimation ? 'is_animating' : ''}`}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
    ></div>
  );
};

export default Heart;
