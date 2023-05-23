import React from 'react';

function Card(props) {
  const { usr,message,color } = props;
  const cardStyle = {
    width: '80vw',
    backgroundColor: 'white',
    // border: '1px solid black',
    borderRadius: '5px',
    margin: '10px 20px '
  }
  const avaterStyle = {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    backgroundColor: color,
    marginRight: '5px',
  }
  const messageStyle = {
    marginLeft: '20px',
  }
  return (
    <div>
      <div style={cardStyle}>
        <div style={{ display: 'flex', alignItems:'center', }}>
          <div style={avaterStyle}> </div>
          <div>{usr}</div>
        </div>
        <div style={messageStyle}>{message}</div>

      </div>
    </div>
  );
}

export default Card;