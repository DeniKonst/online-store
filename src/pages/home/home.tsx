import React from "react";
import styles from "../../pages/home/home.module.css";
import cn from "classnames";

const Home = () => {
  return (
    <div className={cn(styles.home, styles.homeImage)}>
      <div className={styles.homeItem}>
        <div className={styles.foto}> FOTO </div>
        <div className={styles.music}> MUSIC </div>
        <div className={styles.games}> GAMES </div>
      </div>
    </div>
  );
};

export default Home;

