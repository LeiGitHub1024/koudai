import React from 'react';
import { Input,Button } from '@arco-design/web-react';
import { IconArrowRise } from '@arco-design/web-react/icon';
import voidIcon from '../assets/A03留言板-子女视角-语音按钮.png'
function myInput() {
  const inputContainerStyle = {
    // margin: '20px 20px',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    height: 180,
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: '30px 30px 0 0',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  }
  const inputStyle = {
    width: '80%',
    height: '60px',
    borderRadius: '15px',
  }
  const voiceStyle = {
    width: '260px',
    height: '60px',
    borderRadius: '50px',
    backgroundImage: `url(${voidIcon})`,
    // backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginTop: '20px',
  }
  return (
    <div style={inputContainerStyle}>
      <Input style={inputStyle} allowClear placeholder='请输入你的问题' />
      
      {/* <Button shape='circle' type='primary' icon={<IconArrowRise />} /> */}
      <div style={voiceStyle}></div>
    </div>
  );
}

export default myInput;