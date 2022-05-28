import React, {useState} from 'react';
import MainTitleVideo from './components/MainTitleVideo';
import MainUslugi from './components/MainUslugi';
import MainWork from './components/MainWork';
import MainDecision from './components/MainDecision';
import MainContacts from './components/MainContacts';


const Main = () => {
  return (
    <>
      <MainTitleVideo />
      <MainUslugi />
      <MainWork />
      <MainDecision />
      <MainContacts />
    </>
  )
}

export default Main