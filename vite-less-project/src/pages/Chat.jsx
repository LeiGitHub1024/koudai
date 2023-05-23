import React from 'react';
import ChatCard from '../components/chatCard';
import Input from '../components/Input';
import { IconLeft } from '@arco-design/web-react/icon';
import ReturnComponent from '../components/ReturnComponent/return.jsx';
function Chat() {
  // 左滑返回Home
  // const history = useHistory();
  // const handleGoBack = () => {
  //   history.goBack();
  // };


  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <ReturnComponent/>
      <div style={{width:'100%',height:'80%',overflowY:'scroll'}}>
        
        <ChatCard usr="王小兴" message="你好" color='gold' />
        <ChatCard usr="GPT" message="你好，今天需要我怎样协助你？" color='green' />
        <ChatCard usr="王小兴" message="我今天做数学题，遇到了一个特别特别难的题。问鸡兔同笼，有50个头，128只脚，总共有几只鸡，几只兔？" color='gold' />

      </div>
      <div>
        {/* <Input style={{ maxWidth: 350 }} allowClear placeholder="Please Enter something" /> */}
        <Input></Input>
      </div>

    </div>
    
  );
}

export default Chat;