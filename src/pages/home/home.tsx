import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import cn from "classnames";

import { selectHomeData, selectIsLoading } from "../../redux/home/selectors";
import { getChangeButton, getHomeData } from "../../redux/home/actions";
import styles from "../../pages/home/home.module.css";
import Spinner from "../../components/spinner/spinner";

const Home = () => {
  const dispatch = useDispatch();
  const homeData = useSelector(selectHomeData);
  const isLoading = useSelector(selectIsLoading);

  
  
  return (
    <div className={cn(styles.home, styles.homeImage)}>
      <Spinner isLoading={isLoading} />
      <div className={styles.homeItem}>
        <div className={styles.foto}> FOTO </div>
        <div className={styles.music}> MUSIC </div>
        <div className={styles.games}> GAMES </div>
        <Button
          onClick={() => {
            dispatch(getHomeData());
          }}
        >
          Показать лоадер
        </Button>
        <Button
          onClick={() => {
            dispatch(getChangeButton());
          }}
        >
          {homeData.name}
        </Button>
      </div>
    </div>
  );
};

export default Home;
