import React, {useState} from 'react';
import s from './MainStyle.module.scss'
import './../../../assets/css/template.scss'
import Form from '../../../modules/ContactForm/PopupAlert';
import Decisions from '../../../assets/global/GlobalDecisionItems.tsx'

const MainDecision = () => {
  const [modalActive, setModalActive] = useState (false);

  return (
    <section className='section container' id='decision'>
      <div className={s['left__section-decision']}>
        <h2 className={s['title__section-left']}>Решения</h2>
        <div className="page-line"></div>
      </div>
      <div className={s['section-decision']}>
  
      <div className={s['box__contact-bottom']}>
        <a className={s['form__contact-box']} onClick={() => {setModalActive(true)}}>Станьте клиентом 
          <span className="material-icons">
            arrow_forward
          </span>
        </a></div>

        <div className={s['right__section-decision']}>
          <div className={s['items__section-right']}>
              <div className={s['items__right']}>
                {
                  Decisions.map((dec) => {
                    return (
                      <div className={s['item__section-items']} key={dec.id}>
                        <div className={s['title__section-item']} >
                    
                          <span className={s['text__section-title']}>{dec.title}</span>
                          
                        </div>
                        <div className={s['text__section-item']}>
                          <span className={s['content__section-text']}>
                            {dec.text}
                          </span>
                        </div>
                      </div>

                    )
                  })
                
                }
              </div>
          </div>
        </div>
        <Form active={modalActive} setActive={setModalActive} />
      </div>
    </section>
  )
}

export default MainDecision