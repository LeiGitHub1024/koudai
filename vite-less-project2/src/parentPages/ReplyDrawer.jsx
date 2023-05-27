import React,{useEffect, useState} from 'react';
import { Drawer,Button,Divider } from '@arco-design/web-react';
import { IconClose } from '@arco-design/web-react/icon';
import FlyCard from '../components/flyCard';
import AudioRecorder from '../components/AudioRecoder';
import messageHead from '../assets/留言板-父母回复留言-背景.png'
import CloseComponent from '../components/CloseComponent/close';
import analizeImg from '../assets/父母回复-分析标题.png'
import sugImg from '../assets/父母回复-”回复建议“标题.png'
import shuxie from '../assets/书写.png'
import request from '../utils/request';
function NewDrawer(props) {
  //从props中获取visible
  const { visible, setVisible,getPopupContainer } = props;

  const [analyse, setAnalyse] = useState('')
  const [suggestion, setSuggestion] = useState('')
  useEffect( () => {
    init()
  }, [])
  
  async function init() {
    const formData = new FormData();
    formData.append('message_id', 1);
    let res = await request(formData, 'getSuggestionForReply')
    console.log(res)
    setAnalyse(res?.data?.analyse)
    setSuggestion(res?.data?.suggestion)
  }




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
      <div style={{ display:'flex',justifyContent:'center', position:'relative',width:'100%', height: '100%', backgroundImage:`url(${messageHead})`,backgroundRepeat:'no-repeat' }}>
        <CloseComponent callback={() => { setVisible(false)}} />
        <div style={{ width: '90%',}}>
          <div id='container' style={{ flex:1, borderRadius: 30,padding:'20px',boxSizing:'border-box' , backgroundColor: '#f8f8f8',marginTop:'290px' }}>
              <div style={{ height:30,width:100,backgroundRepeat:'no-repeat',backgroundImage:`url(${analizeImg})`}} ></div>
              <div style={{color: "#666", fontWeight:'400px',fontSize:'14px'}}>{analyse}</div>
            <Divider></Divider>
              <div style={{ height:30,width:100,backgroundRepeat:'no-repeat',backgroundImage:`url(${sugImg})`}} ></div>
              <div style={{color: "#666", fontWeight:'400px',fontSize:'14px'}}>{suggestion}</div>
          </div>

        </div>

        <div style={{ position: 'absolute', left: 0,right:0, top:640, display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <AudioRecorder apiName='addReply'  userId={2} recordHook={() => { setVisible(false) }}></AudioRecorder>
          <div style={{ marginTop:15,height:35,width:50,backgroundRepeat:'no-repeat' ,backgroundImage:`url(${shuxie})`}}></div>
        </div>
        

      </div>


      </Drawer>
  );
}

export default NewDrawer;