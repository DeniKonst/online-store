import React, { useEffect, useRef, useState } from "react";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import styles from "./resipec.module.scss";
import { Button } from "antd";

const SLIDER_BAND_LENGTH = 1200;
const START_SLIDER_POSITION = 0;

const SLIDER_CONFIG = [
  {
    id: 1,
    cls: styles.blue,
    title: "B",
  },
  {
    id: 2,
    cls: styles.pinck,
    title: "P",
  },
  {
    id: 3,
    cls: styles.red,
    title: "R",
  },
  {
    id: 4,
    cls: styles.green,
    title: "G",
  },
];

const Resipec = () => {
  const [sliderPosition, setSliderPosition] = useState(START_SLIDER_POSITION);
  // const [isVisibleLeftBtn, setIsVisibleLeftBtn] = useState(true);
  // const [isVisibleRightBtn, setIsVisibleRightBtn] = useState(true);
  const [isVisibleBtns, setIsVisibleBtns] = useState(true);
  const [canStartAutoSlider, setCanStartAutoSlider] = useState(false);
  const [sliderConfig, setSliderConfig] = useState(SLIDER_CONFIG);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const refEl = useRef(null);
  console.log("sliderPosition: ", sliderPosition);
  // useEffect(() => {
  //   console.log('useEffect with deps');
  // }, [isVisibleLeftBtn]);

  // useEffect(() => {
  //   console.log('ref', ref);
  //   console.log('refEl.current', refEl.current);
  //   const handleScroll = () => {
  //     console.log('sliderPosition', sliderPosition);
  //     console.log('ref', ref);
  //     console.log('refEl', refEl);
  //   }
  //   document.addEventListener('scroll', handleScroll)
  //   console.log('useEffect empty deps');
  //   return () => {
  //     document.removeEventListener('scroll', handleScroll)
  //     console.log('unmount Resipec');
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log('useEffect without deps');
  // });

  const handleCanStartAutoSlider = (canStart: boolean) => {
    setCanStartAutoSlider(canStart);
    setIsVisibleBtns(canStart);
    let counter = 0;
    const recurciveAutoSlider = () => {
      console.log("recurciveAutoSlider: ", counter++);

      timerRef.current && clearTimeout(timerRef.current);
      timerRef.current = setTimeout(recurciveAutoSlider, 2000);
    };

    if (canStart) {
      recurciveAutoSlider();
    } else if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
      setIsVisibleBtns(false);
    }
  };

  // useEffect(() => {
  //   if (sliderPosition === 0) {
  //     setIsVisibleLeftBtn(false);
  //   }

  //   if (sliderPosition === 0) {
  //     setIsVisibleRightBtn(false);
  //   }
  // }, []);

  const onLeftClick = () => {
    // if (!isVisibleRightBtn) {
    //   setIsVisibleRightBtn(true);
    // }

    if (sliderPosition === -900) {
      setSliderPosition(0);
    } else {
      setSliderPosition(sliderPosition - 300);
    }

    // setIsVisibleLeftBtn(false);

    // if (sliderPosition >= -600) {
    //   setSliderPosition(sliderPosition - 300);
    // }
  };

  const onRightClick = () => {
    // if (!isVisibleLeftBtn) {
    //   setIsVisibleLeftBtn(true);
    // }
    const cloneSliderConfig = [...sliderConfig];
    const firstConfig = cloneSliderConfig.shift();
    if (firstConfig) {
      cloneSliderConfig.push(firstConfig);
    }
    setSliderConfig(cloneSliderConfig);
    setSliderPosition(sliderPosition + 300);
    // setIsVisibleRightBtn(false);

    // if (sliderPosition <= -300) {
    //   setSliderPosition(sliderPosition + 300);
    // }
  };

  return (
    <div ref={refEl} className={styles.container}>
      <Button onClick={() => handleCanStartAutoSlider(!canStartAutoSlider)}>
        {canStartAutoSlider ? "Stop slider" : "Start slider"}
      </Button>
      <div className={styles.slider}>
        <LeftCircleOutlined
          onClick={onLeftClick}
          className={styles.iconLeft}
          // style={{ display: isVisibleLeftBtn ? "block" : "none" }}
        />
        <RightCircleOutlined
          onClick={onRightClick}
          className={styles.iconRight}
          // style={{ display: isVisibleRightBtn ? "block" : "none" }}
        />
        <div style={{ left: sliderPosition }} className={styles.band}>
          {sliderConfig.map((item) => (
            <div key={item.id} className={item.cls}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resipec;

// Добавить анимацию для ленты(передвижение плавное).
// Для конечных позиций прятать или дизайблить кнопки.
//  * Сделать настройку для бесконечной прокрутки слайдера и остановки данной прокрутки.
// Почитать CSS виды позиционирование свойтво position.
// Добавить бэкграунд в виде картинок.
