import React from 'react';
import  './flyCard.less'
function Card(props) {
  const { icon,message,color,backgroundColor,animation } = props;
  return (
    <div className='container'>
      <div className={animation} style={{color:color,backgroundColor:backgroundColor}}>
            <div className='icon'></div>
            {message}
      </div>
    </div>
    
  );
}

export default Card;