import { Input, Form, Button } from "antd";
import layout from "antd/lib/layout";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { SharedDialog } from "../sharedDilog/shared_dilog";
import { showDilog } from "../../redux/sharedDialog/actions";
import {
  ADD_PRODUCT_DIALOG_ID,
  USER_DIALOG_ID,
  USER_DIALOG_NAME,
} from "../../redux/sharedDialog/constants";

export const AddProductDialog = () => {
  return <SharedDialog id={ADD_PRODUCT_DIALOG_ID} DialogBody={DialogBody} />;
};

const DialogBody = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinish = (values: any) => {
    console.log(values);
  };

  const handleConfirm = useCallback(() => {
    dispatch(showDilog({ id: USER_DIALOG_ID, name: USER_DIALOG_NAME }));
  }, []);

  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      form={form}
      name="control-hooks"
    >
      <Form.Item
        name="note"
        label="Наименование товара"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={handleConfirm}>
          Отправить в корзину
        </Button>
      </Form.Item>
      <p>Добавить этот товар в корзину?</p>
    </Form>
  );
};

// const {
//   setFieldsValue,
//   scrollToField,
//   getFieldsValue,
//   getFieldValue,
//   setFields,
//   getFieldError,
//   getFieldsError,
// } = form;

// getFieldValue: (name: NamePath) => StoreValue;
// getFieldsValue(): Values;
// getFieldsValue(nameList: NamePath[] | true, filterFunc?: (meta: Meta) => boolean): any;
// getFieldError: (name: NamePath) => string[];
// getFieldsError: (nameList?: NamePath[]) => FieldError[];
// isFieldsTouched(nameList?: NamePath[], allFieldsTouched?: boolean): boolean;
// isFieldsTouched(allFieldsTouched?: boolean): boolean;
// isFieldTouched: (name: NamePath) => boolean;
// isFieldValidating: (name: NamePath) => boolean;
// isFieldsValidating: (nameList: NamePath[]) => boolean;
// resetFields: (fields?: NamePath[]) => void;
// setFields: (fields: FieldData[]) => void;
// setFieldsValue: (value: RecursivePartial<Values>) => void;
// validateFields: ValidateFields<Values>;
// submit: () => void;э
