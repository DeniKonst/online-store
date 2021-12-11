import { Button } from "antd";
import React, { useEffect, useState } from "react";

const VeloItem = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // Вызывается один раз т к нет зависимостей
    console.log("count [] componentDidUpdate: ", count);
    return () => {
      console.log("componentDidUnmount");
    };
  }, []);

  useEffect(() => {
    // Вызывается при каждом изменении зависимости которые указываются в массиве
    console.log("count [count] componentDidUpdate: ", count);
  }, [count]);

  useEffect(() => {
    // Разница с классовой компонентой в том что данный хук
    // вызывается после каждого обновления компоненты
    console.log("count componentDidMount: ", count);
  });
  /*
    ДЗ
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
       Разобрать хуки useRef, useMemo, useCallback, useContext
       Для инфы глянь useLayoutEffect, useReducer
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
  return (
    <div>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Counter
      </Button>
      <div>{count}</div>
    </div>
  );
};

export default VeloItem;
