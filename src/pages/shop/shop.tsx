import React from "react";
import styles from "../../pages/shop/shop.module.css";
import Image from "../../../src/images/Car.jpg";
import { Switch, Route, Link } from "react-router-dom";
import Auto from "../../pages/shop/auto/auto";
import Moto from "../../pages/shop/moto/moto";
import Velo from "../../pages/shop/velo/velo";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const Shop = () => (
  <Tabs tabPosition="left" defaultActiveKey="1" centered>
    <TabPane tab="Auto" key="1">
      <Auto />
    </TabPane>
    <TabPane tab="Moto" key="2">
      <Moto />
    </TabPane>
    <TabPane tab="Velo" key="3">
      <Velo />
    </TabPane>
  </Tabs>
);

export default Shop;
