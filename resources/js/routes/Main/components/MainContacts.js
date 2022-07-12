import React, {useEffect, useState} from 'react';
import s from './MainStyle.module.scss'
import './../../../assets/css/template.scss'
import Form from '../../../modules/ContactForm/PopupAlert';

const MainContacts = () => {
  const contacts = [
    { id: 0, 
      city: "Набережные Челны", 
      phone: '+7 (937) 299-52-98', 
      mail: 'nat_netl3@bk.ru' 
    }
  ];

  const useScript = url => {
    useEffect(() => {
      const script = document.createElement('script');
  
      script.src = url;
      script.async = true;
      script.type = 'text/javascript';
  
      document.getElementById('contacts').appendChild(script);
  
      return () => {
        document.getElementById('contacts').removeChild(script);
      }
    }, [url]);
  };

  const [modalActive, setModalActive] = useState (false);

  return (
    <section className='section container' id='contacts'>
      {useScript ('https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1d1c78fee646902d3c34b0adb8acd56d900aefbf4df5aed3c9020e803da4841a&amp;width=100%25&amp;height=516&amp;lang=ru_RU&amp;scroll=true')}
      <div className={s.contacts}>
        <div className={s.contact__item}>

          <div className={s['top__contact-item']}>
            <h2 className={s['title__contact-item']}>Контакты</h2>
            <div className='page-line'></div>
          </div>

          <div className={s['bottom__contact-item']}>

            <div className={s['box__contact-bottom']}>
              <a className={s['form__contact-box']} onClick={() => {setModalActive(true)}}>Станьте клиентом
                <span className="material-icons">
                  arrow_forward
                </span>
              </a>
            </div>
            
            <div className={s['items__contact-text']}>

              {
                contacts.map ((contact) => {
                  return (
                    <div className={s['item__contact-text']} key={contact.id}>
                      <i className={'material-icons' + ' ' + s['icon-location']}>location_on</i>
                      <div className={s['block__contact-text']}>
                        <h3>{contact.city}</h3>
                        <a href={'tel:' + contact.phone}>{contact.phone}</a>
                        <a href={'mailto:' + contact.mail}>{contact.mail}</a>
                      </div>
                    </div>
                  )
                })
              }
              

            </div>

          </div>

        </div>
      </div>
      <Form active={modalActive} setActive={setModalActive} />
    </section>
  )
}

export default MainContacts