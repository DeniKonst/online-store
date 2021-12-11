import React from "react";
import { SharedDilog } from "../../components/sharedDilog/shared_dilog";
import styles from "../../pages/ourStory/story.module.css";

const OurStory = () => {
  return (
    <div className={styles.story}>
      <SharedDilog />
    </div>
  );
};

export default OurStory;
