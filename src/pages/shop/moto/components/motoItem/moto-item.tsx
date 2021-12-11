import { DeleteTwoTone } from "@ant-design/icons";
import { Button, Checkbox, Input } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import React, {
  ChangeEvent,
  LegacyRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { setConstantValue } from "typescript";
import {
  addMotoData,
  deleteMotoData,
  updateMotoData,
} from "../../../../../redux/moto/actions";
import { IAddMotoSuccessPayload } from "../../../../../redux/moto/types";
import styles from "./moto-item.module.scss";

interface IMotoItem {
  item: IAddMotoSuccessPayload;
}

export const MotoItem = ({ item }: IMotoItem) => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState<string>();

  const [isEdited, setIsEdited] = useState<boolean>(false);

  useEffect(() => {
    if (isEdited) {
      setIsEdited(false);
    }
  }, [item]);

  const handleClick = () => {
    dispatch(deleteMotoData(item.id));
  };

  // const handleSaveEditMotoData = () => {};

  // console.log("item.isCompleted: ", item.isCompleted);

  return (
    <div
      onDoubleClick={(e) => {
        if (!isEdited) {
          setIsEdited(true);
          setInputValue(item.name);
        }
      }}
      className={styles.list_item}
    >
      {isEdited ? (
        <div style={{ display: "flex" }}>
          <Input
            autoFocus={true}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              if (inputValue) {
                dispatch(updateMotoData({ id: item.id, name: inputValue }));
              }
            }}
            type="primary"
          >
            Cancel
          </Button>
        </div>
      ) : (
        <>
          <span>
            <Checkbox
              checked={item.isCompleted}
              onChange={(event: CheckboxChangeEvent) => {
                dispatch(
                  updateMotoData({
                    id: item.id,
                    isCompleted: event.target.checked,
                  })
                );
              }}
            />
            <span className={styles.list_item_text}>{item.name}</span>
          </span>

          <DeleteTwoTone
            className={styles.list_item_delete_icon}
            onClick={handleClick}
          />
        </>
      )}
    </div>
  );
};
