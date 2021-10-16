import React, { useEffect, useState } from "react";
import styles from "./auto.module.css";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import cn from "classnames";
import { addAuto, getAuto, getAutoData } from "../../../redux/auto/actions";
import Spinner from "../../../components/spinner/spinner";
import { selectAutoData, selectIsLoading } from "../../../redux/auto/selectors";
import { Input } from "antd";
import { IAddAutoSuccessPayload } from "../../../redux/auto/types";

const Auto = () => {
  const dispatch = useDispatch();
  const autoData = useSelector(selectAutoData);
  const isLoading = useSelector(selectIsLoading);

  const [autoName, setAutoName] = useState<string | undefined>();

  useEffect(() => {
    dispatch(getAuto());
  }, []);

  const autoNameTrimmed = autoName?.trim();

  const handlerAddAuto = () => {
    if (autoNameTrimmed) {
      dispatch(addAuto(autoNameTrimmed));
      setAutoName(undefined);
    }
  };

  const renderAutoItem = autoData.reduce(
    (acc: React.ReactElement[], item: IAddAutoSuccessPayload) => {
      return [
        ...acc,
        <li key={item.id} className={styles.autoItem}>
          {item.name}
        </li>,
      ];
    },
    []
  );

  return (
    <div className={cn(styles.auto, styles.autoImage)}>
      <Spinner isLoading={isLoading} />
      {/* Удалить данную логику */}
      <div>
        <Button
          onClick={() => {
            // код для примера. В дальнейшем удалится
            dispatch(getAutoData());
          }}
        >
          Показать лоадер
        </Button>
      </div>
      <div className={styles.addAutoFormWrapper}>
        <div className={styles.inputFormWrapper}>
          <Input
            value={autoName}
            onChange={(e: React.BaseSyntheticEvent) => {
              setAutoName(e.target.value);
            }}
            placeholder="Enter the name auto"
          />
          <Button
            disabled={!autoNameTrimmed}
            className={styles.inputFormWrapperAntBtn}
            type="primary"
            onClick={handlerAddAuto}
          >
            Add auto
          </Button>
        </div>
        <ul className={styles.autoItems}>{renderAutoItem}</ul>
      </div>
    </div>
  );
};

export default Auto;
