import React from "react";
import { Row, Spin } from "antd";
import "./globalLoader.scss"
const GlobalLoader: React.FC<any> = () => {
  return (
    <Row className="global-loader">
      <Spin tip="Loading..."></Spin>
    </Row>
  );
};

export default GlobalLoader;
