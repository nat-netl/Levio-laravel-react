import React from 'react';
import companyLogo from '../images/logo-liveo.png';
import s from '../../../src/modules/Navigation/Header/Header.module.scss';

interface Props {
  id: string;
}

export const GlobalImgSelector = ({ id }: Props) => {
  switch (id) {
    case 'header-logo':
      return (<img className={s.header__logo} src={companyLogo} alt='Logo'></img>);
    
    default:
      return null;
  }

}

