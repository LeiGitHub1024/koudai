import React, { useRef,useState } from 'react';
import { Button } from '@arco-design/web-react';
import { IconHeart, IconMessage } from '@arco-design/web-react/icon';
const voiceColorMap = {
  1: '#ffd100',
  2: '#ffd100',
  3: '#ffd100',
  4: '#ffd100',
  5: '#ffd100',
}
const voiceBackgroundMap = {
  1: '#FEF9D3',
  2: '#FEF9D3',
  3: '#FEF9D3',
  4: '#FEF9D3',
  5: '#FEF9D3',
}

function Card(props) {
  const { usr, message, color, time, images = [], voiceColor, voiceBackgroundColor,voice } = props;

  const cardStyle = {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: '5px',
    margin: '10px 0px 10px 30px ',
    padding: '10px'
  }
  const avaterStyle = {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    backgroundColor: color,
    marginRight: '5px',
  }
  const usrStyle = {
    fontWeight: '500',
    fontSize: '13px',
  }
  const timeStyle = {
    fontSize: '12px',
    color: '#aaa',
  }
  const messageStyle = {
    margin:'5px 0',
    color: '#999',
  }
  const imagesStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    margin: '5px 0',

  }
  const bottomUtilStyle = {
    margin:'10px 0 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
  const buttonStyle = {
    width: 100,
    height: 28,
    borderRadius: '15px',
    border: 0,
    backgroundColor: voiceBackgroundMap[voiceBackgroundColor],
    color: voiceColorMap[voiceColor],
  }

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };
  return (
    <div>
      
      <div style={cardStyle}>
        <div style={{ display: 'flex', alignItems:'center', }}>
          <div style={avaterStyle}> </div>
          <div>
            <div style={usrStyle}>{usr}</div>
            <div style={timeStyle}>{time}</div>
          </div>
        </div>
        <div style={messageStyle}>{message}</div>
        <div style={imagesStyle}>
          {images.map((item) => {
            return (
              <img key={item} src={item} style={{ width: '30%',margin:5 , height: '30%', borderRadius: '5px' }} />
            )
          })}


        </div>
        <div style={bottomUtilStyle}>
          <audio style={{display:'none'}} ref={audioRef} src={voice}  controls />
          <button onClick={handlePlayPause} style={buttonStyle} > 21 &nbsp;l丨l丨l丨l</button>

          <div>

            <IconHeart style={{fontSize:30,marginRight:28}} />
            <IconMessage style={{fontSize:30}} />
          
          </div>
            
        </div>

      </div>
    </div>
  );
}

export default Card;