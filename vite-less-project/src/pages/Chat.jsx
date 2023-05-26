import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import AiChatCard from '../components/AiChatCard/chatCard'
import ChildChatCard from '../components/ChildChatCard/chatCard'
import Input from '../components/Input';
import { IconLeft } from '@arco-design/web-react/icon';
import CloseComponent from '../components/CloseComponent/close.jsx';
import bg_chat from '../assets/AI学习-背景.png'

function Chat() {
  // 左滑返回Home
  // const history = useHistory();
  // const handleGoBack = () => {
  //   history.goBack();
  // };
  const [chatMessages, setChatMessages] = useState([
    { usr: '王小兴', message: '你好', color: 'gold' },
    { usr: 'GPT', message: '你好，今天需要我怎样协助你？', color: 'green' },
    { usr: '王小兴', message: '我今天做数学题，遇到了一个特别特别难的题。问鸡兔同笼，有50个头，128只脚，总共有几只鸡，几只兔？', color: 'gold' }
  ]);
  
  function scroolToBottom() {
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  function addChildChatCard(message) {
    //屏幕向上滚动
    scroolToBottom()
    const newChatCard = { usr: '王小兴', message: message, color: 'gold' };
    setChatMessages(prevMessages => [...prevMessages, newChatCard]);
  }
  function addNullGPTChatCard() {
    
    const newChatCard = { usr: 'GPT', message: '...', color: 'green' };
    setChatMessages(prevMessages => [...prevMessages, newChatCard]);
  }
  function ChangeLastGPTChatCard(message) {
    
    [...message].forEach((item, index) => {
      setTimeout(() => {
        scroolToBottom()
        const newChatCard = { usr: 'GPT', message: message.slice(0, index + 1), color: 'green' };
        setChatMessages(prevMessages => [...prevMessages.slice(0, prevMessages.length - 1), newChatCard]);
      }, 50 * index)
    })


  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative',backgroundImage:`url(${bg_chat})` }}>
      <CloseComponent/>
      <div id='chatContainer' style={{ width:'100%',height:'80%',overflowY:'scroll',marginTop:'100px'}}>
        
        {chatMessages.map((message, index) => (
        message.usr === 'GPT' ? <AiChatCard key={index} usr={message.usr} message={message.message} color={message.color} /> :
                            <ChildChatCard key={index} usr={message.usr} message={message.message} color={message.color} />
        ))}
        <div style={{height:200}}></div>
      
      </div>
      <div >
        {/* <Input style={{ maxWidth: 350 }} allowClear placeholder="Please Enter something" /> */}
        <Input callback1={addChildChatCard} callback2={addNullGPTChatCard} callback3={ChangeLastGPTChatCard}    ></Input>
      </div>

    </div>
    
  );
}

export default Chat;