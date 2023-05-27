import React from 'react';
import chatAvator from '../../assets/AI学习-AI头像.png'
import './chatCard.less'
import voiceIcon from '../../assets/AI学习-语音播放容器.png'

function Card(props) {
  const { usr,message,color } = props;
  
  return (
    <div className='chat-container1'>
      <div className='message-container1'>
        <div className='chat-message1'>{message}</div>
        <div className='chat-voice1' style={{ backgroundImage: `url(${voiceIcon})` }}>
          {Math.floor(message.length/3 + 1)}″
        </div>
      </div>
      <div className='chat-avator1' style={{backgroundImage:`url(${chatAvator})`}}> </div>


    </div>
  );
}

export default Card;