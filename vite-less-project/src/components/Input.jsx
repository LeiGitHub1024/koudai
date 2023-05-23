import React from 'react';
import { Input,Button } from '@arco-design/web-react';
import { IconArrowRise } from '@arco-design/web-react/icon';

function myInput() {
  const inputContainerStyle = {
    margin: '20px 20px',
  }
  const inputStyle = {
    width: '80%' ,
  }
  return (
    <div style={inputContainerStyle}>
      <Input style={inputStyle} allowClear placeholder='Please Enter something' />
      
      <Button shape='circle' type='primary' icon={<IconArrowRise />} />

    </div>
  );
}

export default myInput;