import React, { useCallback } from "react";
import styles from "./our_story.module.scss"
import { useDispatch } from "react-redux";
import { showDilog } from "../../redux/sharedDialog/actions";
import {
  ADD_PRODUCT_DIALOG_ID,
  USER_DIALOG_NAME1,
  USER_DIALOG_NAME2,
  USER_DIALOG_NAME3,
} from "../../redux/sharedDialog/constants";

const OurStory = () => {
  const dispatch = useDispatch();

  const handleShowAddDilog1 = useCallback(() => {
    dispatch(
      showDilog({
        id: ADD_PRODUCT_DIALOG_ID,
        name: USER_DIALOG_NAME1,
      })
    );
  },[]);

  const handleShowAddDilog2 = useCallback(() => {
    dispatch(
      showDilog({
        id: ADD_PRODUCT_DIALOG_ID,
        name: USER_DIALOG_NAME2,
      })
    );
  }, [])

  const handleShowAddDilog3 = useCallback(() => {
    dispatch(
      showDilog({
        id: ADD_PRODUCT_DIALOG_ID,
        name: USER_DIALOG_NAME3,
      })
    );
  },[]);

  return (
    <div className={styles.list}>
      <ul>
        <li>
          <div onClick={handleShowAddDilog1}> Автомобиль </div>
        </li>
        <li>
          <div onClick={handleShowAddDilog2}> Мотоцикл </div>
        </li>
        <li>
          <div onClick={handleShowAddDilog3}> Велосипед </div>
        </li>
      </ul>
    </div>
  );
};

export default OurStory;
