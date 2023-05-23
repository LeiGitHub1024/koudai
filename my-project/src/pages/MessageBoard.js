import React,{ useState } from 'react';
import MessageCard from '../components/messageCard';
import { Button,Drawer } from '@arco-design/web-react';
import { IconPlus,IconClockCircle } from '@arco-design/web-react/icon';

function MessageBoard() {
  const [visible, setVisible] = useState();

  return (
    <div>
          <Button shape='circle' type='primary' icon={<IconClockCircle />} />
    <div>
      <MessageCard usr="王小兴" message="爸爸工作辛苦了" color='gold' />
      <MessageCard usr="爸爸" message="今天学习顺利吗" color='green' />
      <MessageCard usr="王小兴" message="我今天做数学题，遇到一个鸡兔同笼的问题，GPT帮了我" color='gold' />

    </div>
    <div style ={{ display:'flex', justifyContent:'center'}}>
    <Button shape='circle' type='primary' icon={<IconPlus />}  onClick={() => {setVisible(true);}} />
    </div>
    <Drawer
        width={332}
        height={332}
        title={<span>Basic Information </span>}
        visible={visible}
        placement='bottom'
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <div>Here is an example text. </div>
        <div>Here is an example text.</div>
      </Drawer>
  </div>
  );
}

export default MessageBoard;