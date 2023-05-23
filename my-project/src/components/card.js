import React from 'react';

function Card(props) {
  const { width, height,text } = props;
  console.log(width)
  const cardStyle = {
    width: width,
    height: height,
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    lineHeight: height,
    textAlign: 'center',
    fontSize: '30px',
  }
  return (
    <div style={cardStyle}>
      {text}
    </div>
  );
}

export default Card;