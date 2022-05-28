import React from 'react';
import s from './MainStyle.module.scss'
import './../../../assets/css/template.scss'
import Slider from "react-slick";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {GlobalSliderItems} from '../../../assets/global/GlobalSliderItems.tsx'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const MainWork = () => {
  const settings = {
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    draggable: true,
    dots: true,
    adaptiveHeight: true,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <section className='section background-gray' id='work'>
      <div className='container'>
        <Slider className={s.work__slider} {...settings}>
        {
          GlobalSliderItems.map ((slide) => {
            return(
              <div className={s['item__work-slider']}>
                  <h2 className={s['title__work-slider']}><span className={s['step__work-title']}>Шаг {slide.id+1}.</span> {slide.sliderTitle}</h2>
                  <div className={s['text__work-slider']}>{slide.itemText}</div>
              </div>
            )
          })
        }
        </Slider>
      
      </div>
    </section>
  )
}

export default MainWork