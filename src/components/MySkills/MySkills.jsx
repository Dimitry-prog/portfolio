import React, {useEffect, useState} from "react";
import {initMySkills} from "../../initData/initMySkills";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import styles from './MySkills.module.scss';

const MySkills = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const nextSlide = () => {
    if (sliderIndex !== initMySkills.length) {
      setSliderIndex(sliderIndex + 1)
    } else {
      setSliderIndex(1)
    }
  }

  const prevSlide = () => {
    if (sliderIndex !== 1 ) {
      setSliderIndex(sliderIndex - 1)
    } else {
      setSliderIndex(initMySkills.length)
    }
  }

  useEffect(() => {
    let activeSlider = setInterval(() => {
      setSliderIndex(sliderIndex + 1);
    }, 2000);

    const lastSliderIndex = initMySkills.length - 1;
    if(sliderIndex < 0 ) {
      setSliderIndex(lastSliderIndex)
    }
    if (sliderIndex > lastSliderIndex) {
      setSliderIndex(0)
    }

    return () => clearInterval(activeSlider);
  }, [sliderIndex, initMySkills]);

  return (
    <div className={styles.skills}>
      <h3>My skills</h3>
      <div className={styles.skills__slider}>
        <button
          onClick={prevSlide}
          className={styles.skills__slider_prev}
        >
          <FiChevronLeft/>
        </button>
        <ul className={styles.skills__list}>
          {initMySkills.map((item, index) => (
            <li
              key={index}
              className={sliderIndex === index ? `${styles.skills__item} ${styles.skills__item_active}` : `${styles.skills__item}`}
            >
              {item}
            </li>
          ))}
        </ul>
        <button
          onClick={nextSlide}
          className={styles.skills__slider_next}
        >
          <FiChevronRight/>
        </button>
      </div>
    </div>
  );
};

export default MySkills;