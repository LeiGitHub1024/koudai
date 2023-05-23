import React from 'react';
import Card from '../components/card';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style = {{display:'flex', flexDirection:'column', alignItems: 'center'}}>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <Link to="/story">   <Card width="40vw" height="150px" text="故事" /> </Link>
        <div style={{ width: 10 }}></div>
        <Link to="/chat">   <Card width="40vw" height="150px" text="聊天" /> </Link>
      </div>

      <Link to="/messageboard">   <Card width="calc(80vw + 10px)" height="150px" text="留言板" /> </Link>
    </div >
  );
}

export default Home;