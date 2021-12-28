import React, { useCallback, useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { ActionType } from "typesafe-actions";
import { selectDilog } from "../../redux/sharedDialog/selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelDilog,
  confirmDilog,
  showDilog,
} from "../../redux/sharedDialog/actions";
import { DefauldDialogFooter } from "../footerDialog/default-dialog-footer";
import { USER_DIALOG_ID, USER_DIALOG_ID1, USER_DIALOG_ID2, USER_DIALOG_ID3, USER_DIALOG_NAME, USER_DIALOG_NAME1, USER_DIALOG_NAME2 } from "../../redux/sharedDialog/constants";
import { DefauldDialogProductFooter } from "../footerDialog/default-dialog-product-footer";

export interface ISharedDialog {
  id: string;
  DialogBody: React.FC;
  
  hasCustomFooter?: boolean;
}

export const SharedDialog = ({
  id,
  DialogBody,
  hasCustomFooter = false,
}: ISharedDialog) => {
  
  const dispatch = useDispatch();
 
  let footer: any;
  
  const {
    id: dialogDataId,
    name,
    isShowed,
  } = useSelector(selectDilog(id)) || {};

  const handleConfirm = useCallback(() => {
    dispatch(showDilog({ id: USER_DIALOG_ID, name:  USER_DIALOG_NAME }));
  }, []);

  const handleCancel = useCallback(() => {
    dispatch(cancelDilog(id));
  }, []);

  if (id !== dialogDataId) {
    return null;
  }

  //  footer = !hasCustomFooter && (
     
  //   <DefauldDialogFooter
  //     handleConfirm={handleConfirm}
  //     handleCancel={handleCancel}
  //   />
  // );


  if (id == USER_DIALOG_ID || id == USER_DIALOG_ID1 || id == USER_DIALOG_ID2 || id == USER_DIALOG_ID3) {
    footer = <DefauldDialogProductFooter handleCancel={handleCancel} />;
  } else {
    footer = (
      <DefauldDialogFooter
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
      />
    );
  }

  return (
    <>
      <Modal
        title={name}
        visible={isShowed}
        onOk={handleConfirm}
        onCancel={handleCancel}
        destroyOnClose={true}
        footer=""
      >
        <DialogBody />
        {footer}
      </Modal>
    </>
  );
};

// useEffect(() => {
//   fetch("https://httpbin.org/anything", {
//     method: "POST",
//     body: JSON.stringify({ bodyUsed: true }),
//   }).then((data) => {
//     // debugger;
//   });
// }, []);
