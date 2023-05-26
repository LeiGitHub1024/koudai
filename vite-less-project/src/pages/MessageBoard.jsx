import React,{ useEffect, useState, useRef } from 'react';
import MessageCard from '../components/messageCard';
import { Button,Drawer } from '@arco-design/web-react';
import { IconPlus, } from '@arco-design/web-react/icon';
import { Link } from 'react-router-dom';
import { IconLeft } from '@arco-design/web-react/icon';
import ReturnComponent from '../components/ReturnComponent/return';
import NewMessageDrawer from './NewMessageDrawer';
import request from '../utils/request';

import familyImg from '../images/family.png';
import Img1 from '../images/1.png';
import Img2 from '../images/2.png';
import Img3 from '../images/3.png';
import Img4 from '../images/4.png';
import Img5 from '../images/5.png';
import Img6 from '../images/6.png';
import { func } from 'prop-types';



function MessageBoard() {
  const [visible2, setVisible2] = useState();
  const [visible, setVisible] = useState(false)

  const dataStyle = {
    margin: '10px 0px 0 30px',
    fontSize: '28px', 
  }
  const MessageContainerStyle = {
    height: '100%',
    
  }

  useEffect(() => {
    init();    
  }, []);
  async function init() {
    let res = await request()
    console.log(res)
  }
  const refWrapper = useRef(null);


  return (
    <div ref={refWrapper} style={{position:'relative',height:'100%',width:'100%',background: 'linear-gradient(to top left, #edfdf8, #e5faea)'}}>
      <ReturnComponent/>
      <div style={{ height: '100%', overflowY: 'scroll' }}>
      <div style={{ margin: '10px 20px', fontSize: '30px' }}>快乐家庭
      
      <Link to="/review"> Review</Link>
      </div>
      <div style={{height:40,width:100,backgroundImage:`url(${familyImg})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',margin:'10px 20px'}}></div>

      <div style={MessageContainerStyle}>

        <div style={dataStyle}>05/26</div>
        <MessageCard usr="我" time='14:24' voiceColor='#ffd100' voiceBackgroundColor='#FEF9D3' images={[Img1,Img2,Img3]} message="今天下午上数学课的时候，下起一场特大的雨。老师让我们到外面观察雨，一些同学非常开心，调皮的同学把裤子卷得高高的，然后在水坑里跳来跳去，水溅得到处都是。多么快乐的一场雨啊！" color='gold' />
        <MessageCard usr="我" time='11:24' voiceColor='#35a7ff' voiceBackgroundColor='#D6F6FE' message="上午和好朋友吵架了，心情不美丽！" color='green' />
        <MessageCard usr="妈妈" time='09:30' voiceColor='#917eff' voiceBackgroundColor='#DaD4Fe' images={[Img4,Img5]} message="今天上午翻看宝宝相册，真可爱啊！一眨眼就长大了，很想悠悠。" color='gold' />
        <div style={dataStyle}>05/25</div>
        <MessageCard usr="爸爸" time="21:40" images={[Img6]} voiceColor='#d57ac0' voiceBackgroundColor='#ffe5d3'  message="今天！跑单王！！" color='gold' />
        <MessageCard usr="我" time="12:20" voiceColor='#d57ac0' voiceBackgroundColor='#ffe5d3' message="上午被老师表扬了，开心！" color='green' />
        <div style={{height:50}}></div>
      </div>
      <div style={{position:'absolute',width:'101%',backgroundColor:'white',height:'80px',bottom:'0px'}}></div>
      <div style ={{width:'101%', display:'flex', justifyContent:'center',position:'absolute',bottom:30}}>
          <Button size='large' style={{ marginBottom:'10px', width: 80, height: 80, borderRadius: '50%', color:'black',backgroundColor:'#ffcb04',border:'solid 6px white'}} type='primary' icon={<IconPlus style={{fontSize: 40, }} />}  onClick={() => {setVisible2(true);}} ></Button>
      </div>
      </div>




      <NewMessageDrawer
        visible={visible2}
        setVisible={setVisible2}
        getPopupContainer={() => refWrapper && refWrapper.current}

      ></NewMessageDrawer>

      
        {/* <Drawer
          width={332}
          title={<span>Basic Information </span>}
          visible={visible2}
          setVisible={setVisible2}
          getPopupContainer={() => refWrapper && refWrapper.current}

        >
          <div>Here is an example text.</div>
      
          <div>Here is an example text.</div>
        </Drawer> */}
      


  
  </div>
  );
}

export default MessageBoard;