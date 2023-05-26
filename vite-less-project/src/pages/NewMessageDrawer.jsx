import React from 'react';
import { Drawer,Button } from '@arco-design/web-react';
import { IconClose } from '@arco-design/web-react/icon';
import FlyCard from '../components/flyCard';
import AudioRecorder from '../components/AudioRecoder';
import messageHead from '../assets/A03留言板-子女视角-背景.png'
function NewMessageDrawer(props) {
  //从props中获取visible
  const { visible, setVisible,getPopupContainer } = props;

  return (
    <Drawer
      height='100%'
      width='100%'
      closable={false}
      title={null}
      visible={visible}
      bodyStyle={{padding:0,margin:0,borderRadius:'20px 20px 0 0'}}
      placement='bottom'
      footer={null}
      getPopupContainer={getPopupContainer}
    >
      <div style={{position:'relative',width:'100%', height: '100%', backgroundImage:`url(${messageHead})` }}>
        <Button onClick={() => { setVisible(false) }} style={{zIndex:100, height:50,width:50,fontSize:30,margin:20,color:'black',float:'right',backgroundColor:'#fdfdfd'}} type='text' shape='circle' icon={<IconClose />}></Button>
        <div style={{paddingTop:70,position:'relative' }}>
          <FlyCard animation='card animation1' message='今天想妈妈了！' color='#9a89ff' backgroundColor='#d5cefe' />
          <FlyCard animation='card animation2' message='今天很难过' color='#35a7ff' backgroundColor='#d6f6fe' />
          <FlyCard animation='card animation3' message='今天真无语！' color='#d9c800' backgroundColor='#fef9d3' />
          <FlyCard animation='card animation4' message='焦虑中！' color='#4ba48c' backgroundColor='#d9feee' />
          <FlyCard animation='card animation5' message='学习成果很不错！很不错！' color='#ff6000' backgroundColor='#ffe5d3' />
        </div>


        <div style={{ position: 'absolute', left: 0,right:0, top:640, display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <AudioRecorder recordHook={() => { setVisible(false)}}></AudioRecorder>
        </div>
      </div>


      </Drawer>
  );
}

export default NewMessageDrawer;