import React from 'react';
import { useForm } from "react-hook-form";
import s from './PoupStyle.module.scss'
import axios from 'axios'

const PopupAlert = ({active, setActive}) => {
  const token = document.head.querySelector('meta[name="csrf-token"]').content;

  const { 
    register,
    formState: {
      errors
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = (data) => {
    // alert (JSON.stringify(data));

    axios.post (document.location.protocol + '//' + document.location.host + '/submit/contact', data)
    .then((response) => {
      // console.log(response);
    })
    .catch((error) => {
      // console.log(error);
    });

    reset ();
  }

  return (
    <div className={ active ? s.popup + ' ' + s.is__open  :  s.popup} id={s["form-popup"]} >
      <div className={ active ? s.popup__overflow + ' ' + s.is__open : s.popup__overflow} onClick={e => e.stopPropagation()}>
          <div className={s["popup__in"]}>
              <div className="container">

                <div className={s["popup__top"]}>
                    <button className={s["popup__close"]} onClick={() => setActive(false)}>
                      <i className='material-icons'>close</i>
                    </button>
                </div>

                <div className={s["popup__body"]}>
                    <div className={s["form-box"]}>
                        <form className={s['']} action='/submit/contact' method='POST' onSubmit={handleSubmit(onSubmit)}>
                        <input type="hidden" name="_token" value={token} />
                            <div className={s['items__form-box']}>
                              <div className={s['top__form-box']}>
                                <div className={s['item__form-items']}>
                                  <div className={s['action__form-item']}>
                                    <label>
                                      <input
                                      {...register ('name', {
                                        required: 'Поле имя обязательно к заполнению',
                                      })} 
                                      className={s['input__form-action']} 
                                      placeholder='Ваше имя'
                                      />
                                      <div className={s['input__form-invalid']}>
                                        {errors?.name && <p>{errors?.name?.message || 'Это поле обязательно для заполнения'}</p>}
                                      </div>
                                    </label>
                                  </div>
                                </div>
                                
                                <div className={s['item__form-items']}>
                                  <div className={s['action__form-item']}>
                                    <input
                                      {...register ('company', {
                                        required: false,
                                      })} 
                                      className={s['input__form-action']} 
                                      placeholder='Компания'
                                    />
                                    <div className={s['input__form-invalid']}>
                                        {errors?.company && <p>{errors?.company?.message || 'Это поле обязательно для заполнения'}</p>}
                                    </div>
                                  </div>
                                </div>

                                <div className={s['item__form-items']}>
                                  <div className={s['action__form-item']}>
                                    <label>
                                      <input
                                      {...register ('phone', {
                                        required: 'Поле номер телефона обязательно к заполнению',
                                        minLength: {
                                          value: 12,
                                          message: "Минимальная длина номера телефона должна быть 10",
                                        },
                                      })} 
                                      className={s['input__form-action']} 
                                      placeholder='Номер телефона'
                                      />
                                      <div className={s['input__form-invalid']}>
                                        {errors?.phone && <p>{errors?.phone?.message || 'Это поле обязательно для заполнения'}</p>}
                                      </div>
                                    </label>
                                  </div>
                                </div>

                                <div className={s['item__form-items']}>
                                  <div className={s['action__form-item']}>
                                    <label>
                                      <input
                                      {...register ('email', {
                                        required: "Поле email обязательно к заполнению",
                                        pattern: {
                                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                          message: 'Поле email введено не верно'
                                        }
                                      })} 
                                      className={s['input__form-action']} 
                                      placeholder='e-mail'
                                      />
                                      <div className={s['input__form-invalid']}>
                                        {errors?.email && <p>{errors?.email?.message || 'Это поле обязательно для заполнения'}</p>}
                                      </div>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className={s['item__form-items']}>
                                <div className={s['action__form-item']}>
                                  <label>
                                    <textarea
                                      {...register ('message', {
                                        required: false,
                                      })} 
                                      className={s['input__form-action']} 
                                      placeholder='Сообщение'
                                    >
                                    </textarea>
                                    <div className={s['input__form-invalid']}>
                                        {errors?.message && <p>{errors?.message?.message || 'Это поле обязательно для заполнения'}</p>}
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                            
                            

                            <div className={s['action__form-box']}>
                              <button type="submit" className={s["btn__form-action"]}>
                                Отправить
                              </button>
                            </div>

                        </form>
                    </div>
                  </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default PopupAlert