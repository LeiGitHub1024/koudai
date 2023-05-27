import React from 'react';
import  './flyCard.less'
function Card(props) {
  const { icon,message,color,backgroundColor,animation,style} = props;
  return (
    <div className='container'>
      <div className={animation}  style={style } >
            {/* <div className='icon'></div> */}
            {message}
      </div>
    </div>
    
  );
}

export default Card;