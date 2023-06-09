import React, { useRef,useState } from 'react';
import { Button } from '@arco-design/web-react';
import { IconHeart, IconMessage } from '@arco-design/web-react/icon';
import replyIcon from '../assets/回复.png'
import Heart from './Heart';
const voiceColorMap = {
  1: '#35A7FF',
  2: '#917EFF',
  3: '#D9C800',
  4: '#FF8337',
  5: '#4BA48C',
}
const voiceBackgroundMap = {
  1: '#D6F6FE',
  2: '#DAD4FE',
  3: '#FEF9D3',
  4: '#FFE5D3',
  5: '#D2F9E8',
}

function Card(props) {
  const {key1, usr, message, color, time, images = [], voiceColor,voice, replies, commontCallback,avatorIcon } = props;

  const cardStyle = {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: '5px',
    margin: '10px 0px 10px 30px ',
    padding: '10px',
    boxShadow: '0 0 12px 8px rgba(16,0,0,0.03)',
  }
  const avaterStyle = {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    marginRight: '5px',
    backgroundImage: `url(${avatorIcon})`,
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
    margin:'-10px 0 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
  const buttonStyle = {
    width: 100,
    height: 28,
    borderRadius: '15px',
    border: 0,
    backgroundColor: voiceBackgroundMap[voiceColor],
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
          <audio style={{display:'none'}} ref={audioRef} src={voice} type="audio/wav"  controls />
          <button onClick={handlePlayPause} style={buttonStyle} > 21 &nbsp;l丨l丨l丨l</button>
            
          <div style={{ marginBottom: 10, marginLeft:100}}><Heart ></Heart></div>
          <IconMessage onClick={()=>{commontCallback(key1)}} style={{fontSize:26}} />
        </div>

        <div style={{ marginTop:0, display: replies?.length ?'flex':'none' ,padding:10,  borderRadius:'15px',backgroundColor:'#f4f4f4'}}>
          <IconMessage style={{fontSize:20, margin:'8 2 0 0 '}} />

          <div style={{ fontWeight: 400, color: '#666' }}>
            {replies?.map((item) => {
              // console.log(item)
              return (
                <div key={item?.reply_id} style={{ margin: 5 }}>{item?.user_name}: { item?.content}</div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Card;