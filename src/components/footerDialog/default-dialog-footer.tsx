import React from "react";
import { Button } from "antd";

interface IDefaultDialog {
  handleConfirm: () => void;
  handleCancel: () => void;
}
 const DefauldDialogFooter = React.memo(({
  handleConfirm,
  handleCancel,
}: IDefaultDialog) => {
  return (
    <div>
      <Button onClick={handleConfirm}>Подтвердить</Button>
      <Button onClick={handleCancel}>Отмена</Button>
    </div>
  );
});

export default DefauldDialogFooter;
