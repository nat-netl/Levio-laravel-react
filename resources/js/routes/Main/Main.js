import React, {useState} from 'react';
import MainTitleVideo from './components/MainTitleVideo';
import MainUslugi from './components/MainUslugi';
import MainWork from './components/MainWork';
import MainDecision from './components/MainDecision';
import MainContacts from './components/MainContacts';
import MainAboutUs from './components/MainAboutUs';


const Main = () => {
  return (
    <>
      <MainTitleVideo />
      <MainUslugi />
      <MainWork />
      <MainDecision />
      <MainAboutUs />
      <MainContacts />
    </>
  )
}

export default Main