import React from 'react';

function Card(props) {
  const { color, title, message, suggestion } = props;
 
  return (
    <div style={{ borderRadius: 15, backgroundColor: '#fff',display:'flex', width: '90%',margin:'15px 0 ' }}>
      <div style={{borderRadius:15,borderTopRightRadius:0,borderBottomRightRadius:0, backgroundColor:color,padding:5,width:10}}>
    
      </div>
      <div style={{ backgroundColor: '#fff',padding:'10px 10px 10px 20px',borderRadius:15 }}>
        <div style={{fontSize:30,fontWeight:700}}> {title}</div>
        <div style={{fontSize:14,fontWeight:500,color:'#888'}}> {message}</div>
        <div style={{fontSize:14,fontWeight:500,color:'#888', display:'flex',   borderRadius: 50, borderTopLeftRadius: 10,backgroundColor:'#f0f0f0',padding:15 }}>
          <div style={{width:'15%'}}>建议：</div>
          <div style={{width:'80%'}}> {suggestion} </div>
        </div>
      </div>
      
    </div>
  );
}

export default Card;