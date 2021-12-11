import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";

export const SharedDilog = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetch("https://httpbin.org/anything", {
      method: "POST",
      body: JSON.stringify({ bodyUsed: true }),
    }).then((data) => {
      debugger;
    });
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
