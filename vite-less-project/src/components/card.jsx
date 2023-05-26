import React from 'react';

function Card(props) {
  const { width, height,text,backgroundImage } = props;
  // console.log(width)
  const cardStyle = {
    width: width,
    height: height,
    backgroundColor: 'transparent',
    backgroundRepeat: 'no-repeat',
    borderRadius: '15px',
    lineHeight: height,
    textAlign: 'center',
    fontSize: '30px',
    backgroundImage: `url(${backgroundImage})`,

  }
  return (
    <div style={cardStyle}>
      {text}
    </div>
  );
}

export default Card;