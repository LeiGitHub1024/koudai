import React,{useState} from 'react';
import Card from '../components/card';
import { Link } from 'react-router-dom';
import bg_home from '../assets/01首页-背景.png'
import CardStudy from '../assets/首页入口-去学习.png'
import CardStory from '../assets/首页入口-听故事.png'
import CardMessage from '../assets/首页入口-留言板.png'

function Home() {


  return (
    <div style={{position:'relative', width: '100%', height:'100%', display: 'flex', flexDirection: 'column', alignItems: 'center',padding:'0',backgroundImage:`url(${bg_home})` }}>

      {/* <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',margin:'60px 0 125px 0'}}>
        <div style={{width:'60%'}}>
          <div style={{ fontSize: '30px',marginBottom: 16 }}>嗨，悠悠</div>
          <div style={{width:'100%'}}>
            <div style={{width:'80%',height:'80px',borderRadius:'12px', background: 'linear-gradient(to bottom right, #feca38, #ffffff)',display:'flex',alignItems: 'center'}}> 
            </div>
          </div>
        </div>
        <div style={{height:60,width:60,borderRadius:'50%',backgroundColor:'yellow',marginLeft:'20px'}}>
        </div>
      </div> */}

      <Link style={{width:'100%', display:'flex',justifyContent:'center',marginTop:'340px'}} to="/messageboard">  <Card backgroundImage={CardMessage} width="calc(80% + 10px)" height="180px"  /> </Link>

      <div style={{ width:'100%', display: 'flex',justifyContent:'center', margin: '26px' }}>
        <Link style={{width:'38%'}} to="/story">   <Card  backgroundImage={CardStory}  height="200px"  /> </Link>
        <div style={{ width: 26 }}></div>
        <Link style={{width:'38%'}}  to="/chat">   <Card  backgroundImage={CardStudy}  height="200px"/> </Link>
      </div>

    </div >
  );
}

  export default Home;