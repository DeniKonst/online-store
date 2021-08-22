import React from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import { Button, Dropdown, Menu } from "antd";
import Icon, {
  StarOutlined,
  StarFilled,
  StarTwoTone,
  DollarCircleOutlined,
} from "@ant-design/icons";

import Home from "../../pages/home/home";
import Shop from "../../pages/shop/shop";
import OurStory from "../../pages/ourStory/our-story";
import Contact from "../../pages/contact/contact";
import News from "../../pages/news/news";
import Resipec from "../../pages/resipec/resipec";

import styles from "./styles.module.css";

const App = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Item1</Menu.Item>
      <Menu.Item key="2">Item2</Menu.Item>
      <Menu.Item key="3">Item3</Menu.Item>
    </Menu>
  );

  const activeRouteStyle = { color: 'teal' };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.call}>
          <DollarCircleOutlined />
        </div>
        <div className={styles.name}>name</div>
        <div className={styles.currency}>
          <DollarCircleOutlined />
          <span>currency</span>
        </div>
      </header>
      <nav className={styles.nav}>
        <div className={styles.home}>
          <NavLink exact activeStyle={activeRouteStyle} to="/">Home</NavLink>
        </div>
        <div className={styles.shop}>
          <NavLink activeStyle={activeRouteStyle} to="/shop">Shop</NavLink>
        </div>
        <div className={styles.story}>
          <NavLink activeStyle={activeRouteStyle} to="/our-story">Our story</NavLink>
        </div>
        <div className={styles.toBuy}>
          <Dropdown overlay={menu} placement="bottomRight">
            <Button type="primary">Where to by</Button>
          </Dropdown>
        </div>
        <div className={styles.resipec}>
          <NavLink  activeStyle={activeRouteStyle} to="/resipec">Resipec</NavLink>
        </div>
        <div className={styles.news}>
          <NavLink  activeStyle={activeRouteStyle} to="/news">News</NavLink>
        </div>
        <div className={styles.contact}>
          <NavLink  activeStyle={activeRouteStyle} to="/contact">Contact</NavLink>
        </div>
      </nav>
      <div className={styles.content}>
        {/* <Dropdown overlay={menu} placement="bottomRight">
          <Button type="primary">SHOP NOW</Button>
        </Dropdown> */}

        <Switch>
          <Route path="/shop" render={() => <Shop />} />
          <Route path="/our-story" render={() => <OurStory />} />
          <Route path="/resipec" render={() => <Resipec />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/contact" render={() => <Contact />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
