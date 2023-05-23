import React from 'react';
import {IconPauseCircle,IconSkipNext,IconSkipPrevious}  from '@arco-design/web-react/icon';
function Story() {
  const titleStyle = {
    fontSize: '18px',
    margin: '20px'
  }
  const storyContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80vw',

  }
  const BackCardStyle = {
    // 渐变颜色的背景
    background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    width: '80vw',
    height: '40vh',
    borderRadius: '5px',
    
  }
  const textStyle = {
    fontSize: '15px',
    margin:'15px',
  }
  const operateStyle = {
    display: 'flex',
    width: '80vw',
    justifyContent: 'space-around',
    alignItems:'center'
  }
  return (
    <div style={storyContainerStyle}>
      <div style={titleStyle}> 小红帽与大灰狼</div>
      <div style={BackCardStyle}></div>
      <div style={textStyle}>当前故事词语当前故事词语当前故事词语当前故事词语当前故事词语当前故事词语</div>
      <div style={operateStyle}>
        <IconSkipPrevious fontSize={34} />
        <IconPauseCircle fontSize={36} />
        <IconSkipNext fontSize={34} />
      </div>
    </div>
  );
}

export default Story;