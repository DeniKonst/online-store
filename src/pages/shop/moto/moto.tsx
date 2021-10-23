import { DeleteTwoTone } from "@ant-design/icons";
import { Button, Input, Checkbox, Empty } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../components/spinner/spinner";
import {
  addMotoData,
  deleteMotoData,
  updateMotoData,
} from "../../../redux/moto/actions";
import { selectIsLoading, selectMotoData } from "../../../redux/moto/selectors";
import styles from "./moto.module.scss";

const Moto = () => {
  const dispatch = useDispatch();
  const motoData = useSelector(selectMotoData);
  const isLoading = useSelector(selectIsLoading);
  const [inputValue, setinputValue] = useState<string>();

  const newMotoData = motoData.map((item) => {
    const handleClick = () => {
      dispatch(deleteMotoData(item.id));
    };
    console.log("item.isCompleted: ", item.isCompleted);

    return (
      <div key={item.id} className={styles.list_item}>
        <Checkbox
          checked={item.isCompleted}
          onChange={(event: CheckboxChangeEvent) => {
            dispatch(
              updateMotoData({ id: item.id, isCompleted: event.target.checked })
            );
          }}
        >
          <span className={styles.list_item_text}>{item.name}</span>
        </Checkbox>
        <DeleteTwoTone
          className={styles.list_item_delete_icon}
          onClick={handleClick}
        />
      </div>
    );
  });
  console.log("motoData: ", motoData);

  return (
    <div className={styles.moto}>
      <Spinner isLoading={isLoading} />
      <div>
        <div className={styles.input_form_wrapper}>
          <Input
            value={inputValue}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setinputValue(event.target.value);
            }}
            placeholder="Enter the name moto"
          />
          <Button
            disabled={!inputValue?.trim()}
            onClick={() => {
              if (inputValue?.trim()) {
                dispatch(addMotoData(inputValue.trim()));
              }
              setinputValue(undefined);
            }}
          >
            add moto
          </Button>
        </div>
        <ul className={styles.list}>
          {newMotoData.length ? newMotoData : <Empty description="Epty data" />}
        </ul>
      </div>
    </div>
  );
};

export default Moto;
