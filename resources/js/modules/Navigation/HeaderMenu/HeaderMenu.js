import React from 'react';
import s from "./HeaderMenu.module.scss";

const HeaderMenu = ({items, active, setActive}) => {
  return (
    <div className={active ? s["menu"] + ' ' + s["is-open"] : s["menu"]} onClick={() => setActive(false)}>
      <div className={s["menu__overflow"]}>
        <div className={s["menu__in"]} onClick={e => e.stopPropagation()}>
          <div className="container">
              <div className={s["menu__body"]}>
                <nav className={s["nav"]}>
                  <ul>
                  {
                    items.map ((item, index) => {
                      return (
                        <li key={index} className={s[""]}>
                          <a href={'/#' + item.href} onClick={() => setActive(false)}>{item.value}</a>
                        </li>
                      )
                    })
                  }
                  </ul>
                </nav>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMenu