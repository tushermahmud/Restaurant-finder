import React from "react";
import { Row, Spin } from "antd";

const GlobalLoader: React.FC<any> = () => {
  return (
    <Row style={{height:"100vh", width:"100vw", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Spin tip="Loading..."></Spin>
    </Row>
  );
};

export default GlobalLoader;
