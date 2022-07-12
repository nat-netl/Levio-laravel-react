import React, {useState} from 'react';
import s from './MainStyle.module.scss'
import './../../../assets/css/template.scss'
import Form from '../../../modules/ContactForm/PopupAlert';

const MainAboutUs = () => {
  const [modalActive, setModalActive] = useState (false);

  return (
    <section className='section container' id='o-nas'>
      <div className={s['left__section-decision']}>
        <h2 className={s['title__section-left']}>О нас</h2>
        <div className='page-line'></div>
      </div>
      <div className={s['section-decision']}>
  
      <div className={s['box__contact-bottom']}>
        <a className={s['form__contact-box']} onClick={() => {setModalActive(true)}}>Станьте клиентом и узнайте о нас больше
          <span className="material-icons">
            arrow_forward
          </span>
        </a></div>

        <div className={s['right__section-decision']}>
          <div className={s['items__section-right']}>
              <div className={s['items__right']}>
                <div class={s['text__items-right']}>
                  Liveo - Айти компания (Набережные-Челны), которая уже давно и успешно работает в данном сегменте рынка, имеет свои принципы и стратегии, позволяющие добиться максимальных результатов даже за очень короткий период времени. Лучшие традиции компании предполагают эффективное решение поставленных задач, которые необходимо реализовать по техническому заданию заказчика...<div className={s['link__about']}><a href='/o-nas'>Больше о нас</a></div>
                </div>
              </div>
          </div>
        </div>

        <Form active={modalActive} setActive={setModalActive} />
      </div>
    </section>
  )
}

export default MainAboutUs