import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import { Button, Input, Empty } from "antd";
import Item from "antd/lib/list/Item";

import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../components/spinner/spinner";
import {
  addMotoData,
  deleteCheckedMotoData,
  getItemMotoData,
} from "../../../redux/moto/actions";
import { SortByType } from "../../../redux/moto/constants";
import { selectIsLoading, selectMotoData } from "../../../redux/moto/selectors";
import { IAddMotoSuccessPayload } from "../../../redux/moto/types";
import { MotoItem } from "./components/motoItem/moto-item";
import { SortByButtons } from "./components/sortByButtons/sort-by-buttons";
import styles from "./moto.module.scss";

interface ISortMotoData {
  sort: string[];
}
const Moto = () => {
  const dispatch = useDispatch();
  const { motoData, checkedIds } = useSelector(selectMotoData);
  const isLoading = useSelector(selectIsLoading);

  const [inputValue, setinputValue] = useState<string>();
  // const [arrMotoData, setArrMotoData] =
  //   useState<IAddMotoSuccessPayload[]>(motoData);

  // console.log("checkedIds: ", checkedIds);
  // useEffect(() => {
  //   setArrMotoData(motoData);
  // }, [motoData]);

  // useEffect(() => {
  //   if (sortByName) {
  //     const cloneMotoData = [...arrMotoData];
  //     const sortData = cloneMotoData.sort(
  //       sortByName === "name"
  //         ? (a, b) => a.name.localeCompare(b.name)
  //         : (a, b) => b.name.localeCompare(a.name)
  //     );
  //     setArrMotoData(sortData);
  //   }
  // }, [sortByName]);

  const newMotoData = motoData.map((item) => {
    return <MotoItem key={item.id} item={item} />;
  });

  const handleAddMotoData = () => {
    if (inputValue?.trim()) {
      dispatch(addMotoData(inputValue.trim()));
    }
    setinputValue(undefined);
  };

  console.log("motoData: ", motoData);

  return (
    <div className={styles.moto}>
      <Spinner isLoading={isLoading} />
      <div>
        <div className={styles.input_form_wrapper}>
          <div>
            <div style={{ display: "flex" }}>
              <Input
                value={inputValue}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setinputValue(event.target.value);
                }}
                placeholder="Enter the name moto"
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    handleAddMotoData();
                  }

                  console.log("onKeyUp, :", e);
                }}
              />
              <Button
                disabled={!inputValue?.trim()}
                onClick={handleAddMotoData}
              >
                add moto
              </Button>
            </div>
            <SortByButtons/>
          </div>

          <Button
            onClick={() => {
              dispatch(deleteCheckedMotoData(checkedIds));
            }}
          >
            dellLable
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

// const actionCreator = (payload: string) => ({type: 'dsdsds', payload})
// dispatch(actionCreator('-name'))
