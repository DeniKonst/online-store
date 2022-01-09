import React from "react";
import styles from "../../pages/news/news.module.scss";

const News = () => {
  return (
    <div className={styles.newsContainer}>
      Authorization
      <div className={styles.modulWindow}> 
        <div className={styles.login}></div>
        <div className={styles.password}></div>
      </div>
    </div>
  );
};

export default News;
