import React,{useState} from 'react';
import Card from '../components/card';
import { Link } from 'react-router-dom';
function Home() {


  return (
    <div style={{position:'relative', width: '100%', height:'100%', display: 'flex', flexDirection: 'column', alignItems: 'center',padding:'0',background: 'linear-gradient(45deg, #e1f0f1 20%, #e6e9fe 50%, #effafe 80%)' }}>

      <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',margin:'60px 0 125px 0'}}>
        <div style={{width:'60%'}}>
          <div style={{ fontSize: '30px',marginBottom: 16 }}>嗨，悠悠</div>
          <div style={{width:'100%'}}>
            <div style={{width:'80%',height:'80px',borderRadius:'12px', background: 'linear-gradient(to bottom right, #feca38, #ffffff)',display:'flex',alignItems: 'center'}}> 
            </div>
          </div>
        </div>
        <div style={{height:60,width:60,borderRadius:'50%',backgroundColor:'yellow',marginLeft:'20px'}}>
        </div>
      </div>

      <Link style={{width:'100%', display:'flex',justifyContent:'center'}} to="/messageboard">  <Card background='linear-gradient(to bottom right, #fef7f1, #f8d8cf)' width="calc(80% + 10px)" height="180px" text="分享今天的小事" /> </Link>

      <div style={{ width:'100%', display: 'flex',justifyContent:'center', margin: '26px' }}>
        <Link style={{width:'38%'}} to="/story">   <Card background='linear-gradient(to bottom right, #dff3f7, #f2eaf2)'  height="200px" text="听故事" /> </Link>
        <div style={{ width: 26 }}></div>
        <Link style={{width:'38%'}}  to="/chat">   <Card background='linear-gradient(to bottom right, #defaf3, #dffce7)' height="200px" text="去学习" /> </Link>
      </div>

    </div >
  );
}

  export default Home;