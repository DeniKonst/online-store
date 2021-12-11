import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { getItemMotoData } from "../../../../../redux/moto/actions";
import { SortByType } from "../../../../../redux/moto/constants";
import { selectSortType } from "../../../../../redux/moto/selectors";
import styles from "./sort-by-buttons.module.scss";
import { SortIcon } from "./sort-icon";

export const SortByButtons = () => {
  const sortType = useSelector(selectSortType);

  const notActiveSortByIdButton =
    sortType !== SortByType.idAscending && sortType !== SortByType.idDescending;
  const notActiveSortByNameButton =
    sortType !== SortByType.nameAscending &&
    sortType !== SortByType.nameDescending;

  return (
    <div className={styles.moto_sort_panel}>
      <SortIcon
        sortType={notActiveSortByIdButton ? SortByType.idAscending : sortType}
        isNotActiveIcon={notActiveSortByIdButton}
      />
      <SortIcon
        sortType={notActiveSortByNameButton ? SortByType.nameAscending : sortType}
        isNotActiveIcon={notActiveSortByNameButton}
      />
    </div>
  );
};
