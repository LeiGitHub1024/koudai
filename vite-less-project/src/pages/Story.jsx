import React,{useState, useRef} from 'react';
import {IconPauseCircle,IconSkipNext,IconSkipPrevious,IconCaretRight,IconLeft}  from '@arco-design/web-react/icon';
import { Button } from '@arco-design/web-react';
import bg_story from '../assets/B01讲故事.png'
import { Link } from 'react-router-dom';
import ReturnComponent from '../components/ReturnComponent/return.jsx';
import genie from '../music/genie_story.wav'
import pig_story from '../music/pig_story.wav'
import IconLoader from '../components/IconLoader';
import PlayImg from '../assets/讲故事-播放.png'
import PauseImg from '../assets/讲故事-暂停.png'


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

  const operateStyle = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin:'0 0 20px 0'
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

  const audioRef = useRef(null);
  return (
    <div style={storyContainerStyle}>

      <ReturnComponent marginTop='40px' />

      <div style={titleStyle}> 小红帽与大灰狼</div>
      <div style={operateStyle}>

        <audio style={{display:'none'}} ref={audioRef} src={pig_story} type="audio/wav"  controls />

        <Button style={{ backgroundColor: 'transparent', height: 78, width: 78,}} onClick={handlePlayPause}   >
          {isPlaying ? <IconLoader img={`url(${PauseImg})`} />: <IconLoader img={`url(${PlayImg})`} />}
          
        </Button>
      
      </div>
    </div>
  );



}

export default Story;