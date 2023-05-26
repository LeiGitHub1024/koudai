import React from 'react';
import { Drawer,Button } from '@arco-design/web-react';
import { IconClose } from '@arco-design/web-react/icon';
import FlyCard from '../components/flyCard';
import AudioRecorder from '../components/AudioRecoder';

function NewMessageDrawer(props) {
  //从props中获取visible
  const { visible, setVisible,getPopupContainer } = props;

  return (
    <Drawer
      height='95%'
      width='100%'
      closable={false}
      title={null}
      visible={visible}
      bodyStyle={{padding:0,margin:0,borderRadius:'20px 20px 0 0'}}
      placement='bottom'
      footer={null}
      getPopupContainer={getPopupContainer}
    >
      <div style={{position:'relative',width:'100%', height: '65%',backgroundColor:'transparent', background: 'linear-gradient(to right, #f5ffff, #e3fdf7)' }}>
        <Button onClick={() => { setVisible(false) }} style={{zIndex:100, height:50,width:50,fontSize:30,margin:20,color:'black',float:'right',backgroundColor:'#fdfdfd'}} type='text' shape='circle' icon={<IconClose />}></Button>
        <div style={{paddingTop:70,position:'relative' }}>
          <FlyCard animation='card animation1' message='今天想妈妈了！' color='#9a89ff' backgroundColor='#d5cefe' />
          <FlyCard animation='card animation2' message='今天很难过' color='#35a7ff' backgroundColor='#d6f6fe' />
          <FlyCard animation='card animation3' message='今天真无语！' color='#d9c800' backgroundColor='#fef9d3' />
          <FlyCard animation='card animation4' message='焦虑中！' color='#4ba48c' backgroundColor='#d9feee' />
          
          <FlyCard animation='card animation5' message='学习成果很不错！很不错！' color='#ff6000' backgroundColor='#ffe5d3' />
        </div>
        <div style={{marginTop:35, backgroundColor:'red',height:150,  background: 'linear-gradient(to bottom, #feed99, #fede45, #fec804, #f1732b)'}}>
              我是一颗太阳☀️，还有几片☁️云朵
        </div>

        <div style={{ height:'36%', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          {/* <Button style={{borderRadius:50,height:50,width:180,fontSize:21,fontWeight:700,color:'black',backgroundColor:'#FFD100'}} type='text'> 按住说话</Button> */}
          <AudioRecorder recordHook={() => { setVisible(false)}}></AudioRecorder>

          <div style={{ height: 30 }}></div>
          <div style={{ color: '#ccc', fontSize: 14 }}>输入文字</div>

        </div>
      </div>


      </Drawer>
  );
}

export default NewMessageDrawer;