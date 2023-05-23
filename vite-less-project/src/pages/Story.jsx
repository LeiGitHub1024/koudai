import React,{useState, useRef} from 'react';
import {IconPauseCircle,IconSkipNext,IconSkipPrevious,IconCaretRight,IconLeft}  from '@arco-design/web-react/icon';
import { Button } from '@arco-design/web-react';
import bg_story from '../images/bg_story.png'
import { Link } from 'react-router-dom';
import ReturnComponent from '../components/ReturnComponent/return.jsx';
function Story() {

  const storyContainerStyle = {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    // 设置背景图
    backgroundImage: `url(${bg_story})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
    
  }
  const titleStyle = {
    fontSize: '38px',
    margin: '200px 0 0 0 '
  }
  // const BackCardStyle = {
  //   // 渐变颜色的背景
  //   background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
  //   width: '100%',
  //   height: '40%',
  //   borderRadius: '5px',
    
  // }
  // const textStyle = {
  //   fontSize: '15px',
  //   margin:'15px',
  // }
  const operateStyle = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin:'0 0 25px 0'
  }
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };
  // const preMusic = () => {
  //   audioRef.current.pause();
  //   audioRef.current.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  //   audioRef.current.play();
  // }
  // const nextMusic = () => {
  //   audioRef.current.pause();
  //   audioRef.current.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  //   audioRef.current.play();
  // }
  const audioRef = useRef(null);
  return (
    <div style={storyContainerStyle}>

      <ReturnComponent />

      <div style={titleStyle}> 小红帽与大灰狼</div>
      {/* <div style={BackCardStyle}></div>
      <div style={textStyle}>当前故事词语当前故事词语当前故事词语当前故事词语当前故事词语当前故事词语</div> */}
      <div style={operateStyle}>

        <audio style={{display:'none'}} ref={audioRef} src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'  controls />
        {/* <Button type='text' onClick={preMusic} icon={<IconSkipPrevious fontSize={34} />}></Button> */}

        <Button style={{backgroundColor:'#ffcb04',height:58,width:58,fontSize:40,paddingLeft:8,borderRadius:'50%'}}  onClick={handlePlayPause}   >{isPlaying? <IconPauseCircle  /> : <IconCaretRight />} </Button>

        {/* <Button type='text' onClick={nextMusic} icon={<IconSkipNext fontSize={34} />}></Button> */}

        
        {/* 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', */}
      
      </div>
    </div>
  );
}

export default Story;