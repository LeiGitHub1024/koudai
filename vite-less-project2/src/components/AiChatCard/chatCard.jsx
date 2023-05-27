import React from 'react';
import chatAvator from '../../assets/AI学习-AI头像.png'
import './chatCard.less'
import voiceIcon from '../../assets/AI学习-语音播放容器.png'
import ReactDOMServer from 'react-dom/server';

function Card(props) {
  const { usr,message,color } = props;
  
  return (
    <div className='chat-container'>
      <div className='chat-avator' style={{backgroundImage:`url(${chatAvator})`}}> </div>
      <div className='message-container'>
        <div className='chat-message'>{message}</div>
        <div className='chat-voice' style={{ backgroundImage: `url(${voiceIcon})` }}>
          {Math.floor(ReactDOMServer.renderToString(message).length/4 +1 )}″
        </div>
    
      </div>

    </div>
  );
}

export default Card;