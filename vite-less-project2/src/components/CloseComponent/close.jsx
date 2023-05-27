import React from "react";
import { IconClose } from "@arco-design/web-react/icon";
import { Link } from "react-router-dom";

function CloseComponent(props) {
  // 默认参数to为'/'
  const { to = "/", callback } = props;

  return (
    <Link style={{ position:'absolute', right: 15,zIndex:100 }} to={to}>
        <div style={{ width: 42, height: 42, backgroundColor: 'white', borderRadius: '50%', marginTop: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <IconClose onClick={()=>{callback&&callback()}}  fontSize={28} />
        </div>
      </Link>
  );
}
export default CloseComponent;