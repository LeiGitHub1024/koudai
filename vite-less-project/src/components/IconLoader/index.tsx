import React from "react";

const IconLoader = (props) => {
  const {img} = props;
  return (
    <div
      style={{
        height: "55px",
        width: "55px",
        backgroundImage: img,
        //设置切换时间
        transition: "all 0.5s",
     }}
    ></div>
  );
};

export default IconLoader;