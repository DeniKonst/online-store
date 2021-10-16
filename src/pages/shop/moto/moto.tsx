import { Button, Input } from "antd";
import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../components/spinner/spinner";
import { addMotoData } from "../../../redux/moto/actions";
import { selectIsLoading, selectMotoData } from "../../../redux/moto/selectors";
import styles from "./moto.module.css";

const Moto = () => {
  const dispatch = useDispatch();
  const motoData = useSelector(selectMotoData);
  const isLoading = useSelector(selectIsLoading);
  const [inputValue, setinputValue] = useState<string>();

  const newMotoData = motoData.map((item) => {
    return <li key={item.id}> {item.name} </li>;
  });
  console.log("motoData: ", motoData);

  return (
    <div className={styles.moto}>
      <Spinner isLoading={isLoading} />
      <div>
        <div className={styles.inputFormWrapper}>
          <Input
            value={inputValue}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setinputValue(event.target.value);
            }}
          />
          <Button
            disabled={!inputValue}
            onClick={() => {
              if (inputValue) {
                dispatch(addMotoData(inputValue));
              }
            }}
          >
            add moto
          </Button>
        </div>
        <ul className={styles.list}>{newMotoData}</ul>
      </div>
    </div>
  );
};

export default Moto;
