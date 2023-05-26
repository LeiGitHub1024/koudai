import React from "react";
import { IconLeft } from "@arco-design/web-react/icon";
import { Link } from "react-router-dom";

function ReturnComponent(props) {
  // 默认参数to为'/'
  const { to = "/" } = props;

  return (
    <Link style={{ position:'absolute', left: 0 }} to={to}>
        <div style={{ width: 43, height: 43, backgroundColor: 'white', borderRadius: '50%', margin: '13px 0 0 16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <IconLeft  fontSize={28} />
        </div>
      </Link>
  );
}
export default ReturnComponent;