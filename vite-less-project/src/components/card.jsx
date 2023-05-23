import React from 'react';

function Card(props) {
  const { width, height,text,background } = props;
  console.log(width)
  const cardStyle = {
    width: width,
    height: height,
    backgroundColor: 'white',
    borderRadius: '15px',
    lineHeight: height,
    textAlign: 'center',
    fontSize: '30px',
    background:background,

  }
  return (
    <div style={cardStyle}>
      {text}
    </div>
  );
}

export default Card;