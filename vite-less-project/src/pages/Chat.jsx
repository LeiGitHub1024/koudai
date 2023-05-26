import React from 'react';
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


  return (
    <div style={{ width: '100%', height: '100%', position: 'relative',backgroundImage:`url(${bg_chat})` }}>
      <CloseComponent/>
      <div style={{ width:'100%',height:'80%',overflowY:'scroll',marginTop:'100px'}}>
        
        <ChildChatCard usr="王小兴" message="你好" color='gold' />
        <AiChatCard usr="GPT" message="你好，今天需要我怎样协助你？" color='green' />
        <ChildChatCard usr="王小兴" message="我今天做数学题，遇到了一个特别特别难的题。问鸡兔同笼，有50个头，128只脚，总共有几只鸡，几只兔？" color='gold' />
      </div>
      <div >
        {/* <Input style={{ maxWidth: 350 }} allowClear placeholder="Please Enter something" /> */}
        <Input></Input>
      </div>

    </div>
    
  );
}

export default Chat;