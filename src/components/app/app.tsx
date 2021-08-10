import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Button, Dropdown, Menu } from "antd";

import Home from "../../pages/home/home";
import Shop from "../../pages/shop/shop";
import OurStory from "../../pages/ourStory/our-story";

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
      <header className={styles.header}>
        <div className={styles.call}>call</div>
        <div className={styles.name}>name</div>
        <div className={styles.current}>current</div>
      </header>
      <nav className={styles.nav}>
        <div className={styles.home}>
          <Link to="/">Home</Link>
        </div>
        <div className={styles.shop}>
          <Link to="/shop">Shop</Link>
        </div>
        <div className={styles.story}>
          <Link to="/our-story">Our story</Link>
        </div>
        <div className={styles.toBuy}>
          <Dropdown overlay={menu} placement="bottomRight">
            <Button type="primary">Where to by</Button>
          </Dropdown>
        </div>
        <div className={styles.resipec}>
          <Link to="/resipec">Resipec</Link>
        </div>
        <div className={styles.news}>
          <Link to="/news">News</Link>
        </div>
        <div className={styles.contact}>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <div className={styles.content}>
        <Dropdown overlay={menu} placement="bottomRight">
          <Button type="primary">SHOP NOW</Button>
        </Dropdown>
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/shop" children={() => <Shop/>}/>
          <Route path="/our-story" children={() => <OurStory/>}/>
          <Route path="/resipec"><div>RESIPEC</div></Route>
          <Route path="/news"><div>NEWS</div></Route>
          <Route path="/contact"><div>CONTACT</div></Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
