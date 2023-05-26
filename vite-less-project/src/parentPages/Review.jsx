import React from 'react';
import { Radio, Button, Space, Typography } from '@arco-design/web-react';
import StatusCard from '../components/StatusCard';
import { IconLeft } from '@arco-design/web-react/icon';
import ReturnComponent from '../components/ReturnComponent/return.jsx';

function Review() {
  return (
    <div style={{position:'relative',width:'100%',height:'100%', background: 'linear-gradient(to right, #f5ffff, #e3fdf7)'}}>
      <ReturnComponent to='/'/>
      <Radio.Group style={{ margin: '30px 0 10px 10px' }} defaultValue={'近7天'} name='button-radio-group'>
          {['近7天', '近30天', '近60天'].map((item) => {
            return (
              <Radio key={item} value={item}>
                {({ checked }) => {
                  return (
                    <Button tabIndex={-1} key={item} shape='round' style={{height:50,borderRadius:40 ,fontSize:20, color:'black', backgroundColor:checked?'#FFD100':'#FFF'}}    type={checked ? 'primary' : 'default'}>
                      {item}
                    </Button>
                  );
                }}
              </Radio>
            );
          })}
      </Radio.Group>
      <div style={{width:'100%',display:'flex',padding:'20px',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{fontSize:'30px',fontWeight:700}}>
          <div>悠悠</div>
          <div>最近过的不错</div>
        </div>
        <div style={{ width: 100, height: 100, borderRadius: '50%', backgroundColor: 'greenyellow',marginRight:50 }}>
        </div>
      </div>
      <div style={{width:'100%',margin:'20px'}}>
        <StatusCard color='#FF8687' title='学习' message='学习情况简述学习情况简述学习情况简述学习情况简述' suggestion='制定明确的目标：确保您知道自己想要学习什么，并设定明确的学习目标。这将帮助您保持动力和专注，并提供指导方向' />
        <StatusCard color='#62BFFF' title='心情' message='心情情况简述心情情况简述心情情况简述心情情况简述' suggestion='给自己留出时间来照顾自己的身心健康。这可能包括锻炼、休息、娱乐活动、良好的睡眠和健康饮食。确保满足自己的基本需求，以保持身体和心理的平衡。' />
      </div>

    </div>
  );
}

export default Review;