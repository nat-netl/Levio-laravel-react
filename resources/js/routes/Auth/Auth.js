import React, {useState } from 'react';
import s from './AuthStyle.module.scss'
import { useForm } from "react-hook-form";
import {AuthUser} from '../../actions/userAuth'

const Auth = () => {
  const token = document.head.querySelector('meta[name="csrf-token"]').content;

  const {http} = AuthUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitForm = () => {
    // console.log (email + ' ... ' + password)

    http.post('/login', {email:email, password:password}).then((res) => {
      console.log (res.data);
    })

  }
  
  const onSubmit = (data) => {
    // alert (JSON.stringify(data.email));

   
    reset ();
  }

  return (
    <div className={s.popup} id={s["form-popup"]} >
      <div className={s.popup__overflow} >
        <div className={s["popup__in"]}>
          <div className={s.auth__form}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
            {/* <form className={s['']}> */}
              {/* <input type="hidden" name="_token" value={token} /> */}
                <div className={s['items__form-box']}>
                  
                  <div className={s['top__form-box']}>
                    <div className={s['item__form-items']}>
                      <div className={s['action__form-item']}>
                        <label>
                          {/* <input
                          {...register ('email', {
                            required: "Поле email обязательно к заполнению",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Поле email введено не верно'
                            }
                          })} 
                          className={s['input__form-action']} 
                          placeholder='e-mail'
                          onChange={this.handleEmailChange}
                          />
                          <div className={s['input__form-invalid']}>
                            {errors?.email && <p>{errors?.email?.message || 'Это поле обязательно для заполнения'}</p>}
                          </div> */}
                          <input
                          className={s['input__form-action']} 
                          placeholder='e-mail'
                          type='email'
                          onChange={e => setEmail(e.target.value)}
                          value={email}
                          />
                        </label>
                      </div>
                    </div>
                    
                    <div className={s['item__form-items']}>
                      <div className={s['action__form-item']}>
                        {/* <input
                          {...register ('password', {
                            required: 'Поле пароль обязательно к заполнению',
                          })} 
                          className={s['input__form-action']} 
                          placeholder='Пароль'
                          onChange={this.handlePasswordChange}
                        />
                        <div className={s['input__form-invalid']}>
                          {errors?.password && <p>{errors?.password?.message || 'Это поле обязательно для заполнения'}</p>}
                        </div> */}

                        <input 
                        className={s['input__form-action']} 
                        placeholder='Пароль'
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        />
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
                
                <div className={s['action__form-box']}>
                  <button type="button" className={s["btn__form-action"]} onClick={submitForm()}>
                    Отправить
                  </button>
                </div>
            {/* </form> */}

            
          </div>
          
          <div className={s.auth__video}>
              <video autoPlay muted loop className={s['item__video-auth']}>
                <source src='/video/title-video.mp4' type='video/mp4'></source>
              </video>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Auth