import { Button, Form } from "antd";
import React from "react";
// обернуть в React.memo - почитать
interface IDefaultDialogProduct {
  handleCancel: () => void;
}
 export const DefauldDialogProductFooter = React.memo(({
  handleCancel,
}: IDefaultDialogProduct) => {
  return (
    <div>
      <Button onClick={handleCancel}>OK</Button>
    </div>
  );
});