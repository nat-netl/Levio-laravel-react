import React, {useState} from "react";
import s from "./MainStyle.module.scss";
import crmPreview from '../../../assets/images/crm-preview.png';
import dizainPreview from '../../../assets/images/dizain-preview.png';
import seoPreview from '../../../assets/images/seo-preview.png';
import webDevPreview from '../../../assets/images/web-dev-preview.png';
import Form from '../../../modules/ContactForm/PopupAlert';

import "./../../../assets/css/template.scss";

const MainUslugi = () => {

  const [modalActive, setModalActive] = useState (false);

  const card = [
    { id: 0, 
      backgroundPhoto: {backgroundImage: `url( ${ webDevPreview } )`}, 
      title: "Разработка сайтов", 
      nav: ['- Сайт e-commerce', '- Веб приложение', '- Корпоративный сайт-портал', '- Лендинг PAGE'], 
      price: '100 000' 
    },
    { id: 1, 
      backgroundPhoto: {backgroundImage: `url(${ crmPreview })`}, 
      title: "Веб сервисы и CRM системы", 
      nav: ['- Ингетрация готовых CRM систем', '- Индивидуальная разработка CRM', '- Интегрирование различных API'], 
      price: '60 000' 
    },
    { id: 2, 
      backgroundPhoto: {backgroundImage: `url(${ dizainPreview })`}, 
      title: "Дизайн", 
      nav: ['- Исследования и аналитика', '- Интерфейсы'], 
      price: '80 000' 
    },
    { id: 3, 
      backgroundPhoto: {backgroundImage: `url(${ seoPreview })`}, 
      title: "Макркетинг", 
      nav: ['- Контекстная реклама', '- email-рассылки'], 
      price: '40 000' 
    },
  ];

  let cards = card.map(function (item, index) {
    let main = ( 
    <div className={s["item__services-items"]} key={index} onClick={() => {setModalActive(true)}}>
      <div className={s["item__services-header"]}>
        <p  className={s["photo__services-item"]} style={item.backgroundPhoto}></p>
        <p className={s["title__services-item"]}> {item.title} </p>
      </div>
      <div className={s["item__services-body"]}>
        <ul className={s["nav__sevices-item"]}>
          {
          item.nav.map (li => (
            <li className={s["item__services-nav"]}>{li}</li>
          ))
          }
        </ul>
      </div>
      
      

      <p className={s["price__services-item"]}>от {item.price} руб</p>
    </div>)
    return main;
  });

  return (
    
    <section className='section' id="services">
      <div className="container">
        <div>
          <h2 className={s.services__title}>Услуги</h2>
          
          <div className={s.section__services}>
            {cards}
          </div>
        </div>
      </div>
      <Form active={modalActive} setActive={setModalActive} />
    </section>
  );

};

export default MainUslugi;
