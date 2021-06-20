import React from "react";
import { Button, Dropdown, Menu } from "antd";

import styles from "./styles.module.css";

const App = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Item1</Menu.Item>
      <Menu.Item key="2">Item2</Menu.Item>
      <Menu.Item key="3">Item3</Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.app}>
      Online Store
      <Dropdown overlay={menu} placement="bottomRight">
        <Button type="primary">Dropdown</Button>
      </Dropdown>
    </div>
  );
};

export default App;
