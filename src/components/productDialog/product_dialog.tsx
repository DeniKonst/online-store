import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectProduct } from "../../redux/product/selector";

export const ProductDilog = () => {
  const [inputProduct, setInputProduct] = useState("");

  const products = useSelector(selectProduct);

  const newProduct = products.map((item) => {
    return (
      <div
        key={item.id}
        id={item.id}
        onClick={() => setInputProduct(item.name)}
      >
        {item.name}
      </div>
    );
  });

  const handleProductName = () => {
    <div> {inputProduct} </div>;
  };

  return (
    <>
      <div onClick={handleProductName}> {newProduct} </div>
    </>
  );
};
