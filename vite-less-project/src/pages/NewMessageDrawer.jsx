import React from 'react';
import { Drawer } from '@arco-design/web-react';
import FlyCard from '../components/flyCard';
import AudioRecorder from '../components/AudioRecoder';
import messageHead from '../assets/A03留言板-子女视角-背景.png'
import CloseComponent from '../components/CloseComponent/close.jsx';

import Img1 from '../assets/1-难过.png'
import Img2 from '../assets/2-想妈妈.png'
import Img3 from '../assets/3-无语.png'
import Img4 from '../assets/4-学习好.png'
import Img5 from '../assets/5-爸爸骑车小心.png'


function NewMessageDrawer(props) {
  //从props中获取visible
  const { visible, setVisible,getPopupContainer,hooks } = props;

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
        {/* <Button onClick={() => { setVisible(false) }} style={{zIndex:100, height:50,width:50,fontSize:30,margin:20,color:'black',float:'right',backgroundColor:'#fdfdfd'}} type='text' shape='circle' icon={<IconClose />}></Button> */}
        <CloseComponent to='/messageboard' callback={() => { setVisible(false)}} />
        <div style={{ paddingTop: 145, position: 'relative' }}>
          <FlyCard animation='card animation1'  style={{ height: 32, width: 157, backgroundImage:`url(${Img1})` }} />
          <FlyCard animation='card animation2'  style={{ height: 32, width: 169, backgroundImage:`url(${Img2})` }} />
          <FlyCard animation='card animation3'  style={{ height: 32, width: 155, backgroundImage:`url(${Img3})` }} />
          <FlyCard animation='card animation4'  style={{ height: 32, width: 190, backgroundImage:`url(${Img4})` }}/>
          <FlyCard animation='card animation5'  style={{ height: 32, width: 225, backgroundImage:`url(${Img5})` }}/>
        </div>


        <div style={{ position: 'absolute', left: 0,right:0, top:640, display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <AudioRecorder recordHook={() => { setVisible(false);hooks()}}></AudioRecorder>
        </div>
      </div>


      </Drawer>
  );
}

export default NewMessageDrawer;