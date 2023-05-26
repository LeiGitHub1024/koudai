import React,{useState} from 'react';
import { Input,Button } from '@arco-design/web-react';
import { IconArrowRise } from '@arco-design/web-react/icon';
import voidIcon from '../assets/A03留言板-子女视角-语音按钮.png'
import request from '../utils/request';
const TextArea = Input.TextArea;


function myInput(props) {
  const {callback1,callback2,callback3} = props
  const [message,setMessage]=useState('')
  const pressEnter = async (e) => {
    
    //孩子这边新增一个留言
    callback1(message)

    // 调接口
    const formData = new FormData();
    formData.append('content', message);
    setMessage('')

     //chat那边新增一个空留言
    callback2()
    //向后端请求数据
    let res = await request(formData,'getChatReply')
    console.log(res.data)
    //chat那边把空留言替换成后端返回的数据
    callback3(res.data)


  }

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
      <Input value={message} onChange={e => setMessage(e)} onPressEnter={e=>pressEnter(e)} style={inputStyle} allowClear placeholder='请输入你的问题' />
      
      {/* <Button shape='circle' type='primary' icon={<IconArrowRise />} /> */}
      <div style={voiceStyle}></div>
    </div>
  );
}

export default myInput;