import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import Market from "../market";
export default function MainPage(props) {
  console.log("props====>", props);
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div>
      {" "}
      <Layout>
        <Header style={{ color: "white" }}>Cryptocurrencies Price</Header>
        <Content>
          <Market />
        </Content>
      </Layout>
    </div>
  );
}