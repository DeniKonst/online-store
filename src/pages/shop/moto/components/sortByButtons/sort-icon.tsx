import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import cn from "classnames";
import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";
import React from "react";
import { useDispatch } from "react-redux";
import { getItemMotoData } from "../../../../../redux/moto/actions";
import { SortByType } from "../../../../../redux/moto/constants";
import styles from "./sort-by-buttons.module.scss";

interface ISortIconProps {
  sortType: SortByType | null;
  isNotActiveIcon: boolean;
}

export const SortIcon = ({ sortType, isNotActiveIcon }: ISortIconProps) => {
  const dispatch = useDispatch();

  let sortIcon: React.ReactElement | null = null;

  switch (sortType) {
    case SortByType.idAscending:
      sortIcon = (
        <SortAscendingOutlined
          onClick={() => {
            dispatch(
              isNotActiveIcon
                ? getItemMotoData(SortByType.idAscending)
                : getItemMotoData(SortByType.idDescending)
            );
          }}
          size={30}
        />
      );
      break;
    case SortByType.idDescending:
      sortIcon = (
        <SortDescendingOutlined
          onClick={() => {
            dispatch(getItemMotoData(SortByType.idAscending));
          }}
          size={30}
        />
      );
      break;
    case SortByType.nameAscending:
      sortIcon = (
        <SortAscendingOutlined
          onClick={() => {
            dispatch(
              isNotActiveIcon
                ? getItemMotoData(SortByType.nameAscending)
                : getItemMotoData(SortByType.nameDescending)
            );
          }}
          size={30}
        />
      );
      break;
    case SortByType.nameDescending:
      sortIcon = (
        <SortDescendingOutlined
          onClick={() => {
            dispatch(getItemMotoData(SortByType.nameAscending));
          }}
          size={30}
        />
      );
  }

  return (
    <span
      className={cn({
        [styles.sort_button_not_active]: isNotActiveIcon,
      })}
    >
      {sortIcon}
    </span>
  );
};
