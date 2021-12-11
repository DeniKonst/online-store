import React, {useEffect, useRef, useState} from "react";
import {LeftCircleOutlined, RightCircleOutlined} from "@ant-design/icons";
import styles from "./resipec.module.scss";
import {Button} from "antd";

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
        const [isVisibleBtns, setIsVisibleBtns] = useState(true);
        const [canStartAutoSlider, setCanStartAutoSlider] = useState(false);
        const [activeSliderIndex, setActiveSliderIndex] = useState(0);

        const slidersCount = SLIDER_CONFIG.length;

        const timerRef = useRef<NodeJS.Timeout | null>(null);
        const onRightClickRef = useRef<() => void | undefined>();

        useEffect(() => {
            onRightClickRef.current = onRightClick;
        }, [activeSliderIndex])

        const onLeftClick = () => {
            setActiveSliderIndex(activeSliderIndex > 0 ? activeSliderIndex - 1 : slidersCount - 1)
        };

        const onRightClick = () => {
            setActiveSliderIndex(activeSliderIndex < slidersCount - 1 ? activeSliderIndex + 1 : 0)
        };

        const handleStartAutoSlider = (canStart: boolean) => {
            setCanStartAutoSlider(canStart);
            setIsVisibleBtns(!canStart);

            const startAutoSlider = () => {
                if (onRightClickRef.current) {
                    onRightClickRef.current();
                }

                timerRef.current && clearTimeout(timerRef.current);
                timerRef.current = setTimeout(startAutoSlider, 2000);
            };

            if (canStart) {
                startAutoSlider();
            } else if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };

        const renderSliderConfig = SLIDER_CONFIG.map((item, i) => {
            let styles: React.CSSProperties | undefined = undefined;

            const isPrevOutsideIndex = i - 1 < 0;
            const isNextOutsideIndex = i + 1 === slidersCount;

            const prevIndex = isPrevOutsideIndex ? slidersCount - 1 : i - 1;
            const nextIndex = isNextOutsideIndex ? 0 : i + 1;

            if (prevIndex === activeSliderIndex) {
                styles = {transform: 'translate(-150%, -50%)', opacity: 0.25}
            }

            if (i === activeSliderIndex) {
                styles = {zIndex: 1, opacity: 1}
            }

            if (nextIndex === activeSliderIndex) {
                styles = {transform: 'translate(50%, -50%)', opacity: 0.25}
            }

            return <div style={styles} key={item.id} className={item.cls}>
                {item.title}
            </div>
        })

        return (
            <div className={styles.container}>
                <Button onClick={() => handleStartAutoSlider(!canStartAutoSlider)}>
                    {canStartAutoSlider ? "Stop slider" : "Start slider"}
                </Button>
                <div className={styles.slider}>
                    {isVisibleBtns && <>
                        <LeftCircleOutlined
                            onClick={onLeftClick}
                            className={styles.iconLeft}
                        />
                        <RightCircleOutlined
                            onClick={onRightClick}
                            className={styles.iconRight}
                        />
                    </>}
                    <div className={styles.band}>
                        {renderSliderConfig}
                    </div>
                </div>
            </div>
        );
    }
;

export default Resipec;

// Добавить анимацию для ленты(передвижение плавное).
// Для конечных позиций прятать или дизайблить кнопки.
//  * Сделать настройку для бесконечной прокрутки слайдера и остановки данной прокрутки.
// Почитать CSS виды позиционирование свойтво position.
// Добавить бэкграунд в виде картинок.
