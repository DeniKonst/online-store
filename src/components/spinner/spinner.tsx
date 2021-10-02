import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import styles from "./spinner.module.css";

interface spinnerProps {
  isLoading: boolean;
}

const Spinner = ({ isLoading }: spinnerProps) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  
  return isLoading ? (
    <div className={styles.showSpinner}>
      <Spin indicator={antIcon} />
    </div>
  ) : null;
};

export default Spinner;
