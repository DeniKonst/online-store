import React from "react";
import { SharedDialog } from "../sharedDilog/shared_dilog";
import { USER_DIALOG_ID, USER_DIALOG_ID1, USER_DIALOG_ID2 } from "../../redux/sharedDialog/constants";

export const UserDialog = () => {
  const DialogBody = () => {
    return (
      <>
        <p> Этот товар добавлен в корзину</p>
      </>
    );
  };

   

  return <SharedDialog id={USER_DIALOG_ID} DialogBody={DialogBody}  />;
};
