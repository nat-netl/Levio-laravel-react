import React from 'react';
import s from './MainStyle.module.scss'
import './../../../assets/css/template.scss'

const MainTitleVideo = () => {
  return (
    <section className={s['section-title']}>
      <div className={s.title}>

        <div className='container'>
          <div className={s.title__body}>
            <h1>Liveo.<br />Интернет студия, агентство под любые ваши нужды</h1>
          </div>
        </div>

        <div className={s.title__video}>
          <video autoPlay muted loop className={s['item__video-title']}>
            <source src='/video/title-video.mp4' type='video/mp4'></source>
          </video>
        </div>

      </div>
    </section>
  )
}

export default MainTitleVideo