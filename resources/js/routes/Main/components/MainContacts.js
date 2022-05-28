import React from 'react';
import s from './MainStyle.module.scss'
import './../../../assets/css/template.scss'

const MainContacts = () => {
  const contacts = [
    { id: 0, 
      city: "Набережные Челны", 
      phone: '+7 (999) 999-99-99', 
      mail: 'reply@mail.ru' 
    },
    { id: 1, 
      city: "Москва", 
      phone: '+7 (999) 999-99-99', 
      mail: 'reply@mail.ru' 
    },
    { id: 2, 
      city: "Санкт-Петербург", 
      phone: '+7 (999) 999-99-99', 
      mail: 'reply@mail.ru' 
    },
  ];

  return (
    <section className='section container' id='contacts'>
      <div className={s.contacts}>
        <div className={s.contact__item}>

          <div className={s['top__contact-item']}>
            <h2 className={s['title__contact-item']}>Контакты</h2>
            <div className='page-line'></div>
          </div>

          <div className={s['bottom__contact-item']}>

            <div className={s['box__contact-bottom']}></div>
            
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
    </section>
  )
}

export default MainContacts