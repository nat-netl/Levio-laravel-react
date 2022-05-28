import React, { useState } from 'react';
import s from "./Header.module.scss";
import logo from "../../../assets/images/logo-liveo.png";
import HeaderMenu from '../HeaderMenu/HeaderMenu';


const Header = () => {
  const [header, setHeader] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const items = [{value: "Услуги", href: "services"},{value: "Путь проекта", href: "work"},{value: "Решения", href: "decision"},{value: "Контакты", href: "contacts"},]

  const changeBackground = () => {
    if ( window.scrollY >= 100 ) {
      setHeader (true);
    } else {
      setHeader (false);
    }
  }

  window.addEventListener('scroll', changeBackground);
  return (
    <header className={header ? s.header + ' ' + s.active : s.header}>
      <div className='container'>
        <div className={s.header__nav}>

          <div className={s.header__col}>
            <div className={s['header__brand-list']}>
              <a className={s.header__brand} href='/'>
               <img className={s.header__logo} src={logo} alt='Logo'></img>
              </a>
            </div>
          </div>

          <div className={s.header__col}>

            <div className={s.header__contacts}>
              <ul className={s['nav__header-contacts']}>
                <li className={s['item__header-nav']}><a href="tel:+79999999999">+7 (999) 999-99-99</a></li>
                <li className={s['item__header-nav']}><a href="mailto:reply@mail.ru">reply@mail.ru</a></li>
              </ul>
            </div>

            <div className={s.header__menu}>
              <div className={s['header__action']}>
                <button data-menu-open="" className={s['header__btn']} onClick={() => setMenuActive(!menuActive)}>
                  <span className="material-icons">
                    menu
                  </span>
                </button>
              </div>

              <div className={s['lang__header-menu']}><a href='/#' className={s['switch__header-lang']}>EN</a></div>
            </div>

          </div>

          

        </div>
      </div>
      <HeaderMenu active={menuActive} setActive={setMenuActive} items={items}/>
    </header>
  )
}

export default Header